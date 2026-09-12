> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/collaboration/cbidentity](https://developer.apple.com/documentation/collaboration/cbidentity)

# CBIdentity (Swift)

**Framework:** Collaboration  
**Kind:** Class  
**Availability:** macOS 10.5+

A `CBIdentity` object is used for accessing the attributes of an identity stored in an identity authority. You can use an identity object for finding identities, and storing them in an access control list (ACL). If you need to edit these attributes, take advantage of the `CSIdentity` class in Core Services.

## Declaration

```swift
class CBIdentity
```

<a id="overview"></a>

## Overview

You can obtain a `CBIdentity` object from one of the following class factory methods: [init(name:authority:)](cbidentity/init%28name_authority_%29.md), [init(uuidString:authority:)](cbidentity/init%28uuidstring_authority_%29-13vns.md), [init(persistentReference:)](cbidentity/init%28persistentreference_%29.md), or [identityWithCSIdentity:](cbidentity/identitywithcsidentity_.md).

A `CBIdentity` object has methods to support for interoperability with the Core Services Identity API. Send [CSIdentity](cbidentity/csidentity.md) to your `CBIdentity` object to return an opaque object for use in the Core Services Identity API. Similarly, call [identityWithCSIdentity:](cbidentity/identitywithcsidentity_.md) to use an Core Services Identity opaque object in the Collaboration framework.

There are two subclasses of `CBIdentity`: `CBGroupIdentity` and `CBUserIdentity`. If you are working specifically with a group identity, use `CBGroupIdentity`. Similarly, if you are working with a user identity, use `CBUserIdentity`.

## Topics

### Finding Identities

- [init(name:authority:)](cbidentity/init%28name_authority_%29.md): Returns the identity object with the given name from the specified identity authority.
- [init(persistentReference:)](cbidentity/init%28persistentreference_%29.md): Returns the identity object matching the persistent reference data.
- [init(uuidString:authority:)](cbidentity/init%28uuidstring_authority_%29-13vns.md): Deprecated. Returns the identity object with the given UUID from the specified identity authority.

### Getting Identity Attributes

- [aliases](cbidentity/aliases.md): Returns an array of aliases (alternate names) for the identity.
- [authority](cbidentity/authority.md): Returns the identity authority where the identity is stored.
- [emailAddress](cbidentity/emailaddress.md): Returns the email address of an identity.
- [fullName](cbidentity/fullname.md): Returns the full name of the identity.
- [image](cbidentity/image.md): Returns the image associated with an identity.
- [isHidden](cbidentity/ishidden.md): Returns a Boolean value indicating the state of the identity’s hidden property.
- [isMember(ofGroup:)](cbidentity/ismember%28ofgroup_%29.md): Returns a Boolean value indicating whether the identity is a member of the specified group.
- [posixName](cbidentity/posixname.md): Returns the POSIX name of the identity.
- [uuidString](cbidentity/uuidstring.md): Deprecated. Returns the UUID of the identity as a string.

### Storing Identities

- [persistentReference](cbidentity/persistentreference.md): Returns a persistent reference to store a reference to an identity.

### Initializers

- [init(UUIDString:authority:)](cbidentity/init%28uuidstring_authority_%29-7xuzv.md): Deprecated.
- [init(coder:)](cbidentity/init%28coder_%29.md)
- [init(uniqueIdentifier:authority:)](cbidentity/init%28uniqueidentifier_authority_%29.md)

### Instance Properties

- [uniqueIdentifier](cbidentity/uniqueidentifier.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [CBGroupIdentity](cbgroupidentity.md)
- [CBUserIdentity](cbuseridentity.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

# CBIdentity (Objective-C)

**Framework:** Collaboration  
**Kind:** Class  
**Availability:** macOS 10.5+

A `CBIdentity` object is used for accessing the attributes of an identity stored in an identity authority. You can use an identity object for finding identities, and storing them in an access control list (ACL). If you need to edit these attributes, take advantage of the `CSIdentity` class in Core Services.

## Declaration

```objectivec
@interface CBIdentity : NSObject
```

<a id="overview"></a>

## Overview

You can obtain a `CBIdentity` object from one of the following class factory methods: [identityWithName:authority:](cbidentity/init%28name_authority_%29.md), [identityWithUUIDString:authority:](cbidentity/init%28uuidstring_authority_%29-13vns.md), [identityWithPersistentReference:](cbidentity/init%28persistentreference_%29.md), or [identityWithCSIdentity:](cbidentity/identitywithcsidentity_.md).

A `CBIdentity` object has methods to support for interoperability with the Core Services Identity API. Send [CSIdentity](cbidentity/csidentity.md) to your `CBIdentity` object to return an opaque object for use in the Core Services Identity API. Similarly, call [identityWithCSIdentity:](cbidentity/identitywithcsidentity_.md) to use an Core Services Identity opaque object in the Collaboration framework.

There are two subclasses of `CBIdentity`: `CBGroupIdentity` and `CBUserIdentity`. If you are working specifically with a group identity, use `CBGroupIdentity`. Similarly, if you are working with a user identity, use `CBUserIdentity`.

## Topics

### Finding Identities

- [identityWithCSIdentity:](cbidentity/identitywithcsidentity_.md): Returns an identity object created from the specified Core Services Identity opaque object.
- [identityWithName:authority:](cbidentity/init%28name_authority_%29.md): Returns the identity object with the given name from the specified identity authority.
- [identityWithPersistentReference:](cbidentity/init%28persistentreference_%29.md): Returns the identity object matching the persistent reference data.
- [identityWithUUIDString:authority:](cbidentity/init%28uuidstring_authority_%29-13vns.md): Deprecated. Returns the identity object with the given UUID from the specified identity authority.

### Getting Identity Attributes

- [aliases](cbidentity/aliases.md): Returns an array of aliases (alternate names) for the identity.
- [authority](cbidentity/authority.md): Returns the identity authority where the identity is stored.
- [emailAddress](cbidentity/emailaddress.md): Returns the email address of an identity.
- [fullName](cbidentity/fullname.md): Returns the full name of the identity.
- [image](cbidentity/image.md): Returns the image associated with an identity.
- [hidden](cbidentity/ishidden.md): Returns a Boolean value indicating the state of the identity’s hidden property.
- [isMemberOfGroup:](cbidentity/ismember%28ofgroup_%29.md): Returns a Boolean value indicating whether the identity is a member of the specified group.
- [posixName](cbidentity/posixname.md): Returns the POSIX name of the identity.
- [UUIDString](cbidentity/uuidstring.md): Deprecated. Returns the UUID of the identity as a string.

### Storing Identities

- [CSIdentity](cbidentity/csidentity.md): Returns an opaque object for use with the Core Services Identity API.
- [persistentReference](cbidentity/persistentreference.md): Returns a persistent reference to store a reference to an identity.

### Instance Properties

- [uniqueIdentifier](cbidentity/uniqueidentifier.md)

### Type Methods

- [identityWithUniqueIdentifier:authority:](cbidentity/init%28uniqueidentifier_authority_%29.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [CBGroupIdentity](cbgroupidentity.md)
- [CBUserIdentity](cbuseridentity.md)

### Conforms To

- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
