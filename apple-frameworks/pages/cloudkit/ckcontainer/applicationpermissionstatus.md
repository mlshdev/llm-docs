> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckcontainer/applicationpermissionstatus](https://developer.apple.com/documentation/cloudkit/ckcontainer/applicationpermissionstatus)

# CKContainer.ApplicationPermissionStatus (Swift)

**Framework:** CloudKit  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ (deprecated in 17.0) · iPadOS 8.0+ (deprecated in 17.0) · Mac Catalyst 13.1+ (deprecated in 17.0) · macOS 10.10+ (deprecated in 14.0) · tvOS 9.0+ (deprecated in 17.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 10.0)

Constants that represent the status of a permission.

> No longer supported. Please see Sharing CloudKit Data with Other iCloud Users.

## Declaration

```swift
enum ApplicationPermissionStatus
```

## Topics

### Permission Statuses

- [CKContainer.ApplicationPermissionStatus.initialState](applicationpermissionstatus/initialstate.md): Deprecated. The app is yet to request the permission.
- [CKContainer.ApplicationPermissionStatus.couldNotComplete](applicationpermissionstatus/couldnotcomplete.md): Deprecated. An error that occurs while processing the permission request.
- [CKContainer.ApplicationPermissionStatus.denied](applicationpermissionstatus/denied.md): Deprecated. The user denies the permission.
- [CKContainer.ApplicationPermissionStatus.granted](applicationpermissionstatus/granted.md): Deprecated. The user grants the permission.

### Initializers

- [init(rawValue:)](applicationpermissionstatus/init%28rawvalue_%29.md): Deprecated.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Requesting and Determining App Permissions

- [requestApplicationPermission(\_:completionHandler:)](requestapplicationpermission%28__completionhandler_%29.md): Deprecated. Prompts the user to authorize the specified permission.
- [status(forApplicationPermission:completionHandler:)](status%28forapplicationpermission_completionhandler_%29.md): Deprecated. Determines the authorization status of the specified permission.
- [CKContainer.Application](application.md): A collection of types for app permissions.
- [CKContainer.ApplicationPermissions](applicationpermissions.md): Constants that represent the permissions that a user grants.
- [CKContainer.ApplicationPermissionBlock](applicationpermissionblock.md): Deprecated. A closure that processes the outcome of a permissions request.

# CKApplicationPermissionStatus (Objective-C)

**Framework:** CloudKit  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ (deprecated in 17.0) · iPadOS 8.0+ (deprecated in 17.0) · Mac Catalyst 13.1+ (deprecated in 17.0) · macOS 10.10+ (deprecated in 14.0) · tvOS 9.0+ (deprecated in 17.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 10.0)

Constants that represent the status of a permission.

> No longer supported. Please see Sharing CloudKit Data with Other iCloud Users.

## Declaration

```objectivec
enum CKApplicationPermissionStatus : NSInteger;
```

## Topics

### Permission Statuses

- [CKApplicationPermissionStatusInitialState](applicationpermissionstatus/initialstate.md): Deprecated. The app is yet to request the permission.
- [CKApplicationPermissionStatusCouldNotComplete](applicationpermissionstatus/couldnotcomplete.md): Deprecated. An error that occurs while processing the permission request.
- [CKApplicationPermissionStatusDenied](applicationpermissionstatus/denied.md): Deprecated. The user denies the permission.
- [CKApplicationPermissionStatusGranted](applicationpermissionstatus/granted.md): Deprecated. The user grants the permission.

## See Also

### Requesting and Determining App Permissions

- [requestApplicationPermission:completionHandler:](requestapplicationpermission%28__completionhandler_%29.md): Deprecated. Prompts the user to authorize the specified permission.
- [statusForApplicationPermission:completionHandler:](status%28forapplicationpermission_completionhandler_%29.md): Deprecated. Determines the authorization status of the specified permission.
- [CKApplicationPermissions](applicationpermissions.md): Constants that represent the permissions that a user grants.
- [CKApplicationPermissionBlock](applicationpermissionblock.md): Deprecated. A closure that processes the outcome of a permissions request.
