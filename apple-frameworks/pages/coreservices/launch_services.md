> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/launch_services](https://developer.apple.com/documentation/coreservices/launch_services)

# Launch Services (Swift)

**Framework:** Core Services  
**Kind:** API Collection

Launch and open documents in other apps from your current app process.

<a id="overview"></a>

## Overview

macOS Launch Services is an API that enables a running app to open other apps or their document files, similar to the Finder or the Dock. Using Launch Services, an app can perform such tasks as:

- Open (launch or activate) another app
- Open a document or a URL in another app
- Identify the preferred app for opening a document or URL
- Register information about the kinds of document files and URLs an app can open
- Obtain information for displaying a file or URL on the screen, such as its icon, display name, and kind string
- Maintain and update the contents of the Recent Items menu

Launch Services eliminates apps having to query the Finder to open an app, document, or URL for them. The macOS Finder itself uses Launch Services to perform such tasks. Because the Finder performs no additional processing beyond calling Launch Services, any client using Launch Services for these purposes behaves identically to the Finder.

## Topics

### Locating an App

The functions in this section locate and test the preferred app for opening an item or a family of items, or the app that matches a set of defining characteristics.

- [LSCopyDefaultApplicationURLForURL(\_:\_:\_:)](1448824-lscopydefaultapplicationurlforur.md): Deprecated. Returns the app that opens an item.
- [LSCopyDefaultApplicationURLForContentType(\_:\_:\_:)](1447734-lscopydefaultapplicationurlforco.md): Deprecated. Returns the app that opens a content type.
- [LSCopyApplicationURLsForURL(\_:\_:)](1445148-lscopyapplicationurlsforurl.md): Deprecated. Locates all known apps suitable for opening an item for the specified URL.
- [LSCanURLAcceptURL(\_:\_:\_:\_:\_:)](1441854-lscanurlaccepturl.md): Tests whether an app can accept (open) an item for a URL.
- [LSCopyApplicationURLsForBundleIdentifier(\_:\_:)](1449290-lscopyapplicationurlsforbundleid.md): Deprecated. Locates all URLs for apps that correspond to the specified bundle identifier.

### Opening Items

The functions in this section open a designated item or a collection of items, or launch or activate a designated app.

- [LSOpenCFURLRef(\_:\_:)](1442850-lsopencfurlref.md): Opens an item for a URL in the default manner in its preferred app.
- [LSOpenFromURLSpec(\_:\_:)](1441986-lsopenfromurlspec.md): Opens one or more items for a URL in the preferred apps or a designated app.
- [LSLaunchURLSpec](lslaunchurlspec.md): The specification for launching an app, opening items, or both, along with related information.
- [LSSharedFileList](lssharedfilelist.md): A persistent list of file-system objects.
- [LSSharedFileListItem](lssharedfilelistitem.md): A file-system object in the shared file list.

### Registering an App

The functions in this section register an app in the Launch Services database.

- [LSRegisterURL(\_:\_:)](1446350-lsregisterurl.md): Registers an app, using a URL, in the Launch Services database.

### Working with Role Handlers

The functions in this section get and set bundle identifiers for handlers of specified content types and URL schemes.

- [LSCopyAllRoleHandlersForContentType(\_:\_:)](1448020-lscopyallrolehandlersforcontentt.md): Deprecated. Locates an array of bundle identifiers for apps capable of handling a specified content type with the specified roles.
- [LSCopyDefaultRoleHandlerForContentType(\_:\_:)](1449868-lscopydefaultrolehandlerforconte.md): Deprecated. Returns the bundle identifier of the user’s preferred default handler for the specified content type with the specified role.
- [LSSetDefaultRoleHandlerForContentType(\_:\_:\_:)](1444955-lssetdefaultrolehandlerforconten.md): Deprecated. Sets the user’s preferred default handler for the specified content type in the specified roles.
- [LSSetDefaultHandlerForURLScheme(\_:\_:)](1447760-lssetdefaulthandlerforurlscheme.md): Deprecated. Sets the user’s preferred default handler for the specified URL scheme.
- [LSRolesMask](lsrolesmask.md): The specification that sets the desired role or roles for an app to claim for an item or a family of items.

### Understanding the Quarantine Properties Dictionary

- [kLSQuarantineAgentBundleIdentifierKey](klsquarantineagentbundleidentifierkey.md): The bundle identifier of the quarantining agent.
- [kLSQuarantineAgentNameKey](klsquarantineagentnamekey.md): The app name of the quarantining agent.
- [kLSQuarantineTimeStampKey](klsquarantinetimestampkey.md): The date and time of the item’s quarantine.
- [kLSQuarantineTypeKey](klsquarantinetypekey.md): A symbolic string identifying the reason for the quarantine.
- [kLSQuarantineDataURLKey](klsquarantinedataurlkey.md): The actual URL of the quarantined item.
- [kLSQuarantineOriginURLKey](klsquarantineoriginurlkey.md): The URL of the resource originally hosting the quarantined item.

### Identifying the Quarantine Type

- [kLSQuarantineTypeCalendarEventAttachment](klsquarantinetypecalendareventattachment.md): The type when the data is an attachment from a calendar event.
- [kLSQuarantineTypeEmailAttachment](klsquarantinetypeemailattachment.md): The type when the data is an attachment from an email message.
- [kLSQuarantineTypeInstantMessageAttachment](klsquarantinetypeinstantmessageattachment.md): The type when the data is an attachment from a message.
- [kLSQuarantineTypeOtherAttachment](klsquarantinetypeotherattachment.md): The type when the data is an attachment from a generic source.
- [kLSQuarantineTypeOtherDownload](klsquarantinetypeotherdownload.md): The type when the data is from a download.
- [kLSQuarantineTypeWebDownload](klsquarantinetypewebdownload.md): The type when the data is from a website download.

### Constants

This section describes the constants in the Launch Services API.

- [LSLaunchFlags](lslaunchflags.md): The specification for launching an app.
- [LSAcceptanceFlags](lsacceptanceflags.md): The specification that determines whether an app can accept (open) an item.
- [LSItemInfoFlags](lsiteminfoflags.md): The specification that provides information about an item.
- [LSHandlerOptions](lshandleroptions.md): The specification that controls the selection of handlers.
- [LSRequestedInfo](lsrequestedinfo.md): The specification that controls which information to obtain about an item.
- [Unknown Type or Creator](launch_services/1469201-unknown_type_or_creator.md): Represents an unknown file type or creator.

### Result Codes

- [kLSAppInTrashErr](klsappintrasherr.md): The app can’t run because it’s inside a Trash folder.
- [kLSUnknownErr](klsunknownerr.md): An unknown error has occurred.
- [kLSNotAnApplicationErr](klsnotanapplicationerr.md): The item for registration is not an app.
- [kLSDataUnavailableErr](klsdataunavailableerr.md): Data of the desired type is not available (for example, there is no kind string).
- [kLSApplicationNotFoundErr](klsapplicationnotfounderr.md): No app in the Launch Services database matches the input criteria.
- [kLSDataErr](klsdataerr.md): Improper data structure.
- [kLSLaunchInProgressErr](klslaunchinprogresserr.md): A launch of the app is already in progress.
- [kLSServerCommunicationErr](klsservercommunicationerr.md): There is a problem communicating with the server process that maintains the Launch Services database.
- [kLSCannotSetInfoErr](klscannotsetinfoerr.md): The system can’t hide the filename extension.
- [kLSIncompatibleSystemVersionErr](klsincompatiblesystemversionerr.md): The requested app can’t run on the current macOS version.
- [kLSNoLaunchPermissionErr](klsnolaunchpermissionerr.md): The user doesn’t have permission to launch the app on a managed network.
- [kLSNoExecutableErr](klsnoexecutableerr.md): The executable file is missing or has an unusable format.
- [kLSMultipleSessionsNotSupportedErr](klsmultiplesessionsnotsupportederr.md): The requested app can’t run simultaneously in two different user sessions.

### Deprecated

- [Deprecated Symbols](launch_services/deprecated_symbols.md): Apple has deprecated these symbols and no longer recommends using them.

# Launch Services (Objective-C)

**Framework:** Core Services  
**Kind:** API Collection

Launch and open documents in other apps from your current app process.

<a id="overview"></a>

## Overview

macOS Launch Services is an API that enables a running app to open other apps or their document files, similar to the Finder or the Dock. Using Launch Services, an app can perform such tasks as:

- Open (launch or activate) another app
- Open a document or a URL in another app
- Identify the preferred app for opening a document or URL
- Register information about the kinds of document files and URLs an app can open
- Obtain information for displaying a file or URL on the screen, such as its icon, display name, and kind string
- Maintain and update the contents of the Recent Items menu

Launch Services eliminates apps having to query the Finder to open an app, document, or URL for them. The macOS Finder itself uses Launch Services to perform such tasks. Because the Finder performs no additional processing beyond calling Launch Services, any client using Launch Services for these purposes behaves identically to the Finder.

## Topics

### Locating an App

The functions in this section locate and test the preferred app for opening an item or a family of items, or the app that matches a set of defining characteristics.

- [LSCopyDefaultApplicationURLForURL](1448824-lscopydefaultapplicationurlforur.md): Deprecated. Returns the app that opens an item.
- [LSCopyDefaultApplicationURLForContentType](1447734-lscopydefaultapplicationurlforco.md): Deprecated. Returns the app that opens a content type.
- [LSCopyApplicationURLsForURL](1445148-lscopyapplicationurlsforurl.md): Deprecated. Locates all known apps suitable for opening an item for the specified URL.
- [LSCanURLAcceptURL](1441854-lscanurlaccepturl.md): Tests whether an app can accept (open) an item for a URL.
- [LSCopyApplicationURLsForBundleIdentifier](1449290-lscopyapplicationurlsforbundleid.md): Deprecated. Locates all URLs for apps that correspond to the specified bundle identifier.

### Opening Items

The functions in this section open a designated item or a collection of items, or launch or activate a designated app.

- [LSOpenCFURLRef](1442850-lsopencfurlref.md): Opens an item for a URL in the default manner in its preferred app.
- [LSOpenFromURLSpec](1441986-lsopenfromurlspec.md): Opens one or more items for a URL in the preferred apps or a designated app.
- [LSLaunchURLSpec](lslaunchurlspec.md): The specification for launching an app, opening items, or both, along with related information.
- [LSSharedFileListRef](lssharedfilelistref.md): A persistent list of file-system objects.
- [LSSharedFileListItemRef](lssharedfilelistitemref.md): A file-system object in the shared file list.

### Registering an App

The functions in this section register an app in the Launch Services database.

- [LSRegisterURL](1446350-lsregisterurl.md): Registers an app, using a URL, in the Launch Services database.

### Working with Role Handlers

The functions in this section get and set bundle identifiers for handlers of specified content types and URL schemes.

- [LSCopyAllRoleHandlersForContentType](1448020-lscopyallrolehandlersforcontentt.md): Deprecated. Locates an array of bundle identifiers for apps capable of handling a specified content type with the specified roles.
- [LSCopyDefaultRoleHandlerForContentType](1449868-lscopydefaultrolehandlerforconte.md): Deprecated. Returns the bundle identifier of the user’s preferred default handler for the specified content type with the specified role.
- [LSSetDefaultRoleHandlerForContentType](1444955-lssetdefaultrolehandlerforconten.md): Deprecated. Sets the user’s preferred default handler for the specified content type in the specified roles.
- [LSSetDefaultHandlerForURLScheme](1447760-lssetdefaulthandlerforurlscheme.md): Deprecated. Sets the user’s preferred default handler for the specified URL scheme.
- [LSRolesMask](lsrolesmask.md): The specification that sets the desired role or roles for an app to claim for an item or a family of items.

### Understanding the Quarantine Properties Dictionary

- [kLSQuarantineAgentBundleIdentifierKey](klsquarantineagentbundleidentifierkey.md): The bundle identifier of the quarantining agent.
- [kLSQuarantineAgentNameKey](klsquarantineagentnamekey.md): The app name of the quarantining agent.
- [kLSQuarantineTimeStampKey](klsquarantinetimestampkey.md): The date and time of the item’s quarantine.
- [kLSQuarantineTypeKey](klsquarantinetypekey.md): A symbolic string identifying the reason for the quarantine.
- [kLSQuarantineDataURLKey](klsquarantinedataurlkey.md): The actual URL of the quarantined item.
- [kLSQuarantineOriginURLKey](klsquarantineoriginurlkey.md): The URL of the resource originally hosting the quarantined item.

### Identifying the Quarantine Type

- [kLSQuarantineTypeCalendarEventAttachment](klsquarantinetypecalendareventattachment.md): The type when the data is an attachment from a calendar event.
- [kLSQuarantineTypeEmailAttachment](klsquarantinetypeemailattachment.md): The type when the data is an attachment from an email message.
- [kLSQuarantineTypeInstantMessageAttachment](klsquarantinetypeinstantmessageattachment.md): The type when the data is an attachment from a message.
- [kLSQuarantineTypeOtherAttachment](klsquarantinetypeotherattachment.md): The type when the data is an attachment from a generic source.
- [kLSQuarantineTypeOtherDownload](klsquarantinetypeotherdownload.md): The type when the data is from a download.
- [kLSQuarantineTypeWebDownload](klsquarantinetypewebdownload.md): The type when the data is from a website download.

### Constants

This section describes the constants in the Launch Services API.

- [LSLaunchFlags](lslaunchflags.md): The specification for launching an app.
- [LSAcceptanceFlags](lsacceptanceflags.md): The specification that determines whether an app can accept (open) an item.
- [LSItemInfoFlags](lsiteminfoflags.md): The specification that provides information about an item.
- [LSHandlerOptions](lshandleroptions.md): The specification that controls the selection of handlers.
- [LSRequestedInfo](lsrequestedinfo.md): The specification that controls which information to obtain about an item.
- [Invalid Extension Index](launch_services/invalid_extension_index.md): Represents an invalid filename extension index.
- [Unknown Type or Creator](1469201-unknown_type_or_creator.md): Represents an unknown file type or creator.

### Result Codes

- [kLSAppInTrashErr](3074489-anonymous/klsappintrasherr.md): The app can’t run because it’s inside a Trash folder.
- [kLSUnknownErr](3074489-anonymous/klsunknownerr.md): An unknown error has occurred.
- [kLSNotAnApplicationErr](3074489-anonymous/klsnotanapplicationerr.md): The item for registration is not an app.
- [kLSDataUnavailableErr](3074489-anonymous/klsdataunavailableerr.md): Data of the desired type is not available (for example, there is no kind string).
- [kLSApplicationNotFoundErr](3074489-anonymous/klsapplicationnotfounderr.md): No app in the Launch Services database matches the input criteria.
- [kLSDataErr](3074489-anonymous/klsdataerr.md): Improper data structure.
- [kLSLaunchInProgressErr](3074489-anonymous/klslaunchinprogresserr.md): A launch of the app is already in progress.
- [kLSServerCommunicationErr](3074489-anonymous/klsservercommunicationerr.md): There is a problem communicating with the server process that maintains the Launch Services database.
- [kLSCannotSetInfoErr](3074489-anonymous/klscannotsetinfoerr.md): The system can’t hide the filename extension.
- [kLSIncompatibleSystemVersionErr](3074489-anonymous/klsincompatiblesystemversionerr.md): The requested app can’t run on the current macOS version.
- [kLSNoLaunchPermissionErr](3074489-anonymous/klsnolaunchpermissionerr.md): The user doesn’t have permission to launch the app on a managed network.
- [kLSNoExecutableErr](3074489-anonymous/klsnoexecutableerr.md): The executable file is missing or has an unusable format.
- [kLSMultipleSessionsNotSupportedErr](3074489-anonymous/klsmultiplesessionsnotsupportederr.md): The requested app can’t run simultaneously in two different user sessions.

### Deprecated

- [Deprecated Symbols](launch_services/deprecated_symbols.md): Apple has deprecated these symbols and no longer recommends using them.
