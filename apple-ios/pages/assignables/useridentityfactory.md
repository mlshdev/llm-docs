> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/assignables/useridentityfactory](https://developer.apple.com/documentation/assignables/useridentityfactory)

# UserIdentityFactory

**Framework:** Assignables  
**Kind:** Enumeration  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · visionOS

A type that contains helpers for creating user identity objects.

## Declaration

```swift
enum UserIdentityFactory
```

## Topics

### Getting the anonymous identity

- [anonymous](useridentityfactory/anonymous.md): The anonymous user identity.

### Creating an identity

- [string(\_:)](useridentityfactory/string%28__%29.md): Creates a [StringUserIdentity](stringuseridentity.md) with the given string value.

## See Also

### Identity

- [UserIdentity](useridentity.md): Types conforming to this protocol can act as user identities for editors of a document.
- [AnonymousUserIdentity](anonymoususeridentity.md): A user identity for unknown editors.
- [AnyUserIdentity](anyuseridentity.md): A user identity that performs type erasure by wrapping another user identity.
- [StringUserIdentity](stringuseridentity.md): A user identity defined by a string.
- [UserIdentityTypeRegistry](useridentitytyperegistry.md): A registry for user identity types. Assignable documents and document elements store user identity data as `Data` objects. In order for that data to be deserialized, the type to deserialize it as needs to be known to [UserIdentityTypeRegistry](useridentitytyperegistry.md). Without registration of the user identity, custom types won’t be deserializable.
