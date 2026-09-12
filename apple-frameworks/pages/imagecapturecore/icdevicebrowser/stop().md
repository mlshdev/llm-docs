> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imagecapturecore/icdevicebrowser/stop()](https://developer.apple.com/documentation/imagecapturecore/icdevicebrowser/stop())

# stop() (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · visionOS 1.0+

Tells the delegate to stop looking for devices.

## Declaration

```swift
func stop()
```

<a id="Discussion"></a>

## Discussion

Calling this method frees all device instances that are not in use.

## See Also

### Browsing Devices

- [isBrowsing](isbrowsing.md): A Boolean value indicating whether the device browser is browsing for devices.
- [devices](devices.md): All devices found by the browser.
- [ICDevice](../icdevice.md): An abstract object that represents a device.
- [browsedDeviceTypeMask](browseddevicetypemask.md): A mask whose set bits indicate the type of devices being browsed after the delegate receives the start message.
- [start()](start%28%29.md): Tells the delegate to start looking for devices.

# stop (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · visionOS 1.0+

Tells the delegate to stop looking for devices.

## Declaration

```objectivec
- (void) stop;
```

<a id="Discussion"></a>

## Discussion

Calling this method frees all device instances that are not in use.

## See Also

### Browsing Devices

- [browsing](isbrowsing.md): A Boolean value indicating whether the device browser is browsing for devices.
- [devices](devices.md): All devices found by the browser.
- [ICDevice](../icdevice.md): An abstract object that represents a device.
- [browsedDeviceTypeMask](browseddevicetypemask.md): A mask whose set bits indicate the type of devices being browsed after the delegate receives the start message.
- [start](start%28%29.md): Tells the delegate to start looking for devices.
