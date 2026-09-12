> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/collaboration/cbuseridentity](https://developer.apple.com/documentation/collaboration/cbuseridentity)

# CBUserIdentity (Swift)

**Framework:** Collaboration  
**Kind:** Class  
**Availability:** macOS 10.5+

An object of the `CBUserIdentity` class represents a user identity and is used for accessing the attributes of a user identity from an identity authority. The principal attributes of `CBUserIdentity` are a POSIX user identifier (UID), password, and certificate.

## Declaration

```swift
class CBUserIdentity
```

## Topics

### Password Authentication

- [authenticate(withPassword:)](cbuseridentity/authenticate%28withpassword_%29.md): Returns a Boolean value indicating whether the given password is correct for the identity.
- [certificate](cbuseridentity/certificate.md): Returns the public authentication certificate associated with a user identity.
- [isEnabled](cbuseridentity/isenabled.md): Returns a Boolean value indicating whether the identity is allowed to authenticate.

### Using UIDs

- [posixUID](cbuseridentity/posixuid.md): Returns the POSIX UID of the identity.
- [init(posixUID:authority:)](cbuseridentity/init%28posixuid_authority_%29.md): Returns the user identity with the given POSIX UID in the specified identity authority.

## Relationships

### Inherits From

- [CBIdentity](cbidentity.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

# CBUserIdentity (Objective-C)

**Framework:** Collaboration  
**Kind:** Class  
**Availability:** macOS 10.5+

An object of the `CBUserIdentity` class represents a user identity and is used for accessing the attributes of a user identity from an identity authority. The principal attributes of `CBUserIdentity` are a POSIX user identifier (UID), password, and certificate.

## Declaration

```objectivec
@interface CBUserIdentity : CBIdentity
```

## Topics

### Password Authentication

- [authenticateWithPassword:](cbuseridentity/authenticate%28withpassword_%29.md): Returns a Boolean value indicating whether the given password is correct for the identity.
- [certificate](cbuseridentity/certificate.md): Returns the public authentication certificate associated with a user identity.
- [enabled](cbuseridentity/isenabled.md): Returns a Boolean value indicating whether the identity is allowed to authenticate.

### Using UIDs

- [posixUID](cbuseridentity/posixuid.md): Returns the POSIX UID of the identity.
- [userIdentityWithPosixUID:authority:](cbuseridentity/init%28posixuid_authority_%29.md): Returns the user identity with the given POSIX UID in the specified identity authority.

## Relationships

### Inherits From

- [CBIdentity](cbidentity.md)

### Conforms To

- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
