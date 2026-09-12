> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filewrapper](https://developer.apple.com/documentation/foundation/filewrapper)

# FileWrapper (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A representation of a node (a file, directory, or symbolic link) in the file system.

## Declaration

```swift
class FileWrapper
```

<a id="overview"></a>

## Overview

The [FileWrapper](filewrapper.md) class provides access to the attributes and contents of file system nodes. A file system node is a file, directory, or symbolic link. Instances of this class are known as file wrappers.

> **Note**

>  Starting in macOS 10.7, [FileWrapper](filewrapper.md) moved from Application Kit to Foundation. As a result of this the `icon`, and `setIcon:` methods have moved to a new category of [FileWrapper](filewrapper.md) that remains in Application Kit.

File wrappers represent a file system node as an object that can be displayed as an image (and possibly edited in place), saved to the file system, or transmitted to another application.

There are three types of file wrappers:

- Regular-file file wrapper: Represents a regular file.
- Directory file wrapper: Represents a directory.
- Symbolic-link file wrapper: Represents a symbolic link.

A file wrapper has these attributes:

- Filename. Name of the file system node the file wrapper represents.
- file-system attributes. See [FileManager](filemanager.md) for information on the contents of the `attributes` dictionary.
- Regular-file contents. Applicable only to regular-file file wrappers.
- File wrappers. Applicable only to directory file wrappers.
- Destination node. Applicable only to symbolic-link file wrappers.

## Topics

### Creating File Wrappers

This class has several designated initializers.

- [init(url:options:)](filewrapper/init%28url_options_%29-70161.md): Initializes a file wrapper instance whose kind is determined by the type of file-system node located by the URL.
- [init(path:)](filewrapper/init%28path_%29.md): Deprecated. Initializes a file wrapper instance whose kind is determined by the type of file-system node located by the path.
- [init(directoryWithFileWrappers:)](filewrapper/init%28directorywithfilewrappers_%29.md): Initializes the receiver as a directory file wrapper, with a given file-wrapper list.
- [init(regularFileWithContents:)](filewrapper/init%28regularfilewithcontents_%29.md): Initializes the receiver as a regular-file file wrapper.
- [init(symbolicLinkWithDestination:)](filewrapper/init%28symboliclinkwithdestination_%29.md): Deprecated. Initializes the receiver as a symbolic-link file wrapper.
- [init(symbolicLinkWithDestinationURL:)](filewrapper/init%28symboliclinkwithdestinationurl_%29.md): Initializes the receiver as a symbolic-link file wrapper that links to a specified file.
- [init(serializedRepresentation:)](filewrapper/init%28serializedrepresentation_%29.md): Initializes the receiver as a regular-file file wrapper from given serialized data.

### Querying File Wrappers

- [isRegularFile](filewrapper/isregularfile.md): This property contains a boolean value that indicates whether the file wrapper object is a regular-file.
- [isDirectory](filewrapper/isdirectory.md): This property contains a boolean value indicating whether the file wrapper is a directory file wrapper.
- [isSymbolicLink](filewrapper/issymboliclink.md): A boolean that indicates whether the file wrapper object is a symbolic-link file wrapper.

### Accessing File-Wrapper Information

- [fileWrappers](filewrapper/filewrappers.md): The file wrappers contained by a directory file wrapper.
- [addFileWrapper(\_:)](filewrapper/addfilewrapper%28__%29.md): Adds a child file wrapper to the receiver, which must be a directory file wrapper.
- [removeFileWrapper(\_:)](filewrapper/removefilewrapper%28__%29.md): Removes a child file wrapper from the receiver, which must be a directory file wrapper.
- [addFile(withPath:)](filewrapper/addfile%28withpath_%29.md): Deprecated. Creates a file wrapper from a given file-system node and adds it to the receiver, which must be a directory file wrapper.
- [addRegularFile(withContents:preferredFilename:)](filewrapper/addregularfile%28withcontents_preferredfilename_%29.md): Creates a regular-file file wrapper with the given contents and adds it to the receiver, which must be a directory file wrapper.
- [addSymbolicLink(withDestination:preferredFilename:)](filewrapper/addsymboliclink%28withdestination_preferredfilename_%29.md): Deprecated. Creates a symbolic-link file wrapper pointing to a given file-system node and adds it to the receiver, which must be a directory file wrapper.
- [keyForChildFileWrapper(\_:)](filewrapper/keyforchildfilewrapper%28__%29.md): Returns the dictionary key used by a directory to identify a given file wrapper.
- [symbolicLinkDestination()](filewrapper/symboliclinkdestination%28%29.md): Deprecated. Provides the pathname referenced by the file wrapper object, which must be a symbolic-link file wrapper.
- [symbolicLinkDestinationURL](filewrapper/symboliclinkdestinationurl.md): The URL referenced by the file wrapper object, which must be a symbolic-link file wrapper.

### Updating File Wrappers

- [needsToBeUpdated(fromPath:)](filewrapper/needstobeupdated%28frompath_%29.md): Deprecated. Indicates whether the file wrapper needs to be updated to match a given file-system node.
- [matchesContents(of:)](filewrapper/matchescontents%28of_%29.md): Indicates whether the contents of a file wrapper matches a directory, regular file, or symbolic link on disk.
- [update(fromPath:)](filewrapper/update%28frompath_%29.md): Deprecated. Updates the file wrapper to match a given file-system node.
- [read(from:options:)](filewrapper/read%28from_options_%29.md): Recursively rereads the entire contents of a file wrapper from the specified location on disk.

### Serializing

- [serializedRepresentation](filewrapper/serializedrepresentation.md): The contents of the file wrapper as an opaque data object.

### Accessing Files

- [filename](filewrapper/filename.md): The filename of the file wrapper object
- [preferredFilename](filewrapper/preferredfilename.md): The preferred filename for the file wrapper object.
- [fileAttributes](filewrapper/fileattributes.md): A dictionary of file attributes.
- [regularFileContents](filewrapper/regularfilecontents.md): The contents of the file-system node associated with a regular-file file wrapper.

### Writing Files

- [write(toFile:atomically:updateFilenames:)](filewrapper/write%28tofile_atomically_updatefilenames_%29.md): Deprecated. Writes a file wrapper’s contents to a given file-system node.
- [write(to:options:originalContentsURL:)](filewrapper/write%28to_options_originalcontentsurl_%29.md): Recursively writes the entire contents of a file wrapper to a given file-system URL.

### Working with Icons

- [icon](filewrapper/icon.md): The icon that represents the file wrapper.

### Constants

- [FileWrapper.ReadingOptions](filewrapper/readingoptions.md): Reading options that can be set by the [init(url:options:)](filewrapper/init%28url_options_%29-70161.md) and [read(from:options:)](filewrapper/read%28from_options_%29.md) methods.
- [FileWrapper.WritingOptions](filewrapper/writingoptions.md): Writing options that can be set by the [write(to:options:originalContentsURL:)](filewrapper/write%28to_options_originalcontentsurl_%29.md) method.

### Initializers

- [init(URL:options:)](filewrapper/init%28url_options_%29-6g2yr.md)
- [init(coder:)](filewrapper/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](nscoding.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](nssecurecoding.md)

## See Also

### Managed file access

- [FileHandle](filehandle.md): An object-oriented wrapper for a file descriptor.
- [NSFileSecurity](nsfilesecurity.md): A stub class that encapsulates security information about a file.
- [NSFileVersion](nsfileversion.md): A snapshot of a file at a specific point in time.

# NSFileWrapper (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A representation of a node (a file, directory, or symbolic link) in the file system.

## Declaration

```objectivec
@interface NSFileWrapper : NSObject
```

<a id="overview"></a>

## Overview

The [NSFileWrapper](filewrapper.md) class provides access to the attributes and contents of file system nodes. A file system node is a file, directory, or symbolic link. Instances of this class are known as file wrappers.

> **Note**

>  Starting in macOS 10.7, [NSFileWrapper](filewrapper.md) moved from Application Kit to Foundation. As a result of this the `icon`, and `setIcon:` methods have moved to a new category of [NSFileWrapper](filewrapper.md) that remains in Application Kit.

File wrappers represent a file system node as an object that can be displayed as an image (and possibly edited in place), saved to the file system, or transmitted to another application.

There are three types of file wrappers:

- Regular-file file wrapper: Represents a regular file.
- Directory file wrapper: Represents a directory.
- Symbolic-link file wrapper: Represents a symbolic link.

A file wrapper has these attributes:

- Filename. Name of the file system node the file wrapper represents.
- file-system attributes. See [NSFileManager](filemanager.md) for information on the contents of the `attributes` dictionary.
- Regular-file contents. Applicable only to regular-file file wrappers.
- File wrappers. Applicable only to directory file wrappers.
- Destination node. Applicable only to symbolic-link file wrappers.

## Topics

### Creating File Wrappers

This class has several designated initializers.

- [initWithURL:options:error:](filewrapper/init%28url_options_%29-70161.md): Initializes a file wrapper instance whose kind is determined by the type of file-system node located by the URL.
- [initWithPath:](filewrapper/init%28path_%29.md): Deprecated. Initializes a file wrapper instance whose kind is determined by the type of file-system node located by the path.
- [initDirectoryWithFileWrappers:](filewrapper/init%28directorywithfilewrappers_%29.md): Initializes the receiver as a directory file wrapper, with a given file-wrapper list.
- [initRegularFileWithContents:](filewrapper/init%28regularfilewithcontents_%29.md): Initializes the receiver as a regular-file file wrapper.
- [initSymbolicLinkWithDestination:](filewrapper/init%28symboliclinkwithdestination_%29.md): Deprecated. Initializes the receiver as a symbolic-link file wrapper.
- [initSymbolicLinkWithDestinationURL:](filewrapper/init%28symboliclinkwithdestinationurl_%29.md): Initializes the receiver as a symbolic-link file wrapper that links to a specified file.
- [initWithSerializedRepresentation:](filewrapper/init%28serializedrepresentation_%29.md): Initializes the receiver as a regular-file file wrapper from given serialized data.

### Querying File Wrappers

- [regularFile](filewrapper/isregularfile.md): This property contains a boolean value that indicates whether the file wrapper object is a regular-file.
- [directory](filewrapper/isdirectory.md): This property contains a boolean value indicating whether the file wrapper is a directory file wrapper.
- [symbolicLink](filewrapper/issymboliclink.md): A boolean that indicates whether the file wrapper object is a symbolic-link file wrapper.

### Accessing File-Wrapper Information

- [fileWrappers](filewrapper/filewrappers.md): The file wrappers contained by a directory file wrapper.
- [addFileWrapper:](filewrapper/addfilewrapper%28__%29.md): Adds a child file wrapper to the receiver, which must be a directory file wrapper.
- [removeFileWrapper:](filewrapper/removefilewrapper%28__%29.md): Removes a child file wrapper from the receiver, which must be a directory file wrapper.
- [addFileWithPath:](filewrapper/addfile%28withpath_%29.md): Deprecated. Creates a file wrapper from a given file-system node and adds it to the receiver, which must be a directory file wrapper.
- [addRegularFileWithContents:preferredFilename:](filewrapper/addregularfile%28withcontents_preferredfilename_%29.md): Creates a regular-file file wrapper with the given contents and adds it to the receiver, which must be a directory file wrapper.
- [addSymbolicLinkWithDestination:preferredFilename:](filewrapper/addsymboliclink%28withdestination_preferredfilename_%29.md): Deprecated. Creates a symbolic-link file wrapper pointing to a given file-system node and adds it to the receiver, which must be a directory file wrapper.
- [keyForFileWrapper:](filewrapper/keyforchildfilewrapper%28__%29.md): Returns the dictionary key used by a directory to identify a given file wrapper.
- [symbolicLinkDestination](filewrapper/symboliclinkdestination%28%29.md): Deprecated. Provides the pathname referenced by the file wrapper object, which must be a symbolic-link file wrapper.
- [symbolicLinkDestinationURL](filewrapper/symboliclinkdestinationurl.md): The URL referenced by the file wrapper object, which must be a symbolic-link file wrapper.

### Updating File Wrappers

- [needsToBeUpdatedFromPath:](filewrapper/needstobeupdated%28frompath_%29.md): Deprecated. Indicates whether the file wrapper needs to be updated to match a given file-system node.
- [matchesContentsOfURL:](filewrapper/matchescontents%28of_%29.md): Indicates whether the contents of a file wrapper matches a directory, regular file, or symbolic link on disk.
- [updateFromPath:](filewrapper/update%28frompath_%29.md): Deprecated. Updates the file wrapper to match a given file-system node.
- [readFromURL:options:error:](filewrapper/read%28from_options_%29.md): Recursively rereads the entire contents of a file wrapper from the specified location on disk.

### Serializing

- [serializedRepresentation](filewrapper/serializedrepresentation.md): The contents of the file wrapper as an opaque data object.

### Accessing Files

- [filename](filewrapper/filename.md): The filename of the file wrapper object
- [preferredFilename](filewrapper/preferredfilename.md): The preferred filename for the file wrapper object.
- [fileAttributes](filewrapper/fileattributes.md): A dictionary of file attributes.
- [regularFileContents](filewrapper/regularfilecontents.md): The contents of the file-system node associated with a regular-file file wrapper.

### Writing Files

- [writeToFile:atomically:updateFilenames:](filewrapper/write%28tofile_atomically_updatefilenames_%29.md): Deprecated. Writes a file wrapper’s contents to a given file-system node.
- [writeToURL:options:originalContentsURL:error:](filewrapper/write%28to_options_originalcontentsurl_%29.md): Recursively writes the entire contents of a file wrapper to a given file-system URL.

### Working with Icons

- [icon](filewrapper/icon.md): The icon that represents the file wrapper.

### Constants

- [NSFileWrapperReadingOptions](filewrapper/readingoptions.md): Reading options that can be set by the [initWithURL:options:error:](filewrapper/init%28url_options_%29-70161.md) and [readFromURL:options:error:](filewrapper/read%28from_options_%29.md) methods.
- [NSFileWrapperWritingOptions](filewrapper/writingoptions.md): Writing options that can be set by the [writeToURL:options:originalContentsURL:error:](filewrapper/write%28to_options_originalcontentsurl_%29.md) method.

### Instance Methods

- [initWithCoder:](filewrapper/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSSecureCoding](nssecurecoding.md)

## See Also

### Managed file access

- [NSFileHandle](filehandle.md): An object-oriented wrapper for a file descriptor.
- [NSFileSecurity](nsfilesecurity.md): A stub class that encapsulates security information about a file.
- [NSFileVersion](nsfileversion.md): A snapshot of a file at a specific point in time.
