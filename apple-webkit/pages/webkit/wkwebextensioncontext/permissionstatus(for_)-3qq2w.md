> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextensioncontext/permissionstatus(for:)-3qq2w](https://developer.apple.com/documentation/webkit/wkwebextensioncontext/permissionstatus(for:)-3qq2w)

# permissionStatus(for:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Checks the specified permission against the currently denied, granted, and requested permissions.

## Declaration

```swift
func permissionStatus(for permission: WKWebExtension.Permission) -> WKWebExtensionContext.PermissionStatus
```

## Parameters

- `permission`: The permission for which to return the status.

<a id="discussion"></a>

## Discussion

Permissions can be granted on a per-tab basis. When the tab is known, access checks should always use the method that checks in a tab.

## See Also

### Related Documentation

- [permissionStatus(for:in:)](permissionstatus%28for_in_%29-4h82n.md): Checks the specified permission against the currently denied, granted, and requested permissions.
- [hasPermission(\_:)](haspermission%28__%29.md): Checks the specified permission against the currently granted permissions.

# permissionStatusForPermission: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Checks the specified permission against the currently denied, granted, and requested permissions.

## Declaration

```objectivec
- (WKWebExtensionContextPermissionStatus) permissionStatusForPermission:(WKWebExtensionPermission) permission;
```

## Parameters

- `permission`: The permission for which to return the status.

<a id="discussion"></a>

## Discussion

Permissions can be granted on a per-tab basis. When the tab is known, access checks should always use the method that checks in a tab.

## See Also

### Related Documentation

- [permissionStatusForPermission:inTab:](permissionstatus%28for_in_%29-4h82n.md): Checks the specified permission against the currently denied, granted, and requested permissions.
- [hasPermission:](haspermission%28__%29.md): Checks the specified permission against the currently granted permissions.
