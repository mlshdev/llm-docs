> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1445148-lscopyapplicationurlsforurl](https://developer.apple.com/documentation/coreservices/1445148-lscopyapplicationurlsforurl)

# LSCopyApplicationURLsForURL(\_:\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.3+ (deprecated in 12.0)

Locates all known apps suitable for opening an item for the specified URL.

## Declaration

```swift
func LSCopyApplicationURLsForURL(_ inURL: CFURL, _ inRoleMask: LSRolesMask) -> Unmanaged<CFArray>?
```

## Parameters

- `inURL`: A Core Foundation URL reference designating the item for which all suitable apps are requested. See `CFURL` for a description of the `CFURLRef` data type.
- `inRolesMask`: A bit mask specifying the apps’ role or roles with respect to the designated item. See [LSRolesMask](lsrolesmask.md) for a description of this mask. This parameter applies only to URLs with a scheme component of `file`, and is ignored for all other schemes. If the role is unimportant, pass `kLSRolesAll`.

<a id="return_value"></a>

## Return Value

An array of Core Foundation URL references, one for each app that can open the designated item with at least one of the specified roles. You are responsible for releasing the array object. If no suitable apps are found in the Launch Services database, the function will return `NULL.`

In macOS 10.15 and later, the returned array is sorted with the first element containing the best available apps for opening the specified URL. Prior to macOS 10.15, the order of elements in the array was undefined.

<a id="discussion"></a>

## Discussion

If the item URL’s scheme is `file` (designating either a file or a directory), the selection of suitable applications is based on the designated item’s filename extension, file type, and creator signature, along with the role specified by the `inRolesMask` parameter. Otherwise, the selection is based on the URL scheme (such as `http`, `ftp`, or `mailto`).

<a id="1675582"></a>

### Version Notes

Thread-safe since macOS 10.3.

## See Also

### Locating an App

- [LSCopyDefaultApplicationURLForURL(\_:\_:\_:)](1448824-lscopydefaultapplicationurlforur.md): Deprecated. Returns the app that opens an item.
- [LSCopyDefaultApplicationURLForContentType(\_:\_:\_:)](1447734-lscopydefaultapplicationurlforco.md): Deprecated. Returns the app that opens a content type.
- [LSCanURLAcceptURL(\_:\_:\_:\_:\_:)](1441854-lscanurlaccepturl.md): Tests whether an app can accept (open) an item for a URL.
- [LSCopyApplicationURLsForBundleIdentifier(\_:\_:)](1449290-lscopyapplicationurlsforbundleid.md): Deprecated. Locates all URLs for apps that correspond to the specified bundle identifier.

# LSCopyApplicationURLsForURL (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.3+ (deprecated in 12.0)

Locates all known apps suitable for opening an item for the specified URL.

## Declaration

```objectivec
CFArrayRef LSCopyApplicationURLsForURL(CFURLRef inURL, LSRolesMask inRoleMask);
```

## Parameters

- `inURL`: A Core Foundation URL reference designating the item for which all suitable apps are requested. See `CFURL` for a description of the `CFURLRef` data type.
- `inRolesMask`: A bit mask specifying the apps’ role or roles with respect to the designated item. See [LSRolesMask](lsrolesmask.md) for a description of this mask. This parameter applies only to URLs with a scheme component of `file`, and is ignored for all other schemes. If the role is unimportant, pass `kLSRolesAll`.

<a id="return_value"></a>

## Return Value

An array of Core Foundation URL references, one for each app that can open the designated item with at least one of the specified roles. You are responsible for releasing the array object. If no suitable apps are found in the Launch Services database, the function will return `NULL.`

In macOS 10.15 and later, the returned array is sorted with the first element containing the best available apps for opening the specified URL. Prior to macOS 10.15, the order of elements in the array was undefined.

<a id="discussion"></a>

## Discussion

If the item URL’s scheme is `file` (designating either a file or a directory), the selection of suitable applications is based on the designated item’s filename extension, file type, and creator signature, along with the role specified by the `inRolesMask` parameter. Otherwise, the selection is based on the URL scheme (such as `http`, `ftp`, or `mailto`).

<a id="1675582"></a>

### Version Notes

Thread-safe since macOS 10.3.

## See Also

### Locating an App

- [LSCopyDefaultApplicationURLForURL](1448824-lscopydefaultapplicationurlforur.md): Deprecated. Returns the app that opens an item.
- [LSCopyDefaultApplicationURLForContentType](1447734-lscopydefaultapplicationurlforco.md): Deprecated. Returns the app that opens a content type.
- [LSCanURLAcceptURL](1441854-lscanurlaccepturl.md): Tests whether an app can accept (open) an item for a URL.
- [LSCopyApplicationURLsForBundleIdentifier](1449290-lscopyapplicationurlsforbundleid.md): Deprecated. Locates all URLs for apps that correspond to the specified bundle identifier.
