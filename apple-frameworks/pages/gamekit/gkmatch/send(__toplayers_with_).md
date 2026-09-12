> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkmatch/send(_:toplayers:with:)](https://developer.apple.com/documentation/gamekit/gkmatch/send(_:toplayers:with:))

# send(\_:toPlayers:with:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 4.1+ (deprecated in 8.0) · iPadOS 4.1+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.8+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0)

Transmits data to a list of connected players.

> Use the [sendData(toAllPlayers:with:)](senddata%28toallplayers_with_%29.md) method instead.

## Declaration

```swift
func send(_ data: Data, toPlayers playerIDs: [String], with mode: GKMatch.SendDataMode) throws
```

## Parameters

- `data`: The bytes to send.
- `playerIDs`: The identifier strings for the list of players who should receive the data.
- `mode`: The mechanism used to send the data.

<a id="Discussion"></a>

## Discussion

The match queues the data and transmits it when the network becomes available.

## See Also

### Deprecated Methods and Properties

- [chooseBestHostPlayer(completionHandler:)](choosebesthostplayer%28completionhandler_%29.md): Deprecated. Determines the best player in the game to act as the server for a client-server match.
- [playerIDs](playerids.md): Deprecated. The player identifiers for remote players in the match.

# sendData:toPlayers:withDataMode:error: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 4.1+ (deprecated in 8.0) · iPadOS 4.1+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.8+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0)

Transmits data to a list of connected players.

> Use the [sendDataToAllPlayers:withDataMode:error:](senddata%28toallplayers_with_%29.md) method instead.

## Declaration

```objectivec
- (BOOL) sendData:(NSData *) data toPlayers:(NSArray<NSString *> *) playerIDs withDataMode:(GKMatchSendDataMode) mode error:(NSError **) error;
```

## Parameters

- `data`: The bytes to send.
- `playerIDs`: The identifier strings for the list of players who should receive the data.
- `mode`: The mechanism used to send the data.
- `error`: If GameKit can’t transmit the data, describes the error; otherwise, `nil`.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the data was successfully queued for transmission; [false](https://developer.apple.com/documentation/swift/false) if the match was unable to queue the data.

<a id="Discussion"></a>

## Discussion

The match queues the data and transmits it when the network becomes available.

## See Also

### Deprecated Methods and Properties

- [chooseBestHostPlayerWithCompletionHandler:](choosebesthostplayer%28completionhandler_%29.md): Deprecated. Determines the best player in the game to act as the server for a client-server match.
- [playerIDs](playerids.md): Deprecated. The player identifiers for remote players in the match.
