> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkscore/shouldsetdefaultleaderboard](https://developer.apple.com/documentation/gamekit/gkscore/shouldsetdefaultleaderboard)

# shouldSetDefaultLeaderboard (Swift)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ (deprecated in 14.0) · iPadOS 5.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · macOS 10.8+ (deprecated in 11.0) · tvOS 9.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 7.0)

A Boolean value that indicates whether this score should also update the default leaderboard.

## Declaration

```swift
var shouldSetDefaultLeaderboard: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If the value of this property is [true](https://developer.apple.com/documentation/swift/true), when the score is reported to Game Center, Game Center also updates the local player’s default leaderboard to match the value stored in the [leaderboardIdentifier](leaderboardidentifier.md) property of the score object. This matches the behavior of the [GKLeaderboard](../gkleaderboard.md) class’s [setDefault(\_:withCompletionHandler:)](../gkleaderboard/setdefault%28__withcompletionhandler_%29.md) class method. If the value of this property is [false](https://developer.apple.com/documentation/swift/false), the default leaderboard is not changed by reporting the score. The default value of this property is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Deprecated Methods and Properties

- [category](category.md): Deprecated. The leaderboard that this score belongs to.
- [context](context.md): Deprecated. An integer value used by your game.
- [date](date.md): Deprecated. The date and time when the score was earned.
- [formattedValue](formattedvalue.md): Deprecated. Returns the player’s score as a localized string.
- [leaderboardIdentifier](leaderboardidentifier.md): Deprecated. The identifier for the leaderboard.
- [player](player.md): Deprecated. The player who earned the score.
- [rank](rank.md): Deprecated. The position of the score in the results of a leaderboard search.
- [value](value.md): Deprecated. The score earned by the player.
- [init(leaderboardIdentifier:)](init%28leaderboardidentifier_%29.md): Deprecated. Returns an initialized score object using the local player and the current date.
- [init(leaderboardIdentifier:player:)](init%28leaderboardidentifier_player_%29.md): Deprecated. Returns an initialized score object for the specified leaderboard and player.
- [init(category:)](init%28category_%29.md): Deprecated. Returns an initialized score object.
- [init(leaderboardIdentifier:forPlayer:)](init%28leaderboardidentifier_forplayer_%29.md): Deprecated. Returns an initialized score object for the specified leaderboard and player.
- [issueChallenge(toPlayers:message:)](issuechallenge%28toplayers_message_%29.md): Deprecated. Issues a score challenge to a set of players.
- [playerID](playerid.md): Deprecated. The player identifier for the player that earned the score.
- [report(completionHandler:)](report%28completionhandler_%29.md): Deprecated. Reports a score to Game Center.

# shouldSetDefaultLeaderboard (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ (deprecated in 14.0) · iPadOS 5.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · macOS 10.8+ (deprecated in 11.0) · tvOS 9.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 7.0)

A Boolean value that indicates whether this score should also update the default leaderboard.

## Declaration

```objectivec
@property (nonatomic, assign) BOOL shouldSetDefaultLeaderboard;
```

<a id="Discussion"></a>

## Discussion

If the value of this property is [true](https://developer.apple.com/documentation/swift/true), when the score is reported to Game Center, Game Center also updates the local player’s default leaderboard to match the value stored in the [leaderboardIdentifier](leaderboardidentifier.md) property of the score object. This matches the behavior of the [GKLeaderboard](../gkleaderboard.md) class’s [setDefaultLeaderboard:withCompletionHandler:](../gkleaderboard/setdefault%28__withcompletionhandler_%29.md) class method. If the value of this property is [false](https://developer.apple.com/documentation/swift/false), the default leaderboard is not changed by reporting the score. The default value of this property is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Deprecated Methods and Properties

- [category](category.md): Deprecated. The leaderboard that this score belongs to.
- [context](context.md): Deprecated. An integer value used by your game.
- [date](date.md): Deprecated. The date and time when the score was earned.
- [formattedValue](formattedvalue.md): Deprecated. Returns the player’s score as a localized string.
- [leaderboardIdentifier](leaderboardidentifier.md): Deprecated. The identifier for the leaderboard.
- [player](player.md): Deprecated. The player who earned the score.
- [rank](rank.md): Deprecated. The position of the score in the results of a leaderboard search.
- [value](value.md): Deprecated. The score earned by the player.
- [initWithLeaderboardIdentifier:](init%28leaderboardidentifier_%29.md): Deprecated. Returns an initialized score object using the local player and the current date.
- [initWithLeaderboardIdentifier:player:](init%28leaderboardidentifier_player_%29.md): Deprecated. Returns an initialized score object for the specified leaderboard and player.
- [initWithCategory:](init%28category_%29.md): Deprecated. Returns an initialized score object.
- [initWithLeaderboardIdentifier:forPlayer:](init%28leaderboardidentifier_forplayer_%29.md): Deprecated. Returns an initialized score object for the specified leaderboard and player.
- [issueChallengeToPlayers:message:](issuechallenge%28toplayers_message_%29.md): Deprecated. Issues a score challenge to a set of players.
- [playerID](playerid.md): Deprecated. The player identifier for the player that earned the score.
- [reportScoreWithCompletionHandler:](report%28completionhandler_%29.md): Deprecated. Reports a score to Game Center.
