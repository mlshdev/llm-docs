> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextensioncontext/permissionstatus(for:in:)-96xaf](https://developer.apple.com/documentation/webkit/wkwebextensioncontext/permissionstatus(for:in:)-96xaf)

# permissionStatus(for:in:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Checks the specified URL against the currently denied, granted, and requested permission match patterns.

## Declaration

```swift
func permissionStatus(for url: URL, in tab: (any WKWebExtensionTab)?) -> WKWebExtensionContext.PermissionStatus
```

## Parameters

- `url`: The URL for which to return the status.
- `tab`: The tab in which to return the permission status, or `nil` if the tab is not known or the global status is desired.

<a id="discussion"></a>

## Discussion

URLs and match patterns can be granted on a per-tab basis. When the tab is known, access checks should always use this method.

## See Also

### Related Documentation

- [permissionStatus(for:)](permissionstatus%28for_%29-7ojrb.md): Checks the specified URL against the currently denied, granted, and requested permission match patterns.
- [hasAccess(to:in:)](hasaccess%28to_in_%29.md): Checks the specified URL against the currently granted permission match patterns in a specific tab.

# permissionStatusForURL:inTab: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Checks the specified URL against the currently denied, granted, and requested permission match patterns.

## Declaration

```objectivec
- (WKWebExtensionContextPermissionStatus) permissionStatusForURL:(NSURL *) url inTab:(id<WKWebExtensionTab>) tab;
```

## Parameters

- `url`: The URL for which to return the status.
- `tab`: The tab in which to return the permission status, or `nil` if the tab is not known or the global status is desired.

<a id="discussion"></a>

## Discussion

URLs and match patterns can be granted on a per-tab basis. When the tab is known, access checks should always use this method.

## See Also

### Related Documentation

- [permissionStatusForURL:](permissionstatus%28for_%29-7ojrb.md): Checks the specified URL against the currently denied, granted, and requested permission match patterns.
- [hasAccessToURL:inTab:](hasaccess%28to_in_%29.md): Checks the specified URL against the currently granted permission match patterns in a specific tab.
