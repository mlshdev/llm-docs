> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/codingkey](https://developer.apple.com/documentation/swift/codingkey)

# CodingKey

**Framework:** Swift  
**Kind:** Protocol  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A type that can be used as a key for encoding and decoding.

## Declaration

```swift
protocol CodingKey : CustomDebugStringConvertible, CustomStringConvertible, Sendable
```

## Topics

### Initializers

- [init(intValue:)](codingkey/init%28intvalue_%29.md): Creates a new instance from the specified integer.
- [init(stringValue:)](codingkey/init%28stringvalue_%29.md): Creates a new instance from the given string.

### Instance Properties

- [intValue](codingkey/intvalue.md): The value to use in an integer-indexed collection (e.g. an int-keyed dictionary).
- [stringValue](codingkey/stringvalue.md): The string to use in a named collection (e.g. a string-keyed dictionary).

## Relationships

### Inherits From

- [CustomDebugStringConvertible](customdebugstringconvertible.md)
- [CustomStringConvertible](customstringconvertible.md)
- [Sendable](sendable.md)
- [SendableMetatype](sendablemetatype.md)

## See Also

### Custom Encoding and Decoding

- [Encoding and Decoding Custom Types](https://developer.apple.com/documentation/foundation/encoding-and-decoding-custom-types): Make your data types encodable and decodable for compatibility with external representations such as JSON.
- [Codable](codable.md): A type that can convert itself into and out of an external representation.
- [Encodable](encodable.md): A type that can encode itself to an external representation.
- [Decodable](decodable.md): A type that can decode itself from an external representation.
- [CodingKeyRepresentable](codingkeyrepresentable.md): A type that can be converted to and from a coding key.
- [CodingUserInfoKey](codinguserinfokey.md): A user-defined key for providing context during encoding and decoding.
