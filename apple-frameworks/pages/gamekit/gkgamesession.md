> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkgamesession](https://developer.apple.com/documentation/gamekit/gkgamesession)

# GKGameSession (Swift)

**Framework:** GameKit  
**Kind:** Class  
**Availability:** iOS 10.0+ (deprecated in 12.0) · iPadOS 10.0+ (deprecated in 12.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.12+ (deprecated in 10.14) · tvOS 10.0+ (deprecated in 12.0) · visionOS 1.0+ (deprecated in 1.0)

A game session you can use to save game data, invite other players, and create turn-based and real-time game apps.

> For real-time matches, use GKMatchmakerViewController. For turn-based matches, use GKTurnBasedMatchmakerViewController.

## Declaration

```swift
class GKGameSession
```

<a id="overview"></a>

## Overview

Use a `GKGameSession` object to play turn-based and real-time games in iCloud. Every instance of a game session resides inside of an iCloud container. You can create multiple sessions for a single app, allowing players to play several games at once. All of the information for a game session is saved in the owner’s iCloud.

Each session can contain a maximum of 100 players. Inside of a session, up to 16 of those players can be connected to each other in real-time. The 16 connected players can be selected from any of the 100 players in the session. You can change a connected player with another player in the session at any time.

After a game session is created, you can save game data in iCloud. Each game session can save a maximum of 512KB data. This prevents games from using a large about of space in a user’s iCloud account. This data can be loaded, edited, and saved by anyone in the game session, providing your app provides this behavior. You must ensure that you delete a game session from a user’s iCloud after a game is over, otherwise the session will stay in the user’s iCloud forever. Game sessions are not automatically removed after a set amount of time. They can only be actively removed.

## Topics

### Creating and Loading Game Sessions

- [createSession(inContainer:withTitle:maxConnectedPlayers:completionHandler:)](gkgamesession/createsession%28incontainer_withtitle_maxconnectedplayers_completionhandler_%29.md): Deprecated. Creates a new game session inside of an iCloud container.
- [load(withIdentifier:completionHandler:)](gkgamesession/load%28withidentifier_completionhandler_%29.md): Deprecated. Loads a specific game session.
- [loadSessions(inContainer:completionHandler:)](gkgamesession/loadsessions%28incontainer_completionhandler_%29.md): Deprecated. Retrieves all of the game sessions associated with a container.
- [remove(withIdentifier:completionHandler:)](gkgamesession/remove%28withidentifier_completionhandler_%29.md): Deprecated. Removes the specified game session.

### Accessing Information About a Game Session

- [identifier](gkgamesession/identifier.md): Deprecated. A unique identifier for a game session.
- [lastModifiedDate](gkgamesession/lastmodifieddate.md): Deprecated. The date that the game session was last modified.
- [lastModifiedPlayer](gkgamesession/lastmodifiedplayer.md): Deprecated. The last player to modify the game session.
- [maxNumberOfConnectedPlayers](gkgamesession/maxnumberofconnectedplayers.md): Deprecated. The maximum number of players allowed to connect to the game session at the same time.
- [owner](gkgamesession/owner.md): Deprecated. A player object that represents the owner of the game session.
- [players](gkgamesession/players.md): Deprecated. An array of player objects associated with the game session.
- [title](gkgamesession/title.md): Deprecated. The title of the game session.

### Inviting Players to a Game Session

- [getShareURL(completionHandler:)](gkgamesession/getshareurl%28completionhandler_%29.md): Deprecated. Retrieves the URL used to share a game session.

### Saving and Loading Data

- [loadData(completionHandler:)](gkgamesession/loaddata%28completionhandler_%29.md): Deprecated. Retrieves the game data from the current game session.
- [save(\_:completionHandler:)](gkgamesession/save%28__completionhandler_%29.md): Deprecated. Saves the current game session data.

### Listening for Events

- [add(listener:)](gkgamesession/add%28listener_%29.md): Deprecated. Adds a new event listener object.
- [remove(listener:)](gkgamesession/remove%28listener_%29.md): Deprecated. Stops listening to the event listener object.

### Connecting Players for Real-Time Communication

- [setConnectionState(\_:completionHandler:)](gkgamesession/setconnectionstate%28__completionhandler_%29.md): Deprecated. Sets the connection state for the player.
- [players(with:)](gkgamesession/players%28with_%29.md): Deprecated. Retrieves a list of players with the specified connection state.
- [send(\_:with:completionHandler:)](gkgamesession/send%28__with_completionhandler_%29.md): Deprecated. Sends the indicated data to all connected players.
- [GKTransportType](gktransporttype.md): The mechanism used to send messages to other players in a game session.

### Communicating Between Players

- [badgedPlayers](gkgamesession/badgedplayers.md): Deprecated. An array containing all of the currently badged players.
- [clearBadge(for:completionHandler:)](gkgamesession/clearbadge%28for_completionhandler_%29.md): Deprecated. Clears the badge from the designated players.
- [sendMessage(withLocalizedFormatKey:arguments:data:to:badgePlayers:completionHandler:)](gkgamesession/sendmessage%28withlocalizedformatkey_arguments_data_to_badgeplayers_completionhandler_%29.md): Deprecated. Sends a message to players in a game session.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Deprecated classes

- [GKAchievementViewController](gkachievementviewcontroller.md): Deprecated. An `GKAchievementViewController` object provides a standard user interface to display achievement progress for the local player. If the [GKGameCenterViewController](gkgamecenterviewcontroller.md) class is available, you should use it instead.
- [GKChallengeEventHandler](gkchallengeeventhandler.md): Deprecated. The `GKChallengeEventHandler` class is used to respond to events related to challenges sent or received by the local player.
- [GKChallengesViewController](gkchallengesviewcontroller.md): Deprecated.
- [GKChallenge](gkchallenge.md): Deprecated. A challenge issued by the local player to another player.
- [GKScoreChallenge](gkscorechallenge.md): Deprecated. A type of challenge where a player must beat the leaderboard score of another player.
- [GKAchievementChallenge](gkachievementchallenge.md): Deprecated. A type of challenge where a player must earn another player’s achievement.
- [GKCloudPlayer](gkcloudplayer.md): Deprecated. The object representing the currently signed-in iCloud user.
- [GKGameCenterViewController](gkgamecenterviewcontroller.md): Deprecated. The dashboard that allows players to access their Game Center data in your game.
- [GKGameSessionSharingViewController](gkgamesessionsharingviewcontroller.md): Deprecated. A user interface you can use to invite other users into a tvOS game session.
- [GKFriendRequestComposeViewController](gkfriendrequestcomposeviewcontroller.md): Deprecated. Your game uses the `GKFriendRequestComposeViewController` class to present a screen that allows the local player to send friend requests to other players.
- [GKLeaderboardViewController](gkleaderboardviewcontroller.md): Deprecated. The `GKLeaderboardViewController` class provides a standard user interface that displays leaderboard scores to the player. If the [GKGameCenterViewController](gkgamecenterviewcontroller.md) class is available, you should use it instead.
- [GKPeerPickerController](gkpeerpickercontroller.md): Deprecated. Provides a standard user interface to allow one iOS device to discover and connect to another.
- [GKScore](gkscore.md): Deprecated. An object containing information for a score that was earned by the player.
- [GKSession](gksession.md): Deprecated. A [GKSession](gksession.md) object provides the ability to discover and connect to nearby iOS devices using Bluetooth or Wi-fi.
- [GKTurnBasedEventHandler](gkturnbasedeventhandler.md): Deprecated. The [GKTurnBasedEventHandler](gkturnbasedeventhandler.md) class is used to respond to important messages related to turn-based matches. To use it, call the [shared()](gkturnbasedeventhandler/shared%28%29.md) class method to get the singleton instance and assign an object that implements the [GKTurnBasedEventHandlerDelegate](gkturnbasedeventhandlerdelegate.md) protocol to its [delegate](gkturnbasedeventhandler/delegate.md) property. All methods are called on the main thread.

# GKGameSession (Objective-C)

**Framework:** GameKit  
**Kind:** Class  
**Availability:** iOS 10.0+ (deprecated in 12.0) · iPadOS 10.0+ (deprecated in 12.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.12+ (deprecated in 10.14) · tvOS 10.0+ (deprecated in 12.0) · visionOS 1.0+ (deprecated in 1.0)

A game session you can use to save game data, invite other players, and create turn-based and real-time game apps.

> For real-time matches, use GKMatchmakerViewController. For turn-based matches, use GKTurnBasedMatchmakerViewController.

## Declaration

```objectivec
@interface GKGameSession : NSObject
```

<a id="overview"></a>

## Overview

Use a `GKGameSession` object to play turn-based and real-time games in iCloud. Every instance of a game session resides inside of an iCloud container. You can create multiple sessions for a single app, allowing players to play several games at once. All of the information for a game session is saved in the owner’s iCloud.

Each session can contain a maximum of 100 players. Inside of a session, up to 16 of those players can be connected to each other in real-time. The 16 connected players can be selected from any of the 100 players in the session. You can change a connected player with another player in the session at any time.

After a game session is created, you can save game data in iCloud. Each game session can save a maximum of 512KB data. This prevents games from using a large about of space in a user’s iCloud account. This data can be loaded, edited, and saved by anyone in the game session, providing your app provides this behavior. You must ensure that you delete a game session from a user’s iCloud after a game is over, otherwise the session will stay in the user’s iCloud forever. Game sessions are not automatically removed after a set amount of time. They can only be actively removed.

## Topics

### Creating and Loading Game Sessions

- [createSessionInContainer:withTitle:maxConnectedPlayers:completionHandler:](gkgamesession/createsession%28incontainer_withtitle_maxconnectedplayers_completionhandler_%29.md): Deprecated. Creates a new game session inside of an iCloud container.
- [loadSessionWithIdentifier:completionHandler:](gkgamesession/load%28withidentifier_completionhandler_%29.md): Deprecated. Loads a specific game session.
- [loadSessionsInContainer:completionHandler:](gkgamesession/loadsessions%28incontainer_completionhandler_%29.md): Deprecated. Retrieves all of the game sessions associated with a container.
- [removeSessionWithIdentifier:completionHandler:](gkgamesession/remove%28withidentifier_completionhandler_%29.md): Deprecated. Removes the specified game session.

### Accessing Information About a Game Session

- [identifier](gkgamesession/identifier.md): Deprecated. A unique identifier for a game session.
- [lastModifiedDate](gkgamesession/lastmodifieddate.md): Deprecated. The date that the game session was last modified.
- [lastModifiedPlayer](gkgamesession/lastmodifiedplayer.md): Deprecated. The last player to modify the game session.
- [maxNumberOfConnectedPlayers](gkgamesession/maxnumberofconnectedplayers.md): Deprecated. The maximum number of players allowed to connect to the game session at the same time.
- [owner](gkgamesession/owner.md): Deprecated. A player object that represents the owner of the game session.
- [players](gkgamesession/players.md): Deprecated. An array of player objects associated with the game session.
- [title](gkgamesession/title.md): Deprecated. The title of the game session.

### Inviting Players to a Game Session

- [getShareURLWithCompletionHandler:](gkgamesession/getshareurl%28completionhandler_%29.md): Deprecated. Retrieves the URL used to share a game session.

### Saving and Loading Data

- [loadDataWithCompletionHandler:](gkgamesession/loaddata%28completionhandler_%29.md): Deprecated. Retrieves the game data from the current game session.
- [saveData:completionHandler:](gkgamesession/save%28__completionhandler_%29.md): Deprecated. Saves the current game session data.

### Listening for Events

- [addEventListener:](gkgamesession/add%28listener_%29.md): Deprecated. Adds a new event listener object.
- [removeEventListener:](gkgamesession/remove%28listener_%29.md): Deprecated. Stops listening to the event listener object.

### Connecting Players for Real-Time Communication

- [setConnectionState:completionHandler:](gkgamesession/setconnectionstate%28__completionhandler_%29.md): Deprecated. Sets the connection state for the player.
- [playersWithConnectionState:](gkgamesession/players%28with_%29.md): Deprecated. Retrieves a list of players with the specified connection state.
- [sendData:withTransportType:completionHandler:](gkgamesession/send%28__with_completionhandler_%29.md): Deprecated. Sends the indicated data to all connected players.
- [GKTransportType](gktransporttype.md): The mechanism used to send messages to other players in a game session.

### Communicating Between Players

- [badgedPlayers](gkgamesession/badgedplayers.md): Deprecated. An array containing all of the currently badged players.
- [clearBadgeForPlayers:completionHandler:](gkgamesession/clearbadge%28for_completionhandler_%29.md): Deprecated. Clears the badge from the designated players.
- [sendMessageWithLocalizedFormatKey:arguments:data:toPlayers:badgePlayers:completionHandler:](gkgamesession/sendmessage%28withlocalizedformatkey_arguments_data_to_badgeplayers_completionhandler_%29.md): Deprecated. Sends a message to players in a game session.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Deprecated classes

- [GKAchievementViewController](gkachievementviewcontroller.md): Deprecated. An `GKAchievementViewController` object provides a standard user interface to display achievement progress for the local player. If the [GKGameCenterViewController](gkgamecenterviewcontroller.md) class is available, you should use it instead.
- [GKChallengeEventHandler](gkchallengeeventhandler.md): Deprecated. The `GKChallengeEventHandler` class is used to respond to events related to challenges sent or received by the local player.
- [GKChallengesViewController](gkchallengesviewcontroller.md): Deprecated.
- [GKChallenge](gkchallenge.md): Deprecated. A challenge issued by the local player to another player.
- [GKScoreChallenge](gkscorechallenge.md): Deprecated. A type of challenge where a player must beat the leaderboard score of another player.
- [GKAchievementChallenge](gkachievementchallenge.md): Deprecated. A type of challenge where a player must earn another player’s achievement.
- [GKCloudPlayer](gkcloudplayer.md): Deprecated. The object representing the currently signed-in iCloud user.
- [GKGameCenterViewController](gkgamecenterviewcontroller.md): Deprecated. The dashboard that allows players to access their Game Center data in your game.
- [GKGameSessionSharingViewController](gkgamesessionsharingviewcontroller.md): Deprecated. A user interface you can use to invite other users into a tvOS game session.
- [GKFriendRequestComposeViewController](gkfriendrequestcomposeviewcontroller.md): Deprecated. Your game uses the `GKFriendRequestComposeViewController` class to present a screen that allows the local player to send friend requests to other players.
- [GKLeaderboardViewController](gkleaderboardviewcontroller.md): Deprecated. The `GKLeaderboardViewController` class provides a standard user interface that displays leaderboard scores to the player. If the [GKGameCenterViewController](gkgamecenterviewcontroller.md) class is available, you should use it instead.
- [GKPeerPickerController](gkpeerpickercontroller.md): Deprecated. Provides a standard user interface to allow one iOS device to discover and connect to another.
- [GKScore](gkscore.md): Deprecated. An object containing information for a score that was earned by the player.
- [GKSession](gksession.md): Deprecated. A [GKSession](gksession.md) object provides the ability to discover and connect to nearby iOS devices using Bluetooth or Wi-fi.
- [GKTurnBasedEventHandler](gkturnbasedeventhandler.md): Deprecated. The [GKTurnBasedEventHandler](gkturnbasedeventhandler.md) class is used to respond to important messages related to turn-based matches. To use it, call the [sharedTurnBasedEventHandler](gkturnbasedeventhandler/shared%28%29.md) class method to get the singleton instance and assign an object that implements the [GKTurnBasedEventHandlerDelegate](gkturnbasedeventhandlerdelegate.md) protocol to its [delegate](gkturnbasedeventhandler/delegate.md) property. All methods are called on the main thread.
