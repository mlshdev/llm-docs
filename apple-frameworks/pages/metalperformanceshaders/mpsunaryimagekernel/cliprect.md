> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsunaryimagekernel/cliprect](https://developer.apple.com/documentation/metalperformanceshaders/mpsunaryimagekernel/cliprect)

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

- [offset](offset.md): The position of the destination clip rectangle origin relative to the source buffer.
- [MPSOffset](../mpsoffset.md): A signed coordinate with x, y, and z components.
- [MPSRegion](../mpsregion.md): A region of an image.
- [edgeMode](edgemode.md): The edge mode to use when texture reads stray off the edge of an image.
- [MPSImageEdgeMode](../mpsimageedgemode.md): The options used to control the edge behavior of an image filter when it reads outside the bounds of a source texture.

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

- [offset](offset.md): The position of the destination clip rectangle origin relative to the source buffer.
- [MPSOffset](../mpsoffset.md): A signed coordinate with x, y, and z components.
- [MPSRegion](../mpsregion.md): A region of an image.
- [edgeMode](edgemode.md): The edge mode to use when texture reads stray off the edge of an image.
- [MPSImageEdgeMode](../mpsimageedgemode.md): The options used to control the edge behavior of an image filter when it reads outside the bounds of a source texture.
