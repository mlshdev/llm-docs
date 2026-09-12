> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkpeerpickercontrollerdelegate/peerpickercontroller(_:didselect:)](https://developer.apple.com/documentation/gamekit/gkpeerpickercontrollerdelegate/peerpickercontroller(_:didselect:))

# peerPickerController(\_:didSelect:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ (deprecated in 7.0) · iPadOS 3.0+ (deprecated in 7.0) · Mac Catalyst 3.0+ (deprecated in 7.0) · visionOS 1.0+ (deprecated in 1.0)

Tells the delegate that the user selected a connection type.

> Use MCBrowserViewController along with MCBrowserViewControllerDelegate from the MultipeerConnectivity framework.

## Declaration

```swift
optional func peerPickerController(_ picker: GKPeerPickerController, didSelect type: GKPeerPickerConnectionType)
```

## Parameters

- `picker`: The controller for the peer picker dialog.
- `type`: The type of network connection chosen by the user.

<a id="Discussion"></a>

## Discussion

If the peer picker is configured to allow users to choose between multiple connection types, this method is called when users select the connection type they want to use. Your delegate implements this method if you want to override the behavior for a particular connection type.

> **Important**

>  In iOS 3.0, the peer picker can configure Bluetooth connections ([GKPeerPickerConnectionType.nearby](../gkpeerpickerconnectiontype/nearby.md)). If the user chooses an Internet connection ([GKPeerPickerConnectionType.online](../gkpeerpickerconnectiontype/online.md)), your delegate should dismiss the dialog and present its own user interface to configure the Internet connection:

```objc
- (void)peerPickerController:(GKPeerPickerController *)picker didSelectConnectionType:(GKPeerPickerConnectionType)type {
    if(type == GKPeerPickerConnectionTypeOnline) {
        [picker dismiss];
        [picker autorelease];
// Display your own user interface here.
}
```

## See Also

### Creating a Session for the Peer Picker

- [peerPickerController(\_:sessionFor:)](peerpickercontroller%28__sessionfor_%29.md): Deprecated. Asks the delegate to return a session for the specified connection type.

# peerPickerController:didSelectConnectionType: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ (deprecated in 7.0) · iPadOS 3.0+ (deprecated in 7.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0)

Tells the delegate that the user selected a connection type.

> Use MCBrowserViewController along with MCBrowserViewControllerDelegate from the MultipeerConnectivity framework.

## Declaration

```objectivec
- (void) peerPickerController:(GKPeerPickerController *) picker didSelectConnectionType:(GKPeerPickerConnectionType) type;
```

## Parameters

- `picker`: The controller for the peer picker dialog.
- `type`: The type of network connection chosen by the user.

<a id="Discussion"></a>

## Discussion

If the peer picker is configured to allow users to choose between multiple connection types, this method is called when users select the connection type they want to use. Your delegate implements this method if you want to override the behavior for a particular connection type.

> **Important**

>  In iOS 3.0, the peer picker can configure Bluetooth connections ([GKPeerPickerConnectionTypeNearby](../gkpeerpickerconnectiontype/nearby.md)). If the user chooses an Internet connection ([GKPeerPickerConnectionTypeOnline](../gkpeerpickerconnectiontype/online.md)), your delegate should dismiss the dialog and present its own user interface to configure the Internet connection:

```objc
- (void)peerPickerController:(GKPeerPickerController *)picker didSelectConnectionType:(GKPeerPickerConnectionType)type {
    if(type == GKPeerPickerConnectionTypeOnline) {
        [picker dismiss];
        [picker autorelease];
// Display your own user interface here.
}
```

## See Also

### Creating a Session for the Peer Picker

- [peerPickerController:sessionForConnectionType:](peerpickercontroller%28__sessionfor_%29.md): Deprecated. Asks the delegate to return a session for the specified connection type.
