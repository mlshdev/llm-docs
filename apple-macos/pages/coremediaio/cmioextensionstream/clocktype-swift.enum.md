> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/coremediaio/cmioextensionstream/clocktype-swift.enum](https://developer.apple.com/documentation/coremediaio/cmioextensionstream/clocktype-swift.enum)

# CMIOExtensionStream.ClockType (Swift)

**Framework:** Core Media I/O  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

Constants that indicate the clock type of a stream.

## Declaration

```swift
enum ClockType
```

## Topics

### Clock Types

- [CMIOExtensionStream.ClockType.hostTime](clocktype-swift.enum/hosttime.md): Indicates that the stream uses the host time clock.
- [CMIOExtensionStream.ClockType.linkedCoreAudioDeviceUID](clocktype-swift.enum/linkedcoreaudiodeviceuid.md): Indicates that the stream uses the clock of the linked Core Audio device.
- [CMIOExtensionStream.ClockType.custom](clocktype-swift.enum/custom.md): Indicates that the stream’s clock is specific to the device hosting the stream.

### Initializers

- [init(rawValue:)](clocktype-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Inspecting a Stream

- [source](source.md): The source object for the stream.
- [direction](direction-swift.property.md): The data-flow direction of the stream.
- [CMIOExtensionStream.Direction](direction-swift.enum.md): Constants that define the data-flow direction of the stream.
- [clockType](clocktype-swift.property.md): A clock type for the stream.
- [customClockConfiguration](customclockconfiguration.md): An optional custom clock configuration for a stream.
- [CMIOExtensionStreamCustomClockConfiguration](../cmioextensionstreamcustomclockconfiguration.md): An object that describes the parameters to create a custom clock on the host side.

# CMIOExtensionStreamClockType (Objective-C)

**Framework:** Core Media I/O  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

Constants that indicate the clock type of a stream.

## Declaration

```objectivec
enum CMIOExtensionStreamClockType : NSInteger;
```

## Topics

### Clock Types

- [CMIOExtensionStreamClockTypeHostTime](clocktype-swift.enum/hosttime.md): Indicates that the stream uses the host time clock.
- [CMIOExtensionStreamClockTypeLinkedCoreAudioDeviceUID](clocktype-swift.enum/linkedcoreaudiodeviceuid.md): Indicates that the stream uses the clock of the linked Core Audio device.
- [CMIOExtensionStreamClockTypeCustom](clocktype-swift.enum/custom.md): Indicates that the stream’s clock is specific to the device hosting the stream.

## See Also

### Inspecting a Stream

- [source](source.md): The source object for the stream.
- [direction](direction-swift.property.md): The data-flow direction of the stream.
- [CMIOExtensionStreamDirection](direction-swift.enum.md): Constants that define the data-flow direction of the stream.
- [clockType](clocktype-swift.property.md): A clock type for the stream.
- [customClockConfiguration](customclockconfiguration.md): An optional custom clock configuration for a stream.
- [CMIOExtensionStreamCustomClockConfiguration](../cmioextensionstreamcustomclockconfiguration.md): An object that describes the parameters to create a custom clock on the host side.
