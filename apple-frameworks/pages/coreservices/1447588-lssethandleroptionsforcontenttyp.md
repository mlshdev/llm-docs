> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1447588-lssethandleroptionsforcontenttyp](https://developer.apple.com/documentation/coreservices/1447588-lssethandleroptionsforcontenttyp)

# LSSetHandlerOptionsForContentType(\_:\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.4+ (deprecated in 10.11)

Sets the handler option for the specified content type.

## Declaration

```swift
func LSSetHandlerOptionsForContentType(_ inContentType: CFString!, _ inOptions: LSHandlerOptions) -> OSStatus
```

## Parameters

- `inContentType`: The content type for which the handler options are to be set. The content type is a uniform type identifier (UTI).
- `inOptions`: The handler options to set. For possible values, see [LSHandlerOptions](lshandleroptions.md).

<a id="return_value"></a>

## Return Value

A result code; see [Result Codes](launch_services.md#1661359).

<a id="discussion"></a>

## Discussion

Thread-safe since OS X v10.4.

## See Also

### Deprecated Functions

- [LSGetHandlerOptionsForContentType(\_:)](1445296-lsgethandleroptionsforcontenttyp.md): Deprecated. Gets the handler options for the specified content type.
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
- [LSOpenFromRefSpec(\_:\_:)](1444466-lsopenfromrefspec.md): Deprecated. Opens one or more items with a file-system reference in either their preferred apps or a designated app.
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

# LSSetHandlerOptionsForContentType (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.4+ (deprecated in 10.11)

Sets the handler option for the specified content type.

## Declaration

```objectivec
OSStatus LSSetHandlerOptionsForContentType(CFStringRef inContentType, LSHandlerOptions inOptions);
```

## Parameters

- `inContentType`: The content type for which the handler options are to be set. The content type is a uniform type identifier (UTI).
- `inOptions`: The handler options to set. For possible values, see [LSHandlerOptions](lshandleroptions.md).

<a id="return_value"></a>

## Return Value

A result code; see [Result Codes](launch_services.md#1661359).

<a id="discussion"></a>

## Discussion

Thread-safe since OS X v10.4.

## See Also

### Deprecated Functions

- [LSGetHandlerOptionsForContentType](1445296-lsgethandleroptionsforcontenttyp.md): Deprecated. Gets the handler options for the specified content type.
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
- [LSOpenFromRefSpec](1444466-lsopenfromrefspec.md): Deprecated. Opens one or more items with a file-system reference in either their preferred apps or a designated app.
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
