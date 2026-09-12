> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/codinguserinfokey](https://developer.apple.com/documentation/swift/codinguserinfokey)

# CodingUserInfoKey

**Framework:** Swift  
**Kind:** Structure  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A user-defined key for providing context during encoding and decoding.

## Declaration

```swift
struct CodingUserInfoKey
```

## Topics

### Operators

- [==(\_:\_:)](codinguserinfokey/==%28____%29.md): Returns a Boolean value indicating whether the given keys are equal.

### Initializers

- [init(rawValue:)](codinguserinfokey/init%28rawvalue_%29.md): Creates a new instance with the given raw value.

### Instance Properties

- [hashValue](codinguserinfokey/hashvalue.md): The key’s hash value.
- [rawValue](codinguserinfokey/rawvalue-swift.property.md): The key’s string value.

### Instance Methods

- [hash(into:)](codinguserinfokey/hash%28into_%29.md): Hashes the essential components of this value by feeding them into the given hasher.

### Type Aliases

- [CodingUserInfoKey.RawValue](codinguserinfokey/rawvalue-swift.typealias.md): The raw type that can be used to represent all values of the conforming type.

### Type Properties

- [actorSystemKey](codinguserinfokey/actorsystemkey.md): Key which is required to be set on a `Decoder`’s `userInfo` while attempting to `init(from:)` a `DistributedActor`. The stored value under this key must conform to `DistributedActorSystem`.

### Default Implementations

- [Equatable Implementations](codinguserinfokey/equatable-implementations.md)

## Relationships

### Conforms To

- [Equatable](equatable.md)
- [Hashable](hashable.md)
- [RawRepresentable](rawrepresentable.md)
- [Sendable](sendable.md)
- [SendableMetatype](sendablemetatype.md)

## See Also

### Custom Encoding and Decoding

- [Encoding and Decoding Custom Types](https://developer.apple.com/documentation/foundation/encoding-and-decoding-custom-types): Make your data types encodable and decodable for compatibility with external representations such as JSON.
- [Codable](codable.md): A type that can convert itself into and out of an external representation.
- [Encodable](encodable.md): A type that can encode itself to an external representation.
- [Decodable](decodable.md): A type that can decode itself from an external representation.
- [CodingKey](codingkey.md): A type that can be used as a key for encoding and decoding.
- [CodingKeyRepresentable](codingkeyrepresentable.md): A type that can be converted to and from a coding key.
