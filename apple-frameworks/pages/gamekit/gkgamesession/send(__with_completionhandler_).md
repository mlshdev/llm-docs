> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkgamesession/send(_:with:completionhandler:)](https://developer.apple.com/documentation/gamekit/gkgamesession/send(_:with:completionhandler:))

# send(\_:with:completionHandler:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 12.0) · iPadOS 10.0+ (deprecated in 12.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.12+ (deprecated in 10.14) · tvOS 10.0+ (deprecated in 12.0) · visionOS 1.0+ (deprecated in 1.0)

Sends the indicated data to all connected players.

> For real-time matches, use GKMatchmakerViewController. For turn-based matches, use GKTurnBasedMatchmakerViewController.

## Declaration

```swift
func send(_ data: Data, with transport: GKTransportType, completionHandler: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func send(_ data: Data, with transport: GKTransportType) async throws
```

## Parameters

- `data`: A `Data` object containing the information to be sent.
- `transport`: Determines how the data is sent.
- `completionHandler`: A block that is called after the data has been sent.

  - **error**: If an error occurred, this parameter holds an error object that explains the error. Otherwise, the value of this parameter is nil. See `GameKit Constants` for a list of error codes specific to GameKit.

## See Also

### Connecting Players for Real-Time Communication

- [setConnectionState(\_:completionHandler:)](setconnectionstate%28__completionhandler_%29.md): Deprecated. Sets the connection state for the player.
- [players(with:)](players%28with_%29.md): Deprecated. Retrieves a list of players with the specified connection state.
- [GKTransportType](../gktransporttype.md): The mechanism used to send messages to other players in a game session.

# sendData:withTransportType:completionHandler: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 12.0) · iPadOS 10.0+ (deprecated in 12.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.12+ (deprecated in 10.14) · tvOS 10.0+ (deprecated in 12.0) · visionOS 1.0+ (deprecated in 1.0)

Sends the indicated data to all connected players.

> For real-time matches, use GKMatchmakerViewController. For turn-based matches, use GKTurnBasedMatchmakerViewController.

## Declaration

```objectivec
- (void) sendData:(NSData *) data withTransportType:(GKTransportType) transport completionHandler:(void (^)(NSError *error)) completionHandler;
```

## Parameters

- `data`: A `Data` object containing the information to be sent.
- `transport`: Determines how the data is sent.
- `completionHandler`: A block that is called after the data has been sent.

  - **error**: If an error occurred, this parameter holds an error object that explains the error. Otherwise, the value of this parameter is nil. See `GameKit Constants` for a list of error codes specific to GameKit.

## See Also

### Connecting Players for Real-Time Communication

- [setConnectionState:completionHandler:](setconnectionstate%28__completionhandler_%29.md): Deprecated. Sets the connection state for the player.
- [playersWithConnectionState:](players%28with_%29.md): Deprecated. Retrieves a list of players with the specified connection state.
- [GKTransportType](../gktransporttype.md): The mechanism used to send messages to other players in a game session.
