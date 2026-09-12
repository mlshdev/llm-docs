> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsunaryimagekernel/edgemode](https://developer.apple.com/documentation/metalperformanceshaders/mpsunaryimagekernel/edgemode)

# edgeMode (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 9.0+ · visionOS 1.0+

The edge mode to use when texture reads stray off the edge of an image.

## Declaration

```swift
var edgeMode: MPSImageEdgeMode { get set }
```

<a id="Discussion"></a>

## Discussion

Most kernel objects can read off the edge of a source image. This can happen because of a negative offset property, because the `offset + clipRect.size` is larger than the source image, or because the filter uses neighboring pixels in its calculations (e.g. convolution filters).

The default value is usually [MPSImageEdgeMode.zero](../mpsimageedgemode/zero.md), but some kernels default to the [MPSImageEdgeMode.clamp](../mpsimageedgemode/clamp.md) value instead if an edge mode of zero is either unsupported or undefined.

## See Also

### Properties

- [offset](offset.md): The position of the destination clip rectangle origin relative to the source buffer.
- [MPSOffset](../mpsoffset.md): A signed coordinate with x, y, and z components.
- [clipRect](cliprect.md): An optional clip rectangle to use when writing data. Only the pixels in the rectangle will be overwritten.
- [MPSRegion](../mpsregion.md): A region of an image.
- [MPSImageEdgeMode](../mpsimageedgemode.md): The options used to control the edge behavior of an image filter when it reads outside the bounds of a source texture.

# edgeMode (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 9.0+ · visionOS 1.0+

The edge mode to use when texture reads stray off the edge of an image.

## Declaration

```objectivec
@property (nonatomic, readwrite) MPSImageEdgeMode edgeMode;
```

<a id="Discussion"></a>

## Discussion

Most kernel objects can read off the edge of a source image. This can happen because of a negative offset property, because the `offset + clipRect.size` is larger than the source image, or because the filter uses neighboring pixels in its calculations (e.g. convolution filters).

The default value is usually [MPSImageEdgeModeZero](../mpsimageedgemode/zero.md), but some kernels default to the [MPSImageEdgeModeClamp](../mpsimageedgemode/clamp.md) value instead if an edge mode of zero is either unsupported or undefined.

## See Also

### Properties

- [offset](offset.md): The position of the destination clip rectangle origin relative to the source buffer.
- [MPSOffset](../mpsoffset.md): A signed coordinate with x, y, and z components.
- [clipRect](cliprect.md): An optional clip rectangle to use when writing data. Only the pixels in the rectangle will be overwritten.
- [MPSRegion](../mpsregion.md): A region of an image.
- [MPSImageEdgeMode](../mpsimageedgemode.md): The options used to control the edge behavior of an image filter when it reads outside the bounds of a source texture.
