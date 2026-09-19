> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/lowlevelbuffer/descriptor-swift.struct

# LowLevelBuffer.Descriptor

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

## Declaration

```swift
struct Descriptor
```

## Topics

### Initializers

- [init(capacity:sizeMultiple:)](descriptor-swift.struct/init%28capacity_sizemultiple_%29.md)

### Instance Properties

- [capacity](descriptor-swift.struct/capacity.md): Length of the buffer in bytes.
- [sizeMultiple](descriptor-swift.struct/sizemultiple.md): For variable length buffers, bytesUsed needs to be a multiple of this value.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
