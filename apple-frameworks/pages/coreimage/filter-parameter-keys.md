> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/filter-parameter-keys](https://developer.apple.com/documentation/coreimage/filter-parameter-keys)

# Filter Parameter Keys (Swift)

**Framework:** Core Image  
**Kind:** API Collection

Keys for input parameters to filters.

<a id="overview"></a>

## Overview

These keys represent some of the most commonly used input parameters. A filter can use other kinds of input parameters.

## Topics

### Constants

- [constrainedHigh](cidynamicrangeoption/constrainedhigh.md): Use extended dynamic range, but brightness is modulated to optimize for co-existence with other composited content.
- [high](cidynamicrangeoption/high.md): Use High dynamic range.
- [standard](cidynamicrangeoption/standard.md): Use Standard dynamic range.
- [kCIInputAmountKey](kciinputamountkey.md)
- [kCIInputAngleKey](kciinputanglekey.md): The angle.
- [kCIInputAspectRatioKey](kciinputaspectratiokey.md): Aspect Ratio.
- [kCIInputBackgroundImageKey](kciinputbackgroundimagekey.md): A key for the [CIImage](ciimage.md) object to use as a background image.
- [kCIInputBacksideImageKey](kciinputbacksideimagekey.md): A key to get or set the backside image for a transition Core Image filter.
- [kCIInputBiasVectorKey](kciinputbiasvectorkey.md): A key to get or set the vector bias value of a Core Image filter.
- [kCIInputBrightnessKey](kciinputbrightnesskey.md): Brightness level.
- [kCIInputCenterKey](kciinputcenterkey.md): A key for a [CIVector](civector.md) object that specifies the center of the area, as *x* and *y*\- coordinates, to be filtered.
- [kCIInputColorKey](kciinputcolorkey.md): A key for a [CIColor](cicolor.md) object that specifies a color value.
- [kCIInputColor0Key](kciinputcolor0key.md): A key to get or set a color value of a Core Image filter.
- [kCIInputColor1Key](kciinputcolor1key.md): A key to get or set a color value of a Core Image filter.
- [kCIInputColorSpaceKey](kciinputcolorspacekey.md): A key to get or set a color space value of a Core Image filter.
- [kCIInputContrastKey](kciinputcontrastkey.md): A contrast level.
- [kCIInputCountKey](kciinputcountkey.md): A key to get or set the scalar count value of a Core Image filter.
- [kCIInputDepthImageKey](kciinputdepthimagekey.md): A key for an image with depth values.
- [kCIInputDisparityImageKey](kciinputdisparityimagekey.md): A key for an image with disparity values.
- [kCIInputEVKey](kciinputevkey.md): How many F-stops brighter or darker the image should be.
- [kCIInputExtentKey](kciinputextentkey.md): A key for a [CIVector](civector.md) object that specifies a rectangle that defines the extent of the effect.
- [kCIInputExtrapolateKey](kciinputextrapolatekey.md): A key to get or set the boolean behavior of a Core Image filter that specifies if the filter should extrapolate a table beyond the defined range.
- [kCIInputGradientImageKey](kciinputgradientimagekey.md): A key for a [CIImage](ciimage.md) object that specifies an environment map with alpha. Typically, this image contains highlight and shadow.
- [kCIInputImageKey](kciinputimagekey.md): A key for the [CIImage](ciimage.md) object to use as an input image. For filters that also use a background image, this key refers to the foreground image.
- [kCIInputIntensityKey](kciinputintensitykey.md): An intensity value.
- [kCIInputMaskImageKey](kciinputmaskimagekey.md): A key for a [CIImage](ciimage.md) object to use as a mask.
- [kCIInputMatteImageKey](kciinputmatteimagekey.md)
- [kCIInputPaletteImageKey](kciinputpaletteimagekey.md): A key to get or set the palette image for a Core Image filter.
- [kCIInputPerceptualKey](kciinputperceptualkey.md): A key to get or set the boolean behavior of a Core Image filter that specifies if the filter should operate in linear or perceptual colors.
- [kCIInputPoint0Key](kciinputpoint0key.md): A key to get or set the coordinate value of a Core Image filter. The value for this key needs to be a [CIVector](civector.md) instance containing the `x,y` coordinate.
- [kCIInputPoint1Key](kciinputpoint1key.md): A key to get or set a coordinate value of a Core Image filter. The value for this key needs to be a [CIVector](civector.md) instance containing the `x,y` coordinate.
- [kCIInputRadiusKey](kciinputradiuskey.md): The distance from the center of an effect.
- [kCIInputRadius0Key](kciinputradius0key.md): A key to get or set the geometric radius value of a Core Image filter.
- [kCIInputRadius1Key](kciinputradius1key.md): A key to get or set the geometric radius value of a Core Image filter.
- [kCIInputRefractionKey](kciinputrefractionkey.md): The index of refraction to use.
- [kCIInputSaturationKey](kciinputsaturationkey.md): The amount to adjust the saturation.
- [kCIInputScaleKey](kciinputscalekey.md): The amount of scale to apply.
- [kCIInputShadingImageKey](kciinputshadingimagekey.md): A key for a [CIImage](ciimage.md) object that specifies an environment map with alpha values. Typically this image contains highlight and shadow.
- [kCIInputSharpnessKey](kciinputsharpnesskey.md): Amount of sharpening to apply.
- [kCIInputTargetImageKey](kciinputtargetimagekey.md): A key for a [CIImage](ciimage.md) object that is the target image for a transition.
- [kCIInputThresholdKey](kciinputthresholdkey.md): A key to get or set the scalar threshold value of a Core Image filter.
- [kCIInputTimeKey](kciinputtimekey.md): Specify a time.
- [kCIInputTransformKey](kciinputtransformkey.md): Transformation to apply.
- [kCIInputVersionKey](kciinputversionkey.md): Version Key
- [kCIInputWeightsKey](kciinputweightskey.md): A key for a [CIVector](civector.md) object that describes a weight matrix for use with a convolution filter.
- [kCIInputWidthKey](kciinputwidthkey.md): A key for a scalar value that specifies the width of the effect.
- [kCIOutputImageKey](kcioutputimagekey.md): A key for the [CIImage](ciimage.md) object produced by a filter.

### Deprecated

- [baselineExposure](cirawfilteroption/baselineexposure.md): Deprecated. The amount of baseline exposure applied.
- [disableGamutMap](cirawfilteroption/disablegamutmap.md): Deprecated. Whether or not to disable gamut mapping.
- [moireAmount](cirawfilteroption/moireamount.md): Deprecated. The amount of moiré reduction to apply.

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
- [RAW Image Options](raw-image-options.md): Options for creating a [CIFilter](cifilter-swift.class.md) object from RAW image data.

# Filter Parameter Keys (Objective-C)

**Framework:** Core Image  
**Kind:** API Collection

Keys for input parameters to filters.

<a id="overview"></a>

## Overview

These keys represent some of the most commonly used input parameters. A filter can use other kinds of input parameters.

## Topics

### Constants

- [kCIDynamicRangeConstrainedHigh](cidynamicrangeoption/constrainedhigh.md): Use extended dynamic range, but brightness is modulated to optimize for co-existence with other composited content.
- [kCIDynamicRangeHigh](cidynamicrangeoption/high.md): Use High dynamic range.
- [kCIDynamicRangeStandard](cidynamicrangeoption/standard.md): Use Standard dynamic range.
- [kCIInputAmountKey](kciinputamountkey.md)
- [kCIInputAngleKey](kciinputanglekey.md): The angle.
- [kCIInputAspectRatioKey](kciinputaspectratiokey.md): Aspect Ratio.
- [kCIInputBackgroundImageKey](kciinputbackgroundimagekey.md): A key for the [CIImage](ciimage.md) object to use as a background image.
- [kCIInputBacksideImageKey](kciinputbacksideimagekey.md): A key to get or set the backside image for a transition Core Image filter.
- [kCIInputBiasVectorKey](kciinputbiasvectorkey.md): A key to get or set the vector bias value of a Core Image filter.
- [kCIInputBrightnessKey](kciinputbrightnesskey.md): Brightness level.
- [kCIInputCenterKey](kciinputcenterkey.md): A key for a [CIVector](civector.md) object that specifies the center of the area, as *x* and *y*\- coordinates, to be filtered.
- [kCIInputColorKey](kciinputcolorkey.md): A key for a [CIColor](cicolor.md) object that specifies a color value.
- [kCIInputColor0Key](kciinputcolor0key.md): A key to get or set a color value of a Core Image filter.
- [kCIInputColor1Key](kciinputcolor1key.md): A key to get or set a color value of a Core Image filter.
- [kCIInputColorSpaceKey](kciinputcolorspacekey.md): A key to get or set a color space value of a Core Image filter.
- [kCIInputContrastKey](kciinputcontrastkey.md): A contrast level.
- [kCIInputCountKey](kciinputcountkey.md): A key to get or set the scalar count value of a Core Image filter.
- [kCIInputDepthImageKey](kciinputdepthimagekey.md): A key for an image with depth values.
- [kCIInputDisparityImageKey](kciinputdisparityimagekey.md): A key for an image with disparity values.
- [kCIInputEVKey](kciinputevkey.md): How many F-stops brighter or darker the image should be.
- [kCIInputExtentKey](kciinputextentkey.md): A key for a [CIVector](civector.md) object that specifies a rectangle that defines the extent of the effect.
- [kCIInputExtrapolateKey](kciinputextrapolatekey.md): A key to get or set the boolean behavior of a Core Image filter that specifies if the filter should extrapolate a table beyond the defined range.
- [kCIInputGradientImageKey](kciinputgradientimagekey.md): A key for a [CIImage](ciimage.md) object that specifies an environment map with alpha. Typically, this image contains highlight and shadow.
- [kCIInputImageKey](kciinputimagekey.md): A key for the [CIImage](ciimage.md) object to use as an input image. For filters that also use a background image, this key refers to the foreground image.
- [kCIInputIntensityKey](kciinputintensitykey.md): An intensity value.
- [kCIInputMaskImageKey](kciinputmaskimagekey.md): A key for a [CIImage](ciimage.md) object to use as a mask.
- [kCIInputMatteImageKey](kciinputmatteimagekey.md)
- [kCIInputPaletteImageKey](kciinputpaletteimagekey.md): A key to get or set the palette image for a Core Image filter.
- [kCIInputPerceptualKey](kciinputperceptualkey.md): A key to get or set the boolean behavior of a Core Image filter that specifies if the filter should operate in linear or perceptual colors.
- [kCIInputPoint0Key](kciinputpoint0key.md): A key to get or set the coordinate value of a Core Image filter. The value for this key needs to be a [CIVector](civector.md) instance containing the `x,y` coordinate.
- [kCIInputPoint1Key](kciinputpoint1key.md): A key to get or set a coordinate value of a Core Image filter. The value for this key needs to be a [CIVector](civector.md) instance containing the `x,y` coordinate.
- [kCIInputRadiusKey](kciinputradiuskey.md): The distance from the center of an effect.
- [kCIInputRadius0Key](kciinputradius0key.md): A key to get or set the geometric radius value of a Core Image filter.
- [kCIInputRadius1Key](kciinputradius1key.md): A key to get or set the geometric radius value of a Core Image filter.
- [kCIInputRefractionKey](kciinputrefractionkey.md): The index of refraction to use.
- [kCIInputSaturationKey](kciinputsaturationkey.md): The amount to adjust the saturation.
- [kCIInputScaleKey](kciinputscalekey.md): The amount of scale to apply.
- [kCIInputShadingImageKey](kciinputshadingimagekey.md): A key for a [CIImage](ciimage.md) object that specifies an environment map with alpha values. Typically this image contains highlight and shadow.
- [kCIInputSharpnessKey](kciinputsharpnesskey.md): Amount of sharpening to apply.
- [kCIInputTargetImageKey](kciinputtargetimagekey.md): A key for a [CIImage](ciimage.md) object that is the target image for a transition.
- [kCIInputThresholdKey](kciinputthresholdkey.md): A key to get or set the scalar threshold value of a Core Image filter.
- [kCIInputTimeKey](kciinputtimekey.md): Specify a time.
- [kCIInputTransformKey](kciinputtransformkey.md): Transformation to apply.
- [kCIInputVersionKey](kciinputversionkey.md): Version Key
- [kCIInputWeightsKey](kciinputweightskey.md): A key for a [CIVector](civector.md) object that describes a weight matrix for use with a convolution filter.
- [kCIInputWidthKey](kciinputwidthkey.md): A key for a scalar value that specifies the width of the effect.
- [kCIOutputImageKey](kcioutputimagekey.md): A key for the [CIImage](ciimage.md) object produced by a filter.

### Deprecated

- [kCIInputBaselineExposureKey](cirawfilteroption/baselineexposure.md): Deprecated. The amount of baseline exposure applied.
- [kCIInputDisableGamutMapKey](cirawfilteroption/disablegamutmap.md): Deprecated. Whether or not to disable gamut mapping.
- [kCIInputMoireAmountKey](cirawfilteroption/moireamount.md): Deprecated. The amount of moiré reduction to apply.

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
- [RAW Image Options](raw-image-options.md): Options for creating a [CIFilter](cifilter-swift.class.md) object from RAW image data.
