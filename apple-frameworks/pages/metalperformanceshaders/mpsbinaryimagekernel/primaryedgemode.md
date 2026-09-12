> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsbinaryimagekernel/primaryedgemode](https://developer.apple.com/documentation/metalperformanceshaders/mpsbinaryimagekernel/primaryedgemode)

# primaryEdgeMode (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 9.0+ · visionOS 1.0+

The edge mode to use when texture reads stray off the edge of the primary source image.

## Declaration

```swift
var primaryEdgeMode: MPSImageEdgeMode { get set }
```

<a id="Discussion"></a>

## Discussion

Most kernel objects can read off the edge of a source image. This can happen because of a negative offset property, because the `offset + clipRect.size` is larger than the source image, or because the filter uses neighboring pixels in its calculations (e.g. convolution filters).

The default value is usually [MPSImageEdgeMode.zero](../mpsimageedgemode/zero.md), but some kernels default to the [MPSImageEdgeMode.clamp](../mpsimageedgemode/clamp.md) value instead if an edge mode of zero is either unsupported or undefined.

## See Also

### Properties

- [primaryOffset](primaryoffset.md): The position of the destination clip rectangle origin relative to the primary source buffer.
- [secondaryOffset](secondaryoffset.md): The position of the destination clip rectangle origin relative to the secondary source buffer.
- [secondaryEdgeMode](secondaryedgemode.md): The edge mode to use when texture reads stray off the edge of the secondary source image.
- [clipRect](cliprect.md): An optional clip rectangle to use when writing data. Only the pixels in the rectangle will be overwritten.

# primaryEdgeMode (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 9.0+ · visionOS 1.0+

The edge mode to use when texture reads stray off the edge of the primary source image.

## Declaration

```objectivec
@property (nonatomic, readwrite) MPSImageEdgeMode primaryEdgeMode;
```

<a id="Discussion"></a>

## Discussion

Most kernel objects can read off the edge of a source image. This can happen because of a negative offset property, because the `offset + clipRect.size` is larger than the source image, or because the filter uses neighboring pixels in its calculations (e.g. convolution filters).

The default value is usually [MPSImageEdgeModeZero](../mpsimageedgemode/zero.md), but some kernels default to the [MPSImageEdgeModeClamp](../mpsimageedgemode/clamp.md) value instead if an edge mode of zero is either unsupported or undefined.

## See Also

### Properties

- [primaryOffset](primaryoffset.md): The position of the destination clip rectangle origin relative to the primary source buffer.
- [secondaryOffset](secondaryoffset.md): The position of the destination clip rectangle origin relative to the secondary source buffer.
- [secondaryEdgeMode](secondaryedgemode.md): The edge mode to use when texture reads stray off the edge of the secondary source image.
- [clipRect](cliprect.md): An optional clip rectangle to use when writing data. Only the pixels in the rectangle will be overwritten.
