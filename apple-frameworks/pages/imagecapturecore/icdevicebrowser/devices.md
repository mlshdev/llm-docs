> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imagecapturecore/icdevicebrowser/devices](https://developer.apple.com/documentation/imagecapturecore/icdevicebrowser/devices)

# devices (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · visionOS 1.0+

All devices found by the browser.

## Declaration

```swift
var devices: [ICDevice]? { get }
```

<a id="Discussion"></a>

## Discussion

This array is empty before the first invocation of the delegate method [deviceBrowser(\_:didAdd:moreComing:)](../icdevicebrowserdelegate/devicebrowser%28__didadd_morecoming_%29.md). The value of this property changes as devices appear and disappear.

## See Also

### Browsing Devices

- [isBrowsing](isbrowsing.md): A Boolean value indicating whether the device browser is browsing for devices.
- [ICDevice](../icdevice.md): An abstract object that represents a device.
- [browsedDeviceTypeMask](browseddevicetypemask.md): A mask whose set bits indicate the type of devices being browsed after the delegate receives the start message.
- [start()](start%28%29.md): Tells the delegate to start looking for devices.
- [stop()](stop%28%29.md): Tells the delegate to stop looking for devices.

# devices (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · visionOS 1.0+

All devices found by the browser.

## Declaration

```objectivec
@property (readonly, nullable) NSArray<ICDevice *> * devices;
```

<a id="Discussion"></a>

## Discussion

This array is empty before the first invocation of the delegate method [deviceBrowser:didAddDevice:moreComing:](../icdevicebrowserdelegate/devicebrowser%28__didadd_morecoming_%29.md). The value of this property changes as devices appear and disappear.

## See Also

### Browsing Devices

- [browsing](isbrowsing.md): A Boolean value indicating whether the device browser is browsing for devices.
- [ICDevice](../icdevice.md): An abstract object that represents a device.
- [browsedDeviceTypeMask](browseddevicetypemask.md): A mask whose set bits indicate the type of devices being browsed after the delegate receives the start message.
- [start](start%28%29.md): Tells the delegate to start looking for devices.
- [stop](stop%28%29.md): Tells the delegate to stop looking for devices.
