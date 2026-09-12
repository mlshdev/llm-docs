> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filemanager/directoryenumerationoptions](https://developer.apple.com/documentation/foundation/filemanager/directoryenumerationoptions)

# FileManager.DirectoryEnumerationOptions (Swift)

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Options for enumerating the contents of directories.

## Declaration

```swift
struct DirectoryEnumerationOptions
```

<a id="overview"></a>

## Overview

These options are used with the [contentsOfDirectory(at:includingPropertiesForKeys:options:)](contentsofdirectory%28at_includingpropertiesforkeys_options_%29.md) method.

## Topics

### Creating a Directory Enumeration Options Value

- [init(rawValue:)](directoryenumerationoptions/init%28rawvalue_%29.md): Creates a directory enumeration options value.

### Directory Enumeration Options

- [skipsSubdirectoryDescendants](directoryenumerationoptions/skipssubdirectorydescendants.md): An option to perform a shallow enumeration that doesn’t descend into directories.
- [skipsPackageDescendants](directoryenumerationoptions/skipspackagedescendants.md): An option to treat packages like files and not descend into their contents.
- [skipsHiddenFiles](directoryenumerationoptions/skipshiddenfiles.md): An option to skip hidden files.

### Type Properties

- [includesDirectoriesPostOrder](directoryenumerationoptions/includesdirectoriespostorder.md): An option to skip hidden files.
- [producesRelativePathURLs](directoryenumerationoptions/producesrelativepathurls.md): An option to skip hidden files.

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

### Supporting Types

- [FileManager.SearchPathDirectory](searchpathdirectory.md): The location of significant directories.
- [FileManager.SearchPathDomainMask](searchpathdomainmask.md): Domain constants specifying base locations to use when you search for significant directories.
- [FileAttributeKey](../fileattributekey.md): Keys in dictionaries used to get and set file attributes.
- [FileAttributeType](../fileattributetype.md): Values representing a file’s type attribute.
- [FileProtectionType](../fileprotectiontype.md): Protection level values that can be associated with a file attribute key.
- [URLFileProtection](../urlfileprotection.md): Protection-level values for a URL resource key.

# NSDirectoryEnumerationOptions (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Options for enumerating the contents of directories.

## Declaration

```objectivec
enum NSDirectoryEnumerationOptions : NSUInteger;
```

<a id="overview"></a>

## Overview

These options are used with the [contentsOfDirectoryAtURL:includingPropertiesForKeys:options:error:](contentsofdirectory%28at_includingpropertiesforkeys_options_%29.md) method.

## Topics

### Directory Enumeration Options

- [NSDirectoryEnumerationSkipsSubdirectoryDescendants](directoryenumerationoptions/skipssubdirectorydescendants.md): An option to perform a shallow enumeration that doesn’t descend into directories.
- [NSDirectoryEnumerationSkipsPackageDescendants](directoryenumerationoptions/skipspackagedescendants.md): An option to treat packages like files and not descend into their contents.
- [NSDirectoryEnumerationSkipsHiddenFiles](directoryenumerationoptions/skipshiddenfiles.md): An option to skip hidden files.

### Enumeration Cases

- [NSDirectoryEnumerationIncludesDirectoriesPostOrder](directoryenumerationoptions/includesdirectoriespostorder.md): An option to skip hidden files.
- [NSDirectoryEnumerationProducesRelativePathURLs](directoryenumerationoptions/producesrelativepathurls.md): An option to skip hidden files.

## See Also

### Supporting Types

- [NSSearchPathDirectory](searchpathdirectory.md): The location of significant directories.
- [NSSearchPathDomainMask](searchpathdomainmask.md): Domain constants specifying base locations to use when you search for significant directories.
- [NSFileAttributeKey](../fileattributekey.md): Keys in dictionaries used to get and set file attributes.
- [NSFileAttributeType](../fileattributetype.md): Values representing a file’s type attribute.
- [NSFileProtectionType](../fileprotectiontype.md): Protection level values that can be associated with a file attribute key.
- [NSURLFileProtectionType](../urlfileprotection.md): Protection-level values for a URL resource key.
