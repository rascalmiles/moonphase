let video;
let poseNet;
let poses = [];
let noseX = 0;
let noseY = 0;
let eyelX = 0;
let eyelY = 0;
let wristlX = 0;
let wristlY = 0;
let wristrX = 0;
let wristrY = 0;
let shoulderlX = 0;
let shoulderlY = 0;
let shoulderrX = 0;
let shoulderrY = 0;
let elbowlX = 0;
let elbowlY = 0;
let elbowrX = 0;
let elbowrY = 0;


function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.hide();
  console.log(ml5);
  poseNet = ml5.poseNet(video, modelReady);
  poseNet.on('pose', gotPoses );
//   poseNet.on('pose', (results) => {
//   console.log(results);
// });
}

function gotPoses(poses) {
  console.log(poses);
  if (poses.length > 0) {
  let nX = poses[0].pose.keypoints[0].position.x;
  let nY = poses[0].pose.keypoints[0].position.y;
  let eX = poses[0].pose.keypoints[1].position.x;
  let eY = poses[0].pose.keypoints[1].position.y;
  let wlX = poses[0].pose.keypoints[9].position.x;
  let wlY = poses[0].pose.keypoints[9].position.y;
  let wrX = poses[0].pose.keypoints[10].position.x;
  let wrY = poses[0].pose.keypoints[10].position.y;
  let slX = poses[0].pose.keypoints[5].position.x;
  let slY = poses[0].pose.keypoints[5].position.y;
  let srX = poses[0].pose.keypoints[6].position.x;
  let srY = poses[0].pose.keypoints[6].position.y;
  let bowlX = poses[0].pose.keypoints[7].position.x;
  let bowlY = poses[0].pose.keypoints[7].position.y;
  let bowrX = poses[0].pose.keypoints[8].position.x;
  let bowrY = poses[0].pose.keypoints[8].position.y;
  noseX = lerp(noseX, nX, 0.8);
  noseY = lerp(noseY, nY, 0.8);
  eyelX = lerp(eyelX, eX, 0.8);
  eyelY = lerp(eyelY, eY, 0.8);
  wristlX = lerp(wristlX, wlX, 0.9);
  wristlY = lerp(wristlY, wlY, 0.9);
  wristrX = lerp(wristrX, wrX, 0.9);
  wristrY = lerp(wristrY, wrY, 0.9);
  shoulderlX = lerp(shoulderlX, slX, 0.8);
  shoulderlY = lerp(shoulderlY, slY, 0.8);
  shoulderrX = lerp(shoulderrX, srX, 0.8);
  shoulderrY = lerp(shoulderrY, srY, 0.8);
  elbowlX = lerp(elbowlX, bowlX, 0.8);
  elbowlY = lerp(elbowlY, bowlY, 0.8);
  elbowrX = lerp(elbowrX, bowrX, 0.8);
  elbowrY = lerp(elbowrY, bowrY, 0.8);
  }
}

function modelReady() {
  console.log('modelReady');
}
 
function draw() {
  background(220);
  image(video, 0, 0);
  // tint(0, 153, 204, 126);
  let d = dist(noseX, noseY, eyelX, eyelY);
  // filter(THRESHOLD);
  // fill(0, 0, 0);
  // ellipse(noseX, noseY, d);
  line(noseX, (noseY- (3 * d)), noseX, 0);
  // fill(255, 255, 255);
  // ellipse(eyelX, eyelY, 50);
  fill('rgba(0,255,0, 0.25)');
  strokeWeight(d/4);
  line(wristlX, wristlY, wristlX, 0);
  line(wristrX, wristrY, wristrX, 0);
  line(shoulderlX, (shoulderlY- d), shoulderlX, 0);
  line(shoulderrX, (shoulderrY- d), shoulderrX, 0);
  line(elbowlX, (elbowlY- d), elbowlX, 0);
  line(elbowrX, (elbowrY- d), elbowrX, 0);
  tint(0, 153, 204, 255);
}