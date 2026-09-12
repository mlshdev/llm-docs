> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/assignables/anyuseridentity](https://developer.apple.com/documentation/assignables/anyuseridentity)

# AnyUserIdentity

**Framework:** Assignables  
**Kind:** Structure  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · visionOS

A user identity that performs type erasure by wrapping another user identity.

## Declaration

```swift
struct AnyUserIdentity
```

## Topics

### Creating a user identity

- [init(\_:)](anyuseridentity/init%28__%29.md): Initializes this type eraser with a user identity to wrap.
- [init(from:)](anyuseridentity/init%28from_%29.md): Creates a new instance by decoding from the given decoder.

### Setting the scope

- [scope(\_:)](anyuseridentity/scope%28__%29-1wfwz.md): Sets the user identity for document-related operations that occur within the closure passed in.
- [scope(\_:)](anyuseridentity/scope%28__%29-76dnq.md): Sets the user identity for document-related operations that occur within the async closure passed in.

### Inspecting an identity

- [stringRepresentation](anyuseridentity/stringrepresentation.md): String representation of this user identity for display or debugging purposes.
- [typeID](anyuseridentity/typeid.md): A unique type identifier for this user identity.
- [AnyUserIdentity.Error](anyuseridentity/error.md): Error type for this user identity.

### Instance Methods

- [encode(to:)](anyuseridentity/encode%28to_%29.md): Encodes this value into the given encoder.
- [hash(into:)](anyuseridentity/hash%28into_%29.md): Hashes the essential components of this value by feeding them into the given hasher.

### Comparing identities

- [==(\_:\_:)](anyuseridentity/==%28____%29.md): Returns a Boolean value indicating whether two values are equal.

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
- [StringUserIdentity](stringuseridentity.md): A user identity defined by a string.
- [UserIdentityTypeRegistry](useridentitytyperegistry.md): A registry for user identity types. Assignable documents and document elements store user identity data as `Data` objects. In order for that data to be deserialized, the type to deserialize it as needs to be known to [UserIdentityTypeRegistry](useridentitytyperegistry.md). Without registration of the user identity, custom types won’t be deserializable.
- [UserIdentityFactory](useridentityfactory.md): A type that contains helpers for creating user identity objects.
