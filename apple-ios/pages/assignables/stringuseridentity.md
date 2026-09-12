> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/assignables/stringuseridentity](https://developer.apple.com/documentation/assignables/stringuseridentity)

# StringUserIdentity

**Framework:** Assignables  
**Kind:** Structure  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · visionOS

A user identity defined by a string.

## Declaration

```swift
struct StringUserIdentity
```

## Topics

### Creating a user identity

- [init(value:)](stringuseridentity/init%28value_%29.md): Initializes a `StringUserIdentity` with the given string value.

### Inspecting an identity

- [stringRepresentation](stringuseridentity/stringrepresentation.md): String representation of this user identity for display or debugging purposes.
- [typeID](stringuseridentity/typeid-swift.property.md): A unique type identifier for this user identity.
- [typeID](stringuseridentity/typeid-swift.type.property.md): A unique type identifier for this user identity.
- [value](stringuseridentity/value.md): The value of the string to contain in this user identity.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [UserIdentity](useridentity.md)

## See Also

### Identity

- [UserIdentity](useridentity.md): Types conforming to this protocol can act as user identities for editors of a document.
- [AnonymousUserIdentity](anonymoususeridentity.md): A user identity for unknown editors.
- [AnyUserIdentity](anyuseridentity.md): A user identity that performs type erasure by wrapping another user identity.
- [UserIdentityTypeRegistry](useridentitytyperegistry.md): A registry for user identity types. Assignable documents and document elements store user identity data as `Data` objects. In order for that data to be deserialized, the type to deserialize it as needs to be known to [UserIdentityTypeRegistry](useridentitytyperegistry.md). Without registration of the user identity, custom types won’t be deserializable.
- [UserIdentityFactory](useridentityfactory.md): A type that contains helpers for creating user identity objects.
