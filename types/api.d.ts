/**
 * GetServerInfo response
 */
export interface ServerInfo {
  /**
   * The server version
   */
  version: string;
  /**
   * The server name
   */
  servername: string;
  /**
   * The server description
   */
  description: string;
}

/**
 * ListPlayers response player item
 */
export interface PlayerInfo {
  /**
   * Player name
   */
  name: string;
  /**
   * The player ID
   */
  playerId: string;
  /**
   * The user ID
   */
  userId: string;
  /**
   * The player IP address
   */
  ip: string;
  /**
   * The player ping
   */
  ping: number;
  /**
   * The X coordinate of the player
   */
  location_x: number;
  /**
   * The y coordinate of the player
   */
  location_y: number;
  /**
   * Player level
   */
  level: number;
}

/**
 * GetServerMetrics response
 */
export interface ServerMetrics {
  /**
   * Server FPS
   */
  serverfps: number;
  /**
   * The number of current players
   */
  currentplayernum: number;
  /**
   * Server frame time in ms
   */
  serverframetime: number;
  /**
   * The maximum number of players
   */
  maxplayernum: number;
  /**
   * The server uptime in seconds
   */
  uptime: number;
}

/**
 * GetServerSettings response
 */
export interface ServerSettings {
  /**
   * Difficulty, None means custom difficulty
   */
  Difficulty: string;
  /**
   * Day time speed rate
   * If this number is 1, 1600 seconds.
   * For example, if this number is 2, 800 seconds
   */
  DayTimeSpeedRate: number;
  /**
   * Night time speed rate
   * If this number is 1, 320 seconds.
   * For example, if this number is 2, 160 seconds
   */
  NightTimeSpeedRate: number;
  /**
   * Experience point rate
   */
  ExpRate: number;
  /**
   * Pal capture probability rate
   */
  PalCaptureRate: number;
  /**
   * Pal spawn number rate
   */
  PalSpawnNumRate: number;
  /**
   * Damage rate of Pal attack
   */
  PalDamageRateAttack: number;
  /**
   * Damage rate of Pal defence
   */
  PalDamageRateDefense: number;
  /**
   * Damage rate of player attack
   */
  PlayerDamageRateAttack: number;
  /**
   * Damage rate of player defence
   */
  PlayerDamageRateDefense: number;
  /**
   * Decrease rate of player stomach
   */
  PlayerStomachDecreaceRate: number;
  /**
   * Decrease rate of player stamina
   */
  PlayerStaminaDecreaceRate: number;
  /**
   * Auto HP healing rate of player
   */
  PlayerAutoHPRegeneRate: number;
  /**
   * Auto HP healing rate of player when sleeping
   */
  PlayerAutoHpRegeneRateInSleep: number;
  /**
   * Decrease rate of Pal stomach
   */
  PalStomachDecreaceRate: number;
  /**
   * Decrease rate of Pal stamina
   */
  PalStaminaDecreaceRate: number;
  /**
   * Auto HP healing rate of Pal
   */
  PalAutoHPRegeneRate: number;
  /**
   * Auto HP healing rate of Pal when sleeping
   */
  PalAutoHpRegeneRateInSleep: number;
  /**
   * Damage rate to building objects
   */
  BuildObjectDamageRate: number;
  /**
   * Deterioration damage rate to building out of base camp
   */
  BuildObjectDeteriorationDamageRate: number;
  /**
   * Item drop rate from collection object
   */
  CollectionDropRate: number;
  /**
   * HP rate of collection object
   */
  CollectionObjectHpRate: number;
  /**
   * The game days of respawn of collection object
   */
  CollectionObjectRespawnSpeedRate: number;
  /**
   * Item drop rate from enemy
   */
  EnemyDropItemRate: number;
  /**
   * Penalty when player dies
   * 
   * None: No penalty
   * Item: Player drops items except equipments equipping
   * ItemAndEquipment: Player drops items including equipments
   * All: Player drops items and Pals
   */
  DeathPenalty: 'None' | 'Item' | 'ItemAndEquipment' | 'All';
  bEnablePlayerToPlayerDamage: boolean;
  bEnableFriendlyFire: boolean;
  /**
   * Whether the server enables invader enemy
   */
  bEnableInvaderEnemy: boolean;
  bActiveUNKO: boolean;
  bEnableAimAssistPad: boolean;
  bEnableAimAssistKeyboard: boolean;
  DropItemMaxNum: number;
  DropItemMaxNum_UNKO: number;
  BaseCampMaxNum: number;
  /**
   * The number of worker Pals in a base camp
   */
  BaseCampWorkerMaxNum: number;
  DropItemAliveMaxHours: number;
  bAutoResetGuildNoOnlinePlayers: boolean;
  AutoResetGuildTimeNoOnlinePlayers: number;
  /**
   * The max number of players in a guild
   */
  GuildPlayerMaxNum: number;
  /**
   * Huge egg hatching time in hours without climate effect
   * If this number is 1, normal egg hatches in 5 minutes.
   * If this number is 1, large egg hatches in 20 minutes.
   * 
   * The climate effect changes the time.
   */
  PalEggDefaultHatchingTime: number;
  WorkSpeedRate: number;
  bIsMultiplay: boolean;
  bIsPvP: boolean;
  bCanPickupOtherGuildDeathPenaltyDrop: boolean;
  bEnableNonLoginPenalty: boolean;
  bEnableFastTravel: boolean;
  bIsStartLocationSelectByMap: boolean;
  bExistPlayerAfterLogout: boolean;
  bEnableDefenseOtherGuildPlayer: boolean;
  CoopPlayerMaxNum: number;
  /**
   * The max number of players in server 
   */
  ServerPlayerMaxNum: number;
  /**
   * Server name
   */
  ServerName: string;
  /**
   * Server description
   */
  ServerDescription: string;
  /**
   * Community server port number
   */
  PublicPort: number;
  /**
   * Community server public IP address
   */
  PublicIP: string;
  /**
   * Whether RCON is enabled or not
   */
  RCONEnabled: boolean;
  /**
   * RCON port number
   */
  RCONPort: number;
  Region: string;
  bUseAuth: boolean;
  BanListURL: string;
  /**
   * Whether REST API is enabled or not
   */
  RESTAPIEnabled: boolean;
  /**
   * REST API port number
   */
  RESTAPIPort: number;
  /**
   * Whether shows player list or not
   */
  bShowPlayerList: boolean;
  /**
   * Reserved field
   */
  AllowConnectPlatform: string;
  /**
   * Whether auto backup is enabled or not
   */
  bIsUseBackupSaveData: boolean;
  /**
   * Log format type
   */
  LogFormatType: 'Text' | 'Json';
}

export interface AnnounceInput {
  message: string;
}
