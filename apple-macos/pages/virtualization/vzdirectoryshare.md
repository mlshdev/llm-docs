> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzdirectoryshare](https://developer.apple.com/documentation/virtualization/vzdirectoryshare)

# VZDirectoryShare (Swift)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 12.0+

The base class for a directory share.

## Declaration

```swift
class VZDirectoryShare
```

<a id="overview"></a>

## Overview

A directory share defines how the system exposes host directories to a guest VM.

Don’t instantiate `VZDirectoryShare` directly, use one of its subclasses such as [VZSingleDirectoryShare](vzsingledirectoryshare.md) or [VZMultipleDirectoryShare](vzmultipledirectoryshare.md) instead.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [VZLinuxRosettaDirectoryShare](vzlinuxrosettadirectoryshare.md)
- [VZMultipleDirectoryShare](vzmultipledirectoryshare.md)
- [VZSingleDirectoryShare](vzsingledirectoryshare.md)

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
- [VZSharedDirectory](vzshareddirectory.md): A directory on the host that you can expose to a guest.
- [VZLinuxRosettaDirectoryShare](vzlinuxrosettadirectoryshare.md): The Linux directory share for Rosetta.

# VZDirectoryShare (Objective-C)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 12.0+

The base class for a directory share.

## Declaration

```objectivec
@interface VZDirectoryShare : NSObject
```

<a id="overview"></a>

## Overview

A directory share defines how the system exposes host directories to a guest VM.

Don’t instantiate `VZDirectoryShare` directly, use one of its subclasses such as [VZSingleDirectoryShare](vzsingledirectoryshare.md) or [VZMultipleDirectoryShare](vzmultipledirectoryshare.md) instead.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [VZLinuxRosettaDirectoryShare](vzlinuxrosettadirectoryshare.md)
- [VZMultipleDirectoryShare](vzmultipledirectoryshare.md)
- [VZSingleDirectoryShare](vzsingledirectoryshare.md)

## See Also

### Directory Shares

- [VZMultipleDirectoryShare](vzmultipledirectoryshare.md): An object that describes a directory share for multiple directories.
- [VZSingleDirectoryShare](vzsingledirectoryshare.md): An object that defines the directory share for a single directory.
- [VZSharedDirectory](vzshareddirectory.md): A directory on the host that you can expose to a guest.
- [VZLinuxRosettaDirectoryShare](vzlinuxrosettadirectoryshare.md): The Linux directory share for Rosetta.
