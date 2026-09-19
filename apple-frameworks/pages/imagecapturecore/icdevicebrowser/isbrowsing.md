> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/imagecapturecore/icdevicebrowser/isbrowsing

# isBrowsing (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · visionOS 1.0+

A Boolean value indicating whether the device browser is browsing for devices.

## Declaration

```swift
var isBrowsing: Bool { get }
```

## See Also

### Browsing Devices

- [devices](devices.md): All devices found by the browser.
- [ICDevice](../icdevice.md): An abstract object that represents a device.
- [browsedDeviceTypeMask](browseddevicetypemask.md): A mask whose set bits indicate the type of devices being browsed after the delegate receives the start message.
- [start()](start%28%29.md): Tells the delegate to start looking for devices.
- [stop()](stop%28%29.md): Tells the delegate to stop looking for devices.

# browsing (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · visionOS 1.0+

A Boolean value indicating whether the device browser is browsing for devices.

## Declaration

```objectivec
@property (readonly, getter=isBrowsing) BOOL browsing;
```

## See Also

### Browsing Devices

- [devices](devices.md): All devices found by the browser.
- [ICDevice](../icdevice.md): An abstract object that represents a device.
- [browsedDeviceTypeMask](browseddevicetypemask.md): A mask whose set bits indicate the type of devices being browsed after the delegate receives the start message.
- [start](start%28%29.md): Tells the delegate to start looking for devices.
- [stop](stop%28%29.md): Tells the delegate to stop looking for devices.
