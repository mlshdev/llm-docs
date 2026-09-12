> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/diskimagekit/diskimage](https://developer.apple.com/documentation/diskimagekit/diskimage)

# DiskImage

**Framework:** DiskImageKit  
**Kind:** Class  
**Availability:** macOS 27.0+

The representation of an open disk image

## Declaration

```swift
class DiskImage
```

<a id="overview"></a>

## Overview

To use a disk image as storage for virtual machine, use this object with the Virtualization API method [init(diskImage:cachingMode:synchronizationMode:)](../virtualization/vzdiskimagestoragedeviceattachment/init%28diskimage_cachingmode_synchronizationmode_%29.md). In addition, it contains properties that describe the disk image and operations to manipulate it.

An image can either be standalone or part of a stack. For more information on stacked disk image, see [StackedImage](stackedimage.md).

The following example demonstrates how to create a stacked disk image with 3 layers:

```
// Open the base image.
let baseImage = try DiskImage(opening: .open(url: baseImageURL))

// Append a new cache layer,
var stackedImage = try baseImage.appending(.asifLayer(url: cacheURL, type: .cache))

// Append an existing overlay layer,
let overlayImage = try DiskImage(opening: .open(url: overlayURL))
stackedImage = try stackedImage.appending(overlayImage)

// Append a new overlay layer.
stackedImage = try stackedImage.appending(.asifLayer(url: overlayURL, type: .overlay))
```

The example demonstrates how to create a standalone, 512 GB (1 billion block) ASIF disk image:

```
_ = try DiskImage(creating: .asif(url: imageURL, blockCount: 1000000000, blockSize: .bytes512))
```

## Topics

### Protocols

- [DiskImage.CreationConfiguration](diskimage/creationconfiguration.md): A marker protocol for disk image creation configurations.
- [DiskImage.StackableLayer](diskimage/stackablelayer.md): A marker protocol that stackable disk image layer configuration objects conform to.

### Structures

- [DiskImage.LayerType](diskimage/layertype-swift.struct.md): An enumeration that defines the type of a layer in a stacked disk image.

### Initializers

- [init(creating:)](diskimage/init%28creating_%29.md): Creates a new, empty disk image.
- [init(opening:)](diskimage/init%28opening_%29.md): Opens an existing disk image using the specified image URL.

### Instance Properties

- [blockCount](diskimage/blockcount.md): The number of blocks in the disk image.
- [blockSize](diskimage/blocksize-swift.property.md): The block size, either 512 bytes or 4 KB.
- [format](diskimage/format-swift.property.md): The format of the disk image.
- [layerType](diskimage/layertype-swift.property.md): The layer type of the disk image.
- [layerUUID](diskimage/layeruuid.md): A UUID of the image that the framework uses to validate its compatibility with the layer above it in the stack
- [openMode](diskimage/openmode.md): The open mode of the disk image, read-only or read-write.
- [parentUUID](diskimage/parentuuid.md): A UUID of the image that must be equal to the layer UUID of the layer beneath it in the stack.
- [size](diskimage/size.md): The logical size of the disk image in bytes.
- [url](diskimage/url.md): The URL of the disk image.

### Instance Methods

- [appending(\_:)](diskimage/appending%28__%29-3pfqg.md): Appends a new layer to this disk image, creating or extending a stack
- [appending(\_:)](diskimage/appending%28__%29-4wifj.md): Appends a layer to this disk image, creating or extending a stack.
- [truncate(blockCount:)](diskimage/truncate%28blockcount_%29.md): Truncate or extend the disk image to a new size.

### Enumerations

- [DiskImage.BlockSize](diskimage/blocksize-swift.enum.md): Values that represent the block size of a disk image.
- [DiskImage.Format](diskimage/format-swift.enum.md): Values that describe the disk image formats DiskImageKit supports.

## Relationships

### Inherited By

- [StackedImage](stackedimage.md)

## See Also

### Essential Types

- [StackedImage](stackedimage.md): The protocol for stacked disk images that contain multiple layers.
- [OpenConfigurationProtocol](openconfigurationprotocol.md): The protocol for disk image open configurations.
- [OpenConfiguration](openconfiguration.md): A configuration to use for opening existing disk images.
- [OpenConfiguration.Mode](openconfiguration/mode-swift.enum.md): Open modes for disk images.
