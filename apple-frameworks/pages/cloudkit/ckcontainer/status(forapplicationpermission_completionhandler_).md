> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckcontainer/status(forapplicationpermission:completionhandler:)](https://developer.apple.com/documentation/cloudkit/ckcontainer/status(forapplicationpermission:completionhandler:))

# status(forApplicationPermission:completionHandler:) (Swift)

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 17.0) · iPadOS 8.0+ (deprecated in 17.0) · Mac Catalyst 13.1+ (deprecated in 17.0) · macOS 10.0+ (deprecated in 14.0) · tvOS 9.0+ (deprecated in 17.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 10.0)

Determines the authorization status of the specified permission.

> No longer supported. Please see Sharing CloudKit Data with Other iCloud Users.

## Declaration

```swift
func status(forApplicationPermission applicationPermission: CKContainer.ApplicationPermissions, completionHandler: @escaping @Sendable (CKContainer.ApplicationPermissionStatus, (any Error)?) -> Void)
```

```swift
func applicationPermissionStatus(for applicationPermission: CKContainer.ApplicationPermissions) async throws -> CKContainer.ApplicationPermissionStatus
```

## Parameters

- `applicationPermission`: The permission to check. For a list of possible values, see [CKContainer.ApplicationPermissions](applicationpermissions.md).
- `completionHandler`: The handler to execute with the outcome.

<a id="discussion"></a>

## Discussion

Use this method to determine the extra capabilities that the user grants to your app. If your app doesn’t have a specific permission, calling this method yields [CKContainer.ApplicationPermissionStatus.initialState](applicationpermissionstatus/initialstate.md). In response, call the [requestApplicationPermission(\_:completionHandler:)](requestapplicationpermission%28__completionhandler_%29.md) method to prompt the user to provide their permission.

## See Also

### Requesting and Determining App Permissions

- [requestApplicationPermission(\_:completionHandler:)](requestapplicationpermission%28__completionhandler_%29.md): Deprecated. Prompts the user to authorize the specified permission.
- [CKContainer.Application](application.md): A collection of types for app permissions.
- [CKContainer.ApplicationPermissions](applicationpermissions.md): Constants that represent the permissions that a user grants.
- [CKContainer.ApplicationPermissionBlock](applicationpermissionblock.md): Deprecated. A closure that processes the outcome of a permissions request.
- [CKContainer.ApplicationPermissionStatus](applicationpermissionstatus.md): Deprecated. Constants that represent the status of a permission.

# statusForApplicationPermission:completionHandler: (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 17.0) · iPadOS 8.0+ (deprecated in 17.0) · Mac Catalyst 13.1+ (deprecated in 17.0) · macOS 10.0+ (deprecated in 14.0) · tvOS 9.0+ (deprecated in 17.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 10.0)

Determines the authorization status of the specified permission.

> No longer supported. Please see Sharing CloudKit Data with Other iCloud Users.

## Declaration

```objectivec
- (void) statusForApplicationPermission:(CKApplicationPermissions) applicationPermission completionHandler:(CKApplicationPermissionBlock) completionHandler;
```

## Parameters

- `applicationPermission`: The permission to check. For a list of possible values, see [CKApplicationPermissions](applicationpermissions.md).
- `completionHandler`: The handler to execute with the outcome.

<a id="discussion"></a>

## Discussion

Use this method to determine the extra capabilities that the user grants to your app. If your app doesn’t have a specific permission, calling this method yields [CKApplicationPermissionStatusInitialState](applicationpermissionstatus/initialstate.md). In response, call the [requestApplicationPermission:completionHandler:](requestapplicationpermission%28__completionhandler_%29.md) method to prompt the user to provide their permission.

## See Also

### Requesting and Determining App Permissions

- [requestApplicationPermission:completionHandler:](requestapplicationpermission%28__completionhandler_%29.md): Deprecated. Prompts the user to authorize the specified permission.
- [CKApplicationPermissions](applicationpermissions.md): Constants that represent the permissions that a user grants.
- [CKApplicationPermissionBlock](applicationpermissionblock.md): Deprecated. A closure that processes the outcome of a permissions request.
- [CKApplicationPermissionStatus](applicationpermissionstatus.md): Deprecated. Constants that represent the status of a permission.
