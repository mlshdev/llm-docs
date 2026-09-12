> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileproviderfilesystemflags](https://developer.apple.com/documentation/fileprovider/nsfileproviderfilesystemflags)

# NSFileProviderFileSystemFlags (Swift)

**Framework:** File Provider  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 11.0+ · visionOS 1.0+

Flags that define an item’s on-disk properties and its appearance in the user interface.

## Declaration

```swift
struct NSFileProviderFileSystemFlags
```

<a id="overview"></a>

## Overview

The flags define the on-disk properties of the item. The system modifies the item’s appearance based on these flags.

## Topics

### Flags

- [userReadable](nsfileproviderfilesystemflags/userreadable.md): The user can read the item.
- [userWritable](nsfileproviderfilesystemflags/userwritable.md): The user can modify the item.
- [userExecutable](nsfileproviderfilesystemflags/userexecutable.md): The user can execute the item.
- [hidden](nsfileproviderfilesystemflags/hidden.md): By default, the system hides the item when the user views the file system.
- [pathExtensionHidden](nsfileproviderfilesystemflags/pathextensionhidden.md): By default, the system hides the item’s extension when showing its filename.

### Initializers

- [init(rawValue:)](nsfileproviderfilesystemflags/init%28rawvalue_%29.md): Creates a new file system flag from the provided value.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Managing Metadata

- [extendedAttributes](nsfileprovideritemprotocol/extendedattributes.md): The extended file attributes synced by the File Provider extension.
- [fileSystemFlags](nsfileprovideritemprotocol/filesystemflags.md): Flags that define an item’s on-disk properties and its appearance in the user interface.
- [tagData](nsfileprovideritemprotocol/tagdata.md): An abstract data blob representing the tags associated with the item.
- [userInfo](nsfileprovideritemprotocol/userinfo.md): A property list that contains additional data about the item.
- [favoriteRank](nsfileprovideritemprotocol/favoriterank.md): A 64-bit, unsigned integer indicating the order of the favorite item in the Favorites list.
- [NSFileProviderFavoriteRankUnranked](nsfileproviderfavoriterankunranked.md): A value that indicates that the item is not ranked.
- [typeAndCreator](nsfileprovideritemprotocol/typeandcreator.md): The file type and creator codes for the item.

# NSFileProviderFileSystemFlags (Objective-C)

**Framework:** File Provider  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · macOS 10.15+ · visionOS 1.0+

Flags that define an item’s on-disk properties and its appearance in the user interface.

## Declaration

```objectivec
enum NSFileProviderFileSystemFlags : NSUInteger;
```

<a id="overview"></a>

## Overview

The flags define the on-disk properties of the item. The system modifies the item’s appearance based on these flags.

## Topics

### Flags

- [NSFileProviderFileSystemUserReadable](nsfileproviderfilesystemflags/userreadable.md): The user can read the item.
- [NSFileProviderFileSystemUserWritable](nsfileproviderfilesystemflags/userwritable.md): The user can modify the item.
- [NSFileProviderFileSystemUserExecutable](nsfileproviderfilesystemflags/userexecutable.md): The user can execute the item.
- [NSFileProviderFileSystemHidden](nsfileproviderfilesystemflags/hidden.md): By default, the system hides the item when the user views the file system.
- [NSFileProviderFileSystemPathExtensionHidden](nsfileproviderfilesystemflags/pathextensionhidden.md): By default, the system hides the item’s extension when showing its filename.

## See Also

### Managing Metadata

- [extendedAttributes](nsfileprovideritemprotocol/extendedattributes.md): The extended file attributes synced by the File Provider extension.
- [fileSystemFlags](nsfileprovideritemprotocol/filesystemflags.md): Flags that define an item’s on-disk properties and its appearance in the user interface.
- [tagData](nsfileprovideritemprotocol/tagdata.md): An abstract data blob representing the tags associated with the item.
- [userInfo](nsfileprovideritemprotocol/userinfo.md): A property list that contains additional data about the item.
- [favoriteRank](nsfileprovideritemprotocol/favoriterank.md): A 64-bit, unsigned integer indicating the order of the favorite item in the Favorites list.
- [NSFileProviderFavoriteRankUnranked](nsfileproviderfavoriterankunranked.md): A value that indicates that the item is not ranked.
- [typeAndCreator](nsfileprovideritemprotocol/typeandcreator.md): The file type and creator codes for the item.
