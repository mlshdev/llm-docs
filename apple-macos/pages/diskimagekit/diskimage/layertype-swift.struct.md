> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/diskimagekit/diskimage/layertype-swift.struct](https://developer.apple.com/documentation/diskimagekit/diskimage/layertype-swift.struct)

# DiskImage.LayerType

**Framework:** DiskImageKit  
**Kind:** Structure  
**Availability:** macOS 27.0+

An enumeration that defines the type of a layer in a stacked disk image.

## Declaration

```swift
struct LayerType
```

## Topics

### Operators

- [==(\_:\_:)](layertype-swift.struct/==%28____%29.md): Equatable implementation.

### Type Properties

- [cache](layertype-swift.struct/cache.md): A cache layer.
- [overlay](layertype-swift.struct/overlay.md): An overlay layer that inherits its size from the layer beneath it.

### Type Methods

- [overlay(blockCount:)](layertype-swift.struct/overlay%28blockcount_%29.md): An overlay layer with a specific block count.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Values that describe block sizes and image formats

- [DiskImage.Format](format-swift.enum.md): Values that describe the disk image formats DiskImageKit supports.
- [DiskImage.BlockSize](blocksize-swift.enum.md): Values that represent the block size of a disk image.
