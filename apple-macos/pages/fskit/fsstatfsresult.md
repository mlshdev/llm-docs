> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsstatfsresult](https://developer.apple.com/documentation/fskit/fsstatfsresult)

# FSStatFSResult (Swift)

**Framework:** FSKit  
**Kind:** Class  
**Availability:** macOS 15.4+

A type used to report a volume’s statistics.

## Declaration

```swift
class FSStatFSResult
```

<a id="overview"></a>

## Overview

The names of this type’s properties match those in the `statfs` structure in `statfs(2)`, which reports these values for an FSKit file system. All numeric properties default to `0`. Override these values, unless a given property has no meaningful value to provide.

> **Note**

> Available space, free space, total space, and used space have properties to express their values either as a number of blocks or a number of bytes. Your module may supply both of these values by setting both the relevant block or byte property. Alternatively, a module may set only one of the two properties. When you do this, FSKit calculates the matching value based on [blockSize](fsstatfsresult/blocksize.md).

For the read-only [fileSystemTypeName](fsstatfsresult/filesystemtypename.md), set this value with the designated initializer.

## Topics

### Initializers

- [init(coder:)](fsstatfsresult/init%28coder_%29.md)
- [init(fileSystemTypeName:)](fsstatfsresult/init%28filesystemtypename_%29.md): Creates an statistics result instance, using the given file system type name.

### Instance Properties

- [availableBlocks](fsstatfsresult/availableblocks.md): A property for the number of free blocks available to a non-superuser on the volume.
- [availableBytes](fsstatfsresult/availablebytes.md): A property for the amount of space available to users, in bytes, in the volume.
- [blockSize](fsstatfsresult/blocksize.md): A property for the volume’s block size, in bytes.
- [fileSystemSubType](fsstatfsresult/filesystemsubtype.md): A property for the file system’s subtype or flavor.
- [fileSystemTypeName](fsstatfsresult/filesystemtypename.md): A property for the file system type name.
- [freeBlocks](fsstatfsresult/freeblocks.md): A property for the number of free blocks in the volume.
- [freeBytes](fsstatfsresult/freebytes.md): A property for the amount of free space, in bytes, in the volume.
- [freeFiles](fsstatfsresult/freefiles.md): A property for the total number of free file slots in the volume.
- [ioSize](fsstatfsresult/iosize.md): A property for the optimal block size with which to perform I/O.
- [totalBlocks](fsstatfsresult/totalblocks.md): A property for the volume’s total data block count.
- [totalBytes](fsstatfsresult/totalbytes.md): A property for the total size, in bytes, of the volume.
- [totalFiles](fsstatfsresult/totalfiles.md): A property for the total number of file slots in the volume,
- [usedBlocks](fsstatfsresult/usedblocks.md): A property for the number of used blocks in the volume.
- [usedBytes](fsstatfsresult/usedbytes.md): A property for the amount of used space, in bytes, in the volume.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Inspecting required volume properties

- [supportedVolumeCapabilities](fsvolume/handler/supportedvolumecapabilities.md)
- [FSVolume.SupportedCapabilities](fsvolume/supportedcapabilities.md): A type that represents capabilities supported by a volume, such as hard and symbolic links, journaling, and large file sizes.
- [volumeStatistics](fsvolume/handler/volumestatistics.md): A property that provides up-to-date statistics of the volume.

# FSStatFSResult (Objective-C)

**Framework:** FSKit  
**Kind:** Class  
**Availability:** macOS 15.4+

A type used to report a volume’s statistics.

## Declaration

```objectivec
@interface FSStatFSResult : NSObject
```

<a id="overview"></a>

## Overview

The names of this type’s properties match those in the `statfs` structure in `statfs(2)`, which reports these values for an FSKit file system. All numeric properties default to `0`. Override these values, unless a given property has no meaningful value to provide.

> **Note**

> Available space, free space, total space, and used space have properties to express their values either as a number of blocks or a number of bytes. Your module may supply both of these values by setting both the relevant block or byte property. Alternatively, a module may set only one of the two properties. When you do this, FSKit calculates the matching value based on [blockSize](fsstatfsresult/blocksize.md).

For the read-only [fileSystemTypeName](fsstatfsresult/filesystemtypename.md), set this value with the designated initializer.

## Topics

### Instance Properties

- [availableBlocks](fsstatfsresult/availableblocks.md): A property for the number of free blocks available to a non-superuser on the volume.
- [availableBytes](fsstatfsresult/availablebytes.md): A property for the amount of space available to users, in bytes, in the volume.
- [blockSize](fsstatfsresult/blocksize.md): A property for the volume’s block size, in bytes.
- [fileSystemSubType](fsstatfsresult/filesystemsubtype.md): A property for the file system’s subtype or flavor.
- [fileSystemTypeName](fsstatfsresult/filesystemtypename.md): A property for the file system type name.
- [freeBlocks](fsstatfsresult/freeblocks.md): A property for the number of free blocks in the volume.
- [freeBytes](fsstatfsresult/freebytes.md): A property for the amount of free space, in bytes, in the volume.
- [freeFiles](fsstatfsresult/freefiles.md): A property for the total number of free file slots in the volume.
- [ioSize](fsstatfsresult/iosize.md): A property for the optimal block size with which to perform I/O.
- [totalBlocks](fsstatfsresult/totalblocks.md): A property for the volume’s total data block count.
- [totalBytes](fsstatfsresult/totalbytes.md): A property for the total size, in bytes, of the volume.
- [totalFiles](fsstatfsresult/totalfiles.md): A property for the total number of file slots in the volume,
- [usedBlocks](fsstatfsresult/usedblocks.md): A property for the number of used blocks in the volume.
- [usedBytes](fsstatfsresult/usedbytes.md): A property for the amount of used space, in bytes, in the volume.

### Instance Methods

- [initWithFileSystemTypeName:](fsstatfsresult/init%28filesystemtypename_%29.md): Creates an statistics result instance, using the given file system type name.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Inspecting required volume properties

- [supportedVolumeCapabilities](fsvolume/handler/supportedvolumecapabilities.md)
- [FSVolumeSupportedCapabilities](fsvolume/supportedcapabilities.md): A type that represents capabilities supported by a volume, such as hard and symbolic links, journaling, and large file sizes.
- [volumeStatistics](fsvolume/handler/volumestatistics.md): A property that provides up-to-date statistics of the volume.
