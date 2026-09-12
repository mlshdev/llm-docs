> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsimagehistogram/cliprectsource](https://developer.apple.com/documentation/metalperformanceshaders/mpsimagehistogram/cliprectsource)

# clipRectSource (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 9.0+ · visionOS 1.0+

The source rectangle to use when reading data.

## Declaration

```swift
var clipRectSource: MTLRegion { get set }
```

<a id="Discussion"></a>

## Discussion

This value indicates which part of the source image to read from. If the value of `clipRectSource` does not lie completely within the source image, then the intersection of the image bounds and the value of `clipRectSource` will be used. The value of `clipRectSource` replaces the [offset](../mpsunaryimagekernel/offset.md) value for this filter, which is ignored.

The default value is [MPSRectNoClip](../mpsrectnoclip.md), indicating that the entire source texture is used.

## See Also

### Properties

- [zeroHistogram](zerohistogram.md): Determines whether to zero-initialize the histogram results.
- [histogramInfo](histograminfo.md): A structure describing the histogram content.
- [minPixelThresholdValue](minpixelthresholdvalue.md)

# clipRectSource (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 9.0+ · visionOS 1.0+

The source rectangle to use when reading data.

## Declaration

```objectivec
@property (nonatomic, readwrite) MTLRegion clipRectSource;
```

<a id="Discussion"></a>

## Discussion

This value indicates which part of the source image to read from. If the value of `clipRectSource` does not lie completely within the source image, then the intersection of the image bounds and the value of `clipRectSource` will be used. The value of `clipRectSource` replaces the [offset](../mpsunaryimagekernel/offset.md) value for this filter, which is ignored.

The default value is [MPSRectNoClip](../mpsrectnoclip.md), indicating that the entire source texture is used.

## See Also

### Properties

- [zeroHistogram](zerohistogram.md): Determines whether to zero-initialize the histogram results.
- [histogramInfo](histograminfo.md): A structure describing the histogram content.
- [minPixelThresholdValue](minpixelthresholdvalue.md)
