> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzsingledirectoryshare](https://developer.apple.com/documentation/virtualization/vzsingledirectoryshare)

# VZSingleDirectoryShare (Swift)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 12.0+

An object that defines the directory share for a single directory.

## Declaration

```swift
class VZSingleDirectoryShare
```

<a id="overview"></a>

## Overview

This directory share exposes a single directory from the host file system to the guest.

## Topics

### Creating a directory share

- [init(directory:)](vzsingledirectoryshare/init%28directory_%29.md): Creates a directory share with a directory that you specify on the host.

### Accessing directory properties

- [directory](vzsingledirectoryshare/directory.md): The directory on the host to share with the guest VM.

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

- [VZMultipleDirectoryShare](vzmultipledirectoryshare.md): An object that describes a directory share for multiple directories.
- [VZSharedDirectory](vzshareddirectory.md): A directory on the host that you can expose to a guest.
- [VZDirectoryShare](vzdirectoryshare.md): The base class for a directory share.
- [VZLinuxRosettaDirectoryShare](vzlinuxrosettadirectoryshare.md): The Linux directory share for Rosetta.

# VZSingleDirectoryShare (Objective-C)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 12.0+

An object that defines the directory share for a single directory.

## Declaration

```objectivec
@interface VZSingleDirectoryShare : VZDirectoryShare
```

<a id="overview"></a>

## Overview

This directory share exposes a single directory from the host file system to the guest.

## Topics

### Creating a directory share

- [initWithDirectory:](vzsingledirectoryshare/init%28directory_%29.md): Creates a directory share with a directory that you specify on the host.

### Accessing directory properties

- [directory](vzsingledirectoryshare/directory.md): The directory on the host to share with the guest VM.

## Relationships

### Inherits From

- [VZDirectoryShare](vzdirectoryshare.md)

## See Also

### Related Documentation

- [VZDirectorySharingDeviceConfiguration](vzdirectorysharingdeviceconfiguration.md): The base class for a directory sharing device configuration.

### Directory Shares

- [VZMultipleDirectoryShare](vzmultipledirectoryshare.md): An object that describes a directory share for multiple directories.
- [VZSharedDirectory](vzshareddirectory.md): A directory on the host that you can expose to a guest.
- [VZDirectoryShare](vzdirectoryshare.md): The base class for a directory share.
- [VZLinuxRosettaDirectoryShare](vzlinuxrosettadirectoryshare.md): The Linux directory share for Rosetta.
