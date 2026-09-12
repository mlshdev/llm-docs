> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmuser](https://developer.apple.com/documentation/homekit/hmuser)

# HMUser (Swift)

**Framework:** HomeKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

A person in the home who may have access to control accessories and services in the home.

## Declaration

```swift
class HMUser
```

## Topics

### Getting Information About the User

- [name](hmuser/name.md): The name of the user.
- [uniqueIdentifier](hmuser/uniqueidentifier.md): A unique identifier for the user.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

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

### Managing users

- [manageUsers(completionHandler:)](hmhome/manageusers%28completionhandler_%29.md): Presents a view controller to manage users of the home.
- [currentUser](hmhome/currentuser.md): The current HomeKit user.

# HMUser (Objective-C)

**Framework:** HomeKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

A person in the home who may have access to control accessories and services in the home.

## Declaration

```objectivec
@interface HMUser : NSObject
```

## Topics

### Getting Information About the User

- [name](hmuser/name.md): The name of the user.
- [uniqueIdentifier](hmuser/uniqueidentifier.md): A unique identifier for the user.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Managing users

- [manageUsersWithCompletionHandler:](hmhome/manageusers%28completionhandler_%29.md): Presents a view controller to manage users of the home.
- [currentUser](hmhome/currentuser.md): The current HomeKit user.
