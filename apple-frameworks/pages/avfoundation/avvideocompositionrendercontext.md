> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avvideocompositionrendercontext](https://developer.apple.com/documentation/avfoundation/avvideocompositionrendercontext)

# AVVideoCompositionRenderContext (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

An object that defines the context in which custom compositors render pixel buffers.

## Declaration

```swift
class AVVideoCompositionRenderContext
```

<a id="overview"></a>

## Overview

A render context provides size and scaling information and offers a service for efficiently providing pixel buffers from a managed pool of buffers.

## Topics

### Creating the pixel buffer

- [newPixelBuffer()](avvideocompositionrendercontext/newpixelbuffer%28%29.md): Deprecated. Returns a pixel buffer to use for rendering.
- [makeMutablePixelBuffer()](avvideocompositionrendercontext/makemutablepixelbuffer%28%29.md): Vends a CVMutablePixelBuffer to use for rendering. The buffer will have its kCVImageBufferCleanApertureKey and kCVImageBufferPixelAspectRatioKey attachments set to match the current composition processor properties.

### Getting the render settings

- [videoComposition](avvideocompositionrendercontext/videocomposition.md): The video composition being rendered.
- [highQualityRendering](avvideocompositionrendercontext/highqualityrendering.md): The rendering quality to use.
- [renderScale](avvideocompositionrendercontext/renderscale.md): A scaling ratio that is applied when rendering frames.
- [renderTransform](avvideocompositionrendercontext/rendertransform.md): A transform to apply to the source image.
- [size](avvideocompositionrendercontext/size.md): The width and height for the rendering frames.

### Getting pixel and edge width information

- [edgeWidths](avvideocompositionrendercontext/edgewidths.md): The width of the edge processing region on the left, top, right, and bottom edges, in pixels.
- [AVEdgeWidths](avedgewidths.md): A structure that defines edge processing region widths.
- [pixelAspectRatio](avvideocompositionrendercontext/pixelaspectratio.md): The pixel aspect ratio for rendered frames.
- [AVPixelAspectRatio](avpixelaspectratio.md): A structure that defines a pixel aspect ratio for a rendering context.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Observing render context changes

- [renderContextChanged(\_:)](avvideocompositing/rendercontextchanged%28__%29.md): Tells the compositor that the composition changed render contexts.

# AVVideoCompositionRenderContext (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

An object that defines the context in which custom compositors render pixel buffers.

## Declaration

```objectivec
@interface AVVideoCompositionRenderContext : NSObject
```

<a id="overview"></a>

## Overview

A render context provides size and scaling information and offers a service for efficiently providing pixel buffers from a managed pool of buffers.

## Topics

### Creating the pixel buffer

- [newPixelBuffer](avvideocompositionrendercontext/newpixelbuffer%28%29.md): Deprecated. Returns a pixel buffer to use for rendering.

### Getting the render settings

- [videoComposition](avvideocompositionrendercontext/videocomposition.md): The video composition being rendered.
- [highQualityRendering](avvideocompositionrendercontext/highqualityrendering.md): The rendering quality to use.
- [renderScale](avvideocompositionrendercontext/renderscale.md): A scaling ratio that is applied when rendering frames.
- [renderTransform](avvideocompositionrendercontext/rendertransform.md): A transform to apply to the source image.
- [size](avvideocompositionrendercontext/size.md): The width and height for the rendering frames.

### Getting pixel and edge width information

- [edgeWidths](avvideocompositionrendercontext/edgewidths.md): The width of the edge processing region on the left, top, right, and bottom edges, in pixels.
- [AVEdgeWidths](avedgewidths.md): A structure that defines edge processing region widths.
- [pixelAspectRatio](avvideocompositionrendercontext/pixelaspectratio.md): The pixel aspect ratio for rendered frames.
- [AVPixelAspectRatio](avpixelaspectratio.md): A structure that defines a pixel aspect ratio for a rendering context.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Observing render context changes

- [renderContextChanged:](avvideocompositing/rendercontextchanged%28__%29.md): Tells the compositor that the composition changed render contexts.
