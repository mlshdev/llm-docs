> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkscore/playerid](https://developer.apple.com/documentation/gamekit/gkscore/playerid)

# playerID (Swift)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 4.1+ (deprecated in 8.0) · iPadOS 4.1+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.8+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 3.0)

The player identifier for the player that earned the score.

## Declaration

```swift
var playerID: String? { get }
```

<a id="Discussion"></a>

## Discussion

When you initialize a new score object, the [playerID](playerid.md) property is set to the identifier for the local player. If the score object was returned to your game by loading scores from Game Center, the [playerID](playerid.md) property identifies the player who recorded that score.

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
- [shouldSetDefaultLeaderboard](shouldsetdefaultleaderboard.md): Deprecated. A Boolean value that indicates whether this score should also update the default leaderboard.
- [init(leaderboardIdentifier:)](init%28leaderboardidentifier_%29.md): Deprecated. Returns an initialized score object using the local player and the current date.
- [init(leaderboardIdentifier:player:)](init%28leaderboardidentifier_player_%29.md): Deprecated. Returns an initialized score object for the specified leaderboard and player.
- [init(category:)](init%28category_%29.md): Deprecated. Returns an initialized score object.
- [init(leaderboardIdentifier:forPlayer:)](init%28leaderboardidentifier_forplayer_%29.md): Deprecated. Returns an initialized score object for the specified leaderboard and player.
- [issueChallenge(toPlayers:message:)](issuechallenge%28toplayers_message_%29.md): Deprecated. Issues a score challenge to a set of players.
- [report(completionHandler:)](report%28completionhandler_%29.md): Deprecated. Reports a score to Game Center.

# playerID (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 4.1+ (deprecated in 8.0) · iPadOS 4.1+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.8+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 3.0)

The player identifier for the player that earned the score.

## Declaration

```objectivec
@property (nonatomic, retain, readonly, nullable) NSString * playerID;
```

```objectivec
@property (atomic, retain, readonly, nullable) NSString * playerID;
```

<a id="Discussion"></a>

## Discussion

When you initialize a new score object, the [playerID](playerid.md) property is set to the identifier for the local player. If the score object was returned to your game by loading scores from Game Center, the [playerID](playerid.md) property identifies the player who recorded that score.

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
- [shouldSetDefaultLeaderboard](shouldsetdefaultleaderboard.md): Deprecated. A Boolean value that indicates whether this score should also update the default leaderboard.
- [initWithLeaderboardIdentifier:](init%28leaderboardidentifier_%29.md): Deprecated. Returns an initialized score object using the local player and the current date.
- [initWithLeaderboardIdentifier:player:](init%28leaderboardidentifier_player_%29.md): Deprecated. Returns an initialized score object for the specified leaderboard and player.
- [initWithCategory:](init%28category_%29.md): Deprecated. Returns an initialized score object.
- [initWithLeaderboardIdentifier:forPlayer:](init%28leaderboardidentifier_forplayer_%29.md): Deprecated. Returns an initialized score object for the specified leaderboard and player.
- [issueChallengeToPlayers:message:](issuechallenge%28toplayers_message_%29.md): Deprecated. Issues a score challenge to a set of players.
- [reportScoreWithCompletionHandler:](report%28completionhandler_%29.md): Deprecated. Reports a score to Game Center.
