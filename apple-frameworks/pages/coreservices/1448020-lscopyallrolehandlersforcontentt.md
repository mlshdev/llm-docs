> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1448020-lscopyallrolehandlersforcontentt](https://developer.apple.com/documentation/coreservices/1448020-lscopyallrolehandlersforcontentt)

# LSCopyAllRoleHandlersForContentType(\_:\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.4+ (deprecated in 12.0)

Locates an array of bundle identifiers for apps capable of handling a specified content type with the specified roles.

## Declaration

```swift
func LSCopyAllRoleHandlersForContentType(_ inContentType: CFString, _ inRole: LSRolesMask) -> Unmanaged<CFArray>?
```

## Parameters

- `inContentType`: The content type. The content type is a uniform type identifier.
- `inRole`: The role. Pass `kLSRolesAll` if any role is acceptable. For additional possible values, see [LSRolesMask](lsrolesmask.md).

<a id="return_value"></a>

## Return Value

The bundle identifiers for apps capable of handling the specified content type in the specified roles, or `NULL` if no handlers are available.

In macOS 10.15 and later, the returned array is sorted so that the first element contains the bundle identifier of the best available app for opening the content type. Prior to macOS 10.15, the order of elements in the array was undefined.

<a id="discussion"></a>

## Discussion

This function returns all of the bundle identifiers that are capable of handling the specified content type in the specified roles.

The [CFBundleDocumentTypes](https://developer.apple.com/library/archive/documentation/General/Reference/InfoPlistKeyReference/Articles/CoreFoundationKeys.html#//apple_ref/doc/uid/20001431-101685) key in an app’s `Info.plist` can be used to set an app’s content handling capabilities. The [LSItemContentTypes](../bundleresources/information-property-list/cfbundledocumenttypes/lsitemcontenttypes.md) key is particularly useful because it supports the use of UTIs in document claims.

<a id="1818345"></a>

### Version Notes

Thread-safe since macOS 10.4.

## See Also

### Working with Role Handlers

- [LSCopyDefaultRoleHandlerForContentType(\_:\_:)](1449868-lscopydefaultrolehandlerforconte.md): Deprecated. Returns the bundle identifier of the user’s preferred default handler for the specified content type with the specified role.
- [LSSetDefaultRoleHandlerForContentType(\_:\_:\_:)](1444955-lssetdefaultrolehandlerforconten.md): Deprecated. Sets the user’s preferred default handler for the specified content type in the specified roles.
- [LSSetDefaultHandlerForURLScheme(\_:\_:)](1447760-lssetdefaulthandlerforurlscheme.md): Deprecated. Sets the user’s preferred default handler for the specified URL scheme.
- [LSRolesMask](lsrolesmask.md): The specification that sets the desired role or roles for an app to claim for an item or a family of items.

# LSCopyAllRoleHandlersForContentType (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.4+ (deprecated in 12.0)

Locates an array of bundle identifiers for apps capable of handling a specified content type with the specified roles.

## Declaration

```objectivec
CFArrayRef LSCopyAllRoleHandlersForContentType(CFStringRef inContentType, LSRolesMask inRole);
```

## Parameters

- `inContentType`: The content type. The content type is a uniform type identifier.
- `inRole`: The role. Pass `kLSRolesAll` if any role is acceptable. For additional possible values, see [LSRolesMask](lsrolesmask.md).

<a id="return_value"></a>

## Return Value

The bundle identifiers for apps capable of handling the specified content type in the specified roles, or `NULL` if no handlers are available.

In macOS 10.15 and later, the returned array is sorted so that the first element contains the bundle identifier of the best available app for opening the content type. Prior to macOS 10.15, the order of elements in the array was undefined.

<a id="discussion"></a>

## Discussion

This function returns all of the bundle identifiers that are capable of handling the specified content type in the specified roles.

The [CFBundleDocumentTypes](https://developer.apple.com/library/archive/documentation/General/Reference/InfoPlistKeyReference/Articles/CoreFoundationKeys.html#//apple_ref/doc/uid/20001431-101685) key in an app’s `Info.plist` can be used to set an app’s content handling capabilities. The [LSItemContentTypes](../bundleresources/information-property-list/cfbundledocumenttypes/lsitemcontenttypes.md) key is particularly useful because it supports the use of UTIs in document claims.

<a id="1818345"></a>

### Version Notes

Thread-safe since macOS 10.4.

## See Also

### Working with Role Handlers

- [LSCopyDefaultRoleHandlerForContentType](1449868-lscopydefaultrolehandlerforconte.md): Deprecated. Returns the bundle identifier of the user’s preferred default handler for the specified content type with the specified role.
- [LSSetDefaultRoleHandlerForContentType](1444955-lssetdefaultrolehandlerforconten.md): Deprecated. Sets the user’s preferred default handler for the specified content type in the specified roles.
- [LSSetDefaultHandlerForURLScheme](1447760-lssetdefaulthandlerforurlscheme.md): Deprecated. Sets the user’s preferred default handler for the specified URL scheme.
- [LSRolesMask](lsrolesmask.md): The specification that sets the desired role or roles for an app to claim for an item or a family of items.
