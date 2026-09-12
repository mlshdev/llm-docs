> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imagecapturecore/icdevicebrowserdelegate/devicebrowser(_:didremove:moregoing:)](https://developer.apple.com/documentation/imagecapturecore/icdevicebrowserdelegate/devicebrowser(_:didremove:moregoing:))

# deviceBrowser(\_:didRemove:moreGoing:) (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · visionOS 1.0+

Tells the delegate that a device has been removed.

## Declaration

```swift
func deviceBrowser(_ browser: ICDeviceBrowser, didRemove device: ICDevice, moreGoing: Bool)
```

<a id="Discussion"></a>

## Discussion

If several devices are removed at the same time, then this message is sent once for each device with the value of `moreGoing` set to `true` in each message except the last one.

## See Also

### Adding and Removing Devices

- [deviceBrowser(\_:didAdd:moreComing:)](devicebrowser%28__didadd_morecoming_%29.md): Tells the delegate that a device has been added.
- [deviceBrowserDidEnumerateLocalDevices(\_:)](devicebrowserdidenumeratelocaldevices%28__%29.md): Tells the delegate that the device browser has completed sending [deviceBrowser(\_:didAdd:moreComing:)](devicebrowser%28__didadd_morecoming_%29.md) for all local devices.

# deviceBrowser:didRemoveDevice:moreGoing: (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · visionOS 1.0+

Tells the delegate that a device has been removed.

## Declaration

```objectivec
- (void) deviceBrowser:(ICDeviceBrowser *) browser didRemoveDevice:(ICDevice *) device moreGoing:(BOOL) moreGoing;
```

<a id="Discussion"></a>

## Discussion

If several devices are removed at the same time, then this message is sent once for each device with the value of `moreGoing` set to `true` in each message except the last one.

## See Also

### Adding and Removing Devices

- [deviceBrowser:didAddDevice:moreComing:](devicebrowser%28__didadd_morecoming_%29.md): Tells the delegate that a device has been added.
- [deviceBrowserDidEnumerateLocalDevices:](devicebrowserdidenumeratelocaldevices%28__%29.md): Tells the delegate that the device browser has completed sending [deviceBrowser:didAddDevice:moreComing:](devicebrowser%28__didadd_morecoming_%29.md) for all local devices.
