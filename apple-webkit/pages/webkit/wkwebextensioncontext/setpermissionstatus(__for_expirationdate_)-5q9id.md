> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextensioncontext/setpermissionstatus(_:for:expirationdate:)-5q9id](https://developer.apple.com/documentation/webkit/wkwebextensioncontext/setpermissionstatus(_:for:expirationdate:)-5q9id)

# setPermissionStatus(\_:for:expirationDate:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Sets the permission status of a URL with a distant future expiration date.

## Declaration

```swift
func setPermissionStatus(_ status: WKWebExtensionContext.PermissionStatus, for url: URL, expirationDate: Date?)
```

## Parameters

- `status`: The new permission status to set for the given URL.
- `url`: The URL for which to set the status.
- `expirationDate`: The expiration date for the new permission status, or `nil` for distant future.

<a id="discussion"></a>

## Discussion

The URL is converted into a match pattern and will update [grantedPermissionMatchPatterns](grantedpermissionmatchpatterns.md) and [deniedPermissionMatchPatterns](deniedpermissionmatchpatterns.md). Use this method for changing a single URL’s status. Passing a `nil` expiration date will be treated as a distant future date. Only [WKWebExtensionContext.PermissionStatus.deniedExplicitly](permissionstatus/deniedexplicitly.md), [WKWebExtensionContext.PermissionStatus.unknown](permissionstatus/unknown.md), and [WKWebExtensionContext.PermissionStatus.grantedExplicitly](permissionstatus/grantedexplicitly.md) states are allowed to be set using this method.

## See Also

### Related Documentation

- [setPermissionStatus(\_:for:)](setpermissionstatus%28__for_%29-5xahd.md): Sets the permission status of a URL with a distant future expiration date.

# setPermissionStatus:forURL:expirationDate: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Sets the permission status of a URL with a distant future expiration date.

## Declaration

```objectivec
- (void) setPermissionStatus:(WKWebExtensionContextPermissionStatus) status forURL:(NSURL *) url expirationDate:(NSDate *) expirationDate;
```

## Parameters

- `status`: The new permission status to set for the given URL.
- `url`: The URL for which to set the status.
- `expirationDate`: The expiration date for the new permission status, or `nil` for distant future.

<a id="discussion"></a>

## Discussion

The URL is converted into a match pattern and will update [grantedPermissionMatchPatterns](grantedpermissionmatchpatterns.md) and [deniedPermissionMatchPatterns](deniedpermissionmatchpatterns.md). Use this method for changing a single URL’s status. Passing a `nil` expiration date will be treated as a distant future date. Only [WKWebExtensionContextPermissionStatusDeniedExplicitly](permissionstatus/deniedexplicitly.md), [WKWebExtensionContextPermissionStatusUnknown](permissionstatus/unknown.md), and [WKWebExtensionContextPermissionStatusGrantedExplicitly](permissionstatus/grantedexplicitly.md) states are allowed to be set using this method.

## See Also

### Related Documentation

- [setPermissionStatus:forURL:](setpermissionstatus%28__for_%29-5xahd.md): Sets the permission status of a URL with a distant future expiration date.
