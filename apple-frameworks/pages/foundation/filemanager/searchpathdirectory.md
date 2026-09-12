> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filemanager/searchpathdirectory](https://developer.apple.com/documentation/foundation/filemanager/searchpathdirectory)

# FileManager.SearchPathDirectory (Swift)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The location of significant directories.

## Declaration

```swift
enum SearchPathDirectory
```

## Mentioned In

- [Using the file system effectively](../using-the-file-system-effectively.md)

<a id="overview"></a>

## Overview

Use these constants with the [init(for:in:appropriateFor:create:)](../url/init%28for_in_appropriatefor_create_%29.md) initializer and the [urls(for:in:)](urls%28for_in_%29.md) and [url(for:in:appropriateFor:create:)](url%28for_in_appropriatefor_create_%29.md) methods of FileManager.

## Topics

### Directory Locations

- [FileManager.SearchPathDirectory.applicationDirectory](searchpathdirectory/applicationdirectory.md): Supported applications (`/Applications`).
- [FileManager.SearchPathDirectory.demoApplicationDirectory](searchpathdirectory/demoapplicationdirectory.md): Unsupported applications and demonstration versions.
- [FileManager.SearchPathDirectory.developerApplicationDirectory](searchpathdirectory/developerapplicationdirectory.md): Developer applications (`/Developer/Applications`).
- [FileManager.SearchPathDirectory.adminApplicationDirectory](searchpathdirectory/adminapplicationdirectory.md): System and network administration applications.
- [FileManager.SearchPathDirectory.libraryDirectory](searchpathdirectory/librarydirectory.md): Various user-visible documentation, support, and configuration files (`/Library`).
- [FileManager.SearchPathDirectory.developerDirectory](searchpathdirectory/developerdirectory.md): Developer resources (`/Developer`).
- [FileManager.SearchPathDirectory.userDirectory](searchpathdirectory/userdirectory.md): User home directories (`/Users`).
- [FileManager.SearchPathDirectory.documentationDirectory](searchpathdirectory/documentationdirectory.md): Documentation.
- [FileManager.SearchPathDirectory.documentDirectory](searchpathdirectory/documentdirectory.md): Document directory.
- [FileManager.SearchPathDirectory.coreServiceDirectory](searchpathdirectory/coreservicedirectory.md): Core services (`System/Library/CoreServices`).
- [FileManager.SearchPathDirectory.autosavedInformationDirectory](searchpathdirectory/autosavedinformationdirectory.md): The user’s autosaved documents (`Library/Autosave Information`).
- [FileManager.SearchPathDirectory.desktopDirectory](searchpathdirectory/desktopdirectory.md): The user’s desktop directory.
- [FileManager.SearchPathDirectory.cachesDirectory](searchpathdirectory/cachesdirectory.md): Discardable cache files (`Library/Caches`).
- [FileManager.SearchPathDirectory.applicationSupportDirectory](searchpathdirectory/applicationsupportdirectory.md): Application support files (`Library/Application Support`).
- [FileManager.SearchPathDirectory.downloadsDirectory](searchpathdirectory/downloadsdirectory.md): The user’s downloads directory.
- [FileManager.SearchPathDirectory.inputMethodsDirectory](searchpathdirectory/inputmethodsdirectory.md): Input Methods `(Library/Input Methods)`.
- [FileManager.SearchPathDirectory.moviesDirectory](searchpathdirectory/moviesdirectory.md): The user’s Movies directory `(~/Movies`).
- [FileManager.SearchPathDirectory.musicDirectory](searchpathdirectory/musicdirectory.md): The user’s Music directory (`~/Music`).
- [FileManager.SearchPathDirectory.picturesDirectory](searchpathdirectory/picturesdirectory.md): The user’s Pictures directory (`~/Pictures`).
- [FileManager.SearchPathDirectory.printerDescriptionDirectory](searchpathdirectory/printerdescriptiondirectory.md): The system’s PPDs directory (`Library/Printers/PPDs`).
- [FileManager.SearchPathDirectory.sharedPublicDirectory](searchpathdirectory/sharedpublicdirectory.md): The user’s Public sharing directory (`~/Public`).
- [FileManager.SearchPathDirectory.preferencePanesDirectory](searchpathdirectory/preferencepanesdirectory.md): The PreferencePanes directory for use with System Preferences (`Library/PreferencePanes`).
- [FileManager.SearchPathDirectory.applicationScriptsDirectory](searchpathdirectory/applicationscriptsdirectory.md): The user scripts folder for the calling application (`~/Library/Application Scripts/<code-signing-id>`.
- [FileManager.SearchPathDirectory.itemReplacementDirectory](searchpathdirectory/itemreplacementdirectory.md): The constant used to create a temporary directory.
- [FileManager.SearchPathDirectory.allApplicationsDirectory](searchpathdirectory/allapplicationsdirectory.md): All directories where applications can be stored.
- [FileManager.SearchPathDirectory.allLibrariesDirectory](searchpathdirectory/alllibrariesdirectory.md): All directories where resources can be stored.
- [FileManager.SearchPathDirectory.trashDirectory](searchpathdirectory/trashdirectory.md): The trash directory.

### Initializers

- [init(rawValue:)](searchpathdirectory/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Supporting Types

- [FileManager.DirectoryEnumerationOptions](directoryenumerationoptions.md): Options for enumerating the contents of directories.
- [FileManager.SearchPathDomainMask](searchpathdomainmask.md): Domain constants specifying base locations to use when you search for significant directories.
- [FileAttributeKey](../fileattributekey.md): Keys in dictionaries used to get and set file attributes.
- [FileAttributeType](../fileattributetype.md): Values representing a file’s type attribute.
- [FileProtectionType](../fileprotectiontype.md): Protection level values that can be associated with a file attribute key.
- [URLFileProtection](../urlfileprotection.md): Protection-level values for a URL resource key.

# NSSearchPathDirectory (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The location of significant directories.

## Declaration

```objectivec
enum NSSearchPathDirectory : NSUInteger;
```

## Mentioned In

- [Using the file system effectively](../using-the-file-system-effectively.md)

<a id="overview"></a>

## Overview

Use these constants with the [init(for:in:appropriateFor:create:)](../url/init%28for_in_appropriatefor_create_%29.md) initializer and the [URLsForDirectory:inDomains:](urls%28for_in_%29.md) and [URLForDirectory:inDomain:appropriateForURL:create:error:](url%28for_in_appropriatefor_create_%29.md) methods of FileManager.

## Topics

### Directory Locations

- [NSApplicationDirectory](searchpathdirectory/applicationdirectory.md): Supported applications (`/Applications`).
- [NSDemoApplicationDirectory](searchpathdirectory/demoapplicationdirectory.md): Unsupported applications and demonstration versions.
- [NSDeveloperApplicationDirectory](searchpathdirectory/developerapplicationdirectory.md): Developer applications (`/Developer/Applications`).
- [NSAdminApplicationDirectory](searchpathdirectory/adminapplicationdirectory.md): System and network administration applications.
- [NSLibraryDirectory](searchpathdirectory/librarydirectory.md): Various user-visible documentation, support, and configuration files (`/Library`).
- [NSDeveloperDirectory](searchpathdirectory/developerdirectory.md): Developer resources (`/Developer`).
- [NSUserDirectory](searchpathdirectory/userdirectory.md): User home directories (`/Users`).
- [NSDocumentationDirectory](searchpathdirectory/documentationdirectory.md): Documentation.
- [NSDocumentDirectory](searchpathdirectory/documentdirectory.md): Document directory.
- [NSCoreServiceDirectory](searchpathdirectory/coreservicedirectory.md): Core services (`System/Library/CoreServices`).
- [NSAutosavedInformationDirectory](searchpathdirectory/autosavedinformationdirectory.md): The user’s autosaved documents (`Library/Autosave Information`).
- [NSDesktopDirectory](searchpathdirectory/desktopdirectory.md): The user’s desktop directory.
- [NSCachesDirectory](searchpathdirectory/cachesdirectory.md): Discardable cache files (`Library/Caches`).
- [NSApplicationSupportDirectory](searchpathdirectory/applicationsupportdirectory.md): Application support files (`Library/Application Support`).
- [NSDownloadsDirectory](searchpathdirectory/downloadsdirectory.md): The user’s downloads directory.
- [NSInputMethodsDirectory](searchpathdirectory/inputmethodsdirectory.md): Input Methods `(Library/Input Methods)`.
- [NSMoviesDirectory](searchpathdirectory/moviesdirectory.md): The user’s Movies directory `(~/Movies`).
- [NSMusicDirectory](searchpathdirectory/musicdirectory.md): The user’s Music directory (`~/Music`).
- [NSPicturesDirectory](searchpathdirectory/picturesdirectory.md): The user’s Pictures directory (`~/Pictures`).
- [NSPrinterDescriptionDirectory](searchpathdirectory/printerdescriptiondirectory.md): The system’s PPDs directory (`Library/Printers/PPDs`).
- [NSSharedPublicDirectory](searchpathdirectory/sharedpublicdirectory.md): The user’s Public sharing directory (`~/Public`).
- [NSPreferencePanesDirectory](searchpathdirectory/preferencepanesdirectory.md): The PreferencePanes directory for use with System Preferences (`Library/PreferencePanes`).
- [NSApplicationScriptsDirectory](searchpathdirectory/applicationscriptsdirectory.md): The user scripts folder for the calling application (`~/Library/Application Scripts/<code-signing-id>`.
- [NSItemReplacementDirectory](searchpathdirectory/itemreplacementdirectory.md): The constant used to create a temporary directory.
- [NSAllApplicationsDirectory](searchpathdirectory/allapplicationsdirectory.md): All directories where applications can be stored.
- [NSAllLibrariesDirectory](searchpathdirectory/alllibrariesdirectory.md): All directories where resources can be stored.
- [NSTrashDirectory](searchpathdirectory/trashdirectory.md): The trash directory.

## See Also

### Supporting Types

- [NSDirectoryEnumerationOptions](directoryenumerationoptions.md): Options for enumerating the contents of directories.
- [NSSearchPathDomainMask](searchpathdomainmask.md): Domain constants specifying base locations to use when you search for significant directories.
- [NSFileAttributeKey](../fileattributekey.md): Keys in dictionaries used to get and set file attributes.
- [NSFileAttributeType](../fileattributetype.md): Values representing a file’s type attribute.
- [NSFileProtectionType](../fileprotectiontype.md): Protection level values that can be associated with a file attribute key.
- [NSURLFileProtectionType](../urlfileprotection.md): Protection-level values for a URL resource key.
