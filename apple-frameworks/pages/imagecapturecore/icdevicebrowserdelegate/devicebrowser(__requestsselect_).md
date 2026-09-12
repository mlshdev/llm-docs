> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imagecapturecore/icdevicebrowserdelegate/devicebrowser(_:requestsselect:)](https://developer.apple.com/documentation/imagecapturecore/icdevicebrowserdelegate/devicebrowser(_:requestsselect:))

# deviceBrowser(\_:requestsSelect:) (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Tells the delegate when an event occurs on the device that may be of interest to the client application.

## Declaration

```swift
optional func deviceBrowser(_ browser: ICDeviceBrowser, requestsSelect device: ICDevice)
```

<a id="Discussion"></a>

## Discussion

This message is sent when a button is pressed on a device and the current application is the target for that button press. When this happens, if a session is open on the device, this message is not sent to the browser delegate; instead the message `device(_:didReceiveButtonPress:)` is sent to the device delegate.

## See Also

### Responding to Device Changes

- [deviceBrowser(\_:deviceDidChangeName:)](devicebrowser%28__devicedidchangename_%29.md): Tells the delegate when the name of a device changes.
- [deviceBrowser(\_:deviceDidChangeSharingState:)](devicebrowser%28__devicedidchangesharingstate_%29.md): Deprecated. Tells the delegate when the sharing state of a device changes.

# deviceBrowser:requestsSelectDevice: (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Tells the delegate when an event occurs on the device that may be of interest to the client application.

## Declaration

```objectivec
- (void) deviceBrowser:(ICDeviceBrowser *) browser requestsSelectDevice:(ICDevice *) device;
```

<a id="Discussion"></a>

## Discussion

This message is sent when a button is pressed on a device and the current application is the target for that button press. When this happens, if a session is open on the device, this message is not sent to the browser delegate; instead the message `device(_:didReceiveButtonPress:)` is sent to the device delegate.

## See Also

### Responding to Device Changes

- [deviceBrowser:deviceDidChangeName:](devicebrowser%28__devicedidchangename_%29.md): Tells the delegate when the name of a device changes.
- [deviceBrowser:deviceDidChangeSharingState:](devicebrowser%28__devicedidchangesharingstate_%29.md): Deprecated. Tells the delegate when the sharing state of a device changes.
