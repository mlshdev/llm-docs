> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/diskimagekit/asifcreationconfiguration](https://developer.apple.com/documentation/diskimagekit/asifcreationconfiguration)

# ASIFCreationConfiguration

**Framework:** DiskImageKit  
**Kind:** Structure  
**Availability:** macOS 27.0+

The configuration to use to create Apple sparse image format (ASIF) disk images.

## Declaration

```swift
struct ASIFCreationConfiguration
```

## Topics

### Type Methods

- [layer(url:type:)](asifcreationconfiguration/layer%28url_type_%29.md): Creates a configuration object for a new Apple sparse image format (ASIF) disk image layer.

## Relationships

### Conforms To

- [DiskImage.CreationConfiguration](diskimage/creationconfiguration.md)

## See Also

### Creating disk images

- [init(creating:)](diskimage/init%28creating_%29.md): Creates a new, empty disk image.
- [ASIFLayerCreationConfiguration](asiflayercreationconfiguration.md): The configuration to use to create Apple sparse image format (ASIF) disk image layers in stacked images.
- [DiskImage.CreationConfiguration](diskimage/creationconfiguration.md): A marker protocol for disk image creation configurations.
- [RAWCreationConfiguration](rawcreationconfiguration.md): The configuration to use to create RAW disk images.
