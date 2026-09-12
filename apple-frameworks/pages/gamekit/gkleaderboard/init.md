> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkleaderboard/init](https://developer.apple.com/documentation/gamekit/gkleaderboard/init)

# init

**Interface language:** Objective-C

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ (deprecated in 14.0) · iPadOS 4.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · macOS 10.8+ (deprecated in 11.0) · tvOS 9.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 7.0)

Initializes a default leaderboard request.

## Declaration

```objectivec
- (instancetype) init;
```

<a id="return-value"></a>

## Return Value

An initialized leaderboard request.

<a id="Discussion"></a>

## Discussion

A leaderboard object that you initialize with this method uses the [playerScope](playerscope-swift.property.md), [timeScope](timescope-swift.property.md), and [range](range.md) properties to search Game Center for scores.

## See Also

### Deprecated initializers

- [initWithPlayerIDs:](init%28playerids_%29.md): Deprecated. Initializes a leaderboard request to retrieve the scores of a specific group of players.
- [initWithPlayers:](init%28players_%29.md): Deprecated. Initializes a leaderboard request to retrieve the scores of a specific group of players.
