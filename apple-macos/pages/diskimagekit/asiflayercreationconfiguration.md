> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/diskimagekit/asiflayercreationconfiguration](https://developer.apple.com/documentation/diskimagekit/asiflayercreationconfiguration)

# ASIFLayerCreationConfiguration

**Framework:** DiskImageKit  
**Kind:** Structure  
**Availability:** macOS 27.0+

The configuration to use to create Apple sparse image format (ASIF) disk image layers in stacked images.

## Declaration

```swift
struct ASIFLayerCreationConfiguration
```

<a id="overview"></a>

## Overview

This type is returned by `asifLayer(url:type:)` and can only be used with stacking operations like `DiskImage/appending(_:)-(CreationConfiguration&StackableLayer)`.

## Relationships

### Conforms To

- [DiskImage.CreationConfiguration](diskimage/creationconfiguration.md)
- [DiskImage.StackableLayer](diskimage/stackablelayer.md)

## See Also

### Creating disk images

- [init(creating:)](diskimage/init%28creating_%29.md): Creates a new, empty disk image.
- [ASIFCreationConfiguration](asifcreationconfiguration.md): The configuration to use to create Apple sparse image format (ASIF) disk images.
- [DiskImage.CreationConfiguration](diskimage/creationconfiguration.md): A marker protocol for disk image creation configurations.
- [RAWCreationConfiguration](rawcreationconfiguration.md): The configuration to use to create RAW disk images.
