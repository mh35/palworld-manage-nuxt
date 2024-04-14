export interface ServerInfo {
  version: string;
  servername: string;
  description: string;
}

export interface PlayerInfo {
  name: string;
  playerid: string;
  userid: string;
  ip: string;
  ping: number;
  location_x: number;
  location_y: number;
  level: number;
}
