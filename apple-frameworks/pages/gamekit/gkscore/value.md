> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkscore/value](https://developer.apple.com/documentation/gamekit/gkscore/value)

# value (Swift)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 4.1+ (deprecated in 14.0) · iPadOS 4.1+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · macOS 10.8+ (deprecated in 11.0) · tvOS 9.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 7.0)

The score earned by the player.

## Declaration

```swift
var value: Int64 { get set }
```

<a id="Discussion"></a>

## Discussion

You can use any algorithm you want to calculate scores in your game. Your game must set the `value` property before reporting a score, otherwise an error is returned.

The value provided by a score object is interpreted by Game Center only when formatted for display. You determine how your scores are formatted when you define the leaderboard in App Store Connect.

## See Also

### Deprecated Methods and Properties

- [category](category.md): Deprecated. The leaderboard that this score belongs to.
- [context](context.md): Deprecated. An integer value used by your game.
- [date](date.md): Deprecated. The date and time when the score was earned.
- [formattedValue](formattedvalue.md): Deprecated. Returns the player’s score as a localized string.
- [leaderboardIdentifier](leaderboardidentifier.md): Deprecated. The identifier for the leaderboard.
- [player](player.md): Deprecated. The player who earned the score.
- [rank](rank.md): Deprecated. The position of the score in the results of a leaderboard search.
- [shouldSetDefaultLeaderboard](shouldsetdefaultleaderboard.md): Deprecated. A Boolean value that indicates whether this score should also update the default leaderboard.
- [init(leaderboardIdentifier:)](init%28leaderboardidentifier_%29.md): Deprecated. Returns an initialized score object using the local player and the current date.
- [init(leaderboardIdentifier:player:)](init%28leaderboardidentifier_player_%29.md): Deprecated. Returns an initialized score object for the specified leaderboard and player.
- [init(category:)](init%28category_%29.md): Deprecated. Returns an initialized score object.
- [init(leaderboardIdentifier:forPlayer:)](init%28leaderboardidentifier_forplayer_%29.md): Deprecated. Returns an initialized score object for the specified leaderboard and player.
- [issueChallenge(toPlayers:message:)](issuechallenge%28toplayers_message_%29.md): Deprecated. Issues a score challenge to a set of players.
- [playerID](playerid.md): Deprecated. The player identifier for the player that earned the score.
- [report(completionHandler:)](report%28completionhandler_%29.md): Deprecated. Reports a score to Game Center.

# value (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 4.1+ (deprecated in 14.0) · iPadOS 4.1+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · macOS 10.8+ (deprecated in 11.0) · tvOS 9.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 7.0)

The score earned by the player.

## Declaration

```objectivec
@property (nonatomic, assign) int64_t value;
```

```objectivec
@property (atomic, assign) int64_t value;
```

<a id="Discussion"></a>

## Discussion

You can use any algorithm you want to calculate scores in your game. Your game must set the `value` property before reporting a score, otherwise an error is returned.

The value provided by a score object is interpreted by Game Center only when formatted for display. You determine how your scores are formatted when you define the leaderboard in App Store Connect.

## See Also

### Deprecated Methods and Properties

- [category](category.md): Deprecated. The leaderboard that this score belongs to.
- [context](context.md): Deprecated. An integer value used by your game.
- [date](date.md): Deprecated. The date and time when the score was earned.
- [formattedValue](formattedvalue.md): Deprecated. Returns the player’s score as a localized string.
- [leaderboardIdentifier](leaderboardidentifier.md): Deprecated. The identifier for the leaderboard.
- [player](player.md): Deprecated. The player who earned the score.
- [rank](rank.md): Deprecated. The position of the score in the results of a leaderboard search.
- [shouldSetDefaultLeaderboard](shouldsetdefaultleaderboard.md): Deprecated. A Boolean value that indicates whether this score should also update the default leaderboard.
- [initWithLeaderboardIdentifier:](init%28leaderboardidentifier_%29.md): Deprecated. Returns an initialized score object using the local player and the current date.
- [initWithLeaderboardIdentifier:player:](init%28leaderboardidentifier_player_%29.md): Deprecated. Returns an initialized score object for the specified leaderboard and player.
- [initWithCategory:](init%28category_%29.md): Deprecated. Returns an initialized score object.
- [initWithLeaderboardIdentifier:forPlayer:](init%28leaderboardidentifier_forplayer_%29.md): Deprecated. Returns an initialized score object for the specified leaderboard and player.
- [issueChallengeToPlayers:message:](issuechallenge%28toplayers_message_%29.md): Deprecated. Issues a score challenge to a set of players.
- [playerID](playerid.md): Deprecated. The player identifier for the player that earned the score.
- [reportScoreWithCompletionHandler:](report%28completionhandler_%29.md): Deprecated. Reports a score to Game Center.
