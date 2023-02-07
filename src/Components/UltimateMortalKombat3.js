import React from 'react';
// https://legacy.mortalkombatonline.com/content/games/umk3/kitana/

const UltimateMortalKombat3 = () => {
  const characters = [
    {
      name: "kitana",
      title: "Kitana",
      text: 'Kitana is accused of treason by the High Courts of the Outworld after murdering her evil twin Mileena. Shao Kahn takes it upon himself to appoint a group of warriors specifically to catch his daughter and bring her back alive. But Kitana must find a way to reach the newly crowned Queen Sindel first and warn her of their true past.',
      combo: {
        "Special Moves": [
          { "Fan Throw": "Forward, Forward, High Punch + Low Punch" },
          { "Fan Lift": "Back, Back, Back, High Punch" },
          { "Square Wave Punch": "Down, Back, High Punch" }
        ],
        "Basic Combos": [
          { "Combo 1": "High Kick, High Kick, Low Kick, Back + High Kick" },
          { "Combo 2": "High Punch, High Punch, Back + Low Punch, Down + Low Punch" },
        ],
        "Finishing Moves": [
          { "Fatality 1": "(Close) Run, Run, Block, Block, Low Kick" },
          { "Fatality 2": "(Close) Back, Down, Forward, Forward, High Kick" },
          { "Animality": "(Sweep) Down, Down, Down, Down, Run" },
          { "Babality": "Forward, Forward, Down, Forward, High Kick" },
          { "Friendship": "Down, Back, Forward, Forward, Low Punch" },
          { "Stage Fatalities": "Forward, Down, Down, Low Kick" },
          { "Brutality": "High Punch, High Punch, Block, High Kick, Block, Low Kick, Block, Low Punch, Block, High Punch, Block" }
        ]
      }
    },
    {
      name: "reptile",
      title: "Reptile",
      combo: {
        "Special Moves": [
          { "Acid Spit": "Forward, Forward, High Punch" },
          { "Slow Forceball": "Back, Back, High Punch + Low Punch" },
          { "Fast Forceball": "Forward, Forward, High Punch + Low Punch" },
          { "Slide": "Back + Low Punch + Block + Low Kick" },
          { "Invisibility": "(Use Block) Up, Up, Down, High Kick" },
          { "Reverse Elbow": "Back, Forward, Low Kick" },
        ],
        "Basic Combos": [
          { "Combo 1": "High Punch, High Punch, High Kick, Back + High Kick" },
          { "Combo 2": "High Punch, High Punch, Down + Low Punch" },
        ],
        "Finishing Moves": [
          { "Fatality 1": "(One Jump Away) Back, Forward, Down, Block" },
          { "Fatality 2": "(Sweep) Forward, Forward, Up, Up, High Kick" },
          { "Animality": "(Close) Down, Down, Down, Up, High Kick" },
          { "Babality": "Forward, Forward, Back, Down, Low Kick" },
          { "Friendship": "(Close) Down, Forward, Forward, Back, High Kick" },
          { "Stage Fatalities": "Block, Run, Block, Block" },
          { "Brutality": "High Punch, Block, High Kick, High Kick, Block, High Punch, Low Punch, Low Kick, Low Kick, Block, Block + Low Punch" }
        ]
      }
    },
    {
      name: "sonya",
      title: "Sonya",
      combo: {
        "Special Moves": [
          { "Ring Toss": "Down, Forward, Low Punch" },
          { "Leg Grab": "Down + Low Punch + Block" },
          { "Square Wave Punch": "Forward, Back, High Punch" },
          { "Rising Bicycle Kick": "Back, Back, Down, High Kick" }
        ],
        "Basic Combos": [
          { "Combo 1": "High Punch, High Punch, Low Punch, High Punch" },
          { "Combo 2": "High Kick, High Kick, Back + High Kick" },
          { "Combo 3": "High Kick, High Kick, High Punch, High Punch, Low Punch, Back + High Punch" }
        ],
        "Finishing Moves": [
          { "Fatality 1": "Back, Forward, Down, Down, Run" },
          { "Fatality 2": "(Hold Run + Block) Up, Up, Back, Down, (Release Run + Block)" },
          { "Animality": "(Hold Low Punch) Back, Forward, Down, Forward, (Release Low Punch)" },
          { "Babality": "Down, Down, Forward, Low Kick" },
          { "Friendship": "Back, Forward, Down, Forward, Run" },
          { "Stage Fatalities": "Forward, Forward, Down, High Punch" },
          { "Brutality": "High Punch, Low Kick, Block, High Punch, Low Kick, Block, High Punch, Block, High Kick, Low Kick" }
        ]
      }
    },
    {
      name: "jax",
      title: "Jax",
      text: 'Jax is a powerful soldier from the Outerworld Investigation Agency.',
      combo: {
        "Special Moves": [
          { "Single Missile": "Back, Forward, High Punch" },
          { "Double Missile": "Forward, Forward, Back, Back, High Punch" },
          { "Gotcha Grab": "Forward, Forward, Low Punch (Tap Low Punch for extra hits)" },
          { "Back Breaker": "Block in air when next to airborne opponent" },
          { "Body Slam": "Perform a Throw and repeatedly tap High Punch" },
          { "Ground Pound": "Hold Low Punch for 3 seconds, then release" },
          { "Dash Punch": "Forward, Forward, Low Kick" }
        ],
        "Basic Combos": [
          { "Combo 1": "High Punch, High Punch, Block, Back + High Punch" },
          { "Combo 2": "High Punch, High Punch, LP, Block, Back+High Punch" },
          { "Combo 3": "High Punch, High Punch, Block, LP, Back+High Punch" },
          { "Combo 4": "High Kick, High Kick, Back + High Kick" },
          { "Combo 5": "High Kick, High Kick, Down + High Punch, High Punch, Block, Low Punch, Back + High Punch" }
        ],
        "Finishing Moves": [
          { "Fatality 1": "Up, Up, Down, Forward, Up, Block" },
          { "Fatality 2": "Run, Block, Run, Run, Low Kick" },
          { "Animality": "Hold Low Kick, Forward, Forward, Down, Forward" },
          { "Babality": "Down, Down, Down, Low Kick" },
          { "Friendship": "Low Kick, Run, Run, Low Kick" },
          { "Stage Fatalities": "Down, Forward, Down, Low Punch" },
          { "Brutality": "High Punch, High Punch, High Punch, Block, Low Punch, High Punch, High Punch, High Punch, Block, Low Punch, High Punch" }
        ]
      }
    },
    {
      name: "nightwolf",
      title: "Nightwolf",
      combo: {
        "Special Moves": [
          { "Arrow": "Down, Back, Low Punch" },
          { "Hatchet Uppercut": "Down, Forward, High Punch" },
          { "Shoulder Charge": "Forward, Forward, Low Kick" },
          { "Glow Shield": "Back, Back, Back, High Kick" },
        ],
        "Basic Combos": [
          { "Combo 1": "High Punch, High Punch, Low Punch" },
          { "Combo 2": "Low Kick, High Punch, High Punch, Low Punch" },
          { "Combo 3": "High Punch, High Punch, Low Punch, High Kick" },
          { "Combo 4": "High Punch, High Punch, Low Punch, Back + High Kick" },
          { "Combo 5": "High Punch, High Punch, Low Punch, Hatchet Uppercut" },
        ],
        "Finishing Moves": [
          { "Fatality 1": "(Close) Up, Up, Back, Forward, Block" },
          { "Fatality 2": "Back, Back, Down, High Punch" },
          { "Animality": "Forward, Forward, Down, Down" },
          { "Babality": "Forward, Back, Forward, Back, Low Punch" },
          { "Friendship": "High Punch, Run, Run, Run, Down" },
          { "Stage Fatalities": "Run, Run, Block" },
          { "Brutality": "High Punch, High Punch, High Kick, Low Kick, Low Kick, Block, Block, Low Punch, Low Punch, High Punch, High Kick" },
        ]
      }
    },
    {
      name: "jade",
      title: "Jade",
      combo: {
        "Special Moves": [
          { "Boomerang": "Back, Forward, Low Punch" },
          { "Upward Boomerang": "Back, Forward, High Punch" },
          { "Downward Boomerang": "Back, Forward, Low Kick" },
          { "Returning Boomerang": "Back, Back, Forward, Low Punch (Returns if it misses opponent)" },

          { "Shadow Kick": "Down, Forward, Low Kick" },
          { "Projectile Shield": "Back, Forward, High Kick" },
        ],
        "Basic Combos": [
          { "Combo 1": "High Kick, High Kick, Low Kick, Back + High Kick" },
          { "Combo 2": "High Punch, High Punch, Down + Low Punch, Down + High Punch" },
          { "Combo 3": "High Punch, High Punch, Down + Low Punch, Low Kick, High Kick, Back + Low Kick, Back + High Kick" },
        ],
        "Finishing Moves": [
          { "Fatality 1": "(Close) Up, Up, Down, Forward, High Punch" },
          { "Fatality 2": "(Close) Run, Run, Run, Block, Run" },
          { "Animality": "(Close) Forward, Down, Forward, Forward, Low Kick" },
          { "Babality": "Down, Down, Forward, Down, High Kick" },
          { "Friendship": "Back, Down, Back, Back, High Kick" },
          { "Stage Fatalities": "Back, Forward, Down, Forward, Run" },
          { "Brutality": "High Punch, Low Kick, High Punch, Low Punch, High Kick, High Kick, Low Kick, Block, High Punch, High Kick" },
        ]
      }
    },
    {
      name: "scorpion",
      title: "Scorpion",
      text: "Scorpion is an undead ninja specter.",
      combo: {
        "Special Moves": [
          { "Spear": "Back, Back, Low Punch" },
          { "Teleport Punch": "Down, Back, High Punch (Can also be done in air)" },
          { "Air Throw": "Block in air when next to airborne opponent" },
        ],
        "Basic Combos": [
          { " Combo 1": "High Punch, High Punch, Up + Low Punch" },
          { " Combo 2": "High Kick, High Kick, Low Kick, Low Kick" },
          { " Combo 3": "High Punch, High Punch, High Kick, Back + High Kick" },
        ],
        "Finishing Moves": [
          { "Fatality 1": "(Outside Sweep) Down, Down, Up, High Kick" },
          { "Fatality 2": "(Close) (Use Block) Forward, Forward, Down, Up, Run" },
          { "Animality": "(Close) (Use Block) Forward, Up, Up, High Kick" },
          { "Babality": "Down, Back, Back, Forward, High Punch" },
          { "Friendship": "Back, Forward, Forward, Back, Low Kick" },
          { "Stage Fatalities": "(Use Block) Forward, Up, Up, Low Punch" },
          { "Brutality": "High Punch, High Punch, Block, High Kick, High Kick, Low Kick, High Kick, High Punch, High Punch, Low Punch, High Punch" }
        ]
      }
    },
    {
      name: "kano",
      title: "Kano",
      combo: {
        "Special Moves": [
          { "Cannonball": "Hold Low Kick for 3 seconds and release" },
          { "Knife Throw": "Down, Back, High Punch" },
          { "Blade Swipe": "Down, Forward, High Punch" },
          { "Grab and Shake": "Down, Forward, Low Punch" },
          { "Air Throw": "Block in air when next to airborne opponent" },
          { "(MKT Only) Low Cannon Ball": "Forward, Down, Forward, Low Kick" },
          { "(MKT Only) High Cannon Ball": "Forward, Down, Forward, High Kick" },
        ],
        "Basic Combos": [
          { "Combo 1": "High Punch, High Punch, Low Punch, Down + High Punch" },
          { "Combo 2": "High Kick, High Kick, Low Kick, Back + High Kick" },
          { "Combo 3": "High Punch, High Punch, High Kick, Low Kick, Back + High Kick" },
        ],
        "Finishing Moves": [
          { "Fatality 1": "(Hold Low Punch) Forward, Down, Down, Forward, (Release Low Punch)" },
          { "Fatality 2": "(Close) Low Punch, Block, Block, High Kick" },
          { "Animality": "(Hold High Punch) Block, Block, Block, (Release High Punch)" },
          { "Babality": "Forward, Forward, Down, Down, Low Kick" },
          { "Friendship": "Low Kick, Run, Run, High Kick" },
          { "Stage Fatalities": "Up, UP, Back, Low Kick" },
          { "Brutality": "High Punch, Low Punch, Block, High Punch, Block, High Kick, Low Kick, Block, High Kick, Low Kick" },
        ]
      }
    },
    {
      name: "mileena",
      title: "Mileena",
      combo: {
        "Special Moves": [
          { "Sai Toss": "Hold High Punch for 2 seconds and release (Can also be done in air)" },
          { "Teleport Kick": "Forward, Forward, Low Kick" },
          { "Ground Roll": "Back, Back, Down, High Kick" },
        ],
        "Basic Combos": [
          { "Combo 1": "High Punch, High Punch, High Kick, High Kick, Ground Roll" },
          { "Combo 2": "High Punch, High Punch, High Kick, High Kick, Up + Low Kick, Up + High Kick" },
        ],
        "Finishing Moves": [
          { "Fatality 1": "(One Screen Away) Back, Back, Back, Forward, Low Kick" },
          { "Fatality 2": "(Close) Down, Forward, Down, Forward, Low Punch" },
          { "Animality": "(Close) Forward, Down, Down, Forward" },
          { "Babality": "Down, Down, Forward, Forward, High Punch" },
          { "Friendship": "Down, Down, Back, Forward, High Punch" },
          { "Stage Fatalities": "Block, Run, Block, Block" },
          { "Brutality": "High Punch, Low Punch, Low Punch, High Punch, Block, High Kick, Low Kick, Low Kick, High Kick, Block, High Punch" },
        ]
      }
    },
    {
      name: "ermac",
      title: "Ermac",
      combo: {
        "Special Moves": [
          { "Fireball": "Down, Back, Low Punch" },
          { "Teleport Punch": "Down, Back, High Punch" },
          { "Telekinetic Slam": "Back, Down, Back, High Kick" },
        ],
        "Basic Combos": [
          { "Combo 1": "High Punch, High Punch, Down + Low Punch" },
          { "Combo 2": "High Kick, High Kick, Low Kick, Back + High Kick" },
          { "Combo 3": "High Punch, High Punch, Back+Low Punch, High Kick, Low Kick" },
        ],
        "Finishing Moves": [
          { "Fatality 1": "(Close) Run, Block, Run, Run, High Kick" },
          { "Fatality 2": "(Sweep) Down, Up, Down, Down, Down, Block" },
          { "Animality": "(Close) Back, Back, Forward, Forward, Low Kick" },
          { "Babality": "Down, Down, Forward, Down, High Kick" },
          { "Friendship": "Forward, Forward, Forward, High Punch" },
          { "Stage Fatalities": "Run, Run, Run, Run, Low Kick" },
          { "Brutality": "High Punch, High Punch, Low Punch, Block, High Kick, Low Kick, Block, High Punch, Low Punch, Low Kick, High Kick" },
        ]
      }
    },
    {
      name: "subzero",
      title: "Classic Sub-Zero",
      text: 'Sub-Zero is a cryomancer from the Lin Kuei clan.',
      combo: {
        "Special Moves": [
          { "Freeze": "Down, Forward, Low Punch" },
          { "Ground Freeze": "Down, Back, Low Kick" },
          { "Slide": "Back + Low Punch + Block + Low Kick" },
        ],
        "Basic Combos": [
          { "Combo 1": "Forward + Low Kick, Back + High Kick, Forward + Low Kick" },
          { "Combo 2": "High Punch, High Punch, Down + Low Punch, Down + High Punch" },
          { "Combo 3": "High Punch, High Punch, Low Kick, Back+High Kick, Forward+Low Kick" },
        ],
        "Finishing Moves": [
          { "Fatality 1": "Down, Down, Down, Forward, High Punch" },
          { "Fatality 2": "Unknown" },
          { "Animality": "Unknown" },
          { "Babality": "Down, Back, Back, High Kick" },
          { "Friendship": "Unknown" },
          { "Stage Fatalities": "Forward, Down, Forward, Forward, High Punch" },
          { "Brutality": "High Punch, Low Punch, High Punch, Block, Low Kick, Low Kick, High Kick, High Kick, High Kick, Low Punch, High Punch, Low Punch" },
        ]
      }
    },
    {
      name: "subzero2",
      title: "Sub-Zero",
      combo: {
        "Special Moves": [
          { "Freeze": "Down, Forward, Low Punch." },
          { "Ice Shower": "Down, Forward, High Punch." },
          { "Front Ice Shower": "Down, Forward, Back, High Punch." },
          { "Behind Ice Shower": "Down, Back, Forward, High Punch." },
          { "Ice Clone": "Down, Back, Low Punch." },
          { "Ground Slide": "Back + Low Punch + Low Kick + Block." },
        ],
        "Basic Combos": [
          { "Combo 1": "High Kick, High Kick, Back + High Kick." },
          { "Combo 2": "High Punch, High Punch, Low Punch, Low Kick, High Kick, Back + High Kick." },
        ],
        "Finishing Moves": [
          { "Fatality 1": "(Close) Block, Block, Run, Block, Run." },
          { "Fatality 2": "(Outside Sweep) Back, Back, Down, Back, Run." },
          { "Animality": "Forward, Up, Up." },
          { "Babality": "Down, Back, Back, High Kick." },
          { "Friendship": "Low Kick, Run, Run, Up." },
          { "Stage Fatalities": "Back, Down, Forward, Forward, High Kick." },
          { "Brutality": "High Punch, Low Kick, High Kick, Low Punch, High Punch, High Kick, High Kick, High Punch, High Punch, Low Punch." },
        ]
      }
    },
    {
      name: "sektor",
      title: "Sektor",
      combo: {
        "Special Moves": [
          { "Missile": "Forward, Forward, Low Punch" },
          { "Homing Missile": "Forward, Down, Back, High Punch" },
          { "Teleport Uppercut": "Forward, Forward, Low Kick (Can also be done in air)" },
        ],
        "Basic Combos": [
          { "Combo 1": "High Punch, High Punch, Down + Low Punch" },
          { "Combo 2": "High Punch, High Punch, Low Kick, Low Punch" },
          { "Combo 3": "High Punch, High Punch, High Kick, High Kick, Back + High Kick" },
        ],
        "Finishing Moves": [
          { "Fatality 1": "(Sweep) Low Punch, Run, Run, Block" },
          { "Fatality 2": "(Half Screen Away) Forward, Forward, Forward, Back, Block" },
          { "Animality": "(Close) Forward, Forward, Down, Up" },
          { "Babality": "Back, Down, Down, Down, High Kick" },
          { "Friendship": "Run, Run, Run, Run, Down" },
          { "Stage Fatalities": "Down, Down, Down, Run" },
          { "*Brutality": "High Punch, High Punch, High Punch, Block, Low Punch, High Punch, High Punch, High Punch, Block, Low Punch, High Punch" },
        ]
      }
    },
    {
      name: "sindel",
      title: "Sindel",
      combo: {
        "Special Moves": [
          { "Fireball": "Forward, Forward, Low Punch" },
          { "Scream": "Forward, Forward, Forward, High Punch" },
          { "Levitate": "Back, Back, Forward, High Kick" },
          { "Air Fireball": "Down, Forward, Low Kick (Can be done while jumping or floating)" },
        ],
        "Basic Combos": [
          { "Combo 1": "High Punch, High Punch, Down + High Punch" },
          { "Combo 2": "High Punch, High Punch, LP, High Kick" },
          { "Combo 3": "Low Kick, High Punch, High Punch, LP, High Kick" },
          { "Combo 4": "Low Kick, High Punch, High Punch, Down + High Punch" },
        ],
        "Finishing Moves": [
          { "Fatality 1": "Run, Run, Block, Run, Block" },
          { "Fatality 2": "Run, Run, Block, Block, Run + Block" },
          { "Animality": "Forward, Forward, Up, High Punch" },
          { "Babality": "Run, Run, Run, Up" },
          { "Friendship": "Run, Run, Run, Run, Run, Up" },
          { "Stage Fatalities": "Down, Down, Down, Low Punch" },
          { "Brutality": "High Punch, Block, Low Kick, Block, Low Kick, High Kick, Block, High Kick, Low Kick, Block, Low Punch" },
        ]
      }
    },
    {
      name: "kunglao",
      title: "Kunglao",
      combo: {
        "Special Moves": [
          { "Hat Throw": "Back, Forward, Low Punch" },
          { "Teleport": "Down, Up" },
          { "Spinning Shield": "Forward, Down, Forward, Run (Keep tapping Run to keep spinning)" },
          { "Diving Kick": "(In Air) Down + High Kick" },
        ],
        "Basic Combos": [
          { "Combo 1": "Low Kick, Low Kick, Back + High Kick" },
          { "Combo 2": "High Punch, Low Punch, High Punch, Low Punch, Low Kick, Low Kick, Back + High Kick" },
        ],
        "Finishing Moves": [
          { "Fatality 1": "(Close) Forward, Forward, Back, Down, High Punch" },
          { "Fatality 2": "(Half Screen Away) Run, Block, Run, Block, Down" },
          { "Animality": "Run, Run, Run, Run, Block" },
          { "Babality": "Down, Down, Forward, Forward, High Punch" },
          { "Friendship": "Run, Low Punch, Run, Low Kick" },
          { "Stage Fatalities": "Down, Down, Forward, Forward, Low Kick" },
          { "Brutality": "High Punch, Low Punch, Low Kick, High Kick, Block, High Punch, Low Punch, Low Kick, High Kick, Block, High Punch" },
        ]
      }
    },
    {
      name: "kabal",
      title: "Kabal",
      combo: {
        "Special Moves": [
          { "Fireball": "Back, Back, High Punch" },
          { "Web Spin": "Back, Forward, Low Kick" },
          { "Ground Saw": "Back, Back, Back, Run" },
        ],
        "Basic Combos": [
          { "Combo 1": "Low Kick, Low Kick, Back + High Kick" },
          { "Combo 2": "Low Kick, Low Kick, High Kick, Back + High Kick" },
          { "Combo 3": "Low Kick, Low Kick, High Punch, High Punch, Down + High Punch" },
          { "Combo 4": "Low Kick, Low Kick, High Punch, High Punch, Down + Low Punch, Down + High Punch" },
        ],
        "Finishing Moves": [
          { "Fatality 1": "(Half Screen Away) Down, Down, Back, Forward, Block" },
          { "Fatality 2": "(Close) Run, Block, Block, Block, High Kick" },
          { "Animality": "(Close) (Hold High Punch) Forward, Forward, Down, Forward, (Release High Punch)" },
          { "Babality": "Run, Run, Low Kick" },
          { "Friendship": "Run, Low Kick, Run, Run, Up" },
          { "Stage Fatalities": "Block, Block, High Kick" },
          { "Brutality": "High Punch, Block, Low Kick, Low Kick, Low Kick, High Kick, Low Punch, Low Punch, Low Punch, High Punch, Low Punch" },
        ]
      }
    },
    {
      name: "sheeva",
      title: "Sheeva",
      combo: {
        "Special Moves": [
          { "Teleport Stomp": "Down, Up" },
          { "Fireball": "Down, Forward, High Punch" },
          { "Ground Stomp": "Back, Down, Back, High Kick" },
        ],
        "Basic Combos": [
          { "Combo 1": "High Punch, High Punch, Low Punch, Forward + High Punch" },
          { "Combo 2": "High Kick, High Kick, Low Kick, Back + High Kick" },
          { "Combo 3": "High Punch, High Punch, Low Punch, High Kick, High Kick, Low Kick, Back + High Kick" },
        ],
        "Finishing Moves": [
          { "Fatality 1": "(Close) Forward, Down, Down, Forward, Low Punch" },
          { "Fatality 2": "(Close) (Hold High Kick) Back, Forward, Forward, (Release High Kick)" },
          { "Animality": "Run, Block, Block, Block, Block" },
          { "Babality": "Down, Down, Down, Back, High Kick" },
          { "Friendship": "Forward, Forward, Down, Forward, pause 1/2 second, High Punch" },
          { "Stage Fatalities": "Down, Forward, Down, Forward, Low Punch" },
          { "Brutality": "High Punch, Low Punch, Block, Low Kick, High Kick, Block, High Kick, Low Kick, Block, Low Punch, High Punch" },
        ]
      }
    },
    {
      name: "motaro",
      title: "Motaro",
      combo: {
        "Special Moves": [
          { "Grab and Smack": "Forward, Forward, Low Punch" },
          { "Fireball": "Forward, Down, Back, High Punch" },
          { "Teleport": "Down, Up" },
        ]
      }
    },
    {
      name: "shaokahn",
      title: "Shaokahn",
      combo: {
        "Special Moves": [
          { "Shadow Charge": "Forward, Forward, Low Punch" },
          { "Upwards Shadow Charge": "Forward, Forward, High Punch" },
          { "Sledge Hammer": "Back, Forward, High Punch" },
          { "Fireball": "Back, Back, Forward, Low Punch" },
          { "Taunt": "Down, Down, Low Kick" },
          { "Laugh": "Down, Down, High Kick" },
        ]
      }
    },
    {
      name: "shangtsung",
      title: "Shangtsung",
      text: 'Shang Tsung is an evil sorceror from Outworld.',
      combo: {
        "Special Moves": [
          { "Fireball": "Back, Back, High Punch" },
          { "Double Fireball": "Back, Back, Forward, High Punch" },
          { "Triple Fireball": "Back, Back, Forward, Forward, High Punch" },
          { "Volcanic Eruption": "Forward, Back, Back, Low Kick" },
        ],
        "Basic Combos": [
          { "Combo 1": "High Punch, High Punch, Low Punch, Back + High Kick" },
          { "Combo 2": "Low Kick, High Punch, High Punch, Low Punch, Back + High Kick" },
        ],
        "Finishing Moves": [
          { "Fatality 1": "(Close) (Hold Low Punch) Down, Forward, Forward, Down, (Release Low Punch)" },
          { "Fatality 2": "(Close) (Hold Low Punch) Run, Block, Run, Block, (Release Low Punch)" },
          { "Animality": "(Close) (Hold High Punch) Run, Run, Run, (Release High Punch)" },
          { "Babality": "Run, Run, Run, Low Kick" },
          { "Friendship": "LK, Run, Run, Down" },
          { "Stage Fatalities": "Up, Up, Back, Low Punch" },
          { "Brutality": "High Punch, Block, Block, Block, Low Kick, High Punch, Low Punch, Low Punch, Block, High Kick, Low Kick" },
        ],
        "Morphs": [
          { "Sonya": "Down + Run + Low Punch + Block" },
          { "Jax": "Forward, Forward, Down, Low Punch" },
          { "Nightwolf": "Up, Up" },
          { "Kano": "Back, Forward, Block" },
          { "Sub-Zero": "Forward, Down, Forward, High Punch" },
          { "Sektor": "Down, Forward, Back, Run" },
          { "Sindel": "Back, Down, Back, Low Kick" },
          { "Stryker": "Forward, Forward, High Kick" },
          { "Cyrax": "Block, Block, Block" },
          { "Kung Lao": "Run, Run, Block, Run" },
          { "Kabal": "Low Punch, Block, High Kick" },
          { "Sheeva": "Forward, Down, Forward, Low Kick, Low Kick" },
          { "Liu Kang": "Rotate joystick 360 degrees counter-clockwise from opponent" },
          { "Smoke": "Forward, Forward, Low Punch" },

          { "Kitana": "Forward, Down, Forward, Run" },
          { "Reptile": "Run, Block, Block, High Kick" },
          { "Jade": "Forward, Forward, Down, Down + Block" },
          { "Scorpion": "Down, Down, Forward, Low Punch" },
          { "Ermac": "Down, Down, Up" },
          { "Mileena": "Run, Block, High Kick" },
          { "Classic Sub Zero": "Block, Block, Run, Run" },

          { "Rain": "Run, Block, Low Kick" },
          { "Noob Saibot": "Forward, Down, Down, Back, High Kick" },

          { "Human Smoke": "Block, Run, Low Kick" },
        ]
      }
    },
    {
      name: "liukang",
      title: "Liukang",
      combo: {
        "Special Moves": [
          { "High Fireball": "Forward, Forward, High Punch" },
          { "Low Fireball": "Forward, Forward, Low Punch" },
          { "Bicycle Kick": "Hold Low Kick for 4 seconds and release" },
          { "Flying Kick": "Forward, Forward, High Kick" },
        ],
        "Basic Combos": [
          { "Combo 1": "Low Kick, Low Kick, High Kick, Back + Low Kick" },
          { "Combo 2": "High Punch, High Punch, Block, Low Kick, Low Kick, High Kick, Back + Low Kick" },
        ],
        "Finishing Moves": [
          { "Fatality 1": "Forward, Forward, Down, Down, Low Kick" },
          { "Fatality 2": "Up, Down, Up, Up, Run + Block" },
          { "Animality": "(Sweep) Down, Down, Up" },
          { "Babality": "Down, Down, Down, High Kick" },
          { "Friendship": "Down, Down, Down, Run" },
          { "Stage Fatalities": "Run, Block, Block, Low Kick" },
          { "Brutality": "High Punch, Low Punch, High Punch, Block, Low Kick, High Kick, High Kick, Low Kick, High Kick, Low Punch, High Punch" },
        ]
      }
    },
    {
      name: "smoke",
      title: "Smoke",
      combo: {
        "Special Moves": [
          { "Spear": "Back, Back, Low Punch" },
          { "Teleport Uppercut": "Forward, Forward, Low Kick (Can also be done in air)" },
          { "Air Throw": "Block in air when next to airborne opponent" },
          { "Invisibility": "(Hold Block) Up, Up, Run, (Release Block)" },
        ],
        "Basic Combos": [
          { "Combo 1": "High Punch, High Punch, Low Punch" },
          { "Combo 2": "High Punch, High Punch, High Kick" },
          { "Combo 3": "High Punch, High Punch, Low Kick, High Kick, Low Punch" },
          { "Murdoink's Favourite Combo": "Anti-air Jump Kick, Teleport Uppercut, anti-air High Punch, Spear, Combo #3. (63%)" },
        ],
        "Finishing Moves": [
          { "Fatality 1": "(More than half screen away) (Hold Block) Up, Up, Forward, Down, (Release Block)" },
          { "Fatality 2": "(Outside Sweep) (Hold Block + Run) Down, Down, Forward, Up, (Release Block + Run)" },
          { "Animality": "Down, Forward, Forward, Block" },
          { "Babality": "Down, Down, Back, Back, High Kick" },
          { "Friendship": "Run, Run, Run, High Kick" },
          { "Stage Fatalities": "Forward, Forward, Down, Low Kick" },
          { "Brutality": "High Punch, Low Kick, Low Kick, High Kick, Block, Block, Low Punch, Low Punch, High Punch, High Punch, Block, Block" },
        ],
        "Secret": [
          { "Human Smoke": "Pick Smoke and hold B, HP, HK, BLK and Run simultaneously until the match begins" }
        ]
      }
    },
    {
      name: "rain",
      title: "Rain",
      combo: {
        "Special Moves": [
          { "Lightning": "Back, Back, Back, High Punch" },
          { "Mind Control Orb": "Down, Forward, High Punch (Use the joystick to move your opponent in the air)" },
          { "Super Roundhouse": "Back + High Kick" },
        ],
        "Basic Combos": [
          { "Combo 1": "High Punch, High Punch, Low Punch, High Punch" },
          { "Combo 2": "High Kick, High Kick, Low Kick, High Kick, Back + High Kick" },
        ],
        "Finishing Moves": [
          { "Fatality 1": "(Close) Forward, Forward, Down, High Punch" },
          { "Fatality 2": "(Half Screen Away) Down, Down, Back, Forward, High Kick" },
          { "Animality": "(Sweep) Block, Block, Run, Run, Block" },
          { "Babality": "Forward, Back, Back, High Punch" },
          { "Friendship": "Down, Forward, Forward, Forward, Low Punch" },
          { "Stage Fatalities": "Forward, Down, Forward, Low Kick" },
          { "Brutality": "High Punch, High Punch, Block, Low Kick, High Kick, Block, Low Kick, High Kick, Block, High Punch, Low Punch" },
        ]
      }
    },
    {
      name: "noobsaibot",
      title: "Noob saibot",
      combo: {
        "Special Moves": [
          { "Shadow Toss": "Forward, Forward, High Punch" },
          { "Teleport Slam": "Down, Up" },
          { "Fireball": "Down, Forward, Low Punch" },
        ],
        "Basic Combos": [
          { "Combo 1": "High Punch, High Punch, Low Punch, High Kick" },
          { "Combo 2": "Low Kick, Low Kick, Low Kick, Low Kick" },
          { "Combo 3": "High Punch, High Punch, Down + Low Punch, Low Kick" },
        ],
        "Finishing Moves": [
          { "Fatality 1": "(Sweep) Back, Back, Forward, Forward, High Kick" },
          { "Fatality 2": "(Close) Hold Block, Down, Down, Up, Run" },
          { "Animality": "(Close) Back, Forward, Back, Forward, High Kick" },
          { "Babality": "Forward, Forward, Forward, Low Punch" },
          { "Friendship": "Forward, Forward, Back, High Punch" },
          { "Stage Fatalities": "Forward, Down, Forward, Block" },
          { "Brutality": "High Punch, Low Kick, Low Punch, Block, Low Kick, High Kick, High Punch, Low Punch, Block, Low Kick, High Kick" },
        ]
      }
    },
    {
      name: "stryker",
      title: "Stryker",
      combo: {
        "Special Moves": [
          { "Low Grenade": "Down, Back, Low Punch" },
          { "High Grenade": "Down, Back, High Punch" },
          { "Baton Trip": "Forward, Back, Low Punch" },
          { "Baton Toss": "Forward, Forward, High Kick" },
        ],
        "Basic Combos": [
          { "Combo 1": "Low Kick, High Punch, High Punch, Low Punch" },
          { "Combo 2": "High Kick, High Punch, High Punch, Low Punch" },
        ],
        "Finishing Moves": [
          { "Fatality 1": "(Close) Down, Forward, Down, Forward, Block" },
          { "Fatality 2": "(Almost One Screen Away) Forward, Forward, Forward, Low Kick" },
          { "Animality": "(Outside Sweep) Run, Run, Run, Block" },
          { "Babality": "own, Forward, Forward, Back, High Punch" },
          { "Friendship": "Run, Low Punch, Run, Low Kick" },
          { "Stage Fatalities": "Forward, Up, Up, High Kick" },
          { "Brutality": "High Punch, Low Punch, High Kick, Low Kick, High Punch, Low Punch, Low Kick, High Kick, High Punch, Low Kick, Low Kick" },
        ]
      }
    },
    {
      name: "cyrax",
      title: "Cyrax",
      combo: {
        "Special Moves": [
          { "Green Net": "Back, Back, Low Kick" },
          { "Short Bomb": "(Hold Low Kick) Back, Back, High Kick" },
          { "Long Bomb": "(Hold Low Kick) Forward, Forward, High Kick" },
          { "Air Throw": "Forward, Down, Forward, Block, Low Punch" },
          { "Teleport": "Forward, Down, Block" },
        ],
        "Basic Combos": [
          { "Combo 1": "High Punch, High Punch, Low Punch" },
          { "Combo 2": "High Kick, High Kick, Back + High Kick" },
          { "Combo 3": "High Punch, High Punch, High Kick, High Punch, High Kick, Back + High Kick" },
        ],
        "Finishing Moves": [
          { "Fatality 1": "Down, Down, Up, Down, High Punch" },
          { "Fatality 2": "(Close) Down, Down, Forward, Up, Run" },
          { "Animality": "(Close) (Use Block) Up, Up, Down, Down" },
          { "Babality": "Forward, Forward, Back, High Punch" },
          { "Friendship": "(Close) (Use Block) Up, Up, Down, Down" },
          { "Stage Fatalities": "Run, Block, Run" },
          { "Brutality": "High Punch, High Kick, High Punch, High Kick, High Kick, High Punch, High Kick, High Punch, High Kick, Low Kick, Low Punch" },
        ]
      }
    },
    {
      name: "smoke-human",
      title: "Smoke human",
      combo: {
        "Special Moves": [
          { "Shadow Toss": "Forward, Forward, High Punch" },
          { "Teleport Slam": "Down, Up" },
          { "Fireball": "Down, Forward, Low Punch" },
        ],
        "Basic Combos": [
          { "Combo 1": "High Punch, High Punch, Low Punch, High Kick" },
          { "Combo 2": "Low Kick, Low Kick, Low Kick, Low Kick" },
          { "Combo 3": "High Punch, High Punch, Down + Low Punch, Low Kick" },
        ],
        "Finishing Moves": [
          { "Fatality 1": "(Sweep) Back, Back, Forward, Forward, High Kick" },
          { "Fatality 2": "(Close) Hold Block, Down, Down, Up, Run" },
          { "Animality": "(Close) Back, Forward, Back, Forward, High Kick" },
          { "Babality": "Forward, Forward, Forward, Low Punch" },
          { "Friendship": "Forward, Forward, Back, High Punch" },
          { "Stage Fatalities": "Forward, Down, Forward, Block" },
          { "Brutality": "High Punch, Low Kick, Low Punch, Block, Low Kick, High Kick, High Punch, Low Punch, Block, Low Kick, High Kick" },
        ]
      }
    }
  ];
  const [selectedCharacter, setSelectedCharacter] = React.useState(null);

  return (
    <div className='uk-grid-small uk-child-width-auto@s uk-text-center uk-flex-center' data-uk-grid>
      <h1 className='color-white'>Ultimate Mortal Kombat 3</h1>


      <div className='character-menu'>
        {characters.map(character => (
          <button key={character.name} className="uk-button uk-padding-remove" onClick={() => setSelectedCharacter(character)}>
            <img src={require(`../Asset/${character.name}/${character.name}.gif`)} alt={character.name} style={{
              width: "100px",
              height: "123px",
              margin: "10px",
              // padding: "10px",
              background: "transparent"
            }} />
          </button>
        ))}
      </div>
      {selectedCharacter && (
        <div className='uk-width-1-1@s'>
          <div className='uk-grid uk-child-width-1-2@s' data-uk-grid>
            <div className='uk-card uk-card-secondary uk-card-body'>
              <img
                src={require(`../Asset/${selectedCharacter.name}/bio.png`)}
                alt={selectedCharacter.name}
                style={{
                  maxWidth: "200px",
                  height: "200px",
                }}
              />
              <h2 className='uk-margin-remove'>{selectedCharacter.title}</h2>
              <p className='uk-margin-remove uk-text-left'>{selectedCharacter.text}</p>
            </div>

            <div className='uk-card uk-card-secondary uk-card-body uk-text-left'>
              <div className='uk-margin-small'>
                <h2 className="uk-margin-remove">Special Moves</h2>
                {selectedCharacter.combo["Special Moves"].map((el, index) => (
                  // Forword
                  <p key={index} className="uk-margin-remove"><strong>{Object.keys(el)}:</strong> {el[Object.keys(el)]}</p>
                  // <p key={index}><strong>{Object.keys(el)}</strong> {el[Object.keys(el)]}</p>
                ))}
              </div>

              {selectedCharacter.combo["Basic Combos"] && (
                <div className='uk-margin-small'>
                  <h2 className="uk-margin-remove">Basic Combos</h2>
                  {selectedCharacter.combo["Basic Combos"].map((el, index) => (
                    <p key={index} className="uk-margin-remove"><strong>{Object.keys(el)}:</strong> {el[Object.keys(el)]}</p>
                  ))}
                </div>
              )}

              {selectedCharacter.combo["Finishing Moves"] && (
                <div className='uk-margin-small'>
                  <h2 className="uk-margin-remove">Finishing Moves</h2>
                  {selectedCharacter.combo["Finishing Moves"].map((el, index) => (
                    <p key={index} className="uk-margin-remove"><strong>{Object.keys(el)}:</strong> {el[Object.keys(el)]}</p>
                  ))}
                </div>
              )}

              {selectedCharacter.combo["Secret"] && (
                <div className='uk-margin-small'>
                  <h2 className="uk-margin-remove">Secret</h2>
                  {selectedCharacter.combo["Secret"].map((el, index) => (
                    <p key={index} className="uk-margin-remove"><strong>{Object.keys(el)}:</strong> {el[Object.keys(el)]}</p>
                  ))}
                </div>
              )}

              {selectedCharacter.combo["Morphs"] && (
                <div className='uk-margin-small'>
                  <h2 className="uk-margin-remove">Morphs</h2>
                  {selectedCharacter.combo["Morphs"].map((el, index) => (
                    <p key={index} className="uk-margin-remove"><strong>{Object.keys(el)}:</strong> {el[Object.keys(el)]}</p>
                  ))}
                </div>
              )}

            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UltimateMortalKombat3;