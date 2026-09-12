> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaptureresolvedphotosettings/embeddedthumbnaildimensions](https://developer.apple.com/documentation/avfoundation/avcaptureresolvedphotosettings/embeddedthumbnaildimensions)

# embeddedThumbnailDimensions (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

The size, in pixels, of the thumbnail image that the capture delivers.

## Declaration

```swift
var embeddedThumbnailDimensions: CMVideoDimensions { get }
```

<a id="Discussion"></a>

## Discussion

Use the [embeddedThumbnailPhotoFormat](../avcapturephotosettings/embeddedthumbnailphotoformat.md) property in your photo settings object to request delivery of a thumbnail image alongside the main photo output from the capture. When you request a thumbnail, the photo output chooses dimensions that best match your requested size while preserving the aspect ratio of the captured photo. Aspect ratio is determined by capture format and by device orientation at the moment of capture.

> **Note**

>  The photo capture system supports both *preview* and *thumbnail* images as companions to the full-size primary image in a photo capture. A preview image is intended for immediate display (as seen when taking photos in the iOS Camera app), and as such is sized for full-screen presentation on the current device. A thumbnail image is intended for embedding in the output image file and can be used by other software (such as Quick Look in a file browser) to allow users to quickly review the image without loading the entire image file; the size of thumbnail images may be limited depending on the output file format.

This property provides the dimensions of the requested thumbnail image, which is delivered in the [photoOutput(\_:didFinishProcessingPhoto:error:)](../avcapturephotocapturedelegate/photooutput%28__didfinishprocessingphoto_error_%29.md) method. Use this property in earlier delegate methods to find the size of the image before delivery.

If you do not request a thumbnail image, this property’s value has zero width and zero height.

## See Also

### Examining output dimensions

- [photoDimensions](photodimensions.md): The size, in pixels, of the photo image (in a processed format, such as JPEG) that the capture delivers.
- [deferredPhotoProxyDimensions](deferredphotoproxydimensions.md): The resolved dimensions of the photo proxy when using deferred photo delivery.
- [rawPhotoDimensions](rawphotodimensions.md): The size, in pixels, of the RAW-format photo image that the capture delivers.
- [previewDimensions](previewdimensions.md): The size, in pixels, of the preview image that the system delivers with the capture.
- [rawEmbeddedThumbnailDimensions](rawembeddedthumbnaildimensions.md): The size, in pixels, of the RAW-format embedded thumbnail image that the capture delivers.
- [livePhotoMovieDimensions](livephotomoviedimensions.md): The size, in pixels, of the Live Photo movie content that the capture delivers.
- [portraitEffectsMatteDimensions](portraiteffectsmattedimensions.md): The size, in pixels, of the portrait effects matte that the capture delivers.
- [dimensionsForSemanticSegmentationMatte(ofType:)](dimensionsforsemanticsegmentationmatte%28oftype_%29.md): Retrieves the resolved dimensions of the semantic segmentation mattes that the photo output delivers.
- [photoProcessingTimeRange](photoprocessingtimerange.md): The time range in which to expect the system to deliver the photo to the delegate.

# embeddedThumbnailDimensions (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

The size, in pixels, of the thumbnail image that the capture delivers.

## Declaration

```objectivec
@property (readonly) CMVideoDimensions embeddedThumbnailDimensions;
```

<a id="Discussion"></a>

## Discussion

Use the [embeddedThumbnailPhotoFormat](../avcapturephotosettings/embeddedthumbnailphotoformat.md) property in your photo settings object to request delivery of a thumbnail image alongside the main photo output from the capture. When you request a thumbnail, the photo output chooses dimensions that best match your requested size while preserving the aspect ratio of the captured photo. Aspect ratio is determined by capture format and by device orientation at the moment of capture.

> **Note**

>  The photo capture system supports both *preview* and *thumbnail* images as companions to the full-size primary image in a photo capture. A preview image is intended for immediate display (as seen when taking photos in the iOS Camera app), and as such is sized for full-screen presentation on the current device. A thumbnail image is intended for embedding in the output image file and can be used by other software (such as Quick Look in a file browser) to allow users to quickly review the image without loading the entire image file; the size of thumbnail images may be limited depending on the output file format.

This property provides the dimensions of the requested thumbnail image, which is delivered in the [captureOutput:didFinishProcessingPhoto:error:](../avcapturephotocapturedelegate/photooutput%28__didfinishprocessingphoto_error_%29.md) method. Use this property in earlier delegate methods to find the size of the image before delivery.

If you do not request a thumbnail image, this property’s value has zero width and zero height.

## See Also

### Examining output dimensions

- [photoDimensions](photodimensions.md): The size, in pixels, of the photo image (in a processed format, such as JPEG) that the capture delivers.
- [deferredPhotoProxyDimensions](deferredphotoproxydimensions.md): The resolved dimensions of the photo proxy when using deferred photo delivery.
- [rawPhotoDimensions](rawphotodimensions.md): The size, in pixels, of the RAW-format photo image that the capture delivers.
- [previewDimensions](previewdimensions.md): The size, in pixels, of the preview image that the system delivers with the capture.
- [rawEmbeddedThumbnailDimensions](rawembeddedthumbnaildimensions.md): The size, in pixels, of the RAW-format embedded thumbnail image that the capture delivers.
- [livePhotoMovieDimensions](livephotomoviedimensions.md): The size, in pixels, of the Live Photo movie content that the capture delivers.
- [portraitEffectsMatteDimensions](portraiteffectsmattedimensions.md): The size, in pixels, of the portrait effects matte that the capture delivers.
- [dimensionsForSemanticSegmentationMatteOfType:](dimensionsforsemanticsegmentationmatte%28oftype_%29.md): Retrieves the resolved dimensions of the semantic segmentation mattes that the photo output delivers.
- [photoProcessingTimeRange](photoprocessingtimerange.md): The time range in which to expect the system to deliver the photo to the delegate.
