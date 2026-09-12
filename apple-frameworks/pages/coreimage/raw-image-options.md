> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/raw-image-options](https://developer.apple.com/documentation/coreimage/raw-image-options)

# RAW Image Options (Swift)

**Framework:** Core Image  
**Kind:** API Collection

Options for creating a [CIFilter](cifilter-swift.class.md) object from RAW image data.

<a id="overview"></a>

## Overview

You can also use the key [kCIInputEVKey](kciinputevkey.md) for RAW images.

## Topics

### Constants

- [decoderVersion](cirawfilteroption/decoderversion.md): Deprecated. A key for the version number of the method to be used for decoding. A newly initialized object defaults to the newest available decoder version for the given image type. You can request an alternative, older version to maintain compatibility with older releases. Must be one of the values listed for the [supportedDecoderVersions](cirawfilteroption/supporteddecoderversions.md) key, otherwise a `nil` output image is generated. The associated value must be an `NSNumber` object that specifies an integer value in range of `0` to the current decoder version. When you request a specific version of the decoder, Core Image produces an image that is *visually* the same across different versions of the operating system. Core Image, however, does not guarantee that the same bits are produced across different versions of the operating system. That’s because the rounding behavior of floating-point arithmetic can vary due to differences in compilers or hardware. Note that this option has no effect if the image used for initialization is not RAW.
- [supportedDecoderVersions](cirawfilteroption/supporteddecoderversions.md): Deprecated. A key for the supported decoder versions.
- [boostAmount](cirawfilteroption/boostamount.md): Deprecated. A key for the amount of boost to apply to an image.
- [neutralChromaticityX](cirawfilteroption/neutralchromaticityx.md): Deprecated. The x value of the chromaticity.
- [neutralChromaticityY](cirawfilteroption/neutralchromaticityy.md): Deprecated. The y value of the chromaticity.
- [neutralTemperature](cirawfilteroption/neutraltemperature.md): Deprecated. A key for neutral temperature.
- [neutralTint](cirawfilteroption/neutraltint.md): Deprecated. A key for the neutral tint.
- [neutralLocation](cirawfilteroption/neutrallocation.md): Deprecated. A key for the neutral position. Use this key to set the location in geometric coordinates of the unrotated output image that should be used as neutral. You cannot query this value; it is undefined for reading. The associated value is a two-element [CIVector](civector.md) object that specifies the location (`x`, `y`).
- [scaleFactor](cirawfilteroption/scalefactor.md): Deprecated. A key for the scale factor.
- [allowDraftMode](cirawfilteroption/allowdraftmode.md): Deprecated. A key for allowing draft mode.
- [ignoreImageOrientation](cirawfilteroption/ignoreimageorientation.md): Deprecated. A key for specifying whether to ignore the image orientation
- [imageOrientation](cirawfilteroption/imageorientation.md): Deprecated. A key for the image orientation.
- [enableSharpening](cirawfilteroption/enablesharpening.md): Deprecated. A key for the sharpening state.
- [enableChromaticNoiseTracking](cirawfilteroption/enablechromaticnoisetracking.md): Deprecated. A key for progressive chromatic noise tracking (based on ISO and exposure time).
- [noiseReductionAmount](cirawfilteroption/noisereductionamount.md): Deprecated. A key for the amount to reduce noise in the image.
- [enableVendorLensCorrection](cirawfilteroption/enablevendorlenscorrection.md): Deprecated. A key for whether to automatically correct for image distortion from known lenses.
- [luminanceNoiseReductionAmount](cirawfilteroption/luminancenoisereductionamount.md): Deprecated. A key for the amount of noise reduction to apply to luminance data in the image.
- [colorNoiseReductionAmount](cirawfilteroption/colornoisereductionamount.md): Deprecated. A key for the amount of noise reduction to apply to color data in the image.
- [noiseReductionSharpnessAmount](cirawfilteroption/noisereductionsharpnessamount.md): Deprecated. A key for the amount of sharpness enhancement to apply during noise reduction.
- [noiseReductionContrastAmount](cirawfilteroption/noisereductioncontrastamount.md): Deprecated. A key for the amount of contrast enhancement to apply during noise reduction.
- [noiseReductionDetailAmount](cirawfilteroption/noisereductiondetailamount.md): Deprecated. A key for the amount of detail enhancement to apply during noise reduction.
- [boostShadowAmount](cirawfilteroption/boostshadowamount.md): Deprecated. A key for the amount to boost the shadow areas of the image.
- [kCIInputBiasKey](kciinputbiaskey.md): Simple bias value.
- [linearSpaceFilter](cirawfilteroption/linearspacefilter.md): Deprecated. A key for the filter to apply to the image while it is temporarily in a linear color space as part of RAW image processing. The associated value must be a [CIFilter](cifilter-swift.class.md) object.
- [outputNativeSize](cirawfilteroption/outputnativesize.md): Deprecated. A key for the full native size of the original, non-transformed RAW image. The associated value is a [CIVector](civector.md) object whose X and Y values are the image’s width and height. This key is read-only.
- [activeKeys](cirawfilteroption/activekeys.md): Deprecated. A key for the set of input keys available for use.

## See Also

### Constants

- [Filter Attribute Keys](filter-attribute-keys.md): Attributes for a filter and its parameters.
- [Data Type Attributes](data-type-attributes.md): Numeric data types.
- [Vector Quantity Attributes](vector-quantity-attributes.md): Vector data types.
- [Color Attribute Keys](color-attribute-keys.md): Color types.
- [Image Attribute Keys](image-attribute-keys.md): Image Types
- [Filter Category Keys](filter-category-keys.md): Categories of filters.
- [Options for Applying a Filter](options-for-applying-a-filter.md): Options that control the application of a custom Core Image filter.
- [User Interface Control Options](user-interface-control-options.md): Sets of controls for various user scenarios.
- [User Interface Options](user-interface-options.md): Keys or values for the size of the input parameter controls for a filter view.
- [Filter Parameter Keys](filter-parameter-keys.md): Keys for input parameters to filters.

# RAW Image Options (Objective-C)

**Framework:** Core Image  
**Kind:** API Collection

Options for creating a [CIFilter](cifilter-swift.class.md) object from RAW image data.

<a id="overview"></a>

## Overview

You can also use the key [kCIInputEVKey](kciinputevkey.md) for RAW images.

## Topics

### Constants

- [kCIInputDecoderVersionKey](cirawfilteroption/decoderversion.md): Deprecated. A key for the version number of the method to be used for decoding. A newly initialized object defaults to the newest available decoder version for the given image type. You can request an alternative, older version to maintain compatibility with older releases. Must be one of the values listed for the [kCISupportedDecoderVersionsKey](cirawfilteroption/supporteddecoderversions.md) key, otherwise a `nil` output image is generated. The associated value must be an `NSNumber` object that specifies an integer value in range of `0` to the current decoder version. When you request a specific version of the decoder, Core Image produces an image that is *visually* the same across different versions of the operating system. Core Image, however, does not guarantee that the same bits are produced across different versions of the operating system. That’s because the rounding behavior of floating-point arithmetic can vary due to differences in compilers or hardware. Note that this option has no effect if the image used for initialization is not RAW.
- [kCISupportedDecoderVersionsKey](cirawfilteroption/supporteddecoderversions.md): Deprecated. A key for the supported decoder versions.
- [kCIInputBoostKey](cirawfilteroption/boostamount.md): Deprecated. A key for the amount of boost to apply to an image.
- [kCIInputNeutralChromaticityXKey](cirawfilteroption/neutralchromaticityx.md): Deprecated. The x value of the chromaticity.
- [kCIInputNeutralChromaticityYKey](cirawfilteroption/neutralchromaticityy.md): Deprecated. The y value of the chromaticity.
- [kCIInputNeutralTemperatureKey](cirawfilteroption/neutraltemperature.md): Deprecated. A key for neutral temperature.
- [kCIInputNeutralTintKey](cirawfilteroption/neutraltint.md): Deprecated. A key for the neutral tint.
- [kCIInputNeutralLocationKey](cirawfilteroption/neutrallocation.md): Deprecated. A key for the neutral position. Use this key to set the location in geometric coordinates of the unrotated output image that should be used as neutral. You cannot query this value; it is undefined for reading. The associated value is a two-element [CIVector](civector.md) object that specifies the location (`x`, `y`).
- [kCIInputScaleFactorKey](cirawfilteroption/scalefactor.md): Deprecated. A key for the scale factor.
- [kCIInputAllowDraftModeKey](cirawfilteroption/allowdraftmode.md): Deprecated. A key for allowing draft mode.
- [kCIInputIgnoreImageOrientationKey](cirawfilteroption/ignoreimageorientation.md): Deprecated. A key for specifying whether to ignore the image orientation
- [kCIInputImageOrientationKey](cirawfilteroption/imageorientation.md): Deprecated. A key for the image orientation.
- [kCIInputEnableSharpeningKey](cirawfilteroption/enablesharpening.md): Deprecated. A key for the sharpening state.
- [kCIInputEnableChromaticNoiseTrackingKey](cirawfilteroption/enablechromaticnoisetracking.md): Deprecated. A key for progressive chromatic noise tracking (based on ISO and exposure time).
- [kCIInputNoiseReductionAmountKey](cirawfilteroption/noisereductionamount.md): Deprecated. A key for the amount to reduce noise in the image.
- [kCIInputEnableVendorLensCorrectionKey](cirawfilteroption/enablevendorlenscorrection.md): Deprecated. A key for whether to automatically correct for image distortion from known lenses.
- [kCIInputLuminanceNoiseReductionAmountKey](cirawfilteroption/luminancenoisereductionamount.md): Deprecated. A key for the amount of noise reduction to apply to luminance data in the image.
- [kCIInputColorNoiseReductionAmountKey](cirawfilteroption/colornoisereductionamount.md): Deprecated. A key for the amount of noise reduction to apply to color data in the image.
- [kCIInputNoiseReductionSharpnessAmountKey](cirawfilteroption/noisereductionsharpnessamount.md): Deprecated. A key for the amount of sharpness enhancement to apply during noise reduction.
- [kCIInputNoiseReductionContrastAmountKey](cirawfilteroption/noisereductioncontrastamount.md): Deprecated. A key for the amount of contrast enhancement to apply during noise reduction.
- [kCIInputNoiseReductionDetailAmountKey](cirawfilteroption/noisereductiondetailamount.md): Deprecated. A key for the amount of detail enhancement to apply during noise reduction.
- [kCIInputBoostShadowAmountKey](cirawfilteroption/boostshadowamount.md): Deprecated. A key for the amount to boost the shadow areas of the image.
- [kCIInputBiasKey](kciinputbiaskey.md): Simple bias value.
- [kCIInputLinearSpaceFilter](cirawfilteroption/linearspacefilter.md): Deprecated. A key for the filter to apply to the image while it is temporarily in a linear color space as part of RAW image processing. The associated value must be a [CIFilter](cifilter-swift.class.md) object.
- [kCIOutputNativeSizeKey](cirawfilteroption/outputnativesize.md): Deprecated. A key for the full native size of the original, non-transformed RAW image. The associated value is a [CIVector](civector.md) object whose X and Y values are the image’s width and height. This key is read-only.
- [kCIActiveKeys](cirawfilteroption/activekeys.md): Deprecated. A key for the set of input keys available for use.

## See Also

### Constants

- [Filter Attribute Keys](filter-attribute-keys.md): Attributes for a filter and its parameters.
- [Data Type Attributes](data-type-attributes.md): Numeric data types.
- [Vector Quantity Attributes](vector-quantity-attributes.md): Vector data types.
- [Color Attribute Keys](color-attribute-keys.md): Color types.
- [Image Attribute Keys](image-attribute-keys.md): Image Types
- [Filter Category Keys](filter-category-keys.md): Categories of filters.
- [Options for Applying a Filter](options-for-applying-a-filter.md): Options that control the application of a custom Core Image filter.
- [User Interface Control Options](user-interface-control-options.md): Sets of controls for various user scenarios.
- [User Interface Options](user-interface-options.md): Keys or values for the size of the input parameter controls for a filter view.
- [Filter Parameter Keys](filter-parameter-keys.md): Keys for input parameters to filters.
