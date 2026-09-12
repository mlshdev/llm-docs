> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkmatch/choosebesthostplayer(completionhandler:)](https://developer.apple.com/documentation/gamekit/gkmatch/choosebesthostplayer(completionhandler:))

# chooseBestHostPlayer(completionHandler:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ (deprecated in 8.0) · iPadOS 6.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.9+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0)

Determines the best player in the game to act as the server for a client-server match.

> Use the [chooseBestHostingPlayer(completionHandler:)](choosebesthostingplayer%28completionhandler_%29.md) method instead.

## Declaration

```swift
func chooseBestHostPlayer(completionHandler: @escaping @Sendable (String?) -> Void)
```

```swift
func chooseBestHostPlayer() async -> String?
```

## Parameters

- `completionHandler`: The block that GameKit calls when it completes the request.

  The block receives the following parameter:

  - **`playerID`**: The player identifier for the player with the best estimated network performance, or `nil` if GameKit couldn’t find a best host player.

<a id="Discussion"></a>

## Discussion

Calling this method causes GameKit to attempt to estimate which player has the best overall network connection using a variety of metrics such as bandwidth, latency, and network reliability. Typically, you call this method when your game implements a client-server model on top of the match’s peer-to-peer connection.

## See Also

### Deprecated Methods and Properties

- [playerIDs](playerids.md): Deprecated. The player identifiers for remote players in the match.
- [send(\_:toPlayers:with:)](send%28__toplayers_with_%29.md): Deprecated. Transmits data to a list of connected players.

# chooseBestHostPlayerWithCompletionHandler: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ (deprecated in 8.0) · iPadOS 6.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.9+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0)

Determines the best player in the game to act as the server for a client-server match.

> Use the [chooseBestHostingPlayerWithCompletionHandler:](choosebesthostingplayer%28completionhandler_%29.md) method instead.

## Declaration

```objectivec
- (void) chooseBestHostPlayerWithCompletionHandler:(void (^)(NSString *playerID)) completionHandler;
```

## Parameters

- `completionHandler`: The block that GameKit calls when it completes the request.

  The block receives the following parameter:

  - **`playerID`**: The player identifier for the player with the best estimated network performance, or `nil` if GameKit couldn’t find a best host player.

<a id="Discussion"></a>

## Discussion

Calling this method causes GameKit to attempt to estimate which player has the best overall network connection using a variety of metrics such as bandwidth, latency, and network reliability. Typically, you call this method when your game implements a client-server model on top of the match’s peer-to-peer connection.

## See Also

### Deprecated Methods and Properties

- [playerIDs](playerids.md): Deprecated. The player identifiers for remote players in the match.
- [sendData:toPlayers:withDataMode:error:](send%28__toplayers_with_%29.md): Deprecated. Transmits data to a list of connected players.
