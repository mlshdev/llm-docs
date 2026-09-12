> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/coremediaio/cmioextensionstream/clocktype-swift.property](https://developer.apple.com/documentation/coremediaio/cmioextensionstream/clocktype-swift.property)

# clockType (Swift)

**Framework:** Core Media I/O  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

A clock type for the stream.

## Declaration

```swift
var clockType: CMIOExtensionStream.ClockType { get }
```

<a id="Discussion"></a>

## Discussion

If you created the stream with a custom clock configuration, the value of this property is [CMIOExtensionStream.ClockType.custom](clocktype-swift.enum/custom.md).

## See Also

### Inspecting a Stream

- [source](source.md): The source object for the stream.
- [direction](direction-swift.property.md): The data-flow direction of the stream.
- [CMIOExtensionStream.Direction](direction-swift.enum.md): Constants that define the data-flow direction of the stream.
- [CMIOExtensionStream.ClockType](clocktype-swift.enum.md): Constants that indicate the clock type of a stream.
- [customClockConfiguration](customclockconfiguration.md): An optional custom clock configuration for a stream.
- [CMIOExtensionStreamCustomClockConfiguration](../cmioextensionstreamcustomclockconfiguration.md): An object that describes the parameters to create a custom clock on the host side.

# clockType (Objective-C)

**Framework:** Core Media I/O  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

A clock type for the stream.

## Declaration

```objectivec
@property (atomic, readonly) CMIOExtensionStreamClockType clockType;
```

<a id="Discussion"></a>

## Discussion

If you created the stream with a custom clock configuration, the value of this property is [CMIOExtensionStreamClockTypeCustom](clocktype-swift.enum/custom.md).

## See Also

### Inspecting a Stream

- [source](source.md): The source object for the stream.
- [direction](direction-swift.property.md): The data-flow direction of the stream.
- [CMIOExtensionStreamDirection](direction-swift.enum.md): Constants that define the data-flow direction of the stream.
- [CMIOExtensionStreamClockType](clocktype-swift.enum.md): Constants that indicate the clock type of a stream.
- [customClockConfiguration](customclockconfiguration.md): An optional custom clock configuration for a stream.
- [CMIOExtensionStreamCustomClockConfiguration](../cmioextensionstreamcustomclockconfiguration.md): An object that describes the parameters to create a custom clock on the host side.
