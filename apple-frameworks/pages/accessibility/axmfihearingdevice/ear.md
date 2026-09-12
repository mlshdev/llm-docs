> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accessibility/axmfihearingdevice/ear](https://developer.apple.com/documentation/accessibility/axmfihearingdevice/ear)

# AXMFiHearingDevice.Ear (Swift)

**Framework:** Accessibility  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+ · watchOS 8.0+

Constants that represent a hearing device ear.

## Declaration

```swift
struct Ear
```

## Topics

### Constants

- [both](ear/both.md): A constant that represents both ears.
- [left](ear/left.md): A constant that represents the left ear.
- [right](ear/right.md): A constant that represents the right ear.

### Initializer

- [init(rawValue:)](ear/init%28rawvalue_%29.md): Creates a structure that represents a hearing device ear with the raw value you specify.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Streaming status

- [streamingEar()](streamingear%28%29.md): Returns which ears enable streaming.
- [streamingEarDidChangeNotification](streamingeardidchangenotification.md): A notification that the system posts when there’s a change to which ears enable streaming.

# AXHearingDeviceEar (Objective-C)

**Framework:** Accessibility  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+ · watchOS 8.0+

Constants that represent a hearing device ear.

## Declaration

```objectivec
enum AXHearingDeviceEar : NSUInteger;
```

## Topics

### Constants

- [AXHearingDeviceEarNone](../axhearingdeviceear/axhearingdeviceearnone.md): A constant that represents neither ear.
- [AXHearingDeviceEarBoth](ear/both.md): A constant that represents both ears.
- [AXHearingDeviceEarLeft](ear/left.md): A constant that represents the left ear.
- [AXHearingDeviceEarRight](ear/right.md): A constant that represents the right ear.

## See Also

### Streaming status

- [AXMFiHearingDeviceStreamingEar](streamingear%28%29.md): Returns which ears enable streaming.
- [AXMFiHearingDeviceStreamingEarDidChangeNotification](streamingeardidchangenotification.md): A notification that the system posts when there’s a change to which ears enable streaming.
