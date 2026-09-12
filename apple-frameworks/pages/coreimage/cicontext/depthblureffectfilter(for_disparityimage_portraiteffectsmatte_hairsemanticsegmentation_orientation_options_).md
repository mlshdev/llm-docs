> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cicontext/depthblureffectfilter(for:disparityimage:portraiteffectsmatte:hairsemanticsegmentation:orientation:options:)](https://developer.apple.com/documentation/coreimage/cicontext/depthblureffectfilter(for:disparityimage:portraiteffectsmatte:hairsemanticsegmentation:orientation:options:))

# depthBlurEffectFilter(for:disparityImage:portraitEffectsMatte:hairSemanticSegmentation:orientation:options:) (Swift)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Create a [CIFilter](../cifilter-swift.class.md) instance for the supplied image data that can be used to apply a depth blur effect created with the supplied auxiliary images.

## Declaration

```swift
func depthBlurEffectFilter(for image: CIImage, disparityImage: CIImage, portraitEffectsMatte: CIImage?, hairSemanticSegmentation: CIImage?, orientation: CGImagePropertyOrientation, options: [AnyHashable : Any]? = nil) -> CIFilter?
```

## Parameters

- `image`: The image object to apply the depth blur effect to.
- `disparityImage`: The auxiliary disparity image. For more information, see [auxiliaryDisparity](../ciimageoption/auxiliarydisparity.md).
- `portraitEffectsMatte`: The auxiliary portrait effects matte image. For more information, see [auxiliaryPortraitEffectsMatte](../ciimageoption/auxiliaryportraiteffectsmatte.md).
- `hairSemanticSegmentation`: The auxiliary semantic segmentation hair matte image. For more information, see [auxiliarySemanticSegmentationHairMatte](../ciimageoption/auxiliarysemanticsegmentationhairmatte.md).
- `orientation`: The intended display orientation for the image.
- `options`: Reserved for future use.

<a id="Discussion"></a>

## Discussion

The receiver context is used to render the image in order to get the facial landmarks used to create the effect. The auxiliary images used to create the filter can be obtained from a JPEG or HEIC file containing embedded portrait effects matte data.

## See Also

### Related Documentation

- [CIImageOption](../ciimageoption.md)
- [Configuring camera capture to collect a Portrait Effects matte](../../avfoundation/configuring-camera-capture-to-collect-a-portrait-effects-matte.md): Prepare your app to capture a portrait effects matte when taking photos.

### Creating Depth Blur Filters

- [depthBlurEffectFilter(for:disparityImage:portraitEffectsMatte:hairSemanticSegmentation:glassesMatte:gainMap:orientation:options:)](depthblureffectfilter%28for_disparityimage_portraiteffectsmatte_hairsemanticsegmentation_glassesmatte_gainmap_orientation_options_%29.md): Create a [CIFilter](../cifilter-swift.class.md) instance for the supplied image data that can be used to apply a depth blur effect created with the supplied auxiliary images.
- [depthBlurEffectFilter(for:disparityImage:portraitEffectsMatte:orientation:options:)](depthblureffectfilter%28for_disparityimage_portraiteffectsmatte_orientation_options_%29.md): Create a [CIFilter](../cifilter-swift.class.md) instance for the supplied image data that can be used to apply a depth blur effect created with the supplied auxiliary images.
- [depthBlurEffectFilter(forImageData:options:)](depthblureffectfilter%28forimagedata_options_%29.md): Create a [CIFilter](../cifilter-swift.class.md) instance for the supplied image data that can be used to apply a depth blur effect.
- [depthBlurEffectFilter(forImageURL:options:)](depthblureffectfilter%28forimageurl_options_%29.md): Create a [CIFilter](../cifilter-swift.class.md) instance for the supplied image URL that can be used to apply a depth blur effect.

# depthBlurEffectFilterForImage:disparityImage:portraitEffectsMatte:hairSemanticSegmentation:orientation:options: (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Create a [CIFilter](../cifilter-swift.class.md) instance for the supplied image data that can be used to apply a depth blur effect created with the supplied auxiliary images.

## Declaration

```objectivec
- (CIFilter *) depthBlurEffectFilterForImage:(CIImage *) image disparityImage:(CIImage *) disparityImage portraitEffectsMatte:(CIImage *) portraitEffectsMatte hairSemanticSegmentation:(CIImage *) hairSemanticSegmentation orientation:(CGImagePropertyOrientation) orientation options:(NSDictionary *) options;
```

## Parameters

- `image`: The image object to apply the depth blur effect to.
- `disparityImage`: The auxiliary disparity image. For more information, see [kCIImageAuxiliaryDisparity](../ciimageoption/auxiliarydisparity.md).
- `portraitEffectsMatte`: The auxiliary portrait effects matte image. For more information, see [kCIImageAuxiliaryPortraitEffectsMatte](../ciimageoption/auxiliaryportraiteffectsmatte.md).
- `hairSemanticSegmentation`: The auxiliary semantic segmentation hair matte image. For more information, see [kCIImageAuxiliarySemanticSegmentationHairMatte](../ciimageoption/auxiliarysemanticsegmentationhairmatte.md).
- `orientation`: The intended display orientation for the image.
- `options`: Reserved for future use.

<a id="Discussion"></a>

## Discussion

The receiver context is used to render the image in order to get the facial landmarks used to create the effect. The auxiliary images used to create the filter can be obtained from a JPEG or HEIC file containing embedded portrait effects matte data.

## See Also

### Related Documentation

- [CIImageOption](../ciimageoption.md)
- [Configuring camera capture to collect a Portrait Effects matte](../../avfoundation/configuring-camera-capture-to-collect-a-portrait-effects-matte.md): Prepare your app to capture a portrait effects matte when taking photos.

### Creating Depth Blur Filters

- [depthBlurEffectFilterForImage:disparityImage:portraitEffectsMatte:hairSemanticSegmentation:glassesMatte:gainMap:orientation:options:](depthblureffectfilter%28for_disparityimage_portraiteffectsmatte_hairsemanticsegmentation_glassesmatte_gainmap_orientation_options_%29.md): Create a [CIFilter](../cifilter-swift.class.md) instance for the supplied image data that can be used to apply a depth blur effect created with the supplied auxiliary images.
- [depthBlurEffectFilterForImage:disparityImage:portraitEffectsMatte:orientation:options:](depthblureffectfilter%28for_disparityimage_portraiteffectsmatte_orientation_options_%29.md): Create a [CIFilter](../cifilter-swift.class.md) instance for the supplied image data that can be used to apply a depth blur effect created with the supplied auxiliary images.
- [depthBlurEffectFilterForImageData:options:](depthblureffectfilter%28forimagedata_options_%29.md): Create a [CIFilter](../cifilter-swift.class.md) instance for the supplied image data that can be used to apply a depth blur effect.
- [depthBlurEffectFilterForImageURL:options:](depthblureffectfilter%28forimageurl_options_%29.md): Create a [CIFilter](../cifilter-swift.class.md) instance for the supplied image URL that can be used to apply a depth blur effect.
