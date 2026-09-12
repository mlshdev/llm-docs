> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkscore/category](https://developer.apple.com/documentation/gamekit/gkscore/category)

# category (Swift)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 4.1+ (deprecated in 7.0) · iPadOS 4.1+ (deprecated in 7.0) · Mac Catalyst 4.1+ (deprecated in 7.0) · macOS 10.8+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 3.0)

The leaderboard that this score belongs to.

## Declaration

```swift
var category: String? { get set }
```

<a id="Discussion"></a>

## Discussion

The category string must match an identifier for a leaderboard you created in App Store Connect.

## See Also

### Deprecated Methods and Properties

- [context](context.md): Deprecated. An integer value used by your game.
- [date](date.md): Deprecated. The date and time when the score was earned.
- [formattedValue](formattedvalue.md): Deprecated. Returns the player’s score as a localized string.
- [leaderboardIdentifier](leaderboardidentifier.md): Deprecated. The identifier for the leaderboard.
- [player](player.md): Deprecated. The player who earned the score.
- [rank](rank.md): Deprecated. The position of the score in the results of a leaderboard search.
- [value](value.md): Deprecated. The score earned by the player.
- [shouldSetDefaultLeaderboard](shouldsetdefaultleaderboard.md): Deprecated. A Boolean value that indicates whether this score should also update the default leaderboard.
- [init(leaderboardIdentifier:)](init%28leaderboardidentifier_%29.md): Deprecated. Returns an initialized score object using the local player and the current date.
- [init(leaderboardIdentifier:player:)](init%28leaderboardidentifier_player_%29.md): Deprecated. Returns an initialized score object for the specified leaderboard and player.
- [init(category:)](init%28category_%29.md): Deprecated. Returns an initialized score object.
- [init(leaderboardIdentifier:forPlayer:)](init%28leaderboardidentifier_forplayer_%29.md): Deprecated. Returns an initialized score object for the specified leaderboard and player.
- [issueChallenge(toPlayers:message:)](issuechallenge%28toplayers_message_%29.md): Deprecated. Issues a score challenge to a set of players.
- [playerID](playerid.md): Deprecated. The player identifier for the player that earned the score.
- [report(completionHandler:)](report%28completionhandler_%29.md): Deprecated. Reports a score to Game Center.

# category (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 4.1+ (deprecated in 7.0) · iPadOS 4.1+ (deprecated in 7.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.8+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 3.0)

The leaderboard that this score belongs to.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * category;
```

```objectivec
@property (atomic, copy, nullable) NSString * category;
```

<a id="Discussion"></a>

## Discussion

The category string must match an identifier for a leaderboard you created in App Store Connect.

## See Also

### Deprecated Methods and Properties

- [context](context.md): Deprecated. An integer value used by your game.
- [date](date.md): Deprecated. The date and time when the score was earned.
- [formattedValue](formattedvalue.md): Deprecated. Returns the player’s score as a localized string.
- [leaderboardIdentifier](leaderboardidentifier.md): Deprecated. The identifier for the leaderboard.
- [player](player.md): Deprecated. The player who earned the score.
- [rank](rank.md): Deprecated. The position of the score in the results of a leaderboard search.
- [value](value.md): Deprecated. The score earned by the player.
- [shouldSetDefaultLeaderboard](shouldsetdefaultleaderboard.md): Deprecated. A Boolean value that indicates whether this score should also update the default leaderboard.
- [initWithLeaderboardIdentifier:](init%28leaderboardidentifier_%29.md): Deprecated. Returns an initialized score object using the local player and the current date.
- [initWithLeaderboardIdentifier:player:](init%28leaderboardidentifier_player_%29.md): Deprecated. Returns an initialized score object for the specified leaderboard and player.
- [initWithCategory:](init%28category_%29.md): Deprecated. Returns an initialized score object.
- [initWithLeaderboardIdentifier:forPlayer:](init%28leaderboardidentifier_forplayer_%29.md): Deprecated. Returns an initialized score object for the specified leaderboard and player.
- [issueChallengeToPlayers:message:](issuechallenge%28toplayers_message_%29.md): Deprecated. Issues a score challenge to a set of players.
- [playerID](playerid.md): Deprecated. The player identifier for the player that earned the score.
- [reportScoreWithCompletionHandler:](report%28completionhandler_%29.md): Deprecated. Reports a score to Game Center.
