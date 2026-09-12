> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextensioncontext/haspermission(_:in:)](https://developer.apple.com/documentation/webkit/wkwebextensioncontext/haspermission(_:in:))

# hasPermission(\_:in:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Checks the specified permission against the currently granted permissions in a specific tab.

## Declaration

```swift
func hasPermission(_ permission: WKWebExtension.Permission, in tab: (any WKWebExtensionTab)?) -> Bool
```

## Parameters

- `permission`: The permission for which to return the status.
- `tab`: The tab in which to return the permission status, or `nil` if the tab is not known or the global status is desired.

<a id="discussion"></a>

## Discussion

Permissions can be granted on a per-tab basis. When the tab is known, permission checks should always use this method.

## See Also

### Related Documentation

- [currentPermissions](currentpermissions.md): The currently granted permissions that have not expired.
- [hasPermission(\_:)](haspermission%28__%29.md): Checks the specified permission against the currently granted permissions.
- [permissionStatus(for:)](permissionstatus%28for_%29-3qq2w.md): Checks the specified permission against the currently denied, granted, and requested permissions.
- [permissionStatus(for:in:)](permissionstatus%28for_in_%29-4h82n.md): Checks the specified permission against the currently denied, granted, and requested permissions.

# hasPermission:inTab: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Checks the specified permission against the currently granted permissions in a specific tab.

## Declaration

```objectivec
- (BOOL) hasPermission:(WKWebExtensionPermission) permission inTab:(id<WKWebExtensionTab>) tab;
```

## Parameters

- `permission`: The permission for which to return the status.
- `tab`: The tab in which to return the permission status, or `nil` if the tab is not known or the global status is desired.

<a id="discussion"></a>

## Discussion

Permissions can be granted on a per-tab basis. When the tab is known, permission checks should always use this method.

## See Also

### Related Documentation

- [currentPermissions](currentpermissions.md): The currently granted permissions that have not expired.
- [hasPermission:](haspermission%28__%29.md): Checks the specified permission against the currently granted permissions.
- [permissionStatusForPermission:](permissionstatus%28for_%29-3qq2w.md): Checks the specified permission against the currently denied, granted, and requested permissions.
- [permissionStatusForPermission:inTab:](permissionstatus%28for_in_%29-4h82n.md): Checks the specified permission against the currently denied, granted, and requested permissions.
