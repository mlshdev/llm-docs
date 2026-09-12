> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imagecapturecore/icdevicebrowser/browseddevicetypemask](https://developer.apple.com/documentation/imagecapturecore/icdevicebrowser/browseddevicetypemask)

# browsedDeviceTypeMask (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Instance Property  
**Availability:** iOS 15.2+ · iPadOS 15.2+ · Mac Catalyst 15.2+ · macOS 10.4+ · visionOS 1.0+

A mask whose set bits indicate the type of devices being browsed after the delegate receives the start message.

## Declaration

```swift
var browsedDeviceTypeMask: ICDeviceTypeMask { get set }
```

<a id="Discussion"></a>

## Discussion

Construct this property by performing bitwise OR on values of [ICDeviceTypeMask](../icdevicetypemask.md) with values of [ICDeviceLocationTypeMask](../icdevicelocationtypemask.md). You can change this property while the browser is looking for devices.

## See Also

### Browsing Devices

- [isBrowsing](isbrowsing.md): A Boolean value indicating whether the device browser is browsing for devices.
- [devices](devices.md): All devices found by the browser.
- [ICDevice](../icdevice.md): An abstract object that represents a device.
- [start()](start%28%29.md): Tells the delegate to start looking for devices.
- [stop()](stop%28%29.md): Tells the delegate to stop looking for devices.

# browsedDeviceTypeMask (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Instance Property  
**Availability:** iOS 15.2+ · iPadOS 15.2+ · Mac Catalyst 15.2+ · macOS 10.4+ · visionOS 1.0+

A mask whose set bits indicate the type of devices being browsed after the delegate receives the start message.

## Declaration

```objectivec
@property (readwrite) ICDeviceTypeMask browsedDeviceTypeMask;
```

<a id="Discussion"></a>

## Discussion

Construct this property by performing bitwise OR on values of [ICDeviceTypeMask](../icdevicetypemask.md) with values of [ICDeviceLocationTypeMask](../icdevicelocationtypemask.md). You can change this property while the browser is looking for devices.

## See Also

### Browsing Devices

- [browsing](isbrowsing.md): A Boolean value indicating whether the device browser is browsing for devices.
- [devices](devices.md): All devices found by the browser.
- [ICDevice](../icdevice.md): An abstract object that represents a device.
- [start](start%28%29.md): Tells the delegate to start looking for devices.
- [stop](stop%28%29.md): Tells the delegate to stop looking for devices.
