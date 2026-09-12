> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkpeerpickercontrollerdelegate/peerpickercontroller(_:sessionfor:)](https://developer.apple.com/documentation/gamekit/gkpeerpickercontrollerdelegate/peerpickercontroller(_:sessionfor:))

# peerPickerController(\_:sessionFor:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ (deprecated in 7.0) · iPadOS 3.0+ (deprecated in 7.0) · Mac Catalyst 3.0+ (deprecated in 7.0) · visionOS 1.0+ (deprecated in 1.0)

Asks the delegate to return a session for the specified connection type.

> Use MCBrowserViewController along with MCBrowserViewControllerDelegate from the MultipeerConnectivity framework.

## Declaration

```swift
optional func peerPickerController(_ picker: GKPeerPickerController, sessionFor type: GKPeerPickerConnectionType) -> GKSession
```

## Parameters

- `picker`: The controller requesting the session.
- `type`: The type of connection the controller wants to configure.

<a id="Discussion"></a>

## Discussion

Your delegate is responsible for providing a [GKSession](../gksession.md) to use to find and connect to other devices. When the peer picker needs a session, it calls this method. Your application can either create a new session or return a previously created session to the peer picker. The session that your application returns to the peer picker must advertise itself as a peer ([GKSessionMode.peer](../gksessionmode/peer.md)).

If your delegate does not implement this method and the user selected a network of type [GKPeerPickerConnectionType.nearby](../gkpeerpickerconnectiontype/nearby.md), the peer controller allocates a new session that advertises itself as a peer ([GKSessionMode.peer](../gksessionmode/peer.md)) with the default [sessionID](../gksession/sessionid.md) and [displayName](../gksession/displayname.md) parameters.

<a id="Special-Considerations"></a>

### Special Considerations

In iOS 3.0, your delegate receives requests only for networks of type [GKPeerPickerConnectionType.nearby](../gkpeerpickerconnectiontype/nearby.md).

## See Also

### Creating a Session for the Peer Picker

- [peerPickerController(\_:didSelect:)](peerpickercontroller%28__didselect_%29.md): Deprecated. Tells the delegate that the user selected a connection type.

# peerPickerController:sessionForConnectionType: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ (deprecated in 7.0) · iPadOS 3.0+ (deprecated in 7.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0)

Asks the delegate to return a session for the specified connection type.

> Use MCBrowserViewController along with MCBrowserViewControllerDelegate from the MultipeerConnectivity framework.

## Declaration

```objectivec
- (GKSession *) peerPickerController:(GKPeerPickerController *) picker sessionForConnectionType:(GKPeerPickerConnectionType) type;
```

## Parameters

- `picker`: The controller requesting the session.
- `type`: The type of connection the controller wants to configure.

<a id="Discussion"></a>

## Discussion

Your delegate is responsible for providing a [GKSession](../gksession.md) to use to find and connect to other devices. When the peer picker needs a session, it calls this method. Your application can either create a new session or return a previously created session to the peer picker. The session that your application returns to the peer picker must advertise itself as a peer ([GKSessionModePeer](../gksessionmode/peer.md)).

If your delegate does not implement this method and the user selected a network of type [GKPeerPickerConnectionTypeNearby](../gkpeerpickerconnectiontype/nearby.md), the peer controller allocates a new session that advertises itself as a peer ([GKSessionModePeer](../gksessionmode/peer.md)) with the default [sessionID](../gksession/sessionid.md) and [displayName](../gksession/displayname.md) parameters.

<a id="Special-Considerations"></a>

### Special Considerations

In iOS 3.0, your delegate receives requests only for networks of type [GKPeerPickerConnectionTypeNearby](../gkpeerpickerconnectiontype/nearby.md).

## See Also

### Creating a Session for the Peer Picker

- [peerPickerController:didSelectConnectionType:](peerpickercontroller%28__didselect_%29.md): Deprecated. Tells the delegate that the user selected a connection type.
