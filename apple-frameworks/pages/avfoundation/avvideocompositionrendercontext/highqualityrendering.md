> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avvideocompositionrendercontext/highqualityrendering](https://developer.apple.com/documentation/avfoundation/avvideocompositionrendercontext/highqualityrendering)

# highQualityRendering (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

The rendering quality to use.

## Declaration

```swift
var highQualityRendering: Bool { get }
```

<a id="Discussion"></a>

## Discussion

Specifies that the custom compositor should use higher quality, potentially slower algorithms.

Generally this property is [true](https://developer.apple.com/documentation/swift/true) for non-real-time use cases.

## See Also

### Getting the render settings

- [videoComposition](videocomposition.md): The video composition being rendered.
- [renderScale](renderscale.md): A scaling ratio that is applied when rendering frames.
- [renderTransform](rendertransform.md): A transform to apply to the source image.
- [size](size.md): The width and height for the rendering frames.

# highQualityRendering (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

The rendering quality to use.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL highQualityRendering;
```

<a id="Discussion"></a>

## Discussion

Specifies that the custom compositor should use higher quality, potentially slower algorithms.

Generally this property is [true](https://developer.apple.com/documentation/swift/true) for non-real-time use cases.

## See Also

### Getting the render settings

- [videoComposition](videocomposition.md): The video composition being rendered.
- [renderScale](renderscale.md): A scaling ratio that is applied when rendering frames.
- [renderTransform](rendertransform.md): A transform to apply to the source image.
- [size](size.md): The width and height for the rendering frames.
