> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkscore](https://developer.apple.com/documentation/gamekit/gkscore)

# GKScore (Swift)

**Framework:** GameKit  
**Kind:** Class  
**Availability:** iOS 4.1+ (deprecated in 14.0) · iPadOS 4.1+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · macOS 10.8+ (deprecated in 11.0) · tvOS 9.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 7.0)

An object containing information for a score that was earned by the player.

> Use the [GKLeaderboard.Entry](gkleaderboard/entry.md) class instead.

## Declaration

```swift
class GKScore
```

<a id="overview"></a>

## Overview

> **Important**

>  Your game must initialize a local player before you can use any Game Center classes. If there is no initialized player, your game receives a [GKError.Code.notAuthenticated](gkerror/code/notauthenticated.md) error. For more information, see [Authenticating a player](authenticating-a-player.md).

Your game creates `GKScore` objects to post scores to a leaderboard on Game Center. When your game retrieves score information from a leaderboard, those scores are returned as `GKScore` objects.

Scores and leaderboards work together to help you create a better game. Whenever a new `GKScore` object is created, it is associated with a leaderboard. You must ensure that the score being sent to a leaderboard is compatible with the leaderboard scoring format set in App Store Connect. See [Leaderboards and Leaderboard Sets](https://developer.apple.com/library/archive/documentation/LanguagesUtilities/Conceptual/iTunesConnectGameCenter_Guide/Leaderboards/Leaderboards.html#//apple_ref/doc/uid/TP40013726-CH2) for information on how to create a leaderboard in App Store Connect.

To report a score to Game Center, your game allocates and initializes a new object, sets the [value](gkscore/value.md) property to the score the player earned, and then calls the [report(completionHandler:)](gkscore/report%28completionhandler_%29.md) method. The mechanism your game uses to calculate scores is up to you to design; scores are only compared within your game.

## Topics

### Reporting a New Score

- [report(\_:withEligibleChallenges:withCompletionHandler:)](gkscore/report%28__witheligiblechallenges_withcompletionhandler_%29-2tycl.md): Deprecated. Submits a list of scores and all eligible challenges.
- [report(\_:withCompletionHandler:)](gkscore/report%28__withcompletionhandler_%29.md): Deprecated. Reports a list of scores to Game Center
- [report(\_:withEligibleChallenges:withCompletionHandler:)](gkscore/report%28__witheligiblechallenges_withcompletionhandler_%29-3c5lh.md): Deprecated. Submits a list of scores and all eligible challenges.

### Issuing a Score Challenge

- [challengeComposeController(withMessage:players:completion:)](gkscore/challengecomposecontroller%28withmessage_players_completion_%29.md): Deprecated. Provides a challenge compose view controller with preselected player identifiers and a preformatted, player-editable message.
- [GKChallengeComposeHandler](gkchallengecomposehandler.md): Deprecated. A completion block that provides information about the player who issues a challenge and the players who receive it.
- [challengeComposeController(withMessage:players:completionHandler:)](gkscore/challengecomposecontroller%28withmessage_players_completionhandler_%29.md): Deprecated. Provides a challenge compose view controller with pre-selected player identifiers and a preformatted, player-editable message.
- [challengeComposeController(withPlayers:message:completionHandler:)](gkscore/challengecomposecontroller%28withplayers_message_completionhandler_%29.md): Deprecated. Provides a challenge compose view controller with pre-selected player identifiers and a preformatted, player-editable message.

### Deprecated Methods and Properties

- [category](gkscore/category.md): Deprecated. The leaderboard that this score belongs to.
- [context](gkscore/context.md): Deprecated. An integer value used by your game.
- [date](gkscore/date.md): Deprecated. The date and time when the score was earned.
- [formattedValue](gkscore/formattedvalue.md): Deprecated. Returns the player’s score as a localized string.
- [leaderboardIdentifier](gkscore/leaderboardidentifier.md): Deprecated. The identifier for the leaderboard.
- [player](gkscore/player.md): Deprecated. The player who earned the score.
- [rank](gkscore/rank.md): Deprecated. The position of the score in the results of a leaderboard search.
- [value](gkscore/value.md): Deprecated. The score earned by the player.
- [shouldSetDefaultLeaderboard](gkscore/shouldsetdefaultleaderboard.md): Deprecated. A Boolean value that indicates whether this score should also update the default leaderboard.
- [init(leaderboardIdentifier:)](gkscore/init%28leaderboardidentifier_%29.md): Deprecated. Returns an initialized score object using the local player and the current date.
- [init(leaderboardIdentifier:player:)](gkscore/init%28leaderboardidentifier_player_%29.md): Deprecated. Returns an initialized score object for the specified leaderboard and player.
- [init(category:)](gkscore/init%28category_%29.md): Deprecated. Returns an initialized score object.
- [init(leaderboardIdentifier:forPlayer:)](gkscore/init%28leaderboardidentifier_forplayer_%29.md): Deprecated. Returns an initialized score object for the specified leaderboard and player.
- [issueChallenge(toPlayers:message:)](gkscore/issuechallenge%28toplayers_message_%29.md): Deprecated. Issues a score challenge to a set of players.
- [playerID](gkscore/playerid.md): Deprecated. The player identifier for the player that earned the score.
- [report(completionHandler:)](gkscore/report%28completionhandler_%29.md): Deprecated. Reports a score to Game Center.

### Initializers

- [init(coder:)](gkscore/init%28coder_%29.md): Deprecated.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

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
- [GKChallenge](gkchallenge.md): Deprecated. A challenge issued by the local player to another player.
- [GKScoreChallenge](gkscorechallenge.md): Deprecated. A type of challenge where a player must beat the leaderboard score of another player.
- [GKAchievementChallenge](gkachievementchallenge.md): Deprecated. A type of challenge where a player must earn another player’s achievement.
- [GKCloudPlayer](gkcloudplayer.md): Deprecated. The object representing the currently signed-in iCloud user.
- [GKGameCenterViewController](gkgamecenterviewcontroller.md): Deprecated. The dashboard that allows players to access their Game Center data in your game.
- [GKGameSession](gkgamesession.md): Deprecated. A game session you can use to save game data, invite other players, and create turn-based and real-time game apps.
- [GKGameSessionSharingViewController](gkgamesessionsharingviewcontroller.md): Deprecated. A user interface you can use to invite other users into a tvOS game session.
- [GKFriendRequestComposeViewController](gkfriendrequestcomposeviewcontroller.md): Deprecated. Your game uses the `GKFriendRequestComposeViewController` class to present a screen that allows the local player to send friend requests to other players.
- [GKLeaderboardViewController](gkleaderboardviewcontroller.md): Deprecated. The `GKLeaderboardViewController` class provides a standard user interface that displays leaderboard scores to the player. If the [GKGameCenterViewController](gkgamecenterviewcontroller.md) class is available, you should use it instead.
- [GKPeerPickerController](gkpeerpickercontroller.md): Deprecated. Provides a standard user interface to allow one iOS device to discover and connect to another.
- [GKSession](gksession.md): Deprecated. A [GKSession](gksession.md) object provides the ability to discover and connect to nearby iOS devices using Bluetooth or Wi-fi.
- [GKTurnBasedEventHandler](gkturnbasedeventhandler.md): Deprecated. The [GKTurnBasedEventHandler](gkturnbasedeventhandler.md) class is used to respond to important messages related to turn-based matches. To use it, call the [shared()](gkturnbasedeventhandler/shared%28%29.md) class method to get the singleton instance and assign an object that implements the [GKTurnBasedEventHandlerDelegate](gkturnbasedeventhandlerdelegate.md) protocol to its [delegate](gkturnbasedeventhandler/delegate.md) property. All methods are called on the main thread.

# GKScore (Objective-C)

**Framework:** GameKit  
**Kind:** Class  
**Availability:** iOS 4.1+ (deprecated in 14.0) · iPadOS 4.1+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · macOS 10.8+ (deprecated in 11.0) · tvOS 9.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 7.0)

An object containing information for a score that was earned by the player.

> Use the [GKLeaderboardEntry](gkleaderboard/entry.md) class instead.

## Declaration

```objectivec
@interface GKScore : NSObject
```

<a id="overview"></a>

## Overview

> **Important**

>  Your game must initialize a local player before you can use any Game Center classes. If there is no initialized player, your game receives a [GKErrorNotAuthenticated](gkerror/code/notauthenticated.md) error. For more information, see [Authenticating a player](authenticating-a-player.md).

Your game creates `GKScore` objects to post scores to a leaderboard on Game Center. When your game retrieves score information from a leaderboard, those scores are returned as `GKScore` objects.

Scores and leaderboards work together to help you create a better game. Whenever a new `GKScore` object is created, it is associated with a leaderboard. You must ensure that the score being sent to a leaderboard is compatible with the leaderboard scoring format set in App Store Connect. See [Leaderboards and Leaderboard Sets](https://developer.apple.com/library/archive/documentation/LanguagesUtilities/Conceptual/iTunesConnectGameCenter_Guide/Leaderboards/Leaderboards.html#//apple_ref/doc/uid/TP40013726-CH2) for information on how to create a leaderboard in App Store Connect.

To report a score to Game Center, your game allocates and initializes a new object, sets the [value](gkscore/value.md) property to the score the player earned, and then calls the [reportScoreWithCompletionHandler:](gkscore/report%28completionhandler_%29.md) method. The mechanism your game uses to calculate scores is up to you to design; scores are only compared within your game.

## Topics

### Reporting a New Score

- [reportLeaderboardScores:withEligibleChallenges:withCompletionHandler:](gkscore/report%28__witheligiblechallenges_withcompletionhandler_%29-2tycl.md): Deprecated. Submits a list of scores and all eligible challenges.
- [reportScores:withCompletionHandler:](gkscore/report%28__withcompletionhandler_%29.md): Deprecated. Reports a list of scores to Game Center
- [reportScores:withEligibleChallenges:withCompletionHandler:](gkscore/report%28__witheligiblechallenges_withcompletionhandler_%29-3c5lh.md): Deprecated. Submits a list of scores and all eligible challenges.

### Issuing a Score Challenge

- [challengeComposeControllerWithMessage:players:completion:](gkscore/challengecomposecontroller%28withmessage_players_completion_%29.md): Deprecated. Provides a challenge compose view controller with preselected player identifiers and a preformatted, player-editable message.
- [GKChallengeComposeHandler](gkchallengecomposehandler.md): Deprecated. A completion block that provides information about the player who issues a challenge and the players who receive it.
- [challengeComposeControllerWithMessage:players:completionHandler:](gkscore/challengecomposecontroller%28withmessage_players_completionhandler_%29.md): Deprecated. Provides a challenge compose view controller with pre-selected player identifiers and a preformatted, player-editable message.
- [challengeComposeControllerWithPlayers:message:completionHandler:](gkscore/challengecomposecontroller%28withplayers_message_completionhandler_%29.md): Deprecated. Provides a challenge compose view controller with pre-selected player identifiers and a preformatted, player-editable message.

### Deprecated Methods and Properties

- [category](gkscore/category.md): Deprecated. The leaderboard that this score belongs to.
- [context](gkscore/context.md): Deprecated. An integer value used by your game.
- [date](gkscore/date.md): Deprecated. The date and time when the score was earned.
- [formattedValue](gkscore/formattedvalue.md): Deprecated. Returns the player’s score as a localized string.
- [leaderboardIdentifier](gkscore/leaderboardidentifier.md): Deprecated. The identifier for the leaderboard.
- [player](gkscore/player.md): Deprecated. The player who earned the score.
- [rank](gkscore/rank.md): Deprecated. The position of the score in the results of a leaderboard search.
- [value](gkscore/value.md): Deprecated. The score earned by the player.
- [shouldSetDefaultLeaderboard](gkscore/shouldsetdefaultleaderboard.md): Deprecated. A Boolean value that indicates whether this score should also update the default leaderboard.
- [initWithLeaderboardIdentifier:](gkscore/init%28leaderboardidentifier_%29.md): Deprecated. Returns an initialized score object using the local player and the current date.
- [initWithLeaderboardIdentifier:player:](gkscore/init%28leaderboardidentifier_player_%29.md): Deprecated. Returns an initialized score object for the specified leaderboard and player.
- [initWithCategory:](gkscore/init%28category_%29.md): Deprecated. Returns an initialized score object.
- [initWithLeaderboardIdentifier:forPlayer:](gkscore/init%28leaderboardidentifier_forplayer_%29.md): Deprecated. Returns an initialized score object for the specified leaderboard and player.
- [issueChallengeToPlayers:message:](gkscore/issuechallenge%28toplayers_message_%29.md): Deprecated. Issues a score challenge to a set of players.
- [playerID](gkscore/playerid.md): Deprecated. The player identifier for the player that earned the score.
- [reportScoreWithCompletionHandler:](gkscore/report%28completionhandler_%29.md): Deprecated. Reports a score to Game Center.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCoding](../foundation/nscoding.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

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
- [GKGameSession](gkgamesession.md): Deprecated. A game session you can use to save game data, invite other players, and create turn-based and real-time game apps.
- [GKGameSessionSharingViewController](gkgamesessionsharingviewcontroller.md): Deprecated. A user interface you can use to invite other users into a tvOS game session.
- [GKFriendRequestComposeViewController](gkfriendrequestcomposeviewcontroller.md): Deprecated. Your game uses the `GKFriendRequestComposeViewController` class to present a screen that allows the local player to send friend requests to other players.
- [GKLeaderboardViewController](gkleaderboardviewcontroller.md): Deprecated. The `GKLeaderboardViewController` class provides a standard user interface that displays leaderboard scores to the player. If the [GKGameCenterViewController](gkgamecenterviewcontroller.md) class is available, you should use it instead.
- [GKPeerPickerController](gkpeerpickercontroller.md): Deprecated. Provides a standard user interface to allow one iOS device to discover and connect to another.
- [GKSession](gksession.md): Deprecated. A [GKSession](gksession.md) object provides the ability to discover and connect to nearby iOS devices using Bluetooth or Wi-fi.
- [GKTurnBasedEventHandler](gkturnbasedeventhandler.md): Deprecated. The [GKTurnBasedEventHandler](gkturnbasedeventhandler.md) class is used to respond to important messages related to turn-based matches. To use it, call the [sharedTurnBasedEventHandler](gkturnbasedeventhandler/shared%28%29.md) class method to get the singleton instance and assign an object that implements the [GKTurnBasedEventHandlerDelegate](gkturnbasedeventhandlerdelegate.md) protocol to its [delegate](gkturnbasedeventhandler/delegate.md) property. All methods are called on the main thread.
