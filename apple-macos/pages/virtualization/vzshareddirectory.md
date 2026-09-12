> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzshareddirectory](https://developer.apple.com/documentation/virtualization/vzshareddirectory)

# VZSharedDirectory (Swift)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 12.0+

A directory on the host that you can expose to a guest.

## Declaration

```swift
class VZSharedDirectory
```

<a id="overview"></a>

## Overview

This exposes a directory from the host file system to the guest.

## Topics

### Creating a Shared Directory

- [init(url:readOnly:)](vzshareddirectory/init%28url_readonly_%29-8j5z.md): Initialize with a host directory.

### Accessing Directory Properties

- [url](vzshareddirectory/url.md): A file URL to a directory on the host system to expose to the guest.
- [isReadOnly](vzshareddirectory/isreadonly.md): A Boolean value that indicates whether the directory is read-only to the guest.

### Initializers

- [init(URL:readOnly:)](vzshareddirectory/init%28url_readonly_%29-7xt6q.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Directory Shares

- [VZMultipleDirectoryShare](vzmultipledirectoryshare.md): An object that describes a directory share for multiple directories.
- [VZSingleDirectoryShare](vzsingledirectoryshare.md): An object that defines the directory share for a single directory.
- [VZDirectoryShare](vzdirectoryshare.md): The base class for a directory share.
- [VZLinuxRosettaDirectoryShare](vzlinuxrosettadirectoryshare.md): The Linux directory share for Rosetta.

# VZSharedDirectory (Objective-C)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 12.0+

A directory on the host that you can expose to a guest.

## Declaration

```objectivec
@interface VZSharedDirectory : NSObject
```

<a id="overview"></a>

## Overview

This exposes a directory from the host file system to the guest.

## Topics

### Creating a Shared Directory

- [initWithURL:readOnly:](vzshareddirectory/init%28url_readonly_%29-8j5z.md): Initialize with a host directory.

### Accessing Directory Properties

- [URL](vzshareddirectory/url.md): A file URL to a directory on the host system to expose to the guest.
- [readOnly](vzshareddirectory/isreadonly.md): A Boolean value that indicates whether the directory is read-only to the guest.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Directory Shares

- [VZMultipleDirectoryShare](vzmultipledirectoryshare.md): An object that describes a directory share for multiple directories.
- [VZSingleDirectoryShare](vzsingledirectoryshare.md): An object that defines the directory share for a single directory.
- [VZDirectoryShare](vzdirectoryshare.md): The base class for a directory share.
- [VZLinuxRosettaDirectoryShare](vzlinuxrosettadirectoryshare.md): The Linux directory share for Rosetta.
