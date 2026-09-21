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

https://github.com/user-attachments/assets/dc9601b0-5a6a-4b9a-8003-afe046edb079

### TwinSight

**Trial 1**



https://github.com/user-attachments/assets/7afb300d-102f-4d7e-aa18-9d8f285c9d02



**Trial 2**



https://github.com/user-attachments/assets/a0c6b773-d10b-45d1-a5bf-cdf6513b1f6e



**Trial 3**



https://github.com/user-attachments/assets/2bef9c85-c4e6-4785-93ea-23f6d1c5a98a


---

## TODO

* [ ] Release the paper
* [ ] Release the code
