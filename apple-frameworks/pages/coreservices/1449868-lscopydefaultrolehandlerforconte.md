> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1449868-lscopydefaultrolehandlerforconte](https://developer.apple.com/documentation/coreservices/1449868-lscopydefaultrolehandlerforconte)

# LSCopyDefaultRoleHandlerForContentType(\_:\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ (deprecated in 15.0) · macOS 10.4+ (deprecated in 12.0)

Returns the bundle identifier of the user’s preferred default handler for the specified content type with the specified role.

## Declaration

```swift
func LSCopyDefaultRoleHandlerForContentType(_ inContentType: CFString, _ inRole: LSRolesMask) -> Unmanaged<CFString>?
```

## Parameters

- `inContentType`: The content type. The content type is a uniform type identifier.
- `inRole`: The role. Pass `kLSRolesAll` if any role is acceptable. For additional possible values, see [LSRolesMask](lsrolesmask.md).

<a id="return_value"></a>

## Return Value

The bundle identifier of the default handler for the specified content type in the specified roles, or `NULL` if no handler is available.

<a id="discussion"></a>

## Discussion

This function returns the user’s currently preferred default handler for the specified content type. Say, for example, that [LSSetDefaultRoleHandlerForContentType(\_:\_:\_:)](1444955-lssetdefaultrolehandlerforconten.md) has been used to set “com.Apple.TextEdit” for the “public.xml” content type. When a file whose content type is “public.xml” is double-clicked, TextEdit will be launched to open the file. If you call `LSCopyDefaultRoleHandlerForContentType(CFSTR(“public.xml”), kLSRolesAll)`, the string `com.apple.TextEdit` is returned.

The [CFBundleDocumentTypes](../bundleresources/information-property-list/cfbundledocumenttypes.md) key in an app’s `Info.plist` can be used to set an app’s content handling capabilities. The `LSItemContentTypes` key is particularly useful because it supports the use of UTIs in document claims.

<a id="1818366"></a>

### Version-Notes

Thread-safe since OS X v10.4.

## See Also

### Working with Role Handlers

- [LSCopyAllRoleHandlersForContentType(\_:\_:)](1448020-lscopyallrolehandlersforcontentt.md): Deprecated. Locates an array of bundle identifiers for apps capable of handling a specified content type with the specified roles.
- [LSSetDefaultRoleHandlerForContentType(\_:\_:\_:)](1444955-lssetdefaultrolehandlerforconten.md): Deprecated. Sets the user’s preferred default handler for the specified content type in the specified roles.
- [LSSetDefaultHandlerForURLScheme(\_:\_:)](1447760-lssetdefaulthandlerforurlscheme.md): Deprecated. Sets the user’s preferred default handler for the specified URL scheme.
- [LSRolesMask](lsrolesmask.md): The specification that sets the desired role or roles for an app to claim for an item or a family of items.

# LSCopyDefaultRoleHandlerForContentType (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ (deprecated in 15.0) · macOS 10.4+ (deprecated in 12.0)

Returns the bundle identifier of the user’s preferred default handler for the specified content type with the specified role.

## Declaration

```objectivec
CFStringRef LSCopyDefaultRoleHandlerForContentType(CFStringRef inContentType, LSRolesMask inRole);
```

## Parameters

- `inContentType`: The content type. The content type is a uniform type identifier.
- `inRole`: The role. Pass `kLSRolesAll` if any role is acceptable. For additional possible values, see [LSRolesMask](lsrolesmask.md).

<a id="return_value"></a>

## Return Value

The bundle identifier of the default handler for the specified content type in the specified roles, or `NULL` if no handler is available.

<a id="discussion"></a>

## Discussion

This function returns the user’s currently preferred default handler for the specified content type. Say, for example, that [LSSetDefaultRoleHandlerForContentType](1444955-lssetdefaultrolehandlerforconten.md) has been used to set “com.Apple.TextEdit” for the “public.xml” content type. When a file whose content type is “public.xml” is double-clicked, TextEdit will be launched to open the file. If you call `LSCopyDefaultRoleHandlerForContentType(CFSTR(“public.xml”), kLSRolesAll)`, the string `com.apple.TextEdit` is returned.

The [CFBundleDocumentTypes](../bundleresources/information-property-list/cfbundledocumenttypes.md) key in an app’s `Info.plist` can be used to set an app’s content handling capabilities. The `LSItemContentTypes` key is particularly useful because it supports the use of UTIs in document claims.

<a id="1818366"></a>

### Version-Notes

Thread-safe since OS X v10.4.

## See Also

### Working with Role Handlers

- [LSCopyAllRoleHandlersForContentType](1448020-lscopyallrolehandlersforcontentt.md): Deprecated. Locates an array of bundle identifiers for apps capable of handling a specified content type with the specified roles.
- [LSSetDefaultRoleHandlerForContentType](1444955-lssetdefaultrolehandlerforconten.md): Deprecated. Sets the user’s preferred default handler for the specified content type in the specified roles.
- [LSSetDefaultHandlerForURLScheme](1447760-lssetdefaulthandlerforurlscheme.md): Deprecated. Sets the user’s preferred default handler for the specified URL scheme.
- [LSRolesMask](lsrolesmask.md): The specification that sets the desired role or roles for an app to claim for an item or a family of items.
