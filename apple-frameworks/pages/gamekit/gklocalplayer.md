> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gklocalplayer](https://developer.apple.com/documentation/gamekit/gklocalplayer)

# GKLocalPlayer (Swift)

**Framework:** GameKit  
**Kind:** Class  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

The local player who signs in to Game Center on the device running the game.

## Declaration

```swift
class GKLocalPlayer
```

## Mentioned In

- [Authenticating a player](authenticating-a-player.md)
- [Initializing and configuring Game Center](initializing-and-configuring-game-center.md)
- [Protecting the player’s privacy using scoped identifiers](protecting-the-player-s-privacy-using-scoped-identifiers.md)

<a id="overview"></a>

## Overview

Only one player can sign in to Game Center on a device at a time and that player is the *local player*. Before you can start a game that uses GameKit features, verify that the local player signs in to their Game Center account.

You set the handler of the local player shared instance using the [authenticateHandler](gklocalplayer/authenticatehandler.md) property. Then implement this method to handle the multiple times GameKit invokes it during the sign-in process. If the local player needs to create an account or sign in, GameKit provides a view controller that you present to the local player. If the local player successfully signs in, determine whether they have any account restrictions and adjust your game accordingly. For more information about the initialization of the local player, see [Authenticating a player](authenticating-a-player.md).

After the local player signs in, their account data and GameKit features are available. You can display the local player’s nickname and avatar, access their recent players and friends, and load their leaderboards and achievements. You can also register a listener object that GameKit calls when the local player sends or accepts invitations to play with others.

## Topics

### Accessing the Local Player

- [local](gklocalplayer/local-oaa8.md): The shared instance of the local player.

### Authenticating the Local Player

- [authenticateHandler](gklocalplayer/authenticatehandler.md): A handler that GameKit calls while initializing the local player.
- [isAuthenticated](gklocalplayer/isauthenticated.md): A Boolean value that indicates whether a local player has signed in to Game Center.
- [fetchItems(forIdentityVerificationSignature:)](gklocalplayer/fetchitems%28foridentityverificationsignature_%29.md): Generates a signature that you can use to authenticate the local player on your own server.
- [GKPlayerAuthenticationDidChangeNotificationName](../foundation/nsnotification/name-swift.struct/gkplayerauthenticationdidchangenotificationname.md): A notification that posts after GameKit authenticates the local player.

### Determining Whether the Player Is Underage or Restricted

- [isUnderage](gklocalplayer/isunderage.md): A Boolean value that indicates whether the local player is underage.
- [isMultiplayerGamingRestricted](gklocalplayer/ismultiplayergamingrestricted.md): A Boolean value that indicates whether the player can join multiplayer games.
- [isPersonalizedCommunicationRestricted](gklocalplayer/ispersonalizedcommunicationrestricted.md): A Boolean value that indicates whether the player can use personalized communication on the device.

### Accessing Friends and Recents

- [loadFriendsAuthorizationStatus(\_:)](gklocalplayer/loadfriendsauthorizationstatus%28__%29.md): Returns whether the player authorizes your game to access their friends list.
- [GKFriendsAuthorizationStatus](gkfriendsauthorizationstatus.md): Constants that indicate if the local player grants access to their friends list.
- [loadFriends(\_:)](gklocalplayer/loadfriends%28__%29.md): Loads the local player’s friends list if the local player and their friends grant access.
- [loadFriends(identifiedBy:completionHandler:)](gklocalplayer/loadfriends%28identifiedby_completionhandler_%29.md): Loads the player’s friends list, scoped by the identifiers, if the player and their friends grant access.
- [NSGKFriendListUsageDescription](../bundleresources/information-property-list/nsgkfriendlistusagedescription.md): A message that tells people why the app needs access to their Game Center friends list.
- [loadChallengableFriends(completionHandler:)](gklocalplayer/loadchallengablefriends%28completionhandler_%29.md): Loads players to whom the local player can issue a challenge.
- [loadRecentPlayers(completionHandler:)](gklocalplayer/loadrecentplayers%28completionhandler_%29.md): Loads players from the friends list or players that recently participated in a game with the local player.

### Adding Friends

- [isPresentingFriendRequestViewController](gklocalplayer/ispresentingfriendrequestviewcontroller.md): A Boolean value that indicates whether your game presents the friends request view controller.
- [presentFriendRequestCreator(from:)](gklocalplayer/presentfriendrequestcreator%28from_%29-7j1kn.md): Presents a view controller with a Messages sheet for the player to request friends.
- [presentFriendRequestCreator(from:)](gklocalplayer/presentfriendrequestcreator%28from_%29-7clh6.md): Opens the Messages app with a sheet for the player to request friends.

### Working with Leaderboards

- [loadDefaultLeaderboardIdentifier(completionHandler:)](gklocalplayer/loaddefaultleaderboardidentifier%28completionhandler_%29.md): Deprecated. Loads the identifier for the local player’s default leaderboard.
- [setDefaultLeaderboardIdentifier(\_:completionHandler:)](gklocalplayer/setdefaultleaderboardidentifier%28__completionhandler_%29.md): Deprecated. Sets the local player’s default leaderboard.

### Registering Listeners

- [register(\_:)](gklocalplayer/register%28__%29.md): Registers a listener for a particular event.
- [unregisterAllListeners()](gklocalplayer/unregisteralllisteners%28%29.md): Unregisters all listeners in your game.
- [unregisterListener(\_:)](gklocalplayer/unregisterlistener%28__%29.md): Unregisters a listener object.

### Saving Game Data

- [Saving the player’s game data to an iCloud account](saving-the-player-s-game-data-to-an-icloud-account.md): Save game data during play or after a game in the player’s iCloud account that’s accessible from any device.
- [saveGameData(\_:withName:completionHandler:)](gklocalplayer/savegamedata%28__withname_completionhandler_%29.md): Saves game data with the specified name.
- [fetchSavedGames(completionHandler:)](gklocalplayer/fetchsavedgames%28completionhandler_%29.md): Retrieves all available saved games.
- [resolveConflictingSavedGames(\_:with:completionHandler:)](gklocalplayer/resolveconflictingsavedgames%28__with_completionhandler_%29.md): Replaces duplicate saved games that use the same filename with one file containing the specified game data.
- [deleteSavedGames(withName:completionHandler:)](gklocalplayer/deletesavedgames%28withname_completionhandler_%29.md): Deletes saved games with the specified filename.
- [GKSavedGame](gksavedgame.md): An object that represents a file containing saved game data.
- [GKSavedGameListener](gksavedgamelistener.md): A protocol that handles events related to saving game data.

### Deprecated

- [Deprecated symbols](gklocalplayer-deprecated-symbols.md): Review unsupported symbols and their replacements.

## Relationships

### Inherits From

- [GKPlayer](gkplayer.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [GKSavedGameListener](gksavedgamelistener.md)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Players

- [Connecting players with their friends in your game](connecting-players-with-their-friends-in-your-game.md): Give players the ability to connect and interact with friends in your game.
- [Saving the player’s game data to an iCloud account](saving-the-player-s-game-data-to-an-icloud-account.md): Save game data during play or after a game in the player’s iCloud account that’s accessible from any device.
- [Protecting the player’s privacy using scoped identifiers](protecting-the-player-s-privacy-using-scoped-identifiers.md): Use the scoped identifiers that GameKit provides you as player IDs when transmitting or saving player data.
- [GKPlayer](gkplayer.md): A remote player who the local player running your game can invite and communicate with through Game Center.
- [GKBasePlayer](gkbaseplayer.md): A class that provides common data and methods for the different player objects.
- [GKLocalPlayerListener](gklocalplayerlistener.md): A protocol that handles events for Game Center players.
- [GKPlayerAuthenticationDidChangeNotificationName](../foundation/nsnotification/name-swift.struct/gkplayerauthenticationdidchangenotificationname.md): A notification that posts after GameKit authenticates the local player.
- [GKPlayerDidChangeNotificationName](../foundation/nsnotification/name-swift.struct/gkplayerdidchangenotificationname.md): A notification that posts when a player object’s data changes.

# GKLocalPlayer (Objective-C)

**Framework:** GameKit  
**Kind:** Class  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

The local player who signs in to Game Center on the device running the game.

## Declaration

```objectivec
@interface GKLocalPlayer : GKPlayer
```

## Mentioned In

- [Authenticating a player](authenticating-a-player.md)
- [Initializing and configuring Game Center](initializing-and-configuring-game-center.md)
- [Protecting the player’s privacy using scoped identifiers](protecting-the-player-s-privacy-using-scoped-identifiers.md)

<a id="overview"></a>

## Overview

Only one player can sign in to Game Center on a device at a time and that player is the *local player*. Before you can start a game that uses GameKit features, verify that the local player signs in to their Game Center account.

You set the handler of the local player shared instance using the [authenticateHandler](gklocalplayer/authenticatehandler.md) property. Then implement this method to handle the multiple times GameKit invokes it during the sign-in process. If the local player needs to create an account or sign in, GameKit provides a view controller that you present to the local player. If the local player successfully signs in, determine whether they have any account restrictions and adjust your game accordingly. For more information about the initialization of the local player, see [Authenticating a player](authenticating-a-player.md).

After the local player signs in, their account data and GameKit features are available. You can display the local player’s nickname and avatar, access their recent players and friends, and load their leaderboards and achievements. You can also register a listener object that GameKit calls when the local player sends or accepts invitations to play with others.

## Topics

### Accessing the Local Player

- [localPlayer](gklocalplayer/local-oaa8.md): The shared instance of the local player.
- [local](gklocalplayer/local-1mzi0.md): The shared instance of the local player.

### Authenticating the Local Player

- [authenticateHandler](gklocalplayer/authenticatehandler.md): A handler that GameKit calls while initializing the local player.
- [authenticated](gklocalplayer/isauthenticated.md): A Boolean value that indicates whether a local player has signed in to Game Center.
- [fetchItemsForIdentityVerificationSignature:](gklocalplayer/fetchitems%28foridentityverificationsignature_%29.md): Generates a signature that you can use to authenticate the local player on your own server.
- [GKPlayerAuthenticationDidChangeNotificationName](gkplayerauthenticationdidchangenotificationname.md): A notification that posts after GameKit initializes the local player.

### Determining Whether the Player Is Underage or Restricted

- [underage](gklocalplayer/isunderage.md): A Boolean value that indicates whether the local player is underage.
- [multiplayerGamingRestricted](gklocalplayer/ismultiplayergamingrestricted.md): A Boolean value that indicates whether the player can join multiplayer games.
- [personalizedCommunicationRestricted](gklocalplayer/ispersonalizedcommunicationrestricted.md): A Boolean value that indicates whether the player can use personalized communication on the device.

### Accessing Friends and Recents

- [loadFriendsAuthorizationStatus:](gklocalplayer/loadfriendsauthorizationstatus%28__%29.md): Returns whether the player authorizes your game to access their friends list.
- [GKFriendsAuthorizationStatus](gkfriendsauthorizationstatus.md): Constants that indicate if the local player grants access to their friends list.
- [loadFriends:](gklocalplayer/loadfriends%28__%29.md): Loads the local player’s friends list if the local player and their friends grant access.
- [loadFriendsWithIdentifiers:completionHandler:](gklocalplayer/loadfriends%28identifiedby_completionhandler_%29.md): Loads the player’s friends list, scoped by the identifiers, if the player and their friends grant access.
- [NSGKFriendListUsageDescription](../bundleresources/information-property-list/nsgkfriendlistusagedescription.md): A message that tells people why the app needs access to their Game Center friends list.
- [loadChallengableFriendsWithCompletionHandler:](gklocalplayer/loadchallengablefriends%28completionhandler_%29.md): Loads players to whom the local player can issue a challenge.
- [loadRecentPlayersWithCompletionHandler:](gklocalplayer/loadrecentplayers%28completionhandler_%29.md): Loads players from the friends list or players that recently participated in a game with the local player.

### Adding Friends

- [isPresentingFriendRequestViewController](gklocalplayer/ispresentingfriendrequestviewcontroller.md): A Boolean value that indicates whether your game presents the friends request view controller.
- [presentFriendRequestCreatorFromViewController:error:](gklocalplayer/presentfriendrequestcreator%28from_%29-7j1kn.md): Presents a view controller with a Messages sheet for the player to request friends.
- [presentFriendRequestCreatorFromWindow:error:](gklocalplayer/presentfriendrequestcreator%28from_%29-7clh6.md): Opens the Messages app with a sheet for the player to request friends.

### Working with Leaderboards

- [loadDefaultLeaderboardIdentifierWithCompletionHandler:](gklocalplayer/loaddefaultleaderboardidentifier%28completionhandler_%29.md): Deprecated. Loads the identifier for the local player’s default leaderboard.
- [setDefaultLeaderboardIdentifier:completionHandler:](gklocalplayer/setdefaultleaderboardidentifier%28__completionhandler_%29.md): Deprecated. Sets the local player’s default leaderboard.

### Registering Listeners

- [registerListener:](gklocalplayer/register%28__%29.md): Registers a listener for a particular event.
- [unregisterAllListeners](gklocalplayer/unregisteralllisteners%28%29.md): Unregisters all listeners in your game.
- [unregisterListener:](gklocalplayer/unregisterlistener%28__%29.md): Unregisters a listener object.

### Saving Game Data

- [Saving the player’s game data to an iCloud account](saving-the-player-s-game-data-to-an-icloud-account.md): Save game data during play or after a game in the player’s iCloud account that’s accessible from any device.
- [saveGameData:withName:completionHandler:](gklocalplayer/savegamedata%28__withname_completionhandler_%29.md): Saves game data with the specified name.
- [fetchSavedGamesWithCompletionHandler:](gklocalplayer/fetchsavedgames%28completionhandler_%29.md): Retrieves all available saved games.
- [resolveConflictingSavedGames:withData:completionHandler:](gklocalplayer/resolveconflictingsavedgames%28__with_completionhandler_%29.md): Replaces duplicate saved games that use the same filename with one file containing the specified game data.
- [deleteSavedGamesWithName:completionHandler:](gklocalplayer/deletesavedgames%28withname_completionhandler_%29.md): Deletes saved games with the specified filename.
- [GKSavedGame](gksavedgame.md): An object that represents a file containing saved game data.
- [GKSavedGameListener](gksavedgamelistener.md): A protocol that handles events related to saving game data.

### Deprecated

- [Deprecated symbols](gklocalplayer-deprecated-symbols.md): Review unsupported symbols and their replacements.

## Relationships

### Inherits From

- [GKPlayer](gkplayer.md)

### Conforms To

- [GKSavedGameListener](gksavedgamelistener.md)

## See Also

### Players

- [Connecting players with their friends in your game](connecting-players-with-their-friends-in-your-game.md): Give players the ability to connect and interact with friends in your game.
- [Saving the player’s game data to an iCloud account](saving-the-player-s-game-data-to-an-icloud-account.md): Save game data during play or after a game in the player’s iCloud account that’s accessible from any device.
- [Protecting the player’s privacy using scoped identifiers](protecting-the-player-s-privacy-using-scoped-identifiers.md): Use the scoped identifiers that GameKit provides you as player IDs when transmitting or saving player data.
- [GKPlayer](gkplayer.md): A remote player who the local player running your game can invite and communicate with through Game Center.
- [GKBasePlayer](gkbaseplayer.md): A class that provides common data and methods for the different player objects.
- [GKLocalPlayerListener](gklocalplayerlistener.md): A protocol that handles events for Game Center players.
- [GKPlayerAuthenticationDidChangeNotificationName](gkplayerauthenticationdidchangenotificationname.md): A notification that posts after GameKit initializes the local player.
- [GKPlayerDidChangeNotificationName](gkplayerdidchangenotificationname.md): A notification that posts when a player object’s data changes.
