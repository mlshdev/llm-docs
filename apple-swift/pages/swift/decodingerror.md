> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/decodingerror](https://developer.apple.com/documentation/swift/decodingerror)

# DecodingError

**Framework:** Swift  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An error that occurs during the decoding of a value.

## Declaration

```swift
enum DecodingError
```

## Topics

### Structures

- [DecodingError.Context](decodingerror/context.md): The context in which the error occurred.

### Enumeration Cases

- [DecodingError.dataCorrupted(\_:)](decodingerror/datacorrupted%28__%29.md): An indication that the data is corrupted or otherwise invalid.
- [DecodingError.keyNotFound(\_:\_:)](decodingerror/keynotfound%28____%29.md): An indication that a keyed decoding container was asked for an entry for the given key, but did not contain one.
- [DecodingError.typeMismatch(\_:\_:)](decodingerror/typemismatch%28____%29.md): An indication that a value of the given type could not be decoded because it did not match the type of what was found in the encoded payload.
- [DecodingError.valueNotFound(\_:\_:)](decodingerror/valuenotfound%28____%29.md): An indication that a non-optional value of the given type was expected, but a null value was found.

### Type Methods

- [dataCorruptedError(forKey:in:debugDescription:)](decodingerror/datacorruptederror%28forkey_in_debugdescription_%29.md): Returns a new `.dataCorrupted` error using a constructed coding path and the given debug description.
- [dataCorruptedError(in:debugDescription:)](decodingerror/datacorruptederror%28in_debugdescription_%29-4ruvu.md): Returns a new `.dataCorrupted` error using a constructed coding path and the given debug description.
- [dataCorruptedError(in:debugDescription:)](decodingerror/datacorruptederror%28in_debugdescription_%29-5on9z.md): Returns a new `.dataCorrupted` error using a constructed coding path and the given debug description.

### Default Implementations

- [CustomDebugStringConvertible Implementations](decodingerror/customdebugstringconvertible-implementations.md)

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
- [EncodingError](encodingerror.md): An error that occurs during the encoding of a value.
