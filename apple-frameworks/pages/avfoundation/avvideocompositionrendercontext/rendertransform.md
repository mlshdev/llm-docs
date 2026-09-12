> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avvideocompositionrendercontext/rendertransform](https://developer.apple.com/documentation/avfoundation/avvideocompositionrendercontext/rendertransform)

# renderTransform (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

A transform to apply to the source image.

## Declaration

```swift
var renderTransform: CGAffineTransform { get }
```

<a id="Discussion"></a>

## Discussion

The transform to apply to the source image incorporating the [renderScale](renderscale.md), [pixelAspectRatio](pixelaspectratio.md), and [edgeWidths](edgewidths.md).

The coordinate system origin is the top left corner of the buffer.

## See Also

### Getting the render settings

- [videoComposition](videocomposition.md): The video composition being rendered.
- [highQualityRendering](highqualityrendering.md): The rendering quality to use.
- [renderScale](renderscale.md): A scaling ratio that is applied when rendering frames.
- [size](size.md): The width and height for the rendering frames.

# renderTransform (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

A transform to apply to the source image.

## Declaration

```objectivec
@property (nonatomic, readonly) CGAffineTransform renderTransform;
```

<a id="Discussion"></a>

## Discussion

The transform to apply to the source image incorporating the [renderScale](renderscale.md), [pixelAspectRatio](pixelaspectratio.md), and [edgeWidths](edgewidths.md).

The coordinate system origin is the top left corner of the buffer.

## See Also

### Getting the render settings

- [videoComposition](videocomposition.md): The video composition being rendered.
- [highQualityRendering](highqualityrendering.md): The rendering quality to use.
- [renderScale](renderscale.md): A scaling ratio that is applied when rendering frames.
- [size](size.md): The width and height for the rendering frames.
