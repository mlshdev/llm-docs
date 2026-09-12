> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/codable](https://developer.apple.com/documentation/swift/codable)

# Codable

**Framework:** Swift  
**Kind:** Type Alias  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A type that can convert itself into and out of an external representation.

## Declaration

```swift
typealias Codable = Decodable & Encodable
```

<a id="discussion"></a>

## Discussion

`Codable` is a type alias for the `Encodable` and `Decodable` protocols. When you use `Codable` as a type or a generic constraint, it matches any type that conforms to both protocols.

## See Also

### Custom Encoding and Decoding

- [Encoding and Decoding Custom Types](https://developer.apple.com/documentation/foundation/encoding-and-decoding-custom-types): Make your data types encodable and decodable for compatibility with external representations such as JSON.
- [Encodable](encodable.md): A type that can encode itself to an external representation.
- [Decodable](decodable.md): A type that can decode itself from an external representation.
- [CodingKey](codingkey.md): A type that can be used as a key for encoding and decoding.
- [CodingKeyRepresentable](codingkeyrepresentable.md): A type that can be converted to and from a coding key.
- [CodingUserInfoKey](codinguserinfokey.md): A user-defined key for providing context during encoding and decoding.
