> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1441854-lscanurlaccepturl](https://developer.apple.com/documentation/coreservices/1441854-lscanurlaccepturl)

# LSCanURLAcceptURL(\_:\_:\_:\_:\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+

Tests whether an app can accept (open) an item for a URL.

## Declaration

```swift
func LSCanURLAcceptURL(_ inItemURL: CFURL, _ inTargetURL: CFURL, _ inRoleMask: LSRolesMask, _ inFlags: LSAcceptanceFlags, _ outAcceptsItem: UnsafeMutablePointer<DarwinBoolean>) -> OSStatus
```

## Parameters

- `inItemURL`: A Core Foundation URL reference designating the source item (the item to test for acceptance by the target application); see the *CFURL Reference* in the Core Foundation Reference Documentation for a description of the `CFURLRef` data type.
- `inTargetURL`: A Core Foundation URL reference designating the target application; see the *CFURL Reference* in the Core Foundation Reference Documentation for a description of the `CFURLRef` data type. The URL must have scheme `file` and contain a valid path to an application file or application bundle.
- `inRolesMask`: A bit mask specifying the target app’s desired role or roles with respect to the source item; see [LSRolesMask](lsrolesmask.md) for a description of this mask. This parameter applies only to URLs with a scheme component of `file`, and is ignored for all other schemes. If the role is unimportant, pass `kLSRolesAll`.
- `inFlags`: Flags specifying behavior to observe during the acceptance test; see [LSAcceptanceFlags](lsacceptanceflags.md) for a description of these flags.
- `outAcceptsItem`: A pointer to a Boolean value that, on return, will indicate whether the target application can accept the source item with at least one of the specified roles.

<a id="return_value"></a>

## Return Value

A result code; see [Result Codes](launch_services.md#1661359).

<a id="discussion"></a>

## Discussion

If the item URL’s scheme is `file` (designating either a file or a directory), the acceptance test is based on the designated item’s filename extension, file type, and creator signature, along with the role specified by the `inRolesMask` parameter; otherwise, it is based on the URL scheme (such as `http`, `ftp`, or `mailto`).

<a id="1675609"></a>

### Version-Notes

Thread-safe since Mac OS version 10.2.

## See Also

### Locating an App

- [LSCopyDefaultApplicationURLForURL(\_:\_:\_:)](1448824-lscopydefaultapplicationurlforur.md): Deprecated. Returns the app that opens an item.
- [LSCopyDefaultApplicationURLForContentType(\_:\_:\_:)](1447734-lscopydefaultapplicationurlforco.md): Deprecated. Returns the app that opens a content type.
- [LSCopyApplicationURLsForURL(\_:\_:)](1445148-lscopyapplicationurlsforurl.md): Deprecated. Locates all known apps suitable for opening an item for the specified URL.
- [LSCopyApplicationURLsForBundleIdentifier(\_:\_:)](1449290-lscopyapplicationurlsforbundleid.md): Deprecated. Locates all URLs for apps that correspond to the specified bundle identifier.

# LSCanURLAcceptURL (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+

Tests whether an app can accept (open) an item for a URL.

## Declaration

```objectivec
OSStatus LSCanURLAcceptURL(CFURLRef inItemURL, CFURLRef inTargetURL, LSRolesMask inRoleMask, LSAcceptanceFlags inFlags, Boolean *outAcceptsItem);
```

## Parameters

- `inItemURL`: A Core Foundation URL reference designating the source item (the item to test for acceptance by the target application); see the *CFURL Reference* in the Core Foundation Reference Documentation for a description of the `CFURLRef` data type.
- `inTargetURL`: A Core Foundation URL reference designating the target application; see the *CFURL Reference* in the Core Foundation Reference Documentation for a description of the `CFURLRef` data type. The URL must have scheme `file` and contain a valid path to an application file or application bundle.
- `inRolesMask`: A bit mask specifying the target app’s desired role or roles with respect to the source item; see [LSRolesMask](lsrolesmask.md) for a description of this mask. This parameter applies only to URLs with a scheme component of `file`, and is ignored for all other schemes. If the role is unimportant, pass `kLSRolesAll`.
- `inFlags`: Flags specifying behavior to observe during the acceptance test; see [LSAcceptanceFlags](lsacceptanceflags.md) for a description of these flags.
- `outAcceptsItem`: A pointer to a Boolean value that, on return, will indicate whether the target application can accept the source item with at least one of the specified roles.

<a id="return_value"></a>

## Return Value

A result code; see [Result Codes](launch_services.md#1661359).

<a id="discussion"></a>

## Discussion

If the item URL’s scheme is `file` (designating either a file or a directory), the acceptance test is based on the designated item’s filename extension, file type, and creator signature, along with the role specified by the `inRolesMask` parameter; otherwise, it is based on the URL scheme (such as `http`, `ftp`, or `mailto`).

<a id="1675609"></a>

### Version-Notes

Thread-safe since Mac OS version 10.2.

## See Also

### Locating an App

- [LSCopyDefaultApplicationURLForURL](1448824-lscopydefaultapplicationurlforur.md): Deprecated. Returns the app that opens an item.
- [LSCopyDefaultApplicationURLForContentType](1447734-lscopydefaultapplicationurlforco.md): Deprecated. Returns the app that opens a content type.
- [LSCopyApplicationURLsForURL](1445148-lscopyapplicationurlsforurl.md): Deprecated. Locates all known apps suitable for opening an item for the specified URL.
- [LSCopyApplicationURLsForBundleIdentifier](1449290-lscopyapplicationurlsforbundleid.md): Deprecated. Locates all URLs for apps that correspond to the specified bundle identifier.
