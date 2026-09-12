> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/diskimagekit/openconfigurationprotocol](https://developer.apple.com/documentation/diskimagekit/openconfigurationprotocol)

# OpenConfigurationProtocol

**Framework:** DiskImageKit  
**Kind:** Protocol  
**Availability:** macOS 27.0+

The protocol for disk image open configurations.

## Declaration

```swift
protocol OpenConfigurationProtocol
```

<a id="overview"></a>

## Overview

This protocol defines the common requirements for opening disk images. Conforming types can be used with [init(opening:)](diskimage/init%28opening_%29.md).

## Topics

### Instance Properties

- [mode](openconfigurationprotocol/mode.md): The [OpenConfiguration.Mode](openconfiguration/mode-swift.enum.md) in which to open the disk image.
- [url](openconfigurationprotocol/url.md): The URL of the disk image to open.

### Type Methods

- [open(url:mode:)](openconfigurationprotocol/open%28url_mode_%29.md): Conforms when `Self` is `OpenConfiguration`. Returns a configuration to use for opening a disk image.

## Relationships

### Conforming Types

- [OpenConfiguration](openconfiguration.md)

## See Also

### Essential Types

- [DiskImage](diskimage.md): The representation of an open disk image
- [StackedImage](stackedimage.md): The protocol for stacked disk images that contain multiple layers.
- [OpenConfiguration](openconfiguration.md): A configuration to use for opening existing disk images.
- [OpenConfiguration.Mode](openconfiguration/mode-swift.enum.md): Open modes for disk images.
