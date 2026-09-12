> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkplayer](https://developer.apple.com/documentation/gamekit/gkplayer)

# GKPlayer (Swift)

**Framework:** GameKit  
**Kind:** Class  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

A remote player who the local player running your game can invite and communicate with through Game Center.

## Declaration

```swift
class GKPlayer
```

## Mentioned In

- [Protecting the player’s privacy using scoped identifiers](protecting-the-player-s-privacy-using-scoped-identifiers.md)
- [Authenticating a player](authenticating-a-player.md)

<a id="overview"></a>

## Overview

Before using Game Center for the first time, players create a single account that identifies them across all Game Center games. The player only needs to sign in to Game Center once per device to start using GameKit features in your game. A player sets a nickname and avatar in their account that provide a consistent and familiar look in your game. Game Center then uses the account to record leaderboard scores and achievements, and to start games with other players.

In your code, [GKPlayer](gkplayer.md) represents remote or other players who the local player running your app can invite and communicate with. [GKPlayer](gkplayer.md) is also the superclass for the local player [GKLocalPlayer](gklocalplayer.md) class that provides common data and methods for all players. For example, use the [alias](gkplayer/alias.md) property to get the nickname for a player. To load the player avatars, use the [loadPhoto(for:withCompletionHandler:)](gkplayer/loadphoto%28for_withcompletionhandler_%29.md) method.

To create a guest player who doesn’t have a Game Center account, use the [anonymousGuestPlayer(withIdentifier:)](gkplayer/anonymousguestplayer%28withidentifier_%29.md) method. GameKit treats guest players similar to Game Center players except they can’t earn achievements, post to leaderboards, or participate in challenges.

Use the [gamePlayerID](gkplayer/gameplayerid.md) property as a unique identifier for just your game, and the [teamPlayerID](gkplayer/teamplayerid.md) property as a unique identifier for all games that you offer through your developer account. For more information, see [Protecting the player’s privacy using scoped identifiers](protecting-the-player-s-privacy-using-scoped-identifiers.md).

## Topics

### Identifying the player

- [gamePlayerID](gkplayer/gameplayerid.md): A unique identifier for a player of the game.
- [teamPlayerID](gkplayer/teamplayerid.md): A unique identifier for a player of all the games that you distribute using your developer account.
- [scopedIDsArePersistent()](gkplayer/scopedidsarepersistent%28%29.md): Returns a Boolean value depending on whether the player identifiers are persistent across game instances or unique to the game instance.
- [GKPlayerIDNoLongerAvailable](gkplayeridnolongeravailable.md): A constant for a player ID that’s no longer available.
- [playerID](gkplayer/playerid.md): Deprecated. A unique identifier for a player of the game.

### Accessing player details

- [alias](gkplayer/alias.md): A string the player chooses to identify themself to other players.
- [displayName](gkplayer/displayname.md): A string to display for the player.
- [isInvitable](gkplayer/isinvitable.md): A Boolean value that indicates whether the local player can send an invitation to the player.
- [isFriend](gkplayer/isfriend.md): Deprecated. A Boolean value that indicates whether the player is a friend of the local player.

### Loading player photos

- [loadPhoto(for:withCompletionHandler:)](gkplayer/loadphoto%28for_withcompletionhandler_%29.md): Loads a photo of the player from Game Center.
- [GKPlayer.PhotoSize](gkplayer/photosize.md): The size of a photo that Game Center loads.

### Creating a guest player

- [anonymousGuestPlayer(withIdentifier:)](gkplayer/anonymousguestplayer%28withidentifier_%29.md): Creates a guest player with the specified identifier.
- [guestIdentifier](gkplayer/guestidentifier.md): A developer-created string that identifies a guest player.

### Observing notifications

- [GKPlayerDidChangeNotificationName](../foundation/nsnotification/name-swift.struct/gkplayerdidchangenotificationname.md): A notification that posts when a player object’s data changes.

### Loading player details

- [loadPlayers(forIdentifiers:withCompletionHandler:)](gkplayer/loadplayers%28foridentifiers_withcompletionhandler_%29.md): Deprecated. Loads information about a list of players from Game Center.

## Relationships

### Inherits From

- [GKBasePlayer](gkbaseplayer.md)

### Inherited By

- [GKLocalPlayer](gklocalplayer.md)

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
- [GKBasePlayer](gkbaseplayer.md): A class that provides common data and methods for the different player objects.
- [GKLocalPlayerListener](gklocalplayerlistener.md): A protocol that handles events for Game Center players.
- [GKPlayerAuthenticationDidChangeNotificationName](../foundation/nsnotification/name-swift.struct/gkplayerauthenticationdidchangenotificationname.md): A notification that posts after GameKit authenticates the local player.
- [GKPlayerDidChangeNotificationName](../foundation/nsnotification/name-swift.struct/gkplayerdidchangenotificationname.md): A notification that posts when a player object’s data changes.

# GKPlayer (Objective-C)

**Framework:** GameKit  
**Kind:** Class  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

A remote player who the local player running your game can invite and communicate with through Game Center.

## Declaration

```objectivec
@interface GKPlayer : GKBasePlayer
```

## Mentioned In

- [Protecting the player’s privacy using scoped identifiers](protecting-the-player-s-privacy-using-scoped-identifiers.md)
- [Authenticating a player](authenticating-a-player.md)

<a id="overview"></a>

## Overview

Before using Game Center for the first time, players create a single account that identifies them across all Game Center games. The player only needs to sign in to Game Center once per device to start using GameKit features in your game. A player sets a nickname and avatar in their account that provide a consistent and familiar look in your game. Game Center then uses the account to record leaderboard scores and achievements, and to start games with other players.

In your code, [GKPlayer](gkplayer.md) represents remote or other players who the local player running your app can invite and communicate with. [GKPlayer](gkplayer.md) is also the superclass for the local player [GKLocalPlayer](gklocalplayer.md) class that provides common data and methods for all players. For example, use the [alias](gkplayer/alias.md) property to get the nickname for a player. To load the player avatars, use the [loadPhotoForSize:withCompletionHandler:](gkplayer/loadphoto%28for_withcompletionhandler_%29.md) method.

To create a guest player who doesn’t have a Game Center account, use the [anonymousGuestPlayerWithIdentifier:](gkplayer/anonymousguestplayer%28withidentifier_%29.md) method. GameKit treats guest players similar to Game Center players except they can’t earn achievements, post to leaderboards, or participate in challenges.

Use the [gamePlayerID](gkplayer/gameplayerid.md) property as a unique identifier for just your game, and the [teamPlayerID](gkplayer/teamplayerid.md) property as a unique identifier for all games that you offer through your developer account. For more information, see [Protecting the player’s privacy using scoped identifiers](protecting-the-player-s-privacy-using-scoped-identifiers.md).

## Topics

### Identifying the player

- [gamePlayerID](gkplayer/gameplayerid.md): A unique identifier for a player of the game.
- [teamPlayerID](gkplayer/teamplayerid.md): A unique identifier for a player of all the games that you distribute using your developer account.
- [scopedIDsArePersistent](gkplayer/scopedidsarepersistent%28%29.md): Returns a Boolean value depending on whether the player identifiers are persistent across game instances or unique to the game instance.
- [GKPlayerIDNoLongerAvailable](gkplayeridnolongeravailable.md): A constant for a player ID that’s no longer available.
- [playerID](gkplayer/playerid.md): Deprecated. A unique identifier for a player of the game.

### Accessing player details

- [alias](gkplayer/alias.md): A string the player chooses to identify themself to other players.
- [displayName](gkplayer/displayname.md): A string to display for the player.
- [isInvitable](gkplayer/isinvitable.md): A Boolean value that indicates whether the local player can send an invitation to the player.
- [isFriend](gkplayer/isfriend.md): Deprecated. A Boolean value that indicates whether the player is a friend of the local player.

### Loading player photos

- [loadPhotoForSize:withCompletionHandler:](gkplayer/loadphoto%28for_withcompletionhandler_%29.md): Loads a photo of the player from Game Center.
- [GKPhotoSize](gkplayer/photosize.md): The size of a photo that Game Center loads.

### Creating a guest player

- [anonymousGuestPlayerWithIdentifier:](gkplayer/anonymousguestplayer%28withidentifier_%29.md): Creates a guest player with the specified identifier.
- [guestIdentifier](gkplayer/guestidentifier.md): A developer-created string that identifies a guest player.

### Observing notifications

- [GKPlayerDidChangeNotificationName](gkplayerdidchangenotificationname.md): A notification that posts when a player object’s data changes.

### Loading player details

- [loadPlayersForIdentifiers:withCompletionHandler:](gkplayer/loadplayers%28foridentifiers_withcompletionhandler_%29.md): Deprecated. Loads information about a list of players from Game Center.

## Relationships

### Inherits From

- [GKBasePlayer](gkbaseplayer.md)

### Inherited By

- [GKLocalPlayer](gklocalplayer.md)

## See Also

### Players

- [Connecting players with their friends in your game](connecting-players-with-their-friends-in-your-game.md): Give players the ability to connect and interact with friends in your game.
- [Saving the player’s game data to an iCloud account](saving-the-player-s-game-data-to-an-icloud-account.md): Save game data during play or after a game in the player’s iCloud account that’s accessible from any device.
- [Protecting the player’s privacy using scoped identifiers](protecting-the-player-s-privacy-using-scoped-identifiers.md): Use the scoped identifiers that GameKit provides you as player IDs when transmitting or saving player data.
- [GKLocalPlayer](gklocalplayer.md): The local player who signs in to Game Center on the device running the game.
- [GKBasePlayer](gkbaseplayer.md): A class that provides common data and methods for the different player objects.
- [GKLocalPlayerListener](gklocalplayerlistener.md): A protocol that handles events for Game Center players.
- [GKPlayerAuthenticationDidChangeNotificationName](gkplayerauthenticationdidchangenotificationname.md): A notification that posts after GameKit initializes the local player.
- [GKPlayerDidChangeNotificationName](gkplayerdidchangenotificationname.md): A notification that posts when a player object’s data changes.
