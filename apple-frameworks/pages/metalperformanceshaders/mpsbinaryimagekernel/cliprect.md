> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsbinaryimagekernel/cliprect](https://developer.apple.com/documentation/metalperformanceshaders/mpsbinaryimagekernel/cliprect)

# clipRect (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 9.0+ · visionOS 1.0+

An optional clip rectangle to use when writing data. Only the pixels in the rectangle will be overwritten.

## Declaration

```swift
var clipRect: MTLRegion { get set }
```

<a id="Discussion"></a>

## Discussion

This value indicates which part of the destination to overwrite. If the clip rectangle does not lie completely within the destination image, then the intersection between the clip rectangle and destination bounds is used instead.

The default value is [MPSRectNoClip](../mpsrectnoclip.md), indicating that the entire image is used.

## See Also

### Properties

- [primaryOffset](primaryoffset.md): The position of the destination clip rectangle origin relative to the primary source buffer.
- [secondaryOffset](secondaryoffset.md): The position of the destination clip rectangle origin relative to the secondary source buffer.
- [primaryEdgeMode](primaryedgemode.md): The edge mode to use when texture reads stray off the edge of the primary source image.
- [secondaryEdgeMode](secondaryedgemode.md): The edge mode to use when texture reads stray off the edge of the secondary source image.

# clipRect (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 9.0+ · visionOS 1.0+

An optional clip rectangle to use when writing data. Only the pixels in the rectangle will be overwritten.

## Declaration

```objectivec
@property (nonatomic, readwrite) MTLRegion clipRect;
```

<a id="Discussion"></a>

## Discussion

This value indicates which part of the destination to overwrite. If the clip rectangle does not lie completely within the destination image, then the intersection between the clip rectangle and destination bounds is used instead.

The default value is [MPSRectNoClip](../mpsrectnoclip.md), indicating that the entire image is used.

## See Also

### Properties

- [primaryOffset](primaryoffset.md): The position of the destination clip rectangle origin relative to the primary source buffer.
- [secondaryOffset](secondaryoffset.md): The position of the destination clip rectangle origin relative to the secondary source buffer.
- [primaryEdgeMode](primaryedgemode.md): The edge mode to use when texture reads stray off the edge of the primary source image.
- [secondaryEdgeMode](secondaryedgemode.md): The edge mode to use when texture reads stray off the edge of the secondary source image.
