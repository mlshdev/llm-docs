> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/diskimagekit/diskimage/format-swift.enum](https://developer.apple.com/documentation/diskimagekit/diskimage/format-swift.enum)

# DiskImage.Format

**Framework:** DiskImageKit  
**Kind:** Enumeration  
**Availability:** macOS 27.0+

Values that describe the disk image formats DiskImageKit supports.

## Declaration

```swift
enum Format
```

## Topics

### Enumeration Cases

- [DiskImage.Format.asif](format-swift.enum/asif.md): Apple sparse image format (ASIF).
- [DiskImage.Format.raw](format-swift.enum/raw.md): Raw disk image.
- [DiskImage.Format.stack](format-swift.enum/stack.md): Stacked disk image.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Values that describe block sizes and image formats

- [DiskImage.BlockSize](blocksize-swift.enum.md): Values that represent the block size of a disk image.
- [DiskImage.LayerType](layertype-swift.struct.md): An enumeration that defines the type of a layer in a stacked disk image.
