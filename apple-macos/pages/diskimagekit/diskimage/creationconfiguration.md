> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/diskimagekit/diskimage/creationconfiguration](https://developer.apple.com/documentation/diskimagekit/diskimage/creationconfiguration)

# DiskImage.CreationConfiguration

**Framework:** DiskImageKit  
**Kind:** Protocol  
**Availability:** macOS 27.0+

A marker protocol for disk image creation configurations.

## Declaration

```swift
protocol CreationConfiguration
```

## Topics

### Type Methods

- [asif(url:blockCount:blockSize:)](creationconfiguration/asif%28url_blockcount_blocksize_%29.md): Conforms when `Self` is `ASIFCreationConfiguration`. Returns an Apple sparse image format (ASIF) configuration for standalone or base images.
- [asifLayer(url:type:)](creationconfiguration/asiflayer%28url_type_%29.md): Conforms when `Self` is `ASIFLayerCreationConfiguration`. Returns an Apple sparse image format (ASIF) configuration for stackable layers.
- [raw(url:blockCount:)](creationconfiguration/raw%28url_blockcount_%29.md): Conforms when `Self` is `RAWCreationConfiguration`. Returns a RAW configuration for standalone or base images.

## Relationships

### Conforming Types

- [ASIFCreationConfiguration](../asifcreationconfiguration.md)
- [ASIFLayerCreationConfiguration](../asiflayercreationconfiguration.md)
- [RAWCreationConfiguration](../rawcreationconfiguration.md)

## See Also

### Creating disk images

- [init(creating:)](init%28creating_%29.md): Creates a new, empty disk image.
- [ASIFCreationConfiguration](../asifcreationconfiguration.md): The configuration to use to create Apple sparse image format (ASIF) disk images.
- [ASIFLayerCreationConfiguration](../asiflayercreationconfiguration.md): The configuration to use to create Apple sparse image format (ASIF) disk image layers in stacked images.
- [RAWCreationConfiguration](../rawcreationconfiguration.md): The configuration to use to create RAW disk images.
