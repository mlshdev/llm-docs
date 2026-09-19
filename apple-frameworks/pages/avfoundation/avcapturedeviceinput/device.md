> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avcapturedeviceinput/device

# device (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+ · visionOS 1.0+

A capture device associated with this input.

## Declaration

```swift
var device: AVCaptureDevice { get }
```

## See Also

### Accessing the device

- [ports(for:sourceDeviceType:sourceDevicePosition:)](ports%28for_sourcedevicetype_sourcedeviceposition_%29.md): Retrieves a virtual device’s constituent device ports for use in a multi-camera session.

# device (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+ · visionOS 1.0+

A capture device associated with this input.

## Declaration

```objectivec
@property (nonatomic, readonly) AVCaptureDevice * device;
```

## See Also

### Accessing the device

- [portsWithMediaType:sourceDeviceType:sourceDevicePosition:](ports%28for_sourcedevicetype_sourcedeviceposition_%29.md): Retrieves a virtual device’s constituent device ports for use in a multi-camera session.
