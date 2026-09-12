> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmhomeaccesscontrol](https://developer.apple.com/documentation/homekit/hmhomeaccesscontrol)

# HMHomeAccessControl (Swift)

**Framework:** HomeKit  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 9.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

The access privileges of a user associated with a home.

## Declaration

```swift
class HMHomeAccessControl
```

## Topics

### Getting the Privileges of a User

- [isAdministrator](hmhomeaccesscontrol/isadministrator.md): Specifies if the user has administrative privileges for the home.

## Relationships

### Inherits From

- [HMAccessControl](hmaccesscontrol.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Controlling user access

- [homeAccessControl(for:)](hmhome/homeaccesscontrol%28for_%29.md): Retrieves the access level of a user associated with the home.
- [HMAccessControl](hmaccesscontrol.md): An abstract superclass for accessing user privileges.
- [HMUserFailedAccessoriesKey](hmuserfailedaccessorieskey.md): Deprecated. The key for retrieving details of what accessories failed to add or remove a user.

# HMHomeAccessControl (Objective-C)

**Framework:** HomeKit  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

The access privileges of a user associated with a home.

## Declaration

```objectivec
@interface HMHomeAccessControl : HMAccessControl
```

## Topics

### Getting the Privileges of a User

- [administrator](hmhomeaccesscontrol/isadministrator.md): Specifies if the user has administrative privileges for the home.

## Relationships

### Inherits From

- [HMAccessControl](hmaccesscontrol.md)

## See Also

### Controlling user access

- [homeAccessControlForUser:](hmhome/homeaccesscontrol%28for_%29.md): Retrieves the access level of a user associated with the home.
- [HMAccessControl](hmaccesscontrol.md): An abstract superclass for accessing user privileges.
- [HMUserFailedAccessoriesKey](hmuserfailedaccessorieskey.md): Deprecated. The key for retrieving details of what accessories failed to add or remove a user.
