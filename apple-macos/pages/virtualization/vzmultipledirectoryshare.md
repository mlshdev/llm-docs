> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzmultipledirectoryshare](https://developer.apple.com/documentation/virtualization/vzmultipledirectoryshare)

# VZMultipleDirectoryShare (Swift)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 12.0+

An object that describes a directory share for multiple directories.

## Declaration

```swift
class VZMultipleDirectoryShare
```

<a id="overview"></a>

## Overview

This directory share exposes multiple directories from the host file system to the guest VM.

## Topics

### Creating a directory share

- [init()](vzmultipledirectoryshare/init%28%29.md): Initializes the directory share with an empty set of directories.
- [init(directories:)](vzmultipledirectoryshare/init%28directories_%29.md): Creates the directory share with a set of directories on the host.

### Accessing the shared directories

- [directories](vzmultipledirectoryshare/directories.md): The directories on the host to expose to the guest.

### Directory name utility methods

- [canonicalizedName(from:)](vzmultipledirectoryshare/canonicalizedname%28from_%29.md): Transforms a string to be a valid directory name.
- [validateName(\_:)](vzmultipledirectoryshare/validatename%28__%29.md): Check if a name is a valid directory name.

## Relationships

### Inherits From

- [VZDirectoryShare](vzdirectoryshare.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Related Documentation

- [VZDirectorySharingDeviceConfiguration](vzdirectorysharingdeviceconfiguration.md): The base class for a directory sharing device configuration.

### Directory Shares

- [VZSingleDirectoryShare](vzsingledirectoryshare.md): An object that defines the directory share for a single directory.
- [VZSharedDirectory](vzshareddirectory.md): A directory on the host that you can expose to a guest.
- [VZDirectoryShare](vzdirectoryshare.md): The base class for a directory share.
- [VZLinuxRosettaDirectoryShare](vzlinuxrosettadirectoryshare.md): The Linux directory share for Rosetta.

# VZMultipleDirectoryShare (Objective-C)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 12.0+

An object that describes a directory share for multiple directories.

## Declaration

```objectivec
@interface VZMultipleDirectoryShare : VZDirectoryShare
```

<a id="overview"></a>

## Overview

This directory share exposes multiple directories from the host file system to the guest VM.

## Topics

### Creating a directory share

- [init](vzmultipledirectoryshare/init%28%29.md): Initializes the directory share with an empty set of directories.
- [initWithDirectories:](vzmultipledirectoryshare/init%28directories_%29.md): Creates the directory share with a set of directories on the host.

### Accessing the shared directories

- [directories](vzmultipledirectoryshare/directories.md): The directories on the host to expose to the guest.

### Directory name utility methods

- [canonicalizedNameFromName:](vzmultipledirectoryshare/canonicalizedname%28from_%29.md): Transforms a string to be a valid directory name.
- [validateName:error:](vzmultipledirectoryshare/validatename%28__%29.md): Check if a name is a valid directory name.

## Relationships

### Inherits From

- [VZDirectoryShare](vzdirectoryshare.md)

## See Also

### Related Documentation

- [VZDirectorySharingDeviceConfiguration](vzdirectorysharingdeviceconfiguration.md): The base class for a directory sharing device configuration.

### Directory Shares

- [VZSingleDirectoryShare](vzsingledirectoryshare.md): An object that defines the directory share for a single directory.
- [VZSharedDirectory](vzshareddirectory.md): A directory on the host that you can expose to a guest.
- [VZDirectoryShare](vzdirectoryshare.md): The base class for a directory share.
- [VZLinuxRosettaDirectoryShare](vzlinuxrosettadirectoryshare.md): The Linux directory share for Rosetta.
