> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imagecapturecore/icdevicebrowserdelegate/devicebrowserdidenumeratelocaldevices(_:)](https://developer.apple.com/documentation/imagecapturecore/icdevicebrowserdelegate/devicebrowserdidenumeratelocaldevices(_:))

# deviceBrowserDidEnumerateLocalDevices(\_:) (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Tells the delegate that the device browser has completed sending [deviceBrowser(\_:didAdd:moreComing:)](devicebrowser%28__didadd_morecoming_%29.md) for all local devices.

## Declaration

```swift
optional func deviceBrowserDidEnumerateLocalDevices(_ browser: ICDeviceBrowser)
```

<a id="Discussion"></a>

## Discussion

Detecting locally connected devices (USB and FireWire devices) is faster than detecting devices connected using a network protocol. An Image Capture client application may use this message to update its user interface to let the user know that it has completed looking for locally connected devices and then started looking for network devices.

## See Also

### Adding and Removing Devices

- [deviceBrowser(\_:didAdd:moreComing:)](devicebrowser%28__didadd_morecoming_%29.md): Tells the delegate that a device has been added.
- [deviceBrowser(\_:didRemove:moreGoing:)](devicebrowser%28__didremove_moregoing_%29.md): Tells the delegate that a device has been removed.

# deviceBrowserDidEnumerateLocalDevices: (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Tells the delegate that the device browser has completed sending [deviceBrowser:didAddDevice:moreComing:](devicebrowser%28__didadd_morecoming_%29.md) for all local devices.

## Declaration

```objectivec
- (void) deviceBrowserDidEnumerateLocalDevices:(ICDeviceBrowser *) browser;
```

<a id="Discussion"></a>

## Discussion

Detecting locally connected devices (USB and FireWire devices) is faster than detecting devices connected using a network protocol. An Image Capture client application may use this message to update its user interface to let the user know that it has completed looking for locally connected devices and then started looking for network devices.

## See Also

### Adding and Removing Devices

- [deviceBrowser:didAddDevice:moreComing:](devicebrowser%28__didadd_morecoming_%29.md): Tells the delegate that a device has been added.
- [deviceBrowser:didRemoveDevice:moreGoing:](devicebrowser%28__didremove_moregoing_%29.md): Tells the delegate that a device has been removed.
