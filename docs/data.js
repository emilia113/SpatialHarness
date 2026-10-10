window.SPATIALHARNESS = {
  "displayRunsPerGroup": 6,
  "codeUrl": "https://github.com/emilia113/SpatialHarness",
  "codeStatus": "coming_soon",
  "overviewVideo": "assets/videos/overview.mp4",
  "overviewPoster": "assets/posters/overview.jpg",
  "methods": {
    "baseline": {
      "name": "Baseline",
      "model": "GPT-6 Astra · low reasoning effort",
      "observations": "Wrist RGB + fixed external RGB"
    },
    "ours": {
      "name": "SpatialHarness",
      "model": "GPT-6 Astra · low reasoning effort",
      "observations": "Wrist and fixed external RGB + two virtual RGB views"
    }
  },
  "tasks": {
    "stack": {
      "name": "Block stacking",
      "criterion": "Grasp the yellow block and stack it stably on the green block, keeping the green block in place.",
      "methods": {
        "baseline": {
          "successes": 7,
          "total": 15,
          "executableSteps": {
            "value": 20,
            "label": "20 steps",
            "source": "author_confirmation_2026-10-10"
          },
          "runs": [
            {
              "label": "Run 01",
              "outcome": "success",
              "originalRun": "20260922T054815Z-stack_block_no_demo-650fe38a",
              "video": "assets/videos/stack-baseline-01.mp4",
              "poster": "assets/posters/stack-baseline-01.jpg",
              "ready": true
            },
            {
              "label": "Run 02",
              "outcome": "success",
              "originalRun": "20260922T055444Z-stack_block_no_demo-9a6d42d5",
              "video": "assets/videos/stack-baseline-02.mp4",
              "poster": "assets/posters/stack-baseline-02.jpg",
              "ready": true
            },
            {
              "label": "Run 03",
              "outcome": "failure",
              "originalRun": "20260922T060903Z-stack_block_no_demo-4f936953",
              "video": "assets/videos/stack-baseline-03.mp4",
              "poster": "assets/posters/stack-baseline-03.jpg",
              "ready": true
            },
            {
              "label": "Run 04",
              "outcome": "failure",
              "originalRun": "20260922T064741Z-stack_block_no_demo-ba31c8b9",
              "video": "assets/videos/stack-baseline-04.mp4",
              "poster": "assets/posters/stack-baseline-04.jpg",
              "ready": true
            },
            {
              "label": "Run 05",
              "outcome": "success",
              "originalRun": "20260922T055932Z-stack_block_no_demo-c6da4713",
              "video": "assets/videos/stack-baseline-05.mp4",
              "poster": "assets/posters/stack-baseline-05.jpg",
              "ready": true
            },
            {
              "label": "Run 06",
              "outcome": "failure",
              "originalRun": "20260922T065850Z-stack_block_no_demo-96363c98",
              "video": "assets/videos/stack-baseline-06.mp4",
              "poster": "assets/posters/stack-baseline-06.jpg",
              "ready": true
            }
          ]
        },
        "ours": {
          "successes": 15,
          "total": 15,
          "executableSteps": {
            "value": 20,
            "label": "20 steps",
            "source": "author_confirmation_2026-10-10"
          },
          "runs": [
            {
              "label": "Run 01",
              "outcome": "success",
              "originalRun": "20260921T131541Z-stack_block_physical_twin-d004ed01",
              "video": "assets/videos/stack-ours-01.mp4",
              "poster": "assets/posters/stack-ours-01.jpg",
              "ready": true
            },
            {
              "label": "Run 02",
              "outcome": "success",
              "originalRun": "20260922T093736Z-stack_block_physical_twin-f97284ec",
              "video": "assets/videos/stack-ours-02.mp4",
              "poster": "assets/posters/stack-ours-02.jpg",
              "ready": true
            },
            {
              "label": "Run 03",
              "outcome": "success",
              "originalRun": "20260922T095522Z-stack_block_physical_twin-27513004",
              "video": "assets/videos/stack-ours-03.mp4",
              "poster": "assets/posters/stack-ours-03.jpg",
              "ready": true
            },
            {
              "label": "Run 04",
              "outcome": "success",
              "originalRun": "20260922T130043Z-stack_block_physical_twin-94961b77",
              "video": "assets/videos/stack-ours-04.mp4",
              "poster": "assets/posters/stack-ours-04.jpg",
              "ready": true
            },
            {
              "label": "Run 05",
              "outcome": "success",
              "originalRun": "20260922T131041Z-stack_block_physical_twin-fb996252",
              "video": "assets/videos/stack-ours-05.mp4",
              "poster": "assets/posters/stack-ours-05.jpg",
              "ready": true
            },
            {
              "label": "Run 06",
              "outcome": "success",
              "originalRun": "20260922T132030Z-stack_block_physical_twin-57f25c00",
              "video": "assets/videos/stack-ours-06.mp4",
              "poster": "assets/posters/stack-ours-06.jpg",
              "ready": true
            }
          ]
        }
      }
    },
    "plug": {
      "name": "Plug insertion",
      "criterion": "Align the plug with the matching socket, insert it, and maintain the grasp after insertion.",
      "methods": {
        "baseline": {
          "successes": 4,
          "total": 15,
          "executableSteps": {
            "value": 20,
            "label": "20 steps",
            "source": "author_confirmation_2026-10-10"
          },
          "runs": [
            {
              "label": "Run 01",
              "outcome": "success",
              "originalRun": "20260924T123512Z-plug_in_socket_baseline-b2af825c",
              "video": "assets/videos/plug-baseline-01.mp4",
              "poster": "assets/posters/plug-baseline-01.jpg",
              "ready": true
            },
            {
              "label": "Run 02",
              "outcome": "failure",
              "originalRun": "20260924T085751Z-plug_in_socket_baseline-c50eba61",
              "video": "assets/videos/plug-baseline-02.mp4",
              "poster": "assets/posters/plug-baseline-02.jpg",
              "ready": true
            },
            {
              "label": "Run 03",
              "outcome": "failure",
              "originalRun": "20260924T123003Z-plug_in_socket_baseline-c62244d2",
              "video": "assets/videos/plug-baseline-03.mp4",
              "poster": "assets/posters/plug-baseline-03.jpg",
              "ready": true
            },
            {
              "label": "Run 04",
              "outcome": "failure",
              "originalRun": "20260924T123904Z-plug_in_socket_baseline-1ab0689a",
              "video": "assets/videos/plug-baseline-04.mp4",
              "poster": "assets/posters/plug-baseline-04.jpg",
              "ready": true
            },
            {
              "label": "Run 05",
              "outcome": "success",
              "originalRun": "20260924T130741Z-plug_in_socket_baseline-7647159b",
              "video": "assets/videos/plug-baseline-05.mp4",
              "poster": "assets/posters/plug-baseline-05.jpg",
              "ready": true
            },
            {
              "label": "Run 06",
              "outcome": "failure",
              "originalRun": "20260924T125439Z-plug_in_socket_baseline-6e624135",
              "video": "assets/videos/plug-baseline-06.mp4",
              "poster": "assets/posters/plug-baseline-06.jpg",
              "ready": true
            }
          ]
        },
        "ours": {
          "successes": 10,
          "total": 15,
          "executableSteps": {
            "value": 20,
            "label": "20 steps",
            "source": "author_confirmation_2026-10-10"
          },
          "runs": [
            {
              "label": "Run 01",
              "outcome": "success",
              "originalRun": "20260924T100201Z-plug_in_socket_cad-8551706f",
              "video": "assets/videos/plug-ours-01.mp4",
              "poster": "assets/posters/plug-ours-01.jpg",
              "ready": true
            },
            {
              "label": "Run 02",
              "outcome": "success",
              "originalRun": "20260924T102707Z-plug_in_socket_cad-ea3a50a6",
              "video": "assets/videos/plug-ours-02.mp4",
              "poster": "assets/posters/plug-ours-02.jpg",
              "ready": true
            },
            {
              "label": "Run 03",
              "outcome": "success",
              "originalRun": "20260924T103438Z-plug_in_socket_cad-11bfba32",
              "video": "assets/videos/plug-ours-03.mp4",
              "poster": "assets/posters/plug-ours-03.jpg",
              "ready": true
            },
            {
              "label": "Run 04",
              "outcome": "failure",
              "originalRun": "20260924T110756Z-plug_in_socket_cad-05d031ce",
              "video": "assets/videos/plug-ours-04.mp4",
              "poster": "assets/posters/plug-ours-04.jpg",
              "ready": true
            },
            {
              "label": "Run 05",
              "outcome": "success",
              "originalRun": "20260924T104219Z-plug_in_socket_cad-76c14667",
              "video": "assets/videos/plug-ours-05.mp4",
              "poster": "assets/posters/plug-ours-05.jpg",
              "ready": true
            },
            {
              "label": "Run 06",
              "outcome": "failure",
              "originalRun": "20260924T112737Z-plug_in_socket_cad-e91d2d78",
              "video": "assets/videos/plug-ours-06.mp4",
              "poster": "assets/posters/plug-ours-06.jpg",
              "ready": true
            }
          ]
        }
      }
    },
    "hanoi": {
      "name": "Tower of Hanoi",
      "criterion": "Grasp the blue object, align its central hole with the target peg, and place it over the peg.",
      "methods": {
        "baseline": {
          "successes": 0,
          "total": 15,
          "executableSteps": {
            "value": 20,
            "label": "20 steps",
            "source": "author_confirmation_2026-10-10"
          },
          "runs": [
            {
              "label": "Run 01",
              "outcome": "failure",
              "originalRun": "20260927T040710Z-hanoi_square_prism_baseline-51c1c9e3",
              "video": "assets/videos/hanoi-baseline-01.mp4",
              "poster": "assets/posters/hanoi-baseline-01.jpg",
              "ready": true
            },
            {
              "label": "Run 02",
              "outcome": "failure",
              "originalRun": "20260927T041602Z-hanoi_square_prism_baseline-c182ea64",
              "video": "assets/videos/hanoi-baseline-02.mp4",
              "poster": "assets/posters/hanoi-baseline-02.jpg",
              "ready": true
            },
            {
              "label": "Run 03",
              "outcome": "failure",
              "originalRun": "20260927T042124Z-hanoi_square_prism_baseline-2e27ffea",
              "video": "assets/videos/hanoi-baseline-03.mp4",
              "poster": "assets/posters/hanoi-baseline-03.jpg",
              "ready": true
            },
            {
              "label": "Run 04",
              "outcome": "failure",
              "originalRun": "20260927T043322Z-hanoi_square_prism_baseline-61e286bf",
              "video": "assets/videos/hanoi-baseline-04.mp4",
              "poster": "assets/posters/hanoi-baseline-04.jpg",
              "ready": true
            },
            {
              "label": "Run 05",
              "outcome": "failure",
              "originalRun": "20260927T044131Z-hanoi_square_prism_baseline-8935404d",
              "video": "assets/videos/hanoi-baseline-05.mp4",
              "poster": "assets/posters/hanoi-baseline-05.jpg",
              "ready": true
            },
            {
              "label": "Run 06",
              "outcome": "failure",
              "originalRun": "20260927T044854Z-hanoi_square_prism_baseline-fa3f7cad",
              "video": "assets/videos/hanoi-baseline-06.mp4",
              "poster": "assets/posters/hanoi-baseline-06.jpg",
              "ready": true
            }
          ]
        },
        "ours": {
          "successes": 15,
          "total": 15,
          "executableSteps": {
            "value": 20,
            "label": "20 steps",
            "source": "author_confirmation_2026-10-10"
          },
          "runs": [
            {
              "label": "Run 01",
              "outcome": "success",
              "originalRun": "20260926T223816Z-hanoi_square_prism_ours-fb4d54ac",
              "video": "assets/videos/hanoi-ours-01.mp4",
              "poster": "assets/posters/hanoi-ours-01.jpg",
              "ready": true
            },
            {
              "label": "Run 02",
              "outcome": "success",
              "originalRun": "20260926T224738Z-hanoi_square_prism_ours-807a16bb",
              "video": "assets/videos/hanoi-ours-02.mp4",
              "poster": "assets/posters/hanoi-ours-02.jpg",
              "ready": true
            },
            {
              "label": "Run 03",
              "outcome": "success",
              "originalRun": "20260926T225423Z-hanoi_square_prism_ours-2019d45e",
              "video": "assets/videos/hanoi-ours-03.mp4",
              "poster": "assets/posters/hanoi-ours-03.jpg",
              "ready": true
            },
            {
              "label": "Run 04",
              "outcome": "success",
              "originalRun": "20260926T230408Z-hanoi_square_prism_ours-f46e40c5",
              "video": "assets/videos/hanoi-ours-04.mp4",
              "poster": "assets/posters/hanoi-ours-04.jpg",
              "ready": true
            },
            {
              "label": "Run 05",
              "outcome": "success",
              "originalRun": "20260926T231206Z-hanoi_square_prism_ours-497f1048",
              "video": "assets/videos/hanoi-ours-05.mp4",
              "poster": "assets/posters/hanoi-ours-05.jpg",
              "ready": true
            },
            {
              "label": "Run 06",
              "outcome": "success",
              "originalRun": "20260926T232925Z-hanoi_square_prism_ours-d069b22a",
              "video": "assets/videos/hanoi-ours-06.mp4",
              "poster": "assets/posters/hanoi-ours-06.jpg",
              "ready": true
            }
          ]
        }
      }
    },
    "drawer": {
      "name": "Block in drawer",
      "criterion": "Open the drawer and place the yellow block inside, keeping the cabinet in place.",
      "methods": {
        "baseline": {
          "successes": 0,
          "total": 15,
          "executableSteps": {
            "value": 20,
            "label": "20 steps",
            "source": "author_confirmation_2026-10-10"
          },
          "runs": [
            {
              "label": "Run 01",
              "outcome": "failure",
              "originalRun": "20260928T030847Z-block_in_drawer_baseline-fa3ec73f",
              "video": "assets/videos/drawer-baseline-01.mp4",
              "poster": "assets/posters/drawer-baseline-01.jpg",
              "ready": true
            },
            {
              "label": "Run 02",
              "outcome": "failure",
              "originalRun": "20260929T132947Z-block_in_drawer_baseline-7c6dc587",
              "video": "assets/videos/drawer-baseline-02.mp4",
              "poster": "assets/posters/drawer-baseline-02.jpg",
              "ready": true
            },
            {
              "label": "Run 03",
              "outcome": "failure",
              "originalRun": "20260929T133614Z-block_in_drawer_baseline-f6ac39d3",
              "video": "assets/videos/drawer-baseline-03.mp4",
              "poster": "assets/posters/drawer-baseline-03.jpg",
              "ready": true
            },
            {
              "label": "Run 04",
              "outcome": "failure",
              "originalRun": "20260929T134538Z-block_in_drawer_baseline-e1d0091a",
              "video": "assets/videos/drawer-baseline-04.mp4",
              "poster": "assets/posters/drawer-baseline-04.jpg",
              "ready": true
            },
            {
              "label": "Run 05",
              "outcome": "failure",
              "originalRun": "20260929T135315Z-block_in_drawer_baseline-ff50e858",
              "video": "assets/videos/drawer-baseline-05.mp4",
              "poster": "assets/posters/drawer-baseline-05.jpg",
              "ready": true
            },
            {
              "label": "Run 06",
              "outcome": "failure",
              "originalRun": "20260929T140500Z-block_in_drawer_baseline-37df3728",
              "video": "assets/videos/drawer-baseline-06.mp4",
              "poster": "assets/posters/drawer-baseline-06.jpg",
              "ready": true
            }
          ]
        },
        "ours": {
          "successes": 10,
          "total": 15,
          "executableSteps": {
            "value": 20,
            "label": "20 steps",
            "source": "author_confirmation_2026-10-10"
          },
          "runs": [
            {
              "label": "Run 01",
              "outcome": "success",
              "originalRun": "20260928T021935Z-block_in_drawer_ours-41a214a8",
              "video": "assets/videos/drawer-ours-01.mp4",
              "poster": "assets/posters/drawer-ours-01.jpg",
              "ready": true
            },
            {
              "label": "Run 02",
              "outcome": "success",
              "originalRun": "20260928T031747Z-block_in_drawer_ours-b7c1b45a",
              "video": "assets/videos/drawer-ours-02.mp4",
              "poster": "assets/posters/drawer-ours-02.jpg",
              "ready": true
            },
            {
              "label": "Run 03",
              "outcome": "success",
              "originalRun": "20260928T035643Z-block_in_drawer_ours-89c75c5e",
              "video": "assets/videos/drawer-ours-03.mp4",
              "poster": "assets/posters/drawer-ours-03.jpg",
              "ready": true
            },
            {
              "label": "Run 04",
              "outcome": "failure",
              "originalRun": "20260928T034315Z-block_in_drawer_ours-e7870286",
              "video": "assets/videos/drawer-ours-04.mp4",
              "poster": "assets/posters/drawer-ours-04.jpg",
              "ready": true
            },
            {
              "label": "Run 05",
              "outcome": "success",
              "originalRun": "20260928T040925Z-block_in_drawer_ours-c741251c",
              "video": "assets/videos/drawer-ours-05.mp4",
              "poster": "assets/posters/drawer-ours-05.jpg",
              "ready": true
            },
            {
              "label": "Run 06",
              "outcome": "failure",
              "originalRun": "20260928T100008Z-block_in_drawer_ours-7b025c38",
              "video": "assets/videos/drawer-ours-06.mp4",
              "poster": "assets/posters/drawer-ours-06.jpg",
              "ready": true
            }
          ]
        }
      }
    }
  }
};
