> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1449290-lscopyapplicationurlsforbundleid](https://developer.apple.com/documentation/coreservices/1449290-lscopyapplicationurlsforbundleid)

# LSCopyApplicationURLsForBundleIdentifier(\_:\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.10+ (deprecated in 12.0)

Locates all URLs for apps that correspond to the specified bundle identifier.

## Declaration

```swift
func LSCopyApplicationURLsForBundleIdentifier(_ inBundleIdentifier: CFString, _ outError: UnsafeMutablePointer<Unmanaged<CFError>?>?) -> Unmanaged<CFArray>?
```

## Parameters

- `inBundleIdentifier`: The bundle identifier of interest, such as "com.apple.finder". Must not be `NULL`.
- `outError`: On failure, set to a `CFError` describing the problem. If you aren't interested in this information, pass `NULL`. The caller is responsible for releasing this object.

<a id="return_value"></a>

## Return Value

The URLs for any applications with the specified bundle identifier returned in a `CFArray`. If no application is found, `NULL` is returned and `outError` (if not `NULL`) is populated with [kLSApplicationNotFoundErr](klsapplicationnotfounderr.md).

In macOS 10.15 and later, the returned array is sorted with the first element containing the best available application with the specified bundle identifier. Prior to macOS 10.15, the order of elements in the array was undefined.

The caller is responsible for releasing this array.

## See Also

### Locating an App

- [LSCopyDefaultApplicationURLForURL(\_:\_:\_:)](1448824-lscopydefaultapplicationurlforur.md): Deprecated. Returns the app that opens an item.
- [LSCopyDefaultApplicationURLForContentType(\_:\_:\_:)](1447734-lscopydefaultapplicationurlforco.md): Deprecated. Returns the app that opens a content type.
- [LSCopyApplicationURLsForURL(\_:\_:)](1445148-lscopyapplicationurlsforurl.md): Deprecated. Locates all known apps suitable for opening an item for the specified URL.
- [LSCanURLAcceptURL(\_:\_:\_:\_:\_:)](1441854-lscanurlaccepturl.md): Tests whether an app can accept (open) an item for a URL.

# LSCopyApplicationURLsForBundleIdentifier (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.10+ (deprecated in 12.0)

Locates all URLs for apps that correspond to the specified bundle identifier.

## Declaration

```objectivec
CFArrayRef LSCopyApplicationURLsForBundleIdentifier(CFStringRef inBundleIdentifier, CFErrorRef  _Nullable *outError);
```

## Parameters

- `inBundleIdentifier`: The bundle identifier of interest, such as "com.apple.finder". Must not be `NULL`.
- `outError`: On failure, set to a `CFError` describing the problem. If you aren't interested in this information, pass `NULL`. The caller is responsible for releasing this object.

<a id="return_value"></a>

## Return Value

The URLs for any applications with the specified bundle identifier returned in a `CFArray`. If no application is found, `NULL` is returned and `outError` (if not `NULL`) is populated with [kLSApplicationNotFoundErr](3074489-anonymous/klsapplicationnotfounderr.md).

In macOS 10.15 and later, the returned array is sorted with the first element containing the best available application with the specified bundle identifier. Prior to macOS 10.15, the order of elements in the array was undefined.

The caller is responsible for releasing this array.

## See Also

### Locating an App

- [LSCopyDefaultApplicationURLForURL](1448824-lscopydefaultapplicationurlforur.md): Deprecated. Returns the app that opens an item.
- [LSCopyDefaultApplicationURLForContentType](1447734-lscopydefaultapplicationurlforco.md): Deprecated. Returns the app that opens a content type.
- [LSCopyApplicationURLsForURL](1445148-lscopyapplicationurlsforurl.md): Deprecated. Locates all known apps suitable for opening an item for the specified URL.
- [LSCanURLAcceptURL](1441854-lscanurlaccepturl.md): Tests whether an app can accept (open) an item for a URL.
