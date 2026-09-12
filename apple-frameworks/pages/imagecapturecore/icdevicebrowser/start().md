> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imagecapturecore/icdevicebrowser/start()](https://developer.apple.com/documentation/imagecapturecore/icdevicebrowser/start())

# start() (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · visionOS 1.0+

Tells the delegate to start looking for devices.

## Declaration

```swift
func start()
```

<a id="Discussion"></a>

## Discussion

Set the [delegate](delegate.md) before calling this method; otherwise, the method call is ignored.

## See Also

### Browsing Devices

- [isBrowsing](isbrowsing.md): A Boolean value indicating whether the device browser is browsing for devices.
- [devices](devices.md): All devices found by the browser.
- [ICDevice](../icdevice.md): An abstract object that represents a device.
- [browsedDeviceTypeMask](browseddevicetypemask.md): A mask whose set bits indicate the type of devices being browsed after the delegate receives the start message.
- [stop()](stop%28%29.md): Tells the delegate to stop looking for devices.

# start (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · visionOS 1.0+

Tells the delegate to start looking for devices.

## Declaration

```objectivec
- (void) start;
```

<a id="Discussion"></a>

## Discussion

Set the [delegate](delegate.md) before calling this method; otherwise, the method call is ignored.

## See Also

### Browsing Devices

- [browsing](isbrowsing.md): A Boolean value indicating whether the device browser is browsing for devices.
- [devices](devices.md): All devices found by the browser.
- [ICDevice](../icdevice.md): An abstract object that represents a device.
- [browsedDeviceTypeMask](browseddevicetypemask.md): A mask whose set bits indicate the type of devices being browsed after the delegate receives the start message.
- [stop](stop%28%29.md): Tells the delegate to stop looking for devices.
