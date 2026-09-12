> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkgamesession/setconnectionstate(_:completionhandler:)](https://developer.apple.com/documentation/gamekit/gkgamesession/setconnectionstate(_:completionhandler:))

# setConnectionState(\_:completionHandler:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 12.0) · iPadOS 10.0+ (deprecated in 12.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.12+ (deprecated in 10.14) · tvOS 10.0+ (deprecated in 12.0) · visionOS 1.0+ (deprecated in 1.0)

Sets the connection state for the player.

> For real-time matches, use GKMatchmakerViewController. For turn-based matches, use GKTurnBasedMatchmakerViewController.

## Declaration

```swift
func setConnectionState(_ state: GKConnectionState, completionHandler: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func setConnectionState(_ state: GKConnectionState) async throws
```

## Parameters

- `state`: The `GKConnectionState` to be assigned to the player.
- `completionHandler`: A block that is called after the connect state has been set.

  - **error**: If an error occurred, this parameter holds an error object that explains the error. Otherwise, the value of this parameter is nil. See `GameKit Constants` for a list of error codes specific to GameKit.

<a id="Discussion"></a>

## Discussion

This method will fail when the game session’s player limit has already been reached or there are network problems. The game session’s `lastModifiedDate` and `lastModifiedPlayer` properties are updated on completion.

## See Also

### Connecting Players for Real-Time Communication

- [players(with:)](players%28with_%29.md): Deprecated. Retrieves a list of players with the specified connection state.
- [send(\_:with:completionHandler:)](send%28__with_completionhandler_%29.md): Deprecated. Sends the indicated data to all connected players.
- [GKTransportType](../gktransporttype.md): The mechanism used to send messages to other players in a game session.

# setConnectionState:completionHandler: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 12.0) · iPadOS 10.0+ (deprecated in 12.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.12+ (deprecated in 10.14) · tvOS 10.0+ (deprecated in 12.0) · visionOS 1.0+ (deprecated in 1.0)

Sets the connection state for the player.

> For real-time matches, use GKMatchmakerViewController. For turn-based matches, use GKTurnBasedMatchmakerViewController.

## Declaration

```objectivec
- (void) setConnectionState:(GKConnectionState) state completionHandler:(void (^)(NSError *error)) completionHandler;
```

## Parameters

- `state`: The `GKConnectionState` to be assigned to the player.
- `completionHandler`: A block that is called after the connect state has been set.

  - **error**: If an error occurred, this parameter holds an error object that explains the error. Otherwise, the value of this parameter is nil. See `GameKit Constants` for a list of error codes specific to GameKit.

<a id="Discussion"></a>

## Discussion

This method will fail when the game session’s player limit has already been reached or there are network problems. The game session’s `lastModifiedDate` and `lastModifiedPlayer` properties are updated on completion.

## See Also

### Connecting Players for Real-Time Communication

- [playersWithConnectionState:](players%28with_%29.md): Deprecated. Retrieves a list of players with the specified connection state.
- [sendData:withTransportType:completionHandler:](send%28__with_completionhandler_%29.md): Deprecated. Sends the indicated data to all connected players.
- [GKTransportType](../gktransporttype.md): The mechanism used to send messages to other players in a game session.
