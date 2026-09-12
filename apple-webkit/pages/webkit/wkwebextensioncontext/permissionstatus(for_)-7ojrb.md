> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextensioncontext/permissionstatus(for:)-7ojrb](https://developer.apple.com/documentation/webkit/wkwebextensioncontext/permissionstatus(for:)-7ojrb)

# permissionStatus(for:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Checks the specified URL against the currently denied, granted, and requested permission match patterns.

## Declaration

```swift
func permissionStatus(for url: URL) -> WKWebExtensionContext.PermissionStatus
```

## Parameters

- `url`: The URL for which to return the status.

<a id="discussion"></a>

## Discussion

URLs and match patterns can be granted on a per-tab basis. When the tab is known, access checks should always use the method that checks in a tab.

## See Also

### Related Documentation

- [permissionStatus(for:in:)](permissionstatus%28for_in_%29-96xaf.md): Checks the specified URL against the currently denied, granted, and requested permission match patterns.
- [hasAccess(to:)](hasaccess%28to_%29.md): Checks the specified URL against the currently granted permission match patterns.

# permissionStatusForURL: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Checks the specified URL against the currently denied, granted, and requested permission match patterns.

## Declaration

```objectivec
- (WKWebExtensionContextPermissionStatus) permissionStatusForURL:(NSURL *) url;
```

## Parameters

- `url`: The URL for which to return the status.

<a id="discussion"></a>

## Discussion

URLs and match patterns can be granted on a per-tab basis. When the tab is known, access checks should always use the method that checks in a tab.

## See Also

### Related Documentation

- [permissionStatusForURL:inTab:](permissionstatus%28for_in_%29-96xaf.md): Checks the specified URL against the currently denied, granted, and requested permission match patterns.
- [hasAccessToURL:](hasaccess%28to_%29.md): Checks the specified URL against the currently granted permission match patterns.
