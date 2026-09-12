> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/diskimagekit](https://developer.apple.com/documentation/diskimagekit)

# DiskImageKit

**Framework:** DiskImageKit  
**Kind:** Framework  
**Availability:** macOS 27.0+

Create, open, and manage disk images.

<a id="Overview"></a>

## Overview

The DiskImageKit framework provides an API for creating, opening, and managing disk images. It’s designed primarily for use with the Virtualization framework, enabling seamless integration of disk images as storage for virtual machines.

<a id="Supported-Formats"></a>

### Supported Formats

DiskImageKit supports two disk image formats:

- **ASIF**: Apple Sparse Image Format. ASIF images support both standalone and stacked configurations.
- **RAW**: Traditional raw disk image format. You can only use RAW images as standalone images or as base images in stacked configurations.

<a id="Stacked-Disk-Images"></a>

### Stacked Disk Images

A key feature of DiskImageKit is support for stacked disk images, where multiple image layers are combined into a single logical disk. This enables powerful workflows:

- **Base layer**: A read-only foundation image (can be shared across multiple VMs, for example).
- **Cache layer**: Stores blocks read from the layer beneath it (useful when that layer is on slow storage).
- **Overlay layers**: Store modifications to the base image (enables copy-on-write snapshots).

Stacked images allow you to:

- Reduce storage space by sharing a common base image.
- Implement snapshot and restore functionality.
- Optimize performance with caching layers.

<a id="Getting-started"></a>

### Getting started

<a id="Create-a-standalone-ASIF-image"></a>

#### Create a standalone ASIF image

Create a standalone disk image:

```swift
import DiskImageKit

    // Create a 40 GB ASIF disk image with 512-byte blocks.
    let imageURL = URL(fileURLWithPath: "/path/to/disk.asif")
    let blockCount = 40 * 1000 * 1000 * 1000 / 512

    let diskImage = try DiskImage(creating: .asif(
        url: imageURL,
        blockCount: blockCount,
        blockSize: .bytes512
    ))
```

<a id="Open-an-existing-image"></a>

#### Open an existing image

Open any existing disk image (standalone or layer):

```swift
    let diskImage = try DiskImage(opening: .open(url: imageURL))

    print("Format: \(diskImage.format)")
    print("Size: \(diskImage.blockCount) blocks of \(diskImage.blockSize.rawValue) bytes")

    if let layerType = diskImage.layerType {
        print("Layer type: \(layerType == .cache ? "Cache" : "Overlay")")
    }
```

<a id="Create-a-stacked-disk-image"></a>

#### Create a stacked disk image

Build a multi-layer disk image:

```swift
    // 1. Open an existing base image.
    let baseImage = try DiskImage(opening: .open(url: baseImageURL))

    // 2. Add a cache layer. This step improves performance when base is on network storage.
    var stackedImage = try baseImage.appending(.asifLayer(url: cacheURL, type: .cache))

    // 3. Add an overlay layer (stores all writes).
    stackedImage = try stackedImage.appending(.asifLayer(url: overlayURL, type: .overlay))
```

<a id="Use-disk-images-with-the-Virtualization-framework"></a>

#### Use disk images with the Virtualization framework

Pass the disk image - either a standalone image or a stack - to the Virtualization framework:

```swift
    import Virtualization
    let storageAttachment = try VZDiskImageStorageDeviceAttachment(diskImage: diskImage)
```

<a id="Truncate-or-extend-disk-images"></a>

### Truncate or extend disk images

You can truncate or extend disk images (this does not resize the filesystem inside the image):

```swift
    let diskImage = try DiskImage(opening: .open(url: imageURL))
    
    // Truncate to 80 GB (in 512-byte blocks).
    let newBlockCount = 80 * 1000 * 1000 * 1000 / 512
    try diskImage.truncate(blockCount: newBlockCount)    
```

> **Note**

> For stacked images, truncating affects the top layer, which determines the stack’s effective size.

<a id="Inspect-disk-images-with-image-properties"></a>

### Inspect disk images with image properties

DiskImage objects provide various properties to inspect disk images:

```swift
let diskImage = try DiskImage(opening: .open(url: imageURL))

print("Block count: \(diskImage.blockCount).")
print("Block size: \(diskImage.blockSize.rawValue) bytes.")
print("Format: \(diskImage.format)")
print("Open mode: \(diskImage.openMode).")

if let layerType = diskImage.layerType {
    switch layerType {
    case .cache:
        print("This is a cache layer.")
    case .overlay:
        print("This is an overlay layer.")
    }
}

// UUID tracking (for stacked images).
if let layerUUID = diskImage.layerUUID {
    print("Layer UUID: \(layerUUID).")
}
if let parentUUID = diskImage.parentUUID {
    print("Parent UUID: \(parentUUID).")
}

```

<a id="Important-details-about-stacked-disk-images"></a>

### Important details about stacked disk images

Remember to keep the following details in mind when working with stack disk images:

- **One cache layer per stack**: The framework allows only one cache layer per stacked disk image.
- **Layer ordering matters**: Layers are processed from bottom (base) to top. The topmost layer determines the stack’s size and receives all writes.
- **UUID compatibility**: When appending a new layer using [appending(\_:)](diskimagekit/diskimage/appending%28__%29-3pfqg.md), the framework sets the [parentUUID](diskimagekit/diskimage/parentuuid.md) of the layer to the [layerUUID](diskimagekit/diskimage/layeruuid.md) of its parent layer (unless the parent is a raw image, which has no UUID). The layer UUID changes if the layer is written to, to prevent using stacks with incompatible layers. Appending an existing layer using [appending(\_:)](diskimagekit/diskimage/appending%28__%29-4wifj.md) fails if there is such a mismatch.

## Topics

### Essential Types

- [DiskImage](diskimagekit/diskimage.md): The representation of an open disk image
- [StackedImage](diskimagekit/stackedimage.md): The protocol for stacked disk images that contain multiple layers.
- [OpenConfigurationProtocol](diskimagekit/openconfigurationprotocol.md): The protocol for disk image open configurations.
- [OpenConfiguration](diskimagekit/openconfiguration.md): A configuration to use for opening existing disk images.
- [OpenConfiguration.Mode](diskimagekit/openconfiguration/mode-swift.enum.md): Open modes for disk images.

### Creating disk images

- [init(creating:)](diskimagekit/diskimage/init%28creating_%29.md): Creates a new, empty disk image.
- [ASIFCreationConfiguration](diskimagekit/asifcreationconfiguration.md): The configuration to use to create Apple sparse image format (ASIF) disk images.
- [ASIFLayerCreationConfiguration](diskimagekit/asiflayercreationconfiguration.md): The configuration to use to create Apple sparse image format (ASIF) disk image layers in stacked images.
- [DiskImage.CreationConfiguration](diskimagekit/diskimage/creationconfiguration.md): A marker protocol for disk image creation configurations.
- [RAWCreationConfiguration](diskimagekit/rawcreationconfiguration.md): The configuration to use to create RAW disk images.

### Opening and closing disk images

- [init(opening:)](diskimagekit/diskimage/init%28opening_%29.md): Opens an existing disk image using the specified image URL.

### Appending layers and resizing existing images

- [DiskImage.StackableLayer](diskimagekit/diskimage/stackablelayer.md): A marker protocol that stackable disk image layer configuration objects conform to.
- [appending(\_:)](diskimagekit/diskimage/appending%28__%29-4wifj.md): Appends a layer to this disk image, creating or extending a stack.

### Values that describe block sizes and image formats

- [DiskImage.Format](diskimagekit/diskimage/format-swift.enum.md): Values that describe the disk image formats DiskImageKit supports.
- [DiskImage.BlockSize](diskimagekit/diskimage/blocksize-swift.enum.md): Values that represent the block size of a disk image.
- [DiskImage.LayerType](diskimagekit/diskimage/layertype-swift.struct.md): An enumeration that defines the type of a layer in a stacked disk image.

### Errors

- [IncompatibleStackingError](diskimagekit/incompatiblestackingerror.md): The appended layer isn’t compatible with the existing stack.
- [InvalidBlockCountError](diskimagekit/invalidblockcounterror.md): The block count specified for the disk image is invalid (zero or negative).
- [CorruptedImageError](diskimagekit/corruptedimageerror.md): The disk image is corrupted or contains invalid data.
- [UnsupportedFormatError](diskimagekit/unsupportedformaterror.md): The disk image format isn’t supported.
