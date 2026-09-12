> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1447760-lssetdefaulthandlerforurlscheme](https://developer.apple.com/documentation/coreservices/1447760-lssetdefaulthandlerforurlscheme)

# LSSetDefaultHandlerForURLScheme(\_:\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ (deprecated in 15.0) · macOS 10.4+ (deprecated in 12.0)

Sets the user’s preferred default handler for the specified URL scheme.

## Declaration

```swift
func LSSetDefaultHandlerForURLScheme(_ inURLScheme: CFString, _ inHandlerBundleID: CFString) -> OSStatus
```

## Parameters

- `inURLScheme`: The URL scheme for which the handler is to be set.
- `inHandlerBundleID`: The bundle identifier that is to be set as the handler for the URL scheme specified by `inURLScheme`.

<a id="return_value"></a>

## Return Value

A result code; see [Result Codes](launch_services.md#1661359).

<a id="discussion"></a>

## Discussion

Call [LSCopyDefaultHandlerForURLScheme(\_:)](1441725-lscopydefaulthandlerforurlscheme.md) to get the current setting of the user’s preferred default handler for a specified content type.

URL handling capability is determined according to the value of the `CFBundleURLTypes` key in an app’s `Info.plist`. For information on the `CFBundleURLTypes` key, see the section “CFBundleURLTypes” in *macOS Runtime Configuration Guidelines*.

<a id="1818418"></a>

### Version-Notes

Thread-safe since OS X v10.4.

## See Also

### Working with Role Handlers

- [LSCopyAllRoleHandlersForContentType(\_:\_:)](1448020-lscopyallrolehandlersforcontentt.md): Deprecated. Locates an array of bundle identifiers for apps capable of handling a specified content type with the specified roles.
- [LSCopyDefaultRoleHandlerForContentType(\_:\_:)](1449868-lscopydefaultrolehandlerforconte.md): Deprecated. Returns the bundle identifier of the user’s preferred default handler for the specified content type with the specified role.
- [LSSetDefaultRoleHandlerForContentType(\_:\_:\_:)](1444955-lssetdefaultrolehandlerforconten.md): Deprecated. Sets the user’s preferred default handler for the specified content type in the specified roles.
- [LSRolesMask](lsrolesmask.md): The specification that sets the desired role or roles for an app to claim for an item or a family of items.

# LSSetDefaultHandlerForURLScheme (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ (deprecated in 15.0) · macOS 10.4+ (deprecated in 12.0)

Sets the user’s preferred default handler for the specified URL scheme.

## Declaration

```objectivec
OSStatus LSSetDefaultHandlerForURLScheme(CFStringRef inURLScheme, CFStringRef inHandlerBundleID);
```

## Parameters

- `inURLScheme`: The URL scheme for which the handler is to be set.
- `inHandlerBundleID`: The bundle identifier that is to be set as the handler for the URL scheme specified by `inURLScheme`.

<a id="return_value"></a>

## Return Value

A result code; see [Result Codes](launch_services.md#1661359).

<a id="discussion"></a>

## Discussion

Call [LSCopyDefaultHandlerForURLScheme](1441725-lscopydefaulthandlerforurlscheme.md) to get the current setting of the user’s preferred default handler for a specified content type.

URL handling capability is determined according to the value of the `CFBundleURLTypes` key in an app’s `Info.plist`. For information on the `CFBundleURLTypes` key, see the section “CFBundleURLTypes” in *macOS Runtime Configuration Guidelines*.

<a id="1818418"></a>

### Version-Notes

Thread-safe since OS X v10.4.

## See Also

### Working with Role Handlers

- [LSCopyAllRoleHandlersForContentType](1448020-lscopyallrolehandlersforcontentt.md): Deprecated. Locates an array of bundle identifiers for apps capable of handling a specified content type with the specified roles.
- [LSCopyDefaultRoleHandlerForContentType](1449868-lscopydefaultrolehandlerforconte.md): Deprecated. Returns the bundle identifier of the user’s preferred default handler for the specified content type with the specified role.
- [LSSetDefaultRoleHandlerForContentType](1444955-lssetdefaultrolehandlerforconten.md): Deprecated. Sets the user’s preferred default handler for the specified content type in the specified roles.
- [LSRolesMask](lsrolesmask.md): The specification that sets the desired role or roles for an app to claim for an item or a family of items.
