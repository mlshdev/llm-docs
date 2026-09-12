> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avasynchronousciimagefilteringrequest/finish(with:context:)](https://developer.apple.com/documentation/avfoundation/avasynchronousciimagefilteringrequest/finish(with:context:))

# finish(with:context:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ (deprecated in 27.0) · iPadOS 9.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.11+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Provides the filtered video frame image to AVFoundation for further processing or display.

> Use AVCIImageFilteringParameters instead

## Declaration

```swift
func finish(with filteredImage: CIImage, context: CIContext?)
```

## Parameters

- `filteredImage`: A Core Image image representing the output of whatever filters you’ve applied to the source image.
- `context`: A Core Image context to be used for rendering the output image, or `nil` to use a default context provided by AVFoundation.

<a id="Discussion"></a>

## Discussion

Call this method when your handler block has finished applying filters, passing the [outputImage](../../coreimage/cifilter-swift.class/outputimage.md) object from the final filter in your filter chain for the `filteredImage` parameter. The pixel format for this image must be the [BGRA8](../../coreimage/ciformat/bgra8.md) format (of the [kCVPixelFormatType_32BGRA](../../corevideo/kcvpixelformattype_32bgra.md) type).

You can pass the [sourceImage](sourceimage.md) object to the `filteredImage` parameter to disable filtering for the current frame.

By default, you can pass `nil` for the `context` parameter to use a default rendering context provided by Core Image. In iOS and tvOS, the default context uses the Device RGB color space. In macOS, the default context uses the sRGB color space. AVFoundation automatically uses a GPU-accelerated context if possible. To use a different color space or control other rendering options, pass your own [CIContext](../../coreimage/cicontext.md) object instead.

> **Important**

>  A [CIContext](../../coreimage/cicontext.md) instance is a heavyweight object that maintains expensive rendering state. Don’t create a new context object in the block where you call this method (which runs once per video frame); instead, create a [CIContext](../../coreimage/cicontext.md) instance before create a composition with the [init(asset:applyingCIFiltersWithHandler:)](../avvideocomposition/init%28asset_applyingcifilterswithhandler_%29.md) method, and use that instance in your handler block.

## See Also

### Returning the filtered image

- [finish(with:)](finish%28with_%29.md): Deprecated. Notifies AVFoundation that you cannot fulfill the image filtering request.

# finishWithImage:context: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Provides the filtered video frame image to AVFoundation for further processing or display.

## Declaration

```objectivec
- (void) finishWithImage:(CIImage *) filteredImage context:(CIContext *) context;
```

## Parameters

- `filteredImage`: A Core Image image representing the output of whatever filters you’ve applied to the source image.
- `context`: A Core Image context to be used for rendering the output image, or `nil` to use a default context provided by AVFoundation.

<a id="Discussion"></a>

## Discussion

Call this method when your handler block has finished applying filters, passing the [outputImage](../../coreimage/cifilter-swift.class/outputimage.md) object from the final filter in your filter chain for the `filteredImage` parameter. The pixel format for this image must be the [kCIFormatBGRA8](../../coreimage/ciformat/bgra8.md) format (of the [kCVPixelFormatType_32BGRA](../../corevideo/kcvpixelformattype_32bgra.md) type).

You can pass the [sourceImage](sourceimage.md) object to the `filteredImage` parameter to disable filtering for the current frame.

By default, you can pass `nil` for the `context` parameter to use a default rendering context provided by Core Image. In iOS and tvOS, the default context uses the Device RGB color space. In macOS, the default context uses the sRGB color space. AVFoundation automatically uses a GPU-accelerated context if possible. To use a different color space or control other rendering options, pass your own [CIContext](../../coreimage/cicontext.md) object instead.

> **Important**

>  A [CIContext](../../coreimage/cicontext.md) instance is a heavyweight object that maintains expensive rendering state. Don’t create a new context object in the block where you call this method (which runs once per video frame); instead, create a [CIContext](../../coreimage/cicontext.md) instance before create a composition with the [videoCompositionWithAsset:applyingCIFiltersWithHandler:](../avvideocomposition/init%28asset_applyingcifilterswithhandler_%29.md) method, and use that instance in your handler block.

## See Also

### Returning the filtered image

- [finishWithError:](finish%28with_%29.md): Deprecated. Notifies AVFoundation that you cannot fulfill the image filtering request.
