> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextensioncontext/hasaccess(to:)](https://developer.apple.com/documentation/webkit/wkwebextensioncontext/hasaccess(to:))

# hasAccess(to:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Checks the specified URL against the currently granted permission match patterns.

## Declaration

```swift
func hasAccess(to url: URL) -> Bool
```

## Parameters

- `url`: The URL for which to return the status.

## See Also

### Related Documentation

- [currentPermissionMatchPatterns](currentpermissionmatchpatterns.md): The currently granted permission match patterns that have not expired.
- [hasAccess(to:in:)](hasaccess%28to_in_%29.md): Checks the specified URL against the currently granted permission match patterns in a specific tab.
- [permissionStatus(for:)](permissionstatus%28for_%29-7ojrb.md): Checks the specified URL against the currently denied, granted, and requested permission match patterns.
- [permissionStatus(for:in:)](permissionstatus%28for_in_%29-96xaf.md): Checks the specified URL against the currently denied, granted, and requested permission match patterns.
- [permissionStatus(for:)](permissionstatus%28for_%29-7mu8.md): Checks the specified match pattern against the currently denied, granted, and requested permission match patterns.
- [permissionStatus(for:in:)](permissionstatus%28for_in_%29-nqhm.md): Checks the specified match pattern against the currently denied, granted, and requested permission match patterns.

# hasAccessToURL: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Checks the specified URL against the currently granted permission match patterns.

## Declaration

```objectivec
- (BOOL) hasAccessToURL:(NSURL *) url;
```

## Parameters

- `url`: The URL for which to return the status.

## See Also

### Related Documentation

- [currentPermissionMatchPatterns](currentpermissionmatchpatterns.md): The currently granted permission match patterns that have not expired.
- [hasAccessToURL:inTab:](hasaccess%28to_in_%29.md): Checks the specified URL against the currently granted permission match patterns in a specific tab.
- [permissionStatusForURL:](permissionstatus%28for_%29-7ojrb.md): Checks the specified URL against the currently denied, granted, and requested permission match patterns.
- [permissionStatusForURL:inTab:](permissionstatus%28for_in_%29-96xaf.md): Checks the specified URL against the currently denied, granted, and requested permission match patterns.
- [permissionStatusForMatchPattern:](permissionstatus%28for_%29-7mu8.md): Checks the specified match pattern against the currently denied, granted, and requested permission match patterns.
- [permissionStatusForMatchPattern:inTab:](permissionstatus%28for_in_%29-nqhm.md): Checks the specified match pattern against the currently denied, granted, and requested permission match patterns.
