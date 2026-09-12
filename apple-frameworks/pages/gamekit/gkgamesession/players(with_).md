> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkgamesession/players(with:)](https://developer.apple.com/documentation/gamekit/gkgamesession/players(with:))

# players(with:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 12.0) · iPadOS 10.0+ (deprecated in 12.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.12+ (deprecated in 10.14) · tvOS 10.0+ (deprecated in 12.0) · visionOS 1.0+ (deprecated in 1.0)

Retrieves a list of players with the specified connection state.

> For real-time matches, use GKMatchmakerViewController. For turn-based matches, use GKTurnBasedMatchmakerViewController.

## Declaration

```swift
func players(with state: GKConnectionState) -> [GKCloudPlayer]
```

## Parameters

- `state`: A GKConnectionState used to find the requested players.

<a id="return-value"></a>

## Return Value

An array of players with the indicated connection state.

## See Also

### Connecting Players for Real-Time Communication

- [setConnectionState(\_:completionHandler:)](setconnectionstate%28__completionhandler_%29.md): Deprecated. Sets the connection state for the player.
- [send(\_:with:completionHandler:)](send%28__with_completionhandler_%29.md): Deprecated. Sends the indicated data to all connected players.
- [GKTransportType](../gktransporttype.md): The mechanism used to send messages to other players in a game session.

# playersWithConnectionState: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 12.0) · iPadOS 10.0+ (deprecated in 12.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.12+ (deprecated in 10.14) · tvOS 10.0+ (deprecated in 12.0) · visionOS 1.0+ (deprecated in 1.0)

Retrieves a list of players with the specified connection state.

> For real-time matches, use GKMatchmakerViewController. For turn-based matches, use GKTurnBasedMatchmakerViewController.

## Declaration

```objectivec
- (NSArray<GKCloudPlayer *> *) playersWithConnectionState:(GKConnectionState) state;
```

## Parameters

- `state`: A GKConnectionState used to find the requested players.

<a id="return-value"></a>

## Return Value

An array of players with the indicated connection state.

## See Also

### Connecting Players for Real-Time Communication

- [setConnectionState:completionHandler:](setconnectionstate%28__completionhandler_%29.md): Deprecated. Sets the connection state for the player.
- [sendData:withTransportType:completionHandler:](send%28__with_completionhandler_%29.md): Deprecated. Sends the indicated data to all connected players.
- [GKTransportType](../gktransporttype.md): The mechanism used to send messages to other players in a game session.
