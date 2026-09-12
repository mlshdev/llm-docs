> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkchallenge](https://developer.apple.com/documentation/gamekit/gkchallenge)

# GKChallenge (Swift)

**Framework:** GameKit  
**Kind:** Class  
**Availability:** iOS 6.0+ (deprecated in 26.0) · iPadOS 6.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0)

A challenge issued by the local player to another player.

## Declaration

```swift
class GKChallenge
```

<a id="overview"></a>

## Overview

Players can use Game Center to challenge other players to beat their scores and achievements that they earn in your game. When a player issues a challenge to another player, Game Center sends a push notification to the other player. That player can then accept or refuse the challenge. If the player accepts the challenge, Game Center adds the challenge to the player’s list of challenges. Later, if the player beats the challenge, Game Center notifies both players.

Game Center supports two kinds of challenges:

- **score challenge ([GKScoreChallenge](gkscorechallenge.md))**: When a player challenges another player to beat their leaderboard score. When the player beats the score, Game Center issues a new score challenge to the player who initiated the challenge and continues issuing challenges between the players until a player refuses the challenge.
- **achievement challenge ([GKAchievementChallenge](gkachievementchallenge.md))**: When a player challenges another player to earn an achievement. This challenge ends when the player earns the achievement.

You never subclass the [GKChallenge](gkchallenge.md) class directly. However, you can subclass [GKScoreChallenge](gkscorechallenge.md) or [GKAchievementChallenge](gkachievementchallenge.md) to create specific kinds of challenges.

<a id="Enable-Challenges"></a>

### Enable Challenges

You must enable challenges for your game in App Store Connect before you can use the challenges features. For details, see [Enable challenges](https://developer.apple.com/help/app-store-connect/configure-game-center/enable-challenges/) in App Store Connect Help.

<a id="Load-and-Issue-Challenges"></a>

### Load and Issue Challenges

You can load the challenges issued by the local player using the [loadReceivedChallenges(completionHandler:)](gkchallenge/loadreceivedchallenges%28completionhandler_%29.md) class method. You can issue challenges with the player’s permission using the [challengeComposeController(withMessage:players:completion:)](gkscore/challengecomposecontroller%28withmessage_players_completion_%29.md) method in the [GKLeaderboard.Entry](gkleaderboard/entry.md), [GKScore](gkscore.md), or [GKAchievement](gkachievement.md) class.

## Topics

### Retrieving the List of Challenges to the Local Player

- [loadReceivedChallenges(completionHandler:)](gkchallenge/loadreceivedchallenges%28completionhandler_%29.md): Deprecated. Loads the list of outstanding challenges.

### Examining Details about a Challenge

- [issuingPlayer](gkchallenge/issuingplayer.md): Deprecated. The player who issues the challenge.
- [receivingPlayer](gkchallenge/receivingplayer.md): Deprecated. The player who receives the challenge.
- [message](gkchallenge/message.md): Deprecated. A text message that describes the challenge.
- [state](gkchallenge/state.md): Deprecated. The current state of the challenge.
- [GKChallengeState](gkchallengestate.md): Deprecated. The state of a challenge.
- [issueDate](gkchallenge/issuedate.md): Deprecated. The date the player issued the challenge.
- [completionDate](gkchallenge/completiondate.md): Deprecated. The date the challenged player completed the challenge.

### Declining a Challenge

- [decline()](gkchallenge/decline%28%29.md): Deprecated. Declines a challenge that another player issues to the local player.

### Deprecated symbols

- [issuingPlayerID](gkchallenge/issuingplayerid.md): Deprecated. The player who issues the challenge.
- [receivingPlayerID](gkchallenge/receivingplayerid.md): Deprecated. The player who receives the challenge.
- [GKChallengeComposeCompletionBlock](gkchallengecomposecompletionblock.md): Deprecated. A completion block that provides information about the player who issues a challenge and the players who receive it.

### Initializers

- [init(coder:)](gkchallenge/init%28coder_%29.md): Deprecated.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [GKAchievementChallenge](gkachievementchallenge.md)
- [GKScoreChallenge](gkscorechallenge.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Deprecated classes

- [GKAchievementViewController](gkachievementviewcontroller.md): Deprecated. An `GKAchievementViewController` object provides a standard user interface to display achievement progress for the local player. If the [GKGameCenterViewController](gkgamecenterviewcontroller.md) class is available, you should use it instead.
- [GKChallengeEventHandler](gkchallengeeventhandler.md): Deprecated. The `GKChallengeEventHandler` class is used to respond to events related to challenges sent or received by the local player.
- [GKChallengesViewController](gkchallengesviewcontroller.md): Deprecated.
- [GKScoreChallenge](gkscorechallenge.md): Deprecated. A type of challenge where a player must beat the leaderboard score of another player.
- [GKAchievementChallenge](gkachievementchallenge.md): Deprecated. A type of challenge where a player must earn another player’s achievement.
- [GKCloudPlayer](gkcloudplayer.md): Deprecated. The object representing the currently signed-in iCloud user.
- [GKGameCenterViewController](gkgamecenterviewcontroller.md): Deprecated. The dashboard that allows players to access their Game Center data in your game.
- [GKGameSession](gkgamesession.md): Deprecated. A game session you can use to save game data, invite other players, and create turn-based and real-time game apps.
- [GKGameSessionSharingViewController](gkgamesessionsharingviewcontroller.md): Deprecated. A user interface you can use to invite other users into a tvOS game session.
- [GKFriendRequestComposeViewController](gkfriendrequestcomposeviewcontroller.md): Deprecated. Your game uses the `GKFriendRequestComposeViewController` class to present a screen that allows the local player to send friend requests to other players.
- [GKLeaderboardViewController](gkleaderboardviewcontroller.md): Deprecated. The `GKLeaderboardViewController` class provides a standard user interface that displays leaderboard scores to the player. If the [GKGameCenterViewController](gkgamecenterviewcontroller.md) class is available, you should use it instead.
- [GKPeerPickerController](gkpeerpickercontroller.md): Deprecated. Provides a standard user interface to allow one iOS device to discover and connect to another.
- [GKScore](gkscore.md): Deprecated. An object containing information for a score that was earned by the player.
- [GKSession](gksession.md): Deprecated. A [GKSession](gksession.md) object provides the ability to discover and connect to nearby iOS devices using Bluetooth or Wi-fi.
- [GKTurnBasedEventHandler](gkturnbasedeventhandler.md): Deprecated. The [GKTurnBasedEventHandler](gkturnbasedeventhandler.md) class is used to respond to important messages related to turn-based matches. To use it, call the [shared()](gkturnbasedeventhandler/shared%28%29.md) class method to get the singleton instance and assign an object that implements the [GKTurnBasedEventHandlerDelegate](gkturnbasedeventhandlerdelegate.md) protocol to its [delegate](gkturnbasedeventhandler/delegate.md) property. All methods are called on the main thread.

# GKChallenge (Objective-C)

**Framework:** GameKit  
**Kind:** Class  
**Availability:** iOS 6.0+ (deprecated in 26.0) · iPadOS 6.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0)

A challenge issued by the local player to another player.

## Declaration

```objectivec
@interface GKChallenge : NSObject
```

<a id="overview"></a>

## Overview

Players can use Game Center to challenge other players to beat their scores and achievements that they earn in your game. When a player issues a challenge to another player, Game Center sends a push notification to the other player. That player can then accept or refuse the challenge. If the player accepts the challenge, Game Center adds the challenge to the player’s list of challenges. Later, if the player beats the challenge, Game Center notifies both players.

Game Center supports two kinds of challenges:

- **score challenge ([GKScoreChallenge](gkscorechallenge.md))**: When a player challenges another player to beat their leaderboard score. When the player beats the score, Game Center issues a new score challenge to the player who initiated the challenge and continues issuing challenges between the players until a player refuses the challenge.
- **achievement challenge ([GKAchievementChallenge](gkachievementchallenge.md))**: When a player challenges another player to earn an achievement. This challenge ends when the player earns the achievement.

You never subclass the [GKChallenge](gkchallenge.md) class directly. However, you can subclass [GKScoreChallenge](gkscorechallenge.md) or [GKAchievementChallenge](gkachievementchallenge.md) to create specific kinds of challenges.

<a id="Enable-Challenges"></a>

### Enable Challenges

You must enable challenges for your game in App Store Connect before you can use the challenges features. For details, see [Enable challenges](https://developer.apple.com/help/app-store-connect/configure-game-center/enable-challenges/) in App Store Connect Help.

<a id="Load-and-Issue-Challenges"></a>

### Load and Issue Challenges

You can load the challenges issued by the local player using the [loadReceivedChallengesWithCompletionHandler:](gkchallenge/loadreceivedchallenges%28completionhandler_%29.md) class method. You can issue challenges with the player’s permission using the [challengeComposeControllerWithMessage:players:completion:](gkscore/challengecomposecontroller%28withmessage_players_completion_%29.md) method in the [GKLeaderboardEntry](gkleaderboard/entry.md), [GKScore](gkscore.md), or [GKAchievement](gkachievement.md) class.

## Topics

### Retrieving the List of Challenges to the Local Player

- [loadReceivedChallengesWithCompletionHandler:](gkchallenge/loadreceivedchallenges%28completionhandler_%29.md): Deprecated. Loads the list of outstanding challenges.

### Examining Details about a Challenge

- [issuingPlayer](gkchallenge/issuingplayer.md): Deprecated. The player who issues the challenge.
- [receivingPlayer](gkchallenge/receivingplayer.md): Deprecated. The player who receives the challenge.
- [message](gkchallenge/message.md): Deprecated. A text message that describes the challenge.
- [state](gkchallenge/state.md): Deprecated. The current state of the challenge.
- [GKChallengeState](gkchallengestate.md): Deprecated. The state of a challenge.
- [issueDate](gkchallenge/issuedate.md): Deprecated. The date the player issued the challenge.
- [completionDate](gkchallenge/completiondate.md): Deprecated. The date the challenged player completed the challenge.

### Declining a Challenge

- [decline](gkchallenge/decline%28%29.md): Deprecated. Declines a challenge that another player issues to the local player.

### Deprecated symbols

- [issuingPlayerID](gkchallenge/issuingplayerid.md): Deprecated. The player who issues the challenge.
- [receivingPlayerID](gkchallenge/receivingplayerid.md): Deprecated. The player who receives the challenge.
- [GKChallengeComposeCompletionBlock](gkchallengecomposecompletionblock.md): Deprecated. A completion block that provides information about the player who issues a challenge and the players who receive it.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [GKAchievementChallenge](gkachievementchallenge.md)
- [GKScoreChallenge](gkscorechallenge.md)

### Conforms To

- [NSCoding](../foundation/nscoding.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Deprecated classes

- [GKAchievementViewController](gkachievementviewcontroller.md): Deprecated. An `GKAchievementViewController` object provides a standard user interface to display achievement progress for the local player. If the [GKGameCenterViewController](gkgamecenterviewcontroller.md) class is available, you should use it instead.
- [GKChallengeEventHandler](gkchallengeeventhandler.md): Deprecated. The `GKChallengeEventHandler` class is used to respond to events related to challenges sent or received by the local player.
- [GKChallengesViewController](gkchallengesviewcontroller.md): Deprecated.
- [GKScoreChallenge](gkscorechallenge.md): Deprecated. A type of challenge where a player must beat the leaderboard score of another player.
- [GKAchievementChallenge](gkachievementchallenge.md): Deprecated. A type of challenge where a player must earn another player’s achievement.
- [GKCloudPlayer](gkcloudplayer.md): Deprecated. The object representing the currently signed-in iCloud user.
- [GKGameCenterViewController](gkgamecenterviewcontroller.md): Deprecated. The dashboard that allows players to access their Game Center data in your game.
- [GKGameSession](gkgamesession.md): Deprecated. A game session you can use to save game data, invite other players, and create turn-based and real-time game apps.
- [GKGameSessionSharingViewController](gkgamesessionsharingviewcontroller.md): Deprecated. A user interface you can use to invite other users into a tvOS game session.
- [GKFriendRequestComposeViewController](gkfriendrequestcomposeviewcontroller.md): Deprecated. Your game uses the `GKFriendRequestComposeViewController` class to present a screen that allows the local player to send friend requests to other players.
- [GKLeaderboardViewController](gkleaderboardviewcontroller.md): Deprecated. The `GKLeaderboardViewController` class provides a standard user interface that displays leaderboard scores to the player. If the [GKGameCenterViewController](gkgamecenterviewcontroller.md) class is available, you should use it instead.
- [GKPeerPickerController](gkpeerpickercontroller.md): Deprecated. Provides a standard user interface to allow one iOS device to discover and connect to another.
- [GKScore](gkscore.md): Deprecated. An object containing information for a score that was earned by the player.
- [GKSession](gksession.md): Deprecated. A [GKSession](gksession.md) object provides the ability to discover and connect to nearby iOS devices using Bluetooth or Wi-fi.
- [GKTurnBasedEventHandler](gkturnbasedeventhandler.md): Deprecated. The [GKTurnBasedEventHandler](gkturnbasedeventhandler.md) class is used to respond to important messages related to turn-based matches. To use it, call the [sharedTurnBasedEventHandler](gkturnbasedeventhandler/shared%28%29.md) class method to get the singleton instance and assign an object that implements the [GKTurnBasedEventHandlerDelegate](gkturnbasedeventhandlerdelegate.md) protocol to its [delegate](gkturnbasedeventhandler/delegate.md) property. All methods are called on the main thread.
