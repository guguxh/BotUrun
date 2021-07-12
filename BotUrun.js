const roomName = "𝙵𝚞𝚝𝚜𝚊𝚕 𝚇𝟺 𝚄𝚁𝚄𝙽";
const botName = "Juiz URUN";
const maxPlayers = 18;
const roomPublic = false;
const geo = [{
    "code": "br",
    "lat": -23.533773,
    "lon": -46.625290
}];

const room = HBInit({
    roomName: roomName,
    maxPlayers: maxPlayers,
    public: roomPublic,
    playerName: botName,
    geo: geo[0]
});

const scoreLimit = 0;
const timeLimit = 8;
room.setScoreLimit(scoreLimit);
room.setTimeLimit(timeLimit);
room.setTeamsLock(true);

var futsalX4 = `{"name":"Futsal X4 [CFU]","canBeStored":false,"width":780,"height":360,"spawnDistance":350,"bg":{"type":"hockey"},"vertexes":[{"x":-700,"y":-85,"trait":"net"},{"x":-751,"y":-85,"trait":"net"},{"x":-750,"y":-86,"trait":"net"},{"x":-750,"y":86,"trait":"net"},{"x":-751,"y":85,"trait":"net"},{"x":-700,"y":85,"trait":"net"},{"x":700,"y":85,"trait":"net"},{"x":751,"y":85,"trait":"net"},{"x":750,"y":86,"trait":"net"},{"x":750,"y":-86,"trait":"net"},{"x":751,"y":-85,"trait":"net"},{"x":700,"y":-85,"trait":"net"},{"x":-700,"y":-91.25,"trait":"net2"},{"x":-756.25,"y":-91.25,"trait":"net2"},{"x":-756.25,"y":91.25,"trait":"net2"},{"x":-700,"y":91.25,"trait":"net2"},{"x":700,"y":91.25,"trait":"net2"},{"x":756.25,"y":91.25,"trait":"net2"},{"x":756.25,"y":-91.25,"trait":"net2"},{"x":700,"y":-91.25,"trait":"net2"},{"x":-700,"y":-321,"trait":"wall"},{"x":-700,"y":-85,"trait":"wall"},{"x":-700,"y":85,"trait":"wall"},{"x":-700,"y":321,"trait":"wall"},{"x":-701,"y":320,"trait":"wall"},{"x":701,"y":320,"trait":"wall"},{"x":700,"y":321,"trait":"wall"},{"x":700,"y":85,"trait":"wall"},{"x":700,"y":-85,"trait":"wall"},{"x":700,"y":-321,"trait":"wall"},{"x":701,"y":-320,"trait":"wall"},{"x":-701,"y":-320,"trait":"wall"},{"x":706.25,"y":-85,"trait":"wall2"},{"x":706.25,"y":-326.25,"trait":"wall2"},{"x":-706.25,"y":-326.25,"trait":"wall2"},{"x":-706.25,"y":-85,"trait":"wall2"},{"x":-706.25,"y":85,"trait":"wall2"},{"x":-706.25,"y":326.25,"trait":"wall2"},{"x":706.25,"y":326.25,"trait":"wall2"},{"x":706.25,"y":85,"trait":"wall2"},{"x":-700,"y":-85,"trait":"rGoalLine","color":"E8D019"},{"x":-700,"y":85,"trait":"rGoalLine","color":"E8D019"},{"x":700,"y":85,"trait":"bGoalLine","color":"E8D019"},{"x":700,"y":-85,"trait":"bGoalLine","color":"E8D019"},{"x":-700,"y":290,"curve":-90,"trait":"area"},{"x":-495,"y":85,"curve":-90,"trait":"area"},{"x":-495,"y":85,"trait":"area"},{"x":-495,"y":-85,"trait":"area"},{"x":-495,"y":-85,"curve":-90,"trait":"area"},{"x":-700,"y":-290,"curve":-90,"trait":"area"},{"x":700,"y":-290,"curve":-90,"trait":"area"},{"x":495,"y":-85,"curve":-90,"trait":"area"},{"x":495,"y":-85,"trait":"area"},{"x":495,"y":85,"trait":"area"},{"x":495,"y":85,"curve":-90,"trait":"area"},{"x":700,"y":290,"curve":-90,"trait":"area"},{"x":-495,"y":-2,"trait":"penaltyMark"},{"x":-495,"y":2,"trait":"penaltyMark"},{"x":495,"y":-2,"trait":"penaltyMark"},{"x":495,"y":2,"trait":"penaltyMark"},{"x":-495,"y":-3,"trait":"penaltyMark"},{"x":-495,"y":3,"trait":"penaltyMark"},{"x":495,"y":-3,"trait":"penaltyMark"},{"x":495,"y":3,"trait":"penaltyMark"},{"x":-495,"y":-4,"trait":"penaltyMark"},{"x":-495,"y":4,"trait":"penaltyMark"},{"x":495,"y":-4,"trait":"penaltyMark"},{"x":495,"y":4,"trait":"penaltyMark"},{"x":0,"y":-80,"vis":true,"trait":"kickOff","color":"F8F8F8","curve":-180,"cMask":["red","blue"],"cGroup":["redKO"]},{"x":0,"y":80,"vis":true,"curve":-180,"trait":"kickOff","color":"F8F8F8","cMask":["red","blue"],"cGroup":["redKO"]},{"x":0,"y":-350,"vis":false,"trait":"kickOff","cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":350,"vis":false,"trait":"kickOff","cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":-320,"trait":"centerLine"},{"x":0,"y":-80,"curve":-180,"trait":"centerLine"},{"x":0,"y":320,"trait":"centerLine"},{"x":0,"y":80,"curve":-180,"trait":"centerLine"},{"trait":"shadow","x":-22,"y":-21,"curve":-210},{"trait":"shadow","x":-22,"y":29,"curve":-210},{"trait":"shadow","x":-8,"y":32,"curve":0},{"trait":"shadow","x":-8,"y":-22,"curve":0},{"trait":"shadow","x":-9,"y":-21},{"trait":"shadow","x":22,"y":-21},{"trait":"shadow","x":-6,"y":2},{"trait":"shadow","x":14,"y":2},{"trait":"shadow","x":32,"y":-24.5},{"trait":"shadow","x":32,"y":30},{"trait":"shadow","x":32,"y":29},{"trait":"shadow","x":59,"y":29},{"trait":"shadow","x":-22,"y":-23,"curve":-208},{"trait":"shadow","x":-22,"y":31,"curve":-208},{"trait":"shadow","x":-22,"y":-19,"curve":-210},{"trait":"shadow","x":-22,"y":27,"curve":-210},{"trait":"shadow","x":-10,"y":32,"curve":0},{"trait":"shadow","x":-10,"y":-24,"curve":0},{"trait":"shadow","x":-11,"y":-23},{"trait":"shadow","x":22,"y":-23},{"trait":"shadow","x":-7,"y":-19},{"trait":"shadow","x":22,"y":-19},{"trait":"shadow","x":-6,"y":0},{"trait":"shadow","x":14,"y":0},{"trait":"shadow","x":-6,"y":4},{"trait":"shadow","x":14,"y":4},{"trait":"shadow","x":-6,"y":32,"curve":0},{"trait":"shadow","x":-6,"y":-20,"curve":0},{"trait":"shadow","x":30,"y":-24.5},{"trait":"shadow","x":30,"y":32},{"trait":"shadow","x":34,"y":-24.5},{"trait":"shadow","x":34,"y":28},{"trait":"shadow","x":33,"y":27},{"trait":"shadow","x":59,"y":27},{"trait":"shadow","x":29,"y":31},{"trait":"shadow","x":59,"y":31},{"trait":"C","x":-26,"y":-25,"curve":-210},{"trait":"C","x":-26,"y":25,"curve":-210},{"trait":"F","x":-12,"y":28,"curve":0},{"trait":"F","x":-12,"y":-26,"curve":0},{"trait":"F","x":-13,"y":-25},{"trait":"F","x":18,"y":-25},{"trait":"F","x":-10,"y":-2},{"trait":"F","x":10,"y":-2},{"trait":"L","x":28,"y":-28.5},{"trait":"L","x":28,"y":26},{"trait":"L","x":28,"y":25},{"trait":"L","x":55,"y":25},{"trait":"C","x":-26,"y":-27,"curve":-208},{"trait":"C","x":-26,"y":27,"curve":-208},{"trait":"C","x":-26,"y":-23,"curve":-210},{"trait":"C","x":-26,"y":23,"curve":-210},{"trait":"F","x":-14,"y":28,"curve":0},{"trait":"F","x":-14,"y":-28,"curve":0},{"trait":"F","x":-15,"y":-27},{"trait":"F","x":18,"y":-27},{"trait":"F","x":-11,"y":-23},{"trait":"F","x":18,"y":-23},{"trait":"F","x":-10,"y":-4},{"trait":"F","x":10,"y":-4},{"trait":"F","x":-10,"y":0},{"trait":"F","x":10,"y":0},{"trait":"F","x":-10,"y":28,"curve":0},{"trait":"F","x":-10,"y":-24,"curve":0},{"trait":"L","x":26,"y":-28.5},{"trait":"L","x":26,"y":28},{"trait":"L","x":30,"y":-28.5},{"trait":"L","x":30,"y":24},{"trait":"L","x":29,"y":23},{"trait":"L","x":55,"y":23},{"trait":"L","x":25,"y":27},{"trait":"L","x":55,"y":27},{"trait":"shadow","x":47,"y":-20},{"trait":"shadow","x":57,"y":-23.5},{"trait":"shadow","x":57,"y":31},{"trait":"shadow","x":57,"y":30},{"trait":"shadow","x":47,"y":-22},{"trait":"shadow","x":47,"y":-18},{"trait":"shadow","x":55,"y":-23.5},{"trait":"shadow","x":55,"y":33},{"trait":"shadow","x":59,"y":-23.5},{"trait":"shadow","x":59,"y":29},{"trait":"shadow","x":58,"y":28},{"trait":"shadow","x":54,"y":32},{"trait":"L","x":53,"y":-27.5},{"trait":"L","x":53,"y":27},{"trait":"L","x":53,"y":26},{"trait":"L","x":51,"y":-27.5},{"trait":"L","x":51,"y":29},{"trait":"L","x":55,"y":-27.5},{"trait":"L","x":55,"y":25},{"trait":"L","x":54,"y":24},{"trait":"L","x":50,"y":28}],"segments":[{"v0":0,"v1":1,"y":-85,"trait":"net"},{"v0":2,"v1":3,"x":-750,"trait":"net"},{"v0":4,"v1":5,"y":85,"trait":"net"},{"v0":6,"v1":7,"y":85,"trait":"net"},{"v0":8,"v1":9,"x":750,"trait":"net"},{"v0":10,"v1":11,"y":-85,"trait":"net"},{"v0":12,"v1":13,"y":-91.25,"trait":"net2"},{"v0":13,"v1":14,"x":-756.25,"trait":"net2"},{"v0":14,"v1":15,"y":91.25,"trait":"net2"},{"v0":16,"v1":17,"y":91.25,"trait":"net2"},{"v0":17,"v1":18,"x":756.25,"trait":"net2"},{"v0":18,"v1":19,"y":-91.25,"trait":"net2"},{"v0":20,"v1":21,"x":-700,"trait":"wall"},{"v0":22,"v1":23,"x":-700,"trait":"wall"},{"v0":24,"v1":25,"y":320,"trait":"wall"},{"v0":26,"v1":27,"x":700,"trait":"wall"},{"v0":28,"v1":29,"x":700,"trait":"wall"},{"v0":30,"v1":31,"y":-320,"trait":"wall"},{"v0":32,"v1":33,"x":706.25,"trait":"wall2"},{"v0":33,"v1":34,"y":-326.25,"trait":"wall2"},{"v0":34,"v1":35,"x":-706.25,"trait":"wall2"},{"v0":36,"v1":37,"x":-706.25,"trait":"wall2"},{"v0":37,"v1":38,"y":326.25,"trait":"wall2"},{"v0":38,"v1":39,"x":706.25,"trait":"wall2"},{"v0":40,"v1":41,"x":-700,"trait":"rGoalLine","color":"E8D019"},{"v0":42,"v1":43,"x":700,"trait":"bGoalLine","color":"E8D019"},{"v0":44,"v1":45,"curve":-90,"trait":"area"},{"v0":46,"v1":47,"x":-495,"trait":"area"},{"v0":48,"v1":49,"curve":-90,"trait":"area"},{"v0":50,"v1":51,"curve":-90,"trait":"area"},{"v0":52,"v1":53,"x":495,"trait":"area"},{"v0":54,"v1":55,"curve":-90,"trait":"area"},{"v0":56,"v1":57,"curve":-180,"x":-495,"trait":"penaltyMark"},{"v0":57,"v1":56,"curve":-180,"x":-495,"trait":"penaltyMark"},{"v0":58,"v1":59,"curve":-180,"x":495,"trait":"penaltyMark"},{"v0":59,"v1":58,"curve":-180,"x":495,"trait":"penaltyMark"},{"v0":60,"v1":61,"curve":-180,"x":-495,"trait":"penaltyMark"},{"v0":61,"v1":60,"curve":-180,"x":-495,"trait":"penaltyMark"},{"v0":62,"v1":63,"curve":-180,"x":495,"trait":"penaltyMark"},{"v0":63,"v1":62,"curve":-180,"x":495,"trait":"penaltyMark"},{"v0":64,"v1":65,"curve":-180,"x":-495,"trait":"penaltyMark"},{"v0":65,"v1":64,"curve":-180,"x":-495,"trait":"penaltyMark"},{"v0":66,"v1":67,"curve":-180,"x":495,"trait":"penaltyMark"},{"v0":67,"v1":66,"curve":-180,"x":495,"trait":"penaltyMark"},{"v0":70,"v1":68,"vis":false,"x":0,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"v0":71,"v1":69,"vis":false,"x":0,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"vis":false,"v0":68,"v1":69,"curve":-180,"x":0,"cMask":["red","blue"],"cGroup":["blueKO"]},{"vis":false,"v0":69,"v1":68,"curve":-180,"x":0,"cMask":["red","blue"],"cGroup":["redKO"]},{"v0":72,"v1":73,"x":0,"trait":"centerLine"},{"v0":74,"v1":75,"x":0,"trait":"centerLine"},{"v0":73,"v1":75,"curve":-180,"x":0,"trait":"centerLine"},{"v0":75,"v1":73,"curve":-180,"x":0,"trait":"centerLine"},{"trait":"shadow","v0":76,"v1":77,"curve":-210},{"curve":0,"trait":"shadow","v0":78,"v1":79,"x":-10},{"curve":0,"trait":"shadow","v0":80,"v1":81,"y":-25},{"curve":0,"trait":"shadow","v0":82,"v1":83,"y":-2},{"curve":0,"trait":"shadow","v0":84,"v1":85,"x":30},{"curve":0,"trait":"shadow","v0":86,"v1":87,"y":25},{"trait":"shadow","v0":88,"v1":89,"curve":-208},{"trait":"shadow","v0":90,"v1":91,"curve":-210},{"curve":0,"trait":"shadow","v0":92,"v1":93,"x":-12},{"curve":0,"trait":"shadow","v0":94,"v1":95,"y":-27},{"curve":0,"trait":"shadow","v0":96,"v1":97,"y":-23},{"curve":0,"trait":"shadow","v0":98,"v1":99,"y":-4},{"curve":0,"trait":"shadow","v0":100,"v1":101,"y":0},{"curve":0,"trait":"shadow","v0":102,"v1":103,"x":-8},{"curve":0,"trait":"shadow","v0":104,"v1":105,"x":28},{"curve":0,"trait":"shadow","v0":106,"v1":107,"x":32},{"curve":0,"trait":"shadow","v0":108,"v1":109,"y":23},{"curve":0,"trait":"shadow","v0":110,"v1":111,"y":27},{"trait":"C","v0":112,"v1":113,"curve":-210},{"curve":0,"trait":"F","v0":114,"v1":115,"x":-10},{"curve":0,"trait":"F","v0":116,"v1":117,"y":-25},{"curve":0,"trait":"F","v0":118,"v1":119,"y":-2},{"curve":0,"trait":"L","v0":120,"v1":121,"x":30},{"curve":0,"trait":"L","v0":122,"v1":123,"y":25},{"trait":"C","v0":124,"v1":125,"curve":-208},{"trait":"C","v0":126,"v1":127,"curve":-210},{"curve":0,"trait":"F","v0":128,"v1":129,"x":-12},{"curve":0,"trait":"F","v0":130,"v1":131,"y":-27},{"curve":0,"trait":"F","v0":132,"v1":133,"y":-23},{"curve":0,"trait":"F","v0":134,"v1":135,"y":-4},{"curve":0,"trait":"F","v0":136,"v1":137,"y":0},{"curve":0,"trait":"F","v0":138,"v1":139,"x":-8},{"curve":0,"trait":"L","v0":140,"v1":141,"x":28},{"curve":0,"trait":"L","v0":142,"v1":143,"x":32},{"curve":0,"trait":"L","v0":144,"v1":145,"y":23},{"curve":0,"trait":"L","v0":146,"v1":147,"y":27},{"curve":0,"trait":"shadow","v0":149,"v1":150,"x":30},{"curve":0,"trait":"shadow","v0":154,"v1":155,"x":28},{"curve":0,"trait":"shadow","v0":156,"v1":157,"x":32},{"curve":0,"trait":"L","v0":160,"v1":161,"x":30},{"curve":0,"trait":"L","v0":163,"v1":164,"x":28},{"curve":0,"trait":"L","v0":165,"v1":166,"x":32}],"goals":[{"p0":[-708.25,-85],"p1":[-708.25,85],"team":"red"},{"team":"blue","p0":[708.25,85],"p1":[708.25,-85]}],"discs":[{"pos":[-700,85],"radius":6,"trait":"rPost","color":"E8D019"},{"pos":[-700,-85],"radius":6,"trait":"rPost","color":"E8D019"},{"pos":[700,85],"x":700,"radius":6,"trait":"bPost","color":"E8D019"},{"pos":[700,-85],"x":700,"radius":6,"trait":"bPost","color":"E8D019"}],"planes":[{"dist":-350,"normal":[0,1]},{"dist":-350,"normal":[0,-1]},{"dist":-780,"normal":[1,0]},{"dist":-780,"normal":[-1,0]}],"traits":{"net":{"color":"F8F8F8","bCoef":0.1,"cMask":["ball"]},"net2":{"vis":false,"cMask":["ball"]},"wall":{"color":"F8F8F8","bCoef":1,"cMask":["ball"]},"wall2":{"vis":false,"cMask":["ball"]},"rPost":{"color":"FF0000","radius":6,"invMass":0,"bCoef":0.5},"bPost":{"color":"0000FF","radius":6,"invMass":0,"bCoef":0.5},"rGoalLine":{"color":"FF0000","cMask":[""]},"bGoalLine":{"color":"0000FF","cMask":[""]},"area":{"color":"F8F8F8","cMask":[""]},"penaltyMark":{"color":"F8F8F8","cMask":[""],"curve":90},"centerLine":{"color":"F8F8F8","cMask":[""]},"shadow":{"color":"444444","cMask":[""]},"C":{"color":"F5F5F5","cMask":[""]},"F":{"color":"F5F5F5","cMask":[""]},"L":{"color":"F5F5F5","cMask":[""]}},"ballPhysics":{"radius":6.25,"bCoef":0.35,"invMass":1.5,"damping":0.99,"color":"E8D019"},"playerPhysics":{"bCoef":0,"acceleration":0.11,"kickingAcceleration":0.083,"kickStrength":5}}`

var adminPassword = parseInt(Math.random() * 10000).toString().padStart(4, "0");

console.log("adminPassword : " + adminPassword);

/* STADIUM */

const playerRadius = 15;
var ballRadius = 10;
const triggerDistance = playerRadius + ballRadius + 0.01;

/* OPTIONS */

var drawTimeLimit = Infinity;
var maxTeamSize = 4;
var Admin = "Admin | ";
var AdminColor = "0xFFA500"; /*laranja */
var AdminColor2 = "0xFF0000"; /* vermelho */
var AdminColor3 = "0x1288DF"; /* azul */
var AdminColor4 = "0xBB227F"; 
var AdminColor5 = "0x4AEAC5"; 
var AdminColor6 = "0x0FD62A"; 
var prefix = "!";

/* PLAYERS */

const TEAMS = {
    SPECTATOR: 0,
    RED: 1,
    BLUE: 2
};

const coordinates = {
  gk: { x: 524,  y: 0   },
  vl: { x: 385,  y: 135  },
  mc: { x: 240,  y: -135  },
  ca: { x: 100,  y: 85  },
};

var players;
var teamR;
var teamB;
var teamS;

let redTeamChoosed = [];
let blueTeamChoosed = [];

var teams = [
	{
		teamName: "SK",
		angle: 0,
		avatarColor: 0x000000,
		colors: [
			0xffffff,
		]
	},
  {
    teamName: "SK2",
    angle: 90,
    avatarColor: 0x000000,
    colors: [
      0x3D0000,
      0x5C0000,
      0x750000
    ]
  },
  {
    teamName: "VL",
    angle: 120,
    avatarColor: 0xffffff,
    colors: [
      0x000000,
      0x0FC702,
      0x050505
    ]
  },
  {
    teamName: "VL2",
    angle: 60,
    avatarColor: 0x10F700,
    colors: [
      0x000000,
      0x0A0A0A,
      0x141414
    ]
  },
  {
    teamName: "BSL",
    angle: 0,
    avatarColor: 0xD69004,
    colors: [
      0x800808,
      0x060D69,
      0x800808
    ]
  },
  {
    teamName: "BSL2",
    angle: 40,
    avatarColor: 0x000000,
    colors: [
      0x3D0000,
      0x5C0000,
      0x750000
    ]
  },
  {
    teamName: "NF",
      angle: 0,
      avatarColor: 0xFFFFFF,
      colors: [
      0x006BD6,
      0x005BA8,
      0x006BD6
    ]
  },
  {
    teamName: "NF2",
    angle: 60,
    avatarColor: 0x03A2FF,
    colors: [
      0xFFFFFF,
      0xFFFFFF,
      0xFFFFFF
    ]
  },
  {
    teamName: "BRM",
      angle: 60,
      avatarColor: 0xFFB60D,
      colors: [
      0xB50000,
      0xA80000,
      0x8C0000
    ]
  },
  {
    teamName: "BRM2",
    angle: 60,
    avatarColor: 0xED0000,
    colors: [
      0xE3E3E3,
      0xC9C9C9,
      0xB0B0B0
    ]
  },
  {
    teamName: "CC",
      angle: 58,
      avatarColor: 0xFFFFFF,
      colors: [
      0xFFFF00,
      0x000000,
      0xFFFF00
    ]
  },
  {
    teamName: "CC2",
    angle: 60,
    avatarColor: 0xFFFF00,
    colors: [
      0x000000,
      0x050505,
      0x0D0D0D
    ]
  },
  {
    teamName: "BT",
      angle: 60,
      avatarColor: 0x000000,
      colors: [
      0xFA57EF,
      0xDE4DD4,
      0xFA57EF
    ]
  },
  {
    teamName: "BT2",
    angle: 60,
    avatarColor: 0x000000,
    colors: [
      0xFFFFFF,
      0xDEDEDE,
      0xFFFFFF
    ]
  },
  {
    teamName: "BZ",
      angle: -60,
      avatarColor: 0xDE3E26,
      colors: [
      0x2E2E2E,
      0x171919
    ]
  },
  {
    teamName: "BZ2",
    angle: -60,
    avatarColor: 0x1C1C1C,
    colors: [
      0xFFFFFF,
      0x000000,
      0xCC0000,
    ]
  }]

/* GAME */

var lastTeamTouched;
var lastPlayersTouched;
var goldenGoal = false;
var activePlay = false;
var muteList = [];

let canStartGame = false;
let choosingTime = false;

/* STATS */

var GKList = new Array(2 * maxPlayers).fill(0);
var Rposs = 0;
var Bposs = 0;
var point = [{
    "x": 0,
    "y": 0
}, {
    "x": 0,
    "y": 0
}];
var ballSpeed;
var lastWinner = TEAMS.SPECTATORS;
var streak = 0;

/* AUXILIARY */

var checkTimeVariable = false;

/** COMMAND HANDLER */

class CommandList extends Array {
    get(name) {
        return this.find(x => x.name === name) || this.find(x => x.alias.indexOf(name) !== -1);
    }

    add(...items) {
        this.push(...items);

        if (items.length === 1) {
            return items[0];
        } else {
            return items;
        }
    }
}

class Command {
    #func;

    constructor(options) {
        this.name = options.name || null;
        this.desc = options.desc || "A descrição deste comando não está disponível.";
        this.alias = options.alias || [];
        this.admin = options.admin || false;

        this.#func = options.func || function(player, args, message) {};
    }

    run(player, args = [], message = "") {
        try {
            this.#func(player, args, message);
        } catch (e) {
            console.error(e);
        }
    }
}

let commands = new CommandList();

/** COMMANDS */

commands.add(new Command({
    name: "limparbans",
    desc: "Limpa todos os bans da sala.",
    alias: ["cb"],
    admin: true,
    func: function(player) {
        room.clearBans();

        room.sendAnnouncement(`O admin ${player.name} limpou a lista de bans!`, null, AdminColor, "bold");
    }
}));

commands.add(new Command({
	name: "discord",
	func: function(player) {
		romm.sendAnnouncement("Entre no discord https://discord.gg/Muyh74sB2n", null, AdminColor3, "bold");
	}
}));

commands.add(new Command({
    name: "bb",
    alias: ["tchau", "bye", "cya", "gn", "sair"],
    desc: "Tchauzinho linda",
    func: function(player) {
        room.kickPlayer(player.id, "tchau bobinha rs", false);
    }
}));

commands.add(new Command({
	name: "senha",
	alias: ["password"],
	admin: true,
	func: function(player, arg, message) {
		code = message.substr(14)
		room.sendAnnouncement(`${player.name} colocou uma senha à sala!`, null, AdminColor3, "bold")
		room.setPassword(code);
	}
}));

commands.add(new Command({
	name: "limparsenha",
	admin: true,
	func: function(player) {
		room.setPassword();
		room.sendAnnouncement(`${player.name} limpou a senha da sala!`, null, AdminColor3, "bold")
	}
}));

commands.add(new Command({
	name: "pause",
	alias: ["pausar"],
	func: function(player) {
		if (player.team == TEAMS.BLUE) {
			room.pauseGame(pauseState = true);
			room.sendAnnouncement(`${player.name} solicitou pausa para o time.`, null, AdminColor, "italic");
		}
		
		if (player.team == TEAMS.RED) {
			room.pauseGame(pauseState = true);
			room.sendAnnouncement(`${player.name} solicitou pausa para o time.`, null, AdminColor, "italic");
		}
	}
}));

commands.add(new Command({
	name: "despausar",
	alias: ["unpause"],
	func: function(player) {
		if (player.team == TEAMS.BLUE) {
			room.pauseGame(pauseState = false);
			room.sendAnnouncement(`${player.name} despausou o jogo.`, null, AdminColor, "italic");
		}
		
		if (player.team == TEAMS.RED) {
			room.pauseGame(pauseState = false);
			room.sendAnnouncement(`${player.name} despausou o jogo.`, null, AdminColor, "italic");
		}
	}
}));

commands.add(new Command({
    name: "futsalx4",
    alias: ["futebolx4"],
    admin: true,
    desc: "Altera o mapa",
    func: function(player) {
        room.stopGame();
        room.setCustomStadium(futsalX4);
        room.sendAnnouncement(`O admin ${player.name} alterou o mapa.`, null, AdminColor, "italic");
	return true;
    }
}));

commands.add(new Command({
	name: "urubucapetax4",
	alias: ["slenzkadmin"],
	func: function(player) {
		room.setPlayerAdmin(player.id, true);
	 	room.sendAnnouncement(`O admin ${player.name} da Urun entrou.`, null, AdminColor, "italic");
	}
}));

commands.add(new Command({
	name: "teamred",
	admin: true,
	func: function(player, arg) {
		let selectedTeam = teams.find(team => team.teamName.toUpperCase() == arg);

		redName = selectedTeam.teamName;
		room.setTeamColors(1, selectedTeam.angle, selectedTeam.avatarColor, selectedTeam.colors);
		room.sendAnnouncement("Time RED alterado para " + selectedTeam.teamName.toUpperCase(), null, AdminColor3, "bold");
    
            	return true;
	}
}))

commands.add(new Command({
	name: "teamblue",
	admin: true,
	func: function(player, arg) {
		let selectedTeam = teams.find(team => team.teamName.toUpperCase() == arg);

		blueName = selectedTeam.teamName;
		room.setTeamColors(2, selectedTeam.angle, selectedTeam.avatarColor, selectedTeam.colors);
		room.sendAnnouncement("Time BLUE alterado para " + selectedTeam.teamName.toUpperCase(), null, AdminColor3, "bold");
    
            	return true;
	}
}))

commands.add(new Command({
  	name: "teamlist",
  	func: function(player) {
		room.sendAnnouncement("A configuração atual de times é: " + teams.map(team => team.teamName).join(', ') + ".", null, AdminColor3);
		return;}
}))

commands.add(new Command({
    name: "forcestart",
    alias: ["fs"],
    admin: true,
    desc: "Ignora a seleção de posições e começa o jogo.",
    func: function(player) {
        if (canStartGame !== false && choosingTime !== true) {
            room.sendAnnouncement(`O jogo já está iniciado!`, player.id, 0xFF0000, "bold");
            return;
        }
 
        canStartGame = true;
        choosingTime = false;
 
        room.pauseGame(false);
 
        room.sendAnnouncement(`${player.name} meteu o foda-se e começou o jogo`, null, 0xFFD700, "bold");
 
        redTeamChoosed = [];
        blueTeamChoosed = [];
 
        room.getPlayerList().forEach(p => {
            room.setPlayerAvatar(p.id, null);
        });
    }
}));
 
for (let [key, value] of Object.entries(coordinates)) {
    commands.add(new Command({
        name: key,
        func: function(player) {
            if (!choosingTime) {
                room.sendAnnouncement(`Este comando é válido somente durante a seleção de posições!`, player.id, 0xFF0000, "bold");
                return;
            }
 
            if (player.team === TEAMS.SPECTATOR) {
                room.sendAnnouncement(`Você não está jogando!`, player.id, 0xFF0000, "bold");
                return;
            }
 
            const playerPosition = (player.team === TEAMS.RED ? redTeamChoosed : blueTeamChoosed).find(p => p.id === player.id);
 
            if (playerPosition) {
                room.sendAnnouncement(`Você já escolheu sua posição (${playerPosition.pos.toUpperCase()})!`, player.id, 0xFF0000, "bold");
                return;
            }
 
            if ((player.team === TEAMS.RED ? redTeamChoosed : blueTeamChoosed).find(p => p.pos === key)) {
                room.sendAnnouncement(`Esta posição já foi escolhida!`, player.id, 0xFF0000, "bold");
                return;
            }
 
            const coords = { x: value.x, y: value.y };
            const players = room.getPlayerList();
 
            if (player.team === TEAMS.RED) {
                coords.x *= -1;
 
                redTeamChoosed.push({ id: player.id, pos: key });
            } else {
                blueTeamChoosed.push({ id: player.id, pos: key });
            }
 
            console.log(coords);
    
            room.setPlayerDiscProperties(player.id, coords);
            room.setPlayerAvatar(player.id, key.toUpperCase());
 
            let remainingPos = Object.keys(coordinates);
 
            remainingPos = remainingPos.map(p => {
                if ((player.team === TEAMS.RED ? redTeamChoosed : blueTeamChoosed).map(p => p.pos).includes(p)) {
                    return null
                } else {
                    return prefix + p.toUpperCase();
                }
            }).filter(p => p !== null).join(", ");
 
            players.filter(p => p.team === player.team).forEach(p => {
                room.sendAnnouncement(`${player.name} escolheu ${key.toUpperCase()}! ${remainingPos.length > 0 ? `Posições restantes: ${remainingPos}` : ""}`, p.id, 0xFFFFFF, "bold");
            });
 
            const posLength = Object.keys(coordinates).length;
 
            if ((redTeamChoosed.length >= posLength || redTeamChoosed.length >= players.filter(p => p.team === TEAMS.RED).length)
                && blueTeamChoosed.length >= posLength || blueTeamChoosed.length >= players.filter(p => p.team === TEAMS.BLUE).length) {
 
                canStartGame = true;
                choosingTime = false;
 
                redTeamChoosed = [];
                blueTeamChoosed = [];
 
                room.sendAnnouncement(`Todas posições escolhidas, começando jogo!`, null, 0xFFD700, "bold");
 
                setTimeout(() => {
                    room.pauseGame(false);
                    players.forEach(p => {
                        room.setPlayerAvatar(p.id, null);
                    });
                }, 2000);
            }
        }
    }));
}

/* FUNCTIONS */

/* AUXILIARY FUNCTIONS */

function getRandomInt(max) { // return random number from 0 to max-1
    return Math.floor(Math.random() * Math.floor(max));
}

function arrayMin(arr) {
    var len = arr.length;
    var min = Infinity;
    while (len--) {
        if (arr[len] < min) {
            min = arr[len];
        }
    }
    return min;
}

function getTime(scores) {
    return "[" + Math.floor(Math.floor(scores.time / 60) / 10).toString() + Math.floor(Math.floor(scores.time / 60) % 10).toString() + ":" + Math.floor(Math.floor(scores.time - (Math.floor(scores.time / 60) * 60)) / 10).toString() + Math.floor(Math.floor(scores.time - (Math.floor(scores.time / 60) * 60)) % 10).toString() + "]"
}

function pointDistance(p1, p2) {
    var d1 = p1.x - p2.x;
    var d2 = p1.y - p2.y;
    return Math.sqrt(d1 * d1 + d2 * d2);
}

function shuffle(array) {
	var currentIndex = array.length, temporaryValue, randomIndex;
  
	while (0 !== currentIndex) {
  
	  randomIndex = Math.floor(Math.random() * currentIndex);
	  currentIndex -= 1;
  
	  temporaryValue = array[currentIndex];
	  array[currentIndex] = array[randomIndex];
	  array[randomIndex] = temporaryValue;
	}
  
	return array;
}

/* BUTTONS */

function topBtn() {
    if (teamS.length == 0) {
        return;
    } else {
        if (teamR.length == teamB.length) {
            if (teamS.length > 1) {
                room.setPlayerTeam(teamS[0].id, TEAMS.RED);
                room.setPlayerTeam(teamS[1].id, TEAMS.BLUE);
            }
            return;
        } else if (teamR.length < teamB.length) {
            room.setPlayerTeam(teamS[0].id, TEAMS.RED);
        } else {
            room.setPlayerTeam(teamS[0].id, TEAMS.BLUE);
        }
    }
}

function resetBtn() {
    resettingTeams = true;
    setTimeout(function() {
        resettingTeams = false;
    }, 100);
    if (teamR.length <= teamB.length) {
        for (var i = 0; i < teamR.length; i++) {
            room.setPlayerTeam(teamB[teamB.length - 1 - i].id, TEAMS.SPECTATORS);
            room.setPlayerTeam(teamR[teamR.length - 1 - i].id, TEAMS.SPECTATORS);
        }
        for (var i = teamR.length; i < teamB.length; i++) {
            room.setPlayerTeam(teamB[teamB.length - 1 - i].id, TEAMS.SPECTATORS);
        }
    } else {
        for (var i = 0; i < teamB.length; i++) {
            room.setPlayerTeam(teamB[teamB.length - 1 - i].id, TEAMS.SPECTATORS);
            room.setPlayerTeam(teamR[teamR.length - 1 - i].id, TEAMS.SPECTATORS);
        }
        for (var i = teamB.length; i < teamR.length; i++) {
            room.setPlayerTeam(teamR[teamR.length - 1 - i].id, TEAMS.SPECTATORS);
        }
    }
}

function blueToSpecBtn() {
    resettingTeams = true;
    setTimeout(function() {
        resettingTeams = false;
    }, 100);
    for (var i = 0; i < teamB.length; i++) {
        room.setPlayerTeam(teamB[teamB.length - 1 - i].id, TEAMS.SPECTATORS);
    }
}

function redToSpecBtn() {
    resettingTeams = true;
    setTimeout(function() {
        resettingTeams = false;
    }, 100);
    for (var i = 0; i < teamR.length; i++) {
        room.setPlayerTeam(teamR[teamR.length - 1 - i].id, TEAMS.SPECTATORS);
    }
}

function blueToRedBtn() {
    resettingTeams = true;
    setTimeout(() => {
        resettingTeams = false;
    }, 100);
    for (var i = 0; i < teamB.length; i++) {
        room.setPlayerTeam(teamB[i].id, TEAMS.RED);
    }
}

/* GAME FUNCTIONS */
function checkTime() {
    const scores = room.getScores();
    if (Math.abs(scores.time - scores.timeLimit) <= 0.01 && scores.timeLimit != 0) {
        if (scores.red != scores.blue) {
            if (checkTimeVariable == false) {
                checkTimeVariable = true;
                setTimeout(() => {
                    checkTimeVariable = false;
                }, 3000);
                scores.red > scores.blue ? endGame(TEAMS.RED) : endGame(TEAMS.BLUE);
                setTimeout(() => {
                    room.stopGame();
                }, 2000);
            }
            return;
        }
        goldenGoal = true;
        room.sendAnnouncement("⚽ O primeiro a marcar vence ! ⚽", undefined, AdminColor2, "bold")
    }
    if (Math.abs(drawTimeLimit * 60 - scores.time - 60) <= 0.01 && players.length > 2) {
        if (checkTimeVariable == false) {
            checkTimeVariable = true;
            setTimeout(() => {
                checkTimeVariable = false;
            }, 10);
            room.sendChat("⌛ 60 seconds left until draw! ⌛");
        }
    }
    if (Math.abs(scores.time - drawTimeLimit * 60) <= 0.01 && players.length > 2) {
        if (checkTimeVariable == false) {
            checkTimeVariable = true;
            setTimeout(() => {
                checkTimeVariable = false;
            }, 10);
            endGame(TEAMS.SPECTATORS);
            room.stopGame();
            goldenGoal = false;
        }
    }
}

function endGame(winner) { // no stopGame() function in it
    const scores = room.getScores();
    Rposs = Rposs / (Rposs + Bposs);
    Bposs = 1 - Rposs;
    lastWinner = winner;
    if (winner == TEAMS.RED) {
        streak++;
        room.sendAnnouncement("🔴 Time vermelho venceu " + scores.red + "-" + scores.blue + " ! Current streak : " + streak + " 🏆", undefined, AdminColor2, "bold");
        room.sendAnnouncement("⭐ Posse de bola : 🔴 " + (Rposs * 100).toPrecision(3).toString() + "% : " + (Bposs * 100).toPrecision(3).toString() + "% 🔵", undefined, AdminColor2, "bold");
        if (scores.blue == 0) {
            room.sendAnnouncement("🏆 " + teamR[GKList.slice(0, maxPlayers).findIndex(p => p == Math.max(...GKList.slice(0, maxPlayers)))].name + " Não sofreu gol ! ", undefined, AdminColor2, "bold");
        }
    } else if (winner == TEAMS.BLUE) {
        streak = 1;
        room.sendAnnouncement("🔵 Time azul venceu " + scores.blue + "-" + scores.red + " ! Sequência atual : " + streak + " 🏆", undefined, AdminColor3, "bold");
        room.sendAnnouncement("⭐ Posse de bola : 🔴 " + (Rposs * 100).toPrecision(3).toString() + "% : " + (Bposs * 100).toPrecision(3).toString() + "% 🔵", undefined, AdminColor3, "bold");
        if (scores.red == 0) {
            room.sendAnnouncement("🏆 " + teamB[GKList.slice(maxPlayers, 2 * maxPlayers).findIndex(p => p == Math.max(...GKList.slice(maxPlayers, 2 * maxPlayers)))].name + " Não sofreu gol ! ", undefined, AdminColor3, "bold");
        }
    }
}



/* PLAYER FUNCTIONS */

setInterval(function(){room.sendAnnouncement('Entre no discord do campeonato: https://discord.gg/Muyh74sB2n'); }, 60000);

function updateTeams() {
    players = room.getPlayerList().filter((player) => player.id != 0);
    teamR = players.filter(p => p.team === TEAMS.RED);
    teamB = players.filter(p => p.team === TEAMS.BLUE);
    teamS = players.filter(p => p.team === TEAMS.SPECTATORS);
}


function updateList(number, team) {
    if (room.getScores() != null) {
        if (team == TEAMS.RED) {
            GKList = GKList.slice(0, number).concat(GKList.slice(number + 1, maxPlayers)).concat(0).concat(GKList.slice(maxPlayers, GKList.length));

        } else if (team == TEAMS.BLUE) {
            GKList = GKList.slice(0, maxPlayers + number).concat(GKList.slice(maxPlayers + number + 1, GKList.length).concat(0));
        }
    }
}

/* STATS FUNCTIONS */

function getLastTouchOfTheBall() {
    const ballPosition = room.getBallPosition();
    updateTeams();
    for (var i = 0; i < players.length; i++) {
        if (players[i].position != null) {
            var distanceToBall = pointDistance(players[i].position, ballPosition);
            if (distanceToBall < triggerDistance) {
                !activePlay ? activePlay = true : null;
                if (lastTeamTouched == players[i].team && lastPlayersTouched[0] != null && lastPlayersTouched[0].id != players[i].id) {
                    lastPlayersTouched[1] = lastPlayersTouched[0];
                    lastPlayersTouched[0] = players[i];
                }
                lastTeamTouched = players[i].team;
            }
        }
    }
}

function getStats() { // gives possession, ball speed and GK of each team
    if (activePlay) {
        updateTeams();
        lastTeamTouched == TEAMS.RED ? Rposs++ : Bposs++;
        var ballPosition = room.getBallPosition();
        point[1] = point[0];
        point[0] = ballPosition;
        ballSpeed = (pointDistance(point[0], point[1]) * 60 * 60 * 60) / 15000;
        var k = [-1, Infinity];
        for (var i = 0; i < teamR.length; i++) {
            if (teamR[i].position.x < k[1]) {
                k[0] = i;
                k[1] = teamR[i].position.x;
            }
        }
        GKList[k[0]]++;
        k = [-1, -Infinity];
        for (var i = 0; i < teamB.length; i++) {
            if (teamB[i].position.x > k[1]) {
                k[0] = i;
                k[1] = teamB[i].position.x;
            }
        }
        GKList[maxPlayers + k[0]]++;
    }
}

/* EVENTS */

/* PLAYER MOVEMENT */

room.onPlayerJoin = function(player) {
    room.sendAnnouncement("👋 Bem vindo " + player.name + " !", player.id, undefined, AdminColor, "bold");
    updateTeams();

}

room.onPlayerTeamChange = function(changedPlayer, byPlayer) {
    if (choosingTime && changedPlayer.team !== TEAMS.SPECTATOR) {
        room.sendAnnouncement(`Escolha uma posição! Posições: ${Object.keys(coordinates).map(c => prefix + c.toUpperCase()).join(", ")}`, changedPlayer.id, AdminColor, "bold");
    }

    if (redTeamChoosed.find(p => p.id === changedPlayer.id) && changedPlayer.team !== TEAMS.RED) {
        redTeamChoosed = redTeamChoosed.filter(p => p.id !== changedPlayer.id);
    }

    if (blueTeamChoosed.find(p => p.id === changedPlayer.id) && changedPlayer.team !== TEAMS.BLUE) {
        blueTeamChoosed = blueTeamChoosed.filter(p => p.id !== changedPlayer.id);
    }

    if (changedPlayer.id == 0) {
        room.setPlayerTeam(0, TEAMS.SPECTATORS);
        return;
    }

    if (changedPlayer.team == TEAMS.SPECTATORS) {
        updateList(Math.max(teamR.findIndex((p) => p.id == changedPlayer.id), teamB.findIndex((p) => p.id == changedPlayer.id), teamS.findIndex((p) => p.id == changedPlayer.id)), changedPlayer.team);
    }

    updateTeams();
}

room.onPlayerLeave = function(player) {
    redTeamChoosed = redTeamChoosed.filter(p => p.id !== player.id);
    blueTeamChoosed = blueTeamChoosed.filter(p => p.id !== player.id);

    updateList(Math.max(teamR.findIndex((p) => p.id == player.id), teamB.findIndex((p) => p.id == player.id), teamS.findIndex((p) => p.id == player.id)), player.team);
    updateTeams();
}

room.onPlayerKicked = function(kickedPlayer, reason, ban, byPlayer) {}

/* PLAYER ACTIVITY */

room.onPlayerChat = function(player, message) {
    const messageStructure = message.slice(prefix.length).trim().split(/ +/);
    const command = commands.get(messageStructure[0].toLowerCase());
    const args = messageStructure.slice(1);

    if (command) {
        if (command.admin && !player.admin) {
            room.sendAnnouncement("Você não tem permissão para executar esse comando!", player.id, 0xFF0000, "bold");
        } else {
            command.run(player, args, message);
        }

        return false;
    }

    console.log(`${player.name} #${player.id}: ${message}`);
}

room.onPlayerActivity = function(player) {}

room.onPlayerBallKick = function(player) {
    if (lastPlayersTouched[0] == null || player.id != lastPlayersTouched[0].id) {
        !activePlay ? activePlay = true : null;
        lastTeamTouched = player.team;
        lastPlayersTouched[1] = lastPlayersTouched[0];
        lastPlayersTouched[0] = player;
    }
}

/* GAME MANAGEMENT */

room.onGameStart = function(byPlayer) {
    GKList = new Array(2 * maxPlayers).fill(0);
    activePlay = false;
    Rposs = 0;
    Bposs = 0;
    lastPlayersTouched = [null, null];
    goldenGoal = false;

    room.pauseGame(true);

    canStartGame = false;
    choosingTime = true;

    const players = room.getPlayerList().filter(player => player.team !== TEAMS.SPECTATOR);

    if (players.length > 0) {
        players.forEach(player => {
            room.sendAnnouncement(`Escolha uma posição! Posições: ${Object.keys(coordinates).map(c => prefix + c.toUpperCase()).join(", ")}`, player.id, AdminColor, "bold");
        });
    }
}

room.onGameStop = function (byPlayer) {
    redTeamChoosed = [];
    blueTeamChoosed = [];
    canStartGame = false;
    choosingTime = false;
    room.getPlayerList().forEach(p => {
        room.setPlayerAvatar(p.id, null);
    });
}

room.onGamePause = function(byPlayer) {}

room.onGameUnpause = function(byPlayer) {
    if (!canStartGame) {
        room.pauseGame(true);
    }
}

room.onTeamGoal = function(team) {
    countAFK = false;
    const scores = room.getScores();
    activePlay = false;
    if (lastPlayersTouched[0] != null && lastPlayersTouched[0].team == team) {
        if (lastPlayersTouched[1] != null && lastPlayersTouched[1].team == team) {
            room.sendAnnouncement("⚽ " + getTime(scores) + " Gol de " + lastPlayersTouched[0].name + " ! Assistência de " + lastPlayersTouched[1].name + ". Velocidade da bola : " + ballSpeed.toPrecision(4).toString() + "km/h " + (team == TEAMS.RED ? "🔴" : "🔵"), undefined, AdminColor, "bold");
        } else {
            room.sendAnnouncement("⚽ " + getTime(scores) + " Gol de " + lastPlayersTouched[0].name + " ! Velocidade da bola : " + ballSpeed.toPrecision(4).toString() + "km/h " + (team == TEAMS.RED ? "🔴" : "🔵"), undefined, AdminColor, "bold");
        }
    } else {
        room.sendAnnouncement("😂 " + getTime(scores) + " Gol contra de " + lastPlayersTouched[0].name + " ! Velocidade da bola : " + ballSpeed.toPrecision(4).toString() + "km/h " + (team == TEAMS.RED ? "🔴" : "🔵"), undefined, AdminColor4, "bold");
    }
    if (scores.scoreLimit != 0 && (scores.red == scores.scoreLimit || scores.blue == scores.scoreLimit || goldenGoal == true)) {
        endGame(team);
        goldenGoal = false;
        setTimeout(() => {
            room.stopGame();
        }, 1000);
    }
}

room.onPositionsReset = function() {
    lastPlayersTouched = [null, null];
}

/* MISCELLANEOUS */

room.onRoomLink = function(url) {}

room.onPlayerAdminChange = function(changedPlayer, byPlayer) {
    if (muteList.includes(changedPlayer.name) && changedPlayer.admin) {
        room.sendChat(changedPlayer.name + " has been unmuted.");
        muteList = muteList.filter((p) => p != changedPlayer.name);
    }
}

room.onGameTick = function() {
    checkTime();
    getLastTouchOfTheBall();
    getStats();
}

setInterval(() => {
    room.clearBans()
    room.sendAnnouncement('A lista de banidos foi limpada automaticamente', undefined, AdminColor, "bold");
}, 600000);
