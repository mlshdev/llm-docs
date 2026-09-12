> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/collaboration/cbidentityauthority](https://developer.apple.com/documentation/collaboration/cbidentityauthority)

# CBIdentityAuthority (Swift)

**Framework:** Collaboration  
**Kind:** Class  
**Availability:** macOS 10.5+

An identity authority is a database that stores information about identities. The `CBIdentityAuthority` class defines one or more identity authorities. You can search this database for identities in conjunction with the `CBIdentity` class factory methods.

## Declaration

```swift
class CBIdentityAuthority
```

## Topics

### Accessing Identity Authorities

- [localizedName](cbidentityauthority/localizedname.md): Returns the localized name of the identity authority.
- [local()](cbidentityauthority/local%28%29.md): Returns the identity authority on the local system.
- [managed()](cbidentityauthority/managed%28%29.md): Returns the identity authority that contains all the identities in bound network directory servers.
- [default()](cbidentityauthority/default%28%29.md): Returns an identity authority that contains the identities in both the local and the network-bound authorities.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

# CBIdentityAuthority (Objective-C)

**Framework:** Collaboration  
**Kind:** Class  
**Availability:** macOS 10.5+

An identity authority is a database that stores information about identities. The `CBIdentityAuthority` class defines one or more identity authorities. You can search this database for identities in conjunction with the `CBIdentity` class factory methods.

## Declaration

```objectivec
@interface CBIdentityAuthority : NSObject
```

## Topics

### Interacting with the Core Services Identity API

- [CSIdentityAuthority](cbidentityauthority/csidentityauthority.md): Returns an identity authority for use with the Core Services Identity API.
- [identityAuthorityWithCSIdentityAuthority:](cbidentityauthority/identityauthoritywithcsidentityauthority_.md): Returns an identity authority specified by a given Core Services Identity authority object.

### Accessing Identity Authorities

- [localizedName](cbidentityauthority/localizedname.md): Returns the localized name of the identity authority.
- [localIdentityAuthority](cbidentityauthority/local%28%29.md): Returns the identity authority on the local system.
- [managedIdentityAuthority](cbidentityauthority/managed%28%29.md): Returns the identity authority that contains all the identities in bound network directory servers.
- [defaultIdentityAuthority](cbidentityauthority/default%28%29.md): Returns an identity authority that contains the identities in both the local and the network-bound authorities.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)
