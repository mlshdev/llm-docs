> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1447734-lscopydefaultapplicationurlforco](https://developer.apple.com/documentation/coreservices/1447734-lscopydefaultapplicationurlforco)

# LSCopyDefaultApplicationURLForContentType(\_:\_:\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.10+ (deprecated in 12.0)

Returns the app that opens a content type.

## Declaration

```swift
func LSCopyDefaultApplicationURLForContentType(_ inContentType: CFString, _ inRoleMask: LSRolesMask, _ outError: UnsafeMutablePointer<Unmanaged<CFError>?>?) -> Unmanaged<CFURL>?
```

## Parameters

- `inContentType`: The Uniform Type Identifier (UTI) of the item for which the app is requested.
- `inRoleMask`: Whether to return the editor or viewer for `inContentType`. If you don't care which, use [all](lsrolesmask/1450616-all.md).
- `outError`: On failure, set to a [CFError](../corefoundation/cferror.md) describing the problem. If you are not interested in this information, pass `NULL`. The caller is responsible for releasing this object.

<a id="return_value"></a>

## Return Value

If an acceptable app is found, its URL is returned. If no app could be found, `NULL` is returned and `outError` (if not `NULL`) is populated with [kLSApplicationNotFoundErr](klsapplicationnotfounderr.md). The caller is responsible for releasing this URL.

<a id="discussion"></a>

## Discussion

Consults the binding tables to return the application that would be used to open a file of type `inContentType` if it were double-clicked in the Finder. This app will be the user-specified override if appropriate or the default otherwise.

## See Also

### Locating an App

- [LSCopyDefaultApplicationURLForURL(\_:\_:\_:)](1448824-lscopydefaultapplicationurlforur.md): Deprecated. Returns the app that opens an item.
- [LSCopyApplicationURLsForURL(\_:\_:)](1445148-lscopyapplicationurlsforurl.md): Deprecated. Locates all known apps suitable for opening an item for the specified URL.
- [LSCanURLAcceptURL(\_:\_:\_:\_:\_:)](1441854-lscanurlaccepturl.md): Tests whether an app can accept (open) an item for a URL.
- [LSCopyApplicationURLsForBundleIdentifier(\_:\_:)](1449290-lscopyapplicationurlsforbundleid.md): Deprecated. Locates all URLs for apps that correspond to the specified bundle identifier.

# LSCopyDefaultApplicationURLForContentType (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.10+ (deprecated in 12.0)

Returns the app that opens a content type.

## Declaration

```objectivec
CFURLRef LSCopyDefaultApplicationURLForContentType(CFStringRef inContentType, LSRolesMask inRoleMask, CFErrorRef  _Nullable *outError);
```

## Parameters

- `inContentType`: The Uniform Type Identifier (UTI) of the item for which the app is requested.
- `inRoleMask`: Whether to return the editor or viewer for `inContentType`. If you don't care which, use [kLSRolesAll](lsrolesmask/klsrolesall.md).
- `outError`: On failure, set to a [CFError](../corefoundation/cferror.md) describing the problem. If you are not interested in this information, pass `NULL`. The caller is responsible for releasing this object.

<a id="return_value"></a>

## Return Value

If an acceptable app is found, its URL is returned. If no app could be found, `NULL` is returned and `outError` (if not `NULL`) is populated with [kLSApplicationNotFoundErr](3074489-anonymous/klsapplicationnotfounderr.md). The caller is responsible for releasing this URL.

<a id="discussion"></a>

## Discussion

Consults the binding tables to return the application that would be used to open a file of type `inContentType` if it were double-clicked in the Finder. This app will be the user-specified override if appropriate or the default otherwise.

## See Also

### Locating an App

- [LSCopyDefaultApplicationURLForURL](1448824-lscopydefaultapplicationurlforur.md): Deprecated. Returns the app that opens an item.
- [LSCopyApplicationURLsForURL](1445148-lscopyapplicationurlsforurl.md): Deprecated. Locates all known apps suitable for opening an item for the specified URL.
- [LSCanURLAcceptURL](1441854-lscanurlaccepturl.md): Tests whether an app can accept (open) an item for a URL.
- [LSCopyApplicationURLsForBundleIdentifier](1449290-lscopyapplicationurlsforbundleid.md): Deprecated. Locates all URLs for apps that correspond to the specified bundle identifier.
