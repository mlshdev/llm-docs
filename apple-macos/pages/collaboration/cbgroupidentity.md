> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/collaboration/cbgroupidentity](https://developer.apple.com/documentation/collaboration/cbgroupidentity)

# CBGroupIdentity (Swift)

**Framework:** Collaboration  
**Kind:** Class  
**Availability:** macOS 10.5+

An object of the `CBGroupIdentity` class represents a group identity and is used for viewing the attributes of group identities from an identity authority. The principal attributes of a `CBGroupIdentity` object are a POSIX group identifier (GID) and a list of members.

## Declaration

```swift
class CBGroupIdentity
```

## Topics

### Finding Group Identities

- [init(posixGID:authority:)](cbgroupidentity/init%28posixgid_authority_%29.md): Returns the group identity with the given POSIX GID in the specified identity authority.

### Group Identity Attributes

- [posixGID](cbgroupidentity/posixgid.md): Returns the POSIX GID of the identity.

### Instance Properties

- [memberIdentities](cbgroupidentity/memberidentities.md)

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

# CBGroupIdentity (Objective-C)

**Framework:** Collaboration  
**Kind:** Class  
**Availability:** macOS 10.5+

An object of the `CBGroupIdentity` class represents a group identity and is used for viewing the attributes of group identities from an identity authority. The principal attributes of a `CBGroupIdentity` object are a POSIX group identifier (GID) and a list of members.

## Declaration

```objectivec
@interface CBGroupIdentity : CBIdentity
```

## Topics

### Finding Group Identities

- [groupIdentityWithPosixGID:authority:](cbgroupidentity/init%28posixgid_authority_%29.md): Returns the group identity with the given POSIX GID in the specified identity authority.

### Group Identity Attributes

- [posixGID](cbgroupidentity/posixgid.md): Returns the POSIX GID of the identity.
- [members](cbgroupidentity/members.md): Deprecated. Returns the members of the group.

### Instance Properties

- [memberIdentities](cbgroupidentity/memberidentities.md)

## Relationships

### Inherits From

- [CBIdentity](cbidentity.md)
