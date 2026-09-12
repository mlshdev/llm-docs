> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmhome/currentuser](https://developer.apple.com/documentation/homekit/hmhome/currentuser)

# currentUser (Swift)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 9.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The current HomeKit user.

## Declaration

```swift
var currentUser: HMUser { get }
```

## See Also

### Managing users

- [manageUsers(completionHandler:)](manageusers%28completionhandler_%29.md): Presents a view controller to manage users of the home.
- [HMUser](../hmuser.md): A person in the home who may have access to control accessories and services in the home.

# currentUser (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 14.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The current HomeKit user.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) HMUser * currentUser;
```

## See Also

### Managing users

- [manageUsersWithCompletionHandler:](manageusers%28completionhandler_%29.md): Presents a view controller to manage users of the home.
- [HMUser](../hmuser.md): A person in the home who may have access to control accessories and services in the home.
