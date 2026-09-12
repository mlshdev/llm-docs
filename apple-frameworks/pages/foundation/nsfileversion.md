> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsfileversion](https://developer.apple.com/documentation/foundation/nsfileversion)

# NSFileVersion (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A snapshot of a file at a specific point in time.

## Declaration

```swift
class NSFileVersion
```

<a id="overview"></a>

## Overview

Use the methods of this class to access, create, and manage file revisions in your app.

Each file version instance contains metadata about a single revision, including the location of the associated file, the modification date of the revision, and whether the revision is discardable.

In Mac apps, you can use file version objects to track changes to a local file over time and to prevent the loss of data during editing. When managing local versions, the document architecture creates versions at specific points in the lifetime of your application. Your application can also create versions explicitly at times that your application designates as appropriate.

In addition to managing local files, the system also uses this class to manage cloud-based files. For files in the cloud, there is usually only one version of the file at any given time. However, additional file versions may be created in cases where two different computers attempt to save the file to the cloud at the same time. In that case, one file is chosen as the current version and any other versions are tagged as being in conflict with the original. Conflict versions are reported to the appropriate file presenter objects and should be resolved as soon as possible so that the corresponding files can be removed from the cloud.

## Topics

### Getting the Version of a File

- [currentVersionOfItem(at:)](nsfileversion/currentversionofitem%28at_%29.md): Returns the most recent version object for the file at the specified URL.
- [otherVersionsOfItem(at:)](nsfileversion/otherversionsofitem%28at_%29.md): Returns all versions of the specified file except the current version.
- [version(itemAt:forPersistentIdentifier:)](nsfileversion/version%28itemat_forpersistentidentifier_%29.md): Returns the version of the file that has the specified persistent ID.
- [temporaryDirectoryURLForNewVersionOfItem(at:)](nsfileversion/temporarydirectoryurlfornewversionofitem%28at_%29.md): Creates and returns a temporary directory to use for saving the contents of the file.

### Creating a New Version

- [addOfItem(at:withContentsOf:options:)](nsfileversion/addofitem%28at_withcontentsof_options_%29.md): Creates a version of the file at the specified location.

### Accessing the Version Information

- [url](nsfileversion/url.md): The URL identifying the location of the file associated with the file version object.
- [localizedName](nsfileversion/localizedname.md): The string containing the user-presentable name of the file version.
- [localizedNameOfSavingComputer](nsfileversion/localizednameofsavingcomputer.md): The user-presentable name of the computer on which the revision was saved.
- [modificationDate](nsfileversion/modificationdate.md): The modification date of the version.
- [persistentIdentifier](nsfileversion/persistentidentifier.md): The identifier for this version of the file.
- [isDiscardable](nsfileversion/isdiscardable.md): A Boolean value that specifies whether the system can delete the associated file at some future time.

### Handling Version Conflicts

- [isConflict](nsfileversion/isconflict.md): A Boolean value indicating whether the contents of the version are in conflict with the contents of another version.
- [isResolved](nsfileversion/isresolved.md): A Boolean value that indicates if the version object is in conflict or not.
- [unresolvedConflictVersionsOfItem(at:)](nsfileversion/unresolvedconflictversionsofitem%28at_%29.md): Returns an array of version objects that are currently in conflict for the specified URL.

### Replacing and Deleting Versions

- [replaceItem(at:options:)](nsfileversion/replaceitem%28at_options_%29.md): Replace the contents of the specified file with the contents of the current version’s file.
- [remove()](nsfileversion/remove%28%29.md): Remove this version object and its associated file from the version store.
- [removeOtherVersionsOfItem(at:)](nsfileversion/removeotherversionsofitem%28at_%29.md): Removes all versions of a file, except the current one, from the version store.

### Constants

- [NSFileVersion.AddingOptions](nsfileversion/addingoptions.md): Options for adding a new file version.
- [NSFileVersion.ReplacingOptions](nsfileversion/replacingoptions.md): Options for replacing a file version.

### Initializers

- [init(ofItemAtURL:forPersistentIdentifier:)](nsfileversion/init%28ofitematurl_forpersistentidentifier_%29.md)

### Instance Properties

- [hasLocalContents](nsfileversion/haslocalcontents.md): Whether the version has local contents. Versions that are returned by +getNonlocalVersionsOfItemAtURL:completionHandler: do not initially have local contents. You can only access their contents, either directly via the URL or by invoking -replaceItemAtURL:options:error:, from within a coordinated read on the NSFileVersion’s URL.
- [hasThumbnail](nsfileversion/hasthumbnail.md): Whether the version has a thumbnail image available. Thumbnails for versions from +getNonlocalVersionsOfItemAtURL:completionHandler: may not immediately be available. As soon as it becomes available, this property will change from NO to YES. You can use KVO to be notified of this change. If a thumbnail is available, you can access it using NSURLThumbnailKey or NSURLThumbnailDictionaryKey.
- [originatorNameComponents](nsfileversion/originatornamecomponents.md): The name components of the user who created this version of the file. Is nil if the file is not shared or if the current user is the originator.

### Type Methods

- [getNonlocalVersionsOfItem(at:completionHandler:)](nsfileversion/getnonlocalversionsofitem%28at_completionhandler_%29.md): Asynchronously returns an array of NSFileVersions associated with the file located by the given URL, or nil if there is no such file or another error occurs.

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

### Managed file access

- [FileHandle](filehandle.md): An object-oriented wrapper for a file descriptor.
- [NSFileSecurity](nsfilesecurity.md): A stub class that encapsulates security information about a file.
- [FileWrapper](filewrapper.md): A representation of a node (a file, directory, or symbolic link) in the file system.

# NSFileVersion (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A snapshot of a file at a specific point in time.

## Declaration

```objectivec
@interface NSFileVersion : NSObject
```

<a id="overview"></a>

## Overview

Use the methods of this class to access, create, and manage file revisions in your app.

Each file version instance contains metadata about a single revision, including the location of the associated file, the modification date of the revision, and whether the revision is discardable.

In Mac apps, you can use file version objects to track changes to a local file over time and to prevent the loss of data during editing. When managing local versions, the document architecture creates versions at specific points in the lifetime of your application. Your application can also create versions explicitly at times that your application designates as appropriate.

In addition to managing local files, the system also uses this class to manage cloud-based files. For files in the cloud, there is usually only one version of the file at any given time. However, additional file versions may be created in cases where two different computers attempt to save the file to the cloud at the same time. In that case, one file is chosen as the current version and any other versions are tagged as being in conflict with the original. Conflict versions are reported to the appropriate file presenter objects and should be resolved as soon as possible so that the corresponding files can be removed from the cloud.

## Topics

### Getting the Version of a File

- [currentVersionOfItemAtURL:](nsfileversion/currentversionofitem%28at_%29.md): Returns the most recent version object for the file at the specified URL.
- [otherVersionsOfItemAtURL:](nsfileversion/otherversionsofitem%28at_%29.md): Returns all versions of the specified file except the current version.
- [versionOfItemAtURL:forPersistentIdentifier:](nsfileversion/version%28itemat_forpersistentidentifier_%29.md): Returns the version of the file that has the specified persistent ID.
- [temporaryDirectoryURLForNewVersionOfItemAtURL:](nsfileversion/temporarydirectoryurlfornewversionofitem%28at_%29.md): Creates and returns a temporary directory to use for saving the contents of the file.

### Creating a New Version

- [addVersionOfItemAtURL:withContentsOfURL:options:error:](nsfileversion/addofitem%28at_withcontentsof_options_%29.md): Creates a version of the file at the specified location.

### Accessing the Version Information

- [URL](nsfileversion/url.md): The URL identifying the location of the file associated with the file version object.
- [localizedName](nsfileversion/localizedname.md): The string containing the user-presentable name of the file version.
- [localizedNameOfSavingComputer](nsfileversion/localizednameofsavingcomputer.md): The user-presentable name of the computer on which the revision was saved.
- [modificationDate](nsfileversion/modificationdate.md): The modification date of the version.
- [persistentIdentifier](nsfileversion/persistentidentifier.md): The identifier for this version of the file.
- [discardable](nsfileversion/isdiscardable.md): A Boolean value that specifies whether the system can delete the associated file at some future time.

### Handling Version Conflicts

- [conflict](nsfileversion/isconflict.md): A Boolean value indicating whether the contents of the version are in conflict with the contents of another version.
- [resolved](nsfileversion/isresolved.md): A Boolean value that indicates if the version object is in conflict or not.
- [unresolvedConflictVersionsOfItemAtURL:](nsfileversion/unresolvedconflictversionsofitem%28at_%29.md): Returns an array of version objects that are currently in conflict for the specified URL.

### Replacing and Deleting Versions

- [replaceItemAtURL:options:error:](nsfileversion/replaceitem%28at_options_%29.md): Replace the contents of the specified file with the contents of the current version’s file.
- [removeAndReturnError:](nsfileversion/remove%28%29.md): Remove this version object and its associated file from the version store.
- [removeOtherVersionsOfItemAtURL:error:](nsfileversion/removeotherversionsofitem%28at_%29.md): Removes all versions of a file, except the current one, from the version store.

### Constants

- [NSFileVersionAddingOptions](nsfileversion/addingoptions.md): Options for adding a new file version.
- [NSFileVersionReplacingOptions](nsfileversion/replacingoptions.md): Options for replacing a file version.

### Instance Properties

- [hasLocalContents](nsfileversion/haslocalcontents.md): Whether the version has local contents. Versions that are returned by +getNonlocalVersionsOfItemAtURL:completionHandler: do not initially have local contents. You can only access their contents, either directly via the URL or by invoking -replaceItemAtURL:options:error:, from within a coordinated read on the NSFileVersion’s URL.
- [hasThumbnail](nsfileversion/hasthumbnail.md): Whether the version has a thumbnail image available. Thumbnails for versions from +getNonlocalVersionsOfItemAtURL:completionHandler: may not immediately be available. As soon as it becomes available, this property will change from NO to YES. You can use KVO to be notified of this change. If a thumbnail is available, you can access it using NSURLThumbnailKey or NSURLThumbnailDictionaryKey.
- [originatorNameComponents](nsfileversion/originatornamecomponents.md): The name components of the user who created this version of the file. Is nil if the file is not shared or if the current user is the originator.

### Type Methods

- [getNonlocalVersionsOfItemAtURL:completionHandler:](nsfileversion/getnonlocalversionsofitem%28at_completionhandler_%29.md): Asynchronously returns an array of NSFileVersions associated with the file located by the given URL, or nil if there is no such file or another error occurs.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Managed file access

- [NSFileHandle](filehandle.md): An object-oriented wrapper for a file descriptor.
- [NSFileSecurity](nsfilesecurity.md): A stub class that encapsulates security information about a file.
- [NSFileWrapper](filewrapper.md): A representation of a node (a file, directory, or symbolic link) in the file system.
