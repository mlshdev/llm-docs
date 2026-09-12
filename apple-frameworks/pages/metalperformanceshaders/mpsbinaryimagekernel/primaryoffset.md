> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsbinaryimagekernel/primaryoffset](https://developer.apple.com/documentation/metalperformanceshaders/mpsbinaryimagekernel/primaryoffset)

# primaryOffset (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 9.0+ · visionOS 1.0+

The position of the destination clip rectangle origin relative to the primary source buffer.

## Declaration

```swift
var primaryOffset: MPSOffset { get set }
```

<a id="Discussion"></a>

## Discussion

The offset is defined to be the position of the `origin` value of [clipRect](cliprect.md), in source coordinates.

The default value is `{0, 0, 0}`, indicating that the top left corners of the clip rectangle and the primary source image align.

## See Also

### Properties

- [secondaryOffset](secondaryoffset.md): The position of the destination clip rectangle origin relative to the secondary source buffer.
- [primaryEdgeMode](primaryedgemode.md): The edge mode to use when texture reads stray off the edge of the primary source image.
- [secondaryEdgeMode](secondaryedgemode.md): The edge mode to use when texture reads stray off the edge of the secondary source image.
- [clipRect](cliprect.md): An optional clip rectangle to use when writing data. Only the pixels in the rectangle will be overwritten.

# primaryOffset (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 9.0+ · visionOS 1.0+

The position of the destination clip rectangle origin relative to the primary source buffer.

## Declaration

```objectivec
@property (nonatomic, readwrite) MPSOffset primaryOffset;
```

<a id="Discussion"></a>

## Discussion

The offset is defined to be the position of the `origin` value of [clipRect](cliprect.md), in source coordinates.

The default value is `{0, 0, 0}`, indicating that the top left corners of the clip rectangle and the primary source image align.

## See Also

### Properties

- [secondaryOffset](secondaryoffset.md): The position of the destination clip rectangle origin relative to the secondary source buffer.
- [primaryEdgeMode](primaryedgemode.md): The edge mode to use when texture reads stray off the edge of the primary source image.
- [secondaryEdgeMode](secondaryedgemode.md): The edge mode to use when texture reads stray off the edge of the secondary source image.
- [clipRect](cliprect.md): An optional clip rectangle to use when writing data. Only the pixels in the rectangle will be overwritten.
