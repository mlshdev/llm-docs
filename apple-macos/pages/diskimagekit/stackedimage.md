> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/diskimagekit/stackedimage](https://developer.apple.com/documentation/diskimagekit/stackedimage)

# StackedImage

**Framework:** DiskImageKit  
**Kind:** Protocol  
**Availability:** macOS 27.0+

The protocol for stacked disk images that contain multiple layers.

## Declaration

```swift
protocol StackedImage : DiskImage
```

<a id="overview"></a>

## Overview

A stacked disk image combines multiple layers into a single logical disk image. The first layer (the bottom of the stack) is the base layer, and subsequent layers are either cache or overlay layers that modify or cache the layers beneath.

The following example demonstrates how to create a stacked image.

```
let baseImage = try DiskImage(opening: .open(url: baseImageURL))
var stackedImage = try baseImage.appending(.asifLayer(url: cacheURL, type: .cache))
stackedImage = try stackedImage.appending(.asifLayer(url: shadowURL, type: .overlay))
```

## Topics

### Instance Properties

- [layers](stackedimage/layers.md): An array of all layers in the stack, from base (index 0) to top.

## Relationships

### Inherits From

- [DiskImage](diskimage.md)

## See Also

### Essential Types

- [DiskImage](diskimage.md): The representation of an open disk image
- [OpenConfigurationProtocol](openconfigurationprotocol.md): The protocol for disk image open configurations.
- [OpenConfiguration](openconfiguration.md): A configuration to use for opening existing disk images.
- [OpenConfiguration.Mode](openconfiguration/mode-swift.enum.md): Open modes for disk images.
