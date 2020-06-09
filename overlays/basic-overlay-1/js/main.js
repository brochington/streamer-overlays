import SquiggleBox from "./SquiggleBox.js";
import { wait } from "./utils/general.js";
import { randomColor } from './utils/color.js';

const container = document.getElementById("container");
const followNotificationTmpl = document.getElementById(
  "follow-notification-template"
);

let boxes = []; // functions;

function startWSServer() {
  const ws = new WebSocket("ws://lit-beach-71712.herokuapp.com");
  // const ws = new WebSocket("ws://localhost:9123");

  ws.addEventListener("open", () => {
    ws.send("Hello from the client!");
  });

  ws.addEventListener("message", (event) => {
    console.log("message from server:", event);

    try {
      const { type, data } = JSON.parse(event.data);
  
      switch (type) {
        case 'connection':
          console.log('backend is connected');
          break;
        case 'follow': 
          console.log('got new follower!!', data)
          queueFollowerNotification(data);
          break;
        default:
          break;
      }
    } catch (err) {
      // swallow this for now.
    }

  });

  return ws;
}

let followQueue = [];

async function notifyOfFollower(name) {
  const tmpl = followNotificationTmpl.content.cloneNode(true);
  const notification = tmpl.querySelector(".follow-notification");
  const bgdContainer = tmpl.querySelector(
    ".follow-notification .bgd-container"
  );
  const follower = tmpl.querySelector(".follower-name");

  follower.textContent = name;

  const bgdBox = new SquiggleBox(500, 250, bgdContainer)
    .fill(randomColor())
    .fillWeight(17)
    .padding(20)
    .stroke(randomColor())
    .start();

  boxes.push(bgdBox);

  notification.style.opacity = 0;

  container.appendChild(tmpl);

  await wait(1);
  notification.style.opacity = 1;

  await wait(2001);
  notification.style.opacity = 0;

  await wait(2001);
  notification.remove();

  boxes = boxes.filter((b) => b !== bgdBox);
}

async function processQueue() {
  await notifyOfFollower(followQueue[0]);
  followQueue.shift();
  if (followQueue.length > 0) {
    processQueue();
  }
}

function queueFollowerNotification(newFollowers) {
  newFollowers.forEach(follower => {
    followQueue.push(follower.from_name);
  })

  if (followQueue.length === 1) {
    processQueue();
  }
}

(function main() {
  const ws = startWSServer();

  const videoBox = new SquiggleBox(
    375,
    295,
    document.getElementById("video-container")
  ).start();

  boxes.push(videoBox);

  const twitterBox = new SquiggleBox(
    330,
    80,
    document.getElementById("social-info")
  )
    .padding(10)
    .strokeWidth(2)
    .fill("#1DA1F2")
    .fillStyle("zigzag")
    .fillWeight(7)
    .start();

  boxes.push(twitterBox);
})();
