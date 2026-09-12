> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/wifiinfrastructure/wimacaddress/hash](https://developer.apple.com/documentation/wifiinfrastructure/wimacaddress/hash)

# WIMACAddress.Hash

**Framework:** Wi-Fi Infrastructure  
**Kind:** Structure  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

The hash of a MAC Address, which you may use to identify a device the accessory discovers over the air.

## Declaration

```swift
struct Hash
```

## Topics

### Initializers

- [init(address:method:)](hash/init%28address_method_%29.md): Creates a new `Hash` from the given MAC Address, using a randomly-generated salt.

### Instance Properties

- [description](hash/description.md): A string description of the MAC Address Hash, for debugging purposes.
- [hash](hash/hash.md): The hashed value of a MAC Address
- [method](hash/method-swift.property.md): The method used to generate the hash.
- [salt](hash/salt.md): The salt used to generate the hash.

### Instance Methods

- [matches(address:)](hash/matches%28address_%29.md): `true` if the provided MAC address matches this hash, `false` otherwise.

### Enumerations

- [WIMACAddress.Hash.Method](hash/method-swift.enum.md): The method used to hash the MAC Address

## Relationships

### Conforms To

- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
