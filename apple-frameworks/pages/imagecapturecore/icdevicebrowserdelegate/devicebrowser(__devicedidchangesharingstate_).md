> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imagecapturecore/icdevicebrowserdelegate/devicebrowser(_:devicedidchangesharingstate:)](https://developer.apple.com/documentation/imagecapturecore/icdevicebrowserdelegate/devicebrowser(_:devicedidchangesharingstate:))

# deviceBrowser(\_:deviceDidChangeSharingState:) (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.4+ (deprecated in 10.13) · visionOS 1.0+

Tells the delegate when the sharing state of a device changes.

## Declaration

```swift
optional func deviceBrowser(_ browser: ICDeviceBrowser, deviceDidChangeSharingState device: ICDevice)
```

## See Also

### Responding to Device Changes

- [deviceBrowser(\_:requestsSelect:)](devicebrowser%28__requestsselect_%29.md): Tells the delegate when an event occurs on the device that may be of interest to the client application.
- [deviceBrowser(\_:deviceDidChangeName:)](devicebrowser%28__devicedidchangename_%29.md): Tells the delegate when the name of a device changes.

# deviceBrowser:deviceDidChangeSharingState: (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.4+ (deprecated in 10.13) · visionOS

Tells the delegate when the sharing state of a device changes.

## Declaration

```objectivec
- (void) deviceBrowser:(ICDeviceBrowser *) browser deviceDidChangeSharingState:(ICDevice *) device;
```

## See Also

### Responding to Device Changes

- [deviceBrowser:requestsSelectDevice:](devicebrowser%28__requestsselect_%29.md): Tells the delegate when an event occurs on the device that may be of interest to the client application.
- [deviceBrowser:deviceDidChangeName:](devicebrowser%28__devicedidchangename_%29.md): Tells the delegate when the name of a device changes.
