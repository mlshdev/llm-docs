> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imagecapturecore/icdevicebrowserdelegate/devicebrowser(_:devicedidchangename:)](https://developer.apple.com/documentation/imagecapturecore/icdevicebrowserdelegate/devicebrowser(_:devicedidchangename:))

# deviceBrowser(\_:deviceDidChangeName:) (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · visionOS 1.0+

Tells the delegate when the name of a device changes.

## Declaration

```swift
optional func deviceBrowser(_ browser: ICDeviceBrowser, deviceDidChangeName device: ICDevice)
```

<a id="Discussion"></a>

## Discussion

A device’s name may change if a device module overrides the default name reported by the device’s transport layer, or if a user changes the name of the file system volume mounted by the device.

## See Also

### Responding to Device Changes

- [deviceBrowser(\_:requestsSelect:)](devicebrowser%28__requestsselect_%29.md): Tells the delegate when an event occurs on the device that may be of interest to the client application.
- [deviceBrowser(\_:deviceDidChangeSharingState:)](devicebrowser%28__devicedidchangesharingstate_%29.md): Deprecated. Tells the delegate when the sharing state of a device changes.

# deviceBrowser:deviceDidChangeName: (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · visionOS 1.0+

Tells the delegate when the name of a device changes.

## Declaration

```objectivec
- (void) deviceBrowser:(ICDeviceBrowser *) browser deviceDidChangeName:(ICDevice *) device;
```

<a id="Discussion"></a>

## Discussion

A device’s name may change if a device module overrides the default name reported by the device’s transport layer, or if a user changes the name of the file system volume mounted by the device.

## See Also

### Responding to Device Changes

- [deviceBrowser:requestsSelectDevice:](devicebrowser%28__requestsselect_%29.md): Tells the delegate when an event occurs on the device that may be of interest to the client application.
- [deviceBrowser:deviceDidChangeSharingState:](devicebrowser%28__devicedidchangesharingstate_%29.md): Deprecated. Tells the delegate when the sharing state of a device changes.
