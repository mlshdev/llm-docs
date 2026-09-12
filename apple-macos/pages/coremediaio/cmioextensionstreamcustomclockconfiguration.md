> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/coremediaio/cmioextensionstreamcustomclockconfiguration](https://developer.apple.com/documentation/coremediaio/cmioextensionstreamcustomclockconfiguration)

# CMIOExtensionStreamCustomClockConfiguration (Swift)

**Framework:** Core Media I/O  
**Kind:** Class  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

An object that describes the parameters to create a custom clock on the host side.

## Declaration

```swift
class CMIOExtensionStreamCustomClockConfiguration
```

## Topics

### Creating a Clock Configuration

- [init(clockName:sourceIdentifier:getTimeCallMinimumInterval:numberOfEventsForRateSmoothing:numberOfAveragesForRateSmoothing:)](cmioextensionstreamcustomclockconfiguration/init%28clockname_sourceidentifier_gettimecallminimuminterval_numberofeventsforratesmoothing_numberofaveragesforratesmoothing_%29.md): Creates a custom clock configuration.

### Inspecting the Configuration

- [clockName](cmioextensionstreamcustomclockconfiguration/clockname.md): The name of the clock.
- [sourceIdentifier](cmioextensionstreamcustomclockconfiguration/sourceidentifier.md): A universally unique identifier for the clock.
- [getTimeCallMinimumInterval](cmioextensionstreamcustomclockconfiguration/gettimecallminimuminterval.md): A minimum call time interval for the clock.
- [numberOfEventsForRateSmoothing](cmioextensionstreamcustomclockconfiguration/numberofeventsforratesmoothing.md): The number of events to use for rate smoothing.
- [numberOfAveragesForRateSmoothing](cmioextensionstreamcustomclockconfiguration/numberofaveragesforratesmoothing.md): The number of averages to use for rate smoothing.

### Initializers

- [init(coder:)](cmioextensionstreamcustomclockconfiguration/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Inspecting a Stream

- [source](cmioextensionstream/source.md): The source object for the stream.
- [direction](cmioextensionstream/direction-swift.property.md): The data-flow direction of the stream.
- [CMIOExtensionStream.Direction](cmioextensionstream/direction-swift.enum.md): Constants that define the data-flow direction of the stream.
- [clockType](cmioextensionstream/clocktype-swift.property.md): A clock type for the stream.
- [CMIOExtensionStream.ClockType](cmioextensionstream/clocktype-swift.enum.md): Constants that indicate the clock type of a stream.
- [customClockConfiguration](cmioextensionstream/customclockconfiguration.md): An optional custom clock configuration for a stream.

# CMIOExtensionStreamCustomClockConfiguration (Objective-C)

**Framework:** Core Media I/O  
**Kind:** Class  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

An object that describes the parameters to create a custom clock on the host side.

## Declaration

```objectivec
@interface CMIOExtensionStreamCustomClockConfiguration : NSObject
```

## Topics

### Creating a Clock Configuration

- [customClockConfigurationWithClockName:sourceIdentifier:getTimeCallMinimumInterval:numberOfEventsForRateSmoothing:numberOfAveragesForRateSmoothing:](cmioextensionstreamcustomclockconfiguration/customclockconfigurationwithclockname_sourceidentifier_gettimecallminimuminterval_numberofeventsforratesmoothing_numberofaveragesforratesmoothing_.md): Returns a new a custom clock configuration.
- [initWithClockName:sourceIdentifier:getTimeCallMinimumInterval:numberOfEventsForRateSmoothing:numberOfAveragesForRateSmoothing:](cmioextensionstreamcustomclockconfiguration/init%28clockname_sourceidentifier_gettimecallminimuminterval_numberofeventsforratesmoothing_numberofaveragesforratesmoothing_%29.md): Creates a custom clock configuration.

### Inspecting the Configuration

- [clockName](cmioextensionstreamcustomclockconfiguration/clockname.md): The name of the clock.
- [sourceIdentifier](cmioextensionstreamcustomclockconfiguration/sourceidentifier.md): A universally unique identifier for the clock.
- [getTimeCallMinimumInterval](cmioextensionstreamcustomclockconfiguration/gettimecallminimuminterval.md): A minimum call time interval for the clock.
- [numberOfEventsForRateSmoothing](cmioextensionstreamcustomclockconfiguration/numberofeventsforratesmoothing.md): The number of events to use for rate smoothing.
- [numberOfAveragesForRateSmoothing](cmioextensionstreamcustomclockconfiguration/numberofaveragesforratesmoothing.md): The number of averages to use for rate smoothing.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Inspecting a Stream

- [source](cmioextensionstream/source.md): The source object for the stream.
- [direction](cmioextensionstream/direction-swift.property.md): The data-flow direction of the stream.
- [CMIOExtensionStreamDirection](cmioextensionstream/direction-swift.enum.md): Constants that define the data-flow direction of the stream.
- [clockType](cmioextensionstream/clocktype-swift.property.md): A clock type for the stream.
- [CMIOExtensionStreamClockType](cmioextensionstream/clocktype-swift.enum.md): Constants that indicate the clock type of a stream.
- [customClockConfiguration](cmioextensionstream/customclockconfiguration.md): An optional custom clock configuration for a stream.
