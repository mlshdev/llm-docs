> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextensioncontext/permissionstatus(for:)-7mu8](https://developer.apple.com/documentation/webkit/wkwebextensioncontext/permissionstatus(for:)-7mu8)

# permissionStatus(for:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Checks the specified match pattern against the currently denied, granted, and requested permission match patterns.

## Declaration

```swift
func permissionStatus(for pattern: WKWebExtension.MatchPattern) -> WKWebExtensionContext.PermissionStatus
```

## Parameters

- `pattern`: The pattern for which to return the status.

<a id="discussion"></a>

## Discussion

Match patterns can be granted on a per-tab basis. When the tab is known, access checks should always use the method that checks in a tab.

## See Also

### Related Documentation

- [permissionStatus(for:in:)](permissionstatus%28for_in_%29-nqhm.md): Checks the specified match pattern against the currently denied, granted, and requested permission match patterns.
- [hasAccess(to:in:)](hasaccess%28to_in_%29.md): Checks the specified URL against the currently granted permission match patterns in a specific tab.

# permissionStatusForMatchPattern: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Checks the specified match pattern against the currently denied, granted, and requested permission match patterns.

## Declaration

```objectivec
- (WKWebExtensionContextPermissionStatus) permissionStatusForMatchPattern:(WKWebExtensionMatchPattern *) pattern;
```

## Parameters

- `pattern`: The pattern for which to return the status.

<a id="discussion"></a>

## Discussion

Match patterns can be granted on a per-tab basis. When the tab is known, access checks should always use the method that checks in a tab.

## See Also

### Related Documentation

- [permissionStatusForMatchPattern:inTab:](permissionstatus%28for_in_%29-nqhm.md): Checks the specified match pattern against the currently denied, granted, and requested permission match patterns.
- [hasAccessToURL:inTab:](hasaccess%28to_in_%29.md): Checks the specified URL against the currently granted permission match patterns in a specific tab.
