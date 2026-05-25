const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/generate", (req, res) => {
    let prompt = (req.body.prompt || "").toLowerCase();

    let result = "🤖 Try: night sky / red vision / settings / song";

    if(prompt.includes("night sky")){
        result = `-- NIGHT SKY
local Lighting = game:GetService("Lighting")
Lighting.ClockTime = 22`;
    }

    else if(prompt.includes("red")){
        result = `-- RED VISION
local player = game.Players.LocalPlayer`;
    }

    else if(prompt.includes("settings")){
        result = `-- SETTINGS PANEL
local gui = Instance.new("ScreenGui")`;
    }

    else if(prompt.includes("song")){
        result = `-- SONG
local sound = Instance.new("Sound")`;
    }

    res.json({ result });
});

app.listen(3000, () => console.log("Server running"));
