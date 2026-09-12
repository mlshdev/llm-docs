> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imagecapturecore/icdevicebrowserdelegate/devicebrowser(_:didadd:morecoming:)](https://developer.apple.com/documentation/imagecapturecore/icdevicebrowserdelegate/devicebrowser(_:didadd:morecoming:))

# deviceBrowser(\_:didAdd:moreComing:) (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · visionOS 1.0+

Tells the delegate that a device has been added.

## Declaration

```swift
func deviceBrowser(_ browser: ICDeviceBrowser, didAdd device: ICDevice, moreComing: Bool)
```

<a id="Discussion"></a>

## Discussion

If several devices are found during the initial search, then this message is sent once for each device with the value of `moreComing` set to `true` in each message except the last one.

Not all devices are reported using this method. Devices that fail to communicate successfully are silently ignored.

## See Also

### Adding and Removing Devices

- [deviceBrowser(\_:didRemove:moreGoing:)](devicebrowser%28__didremove_moregoing_%29.md): Tells the delegate that a device has been removed.
- [deviceBrowserDidEnumerateLocalDevices(\_:)](devicebrowserdidenumeratelocaldevices%28__%29.md): Tells the delegate that the device browser has completed sending [deviceBrowser(\_:didAdd:moreComing:)](devicebrowser%28__didadd_morecoming_%29.md) for all local devices.

# deviceBrowser:didAddDevice:moreComing: (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · visionOS 1.0+

Tells the delegate that a device has been added.

## Declaration

```objectivec
- (void) deviceBrowser:(ICDeviceBrowser *) browser didAddDevice:(ICDevice *) device moreComing:(BOOL) moreComing;
```

<a id="Discussion"></a>

## Discussion

If several devices are found during the initial search, then this message is sent once for each device with the value of `moreComing` set to `true` in each message except the last one.

Not all devices are reported using this method. Devices that fail to communicate successfully are silently ignored.

## See Also

### Adding and Removing Devices

- [deviceBrowser:didRemoveDevice:moreGoing:](devicebrowser%28__didremove_moregoing_%29.md): Tells the delegate that a device has been removed.
- [deviceBrowserDidEnumerateLocalDevices:](devicebrowserdidenumeratelocaldevices%28__%29.md): Tells the delegate that the device browser has completed sending [deviceBrowser:didAddDevice:moreComing:](devicebrowser%28__didadd_morecoming_%29.md) for all local devices.
