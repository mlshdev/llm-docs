> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkleaderboard/init(playerids:)](https://developer.apple.com/documentation/gamekit/gkleaderboard/init(playerids:))

# init(playerIDs:) (Swift)

**Framework:** GameKit  
**Kind:** Initializer  
**Availability:** iOS 4.1+ (deprecated in 8.0) · iPadOS 4.1+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.8+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Initializes a leaderboard request to retrieve the scores of a specific group of players.

> Use the [loadEntries(for:timeScope:completionHandler:)](loadentries%28for_timescope_completionhandler_%29.md) method instead.

## Declaration

```swift
init?(playerIDs: [String]?)
```

## Parameters

- `playerIDs`: An array of `NSString` objects that holds the player identifier strings of the players to retrieve.

<a id="return-value"></a>

## Return Value

An initialized leaderboard request.

<a id="Discussion"></a>

## Discussion

A leaderboard object that you initialize with this method ignores the [playerScope](playerscope-swift.property.md) and [range](range.md) properties. Instead, it retrieves scores for the specific list of players whose identifiers are in the `playerIDs` parameter.

## See Also

### Deprecated initializers

- [init(players:)](init%28players_%29.md): Deprecated. Initializes a leaderboard request to retrieve the scores of a specific group of players.

# initWithPlayerIDs: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 4.1+ (deprecated in 8.0) · iPadOS 4.1+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.8+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Initializes a leaderboard request to retrieve the scores of a specific group of players.

> Use the [loadEntriesForPlayers:timeScope:completionHandler:](loadentries%28for_timescope_completionhandler_%29.md) method instead.

## Declaration

```objectivec
- (instancetype) initWithPlayerIDs:(NSArray<NSString *> *) playerIDs;
```

## Parameters

- `playerIDs`: An array of `NSString` objects that holds the player identifier strings of the players to retrieve.

<a id="return-value"></a>

## Return Value

An initialized leaderboard request.

<a id="Discussion"></a>

## Discussion

A leaderboard object that you initialize with this method ignores the [playerScope](playerscope-swift.property.md) and [range](range.md) properties. Instead, it retrieves scores for the specific list of players whose identifiers are in the `playerIDs` parameter.

## See Also

### Deprecated initializers

- [init](init.md): Deprecated. Initializes a default leaderboard request.
- [initWithPlayers:](init%28players_%29.md): Deprecated. Initializes a leaderboard request to retrieve the scores of a specific group of players.
