> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsblockdeviceresource](https://developer.apple.com/documentation/fskit/fsblockdeviceresource)

# FSBlockDeviceResource (Swift)

**Framework:** FSKit  
**Kind:** Class  
**Availability:** macOS 15.4+

A resource that represents a block storage disk partition.

## Declaration

```swift
class FSBlockDeviceResource
```

<a id="overview"></a>

## Overview

A `FSBlockDeviceResource` can exist in either a proxied or nonproxied version. Only the `fskitd` daemon creates “real” (nonproxied) instances of this class. Client applications and daemons create proxy objects for requests, and `fskitd` opens the underlying device during the processing of the request.

This class wraps a file descriptor for a disk device or partition. Its fundamental identifier is the BSD disk name ([bsdName](fsblockdeviceresource/bsdname.md)) for the underlying IOMedia object. However, [FSBlockDeviceResource](fsblockdeviceresource.md) doesn’t expose the underlying file descriptor. Instead, it provides accessor methods that can read from and write to the partition, either directly or using the kernel buffer cache.

When you use a `FSBlockDeviceResource`, your file system implementation also conforms to a maintenance operation protocol. These protocols add support for checking, repairing, and optionally formatting file systems. The system doesn’t mount block device file systems until they pass a file system check. For an [FSUnaryFileSystem](fsunaryfilesystem.md) that uses `FSBlockDeviceResource`, conform to `FSManageableResourceMaintenanceOperations`.

> **Important**

> Don’t mix direct I/O operations (`read(into:startingAt:length:)` and `write(from:startingAt:length:)`) with metadata operations ([metadataRead(into:startingAt:length:)](fsblockdeviceresource/metadataread%28into_startingat_length_%29.md), [metadataWrite(from:startingAt:length:)](fsblockdeviceresource/metadatawrite%28from_startingat_length_%29.md), and [delayedMetadataWrite(from:startingAt:length:)](fsblockdeviceresource/delayedmetadatawrite%28from_startingat_length_%29.md)) on the same range. Direct I/O bypasses the buffer cache, so mixing the two may result in stale or inconsistent data.

## Topics

### Accessing resource properties

- [bsdName](fsblockdeviceresource/bsdname.md): The device name of the resource.
- [isWritable](fsblockdeviceresource/iswritable.md): A Boolean property that indicates whether the resource can write data to the device.
- [blockCount](fsblockdeviceresource/blockcount.md): The block count on this resource.
- [blockSize](fsblockdeviceresource/blocksize.md): The logical block size, the size of data blocks used by the file system.
- [physicalBlockSize](fsblockdeviceresource/physicalblocksize.md): The sector size of the device.

### Reading and writing data

- [read(into:startingAt:length:)](fsblockdeviceresource/read%28into_startingat_length_%29-4ax6s.md): Synchronously reads data from the resource into a buffer.
- [read(into:startingAt:length:)](fsblockdeviceresource/read%28into_startingat_length_%29-5yozi.md): Asychronously reads data from the resource into a buffer.
- [read(into:startingAt:length:completionHandler:)](fsblockdeviceresource/read%28into_startingat_length_completionhandler_%29.md): Reads data from the resource into a buffer and executes a closure afterwards.
- [write(from:startingAt:length:)](fsblockdeviceresource/write%28from_startingat_length_%29-2fmgt.md): Synchronously writes data from from a buffer to the resource and executes a block afterwards.
- [write(from:startingAt:length:)](fsblockdeviceresource/write%28from_startingat_length_%29-9oa1x.md): Asynchronously writes data from from a buffer to the resource.
- [write(from:startingAt:length:completionHandler:)](fsblockdeviceresource/write%28from_startingat_length_completionhandler_%29.md): Writes data from from a buffer to the resource and executes a closure afterwards.

### Reading and writing data with kernel buffer cache

- [metadataRead(into:startingAt:length:)](fsblockdeviceresource/metadataread%28into_startingat_length_%29.md): Synchronously reads file system metadata from the resource into a buffer.
- [metadataWrite(from:startingAt:length:)](fsblockdeviceresource/metadatawrite%28from_startingat_length_%29.md): Synchronously writes file system metadata from a buffer to the resource.
- [delayedMetadataWrite(from:startingAt:length:)](fsblockdeviceresource/delayedmetadatawrite%28from_startingat_length_%29.md): Writes file system metadata from a buffer to a cache, prior to flushing it to the resource.
- [metadataFlush()](fsblockdeviceresource/metadataflush%28%29.md): Synchronously flushes the resource’s buffer cache.
- [asynchronousMetadataFlush()](fsblockdeviceresource/asynchronousmetadataflush%28%29.md): Asynchronously flushes the resource’s buffer cache.
- [metadataClear(\_:withDelayedWrites:)](fsblockdeviceresource/metadataclear%28__withdelayedwrites_%29.md): Clears the given ranges within the buffer cache.
- [metadataPurge(\_:)](fsblockdeviceresource/metadatapurge%28__%29.md): Synchronously purges the given ranges from the buffer cache.
- [FSMetadataRange](fsmetadatarange.md): A range that describes contiguous metadata segments on disk.

## Relationships

### Inherits From

- [FSResource](fsresource.md)

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

### Resources

- [FSResource](fsresource.md): An abstract resource a file system uses to provide data for a volume.
- [FSPathURLResource](fspathurlresource.md): A resource that represents a path in the system file space.
- [FSGenericURLResource](fsgenericurlresource.md): A resource that represents an abstract URL.

# FSBlockDeviceResource (Objective-C)

**Framework:** FSKit  
**Kind:** Class  
**Availability:** macOS 15.4+

A resource that represents a block storage disk partition.

## Declaration

```objectivec
@interface FSBlockDeviceResource : FSResource
```

<a id="overview"></a>

## Overview

A `FSBlockDeviceResource` can exist in either a proxied or nonproxied version. Only the `fskitd` daemon creates “real” (nonproxied) instances of this class. Client applications and daemons create proxy objects for requests, and `fskitd` opens the underlying device during the processing of the request.

This class wraps a file descriptor for a disk device or partition. Its fundamental identifier is the BSD disk name ([BSDName](fsblockdeviceresource/bsdname.md)) for the underlying IOMedia object. However, [FSBlockDeviceResource](fsblockdeviceresource.md) doesn’t expose the underlying file descriptor. Instead, it provides accessor methods that can read from and write to the partition, either directly or using the kernel buffer cache.

When you use a `FSBlockDeviceResource`, your file system implementation also conforms to a maintenance operation protocol. These protocols add support for checking, repairing, and optionally formatting file systems. The system doesn’t mount block device file systems until they pass a file system check. For an [FSUnaryFileSystem](fsunaryfilesystem.md) that uses `FSBlockDeviceResource`, conform to `FSManageableResourceMaintenanceOperations`.

> **Important**

> Don’t mix direct I/O operations (`read(into:startingAt:length:)` and `write(from:startingAt:length:)`) with metadata operations ([metadataRead(into:startingAt:length:)](fsblockdeviceresource/metadataread%28into_startingat_length_%29.md), [metadataWrite(from:startingAt:length:)](fsblockdeviceresource/metadatawrite%28from_startingat_length_%29.md), and [delayedMetadataWrite(from:startingAt:length:)](fsblockdeviceresource/delayedmetadatawrite%28from_startingat_length_%29.md)) on the same range. Direct I/O bypasses the buffer cache, so mixing the two may result in stale or inconsistent data.

## Topics

### Accessing resource properties

- [BSDName](fsblockdeviceresource/bsdname.md): The device name of the resource.
- [writable](fsblockdeviceresource/iswritable.md): A Boolean property that indicates whether the resource can write data to the device.
- [blockCount](fsblockdeviceresource/blockcount.md): The block count on this resource.
- [blockSize](fsblockdeviceresource/blocksize.md): The logical block size, the size of data blocks used by the file system.
- [physicalBlockSize](fsblockdeviceresource/physicalblocksize.md): The sector size of the device.

### Reading and writing data

- [readInto:startingAt:length:error:](fsblockdeviceresource/readinto_startingat_length_error_.md): Synchronously reads data from the resource into a buffer.
- [readInto:startingAt:length:completionHandler:](fsblockdeviceresource/readinto_startingat_length_completionhandler_.md): Reads data from the resource into a buffer and executes a block afterwards.
- [writeFrom:startingAt:length:error:](fsblockdeviceresource/writefrom_startingat_length_error_.md): Synchronously writes data from from a buffer to the resource and executes a block afterwards.
- [writeFrom:startingAt:length:completionHandler:](fsblockdeviceresource/writefrom_startingat_length_completionhandler_.md): Writes data from from a buffer to the resource and executes a block afterwards.

### Reading and writing data with kernel buffer cache

- [metadataReadInto:startingAt:length:error:](fsblockdeviceresource/metadatareadinto_startingat_length_error_.md): Synchronously reads file system metadata from the resource into a buffer.
- [metadataWriteFrom:startingAt:length:error:](fsblockdeviceresource/metadatawritefrom_startingat_length_error_.md): Synchronously writes file system metadata from a buffer to the resource.
- [delayedMetadataWriteFrom:startingAt:length:error:](fsblockdeviceresource/delayedmetadatawritefrom_startingat_length_error_.md): Writes file system metadata from a buffer to a cache, prior to flushing it to the resource.
- [metadataFlushWithError:](fsblockdeviceresource/metadataflush%28%29.md): Synchronously flushes the resource’s buffer cache.
- [asynchronousMetadataFlushWithError:](fsblockdeviceresource/asynchronousmetadataflush%28%29.md): Asynchronously flushes the resource’s buffer cache.
- [metadataClear:withDelayedWrites:error:](fsblockdeviceresource/metadataclear%28__withdelayedwrites_%29.md): Clears the given ranges within the buffer cache.
- [metadataPurge:error:](fsblockdeviceresource/metadatapurge%28__%29.md): Synchronously purges the given ranges from the buffer cache.
- [FSMetadataRange](fsmetadatarange.md): A range that describes contiguous metadata segments on disk.

## Relationships

### Inherits From

- [FSResource](fsresource.md)

## See Also

### Resources

- [FSResource](fsresource.md): An abstract resource a file system uses to provide data for a volume.
- [FSPathURLResource](fspathurlresource.md): A resource that represents a path in the system file space.
- [FSGenericURLResource](fsgenericurlresource.md): A resource that represents an abstract URL.
