> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/coremediaio/cmioextensionstream/direction-swift.property](https://developer.apple.com/documentation/coremediaio/cmioextensionstream/direction-swift.property)

# direction (Swift)

**Framework:** Core Media I/O  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

The data-flow direction of the stream.

## Declaration

```swift
var direction: CMIOExtensionStream.Direction { get }
```

## See Also

### Inspecting a Stream

- [source](source.md): The source object for the stream.
- [CMIOExtensionStream.Direction](direction-swift.enum.md): Constants that define the data-flow direction of the stream.
- [clockType](clocktype-swift.property.md): A clock type for the stream.
- [CMIOExtensionStream.ClockType](clocktype-swift.enum.md): Constants that indicate the clock type of a stream.
- [customClockConfiguration](customclockconfiguration.md): An optional custom clock configuration for a stream.
- [CMIOExtensionStreamCustomClockConfiguration](../cmioextensionstreamcustomclockconfiguration.md): An object that describes the parameters to create a custom clock on the host side.

# direction (Objective-C)

**Framework:** Core Media I/O  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

The data-flow direction of the stream.

## Declaration

```objectivec
@property (atomic, readonly) CMIOExtensionStreamDirection direction;
```

## See Also

### Inspecting a Stream

- [source](source.md): The source object for the stream.
- [CMIOExtensionStreamDirection](direction-swift.enum.md): Constants that define the data-flow direction of the stream.
- [clockType](clocktype-swift.property.md): A clock type for the stream.
- [CMIOExtensionStreamClockType](clocktype-swift.enum.md): Constants that indicate the clock type of a stream.
- [customClockConfiguration](customclockconfiguration.md): An optional custom clock configuration for a stream.
- [CMIOExtensionStreamCustomClockConfiguration](../cmioextensionstreamcustomclockconfiguration.md): An object that describes the parameters to create a custom clock on the host side.
