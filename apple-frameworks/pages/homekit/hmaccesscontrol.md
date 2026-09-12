> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmaccesscontrol](https://developer.apple.com/documentation/homekit/hmaccesscontrol)

# HMAccessControl (Swift)

**Framework:** HomeKit  
**Kind:** Class  
**Availability:** iOS 11.2+ · iPadOS 11.2+ · Mac Catalyst 11.2+ · tvOS 11.2+ · visionOS 1.0+ · watchOS 4.2+

An abstract superclass for accessing user privileges.

## Declaration

```swift
class HMAccessControl
```

<a id="overview"></a>

## Overview

Use a concrete subclass, like [HMHomeAccessControl](hmhomeaccesscontrol.md), instead.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [HMHomeAccessControl](hmhomeaccesscontrol.md)

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
- [HMHomeAccessControl](hmhomeaccesscontrol.md): The access privileges of a user associated with a home.
- [HMUserFailedAccessoriesKey](hmuserfailedaccessorieskey.md): Deprecated. The key for retrieving details of what accessories failed to add or remove a user.

# HMAccessControl (Objective-C)

**Framework:** HomeKit  
**Kind:** Class  
**Availability:** iOS 11.2+ · iPadOS 11.2+ · Mac Catalyst 14.0+ · tvOS 11.2+ · visionOS 1.0+ · watchOS 4.2+

An abstract superclass for accessing user privileges.

## Declaration

```objectivec
@interface HMAccessControl : NSObject
```

<a id="overview"></a>

## Overview

Use a concrete subclass, like [HMHomeAccessControl](hmhomeaccesscontrol.md), instead.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [HMHomeAccessControl](hmhomeaccesscontrol.md)

## See Also

### Controlling user access

- [homeAccessControlForUser:](hmhome/homeaccesscontrol%28for_%29.md): Retrieves the access level of a user associated with the home.
- [HMHomeAccessControl](hmhomeaccesscontrol.md): The access privileges of a user associated with a home.
- [HMUserFailedAccessoriesKey](hmuserfailedaccessorieskey.md): Deprecated. The key for retrieving details of what accessories failed to add or remove a user.
