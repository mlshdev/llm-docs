> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkbaseplayer](https://developer.apple.com/documentation/gamekit/gkbaseplayer)

# GKBasePlayer (Swift)

**Framework:** GameKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

A class that provides common data and methods for the different player objects.

## Declaration

```swift
class GKBasePlayer
```

<a id="overview"></a>

## Overview

[GKBasePlayer](gkbaseplayer.md) is the abstract superclass for the classes that represent the local player running your app and remote players who may join their games. Use the [GKLocalPlayer](gklocalplayer.md) subclass to initialize the local player who runs your app on their device. Then you can access the local player’s nickname, avatar, leaderboards, and achievements. You can also invite other players ([GKPlayer](gkplayer.md) objects), and send information between players.

## Topics

### Identifying a Player

- [displayName](gkbaseplayer/displayname.md): The Game Center profile name for a player.
- [playerID](gkbaseplayer/playerid.md): Deprecated. A unique identifier for a player.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [GKCloudPlayer](gkcloudplayer.md)
- [GKPlayer](gkplayer.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Players

- [Connecting players with their friends in your game](connecting-players-with-their-friends-in-your-game.md): Give players the ability to connect and interact with friends in your game.
- [Saving the player’s game data to an iCloud account](saving-the-player-s-game-data-to-an-icloud-account.md): Save game data during play or after a game in the player’s iCloud account that’s accessible from any device.
- [Protecting the player’s privacy using scoped identifiers](protecting-the-player-s-privacy-using-scoped-identifiers.md): Use the scoped identifiers that GameKit provides you as player IDs when transmitting or saving player data.
- [GKLocalPlayer](gklocalplayer.md): The local player who signs in to Game Center on the device running the game.
- [GKPlayer](gkplayer.md): A remote player who the local player running your game can invite and communicate with through Game Center.
- [GKLocalPlayerListener](gklocalplayerlistener.md): A protocol that handles events for Game Center players.
- [GKPlayerAuthenticationDidChangeNotificationName](../foundation/nsnotification/name-swift.struct/gkplayerauthenticationdidchangenotificationname.md): A notification that posts after GameKit authenticates the local player.
- [GKPlayerDidChangeNotificationName](../foundation/nsnotification/name-swift.struct/gkplayerdidchangenotificationname.md): A notification that posts when a player object’s data changes.

# GKBasePlayer (Objective-C)

**Framework:** GameKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

A class that provides common data and methods for the different player objects.

## Declaration

```objectivec
@interface GKBasePlayer : NSObject
```

<a id="overview"></a>

## Overview

[GKBasePlayer](gkbaseplayer.md) is the abstract superclass for the classes that represent the local player running your app and remote players who may join their games. Use the [GKLocalPlayer](gklocalplayer.md) subclass to initialize the local player who runs your app on their device. Then you can access the local player’s nickname, avatar, leaderboards, and achievements. You can also invite other players ([GKPlayer](gkplayer.md) objects), and send information between players.

## Topics

### Identifying a Player

- [displayName](gkbaseplayer/displayname.md): The Game Center profile name for a player.
- [playerID](gkbaseplayer/playerid.md): Deprecated. A unique identifier for a player.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [GKCloudPlayer](gkcloudplayer.md)
- [GKPlayer](gkplayer.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Players

- [Connecting players with their friends in your game](connecting-players-with-their-friends-in-your-game.md): Give players the ability to connect and interact with friends in your game.
- [Saving the player’s game data to an iCloud account](saving-the-player-s-game-data-to-an-icloud-account.md): Save game data during play or after a game in the player’s iCloud account that’s accessible from any device.
- [Protecting the player’s privacy using scoped identifiers](protecting-the-player-s-privacy-using-scoped-identifiers.md): Use the scoped identifiers that GameKit provides you as player IDs when transmitting or saving player data.
- [GKLocalPlayer](gklocalplayer.md): The local player who signs in to Game Center on the device running the game.
- [GKPlayer](gkplayer.md): A remote player who the local player running your game can invite and communicate with through Game Center.
- [GKLocalPlayerListener](gklocalplayerlistener.md): A protocol that handles events for Game Center players.
- [GKPlayerAuthenticationDidChangeNotificationName](gkplayerauthenticationdidchangenotificationname.md): A notification that posts after GameKit initializes the local player.
- [GKPlayerDidChangeNotificationName](gkplayerdidchangenotificationname.md): A notification that posts when a player object’s data changes.
