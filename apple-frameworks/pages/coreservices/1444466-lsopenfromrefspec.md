> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1444466-lsopenfromrefspec](https://developer.apple.com/documentation/coreservices/1444466-lsopenfromrefspec)

# LSOpenFromRefSpec(\_:\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.10)

Opens one or more items with a file-system reference in either their preferred apps or a designated app.

## Declaration

```swift
func LSOpenFromRefSpec(_ inLaunchSpec: UnsafePointer<LSLaunchFSRefSpec>!, _ outLaunchedRef: UnsafeMutablePointer<FSRef>!) -> OSStatus
```

## Parameters

- `inLaunchSpec`: A pointer to a file-based launch specification indicating what to open and how to launch the relevant application or applications; see [LSLaunchFSRefSpec](lslaunchfsrefspec.md) for a description of this structure.
- `outLaunchedRef`: A pointer to a file-system reference that, on return, will identify the application launched; see the *File Manager Reference* in the Carbon File Management Documentation for a description of the `FSRef` data type. Pass `NULL` if this information is unimportant. If more than one application is launched, the one identified will be the one corresponding to the first item designated in the launch specification.

<a id="return_value"></a>

## Return Value

A result code; see [Result Codes](launch_services.md#1661359).

<a id="discussion"></a>

## Discussion

This function affords greater control of how items are opened or applications launched than is possible with the `LSOpenFSRef` function. For instance, you can use it to open multiple items in a single call, in either the same or different applications; open documents for printing rather than for simple viewing or editing; or force a document to open in an application other than its own preferred application.

The launch specification supplied for the `inLaunchSpec` parameter may designate an application to launch, items to open, or both. The relevant application or applications are launched or activated, as required, and sent an appropriate Apple event depending on the circumstances:

- If the launch specification designates both items to open and an application with which to open them, the designated application is used to open all of the items. The application is launched (or activated if it is already running) and sent an `'odoc'` (“open document”) Apple event containing the list of items to open; if the items are to be printed, the Apple event is `'pdoc'` (“print document”) instead.

  > **Note**

  > When both an application and a list of items are supplied, the designated application is asked to open all of the items, whether or not it claims the ability to do so. Launch Services does not report an error if the application is unable to open one or more of the items; any error processing is the application’s responsibility.
- If the launch specification designates items to open but not an application with which to open them, each item is opened in its own preferred application. Each application is launched or activated and sent an `'odoc'` or `'pdoc'` Apple event, as described for the preceding case. (If two or more of the items have the same preferred application, the application receives a single `'odoc'` or `'pdoc'` event listing all of the relevant items.)
- If the launch specification designates only an application to launch (or if one or more of the items to open are applications):

  - If the application is not already running, it is launched and sent an `'oapp'` (“open application”) Apple event.
  - If the application is already running, it is activated and sent an `'rapp'` (“reopen application”) Apple event.

As of macOS 10.4 and later, [LSOpenItemsWithRole(\_:\_:\_:\_:\_:\_:\_:)](1449783-lsopenitemswithrole.md) is the preferred way of opening items.

<a id="1675802"></a>

### Version-Notes

Thread-safe since Mac OS version 10.2.

## See Also

### Deprecated Functions

- [LSGetHandlerOptionsForContentType(\_:)](1445296-lsgethandleroptionsforcontenttyp.md): Deprecated. Gets the handler options for the specified content type.
- [LSSetHandlerOptionsForContentType(\_:\_:)](1447588-lssethandleroptionsforcontenttyp.md): Deprecated. Sets the handler option for the specified content type.
- [LSCopyAllHandlersForURLScheme(\_:)](1443240-lscopyallhandlersforurlscheme.md): Deprecated. Locates app bundle identifiers for apps capable of handling the specified URL scheme.
- [LSCopyDefaultHandlerForURLScheme(\_:)](1441725-lscopydefaulthandlerforurlscheme.md): Deprecated. Returns the bundle identifier of the user’s preferred default handler for the specified URL scheme.
- [LSGetApplicationForItem(\_:\_:\_:\_:)](1446185-lsgetapplicationforitem.md): Deprecated. Locates the preferred app for opening an item with a file-system reference.
- [LSGetApplicationForURL(\_:\_:\_:\_:)](1445210-lsgetapplicationforurl.md): Deprecated. Locates the preferred app for opening an item with a URL.
- [LSGetApplicationForInfo(\_:\_:\_:\_:\_:\_:)](1449928-lsgetapplicationforinfo.md): Deprecated. Locates the preferred app for opening items with a specified file type, creator signature, filename extension, or any combination of these characteristics.
- [LSCopyApplicationForMIMEType(\_:\_:\_:)](1448586-lscopyapplicationformimetype.md): Deprecated. Locates the preferred app for opening items with a specified MIME type.
- [LSCanRefAcceptItem(\_:\_:\_:\_:\_:)](1442183-lscanrefacceptitem.md): Deprecated. Tests whether an app can accept (open) an item with a file-system reference.
- [LSFindApplicationForInfo(\_:\_:\_:\_:\_:)](1449588-lsfindapplicationforinfo.md): Deprecated. Locates an app with a specified creator signature, bundle ID, filename, or any combination of these characteristics.
- [LSOpenApplication(\_:\_:)](1447930-lsopenapplication.md): Deprecated. Launches the specified app.
- [LSOpenItemsWithRole(\_:\_:\_:\_:\_:\_:\_:)](1449783-lsopenitemswithrole.md): Deprecated. Opens items with an array of file-system references with a specified role.
- [LSOpenURLsWithRole(\_:\_:\_:\_:\_:\_:)](1448184-lsopenurlswithrole.md): Deprecated. Opens one or more URLs with the specified roles.
- [LSOpenFSRef(\_:\_:)](1445663-lsopenfsref.md): Deprecated. Opens an item with a file-system reference in the default manner in its preferred app.
- [LSCopyItemInfoForRef(\_:\_:\_:)](1445227-lscopyiteminfoforref.md): Deprecated. Obtains requested information about an item with a file-system reference.
- [LSCopyItemInfoForURL(\_:\_:\_:)](1445685-lscopyiteminfoforurl.md): Deprecated. Obtains requested information about an item with a URL.
- [LSCopyDisplayNameForRef(\_:\_:)](1442576-lscopydisplaynameforref.md): Deprecated. Obtains the display name for an item with a file-system reference.
- [LSCopyDisplayNameForURL(\_:\_:)](1446850-lscopydisplaynameforurl.md): Deprecated. Obtains the display name for an item with a URL.
- [LSCopyKindStringForRef(\_:\_:)](1448593-lscopykindstringforref.md): Deprecated. Obtains the kind string for an item with a file-system reference.
- [LSCopyKindStringForURL(\_:\_:)](1447481-lscopykindstringforurl.md): Deprecated. Obtains the kind string for an item with a URL.
- [LSCopyKindStringForTypeInfo(\_:\_:\_:\_:)](1446207-lscopykindstringfortypeinfo.md): Deprecated. Obtains a kind string for items with a specified file type, creator signature, filename extension, or any combination of these characteristics.
- [LSCopyKindStringForMIMEType(\_:\_:)](1442446-lscopykindstringformimetype.md): Deprecated. Obtains the kind string for a specified MIME type.
- [LSCopyItemAttribute(\_:\_:\_:\_:)](1445023-lscopyitemattribute.md): Deprecated. Obtains the value of an item’s attribute.
- [LSCopyItemAttributes(\_:\_:\_:\_:)](1446078-lscopyitemattributes.md): Deprecated. Obtains multiple item attribute values as a dictionary.
- [LSGetExtensionInfo(\_:\_:\_:)](1446043-lsgetextensioninfo.md): Deprecated. Obtains the starting index of the extension within a filename.
- [LSSetExtensionHiddenForRef(\_:\_:)](1442766-lssetextensionhiddenforref.md): Deprecated. Specifies whether to show or hide the filename extension for an item with a file-system reference.
- [LSSetExtensionHiddenForURL(\_:\_:)](1443948-lssetextensionhiddenforurl.md): Deprecated. Specifies whether to show or hide the filename extension for an item with a URL.
- [LSRegisterFSRef(\_:\_:)](1444582-lsregisterfsref.md): Deprecated. Registers an app with a file-system reference in the Launch Services database.

# LSOpenFromRefSpec (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.10)

Opens one or more items with a file-system reference in either their preferred apps or a designated app.

## Declaration

```objectivec
OSStatus LSOpenFromRefSpec(const LSLaunchFSRefSpec *inLaunchSpec, FSRef *outLaunchedRef);
```

## Parameters

- `inLaunchSpec`: A pointer to a file-based launch specification indicating what to open and how to launch the relevant application or applications; see [LSLaunchFSRefSpec](lslaunchfsrefspec.md) for a description of this structure.
- `outLaunchedRef`: A pointer to a file-system reference that, on return, will identify the application launched; see the *File Manager Reference* in the Carbon File Management Documentation for a description of the `FSRef` data type. Pass `NULL` if this information is unimportant. If more than one application is launched, the one identified will be the one corresponding to the first item designated in the launch specification.

<a id="return_value"></a>

## Return Value

A result code; see [Result Codes](launch_services.md#1661359).

<a id="discussion"></a>

## Discussion

This function affords greater control of how items are opened or applications launched than is possible with the `LSOpenFSRef` function. For instance, you can use it to open multiple items in a single call, in either the same or different applications; open documents for printing rather than for simple viewing or editing; or force a document to open in an application other than its own preferred application.

The launch specification supplied for the `inLaunchSpec` parameter may designate an application to launch, items to open, or both. The relevant application or applications are launched or activated, as required, and sent an appropriate Apple event depending on the circumstances:

- If the launch specification designates both items to open and an application with which to open them, the designated application is used to open all of the items. The application is launched (or activated if it is already running) and sent an `'odoc'` (“open document”) Apple event containing the list of items to open; if the items are to be printed, the Apple event is `'pdoc'` (“print document”) instead.

  > **Note**

  > When both an application and a list of items are supplied, the designated application is asked to open all of the items, whether or not it claims the ability to do so. Launch Services does not report an error if the application is unable to open one or more of the items; any error processing is the application’s responsibility.
- If the launch specification designates items to open but not an application with which to open them, each item is opened in its own preferred application. Each application is launched or activated and sent an `'odoc'` or `'pdoc'` Apple event, as described for the preceding case. (If two or more of the items have the same preferred application, the application receives a single `'odoc'` or `'pdoc'` event listing all of the relevant items.)
- If the launch specification designates only an application to launch (or if one or more of the items to open are applications):

  - If the application is not already running, it is launched and sent an `'oapp'` (“open application”) Apple event.
  - If the application is already running, it is activated and sent an `'rapp'` (“reopen application”) Apple event.

As of macOS 10.4 and later, [LSOpenItemsWithRole](1449783-lsopenitemswithrole.md) is the preferred way of opening items.

<a id="1675802"></a>

### Version-Notes

Thread-safe since Mac OS version 10.2.

## See Also

### Deprecated Functions

- [LSGetHandlerOptionsForContentType](1445296-lsgethandleroptionsforcontenttyp.md): Deprecated. Gets the handler options for the specified content type.
- [LSSetHandlerOptionsForContentType](1447588-lssethandleroptionsforcontenttyp.md): Deprecated. Sets the handler option for the specified content type.
- [LSCopyAllHandlersForURLScheme](1443240-lscopyallhandlersforurlscheme.md): Deprecated. Locates app bundle identifiers for apps capable of handling the specified URL scheme.
- [LSCopyDefaultHandlerForURLScheme](1441725-lscopydefaulthandlerforurlscheme.md): Deprecated. Returns the bundle identifier of the user’s preferred default handler for the specified URL scheme.
- [LSGetApplicationForItem](1446185-lsgetapplicationforitem.md): Deprecated. Locates the preferred app for opening an item with a file-system reference.
- [LSGetApplicationForURL](1445210-lsgetapplicationforurl.md): Deprecated. Locates the preferred app for opening an item with a URL.
- [LSGetApplicationForInfo](1449928-lsgetapplicationforinfo.md): Deprecated. Locates the preferred app for opening items with a specified file type, creator signature, filename extension, or any combination of these characteristics.
- [LSCopyApplicationForMIMEType](1448586-lscopyapplicationformimetype.md): Deprecated. Locates the preferred app for opening items with a specified MIME type.
- [LSCanRefAcceptItem](1442183-lscanrefacceptitem.md): Deprecated. Tests whether an app can accept (open) an item with a file-system reference.
- [LSFindApplicationForInfo](1449588-lsfindapplicationforinfo.md): Deprecated. Locates an app with a specified creator signature, bundle ID, filename, or any combination of these characteristics.
- [LSOpenApplication](1447930-lsopenapplication.md): Deprecated. Launches the specified app.
- [LSOpenItemsWithRole](1449783-lsopenitemswithrole.md): Deprecated. Opens items with an array of file-system references with a specified role.
- [LSOpenURLsWithRole](1448184-lsopenurlswithrole.md): Deprecated. Opens one or more URLs with the specified roles.
- [LSOpenFSRef](1445663-lsopenfsref.md): Deprecated. Opens an item with a file-system reference in the default manner in its preferred app.
- [LSCopyItemInfoForRef](1445227-lscopyiteminfoforref.md): Deprecated. Obtains requested information about an item with a file-system reference.
- [LSCopyItemInfoForURL](1445685-lscopyiteminfoforurl.md): Deprecated. Obtains requested information about an item with a URL.
- [LSCopyDisplayNameForRef](1442576-lscopydisplaynameforref.md): Deprecated. Obtains the display name for an item with a file-system reference.
- [LSCopyDisplayNameForURL](1446850-lscopydisplaynameforurl.md): Deprecated. Obtains the display name for an item with a URL.
- [LSCopyKindStringForRef](1448593-lscopykindstringforref.md): Deprecated. Obtains the kind string for an item with a file-system reference.
- [LSCopyKindStringForURL](1447481-lscopykindstringforurl.md): Deprecated. Obtains the kind string for an item with a URL.
- [LSCopyKindStringForTypeInfo](1446207-lscopykindstringfortypeinfo.md): Deprecated. Obtains a kind string for items with a specified file type, creator signature, filename extension, or any combination of these characteristics.
- [LSCopyKindStringForMIMEType](1442446-lscopykindstringformimetype.md): Deprecated. Obtains the kind string for a specified MIME type.
- [LSCopyItemAttribute](1445023-lscopyitemattribute.md): Deprecated. Obtains the value of an item’s attribute.
- [LSCopyItemAttributes](1446078-lscopyitemattributes.md): Deprecated. Obtains multiple item attribute values as a dictionary.
- [LSGetExtensionInfo](1446043-lsgetextensioninfo.md): Deprecated. Obtains the starting index of the extension within a filename.
- [LSSetExtensionHiddenForRef](1442766-lssetextensionhiddenforref.md): Deprecated. Specifies whether to show or hide the filename extension for an item with a file-system reference.
- [LSSetExtensionHiddenForURL](1443948-lssetextensionhiddenforurl.md): Deprecated. Specifies whether to show or hide the filename extension for an item with a URL.
- [LSRegisterFSRef](1444582-lsregisterfsref.md): Deprecated. Registers an app with a file-system reference in the Launch Services database.
