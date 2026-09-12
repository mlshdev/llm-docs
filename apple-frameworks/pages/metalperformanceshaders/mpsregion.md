> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsregion](https://developer.apple.com/documentation/metalperformanceshaders/mpsregion)

# MPSRegion (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A region of an image.

## Declaration

```swift
struct MPSRegion
```

## Topics

### Fields

- [origin](mpsregion/origin.md): The top-left corner of the region.
- [size](mpsregion/size.md): The size of the region.

### Initializers

- [init()](mpsregion/init%28%29.md)
- [init(origin:size:)](mpsregion/init%28origin_size_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Properties

- [offset](mpsunaryimagekernel/offset.md): The position of the destination clip rectangle origin relative to the source buffer.
- [MPSOffset](mpsoffset.md): A signed coordinate with x, y, and z components.
- [clipRect](mpsunaryimagekernel/cliprect.md): An optional clip rectangle to use when writing data. Only the pixels in the rectangle will be overwritten.
- [edgeMode](mpsunaryimagekernel/edgemode.md): The edge mode to use when texture reads stray off the edge of an image.
- [MPSImageEdgeMode](mpsimageedgemode.md): The options used to control the edge behavior of an image filter when it reads outside the bounds of a source texture.

# MPSRegion (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A region of an image.

## Declaration

```objectivec
typedef struct MPSRegion { ... } MPSRegion;
```

## Topics

### Fields

- [origin](mpsregion/origin.md): The top-left corner of the region.
- [size](mpsregion/size.md): The size of the region.

## See Also

### Properties

- [offset](mpsunaryimagekernel/offset.md): The position of the destination clip rectangle origin relative to the source buffer.
- [MPSOffset](mpsoffset.md): A signed coordinate with x, y, and z components.
- [clipRect](mpsunaryimagekernel/cliprect.md): An optional clip rectangle to use when writing data. Only the pixels in the rectangle will be overwritten.
- [edgeMode](mpsunaryimagekernel/edgemode.md): The edge mode to use when texture reads stray off the edge of an image.
- [MPSImageEdgeMode](mpsimageedgemode.md): The options used to control the edge behavior of an image filter when it reads outside the bounds of a source texture.
