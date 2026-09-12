> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filemanager](https://developer.apple.com/documentation/foundation/filemanager)

# FileManager (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A convenient interface to the contents of the file system, and the primary means of interacting with it.

## Declaration

```swift
class FileManager
```

## Mentioned In

- [About Apple File System](about-apple-file-system.md)
- [Using the file system effectively](using-the-file-system-effectively.md)
- [Optimizing Your App’s Data for iCloud Backup](optimizing-your-app-s-data-for-icloud-backup.md)

<a id="overview"></a>

## Overview

A file manager object lets you examine the contents of the file system and make changes to it. The [FileManager](filemanager.md) class provides convenient access to a shared file manager object that is suitable for most types of file-related manipulations. A file manager object is typically your primary mode of interaction with the file system. You use it to locate, create, copy, and move files and directories. You also use it to get information about a file or directory or change some of its attributes.

When specifying the location of files, you can use either [NSURL](nsurl.md) or [NSString](nsstring.md) objects. The use of the [NSURL](nsurl.md) class is generally preferred for specifying file-system items because URLs can convert path information to a more efficient representation internally. You can also obtain a bookmark from an [NSURL](nsurl.md) object, which is similar to an alias and offers a more sure way of locating the file or directory later.

If you are moving, copying, linking, or removing files or directories, you can use a delegate in conjunction with a file manager object to manage those operations. The delegate’s role is to affirm the operation and to decide whether to proceed when errors occur. In macOS 10.7 and later, the delegate must conform to the [FileManagerDelegate](filemanagerdelegate.md) protocol.

In iOS 5.0 and later and in macOS 10.7 and later, [FileManager](filemanager.md) includes methods for managing items stored in iCloud. Files and directories tagged for cloud storage are synced to iCloud so that they can be made available to the user’s iOS devices and Macintosh computers. Changes to an item in one location are propagated to all other locations to ensure the items stay in sync.

<a id="Sync-control"></a>

### Sync control

A [package](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFBundles/DocumentPackages/DocumentPackages.html#//apple_ref/doc/uid/10000123i-CH106-SW1) is a directory that the system presents as a single file to the person using the device. Apps with documents that contain multiple files can use packages to manage contents like media assets. In iOS 26 and macOS 26 and later, [FileManager](filemanager.md) introduces methods for controlling how a file provider syncs these items. By pausing sync when your app opens a package and resuming when it closes, your app can prevent the file provider from changing the contents of the package in unexpected ways, which potentially leaves the document in an inconsistent state. You can also use this pause and resume API on regular “flat” files.

<a id="Threading-considerations"></a>

### Threading considerations

The methods of the shared [FileManager](filemanager.md) object can be called from multiple threads safely. However, if you use a delegate to receive notifications about the status of move, copy, remove, and link operations, you should create a unique instance of the file manager object, assign your delegate to that object, and use that file manager to initiate your operations.

## Topics

### Creating a file manager

- [init(authorization:)](filemanager/init%28authorization_%29.md): Initializes a file manager object that is authorized to perform privileged file system operations.
- [default](filemanager/default.md): The shared file manager object for the process.

### Accessing user directories

- [homeDirectoryForCurrentUser](filemanager/homedirectoryforcurrentuser.md): The home directory for the current user.
- [NSHomeDirectory()](nshomedirectory%28%29.md): Returns the path to either the user’s or application’s home directory, depending on the platform.
- [NSUserName()](nsusername%28%29.md): Returns the logon name of the current user.
- [NSFullUserName()](nsfullusername%28%29.md): Returns a string containing the full name of the current user.
- [homeDirectory(forUser:)](filemanager/homedirectory%28foruser_%29.md): Returns the home directory for the specified user.
- [NSHomeDirectoryForUser(\_:)](nshomedirectoryforuser%28__%29.md): Returns the path to a given user’s home directory.
- [temporaryDirectory](filemanager/temporarydirectory.md): The temporary directory for the current user.
- [NSTemporaryDirectory()](nstemporarydirectory%28%29.md): Returns the path of the temporary directory for the current user.

### Locating system directories

- [url(for:in:appropriateFor:create:)](filemanager/url%28for_in_appropriatefor_create_%29.md): Locates and optionally creates the specified common directory in a domain.
- [urls(for:in:)](filemanager/urls%28for_in_%29.md): Returns an array of URLs for the specified common directory in the requested domains.
- [NSSearchPathForDirectoriesInDomains(\_:\_:\_:)](nssearchpathfordirectoriesindomains%28______%29.md): Creates a list of directory search paths.
- [NSOpenStepRootDirectory()](nsopensteprootdirectory%28%29.md): Returns the root directory of the user’s system.

### Locating application group container directories

- [containerURL(forSecurityApplicationGroupIdentifier:)](filemanager/containerurl%28forsecurityapplicationgroupidentifier_%29.md): Returns the container directory associated with the specified security application group identifier.
- [App Groups Entitlement](../bundleresources/entitlements/com.apple.security.application-groups.md): A list of identifiers specifying the groups your app belongs to.

### Discovering directory contents

- [contentsOfDirectory(at:includingPropertiesForKeys:options:)](filemanager/contentsofdirectory%28at_includingpropertiesforkeys_options_%29.md): Performs a shallow search of the specified directory and returns URLs for the contained items.
- [contentsOfDirectory(atPath:)](filemanager/contentsofdirectory%28atpath_%29.md): Performs a shallow search of the specified directory and returns the paths of any contained items.
- [enumerator(at:includingPropertiesForKeys:options:errorHandler:)](filemanager/enumerator%28at_includingpropertiesforkeys_options_errorhandler_%29.md): Returns a directory enumerator object that can be used to perform a deep enumeration of the directory at the specified URL.
- [enumerator(atPath:)](filemanager/enumerator%28atpath_%29.md): Returns a directory enumerator object that can be used to perform a deep enumeration of the directory at the specified path.
- [FileManager.DirectoryEnumerator](filemanager/directoryenumerator.md): An object that enumerates the contents of a directory.
- [mountedVolumeURLs(includingResourceValuesForKeys:options:)](filemanager/mountedvolumeurls%28includingresourcevaluesforkeys_options_%29.md): Returns an array of URLs that identify the mounted volumes available on the device.
- [FileManager.VolumeEnumerationOptions](filemanager/volumeenumerationoptions.md): Options for enumerating mounted volumes with the [mountedVolumeURLs(includingResourceValuesForKeys:options:)](filemanager/mountedvolumeurls%28includingresourcevaluesforkeys_options_%29.md) method.
- [subpathsOfDirectory(atPath:)](filemanager/subpathsofdirectory%28atpath_%29.md): Performs a deep enumeration of the specified directory and returns the paths of all of the contained subdirectories.
- [subpaths(atPath:)](filemanager/subpaths%28atpath_%29.md): Returns an array of strings identifying the paths for all items in the specified directory.

### Creating and deleting items

- [createDirectory(at:withIntermediateDirectories:attributes:)](filemanager/createdirectory%28at_withintermediatedirectories_attributes_%29.md): Creates a directory with the given attributes at the specified URL.
- [createDirectory(atPath:withIntermediateDirectories:attributes:)](filemanager/createdirectory%28atpath_withintermediatedirectories_attributes_%29.md): Creates a directory with given attributes at the specified path.
- [createFile(atPath:contents:attributes:)](filemanager/createfile%28atpath_contents_attributes_%29.md): Creates a file with the specified content and attributes at the given location.
- [removeItem(at:)](filemanager/removeitem%28at_%29.md): Removes the file or directory at the specified URL.
- [removeItem(atPath:)](filemanager/removeitem%28atpath_%29.md): Removes the file or directory at the specified path.
- [trashItem(at:resultingItemURL:)](filemanager/trashitem%28at_resultingitemurl_%29.md): Moves an item to the trash.

### Replacing items

- [replaceItemAt(\_:withItemAt:backupItemName:options:)](filemanager/replaceitemat%28__withitemat_backupitemname_options_%29.md): Replaces the contents of the item at the specified URL in a manner that ensures no data loss occurs.
- [replaceItem(at:withItemAt:backupItemName:options:resultingItemURL:)](filemanager/replaceitem%28at_withitemat_backupitemname_options_resultingitemurl_%29.md): Replaces the contents of the item at the specified URL in a manner that ensures no data loss occurs.
- [FileManager.ItemReplacementOptions](filemanager/itemreplacementoptions.md): Options for specifying the behavior of file replacement operations.

### Moving and copying items

- [copyItem(at:to:)](filemanager/copyitem%28at_to_%29.md): Copies the file at the specified URL to a new location synchronously.
- [copyItem(atPath:toPath:)](filemanager/copyitem%28atpath_topath_%29.md): Copies the item at the specified path to a new location synchronously.
- [moveItem(at:to:)](filemanager/moveitem%28at_to_%29.md): Moves the file or directory at the specified URL to a new location synchronously.
- [moveItem(atPath:toPath:)](filemanager/moveitem%28atpath_topath_%29.md): Moves the file or directory at the specified path to a new location synchronously.

### Managing iCloud-based items

- [ubiquityIdentityToken](filemanager/ubiquityidentitytoken.md): An opaque token that represents the current user’s iCloud Drive Documents identity.
- [url(forUbiquityContainerIdentifier:)](filemanager/url%28forubiquitycontaineridentifier_%29.md): Returns the URL for the iCloud container associated with the specified identifier and establishes access to that container.
- [isUbiquitousItem(at:)](filemanager/isubiquitousitem%28at_%29.md): Returns a Boolean indicating whether the item is targeted for storage in iCloud.
- [setUbiquitous(\_:itemAt:destinationURL:)](filemanager/setubiquitous%28__itemat_destinationurl_%29.md): Indicates whether the item at the specified URL should be stored in iCloud.
- [startDownloadingUbiquitousItem(at:)](filemanager/startdownloadingubiquitousitem%28at_%29.md): Starts downloading (if necessary) the specified item to the local system.
- [evictUbiquitousItem(at:)](filemanager/evictubiquitousitem%28at_%29.md): Removes the local copy of the specified item that’s stored in iCloud.
- [url(forPublishingUbiquitousItemAt:expiration:)](filemanager/url%28forpublishingubiquitousitemat_expiration_%29.md): Returns a URL that can be emailed to users to allow them to download a copy of a flat file item from iCloud.

### Accessing file provider services

- [getFileProviderServicesForItem(at:completionHandler:)](filemanager/getfileproviderservicesforitem%28at_completionhandler_%29.md): Returns the services provided by the File Provider extension that manages the item at the given URL.
- [NSFileProviderService](nsfileproviderservice.md): A service that provides a custom communication channel between your app and a File Provider extension.
- [NSFileProviderServiceName](nsfileproviderservicename.md): The name used to identify a File Provider service.

### Controlling file provider synchronization

- [NSFileManagerSupportedSyncControls](nsfilemanagersupportedsynccontrols.md): An option set of the sync controls available for an item.
- [pauseSyncForUbiquitousItem(at:completionHandler:)](filemanager/pausesyncforubiquitousitem%28at_completionhandler_%29.md): Asynchronously pauses sync of an item at the given URL.
- [resumeSyncForUbiquitousItem(at:with:completionHandler:)](filemanager/resumesyncforubiquitousitem%28at_with_completionhandler_%29.md): Asynchronously resumes the sync on a paused item using the given resume behavior.
- [NSFileManagerResumeSyncBehavior](nsfilemanagerresumesyncbehavior.md): The behaviors the file manager can apply to resolve conflicts when resuming a sync.
- [fetchLatestRemoteVersionOfItem(at:completionHandler:)](filemanager/fetchlatestremoteversionofitem%28at_completionhandler_%29.md): Asynchronously fetches the latest remote version of a given item from the server.
- [NSFileVersion](nsfileversion.md): A snapshot of a file at a specific point in time.
- [uploadLocalVersionOfUbiquitousItem(at:withConflictResolutionPolicy:completionHandler:)](filemanager/uploadlocalversionofubiquitousitem%28at_withconflictresolutionpolicy_completionhandler_%29.md): Asynchronously uploads the local version of the item using the provided conflict resolution policy.
- [NSFileManagerUploadLocalVersionConflictPolicy](nsfilemanageruploadlocalversionconflictpolicy.md): The policies the file manager can apply to resolve conflicts when uploading a local version of a file.

### Creating symbolic and hard links

- [createSymbolicLink(at:withDestinationURL:)](filemanager/createsymboliclink%28at_withdestinationurl_%29.md): Creates a symbolic link at the specified URL that points to an item at the given URL.
- [createSymbolicLink(atPath:withDestinationPath:)](filemanager/createsymboliclink%28atpath_withdestinationpath_%29.md): Creates a symbolic link that points to the specified destination.
- [linkItem(at:to:)](filemanager/linkitem%28at_to_%29.md): Creates a hard link between the items at the specified URLs.
- [linkItem(atPath:toPath:)](filemanager/linkitem%28atpath_topath_%29.md): Creates a hard link between the items at the specified paths.
- [destinationOfSymbolicLink(atPath:)](filemanager/destinationofsymboliclink%28atpath_%29.md): Returns the path of the item pointed to by a symbolic link.

### Determining access to files

- [fileExists(atPath:)](filemanager/fileexists%28atpath_%29.md): Returns a Boolean value that indicates whether a file or directory exists at a specified path.
- [fileExists(atPath:isDirectory:)](filemanager/fileexists%28atpath_isdirectory_%29.md): Returns a Boolean value that indicates whether a file or directory exists at a specified path.
- [isReadableFile(atPath:)](filemanager/isreadablefile%28atpath_%29.md): Returns a Boolean value that indicates whether the invoking object appears able to read a specified file.
- [isWritableFile(atPath:)](filemanager/iswritablefile%28atpath_%29.md): Returns a Boolean value that indicates whether the invoking object appears able to write to a specified file.
- [isExecutableFile(atPath:)](filemanager/isexecutablefile%28atpath_%29.md): Returns a Boolean value that indicates whether the operating system appears able to execute a specified file.
- [isDeletableFile(atPath:)](filemanager/isdeletablefile%28atpath_%29.md): Returns a Boolean value that indicates whether the invoking object appears able to delete a specified file.

### Getting and setting attributes

- [componentsToDisplay(forPath:)](filemanager/componentstodisplay%28forpath_%29.md): Returns an array of strings representing the user-visible components of a given path.
- [displayName(atPath:)](filemanager/displayname%28atpath_%29.md): Returns the display name of the file or directory at a specified path.
- [attributesOfItem(atPath:)](filemanager/attributesofitem%28atpath_%29.md): Returns the attributes of the item at a given path.
- [attributesOfFileSystem(forPath:)](filemanager/attributesoffilesystem%28forpath_%29.md): Returns a dictionary that describes the attributes of the mounted file system on which a given path resides.
- [setAttributes(\_:ofItemAtPath:)](filemanager/setattributes%28__ofitematpath_%29.md): Sets the attributes of the specified file or directory.

### Getting and comparing file contents

- [contents(atPath:)](filemanager/contents%28atpath_%29.md): Returns the contents of the file at the specified path.
- [contentsEqual(atPath:andPath:)](filemanager/contentsequal%28atpath_andpath_%29.md): Returns a Boolean value that indicates whether the files or directories in specified paths have the same contents.

### Getting the relationship between items

- [getRelationship(\_:ofDirectoryAt:toItemAt:)](filemanager/getrelationship%28__ofdirectoryat_toitemat_%29.md): Determines the type of relationship that exists between a directory and an item.
- [getRelationship(\_:of:in:toItemAt:)](filemanager/getrelationship%28__of_in_toitemat_%29.md): Determines the type of relationship that exists between a system directory and the specified item.
- [FileManager.URLRelationship](filemanager/urlrelationship.md): Constants indicating the relationship between a directory and an item.

### Converting file paths to strings

- [fileSystemRepresentation(withPath:)](filemanager/filesystemrepresentation%28withpath_%29.md): Returns a C-string representation of a given path that properly encodes Unicode strings for use by the file system.
- [string(withFileSystemRepresentation:length:)](filemanager/string%28withfilesystemrepresentation_length_%29.md): Returns an [NSString](nsstring.md) object whose contents are derived from the specified C-string path.

### Managing the delegate

- [delegate](filemanager/delegate.md): The delegate of the file manager object.

### Managing the current directory

- [changeCurrentDirectoryPath(\_:)](filemanager/changecurrentdirectorypath%28__%29.md): Changes the path of the current working directory to the specified path.
- [currentDirectoryPath](filemanager/currentdirectorypath.md): The path to the program’s current directory.

### Unmounting volumes

- [unmountVolume(at:options:completionHandler:)](filemanager/unmountvolume%28at_options_completionhandler_%29.md): Starts the process of unmounting the specified volume.
- [FileManager.UnmountOptions](filemanager/unmountoptions.md): Options that specify the behavior of an unmount operation.
- [NSFileManagerUnmountDissentingProcessIdentifierErrorKey](nsfilemanagerunmountdissentingprocessidentifiererrorkey.md): The process identifier of the process that prevented a volume from unmounting.

### Working with HFS file types

- [NSFileTypeForHFSTypeCode(\_:)](nsfiletypeforhfstypecode%28__%29.md): Returns a string encoding a file type code.
- [NSHFSTypeCodeFromFileType(\_:)](nshfstypecodefromfiletype%28__%29.md): Returns a file type code.
- [NSHFSTypeOfFile(\_:)](nshfstypeoffile%28__%29.md): Returns a string encoding a file type.

### Determining resource fork support

- [NSFoundationVersionWithFileManagerResourceForkSupport](nsfoundationversionwithfilemanagerresourceforksupport.md): The version of the Foundation framework in which `NSFileManager` first supported resource forks.

### Working with notifications

- [NSUbiquityIdentityDidChange](nsnotification/name-swift.struct/nsubiquityidentitydidchange.md): Sent after the iCloud (“ubiquity”) identity has changed.

### Working with notification messages

- [FileManager.UbiquityIdentityDidChangeMessage](filemanager/ubiquityidentitydidchangemessage.md): A message a file manager sends after the iCloud (“ubiquity”) identity changes.

### Supporting Types

- [FileManager.DirectoryEnumerationOptions](filemanager/directoryenumerationoptions.md): Options for enumerating the contents of directories.
- [FileManager.SearchPathDirectory](filemanager/searchpathdirectory.md): The location of significant directories.
- [FileManager.SearchPathDomainMask](filemanager/searchpathdomainmask.md): Domain constants specifying base locations to use when you search for significant directories.
- [FileAttributeKey](fileattributekey.md): Keys in dictionaries used to get and set file attributes.
- [FileAttributeType](fileattributetype.md): Values representing a file’s type attribute.
- [FileProtectionType](fileprotectiontype.md): Protection level values that can be associated with a file attribute key.
- [URLFileProtection](urlfileprotection.md): Protection-level values for a URL resource key.

### Deprecated Methods

- [changeFileAttributes(\_:atPath:)](filemanager/changefileattributes%28__atpath_%29.md): Deprecated. Changes the attributes of a given file or directory.
- [fileAttributes(atPath:traverseLink:)](filemanager/fileattributes%28atpath_traverselink_%29.md): Deprecated. Returns a dictionary that describes the POSIX attributes of the file specified at a given.
- [fileSystemAttributes(atPath:)](filemanager/filesystemattributes%28atpath_%29.md): Deprecated. Returns a dictionary that describes the attributes of the mounted file system on which a given path resides.
- [directoryContents(atPath:)](filemanager/directorycontents%28atpath_%29.md): Deprecated. Returns the directories and files (including symbolic links) contained in a given directory.
- [createDirectory(atPath:attributes:)](filemanager/createdirectory%28atpath_attributes_%29.md): Deprecated. Creates a directory (without contents) at a given path with given attributes.
- [createSymbolicLink(atPath:pathContent:)](filemanager/createsymboliclink%28atpath_pathcontent_%29.md): Deprecated. Creates a symbolic link identified by a given path that refers to a given location.
- [pathContentOfSymbolicLink(atPath:)](filemanager/pathcontentofsymboliclink%28atpath_%29.md): Deprecated. Returns the path of the directory or file that a symbolic link at a given path refers to.
- [fileManager(\_:shouldProceedAfterError:)](../objectivec/nsobject-swift.class/filemanager%28__shouldproceedaftererror_%29.md): Deprecated. An `NSFileManager` object sends this message to its handler for each error it encounters when copying, moving, removing, or linking files or directories.
- [fileManager(\_:willProcessPath:)](../objectivec/nsobject-swift.class/filemanager%28__willprocesspath_%29.md): Deprecated. An `NSFileManager` object sends this message to a handler immediately before attempting to move, copy, rename, or delete, or before attempting to link to a given path.
- [replaceItemAtURL(originalItemURL:withItemAtURL:backupItemName:options:)](filemanager/replaceitematurl%28originalitemurl_withitematurl_backupitemname_options_%29.md): Deprecated. Replaces the contents of the item at the specified URL in a manner that ensures no data loss occurs.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### File system operations

- [Improving performance and stability when accessing the file system](improving-performance-and-stability-when-accessing-the-file-system.md): Prevent data loss and app crashes by interacting with the file system in a coordinated, asynchronous manner and by avoiding unnecessary disk I/O.
- [Using the file system effectively](using-the-file-system-effectively.md): Gain access to benefits like automatic backup or purging by using purpose-built directories provided by the system.
- [FileManagerDelegate](filemanagerdelegate.md): The interface a file manager’s delegate uses to intervene during operations or if an error occurs.
- [About Apple File System](about-apple-file-system.md): Use high-level APIs to get the most out of Apple File System.

# NSFileManager (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A convenient interface to the contents of the file system, and the primary means of interacting with it.

## Declaration

```objectivec
@interface NSFileManager : NSObject
```

## Mentioned In

- [About Apple File System](about-apple-file-system.md)
- [Using the file system effectively](using-the-file-system-effectively.md)
- [Optimizing Your App’s Data for iCloud Backup](optimizing-your-app-s-data-for-icloud-backup.md)

<a id="overview"></a>

## Overview

A file manager object lets you examine the contents of the file system and make changes to it. The [NSFileManager](filemanager.md) class provides convenient access to a shared file manager object that is suitable for most types of file-related manipulations. A file manager object is typically your primary mode of interaction with the file system. You use it to locate, create, copy, and move files and directories. You also use it to get information about a file or directory or change some of its attributes.

When specifying the location of files, you can use either [NSURL](nsurl.md) or [NSString](nsstring.md) objects. The use of the [NSURL](nsurl.md) class is generally preferred for specifying file-system items because URLs can convert path information to a more efficient representation internally. You can also obtain a bookmark from an [NSURL](nsurl.md) object, which is similar to an alias and offers a more sure way of locating the file or directory later.

If you are moving, copying, linking, or removing files or directories, you can use a delegate in conjunction with a file manager object to manage those operations. The delegate’s role is to affirm the operation and to decide whether to proceed when errors occur. In macOS 10.7 and later, the delegate must conform to the [NSFileManagerDelegate](filemanagerdelegate.md) protocol.

In iOS 5.0 and later and in macOS 10.7 and later, [NSFileManager](filemanager.md) includes methods for managing items stored in iCloud. Files and directories tagged for cloud storage are synced to iCloud so that they can be made available to the user’s iOS devices and Macintosh computers. Changes to an item in one location are propagated to all other locations to ensure the items stay in sync.

<a id="Sync-control"></a>

### Sync control

A [package](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFBundles/DocumentPackages/DocumentPackages.html#//apple_ref/doc/uid/10000123i-CH106-SW1) is a directory that the system presents as a single file to the person using the device. Apps with documents that contain multiple files can use packages to manage contents like media assets. In iOS 26 and macOS 26 and later, [NSFileManager](filemanager.md) introduces methods for controlling how a file provider syncs these items. By pausing sync when your app opens a package and resuming when it closes, your app can prevent the file provider from changing the contents of the package in unexpected ways, which potentially leaves the document in an inconsistent state. You can also use this pause and resume API on regular “flat” files.

<a id="Threading-considerations"></a>

### Threading considerations

The methods of the shared [NSFileManager](filemanager.md) object can be called from multiple threads safely. However, if you use a delegate to receive notifications about the status of move, copy, remove, and link operations, you should create a unique instance of the file manager object, assign your delegate to that object, and use that file manager to initiate your operations.

## Topics

### Creating a file manager

- [fileManagerWithAuthorization:](filemanager/init%28authorization_%29.md): Initializes a file manager object that is authorized to perform privileged file system operations.
- [defaultManager](filemanager/default.md): The shared file manager object for the process.

### Accessing user directories

- [homeDirectoryForCurrentUser](filemanager/homedirectoryforcurrentuser.md): The home directory for the current user.
- [NSHomeDirectory](nshomedirectory%28%29.md): Returns the path to either the user’s or application’s home directory, depending on the platform.
- [NSUserName](nsusername%28%29.md): Returns the logon name of the current user.
- [NSFullUserName](nsfullusername%28%29.md): Returns a string containing the full name of the current user.
- [homeDirectoryForUser:](filemanager/homedirectory%28foruser_%29.md): Returns the home directory for the specified user.
- [NSHomeDirectoryForUser](nshomedirectoryforuser%28__%29.md): Returns the path to a given user’s home directory.
- [temporaryDirectory](filemanager/temporarydirectory.md): The temporary directory for the current user.
- [NSTemporaryDirectory](nstemporarydirectory%28%29.md): Returns the path of the temporary directory for the current user.

### Locating system directories

- [URLForDirectory:inDomain:appropriateForURL:create:error:](filemanager/url%28for_in_appropriatefor_create_%29.md): Locates and optionally creates the specified common directory in a domain.
- [URLsForDirectory:inDomains:](filemanager/urls%28for_in_%29.md): Returns an array of URLs for the specified common directory in the requested domains.
- [NSSearchPathForDirectoriesInDomains](nssearchpathfordirectoriesindomains%28______%29.md): Creates a list of directory search paths.
- [NSOpenStepRootDirectory](nsopensteprootdirectory%28%29.md): Returns the root directory of the user’s system.

### Locating application group container directories

- [containerURLForSecurityApplicationGroupIdentifier:](filemanager/containerurl%28forsecurityapplicationgroupidentifier_%29.md): Returns the container directory associated with the specified security application group identifier.
- [App Groups Entitlement](../bundleresources/entitlements/com.apple.security.application-groups.md): A list of identifiers specifying the groups your app belongs to.

### Discovering directory contents

- [contentsOfDirectoryAtURL:includingPropertiesForKeys:options:error:](filemanager/contentsofdirectory%28at_includingpropertiesforkeys_options_%29.md): Performs a shallow search of the specified directory and returns URLs for the contained items.
- [contentsOfDirectoryAtPath:error:](filemanager/contentsofdirectory%28atpath_%29.md): Performs a shallow search of the specified directory and returns the paths of any contained items.
- [enumeratorAtURL:includingPropertiesForKeys:options:errorHandler:](nsfilemanager/enumeratoraturl_includingpropertiesforkeys_options_errorhandler_.md): Returns a directory enumerator object that can be used to perform a deep enumeration of the directory at the specified URL.
- [enumeratorAtPath:](filemanager/enumerator%28atpath_%29.md): Returns a directory enumerator object that can be used to perform a deep enumeration of the directory at the specified path.
- [NSDirectoryEnumerator](filemanager/directoryenumerator.md): An object that enumerates the contents of a directory.
- [mountedVolumeURLsIncludingResourceValuesForKeys:options:](filemanager/mountedvolumeurls%28includingresourcevaluesforkeys_options_%29.md): Returns an array of URLs that identify the mounted volumes available on the device.
- [NSVolumeEnumerationOptions](filemanager/volumeenumerationoptions.md): Options for enumerating mounted volumes with the [mountedVolumeURLsIncludingResourceValuesForKeys:options:](filemanager/mountedvolumeurls%28includingresourcevaluesforkeys_options_%29.md) method.
- [subpathsOfDirectoryAtPath:error:](filemanager/subpathsofdirectory%28atpath_%29.md): Performs a deep enumeration of the specified directory and returns the paths of all of the contained subdirectories.
- [subpathsAtPath:](filemanager/subpaths%28atpath_%29.md): Returns an array of strings identifying the paths for all items in the specified directory.

### Creating and deleting items

- [createDirectoryAtURL:withIntermediateDirectories:attributes:error:](filemanager/createdirectory%28at_withintermediatedirectories_attributes_%29.md): Creates a directory with the given attributes at the specified URL.
- [createDirectoryAtPath:withIntermediateDirectories:attributes:error:](filemanager/createdirectory%28atpath_withintermediatedirectories_attributes_%29.md): Creates a directory with given attributes at the specified path.
- [createFileAtPath:contents:attributes:](filemanager/createfile%28atpath_contents_attributes_%29.md): Creates a file with the specified content and attributes at the given location.
- [removeItemAtURL:error:](filemanager/removeitem%28at_%29.md): Removes the file or directory at the specified URL.
- [removeItemAtPath:error:](filemanager/removeitem%28atpath_%29.md): Removes the file or directory at the specified path.
- [trashItemAtURL:resultingItemURL:error:](filemanager/trashitem%28at_resultingitemurl_%29.md): Moves an item to the trash.

### Replacing items

- [replaceItemAtURL:withItemAtURL:backupItemName:options:resultingItemURL:error:](filemanager/replaceitem%28at_withitemat_backupitemname_options_resultingitemurl_%29.md): Replaces the contents of the item at the specified URL in a manner that ensures no data loss occurs.
- [NSFileManagerItemReplacementOptions](filemanager/itemreplacementoptions.md): Options for specifying the behavior of file replacement operations.

### Moving and copying items

- [copyItemAtURL:toURL:error:](filemanager/copyitem%28at_to_%29.md): Copies the file at the specified URL to a new location synchronously.
- [copyItemAtPath:toPath:error:](filemanager/copyitem%28atpath_topath_%29.md): Copies the item at the specified path to a new location synchronously.
- [moveItemAtURL:toURL:error:](filemanager/moveitem%28at_to_%29.md): Moves the file or directory at the specified URL to a new location synchronously.
- [moveItemAtPath:toPath:error:](filemanager/moveitem%28atpath_topath_%29.md): Moves the file or directory at the specified path to a new location synchronously.

### Managing iCloud-based items

- [ubiquityIdentityToken](filemanager/ubiquityidentitytoken.md): An opaque token that represents the current user’s iCloud Drive Documents identity.
- [URLForUbiquityContainerIdentifier:](filemanager/url%28forubiquitycontaineridentifier_%29.md): Returns the URL for the iCloud container associated with the specified identifier and establishes access to that container.
- [isUbiquitousItemAtURL:](filemanager/isubiquitousitem%28at_%29.md): Returns a Boolean indicating whether the item is targeted for storage in iCloud.
- [setUbiquitous:itemAtURL:destinationURL:error:](filemanager/setubiquitous%28__itemat_destinationurl_%29.md): Indicates whether the item at the specified URL should be stored in iCloud.
- [startDownloadingUbiquitousItemAtURL:error:](filemanager/startdownloadingubiquitousitem%28at_%29.md): Starts downloading (if necessary) the specified item to the local system.
- [evictUbiquitousItemAtURL:error:](filemanager/evictubiquitousitem%28at_%29.md): Removes the local copy of the specified item that’s stored in iCloud.
- [URLForPublishingUbiquitousItemAtURL:expirationDate:error:](filemanager/url%28forpublishingubiquitousitemat_expiration_%29.md): Returns a URL that can be emailed to users to allow them to download a copy of a flat file item from iCloud.

### Accessing file provider services

- [getFileProviderServicesForItemAtURL:completionHandler:](filemanager/getfileproviderservicesforitem%28at_completionhandler_%29.md): Returns the services provided by the File Provider extension that manages the item at the given URL.
- [NSFileProviderService](nsfileproviderservice.md): A service that provides a custom communication channel between your app and a File Provider extension.
- [NSFileProviderServiceName](nsfileproviderservicename.md): The name used to identify a File Provider service.

### Controlling file provider synchronization

- [NSFileManagerSupportedSyncControls](nsfilemanagersupportedsynccontrols.md): An option set of the sync controls available for an item.
- [pauseSyncForUbiquitousItemAtURL:completionHandler:](filemanager/pausesyncforubiquitousitem%28at_completionhandler_%29.md): Asynchronously pauses sync of an item at the given URL.
- [resumeSyncForUbiquitousItemAtURL:withBehavior:completionHandler:](filemanager/resumesyncforubiquitousitem%28at_with_completionhandler_%29.md): Asynchronously resumes the sync on a paused item using the given resume behavior.
- [NSFileManagerResumeSyncBehavior](nsfilemanagerresumesyncbehavior.md): The behaviors the file manager can apply to resolve conflicts when resuming a sync.
- [fetchLatestRemoteVersionOfItemAtURL:completionHandler:](filemanager/fetchlatestremoteversionofitem%28at_completionhandler_%29.md): Asynchronously fetches the latest remote version of a given item from the server.
- [NSFileVersion](nsfileversion.md): A snapshot of a file at a specific point in time.
- [uploadLocalVersionOfUbiquitousItemAtURL:withConflictResolutionPolicy:completionHandler:](filemanager/uploadlocalversionofubiquitousitem%28at_withconflictresolutionpolicy_completionhandler_%29.md): Asynchronously uploads the local version of the item using the provided conflict resolution policy.
- [NSFileManagerUploadLocalVersionConflictPolicy](nsfilemanageruploadlocalversionconflictpolicy.md): The policies the file manager can apply to resolve conflicts when uploading a local version of a file.

### Creating symbolic and hard links

- [createSymbolicLinkAtURL:withDestinationURL:error:](filemanager/createsymboliclink%28at_withdestinationurl_%29.md): Creates a symbolic link at the specified URL that points to an item at the given URL.
- [createSymbolicLinkAtPath:withDestinationPath:error:](filemanager/createsymboliclink%28atpath_withdestinationpath_%29.md): Creates a symbolic link that points to the specified destination.
- [linkItemAtURL:toURL:error:](filemanager/linkitem%28at_to_%29.md): Creates a hard link between the items at the specified URLs.
- [linkItemAtPath:toPath:error:](filemanager/linkitem%28atpath_topath_%29.md): Creates a hard link between the items at the specified paths.
- [destinationOfSymbolicLinkAtPath:error:](filemanager/destinationofsymboliclink%28atpath_%29.md): Returns the path of the item pointed to by a symbolic link.

### Determining access to files

- [fileExistsAtPath:](filemanager/fileexists%28atpath_%29.md): Returns a Boolean value that indicates whether a file or directory exists at a specified path.
- [fileExistsAtPath:isDirectory:](filemanager/fileexists%28atpath_isdirectory_%29.md): Returns a Boolean value that indicates whether a file or directory exists at a specified path.
- [isReadableFileAtPath:](filemanager/isreadablefile%28atpath_%29.md): Returns a Boolean value that indicates whether the invoking object appears able to read a specified file.
- [isWritableFileAtPath:](filemanager/iswritablefile%28atpath_%29.md): Returns a Boolean value that indicates whether the invoking object appears able to write to a specified file.
- [isExecutableFileAtPath:](filemanager/isexecutablefile%28atpath_%29.md): Returns a Boolean value that indicates whether the operating system appears able to execute a specified file.
- [isDeletableFileAtPath:](filemanager/isdeletablefile%28atpath_%29.md): Returns a Boolean value that indicates whether the invoking object appears able to delete a specified file.

### Getting and setting attributes

- [componentsToDisplayForPath:](filemanager/componentstodisplay%28forpath_%29.md): Returns an array of strings representing the user-visible components of a given path.
- [displayNameAtPath:](filemanager/displayname%28atpath_%29.md): Returns the display name of the file or directory at a specified path.
- [attributesOfItemAtPath:error:](filemanager/attributesofitem%28atpath_%29.md): Returns the attributes of the item at a given path.
- [attributesOfFileSystemForPath:error:](filemanager/attributesoffilesystem%28forpath_%29.md): Returns a dictionary that describes the attributes of the mounted file system on which a given path resides.
- [setAttributes:ofItemAtPath:error:](filemanager/setattributes%28__ofitematpath_%29.md): Sets the attributes of the specified file or directory.

### Getting and comparing file contents

- [contentsAtPath:](filemanager/contents%28atpath_%29.md): Returns the contents of the file at the specified path.
- [contentsEqualAtPath:andPath:](filemanager/contentsequal%28atpath_andpath_%29.md): Returns a Boolean value that indicates whether the files or directories in specified paths have the same contents.

### Getting the relationship between items

- [getRelationship:ofDirectoryAtURL:toItemAtURL:error:](filemanager/getrelationship%28__ofdirectoryat_toitemat_%29.md): Determines the type of relationship that exists between a directory and an item.
- [getRelationship:ofDirectory:inDomain:toItemAtURL:error:](filemanager/getrelationship%28__of_in_toitemat_%29.md): Determines the type of relationship that exists between a system directory and the specified item.
- [NSURLRelationship](filemanager/urlrelationship.md): Constants indicating the relationship between a directory and an item.

### Converting file paths to strings

- [fileSystemRepresentationWithPath:](filemanager/filesystemrepresentation%28withpath_%29.md): Returns a C-string representation of a given path that properly encodes Unicode strings for use by the file system.
- [stringWithFileSystemRepresentation:length:](filemanager/string%28withfilesystemrepresentation_length_%29.md): Returns an [NSString](nsstring.md) object whose contents are derived from the specified C-string path.

### Managing the delegate

- [delegate](filemanager/delegate.md): The delegate of the file manager object.

### Managing the current directory

- [changeCurrentDirectoryPath:](filemanager/changecurrentdirectorypath%28__%29.md): Changes the path of the current working directory to the specified path.
- [currentDirectoryPath](filemanager/currentdirectorypath.md): The path to the program’s current directory.

### Unmounting volumes

- [unmountVolumeAtURL:options:completionHandler:](filemanager/unmountvolume%28at_options_completionhandler_%29.md): Starts the process of unmounting the specified volume.
- [NSFileManagerUnmountOptions](filemanager/unmountoptions.md): Options that specify the behavior of an unmount operation.
- [NSFileManagerUnmountDissentingProcessIdentifierErrorKey](nsfilemanagerunmountdissentingprocessidentifiererrorkey.md): The process identifier of the process that prevented a volume from unmounting.

### Working with HFS file types

- [NSFileTypeForHFSTypeCode](nsfiletypeforhfstypecode%28__%29.md): Returns a string encoding a file type code.
- [NSHFSTypeCodeFromFileType](nshfstypecodefromfiletype%28__%29.md): Returns a file type code.
- [NSHFSTypeOfFile](nshfstypeoffile%28__%29.md): Returns a string encoding a file type.

### Determining resource fork support

- [NSFoundationVersionWithFileManagerResourceForkSupport](nsfoundationversionwithfilemanagerresourceforksupport.md): The version of the Foundation framework in which `NSFileManager` first supported resource forks.

### Working with notifications

- [NSUbiquityIdentityDidChangeNotification](nsnotification/name-swift.struct/nsubiquityidentitydidchange.md): Sent after the iCloud (“ubiquity”) identity has changed.

### Supporting Types

- [NSDirectoryEnumerationOptions](filemanager/directoryenumerationoptions.md): Options for enumerating the contents of directories.
- [NSSearchPathDirectory](filemanager/searchpathdirectory.md): The location of significant directories.
- [NSSearchPathDomainMask](filemanager/searchpathdomainmask.md): Domain constants specifying base locations to use when you search for significant directories.
- [NSFileAttributeKey](fileattributekey.md): Keys in dictionaries used to get and set file attributes.
- [NSFileAttributeType](fileattributetype.md): Values representing a file’s type attribute.
- [NSFileProtectionType](fileprotectiontype.md): Protection level values that can be associated with a file attribute key.
- [NSURLFileProtectionType](urlfileprotection.md): Protection-level values for a URL resource key.

### Deprecated Methods

- [copyPath:toPath:handler:](nsfilemanager/copypath_topath_handler_.md): Deprecated. Copies the directory or file specified in a given path to a different location in the file system identified by another path.
- [movePath:toPath:handler:](nsfilemanager/movepath_topath_handler_.md): Deprecated. Moves the directory or file specified by a given path to a different location in the file system identified by another path.
- [removeFileAtPath:handler:](nsfilemanager/removefileatpath_handler_.md): Deprecated. Deletes the file, link, or directory (including, recursively, all subdirectories, files, and links in the directory) identified by a given path.
- [changeFileAttributes:atPath:](filemanager/changefileattributes%28__atpath_%29.md): Deprecated. Changes the attributes of a given file or directory.
- [fileAttributesAtPath:traverseLink:](filemanager/fileattributes%28atpath_traverselink_%29.md): Deprecated. Returns a dictionary that describes the POSIX attributes of the file specified at a given.
- [fileSystemAttributesAtPath:](filemanager/filesystemattributes%28atpath_%29.md): Deprecated. Returns a dictionary that describes the attributes of the mounted file system on which a given path resides.
- [directoryContentsAtPath:](filemanager/directorycontents%28atpath_%29.md): Deprecated. Returns the directories and files (including symbolic links) contained in a given directory.
- [createDirectoryAtPath:attributes:](filemanager/createdirectory%28atpath_attributes_%29.md): Deprecated. Creates a directory (without contents) at a given path with given attributes.
- [createSymbolicLinkAtPath:pathContent:](filemanager/createsymboliclink%28atpath_pathcontent_%29.md): Deprecated. Creates a symbolic link identified by a given path that refers to a given location.
- [pathContentOfSymbolicLinkAtPath:](filemanager/pathcontentofsymboliclink%28atpath_%29.md): Deprecated. Returns the path of the directory or file that a symbolic link at a given path refers to.
- [linkPath:toPath:handler:](nsfilemanager/linkpath_topath_handler_.md): Deprecated. Creates a link from a source to a destination.
- [fileManager:shouldProceedAfterError:](../objectivec/nsobject-swift.class/filemanager%28__shouldproceedaftererror_%29.md): Deprecated. An `NSFileManager` object sends this message to its handler for each error it encounters when copying, moving, removing, or linking files or directories.
- [fileManager:willProcessPath:](../objectivec/nsobject-swift.class/filemanager%28__willprocesspath_%29.md): Deprecated. An `NSFileManager` object sends this message to a handler immediately before attempting to move, copy, rename, or delete, or before attempting to link to a given path.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### File system operations

- [Improving performance and stability when accessing the file system](improving-performance-and-stability-when-accessing-the-file-system.md): Prevent data loss and app crashes by interacting with the file system in a coordinated, asynchronous manner and by avoiding unnecessary disk I/O.
- [Using the file system effectively](using-the-file-system-effectively.md): Gain access to benefits like automatic backup or purging by using purpose-built directories provided by the system.
- [NSFileManagerDelegate](filemanagerdelegate.md): The interface a file manager’s delegate uses to intervene during operations or if an error occurs.
- [About Apple File System](about-apple-file-system.md): Use high-level APIs to get the most out of Apple File System.
