> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkleaderboard/entry](https://developer.apple.com/documentation/gamekit/gkleaderboard/entry)

# GKLeaderboard.Entry (Swift)

**Framework:** GameKit  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Information about a single score by a player on a leaderboard.

## Declaration

```swift
class Entry
```

## Mentioned In

- [Encourage progress and competition with leaderboards](../encourage-progress-and-competition-with-leaderboards.md)

## Topics

### Accessing Properties

- [context](entry/context.md): An integer value that your game uses.
- [date](entry/date.md): The date and time when the player earns the score.
- [formattedScore](entry/formattedscore.md): The player’s score as a localized string.
- [player](entry/player.md): The player who earns the score.
- [rank](entry/rank.md): The position of the score in the results of a leaderboard search.
- [score](entry/score.md): The score that the player earns.

### Presenting Challenges

- [challengeComposeController(withMessage:players:completion:)](entry/challengecomposecontroller%28withmessage_players_completion_%29.md): Deprecated. Provides a challenge compose view controller with preselected player identifiers and a preformatted, player-editable message.
- [GKChallengeComposeHandler](../gkchallengecomposehandler.md): Deprecated. A completion block that provides information about the player who issues a challenge and the players who receive it.
- [challengeComposeController(withMessage:players:completionHandler:)](entry/challengecomposecontroller%28withmessage_players_completionhandler_%29.md): Deprecated. Provides a challenge compose view controller with preselected player identifiers and a preformatted, player-editable message.

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../../objectivec/nsobjectprotocol.md)

## See Also

### Loading Scores

- [loadEntries(for:timeScope:range:completionHandler:)](loadentries%28for_timescope_range_completionhandler_%29.md): Returns the scores for the local player and other players for the specified type of player, time period, and ranks.
- [loadEntries(for:timeScope:completionHandler:)](loadentries%28for_timescope_completionhandler_%29.md): Returns the scores for the local player and other players for the specified time period.
- [GKLeaderboard.PlayerScope](playerscope-swift.enum.md): Specifies the type of players for filtering data.
- [GKLeaderboard.TimeScope](timescope-swift.enum.md): Specifies the time period for filtering data.

# GKLeaderboardEntry (Objective-C)

**Framework:** GameKit  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Information about a single score by a player on a leaderboard.

## Declaration

```objectivec
@interface GKLeaderboardEntry : NSObject
```

## Mentioned In

- [Encourage progress and competition with leaderboards](../encourage-progress-and-competition-with-leaderboards.md)

## Topics

### Accessing Properties

- [context](entry/context.md): An integer value that your game uses.
- [date](entry/date.md): The date and time when the player earns the score.
- [formattedScore](entry/formattedscore.md): The player’s score as a localized string.
- [player](entry/player.md): The player who earns the score.
- [rank](entry/rank.md): The position of the score in the results of a leaderboard search.
- [score](entry/score.md): The score that the player earns.

### Presenting Challenges

- [challengeComposeControllerWithMessage:players:completion:](entry/challengecomposecontroller%28withmessage_players_completion_%29.md): Deprecated. Provides a challenge compose view controller with preselected player identifiers and a preformatted, player-editable message.
- [GKChallengeComposeHandler](../gkchallengecomposehandler.md): Deprecated. A completion block that provides information about the player who issues a challenge and the players who receive it.
- [challengeComposeControllerWithMessage:players:completionHandler:](entry/challengecomposecontroller%28withmessage_players_completionhandler_%29.md): Deprecated. Provides a challenge compose view controller with preselected player identifiers and a preformatted, player-editable message.

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

## See Also

### Loading Scores

- [loadEntriesForPlayerScope:timeScope:range:completionHandler:](loadentries%28for_timescope_range_completionhandler_%29.md): Returns the scores for the local player and other players for the specified type of player, time period, and ranks.
- [loadEntriesForPlayers:timeScope:completionHandler:](loadentries%28for_timescope_completionhandler_%29.md): Returns the scores for the local player and other players for the specified time period.
- [GKLeaderboardPlayerScope](playerscope-swift.enum.md): Specifies the type of players for filtering data.
- [GKLeaderboardTimeScope](timescope-swift.enum.md): Specifies the time period for filtering data.
