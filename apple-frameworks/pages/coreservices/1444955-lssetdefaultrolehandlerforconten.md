> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1444955-lssetdefaultrolehandlerforconten](https://developer.apple.com/documentation/coreservices/1444955-lssetdefaultrolehandlerforconten)

# LSSetDefaultRoleHandlerForContentType(\_:\_:\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ (deprecated in 15.0) · macOS 10.4+ (deprecated in 12.0)

Sets the user’s preferred default handler for the specified content type in the specified roles.

## Declaration

```swift
func LSSetDefaultRoleHandlerForContentType(_ inContentType: CFString, _ inRole: LSRolesMask, _ inHandlerBundleID: CFString) -> OSStatus
```

## Parameters

- `inContentType`: The content type for which the default role handler is being set. The content type is a uniform type identifier.
- `inRole`: The roles for which the default role handler is being set. Pass `kLSRolesAll` to specify all roles. For additional possible values, see [LSRolesMask](lsrolesmask.md).
- `inHandlerBundleID`: The bundle identifier that is to be set as the default handler for the specified content type and roles.

<a id="return_value"></a>

## Return Value

A result code; see [Result Codes](launch_services.md#1661359).

<a id="discussion"></a>

## Discussion

Call [LSCopyDefaultRoleHandlerForContentType(\_:\_:)](1449868-lscopydefaultrolehandlerforconte.md) to get the current setting of the user’s preferred default handler for a specified content type.

<a id="1676309"></a>

### Version-Notes

Thread-safe since OS X v10.4.

## See Also

### Working with Role Handlers

- [LSCopyAllRoleHandlersForContentType(\_:\_:)](1448020-lscopyallrolehandlersforcontentt.md): Deprecated. Locates an array of bundle identifiers for apps capable of handling a specified content type with the specified roles.
- [LSCopyDefaultRoleHandlerForContentType(\_:\_:)](1449868-lscopydefaultrolehandlerforconte.md): Deprecated. Returns the bundle identifier of the user’s preferred default handler for the specified content type with the specified role.
- [LSSetDefaultHandlerForURLScheme(\_:\_:)](1447760-lssetdefaulthandlerforurlscheme.md): Deprecated. Sets the user’s preferred default handler for the specified URL scheme.
- [LSRolesMask](lsrolesmask.md): The specification that sets the desired role or roles for an app to claim for an item or a family of items.

# LSSetDefaultRoleHandlerForContentType (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ (deprecated in 15.0) · macOS 10.4+ (deprecated in 12.0)

Sets the user’s preferred default handler for the specified content type in the specified roles.

## Declaration

```objectivec
OSStatus LSSetDefaultRoleHandlerForContentType(CFStringRef inContentType, LSRolesMask inRole, CFStringRef inHandlerBundleID);
```

## Parameters

- `inContentType`: The content type for which the default role handler is being set. The content type is a uniform type identifier.
- `inRole`: The roles for which the default role handler is being set. Pass `kLSRolesAll` to specify all roles. For additional possible values, see [LSRolesMask](lsrolesmask.md).
- `inHandlerBundleID`: The bundle identifier that is to be set as the default handler for the specified content type and roles.

<a id="return_value"></a>

## Return Value

A result code; see [Result Codes](launch_services.md#1661359).

<a id="discussion"></a>

## Discussion

Call [LSCopyDefaultRoleHandlerForContentType](1449868-lscopydefaultrolehandlerforconte.md) to get the current setting of the user’s preferred default handler for a specified content type.

<a id="1676309"></a>

### Version-Notes

Thread-safe since OS X v10.4.

## See Also

### Working with Role Handlers

- [LSCopyAllRoleHandlersForContentType](1448020-lscopyallrolehandlersforcontentt.md): Deprecated. Locates an array of bundle identifiers for apps capable of handling a specified content type with the specified roles.
- [LSCopyDefaultRoleHandlerForContentType](1449868-lscopydefaultrolehandlerforconte.md): Deprecated. Returns the bundle identifier of the user’s preferred default handler for the specified content type with the specified role.
- [LSSetDefaultHandlerForURLScheme](1447760-lssetdefaulthandlerforurlscheme.md): Deprecated. Sets the user’s preferred default handler for the specified URL scheme.
- [LSRolesMask](lsrolesmask.md): The specification that sets the desired role or roles for an app to claim for an item or a family of items.
