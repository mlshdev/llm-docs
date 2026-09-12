> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkplayerdidchangenotificationname](https://developer.apple.com/documentation/gamekit/gkplayerdidchangenotificationname)

# GKPlayerDidChangeNotificationName

**Interface language:** Objective-C

**Framework:** GameKit  
**Kind:** Global Variable  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

A notification that posts when a player object’s data changes.

## Declaration

```objectivec
extern NSNotificationName GKPlayerDidChangeNotificationName;
```

## See Also

### Players

- [Connecting players with their friends in your game](connecting-players-with-their-friends-in-your-game.md): Give players the ability to connect and interact with friends in your game.
- [Saving the player’s game data to an iCloud account](saving-the-player-s-game-data-to-an-icloud-account.md): Save game data during play or after a game in the player’s iCloud account that’s accessible from any device.
- [Protecting the player’s privacy using scoped identifiers](protecting-the-player-s-privacy-using-scoped-identifiers.md): Use the scoped identifiers that GameKit provides you as player IDs when transmitting or saving player data.
- [GKLocalPlayer](gklocalplayer.md): The local player who signs in to Game Center on the device running the game.
- [GKPlayer](gkplayer.md): A remote player who the local player running your game can invite and communicate with through Game Center.
- [GKBasePlayer](gkbaseplayer.md): A class that provides common data and methods for the different player objects.
- [GKLocalPlayerListener](gklocalplayerlistener.md): A protocol that handles events for Game Center players.
- [GKPlayerAuthenticationDidChangeNotificationName](gkplayerauthenticationdidchangenotificationname.md): A notification that posts after GameKit initializes the local player.
