> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avasynchronousciimagefilteringrequest/sourceimage](https://developer.apple.com/documentation/avfoundation/avasynchronousciimagefilteringrequest/sourceimage)

# sourceImage (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ (deprecated in 27.0) · iPadOS 9.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.11+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The current video frame image.

> Use AVCIImageFilteringParameters instead

## Declaration

```swift
var sourceImage: CIImage { get }
```

<a id="Discussion"></a>

## Discussion

To apply a Core Image filter to this image, assign it to the `inputImage` parameter of a [CIFilter](../../coreimage/cifilter-swift.class.md) object, or use a [CIImage](../../coreimage/ciimage.md) convenience method such as the [applyingFilter(\_:parameters:)](../../coreimage/ciimage/applyingfilter%28__parameters_%29.md) method.

The pixel format for this image is the [BGRA8](../../coreimage/ciformat/bgra8.md) format (of the [kCVPixelFormatType_32BGRA](../../corevideo/kcvpixelformattype_32bgra.md) type). Unlike when processing video with the [AVAsynchronousVideoCompositionRequest](../avasynchronousvideocompositionrequest.md) class, the [renderContext](../avasynchronousvideocompositionrequest/rendercontext.md) object’s [renderTransform](../avvideocompositionrendercontext/rendertransform.md) property is already applied to this image.

# sourceImage (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The current video frame image.

## Declaration

```objectivec
@property (nonatomic, readonly) CIImage * sourceImage;
```

<a id="Discussion"></a>

## Discussion

To apply a Core Image filter to this image, assign it to the `inputImage` parameter of a [CIFilter](../../coreimage/cifilter-swift.class.md) object, or use a [CIImage](../../coreimage/ciimage.md) convenience method such as the [imageByApplyingFilter:withInputParameters:](../../coreimage/ciimage/applyingfilter%28__parameters_%29.md) method.

The pixel format for this image is the [kCIFormatBGRA8](../../coreimage/ciformat/bgra8.md) format (of the [kCVPixelFormatType_32BGRA](../../corevideo/kcvpixelformattype_32bgra.md) type). Unlike when processing video with the [AVAsynchronousVideoCompositionRequest](../avasynchronousvideocompositionrequest.md) class, the [renderContext](../avasynchronousvideocompositionrequest/rendercontext.md) object’s [renderTransform](../avvideocompositionrendercontext/rendertransform.md) property is already applied to this image.
