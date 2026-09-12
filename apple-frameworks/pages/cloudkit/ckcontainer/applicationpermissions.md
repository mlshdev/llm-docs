> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckcontainer/applicationpermissions](https://developer.apple.com/documentation/cloudkit/ckcontainer/applicationpermissions)

# CKContainer.ApplicationPermissions (Swift)

**Framework:** CloudKit  
**Kind:** Structure  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

Constants that represent the permissions that a user grants.

## Declaration

```swift
struct ApplicationPermissions
```

## Topics

### Creating Permissions

- [init(rawValue:)](applicationpermissions/init%28rawvalue_%29.md): Creates a premission with the specified raw value.

### Accessing Permissions

- [userDiscoverability](applicationpermissions/userdiscoverability.md): Deprecated. The user is discoverable using their email address.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Requesting and Determining App Permissions

- [requestApplicationPermission(\_:completionHandler:)](requestapplicationpermission%28__completionhandler_%29.md): Deprecated. Prompts the user to authorize the specified permission.
- [status(forApplicationPermission:completionHandler:)](status%28forapplicationpermission_completionhandler_%29.md): Deprecated. Determines the authorization status of the specified permission.
- [CKContainer.Application](application.md): A collection of types for app permissions.
- [CKContainer.ApplicationPermissionBlock](applicationpermissionblock.md): Deprecated. A closure that processes the outcome of a permissions request.
- [CKContainer.ApplicationPermissionStatus](applicationpermissionstatus.md): Deprecated. Constants that represent the status of a permission.

# CKApplicationPermissions (Objective-C)

**Framework:** CloudKit  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

Constants that represent the permissions that a user grants.

## Declaration

```objectivec
enum CKApplicationPermissions : NSUInteger;
```

## Topics

### Accessing Permissions

- [CKApplicationPermissionUserDiscoverability](applicationpermissions/userdiscoverability.md): Deprecated. The user is discoverable using their email address.

## See Also

### Requesting and Determining App Permissions

- [requestApplicationPermission:completionHandler:](requestapplicationpermission%28__completionhandler_%29.md): Deprecated. Prompts the user to authorize the specified permission.
- [statusForApplicationPermission:completionHandler:](status%28forapplicationpermission_completionhandler_%29.md): Deprecated. Determines the authorization status of the specified permission.
- [CKApplicationPermissionBlock](applicationpermissionblock.md): Deprecated. A closure that processes the outcome of a permissions request.
- [CKApplicationPermissionStatus](applicationpermissionstatus.md): Deprecated. Constants that represent the status of a permission.
