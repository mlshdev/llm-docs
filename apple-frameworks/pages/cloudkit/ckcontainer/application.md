> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckcontainer/application](https://developer.apple.com/documentation/cloudkit/ckcontainer/application)

# CKContainer.Application

**Framework:** CloudKit  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS · watchOS 3.0+ · Swift 4.2+

A collection of types for app permissions.

## Declaration

```swift
enum Application
```

## Topics

### Container Application Types

- [CKContainer.Application.Permissions](application/permissions.md): Deprecated. A type that represents the permissions that a user grants.
- [CKContainer.Application.PermissionBlock](application/permissionblock.md): Deprecated. A type that represents a handler that processes the outcome of a permission’s request.
- [CKContainer.Application.PermissionStatus](application/permissionstatus.md): Deprecated. A type that represents the status of a permission.

## See Also

### Requesting and Determining App Permissions

- [requestApplicationPermission(\_:completionHandler:)](requestapplicationpermission%28__completionhandler_%29.md): Deprecated. Prompts the user to authorize the specified permission.
- [status(forApplicationPermission:completionHandler:)](status%28forapplicationpermission_completionhandler_%29.md): Deprecated. Determines the authorization status of the specified permission.
- [CKContainer.ApplicationPermissions](applicationpermissions.md): Constants that represent the permissions that a user grants.
- [CKContainer.ApplicationPermissionBlock](applicationpermissionblock.md): Deprecated. A closure that processes the outcome of a permissions request.
- [CKContainer.ApplicationPermissionStatus](applicationpermissionstatus.md): Deprecated. Constants that represent the status of a permission.
