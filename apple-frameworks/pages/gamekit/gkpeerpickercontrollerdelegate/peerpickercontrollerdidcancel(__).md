> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkpeerpickercontrollerdelegate/peerpickercontrollerdidcancel(_:)](https://developer.apple.com/documentation/gamekit/gkpeerpickercontrollerdelegate/peerpickercontrollerdidcancel(_:))

# peerPickerControllerDidCancel(\_:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ (deprecated in 7.0) · iPadOS 3.0+ (deprecated in 7.0) · Mac Catalyst 3.0+ (deprecated in 7.0) · visionOS 1.0+ (deprecated in 1.0)

Tells the delegate that the user canceled the connection attempt.

> Use MCBrowserViewController along with MCBrowserViewControllerDelegate from the MultipeerConnectivity framework.

## Declaration

```swift
optional func peerPickerControllerDidCancel(_ picker: GKPeerPickerController)
```

## Parameters

- `picker`: The controller for the peer picker dialog.

<a id="Discussion"></a>

## Discussion

After this method returns, the controller dismisses the picker interface.

> **Important**

>  Although optional in the protocol, Game Kit expects your application to implement this method.

# peerPickerControllerDidCancel: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ (deprecated in 7.0) · iPadOS 3.0+ (deprecated in 7.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0)

Tells the delegate that the user canceled the connection attempt.

> Use MCBrowserViewController along with MCBrowserViewControllerDelegate from the MultipeerConnectivity framework.

## Declaration

```objectivec
- (void) peerPickerControllerDidCancel:(GKPeerPickerController *) picker;
```

## Parameters

- `picker`: The controller for the peer picker dialog.

<a id="Discussion"></a>

## Discussion

After this method returns, the controller dismisses the picker interface.

> **Important**

>  Although optional in the protocol, Game Kit expects your application to implement this method.
