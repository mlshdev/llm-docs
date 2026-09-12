> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/decoder](https://developer.apple.com/documentation/swift/decoder)

# Decoder

**Framework:** Swift  
**Kind:** Protocol  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A type that can decode values from a native format into in-memory representations.

## Declaration

```swift
protocol Decoder
```

## Topics

### Instance Properties

- [codingPath](decoder/codingpath.md): The path of coding keys taken to get to this point in decoding.
- [userInfo](decoder/userinfo.md): Any contextual information set by the user for decoding.

### Instance Methods

- [container(keyedBy:)](decoder/container%28keyedby_%29.md): Returns the data stored in this decoder as represented in a container keyed by the given key type.
- [singleValueContainer()](decoder/singlevaluecontainer%28%29.md): Returns the data stored in this decoder as represented in a container appropriate for holding a single primitive value.
- [unkeyedContainer()](decoder/unkeyedcontainer%28%29.md): Returns the data stored in this decoder as represented in a container appropriate for holding values with no keys.

## See Also

### Encoders and Decoders

- [Encoder](encoder.md): A type that can encode values into a native format for external representation.
- [EncodingError](encodingerror.md): An error that occurs during the encoding of a value.
- [DecodingError](decodingerror.md): An error that occurs during the decoding of a value.
