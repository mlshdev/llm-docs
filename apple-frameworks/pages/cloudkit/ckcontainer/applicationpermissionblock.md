> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckcontainer/applicationpermissionblock](https://developer.apple.com/documentation/cloudkit/ckcontainer/applicationpermissionblock)

# CKContainer.ApplicationPermissionBlock (Swift)

**Framework:** CloudKit  
**Kind:** Type Alias  
**Availability:** iOS 8.0+ (deprecated in 17.0) · iPadOS 8.0+ (deprecated in 17.0) · Mac Catalyst 13.1+ (deprecated in 17.0) · macOS 10.10+ (deprecated in 14.0) · tvOS 9.0+ (deprecated in 17.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 10.0)

A closure that processes the outcome of a permissions request.

> No longer supported. Please see Sharing CloudKit Data with Other iCloud Users.

## Declaration

```swift
typealias ApplicationPermissionBlock = (CKContainer.ApplicationPermissionStatus, (any Error)?) -> Void
```

<a id="discussion"></a>

## Discussion

When you request or determine the status of a permission, use this closure to process the result. The closure has no return value and takes the following parameters:

- The permission’s status. For a list of possible values, see [CKContainer.ApplicationPermissionStatus](applicationpermissionstatus.md).
- An error if the system can’t fulfill the request, or `nil` if it successfully determines the status.

## See Also

### Requesting and Determining App Permissions

- [requestApplicationPermission(\_:completionHandler:)](requestapplicationpermission%28__completionhandler_%29.md): Deprecated. Prompts the user to authorize the specified permission.
- [status(forApplicationPermission:completionHandler:)](status%28forapplicationpermission_completionhandler_%29.md): Deprecated. Determines the authorization status of the specified permission.
- [CKContainer.Application](application.md): A collection of types for app permissions.
- [CKContainer.ApplicationPermissions](applicationpermissions.md): Constants that represent the permissions that a user grants.
- [CKContainer.ApplicationPermissionStatus](applicationpermissionstatus.md): Deprecated. Constants that represent the status of a permission.

# CKApplicationPermissionBlock (Objective-C)

**Framework:** CloudKit  
**Kind:** Type Alias  
**Availability:** iOS 8.0+ (deprecated in 17.0) · iPadOS 8.0+ (deprecated in 17.0) · Mac Catalyst 13.1+ (deprecated in 17.0) · macOS 10.10+ (deprecated in 14.0) · tvOS 9.0+ (deprecated in 17.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 10.0)

A closure that processes the outcome of a permissions request.

> No longer supported. Please see Sharing CloudKit Data with Other iCloud Users.

## Declaration

```objectivec
typedef void (^)(enum CKApplicationPermissionStatus, NSError *) CKApplicationPermissionBlock;
```

<a id="discussion"></a>

## Discussion

When you request or determine the status of a permission, use this closure to process the result. The closure has no return value and takes the following parameters:

- The permission’s status. For a list of possible values, see [CKApplicationPermissionStatus](applicationpermissionstatus.md).
- An error if the system can’t fulfill the request, or `nil` if it successfully determines the status.

## See Also

### Requesting and Determining App Permissions

- [requestApplicationPermission:completionHandler:](requestapplicationpermission%28__completionhandler_%29.md): Deprecated. Prompts the user to authorize the specified permission.
- [statusForApplicationPermission:completionHandler:](status%28forapplicationpermission_completionhandler_%29.md): Deprecated. Determines the authorization status of the specified permission.
- [CKApplicationPermissions](applicationpermissions.md): Constants that represent the permissions that a user grants.
- [CKApplicationPermissionStatus](applicationpermissionstatus.md): Deprecated. Constants that represent the status of a permission.
