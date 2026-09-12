> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filemanager/directoryenumerator](https://developer.apple.com/documentation/foundation/filemanager/directoryenumerator)

# FileManager.DirectoryEnumerator (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An object that enumerates the contents of a directory.

## Declaration

```swift
class DirectoryEnumerator
```

<a id="overview"></a>

## Overview

You obtain a directory enumerator using [FileManager](../filemanager.md)’s [enumerator(atPath:)](enumerator%28atpath_%29.md) method. The enumeration provides the pathnames of all files and directories contained within that directory. These pathnames are relative to the directory.

An enumeration is recursive, including the files of all subdirectories, and crosses device boundaries. An enumeration does not resolve symbolic links, or attempt to traverse symbolic links that point to directories.

## Topics

### Getting File and Directory Attributes

- [directoryAttributes](directoryenumerator/directoryattributes.md): A dictionary with the attributes of the directory at which enumeration started.
- [fileAttributes](directoryenumerator/fileattributes.md): A dictionary with the attributes of the most recently returned file or subdirectory (as referenced by the pathname).
- [level](directoryenumerator/level.md): The number of levels deep the current object is in the directory hierarchy being enumerated.

### Skipping Subdirectories

- [skipDescendents()](directoryenumerator/skipdescendents%28%29.md): Causes the receiver to skip recursion into the most recently obtained subdirectory.
- [skipDescendants()](directoryenumerator/skipdescendants%28%29.md): Causes the receiver to skip recursion into the most recently obtained subdirectory.

### Instance Properties

- [isEnumeratingDirectoryPostOrder](directoryenumerator/isenumeratingdirectorypostorder.md)

## Relationships

### Inherits From

- [NSEnumerator](../nsenumerator.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSFastEnumeration](../nsfastenumeration.md)
- [NSObjectProtocol](../../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [Sequence](https://developer.apple.com/documentation/swift/sequence)

## See Also

### Discovering directory contents

- [contentsOfDirectory(at:includingPropertiesForKeys:options:)](contentsofdirectory%28at_includingpropertiesforkeys_options_%29.md): Performs a shallow search of the specified directory and returns URLs for the contained items.
- [contentsOfDirectory(atPath:)](contentsofdirectory%28atpath_%29.md): Performs a shallow search of the specified directory and returns the paths of any contained items.
- [enumerator(at:includingPropertiesForKeys:options:errorHandler:)](enumerator%28at_includingpropertiesforkeys_options_errorhandler_%29.md): Returns a directory enumerator object that can be used to perform a deep enumeration of the directory at the specified URL.
- [enumerator(atPath:)](enumerator%28atpath_%29.md): Returns a directory enumerator object that can be used to perform a deep enumeration of the directory at the specified path.
- [mountedVolumeURLs(includingResourceValuesForKeys:options:)](mountedvolumeurls%28includingresourcevaluesforkeys_options_%29.md): Returns an array of URLs that identify the mounted volumes available on the device.
- [FileManager.VolumeEnumerationOptions](volumeenumerationoptions.md): Options for enumerating mounted volumes with the [mountedVolumeURLs(includingResourceValuesForKeys:options:)](mountedvolumeurls%28includingresourcevaluesforkeys_options_%29.md) method.
- [subpathsOfDirectory(atPath:)](subpathsofdirectory%28atpath_%29.md): Performs a deep enumeration of the specified directory and returns the paths of all of the contained subdirectories.
- [subpaths(atPath:)](subpaths%28atpath_%29.md): Returns an array of strings identifying the paths for all items in the specified directory.

# NSDirectoryEnumerator (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An object that enumerates the contents of a directory.

## Declaration

```objectivec
@interface NSDirectoryEnumerator : NSEnumerator
```

<a id="overview"></a>

## Overview

You obtain a directory enumerator using [NSFileManager](../filemanager.md)’s [enumeratorAtPath:](enumerator%28atpath_%29.md) method. The enumeration provides the pathnames of all files and directories contained within that directory. These pathnames are relative to the directory.

An enumeration is recursive, including the files of all subdirectories, and crosses device boundaries. An enumeration does not resolve symbolic links, or attempt to traverse symbolic links that point to directories.

## Topics

### Getting File and Directory Attributes

- [directoryAttributes](directoryenumerator/directoryattributes.md): A dictionary with the attributes of the directory at which enumeration started.
- [fileAttributes](directoryenumerator/fileattributes.md): A dictionary with the attributes of the most recently returned file or subdirectory (as referenced by the pathname).
- [level](directoryenumerator/level.md): The number of levels deep the current object is in the directory hierarchy being enumerated.

### Skipping Subdirectories

- [skipDescendents](directoryenumerator/skipdescendents%28%29.md): Causes the receiver to skip recursion into the most recently obtained subdirectory.
- [skipDescendants](directoryenumerator/skipdescendants%28%29.md): Causes the receiver to skip recursion into the most recently obtained subdirectory.

### Instance Properties

- [isEnumeratingDirectoryPostOrder](directoryenumerator/isenumeratingdirectorypostorder.md)

## Relationships

### Inherits From

- [NSEnumerator](../nsenumerator.md)

## See Also

### Discovering directory contents

- [contentsOfDirectoryAtURL:includingPropertiesForKeys:options:error:](contentsofdirectory%28at_includingpropertiesforkeys_options_%29.md): Performs a shallow search of the specified directory and returns URLs for the contained items.
- [contentsOfDirectoryAtPath:error:](contentsofdirectory%28atpath_%29.md): Performs a shallow search of the specified directory and returns the paths of any contained items.
- [enumeratorAtURL:includingPropertiesForKeys:options:errorHandler:](../nsfilemanager/enumeratoraturl_includingpropertiesforkeys_options_errorhandler_.md): Returns a directory enumerator object that can be used to perform a deep enumeration of the directory at the specified URL.
- [enumeratorAtPath:](enumerator%28atpath_%29.md): Returns a directory enumerator object that can be used to perform a deep enumeration of the directory at the specified path.
- [mountedVolumeURLsIncludingResourceValuesForKeys:options:](mountedvolumeurls%28includingresourcevaluesforkeys_options_%29.md): Returns an array of URLs that identify the mounted volumes available on the device.
- [NSVolumeEnumerationOptions](volumeenumerationoptions.md): Options for enumerating mounted volumes with the [mountedVolumeURLsIncludingResourceValuesForKeys:options:](mountedvolumeurls%28includingresourcevaluesforkeys_options_%29.md) method.
- [subpathsOfDirectoryAtPath:error:](subpathsofdirectory%28atpath_%29.md): Performs a deep enumeration of the specified directory and returns the paths of all of the contained subdirectories.
- [subpathsAtPath:](subpaths%28atpath_%29.md): Returns an array of strings identifying the paths for all items in the specified directory.
