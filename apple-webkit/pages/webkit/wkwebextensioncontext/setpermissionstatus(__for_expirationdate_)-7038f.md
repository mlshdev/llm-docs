> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextensioncontext/setpermissionstatus(_:for:expirationdate:)-7038f](https://developer.apple.com/documentation/webkit/wkwebextensioncontext/setpermissionstatus(_:for:expirationdate:)-7038f)

# setPermissionStatus(\_:for:expirationDate:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Sets the status of a match pattern with a specific expiration date.

## Declaration

```swift
func setPermissionStatus(_ status: WKWebExtensionContext.PermissionStatus, for pattern: WKWebExtension.MatchPattern, expirationDate: Date?)
```

## Parameters

- `status`: The new permission status to set for the given match pattern.
- `pattern`: The match pattern for which to set the status.
- `expirationDate`: The expiration date for the new permission status, or `nil` for distant future.

<a id="discussion"></a>

## Discussion

This method will update [grantedPermissionMatchPatterns](grantedpermissionmatchpatterns.md) and [deniedPermissionMatchPatterns](deniedpermissionmatchpatterns.md). Use this method for changing a single match pattern’s status.

Passing a `nil` expiration date will be treated as a distant future date. Only [WKWebExtensionContext.PermissionStatus.deniedExplicitly](permissionstatus/deniedexplicitly.md), [WKWebExtensionContext.PermissionStatus.unknown](permissionstatus/unknown.md), and [WKWebExtensionContext.PermissionStatus.grantedExplicitly](permissionstatus/grantedexplicitly.md) states are allowed to be set using this method.

## See Also

### Related Documentation

- [setPermissionStatus(\_:for:)](setpermissionstatus%28__for_%29-6auqv.md): Sets the status of a match pattern with a distant future expiration date.

# setPermissionStatus:forMatchPattern:expirationDate: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Sets the status of a match pattern with a specific expiration date.

## Declaration

```objectivec
- (void) setPermissionStatus:(WKWebExtensionContextPermissionStatus) status forMatchPattern:(WKWebExtensionMatchPattern *) pattern expirationDate:(NSDate *) expirationDate;
```

## Parameters

- `status`: The new permission status to set for the given match pattern.
- `pattern`: The match pattern for which to set the status.
- `expirationDate`: The expiration date for the new permission status, or `nil` for distant future.

<a id="discussion"></a>

## Discussion

This method will update [grantedPermissionMatchPatterns](grantedpermissionmatchpatterns.md) and [deniedPermissionMatchPatterns](deniedpermissionmatchpatterns.md). Use this method for changing a single match pattern’s status.

Passing a `nil` expiration date will be treated as a distant future date. Only [WKWebExtensionContextPermissionStatusDeniedExplicitly](permissionstatus/deniedexplicitly.md), [WKWebExtensionContextPermissionStatusUnknown](permissionstatus/unknown.md), and [WKWebExtensionContextPermissionStatusGrantedExplicitly](permissionstatus/grantedexplicitly.md) states are allowed to be set using this method.

## See Also

### Related Documentation

- [setPermissionStatus:forMatchPattern:](setpermissionstatus%28__for_%29-6auqv.md): Sets the status of a match pattern with a distant future expiration date.
