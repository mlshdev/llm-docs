> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkpeerpickercontrollerdelegate/peerpickercontroller(_:didconnectpeer:to:)](https://developer.apple.com/documentation/gamekit/gkpeerpickercontrollerdelegate/peerpickercontroller(_:didconnectpeer:to:))

# peerPickerController(\_:didConnectPeer:to:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ (deprecated in 7.0) · iPadOS 3.0+ (deprecated in 7.0) · Mac Catalyst 3.0+ (deprecated in 7.0) · visionOS 1.0+ (deprecated in 1.0)

Tells the delegate that the controller connected a peer to the session.

> Use MCBrowserViewController along with MCBrowserViewControllerDelegate from the MultipeerConnectivity framework.

## Declaration

```swift
optional func peerPickerController(_ picker: GKPeerPickerController, didConnectPeer peerID: String, to session: GKSession)
```

## Parameters

- `picker`: The controller that connected the peer.
- `peerID`: The identification string for the peer that connected to the session.
- `session`: The session that the peer is connected to.

<a id="Discussion"></a>

## Discussion

Once a peer is connected to the session, your application should take ownership of the session, dismiss the peer picker, and then use the session to communicate with the other peer.

> **Important**

>  Although optional in the protocol, Game Kit expects your application to implement this method.

# peerPickerController:didConnectPeer:toSession: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ (deprecated in 7.0) · iPadOS 3.0+ (deprecated in 7.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0)

Tells the delegate that the controller connected a peer to the session.

> Use MCBrowserViewController along with MCBrowserViewControllerDelegate from the MultipeerConnectivity framework.

## Declaration

```objectivec
- (void) peerPickerController:(GKPeerPickerController *) picker didConnectPeer:(NSString *) peerID toSession:(GKSession *) session;
```

## Parameters

- `picker`: The controller that connected the peer.
- `peerID`: The identification string for the peer that connected to the session.
- `session`: The session that the peer is connected to.

<a id="Discussion"></a>

## Discussion

Once a peer is connected to the session, your application should take ownership of the session, dismiss the peer picker, and then use the session to communicate with the other peer.

> **Important**

>  Although optional in the protocol, Game Kit expects your application to implement this method.
