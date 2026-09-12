> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsunaryimagekernel/offset](https://developer.apple.com/documentation/metalperformanceshaders/mpsunaryimagekernel/offset)

# offset (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 9.0+ · visionOS 1.0+

The position of the destination clip rectangle origin relative to the source buffer.

## Declaration

```swift
var offset: MPSOffset { get set }
```

<a id="Discussion"></a>

## Discussion

The offset is defined to be the position of the `origin` value of [clipRect](cliprect.md), in source coordinates.

The default value is `{0, 0, 0}`, indicating that the top left corners of the clip rectangle and the source image align.

## See Also

### Properties

- [MPSOffset](../mpsoffset.md): A signed coordinate with x, y, and z components.
- [clipRect](cliprect.md): An optional clip rectangle to use when writing data. Only the pixels in the rectangle will be overwritten.
- [MPSRegion](../mpsregion.md): A region of an image.
- [edgeMode](edgemode.md): The edge mode to use when texture reads stray off the edge of an image.
- [MPSImageEdgeMode](../mpsimageedgemode.md): The options used to control the edge behavior of an image filter when it reads outside the bounds of a source texture.

# offset (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 9.0+ · visionOS 1.0+

The position of the destination clip rectangle origin relative to the source buffer.

## Declaration

```objectivec
@property (nonatomic, readwrite) MPSOffset offset;
```

<a id="Discussion"></a>

## Discussion

The offset is defined to be the position of the `origin` value of [clipRect](cliprect.md), in source coordinates.

The default value is `{0, 0, 0}`, indicating that the top left corners of the clip rectangle and the source image align.

## See Also

### Properties

- [MPSOffset](../mpsoffset.md): A signed coordinate with x, y, and z components.
- [clipRect](cliprect.md): An optional clip rectangle to use when writing data. Only the pixels in the rectangle will be overwritten.
- [MPSRegion](../mpsregion.md): A region of an image.
- [edgeMode](edgemode.md): The edge mode to use when texture reads stray off the edge of an image.
- [MPSImageEdgeMode](../mpsimageedgemode.md): The options used to control the edge behavior of an image filter when it reads outside the bounds of a source texture.
