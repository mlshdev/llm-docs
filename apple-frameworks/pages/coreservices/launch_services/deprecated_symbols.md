> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/launch_services/deprecated_symbols](https://developer.apple.com/documentation/coreservices/launch_services/deprecated_symbols)

# Deprecated Symbols (Swift)

**Framework:** Core Services  
**Kind:** API Collection

Apple has deprecated these symbols and no longer recommends using them.

## Topics

### Deprecated Constants

- [kLSItemContentType](../klsitemcontenttype.md): Deprecated. The item’s content type identifier, which is a uniform type identifier string.
- [kLSItemFileType](../klsitemfiletype.md): Deprecated. The item’s file type.
- [kLSItemFileCreator](../klsitemfilecreator.md): Deprecated. The item’s file creator.
- [kLSItemExtension](../klsitemextension.md): Deprecated. The item’s filename extension.
- [kLSItemDisplayName](../klsitemdisplayname.md): Deprecated. The item’s name to display to the user. The display name reflects localization and extension hiding that may be in effect.
- [kLSItemDisplayKind](../klsitemdisplaykind.md): Deprecated. The localized kind string that describes the item’s type.
- [kLSItemRoleHandlerDisplayName](../klsitemrolehandlerdisplayname.md): Deprecated. The display name of the application that is set to handle this item, subject to the role mask.
- [kLSItemIsInvisible](../klsitemisinvisible.md): Deprecated. A Boolean value that indicates the item is hidden from users.
- [kLSItemExtensionIsHidden](../klsitemextensionishidden.md): Deprecated. A Boolean value that indicates the item’s extension is hidden.

### Deprecated Structures

- [LSApplicationParameters](../lsapplicationparameters.md): Deprecated. The specification that defines the app, launch flags, and additional parameters that control how an app launches.
- [LSLaunchFSRefSpec](../lslaunchfsrefspec.md): Deprecated. The specification that defines, by file-system reference, an app to launch, items to open, or both, along with related information.
- [LSItemInfoRecord](../lsiteminforecord.md): Deprecated. The specification that contains requested information about an item.

### Deprecated Variables

- [kLSLaunchHasUntrustedContents](../klslaunchhasuntrustedcontents.md): Deprecated. A request that the system marks the launch items as untrustworthy.
- [kLSLaunchNoParams](../klslaunchnoparams.md): Deprecated. A request that the system uses the app’s information property to determine the launch parameters.
- [kLSLaunchInhibitBGOnly](../klslaunchinhibitbgonly.md): Deprecated. A request that the system fails the launch if the app is background-only.
- [kLSLaunchInClassic](../klslaunchinclassic.md): Deprecated. A request that the system forces the app to launch in the Classic emulation environment.
- [kLSLaunchStartClassic](../klslaunchstartclassic.md): Deprecated. A request that the system starts up the Classic emulation environment if the app requires it. If this flag is not set and the app requires the Classic environment, the launch fails.
- [kLSItemQuarantineProperties](../klsitemquarantineproperties.md): Deprecated.
- [kLSSharedFileListFavoriteItems](../klssharedfilelistfavoriteitems.md): Deprecated.
- [kLSSharedFileListFavoriteVolumes](../klssharedfilelistfavoritevolumes.md): Deprecated.
- [kLSSharedFileListItemBeforeFirst](../klssharedfilelistitembeforefirst.md): Deprecated.
- [kLSSharedFileListItemHidden](../klssharedfilelistitemhidden.md): Deprecated.
- [kLSSharedFileListItemLast](../klssharedfilelistitemlast.md): Deprecated.
- [kLSSharedFileListLoginItemHidden](../klssharedfilelistloginitemhidden.md): Deprecated.
- [kLSSharedFileListRecentApplicationItems](../klssharedfilelistrecentapplicationitems.md): Deprecated.
- [kLSSharedFileListRecentDocumentItems](../klssharedfilelistrecentdocumentitems.md): Deprecated.
- [kLSSharedFileListRecentItemsMaxAmount](../klssharedfilelistrecentitemsmaxamount.md): Deprecated.
- [kLSSharedFileListRecentServerItems](../klssharedfilelistrecentserveritems.md): Deprecated.
- [kLSSharedFileListSessionLoginItems](../klssharedfilelistsessionloginitems.md): Deprecated.
- [kLSSharedFileListVolumesComputerVisible](../klssharedfilelistvolumescomputervisible.md): Deprecated.
- [kLSSharedFileListVolumesNetworkVisible](../klssharedfilelistvolumesnetworkvisible.md): Deprecated.

### Deprecated Functions

- [LSGetHandlerOptionsForContentType(\_:)](../1445296-lsgethandleroptionsforcontenttyp.md): Deprecated. Gets the handler options for the specified content type.
- [LSSetHandlerOptionsForContentType(\_:\_:)](../1447588-lssethandleroptionsforcontenttyp.md): Deprecated. Sets the handler option for the specified content type.
- [LSCopyAllHandlersForURLScheme(\_:)](../1443240-lscopyallhandlersforurlscheme.md): Deprecated. Locates app bundle identifiers for apps capable of handling the specified URL scheme.
- [LSCopyDefaultHandlerForURLScheme(\_:)](../1441725-lscopydefaulthandlerforurlscheme.md): Deprecated. Returns the bundle identifier of the user’s preferred default handler for the specified URL scheme.
- [LSGetApplicationForItem(\_:\_:\_:\_:)](../1446185-lsgetapplicationforitem.md): Deprecated. Locates the preferred app for opening an item with a file-system reference.
- [LSGetApplicationForURL(\_:\_:\_:\_:)](../1445210-lsgetapplicationforurl.md): Deprecated. Locates the preferred app for opening an item with a URL.
- [LSGetApplicationForInfo(\_:\_:\_:\_:\_:\_:)](../1449928-lsgetapplicationforinfo.md): Deprecated. Locates the preferred app for opening items with a specified file type, creator signature, filename extension, or any combination of these characteristics.
- [LSCopyApplicationForMIMEType(\_:\_:\_:)](../1448586-lscopyapplicationformimetype.md): Deprecated. Locates the preferred app for opening items with a specified MIME type.
- [LSCanRefAcceptItem(\_:\_:\_:\_:\_:)](../1442183-lscanrefacceptitem.md): Deprecated. Tests whether an app can accept (open) an item with a file-system reference.
- [LSFindApplicationForInfo(\_:\_:\_:\_:\_:)](../1449588-lsfindapplicationforinfo.md): Deprecated. Locates an app with a specified creator signature, bundle ID, filename, or any combination of these characteristics.
- [LSOpenApplication(\_:\_:)](../1447930-lsopenapplication.md): Deprecated. Launches the specified app.
- [LSOpenItemsWithRole(\_:\_:\_:\_:\_:\_:\_:)](../1449783-lsopenitemswithrole.md): Deprecated. Opens items with an array of file-system references with a specified role.
- [LSOpenURLsWithRole(\_:\_:\_:\_:\_:\_:)](../1448184-lsopenurlswithrole.md): Deprecated. Opens one or more URLs with the specified roles.
- [LSOpenFSRef(\_:\_:)](../1445663-lsopenfsref.md): Deprecated. Opens an item with a file-system reference in the default manner in its preferred app.
- [LSOpenFromRefSpec(\_:\_:)](../1444466-lsopenfromrefspec.md): Deprecated. Opens one or more items with a file-system reference in either their preferred apps or a designated app.
- [LSCopyItemInfoForRef(\_:\_:\_:)](../1445227-lscopyiteminfoforref.md): Deprecated. Obtains requested information about an item with a file-system reference.
- [LSCopyItemInfoForURL(\_:\_:\_:)](../1445685-lscopyiteminfoforurl.md): Deprecated. Obtains requested information about an item with a URL.
- [LSCopyDisplayNameForRef(\_:\_:)](../1442576-lscopydisplaynameforref.md): Deprecated. Obtains the display name for an item with a file-system reference.
- [LSCopyDisplayNameForURL(\_:\_:)](../1446850-lscopydisplaynameforurl.md): Deprecated. Obtains the display name for an item with a URL.
- [LSCopyKindStringForRef(\_:\_:)](../1448593-lscopykindstringforref.md): Deprecated. Obtains the kind string for an item with a file-system reference.
- [LSCopyKindStringForURL(\_:\_:)](../1447481-lscopykindstringforurl.md): Deprecated. Obtains the kind string for an item with a URL.
- [LSCopyKindStringForTypeInfo(\_:\_:\_:\_:)](../1446207-lscopykindstringfortypeinfo.md): Deprecated. Obtains a kind string for items with a specified file type, creator signature, filename extension, or any combination of these characteristics.
- [LSCopyKindStringForMIMEType(\_:\_:)](../1442446-lscopykindstringformimetype.md): Deprecated. Obtains the kind string for a specified MIME type.
- [LSCopyItemAttribute(\_:\_:\_:\_:)](../1445023-lscopyitemattribute.md): Deprecated. Obtains the value of an item’s attribute.
- [LSCopyItemAttributes(\_:\_:\_:\_:)](../1446078-lscopyitemattributes.md): Deprecated. Obtains multiple item attribute values as a dictionary.
- [LSGetExtensionInfo(\_:\_:\_:)](../1446043-lsgetextensioninfo.md): Deprecated. Obtains the starting index of the extension within a filename.
- [LSSetExtensionHiddenForRef(\_:\_:)](../1442766-lssetextensionhiddenforref.md): Deprecated. Specifies whether to show or hide the filename extension for an item with a file-system reference.
- [LSSetExtensionHiddenForURL(\_:\_:)](../1443948-lssetextensionhiddenforurl.md): Deprecated. Specifies whether to show or hide the filename extension for an item with a URL.
- [LSRegisterFSRef(\_:\_:)](../1444582-lsregisterfsref.md): Deprecated. Registers an app with a file-system reference in the Launch Services database.

### Deprecated Result Codes

- [kLSNotInitializedErr](../klsnotinitializederr.md): Not currently used.
- [kLSUnknownTypeErr](../klsunknowntypeerr.md): Not currently used.
- [kLSDataTooOldErr](../klsdatatooolderr.md): Not currently used.
- [kLSNotRegisteredErr](../klsnotregisterederr.md): Not currently used.
- [kLSAppDoesNotClaimTypeErr](../klsappdoesnotclaimtypeerr.md): Not currently used.
- [kLSAppDoesNotSupportSchemeWarning](../klsappdoesnotsupportschemewarning.md): Not currently used.
- [kLSNoRegistrationInfoErr](../klsnoregistrationinfoerr.md): Not currently used.
- [kLSNoClassicEnvironmentErr](../klsnoclassicenvironmenterr.md): Not currently used.

# Deprecated Symbols (Objective-C)

**Framework:** Core Services  
**Kind:** API Collection

Apple has deprecated these symbols and no longer recommends using them.

## Topics

### Deprecated Constants

- [kLSItemContentType](../klsitemcontenttype.md): Deprecated. The item’s content type identifier, which is a uniform type identifier string.
- [kLSItemFileType](../klsitemfiletype.md): Deprecated. The item’s file type.
- [kLSItemFileCreator](../klsitemfilecreator.md): Deprecated. The item’s file creator.
- [kLSItemExtension](../klsitemextension.md): Deprecated. The item’s filename extension.
- [kLSItemDisplayName](../klsitemdisplayname.md): Deprecated. The item’s name to display to the user. The display name reflects localization and extension hiding that may be in effect.
- [kLSItemDisplayKind](../klsitemdisplaykind.md): Deprecated. The localized kind string that describes the item’s type.
- [kLSItemRoleHandlerDisplayName](../klsitemrolehandlerdisplayname.md): Deprecated. The display name of the application that is set to handle this item, subject to the role mask.
- [kLSItemIsInvisible](../klsitemisinvisible.md): Deprecated. A Boolean value that indicates the item is hidden from users.
- [kLSItemExtensionIsHidden](../klsitemextensionishidden.md): Deprecated. A Boolean value that indicates the item’s extension is hidden.

### Deprecated Structures

- [LSApplicationParameters](../lsapplicationparameters.md): Deprecated. The specification that defines the app, launch flags, and additional parameters that control how an app launches.
- [LSLaunchFSRefSpec](../lslaunchfsrefspec.md): Deprecated. The specification that defines, by file-system reference, an app to launch, items to open, or both, along with related information.
- [LSItemInfoRecord](../lsiteminforecord.md): Deprecated. The specification that contains requested information about an item.

### Deprecated Variables

- [kLSLaunchHasUntrustedContents](../1645929-anonymous/klslaunchhasuntrustedcontents.md): Deprecated. A request that the system marks the launch items as untrustworthy.
- [kLSLaunchNoParams](../1645929-anonymous/klslaunchnoparams.md): Deprecated. A request that the system uses the app’s information property to determine the launch parameters.
- [kLSLaunchInhibitBGOnly](../1645929-anonymous/klslaunchinhibitbgonly.md): Deprecated. A request that the system fails the launch if the app is background-only.
- [kLSLaunchInClassic](../1645929-anonymous/klslaunchinclassic.md): Deprecated. A request that the system forces the app to launch in the Classic emulation environment.
- [kLSLaunchStartClassic](../1645929-anonymous/klslaunchstartclassic.md): Deprecated. A request that the system starts up the Classic emulation environment if the app requires it. If this flag is not set and the app requires the Classic environment, the launch fails.
- [kLSItemQuarantineProperties](../klsitemquarantineproperties.md): Deprecated.
- [kLSSharedFileListFavoriteItems](../klssharedfilelistfavoriteitems.md): Deprecated.
- [kLSSharedFileListFavoriteVolumes](../klssharedfilelistfavoritevolumes.md): Deprecated.
- [kLSSharedFileListGlobalLoginItems](../klssharedfilelistgloballoginitems.md): Deprecated.
- [kLSSharedFileListItemBeforeFirst](../klssharedfilelistitembeforefirst.md): Deprecated.
- [kLSSharedFileListItemHidden](../klssharedfilelistitemhidden.md): Deprecated.
- [kLSSharedFileListItemLast](../klssharedfilelistitemlast.md): Deprecated.
- [kLSSharedFileListLoginItemHidden](../klssharedfilelistloginitemhidden.md): Deprecated.
- [kLSSharedFileListRecentApplicationItems](../klssharedfilelistrecentapplicationitems.md): Deprecated.
- [kLSSharedFileListRecentDocumentItems](../klssharedfilelistrecentdocumentitems.md): Deprecated.
- [kLSSharedFileListRecentItemsMaxAmount](../klssharedfilelistrecentitemsmaxamount.md): Deprecated.
- [kLSSharedFileListRecentServerItems](../klssharedfilelistrecentserveritems.md): Deprecated.
- [kLSSharedFileListSessionLoginItems](../klssharedfilelistsessionloginitems.md): Deprecated.
- [kLSSharedFileListVolumesComputerVisible](../klssharedfilelistvolumescomputervisible.md): Deprecated.
- [kLSSharedFileListVolumesIDiskVisible](../klssharedfilelistvolumesidiskvisible.md): Deprecated.
- [kLSSharedFileListVolumesNetworkVisible](../klssharedfilelistvolumesnetworkvisible.md): Deprecated.

### Deprecated Functions

- [LSGetHandlerOptionsForContentType](../1445296-lsgethandleroptionsforcontenttyp.md): Deprecated. Gets the handler options for the specified content type.
- [LSSetHandlerOptionsForContentType](../1447588-lssethandleroptionsforcontenttyp.md): Deprecated. Sets the handler option for the specified content type.
- [LSCopyAllHandlersForURLScheme](../1443240-lscopyallhandlersforurlscheme.md): Deprecated. Locates app bundle identifiers for apps capable of handling the specified URL scheme.
- [LSCopyDefaultHandlerForURLScheme](../1441725-lscopydefaulthandlerforurlscheme.md): Deprecated. Returns the bundle identifier of the user’s preferred default handler for the specified URL scheme.
- [LSGetApplicationForItem](../1446185-lsgetapplicationforitem.md): Deprecated. Locates the preferred app for opening an item with a file-system reference.
- [LSGetApplicationForURL](../1445210-lsgetapplicationforurl.md): Deprecated. Locates the preferred app for opening an item with a URL.
- [LSGetApplicationForInfo](../1449928-lsgetapplicationforinfo.md): Deprecated. Locates the preferred app for opening items with a specified file type, creator signature, filename extension, or any combination of these characteristics.
- [LSCopyApplicationForMIMEType](../1448586-lscopyapplicationformimetype.md): Deprecated. Locates the preferred app for opening items with a specified MIME type.
- [LSCanRefAcceptItem](../1442183-lscanrefacceptitem.md): Deprecated. Tests whether an app can accept (open) an item with a file-system reference.
- [LSFindApplicationForInfo](../1449588-lsfindapplicationforinfo.md): Deprecated. Locates an app with a specified creator signature, bundle ID, filename, or any combination of these characteristics.
- [LSOpenApplication](../1447930-lsopenapplication.md): Deprecated. Launches the specified app.
- [LSOpenItemsWithRole](../1449783-lsopenitemswithrole.md): Deprecated. Opens items with an array of file-system references with a specified role.
- [LSOpenURLsWithRole](../1448184-lsopenurlswithrole.md): Deprecated. Opens one or more URLs with the specified roles.
- [LSOpenFSRef](../1445663-lsopenfsref.md): Deprecated. Opens an item with a file-system reference in the default manner in its preferred app.
- [LSOpenFromRefSpec](../1444466-lsopenfromrefspec.md): Deprecated. Opens one or more items with a file-system reference in either their preferred apps or a designated app.
- [LSCopyItemInfoForRef](../1445227-lscopyiteminfoforref.md): Deprecated. Obtains requested information about an item with a file-system reference.
- [LSCopyItemInfoForURL](../1445685-lscopyiteminfoforurl.md): Deprecated. Obtains requested information about an item with a URL.
- [LSCopyDisplayNameForRef](../1442576-lscopydisplaynameforref.md): Deprecated. Obtains the display name for an item with a file-system reference.
- [LSCopyDisplayNameForURL](../1446850-lscopydisplaynameforurl.md): Deprecated. Obtains the display name for an item with a URL.
- [LSCopyKindStringForRef](../1448593-lscopykindstringforref.md): Deprecated. Obtains the kind string for an item with a file-system reference.
- [LSCopyKindStringForURL](../1447481-lscopykindstringforurl.md): Deprecated. Obtains the kind string for an item with a URL.
- [LSCopyKindStringForTypeInfo](../1446207-lscopykindstringfortypeinfo.md): Deprecated. Obtains a kind string for items with a specified file type, creator signature, filename extension, or any combination of these characteristics.
- [LSCopyKindStringForMIMEType](../1442446-lscopykindstringformimetype.md): Deprecated. Obtains the kind string for a specified MIME type.
- [LSCopyItemAttribute](../1445023-lscopyitemattribute.md): Deprecated. Obtains the value of an item’s attribute.
- [LSCopyItemAttributes](../1446078-lscopyitemattributes.md): Deprecated. Obtains multiple item attribute values as a dictionary.
- [LSGetExtensionInfo](../1446043-lsgetextensioninfo.md): Deprecated. Obtains the starting index of the extension within a filename.
- [LSSetExtensionHiddenForRef](../1442766-lssetextensionhiddenforref.md): Deprecated. Specifies whether to show or hide the filename extension for an item with a file-system reference.
- [LSSetExtensionHiddenForURL](../1443948-lssetextensionhiddenforurl.md): Deprecated. Specifies whether to show or hide the filename extension for an item with a URL.
- [LSRegisterFSRef](../1444582-lsregisterfsref.md): Deprecated. Registers an app with a file-system reference in the Launch Services database.

### Deprecated Result Codes

- [kLSNotInitializedErr](../3074489-anonymous/klsnotinitializederr.md): Not currently used.
- [kLSUnknownTypeErr](../3074489-anonymous/klsunknowntypeerr.md): Not currently used.
- [kLSDataTooOldErr](../3074489-anonymous/klsdatatooolderr.md): Not currently used.
- [kLSNotRegisteredErr](../3074489-anonymous/klsnotregisterederr.md): Not currently used.
- [kLSAppDoesNotClaimTypeErr](../3074489-anonymous/klsappdoesnotclaimtypeerr.md): Not currently used.
- [kLSAppDoesNotSupportSchemeWarning](../3074489-anonymous/klsappdoesnotsupportschemewarning.md): Not currently used.
- [kLSNoRegistrationInfoErr](../3074489-anonymous/klsnoregistrationinfoerr.md): Not currently used.
- [kLSNoClassicEnvironmentErr](../3074489-anonymous/klsnoclassicenvironmenterr.md): Not currently used.
