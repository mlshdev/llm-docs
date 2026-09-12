> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkleaderboard/init(players:)](https://developer.apple.com/documentation/gamekit/gkleaderboard/init(players:))

# init(players:) (Swift)

**Framework:** GameKit  
**Kind:** Initializer  
**Availability:** iOS 8.0+ (deprecated in 14.0) · iPadOS 8.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · macOS 10.10+ (deprecated in 11.0) · tvOS 9.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 7.0)

Initializes a leaderboard request to retrieve the scores of a specific group of players.

> Use the [loadEntries(for:timeScope:completionHandler:)](loadentries%28for_timescope_completionhandler_%29.md) method instead.

## Declaration

```swift
init(players: [GKPlayer])
```

## Parameters

- `players`: An array of [GKPlayer](../gkplayer.md) objects that holds the player identifiers to retrieve.

<a id="return-value"></a>

## Return Value

An initialized leaderboard request.

<a id="Discussion"></a>

## Discussion

A leaderboard object that you initialize with this method ignores the [playerScope](playerscope-swift.property.md) and [range](range.md) properties. Instead, it retrieves scores for the specific list of players whose [GKPlayer](../gkplayer.md) objects are in the `players` parameter.

## See Also

### Deprecated initializers

- [init(playerIDs:)](init%28playerids_%29.md): Deprecated. Initializes a leaderboard request to retrieve the scores of a specific group of players.

# initWithPlayers: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 14.0) · iPadOS 8.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · macOS 10.10+ (deprecated in 11.0) · tvOS 9.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 7.0)

Initializes a leaderboard request to retrieve the scores of a specific group of players.

> Use the [loadEntriesForPlayers:timeScope:completionHandler:](loadentries%28for_timescope_completionhandler_%29.md) method instead.

## Declaration

```objectivec
- (instancetype) initWithPlayers:(NSArray<GKPlayer *> *) players;
```

## Parameters

- `players`: An array of [GKPlayer](../gkplayer.md) objects that holds the player identifiers to retrieve.

<a id="return-value"></a>

## Return Value

An initialized leaderboard request.

<a id="Discussion"></a>

## Discussion

A leaderboard object that you initialize with this method ignores the [playerScope](playerscope-swift.property.md) and [range](range.md) properties. Instead, it retrieves scores for the specific list of players whose [GKPlayer](../gkplayer.md) objects are in the `players` parameter.

## See Also

### Deprecated initializers

- [init](init.md): Deprecated. Initializes a default leaderboard request.
- [initWithPlayerIDs:](init%28playerids_%29.md): Deprecated. Initializes a leaderboard request to retrieve the scores of a specific group of players.
