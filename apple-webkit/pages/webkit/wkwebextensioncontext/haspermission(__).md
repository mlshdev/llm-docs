> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextensioncontext/haspermission(_:)](https://developer.apple.com/documentation/webkit/wkwebextensioncontext/haspermission(_:))

# hasPermission(\_:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Checks the specified permission against the currently granted permissions.

## Declaration

```swift
func hasPermission(_ permission: WKWebExtension.Permission) -> Bool
```

## Parameters

- `permission`: The permission for which to return the status.

## See Also

### Related Documentation

- [currentPermissions](currentpermissions.md): The currently granted permissions that have not expired.
- [hasPermission(\_:in:)](haspermission%28__in_%29.md): Checks the specified permission against the currently granted permissions in a specific tab.
- [permissionStatus(for:)](permissionstatus%28for_%29-3qq2w.md): Checks the specified permission against the currently denied, granted, and requested permissions.
- [permissionStatus(for:in:)](permissionstatus%28for_in_%29-4h82n.md): Checks the specified permission against the currently denied, granted, and requested permissions.

# hasPermission: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Checks the specified permission against the currently granted permissions.

## Declaration

```objectivec
- (BOOL) hasPermission:(WKWebExtensionPermission) permission;
```

## Parameters

- `permission`: The permission for which to return the status.

## See Also

### Related Documentation

- [currentPermissions](currentpermissions.md): The currently granted permissions that have not expired.
- [hasPermission:inTab:](haspermission%28__in_%29.md): Checks the specified permission against the currently granted permissions in a specific tab.
- [permissionStatusForPermission:](permissionstatus%28for_%29-3qq2w.md): Checks the specified permission against the currently denied, granted, and requested permissions.
- [permissionStatusForPermission:inTab:](permissionstatus%28for_in_%29-4h82n.md): Checks the specified permission against the currently denied, granted, and requested permissions.
