> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imagecapturecore/icdevicetransport](https://developer.apple.com/documentation/imagecapturecore/icdevicetransport)

# ICDeviceTransport (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · visionOS 1.0+

The hardware connection types a device can use.

## Declaration

```swift
struct ICDeviceTransport
```

## Topics

### Initializers

- [init(rawValue:)](icdevicetransport/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Inspecting a Device’s Transport Type

- [transportType](icdevice/transporttype.md): The hardware connection type the device is using.

# ICDeviceTransport (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Type Alias  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · visionOS 1.0+

The hardware connection types a device can use.

## Declaration

```objectivec
typedef NSString * ICDeviceTransport;
```

## See Also

### Inspecting a Device’s Transport Type

- [transportType](icdevice/transporttype.md): The hardware connection type the device is using.
