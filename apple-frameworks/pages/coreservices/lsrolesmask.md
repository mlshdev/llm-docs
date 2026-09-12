> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/lsrolesmask](https://developer.apple.com/documentation/coreservices/lsrolesmask)

# LSRolesMask (Swift)

**Framework:** Core Services  
**Kind:** Structure  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

The specification that sets the desired role or roles for an app to claim for an item or a family of items.

## Declaration

```swift
struct LSRolesMask
```

<a id="overview"></a>

## Overview

This bit mask is passed to functions that find the preferred app for an item or family of items (`LSGetApplicationForItem`, `LSGetApplicationForURL`, `LSGetApplicationForInfo`), or that determine whether an app can open a designated item (`LSCanRefAcceptItem`, `LSCanURLAcceptURL`), to specify the app’s desired role or roles for the item. For example, to request only an editor app, specify `kLSRolesEditor`. If either an editor or a viewer app is acceptable, specify `kLSRolesEditor | kLSRolesViewer`.

## Topics

### Constants

- [none](lsrolesmask/1442696-none.md): Requests the role `None` (theapplication cannot open the item, but provides an icon and a kindstring for it).
- [viewer](lsrolesmask/1441708-viewer.md): Requests the role `Viewer` (theapplication can read and present the item, but cannot manipulateor save it).
- [editor](lsrolesmask/1448087-editor.md): Requests the role `Editor` (theapplication can read, present, manipulate, and save the item).
- [shell](lsrolesmask/1442557-shell.md): Requests the role `Shell` (theapplication can execute the item).
- [all](lsrolesmask/1450616-all.md): Accepts any role with respect to the item.

### Creating a Roles Mask

- [init(rawValue:)](lsrolesmask/1445983-init.md)

## Relationships

### Conforms To

- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Working with Role Handlers

- [LSCopyAllRoleHandlersForContentType(\_:\_:)](1448020-lscopyallrolehandlersforcontentt.md): Deprecated. Locates an array of bundle identifiers for apps capable of handling a specified content type with the specified roles.
- [LSCopyDefaultRoleHandlerForContentType(\_:\_:)](1449868-lscopydefaultrolehandlerforconte.md): Deprecated. Returns the bundle identifier of the user’s preferred default handler for the specified content type with the specified role.
- [LSSetDefaultRoleHandlerForContentType(\_:\_:\_:)](1444955-lssetdefaultrolehandlerforconten.md): Deprecated. Sets the user’s preferred default handler for the specified content type in the specified roles.
- [LSSetDefaultHandlerForURLScheme(\_:\_:)](1447760-lssetdefaulthandlerforurlscheme.md): Deprecated. Sets the user’s preferred default handler for the specified URL scheme.

# LSRolesMask (Objective-C)

**Framework:** Core Services  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

The specification that sets the desired role or roles for an app to claim for an item or a family of items.

## Declaration

```objectivec
typedef enum LSRolesMask : OptionBits {
    ...
} LSRolesMask;
```

<a id="overview"></a>

## Overview

This bit mask is passed to functions that find the preferred app for an item or family of items (`LSGetApplicationForItem`, `LSGetApplicationForURL`, `LSGetApplicationForInfo`), or that determine whether an app can open a designated item (`LSCanRefAcceptItem`, `LSCanURLAcceptURL`), to specify the app’s desired role or roles for the item. For example, to request only an editor app, specify `kLSRolesEditor`. If either an editor or a viewer app is acceptable, specify `kLSRolesEditor | kLSRolesViewer`.

## Topics

### Constants

- [kLSRolesNone](lsrolesmask/klsrolesnone.md): Requests the role `None` (theapplication cannot open the item, but provides an icon and a kindstring for it).
- [kLSRolesViewer](lsrolesmask/klsrolesviewer.md): Requests the role `Viewer` (theapplication can read and present the item, but cannot manipulateor save it).
- [kLSRolesEditor](lsrolesmask/klsroleseditor.md): Requests the role `Editor` (theapplication can read, present, manipulate, and save the item).
- [kLSRolesShell](lsrolesmask/klsrolesshell.md): Requests the role `Shell` (theapplication can execute the item).
- [kLSRolesAll](lsrolesmask/klsrolesall.md): Accepts any role with respect to the item.

## See Also

### Working with Role Handlers

- [LSCopyAllRoleHandlersForContentType](1448020-lscopyallrolehandlersforcontentt.md): Deprecated. Locates an array of bundle identifiers for apps capable of handling a specified content type with the specified roles.
- [LSCopyDefaultRoleHandlerForContentType](1449868-lscopydefaultrolehandlerforconte.md): Deprecated. Returns the bundle identifier of the user’s preferred default handler for the specified content type with the specified role.
- [LSSetDefaultRoleHandlerForContentType](1444955-lssetdefaultrolehandlerforconten.md): Deprecated. Sets the user’s preferred default handler for the specified content type in the specified roles.
- [LSSetDefaultHandlerForURLScheme](1447760-lssetdefaulthandlerforurlscheme.md): Deprecated. Sets the user’s preferred default handler for the specified URL scheme.
