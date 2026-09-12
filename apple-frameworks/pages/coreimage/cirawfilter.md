> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cirawfilter](https://developer.apple.com/documentation/coreimage/cirawfilter)

# CIRAWFilter (Swift)

**Framework:** Core Image  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

A filter subclass that produces an image by manipulating RAW image sensor data from a digital camera or scanner.

## Declaration

```swift
class CIRAWFilter
```

<a id="overview"></a>

## Overview

Use this class to generate a [CIImage](ciimage.md) object based on the configuration parameters you provide.

You can use this object in conjunction with other Core Image classes—such as [CIFilter](cifilter-swift.class.md) and [CIContext](cicontext.md)—to take advantage of the built-in Core Image filters when processing images or writing custom filters.

You can also query this object to find out about the supported camera models, decoders, and filters.

## Topics

### Creating a filter

- [init(cvPixelBuffer:properties:)](cirawfilter/init%28cvpixelbuffer_properties_%29-6209q.md): Creates a RAW filter from the pixel buffer and its properties that you specify.
- [init(imageData:identifierHint:)](cirawfilter/init%28imagedata_identifierhint_%29.md): Creates a RAW filter from the image data and type hint that you specify.
- [init(imageURL:)](cirawfilter/init%28imageurl_%29.md): Creates a RAW filter from the image at the URL location that you specify.

### Inspecting supported camera models, decoders, and filters

- [supportedCameraModels](cirawfilter/supportedcameramodels.md): An array containing the names of all supported camera models.
- [supportedDecoderVersions](cirawfilter/supporteddecoderversions.md): An array of all supported decoder versions for the given image type.
- [CIRAWDecoderVersion](cirawdecoderversion.md)
- [isColorNoiseReductionSupported](cirawfilter/iscolornoisereductionsupported.md): A Boolean that indicates if the current image supports color noise reduction adjustments.
- [isContrastSupported](cirawfilter/iscontrastsupported.md): A Boolean that indicates if the current image supports contrast adjustments.
- [isDetailSupported](cirawfilter/isdetailsupported.md): A Boolean that indicates if the current image supports detail enhancement adjustments.
- [isLensCorrectionSupported](cirawfilter/islenscorrectionsupported.md): A Boolean that indicates if you can enable lens correction for the current image.
- [isLocalToneMapSupported](cirawfilter/islocaltonemapsupported.md): A Boolean that indicates if the current image supports local tone curve adjustments.
- [isLuminanceNoiseReductionSupported](cirawfilter/isluminancenoisereductionsupported.md): A Boolean that indicates if the current image supports luminance noise reduction adjustments.
- [isMoireReductionSupported](cirawfilter/ismoirereductionsupported.md): A Boolean that indicates if the current image supports moire artifact reduction adjustments.
- [isSharpnessSupported](cirawfilter/issharpnesssupported.md): A Boolean that indicates if the current image supports sharpness adjustments.
- [nativeSize](cirawfilter/nativesize.md): The full native size of the unscaled image.

### Configuring a filter

- [baselineExposure](cirawfilter/baselineexposure.md): A value that indicates the baseline exposure to apply to the image.
- [boostAmount](cirawfilter/boostamount.md): A value that indicates the amount of global tone curve to apply to the image.
- [boostShadowAmount](cirawfilter/boostshadowamount.md): A value that indicates the amount to boost the shadow areas of the image.
- [colorNoiseReductionAmount](cirawfilter/colornoisereductionamount.md): A value that indicates the amount of chroma noise reduction to apply to the image.
- [contrastAmount](cirawfilter/contrastamount.md): A value that indicates the amount of local contrast to apply to the edges of the image.
- [decoderVersion](cirawfilter/decoderversion.md): A value that indicates the decoder version to use.
- [detailAmount](cirawfilter/detailamount.md): A value that indicates the amount of detail enhancement to apply to the edges of the image.
- [exposure](cirawfilter/exposure.md): A value that indicates the amount of exposure to apply to the image.
- [extendedDynamicRangeAmount](cirawfilter/extendeddynamicrangeamount.md): A value that indicates the amount of extended dynamic range (EDR) to apply to the image.
- [isDraftModeEnabled](cirawfilter/isdraftmodeenabled.md): A Boolean that indicates whether to enable draft mode.
- [isGamutMappingEnabled](cirawfilter/isgamutmappingenabled.md): A Boolean that indicates whether to enable gamut mapping.
- [isLensCorrectionEnabled](cirawfilter/islenscorrectionenabled.md): A Boolean that indicates whether to enable lens correction.
- [linearSpaceFilter](cirawfilter/linearspacefilter.md): An optional filter you can apply to the RAW image while it’s in linear space.
- [localToneMapAmount](cirawfilter/localtonemapamount.md): A value that indicates the amount of local tone curve to apply to the image.
- [luminanceNoiseReductionAmount](cirawfilter/luminancenoisereductionamount.md): A value that indicates the amount of luminance noise reduction to apply to the image.
- [moireReductionAmount](cirawfilter/moirereductionamount.md): A value that indicates the amount of moire artifact reduction to apply to high frequency areas of the image.
- [neutralChromaticity](cirawfilter/neutralchromaticity.md): A value that indicates the amount of white balance based on chromaticity values to apply to the image.
- [neutralLocation](cirawfilter/neutrallocation.md): A value that indicates the amount of white balance based on pixel coordinates to apply to the image.
- [neutralTemperature](cirawfilter/neutraltemperature.md): A value that indicates the amount of white balance based on temperature values to apply to the image.
- [neutralTint](cirawfilter/neutraltint.md): A value that indicates the amount of white balance based on tint values to apply to the image.
- [orientation](cirawfilter/orientation.md): A value that indicates the orientation of the image.
- [portraitEffectsMatte](cirawfilter/portraiteffectsmatte.md): An optional auxiliary image that represents the portrait effects matte of the image.
- [previewImage](cirawfilter/previewimage.md): An optional auxiliary image that represents a preview of the original image.
- [properties](cirawfilter/properties.md): A dictionary that contains properties of the image source.
- [scaleFactor](cirawfilter/scalefactor.md): A value that indicates the desired scale factor to draw the output image.
- [semanticSegmentationGlassesMatte](cirawfilter/semanticsegmentationglassesmatte.md): An optional auxiliary image that represents the semantic segmentation glasses matte of the image.
- [semanticSegmentationHairMatte](cirawfilter/semanticsegmentationhairmatte.md): An optional auxiliary image that represents the semantic segmentation hair matte of the image.
- [semanticSegmentationSkinMatte](cirawfilter/semanticsegmentationskinmatte.md): An optional auxiliary image that represents the semantic segmentation skin matte of the image.
- [semanticSegmentationSkyMatte](cirawfilter/semanticsegmentationskymatte.md): An optional auxiliary image that represents the semantic segmentation sky matte of the image.
- [semanticSegmentationTeethMatte](cirawfilter/semanticsegmentationteethmatte.md): An optional auxiliary image that represents the semantic segmentation teeth matte of the image.
- [shadowBias](cirawfilter/shadowbias.md): A value that indicates the amount to subtract from the shadows in the image.
- [sharpnessAmount](cirawfilter/sharpnessamount.md): A value that indicates the amount of sharpness to apply to the edges of the image.

### Initializers

- [init(CVPixelBuffer:properties:)](cirawfilter/init%28cvpixelbuffer_properties_%29-6321o.md)

### Instance Properties

- [despeckleAmount](cirawfilter/despeckleamount.md)
- [isDespeckleSupported](cirawfilter/isdespecklesupported.md)
- [isHighlightRecoveryEnabled](cirawfilter/ishighlightrecoveryenabled.md)
- [isHighlightRecoverySupported](cirawfilter/ishighlightrecoverysupported.md)

### Instance Methods

- [downloadResources(timeout:completionHandler:)](cirawfilter/downloadresources%28timeout_completionhandler_%29.md)

### Type Methods

- [supportedCameraModels(with:)](cirawfilter/supportedcameramodels%28with_%29.md)

## Relationships

### Inherits From

- [CIFilter](cifilter-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Filters

- [CIFilter](cifilter-swift.class.md): An image processor that produces an image by manipulating one or more input images or by generating new image data.
- [CIColor](cicolor.md): The Core Image class that defines a color object.
- [CIVector](civector.md): The Core Image class that defines a vector object.

# CIRAWFilter (Objective-C)

**Framework:** Core Image  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

A filter subclass that produces an image by manipulating RAW image sensor data from a digital camera or scanner.

## Declaration

```objectivec
@interface CIRAWFilter : CIFilter
```

<a id="overview"></a>

## Overview

Use this class to generate a [CIImage](ciimage.md) object based on the configuration parameters you provide.

You can use this object in conjunction with other Core Image classes—such as [CIFilter](cifilter-swift.class.md) and [CIContext](cicontext.md)—to take advantage of the built-in Core Image filters when processing images or writing custom filters.

You can also query this object to find out about the supported camera models, decoders, and filters.

## Topics

### Creating a filter

- [filterWithCVPixelBuffer:properties:](cirawfilter/init%28cvpixelbuffer_properties_%29-6209q.md): Creates a RAW filter from the pixel buffer and its properties that you specify.
- [filterWithImageData:identifierHint:](cirawfilter/init%28imagedata_identifierhint_%29.md): Creates a RAW filter from the image data and type hint that you specify.
- [filterWithImageURL:](cirawfilter/init%28imageurl_%29.md): Creates a RAW filter from the image at the URL location that you specify.

### Inspecting supported camera models, decoders, and filters

- [supportedCameraModels](cirawfilter/supportedcameramodels.md): An array containing the names of all supported camera models.
- [supportedDecoderVersions](cirawfilter/supporteddecoderversions.md): An array of all supported decoder versions for the given image type.
- [CIRAWDecoderVersion](cirawdecoderversion.md)
- [colorNoiseReductionSupported](cirawfilter/iscolornoisereductionsupported.md): A Boolean that indicates if the current image supports color noise reduction adjustments.
- [contrastSupported](cirawfilter/iscontrastsupported.md): A Boolean that indicates if the current image supports contrast adjustments.
- [detailSupported](cirawfilter/isdetailsupported.md): A Boolean that indicates if the current image supports detail enhancement adjustments.
- [lensCorrectionSupported](cirawfilter/islenscorrectionsupported.md): A Boolean that indicates if you can enable lens correction for the current image.
- [localToneMapSupported](cirawfilter/islocaltonemapsupported.md): A Boolean that indicates if the current image supports local tone curve adjustments.
- [luminanceNoiseReductionSupported](cirawfilter/isluminancenoisereductionsupported.md): A Boolean that indicates if the current image supports luminance noise reduction adjustments.
- [moireReductionSupported](cirawfilter/ismoirereductionsupported.md): A Boolean that indicates if the current image supports moire artifact reduction adjustments.
- [sharpnessSupported](cirawfilter/issharpnesssupported.md): A Boolean that indicates if the current image supports sharpness adjustments.
- [nativeSize](cirawfilter/nativesize.md): The full native size of the unscaled image.

### Configuring a filter

- [baselineExposure](cirawfilter/baselineexposure.md): A value that indicates the baseline exposure to apply to the image.
- [boostAmount](cirawfilter/boostamount.md): A value that indicates the amount of global tone curve to apply to the image.
- [boostShadowAmount](cirawfilter/boostshadowamount.md): A value that indicates the amount to boost the shadow areas of the image.
- [colorNoiseReductionAmount](cirawfilter/colornoisereductionamount.md): A value that indicates the amount of chroma noise reduction to apply to the image.
- [contrastAmount](cirawfilter/contrastamount.md): A value that indicates the amount of local contrast to apply to the edges of the image.
- [decoderVersion](cirawfilter/decoderversion.md): A value that indicates the decoder version to use.
- [detailAmount](cirawfilter/detailamount.md): A value that indicates the amount of detail enhancement to apply to the edges of the image.
- [exposure](cirawfilter/exposure.md): A value that indicates the amount of exposure to apply to the image.
- [extendedDynamicRangeAmount](cirawfilter/extendeddynamicrangeamount.md): A value that indicates the amount of extended dynamic range (EDR) to apply to the image.
- [draftModeEnabled](cirawfilter/isdraftmodeenabled.md): A Boolean that indicates whether to enable draft mode.
- [gamutMappingEnabled](cirawfilter/isgamutmappingenabled.md): A Boolean that indicates whether to enable gamut mapping.
- [lensCorrectionEnabled](cirawfilter/islenscorrectionenabled.md): A Boolean that indicates whether to enable lens correction.
- [linearSpaceFilter](cirawfilter/linearspacefilter.md): An optional filter you can apply to the RAW image while it’s in linear space.
- [localToneMapAmount](cirawfilter/localtonemapamount.md): A value that indicates the amount of local tone curve to apply to the image.
- [luminanceNoiseReductionAmount](cirawfilter/luminancenoisereductionamount.md): A value that indicates the amount of luminance noise reduction to apply to the image.
- [moireReductionAmount](cirawfilter/moirereductionamount.md): A value that indicates the amount of moire artifact reduction to apply to high frequency areas of the image.
- [neutralChromaticity](cirawfilter/neutralchromaticity.md): A value that indicates the amount of white balance based on chromaticity values to apply to the image.
- [neutralLocation](cirawfilter/neutrallocation.md): A value that indicates the amount of white balance based on pixel coordinates to apply to the image.
- [neutralTemperature](cirawfilter/neutraltemperature.md): A value that indicates the amount of white balance based on temperature values to apply to the image.
- [neutralTint](cirawfilter/neutraltint.md): A value that indicates the amount of white balance based on tint values to apply to the image.
- [orientation](cirawfilter/orientation.md): A value that indicates the orientation of the image.
- [portraitEffectsMatte](cirawfilter/portraiteffectsmatte.md): An optional auxiliary image that represents the portrait effects matte of the image.
- [previewImage](cirawfilter/previewimage.md): An optional auxiliary image that represents a preview of the original image.
- [properties](cirawfilter/properties.md): A dictionary that contains properties of the image source.
- [scaleFactor](cirawfilter/scalefactor.md): A value that indicates the desired scale factor to draw the output image.
- [semanticSegmentationGlassesMatte](cirawfilter/semanticsegmentationglassesmatte.md): An optional auxiliary image that represents the semantic segmentation glasses matte of the image.
- [semanticSegmentationHairMatte](cirawfilter/semanticsegmentationhairmatte.md): An optional auxiliary image that represents the semantic segmentation hair matte of the image.
- [semanticSegmentationSkinMatte](cirawfilter/semanticsegmentationskinmatte.md): An optional auxiliary image that represents the semantic segmentation skin matte of the image.
- [semanticSegmentationSkyMatte](cirawfilter/semanticsegmentationskymatte.md): An optional auxiliary image that represents the semantic segmentation sky matte of the image.
- [semanticSegmentationTeethMatte](cirawfilter/semanticsegmentationteethmatte.md): An optional auxiliary image that represents the semantic segmentation teeth matte of the image.
- [shadowBias](cirawfilter/shadowbias.md): A value that indicates the amount to subtract from the shadows in the image.
- [sharpnessAmount](cirawfilter/sharpnessamount.md): A value that indicates the amount of sharpness to apply to the edges of the image.

### Instance Properties

- [despeckleAmount](cirawfilter/despeckleamount.md)
- [despeckleSupported](cirawfilter/isdespecklesupported.md)
- [highlightRecoveryEnabled](cirawfilter/ishighlightrecoveryenabled.md)
- [highlightRecoverySupported](cirawfilter/ishighlightrecoverysupported.md)

### Instance Methods

- [downloadResourcesWithTimeout:completionHandler:](cirawfilter/downloadresources%28timeout_completionhandler_%29.md)

### Type Methods

- [supportedCameraModelsWithVersion:](cirawfilter/supportedcameramodels%28with_%29.md)

## Relationships

### Inherits From

- [CIFilter](cifilter-swift.class.md)

## See Also

### Filters

- [CIFilter](cifilter-swift.class.md): An image processor that produces an image by manipulating one or more input images or by generating new image data.
- [CIColor](cicolor.md): The Core Image class that defines a color object.
- [CIVector](civector.md): The Core Image class that defines a vector object.
