# TwinSight: From Manipulation Intent to Physical Action through Spatial Context

General-purpose robot models can understand task goals and high-level manipulation intent. However, without expert demonstrations, a key challenge in zero-shot robotic manipulation is how to translate such intent into concrete physical actions that are appropriate for the current environment.

Our core observation is that this process depends not only on the model's general manipulation knowledge, but also on the spatial context available at deployment time. Richer and more task-relevant spatial information helps the model better apply its knowledge to the current physical scene. In our experiments, this leads to more accurate action execution and higher task success rates.

Motivated by this observation, we introduce **TwinSight**, a framework that constructs a simulation twin of the current environment from scratch during test and keeps it spatially synchronized with the real scene as the task progresses. The simulation twin provides complementary multi-view observations to the robot model throughout execution. We further introduce a **task-aware view selection algorithm** that allows the model to actively select observation viewpoints according to its current manipulation needs. These views provide clearer spatial information about robot–object and object–object relationships, helping the model more reliably translate high-level manipulation intent into concrete physical actions.

**Paper and code coming soon.**

---

## Demo

### Baseline

<p align="center">
  <video src="BASELINE_VIDEO_URL" width="720" controls></video>
</p>

### TwinSight

<p align="center"><b>Trial 1</b></p>
<p align="center">
  <video src="TWINSIGHT_VIDEO_1_URL" width="720" controls></video>
</p>

<p align="center"><b>Trial 2</b></p>
<p align="center">
  <video src="TWINSIGHT_VIDEO_2_URL" width="720" controls></video>
</p>

<p align="center"><b>Trial 3</b></p>
<p align="center">
  <video src="TWINSIGHT_VIDEO_3_URL" width="720" controls></video>
</p>

---

## TODO

* [ ] Release the paper
* [ ] Release the code
