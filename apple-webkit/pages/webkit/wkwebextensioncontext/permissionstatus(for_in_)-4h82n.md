> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextensioncontext/permissionstatus(for:in:)-4h82n](https://developer.apple.com/documentation/webkit/wkwebextensioncontext/permissionstatus(for:in:)-4h82n)

# permissionStatus(for:in:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Checks the specified permission against the currently denied, granted, and requested permissions.

## Declaration

```swift
func permissionStatus(for permission: WKWebExtension.Permission, in tab: (any WKWebExtensionTab)?) -> WKWebExtensionContext.PermissionStatus
```

## Parameters

- `permission`: The permission for which to return the status.
- `tab`: The tab in which to return the permission status, or `nil` if the tab is not known or the global status is desired.

<a id="discussion"></a>

## Discussion

Permissions can be granted on a per-tab basis. When the tab is known, access checks should always specify the tab.

## See Also

### Related Documentation

- [permissionStatus(for:)](permissionstatus%28for_%29-3qq2w.md): Checks the specified permission against the currently denied, granted, and requested permissions.
- [hasPermission(\_:in:)](haspermission%28__in_%29.md): Checks the specified permission against the currently granted permissions in a specific tab.

# permissionStatusForPermission:inTab: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Checks the specified permission against the currently denied, granted, and requested permissions.

## Declaration

```objectivec
- (WKWebExtensionContextPermissionStatus) permissionStatusForPermission:(WKWebExtensionPermission) permission inTab:(id<WKWebExtensionTab>) tab;
```

## Parameters

- `permission`: The permission for which to return the status.
- `tab`: The tab in which to return the permission status, or `nil` if the tab is not known or the global status is desired.

<a id="discussion"></a>

## Discussion

Permissions can be granted on a per-tab basis. When the tab is known, access checks should always specify the tab.

## See Also

### Related Documentation

- [permissionStatusForPermission:](permissionstatus%28for_%29-3qq2w.md): Checks the specified permission against the currently denied, granted, and requested permissions.
- [hasPermission:inTab:](haspermission%28__in_%29.md): Checks the specified permission against the currently granted permissions in a specific tab.
