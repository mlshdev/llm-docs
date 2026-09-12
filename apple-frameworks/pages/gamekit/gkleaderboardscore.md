> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkleaderboardscore](https://developer.apple.com/documentation/gamekit/gkleaderboardscore)

# GKLeaderboardScore (Swift)

**Framework:** GameKit  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Information about a player’s score on a leaderboard.

## Declaration

```swift
class GKLeaderboardScore
```

<a id="overview"></a>

## Overview

A [GKLeaderboardScore](gkleaderboardscore.md) object represents a score on a leaderboard for scores you report for challenges or turn-based games.

When you create a [GKLeaderboardScore](gkleaderboardscore.md) object, set the `leaderboardID` property to the associated leaderboard, the `player` property to the player who earns the score, and the `value` property to the score. Make sure the score is compatible with the score format that you configure in App Store Connect.

Then use either the [report(\_:withEligibleChallenges:withCompletionHandler:)](gkscore/report%28__witheligiblechallenges_withcompletionhandler_%29-2tycl.md) or [endMatchInTurn(withMatch:leaderboardScores:achievements:completionHandler:)](gkturnbasedmatch/endmatchinturn%28withmatch_leaderboardscores_achievements_completionhandler_%29.md) `GKTurnBasedMatch` method to report one or more scores.

For details about the score format, see [Configure leaderboards](https://developer.apple.com/help/app-store-connect/configure-game-center/configure-leaderboards) in App Store Connect Help.

## Topics

### Accessing Properties

- [context](gkleaderboardscore/context.md): An integer value that your game uses.
- [leaderboardID](gkleaderboardscore/leaderboardid.md): The ID that Game Center uses for the leaderboard.
- [player](gkleaderboardscore/player.md): The player who earns the score.
- [value](gkleaderboardscore/value.md): The score that the player earns.

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
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Leaderboards

- [Encourage progress and competition with leaderboards](encourage-progress-and-competition-with-leaderboards.md): Let players measure their own progress and compare their skills with friends and others.
- [Creating recurring leaderboards](creating-recurring-leaderboards.md): Create a leaderboard for your game that ranks player scores based on a schedule.
- [Adding Recurring Leaderboards to Your Game](adding-recurring-leaderboards-to-your-game.md): Encourage competition in your games by adding leaderboards that have a duration and repeat.
- [GKLeaderboard](gkleaderboard.md): A leaderboard for a game that Game Center stores.
- [GKLeaderboardSet](gkleaderboardset.md): Organizes leaderboards into logical and coherent groups.

# GKLeaderboardScore (Objective-C)

**Framework:** GameKit  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Information about a player’s score on a leaderboard.

## Declaration

```objectivec
@interface GKLeaderboardScore : NSObject
```

<a id="overview"></a>

## Overview

A [GKLeaderboardScore](gkleaderboardscore.md) object represents a score on a leaderboard for scores you report for challenges or turn-based games.

When you create a [GKLeaderboardScore](gkleaderboardscore.md) object, set the `leaderboardID` property to the associated leaderboard, the `player` property to the player who earns the score, and the `value` property to the score. Make sure the score is compatible with the score format that you configure in App Store Connect.

Then use either the [reportLeaderboardScores:withEligibleChallenges:withCompletionHandler:](gkscore/report%28__witheligiblechallenges_withcompletionhandler_%29-2tycl.md) or [endMatchInTurnWithMatchData:leaderboardScores:achievements:completionHandler:](gkturnbasedmatch/endmatchinturn%28withmatch_leaderboardscores_achievements_completionhandler_%29.md) `GKTurnBasedMatch` method to report one or more scores.

For details about the score format, see [Configure leaderboards](https://developer.apple.com/help/app-store-connect/configure-game-center/configure-leaderboards) in App Store Connect Help.

## Topics

### Accessing Properties

- [context](gkleaderboardscore/context.md): An integer value that your game uses.
- [leaderboardID](gkleaderboardscore/leaderboardid.md): The ID that Game Center uses for the leaderboard.
- [player](gkleaderboardscore/player.md): The player who earns the score.
- [value](gkleaderboardscore/value.md): The score that the player earns.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Leaderboards

- [Encourage progress and competition with leaderboards](encourage-progress-and-competition-with-leaderboards.md): Let players measure their own progress and compare their skills with friends and others.
- [Creating recurring leaderboards](creating-recurring-leaderboards.md): Create a leaderboard for your game that ranks player scores based on a schedule.
- [Adding Recurring Leaderboards to Your Game](adding-recurring-leaderboards-to-your-game.md): Encourage competition in your games by adding leaderboards that have a duration and repeat.
- [GKLeaderboard](gkleaderboard.md): A leaderboard for a game that Game Center stores.
- [GKLeaderboardSet](gkleaderboardset.md): Organizes leaderboards into logical and coherent groups.
