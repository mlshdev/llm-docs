> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/secexternalitemtype](https://developer.apple.com/documentation/security/secexternalitemtype)

# SecExternalItemType (Swift)

**Framework:** Security  
**Kind:** Enumeration  
**Availability:** macOS 10.0+

The import item type.

## Declaration

```swift
enum SecExternalItemType
```

## Topics

### Constants

- [SecExternalItemType.itemTypeUnknown](secexternalitemtype/itemtypeunknown.md): Indicates that the caller does not know the type of information being imported or exported.
- [SecExternalItemType.itemTypePrivateKey](secexternalitemtype/itemtypeprivatekey.md): Indicates a private key.
- [SecExternalItemType.itemTypePublicKey](secexternalitemtype/itemtypepublickey.md): Indicates a public key.
- [SecExternalItemType.itemTypeSessionKey](secexternalitemtype/itemtypesessionkey.md): Indicates a session key.
- [SecExternalItemType.itemTypeCertificate](secexternalitemtype/itemtypecertificate.md): Indicates a certificate.
- [SecExternalItemType.itemTypeAggregate](secexternalitemtype/itemtypeaggregate.md): Indicates a set of certificates or certificates and private keys.

### Initializers

- [init(rawValue:)](secexternalitemtype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# SecExternalItemType (Objective-C)

**Framework:** Security  
**Kind:** Enumeration  
**Availability:** macOS 10.0+

The import item type.

## Declaration

```objectivec
enum SecExternalItemType : uint32_t;
```

## Topics

### Constants

- [kSecItemTypeUnknown](secexternalitemtype/itemtypeunknown.md): Indicates that the caller does not know the type of information being imported or exported.
- [kSecItemTypePrivateKey](secexternalitemtype/itemtypeprivatekey.md): Indicates a private key.
- [kSecItemTypePublicKey](secexternalitemtype/itemtypepublickey.md): Indicates a public key.
- [kSecItemTypeSessionKey](secexternalitemtype/itemtypesessionkey.md): Indicates a session key.
- [kSecItemTypeCertificate](secexternalitemtype/itemtypecertificate.md): Indicates a certificate.
- [kSecItemTypeAggregate](secexternalitemtype/itemtypeaggregate.md): Indicates a set of certificates or certificates and private keys.
