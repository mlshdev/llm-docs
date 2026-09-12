> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/format/autofocussystem-swift.enum](https://developer.apple.com/documentation/avfoundation/avcapturedevice/format/autofocussystem-swift.enum)

# AVCaptureDevice.Format.AutoFocusSystem (Swift)

**Framework:** AVFoundation  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 17.0+

An enumeration of auto focus systems.

## Declaration

```swift
enum AutoFocusSystem
```

## Topics

### Systems

- [AVCaptureDevice.Format.AutoFocusSystem.none](autofocussystem-swift.enum/none.md): Autofocus isn’t available.
- [AVCaptureDevice.Format.AutoFocusSystem.contrastDetection](autofocussystem-swift.enum/contrastdetection.md): A slower autofocus system based on differences in contrast.
- [AVCaptureDevice.Format.AutoFocusSystem.phaseDetection](autofocussystem-swift.enum/phasedetection.md): A faster autofoscus system based on differences in light phase.

### Initializers

- [init(rawValue:)](autofocussystem-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Determining the auto focus system

- [autoFocusSystem](autofocussystem-swift.property.md): The auto focus system the format uses.

# AVCaptureAutoFocusSystem (Objective-C)

**Framework:** AVFoundation  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 17.0+

An enumeration of auto focus systems.

## Declaration

```objectivec
enum AVCaptureAutoFocusSystem : NSInteger;
```

## Topics

### Systems

- [AVCaptureAutoFocusSystemNone](autofocussystem-swift.enum/none.md): Autofocus isn’t available.
- [AVCaptureAutoFocusSystemContrastDetection](autofocussystem-swift.enum/contrastdetection.md): A slower autofocus system based on differences in contrast.
- [AVCaptureAutoFocusSystemPhaseDetection](autofocussystem-swift.enum/phasedetection.md): A faster autofoscus system based on differences in light phase.

## See Also

### Determining the auto focus system

- [autoFocusSystem](autofocussystem-swift.property.md): The auto focus system the format uses.
