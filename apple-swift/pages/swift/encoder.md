> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/encoder](https://developer.apple.com/documentation/swift/encoder)

# Encoder

**Framework:** Swift  
**Kind:** Protocol  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A type that can encode values into a native format for external representation.

## Declaration

```swift
protocol Encoder
```

## Topics

### Instance Properties

- [codingPath](encoder/codingpath.md): The path of coding keys taken to get to this point in encoding.
- [userInfo](encoder/userinfo.md): Any contextual information set by the user for encoding.

### Instance Methods

- [container(keyedBy:)](encoder/container%28keyedby_%29.md): Returns an encoding container appropriate for holding multiple values keyed by the given key type.
- [singleValueContainer()](encoder/singlevaluecontainer%28%29.md): Returns an encoding container appropriate for holding a single primitive value.
- [unkeyedContainer()](encoder/unkeyedcontainer%28%29.md): Returns an encoding container appropriate for holding multiple unkeyed values.

## See Also

### Encoders and Decoders

- [Decoder](decoder.md): A type that can decode values from a native format into in-memory representations.
- [EncodingError](encodingerror.md): An error that occurs during the encoding of a value.
- [DecodingError](decodingerror.md): An error that occurs during the decoding of a value.
