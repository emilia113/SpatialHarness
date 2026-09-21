<h1 align="center">TwinSight: From Manipulation Intent to Physical Action through Spatial Context</h1>

<p align="center">
Jiayu Wang<sup>1</sup>&nbsp;&nbsp;
<a href="https://github.com/Yue-105">Yue Yu</a><sup>1</sup>&nbsp;&nbsp;
Bin Zhu<sup>2</sup>&nbsp;&nbsp;
Zhiyao Yang<sup>1</sup>&nbsp;&nbsp;
<a href="https://jingjing1.github.io/">Jingjing Chen</a><sup>1†</sup>
</p>

<p align="center">
<sup>1</sup><a href="https://cs.fudan.edu.cn/">Institute of Trustworthy Embodied AI</a>, 
<a href="https://www.fudan.edu.cn/">Fudan University</a><br>
<sup>2</sup>Singapore Management University
</p>



General-purpose robot models can understand task goals and high-level manipulation intent. However, without expert demonstrations, a key challenge in zero-shot robotic manipulation is how to translate such intent into concrete physical actions that are appropriate for the current environment. Our core observation is that this process depends not only on the model's general manipulation knowledge, but also on the spatial context available at deployment time. Richer and more task-relevant spatial information helps the model better apply its knowledge to the current physical scene. In our experiments, this leads to more accurate action execution and higher task success rates.

Motivated by this observation, we introduce **TwinSight**, a framework that constructs a simulation twin of the current environment from scratch during test and keeps it spatially synchronized with the real scene as the task progresses. The simulation twin provides complementary multi-view observations to the robot model throughout execution. We further introduce a task-aware view selection algorithm that allows the model to actively select observation viewpoints according to its current manipulation needs. These views provide clearer spatial information about robot–object and object–object relationships, helping the model more reliably translate high-level manipulation intent into concrete physical actions.

**Paper and code coming soon.**

---

## Demo

### Baseline

<p align="center">
  <video src="https://github.com/user-attachments/assets/dc9601b0-5a6a-4b9a-8003-afe046edb079" width="720" controls></video>
</p>

### TwinSight

<p align="center"><b>Trial 1</b></p>
<p align="center">
  <video src="[TWINSIGHT_VIDEO_1_URL](https://github.com/user-attachments/assets/98217b2c-6769-4959-8a8d-40f61e2292f3)" width="720" controls></video>
</p>

<p align="center"><b>Trial 2</b></p>
<p align="center">
  <video src="[TWINSIGHT_VIDEO_2_URL](https://github.com/user-attachments/assets/b53b99b2-5615-4db0-af62-fdb41eab1cef)" width="720" controls></video>
</p>

<p align="center"><b>Trial 3</b></p>
<p align="center">
  <video src="[TWINSIGHT_VIDEO_3_URL](https://github.com/user-attachments/assets/309f1e84-61fc-48f2-90e2-5d4575c8cd22)" width="720" controls></video>
</p>

---

## TODO

* [ ] Release the paper
* [ ] Release the code
