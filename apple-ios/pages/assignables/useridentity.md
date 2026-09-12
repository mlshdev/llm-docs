> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/assignables/useridentity](https://developer.apple.com/documentation/assignables/useridentity)

# UserIdentity

**Framework:** Assignables  
**Kind:** Protocol  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · visionOS

Types conforming to this protocol can act as user identities for editors of a document.

## Declaration

```swift
protocol UserIdentity : Decodable, Encodable, Hashable, Sendable
```

## Topics

### Inspecting an identity

- [stringRepresentation](useridentity/stringrepresentation.md): String representation of this user identity for display or debugging purposes.
- [typeID](useridentity/typeid.md): A unique type identifier for this user identity.

### Setting the scope

- [scope(\_:)](useridentity/scope%28__%29-esta.md): Sets the user identity for document-related operations that occur within the closure passed in.
- [scope(\_:)](useridentity/scope%28__%29-j2jq.md): Sets the user identity for document-related operations that occur within the async closure passed in.

### Getting a type eraser

- [eraseToAnyUserIdentity()](useridentity/erasetoanyuseridentity%28%29.md): Wraps this user identity with a type eraser.
- [UserIdentity.As](useridentity/as.md): An alias for [UserIdentityFactory](useridentityfactory.md) for convenience.

## Relationships

### Inherits From

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

### Conforming Types

- [AnonymousUserIdentity](anonymoususeridentity.md)
- [AnyUserIdentity](anyuseridentity.md)
- [StringUserIdentity](stringuseridentity.md)

## See Also

### Identity

- [AnonymousUserIdentity](anonymoususeridentity.md): A user identity for unknown editors.
- [AnyUserIdentity](anyuseridentity.md): A user identity that performs type erasure by wrapping another user identity.
- [StringUserIdentity](stringuseridentity.md): A user identity defined by a string.
- [UserIdentityTypeRegistry](useridentitytyperegistry.md): A registry for user identity types. Assignable documents and document elements store user identity data as `Data` objects. In order for that data to be deserialized, the type to deserialize it as needs to be known to [UserIdentityTypeRegistry](useridentitytyperegistry.md). Without registration of the user identity, custom types won’t be deserializable.
- [UserIdentityFactory](useridentityfactory.md): A type that contains helpers for creating user identity objects.
