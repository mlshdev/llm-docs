> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/encodingerror](https://developer.apple.com/documentation/swift/encodingerror)

# EncodingError

**Framework:** Swift  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An error that occurs during the encoding of a value.

## Declaration

```swift
enum EncodingError
```

## Topics

### Structures

- [EncodingError.Context](encodingerror/context.md): The context in which the error occurred.

### Enumeration Cases

- [EncodingError.invalidValue(\_:\_:)](encodingerror/invalidvalue%28____%29.md): An indication that an encoder or its containers could not encode the given value.

### Default Implementations

- [CustomDebugStringConvertible Implementations](encodingerror/customdebugstringconvertible-implementations.md)

## Relationships

### Conforms To

- [Copyable](copyable.md)
- [CustomDebugStringConvertible](customdebugstringconvertible.md)
- [Error](error.md)
- [Escapable](escapable.md)
- [LocalizedError](https://developer.apple.com/documentation/foundation/localizederror)
- [Sendable](sendable.md)
- [SendableMetatype](sendablemetatype.md)

## See Also

### Encoders and Decoders

- [Encoder](encoder.md): A type that can encode values into a native format for external representation.
- [Decoder](decoder.md): A type that can decode values from a native format into in-memory representations.
- [DecodingError](decodingerror.md): An error that occurs during the decoding of a value.
