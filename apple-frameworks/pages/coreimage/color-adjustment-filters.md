> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/color-adjustment-filters](https://developer.apple.com/documentation/coreimage/color-adjustment-filters)

# Color Adjustment Filters (Swift)

**Framework:** Core Image  
**Kind:** API Collection

Apply color transformations, including exposure, hue, and tint adjustments.

## Topics

### Filters

- [colorAbsoluteDifference()](cifilter-swift.class/colorabsolutedifference%28%29.md): Calculates the absolute difference between each color component in the input images.
- [colorClamp()](cifilter-swift.class/colorclamp%28%29.md): Alters the colors in an image based on color components.
- [colorControls()](cifilter-swift.class/colorcontrols%28%29.md): Alters the brightness, contrast, and saturation of an image’s colors.
- [colorMatrix()](cifilter-swift.class/colormatrix%28%29.md): Alters the colors in an image based on vectors provided.
- [colorPolynomial()](cifilter-swift.class/colorpolynomial%28%29.md): Alters an image’s colors.
- [colorThreshold()](cifilter-swift.class/colorthreshold%28%29.md): Compares the red, green, and blue components of the input image to a threshold and sets them to 1 or 0.
- [colorThresholdOtsu()](cifilter-swift.class/colorthresholdotsu%28%29.md): Compares the red, green, and blue components of the input image against a threshold calculated using Otsu’s algorithm.
- [depthToDisparity()](cifilter-swift.class/depthtodisparity%28%29.md): Converts from an image containing depth data to an image containing disparity data.
- [disparityToDepth()](cifilter-swift.class/disparitytodepth%28%29.md): Creates depth data from an image containing disparity data.
- [exposureAdjust()](cifilter-swift.class/exposureadjust%28%29.md): Adjusts an image’s exposure.
- [gammaAdjust()](cifilter-swift.class/gammaadjust%28%29.md): Alters an image’s transition between black and white.
- [hueAdjust()](cifilter-swift.class/hueadjust%28%29.md): Modifies an image’s hue.
- [linearToSRGBToneCurve()](cifilter-swift.class/lineartosrgbtonecurve%28%29.md): Alters an image’s color intensity.
- [sRGBToneCurveToLinear()](cifilter-swift.class/srgbtonecurvetolinear%28%29.md): Converts the colors in an image from sRGB to linear.
- [temperatureAndTint()](cifilter-swift.class/temperatureandtint%28%29.md): Alters an image’s temperature and tint.
- [toneCurve()](cifilter-swift.class/tonecurve%28%29.md): Alters an image’s tone curve according to a series of data points.
- [vibrance()](cifilter-swift.class/vibrance%28%29.md): Adjusts an image’s vibrancy.
- [whitePointAdjust()](cifilter-swift.class/whitepointadjust%28%29.md): Adjusts the image’s white-point.

### Protocols

- [CIColorAbsoluteDifference](cicolorabsolutedifference.md)
- [CIColorClamp](cicolorclamp.md): The properties you use to configure a color clamp filter.
- [CIColorControls](cicolorcontrols.md): The properties you use to configure a color controls filter.
- [CIColorMatrix](cicolormatrix.md): The properties you use to configure a color matrix filter.
- [CIColorPolynomial](cicolorpolynomial.md): The properties you use to configure a color polynomial filter.
- [CIColorThreshold](cicolorthreshold.md)
- [CIColorThresholdOtsu](cicolorthresholdotsu.md)
- [CIDepthToDisparity](cidepthtodisparity.md): The properties you use to configure a depth-to-disparity filter.
- [CIDisparityToDepth](cidisparitytodepth.md): The properties you use to configure a disparity-to-depth filter.
- [CIExposureAdjust](ciexposureadjust.md): The properties you use to configure an exposure adjust filter.
- [CIGammaAdjust](cigammaadjust.md): The properties you use to configure a gamma adjust filter.
- [CIHueAdjust](cihueadjust.md): The properties you use to configure a hue adjust filter.
- [CILinearToSRGBToneCurve](cilineartosrgbtonecurve.md): The properties you use to configure a linear-to-sRGB filter.
- [CISRGBToneCurveToLinear](cisrgbtonecurvetolinear.md): The properties you use to configure an sRGB-to-linear filter.
- [CISystemToneMap](cisystemtonemap.md): The protocol for the System Tone Map filter.
- [CITemperatureAndTint](citemperatureandtint.md): The properties you use to configure a temperature and tint filter.
- [CIToneCurve](citonecurve.md): The properties you use to configure a tone curve filter.
- [CIVibrance](civibrance.md): The properties you use to configure a vibrance filter.
- [CIWhitePointAdjust](ciwhitepointadjust.md): The properties you use to configure a white-point adjust filter.

## See Also

### Filter Catalog

- [Blur Filters](blur-filters.md): Apply blurs, simulate motion and zoom effects, reduce noise, and erode and dilate image regions.
- [Color Effect Filters](color-effect-filters.md): Apply color effects, including photo effects, dithering, and color maps.
- [Composite Operations](composite-operations.md): Composite images by using a range of blend modes and compositing operators.
- [Convolution Filters](convolution-filters.md): Produce effects such as blurring, sharpening, edge detection, translation, and embossing.
- [Distortion Filters](distortion-filters.md): Apply distortion to images.
- [Generator Filters](generator-filters.md): Generate barcode, geometric, and special-effect images.
- [Geometry Adjustment Filters](geometry-adjustment-filters.md): Translate, scale, and rotate images in 2D and 3D.
- [Gradient Filters](gradient-filters.md): Generate linear and radial gradients.
- [Halftone Effect Filters](halftone-effect-filters.md): Simulate monochrome and CMYK halftone screens.
- [Reduction Filters](reduction-filters.md): Create statistical information about an image.
- [Sharpening Filters](sharpening-filters.md): Apply sharpening to images.
- [Stylizing Filters](stylizing-filters.md): Create stylized versions of images by applying effects including pixelation and line overlays.
- [Tile Effect Filters](tile-effect-filters.md): Produce tiled images from source images.
- [Transition Filters](transition-filters.md): Transition between two images by using effects including page curl and swipe.

# Color Adjustment Filters (Objective-C)

**Framework:** Core Image  
**Kind:** API Collection

Apply color transformations, including exposure, hue, and tint adjustments.

## Topics

### Filters

- [colorAbsoluteDifferenceFilter](cifilter-swift.class/colorabsolutedifference%28%29.md): Calculates the absolute difference between each color component in the input images.
- [colorClampFilter](cifilter-swift.class/colorclamp%28%29.md): Alters the colors in an image based on color components.
- [colorControlsFilter](cifilter-swift.class/colorcontrols%28%29.md): Alters the brightness, contrast, and saturation of an image’s colors.
- [colorMatrixFilter](cifilter-swift.class/colormatrix%28%29.md): Alters the colors in an image based on vectors provided.
- [colorPolynomialFilter](cifilter-swift.class/colorpolynomial%28%29.md): Alters an image’s colors.
- [colorThresholdFilter](cifilter-swift.class/colorthreshold%28%29.md): Compares the red, green, and blue components of the input image to a threshold and sets them to 1 or 0.
- [colorThresholdOtsuFilter](cifilter-swift.class/colorthresholdotsu%28%29.md): Compares the red, green, and blue components of the input image against a threshold calculated using Otsu’s algorithm.
- [depthToDisparityFilter](cifilter-swift.class/depthtodisparity%28%29.md): Converts from an image containing depth data to an image containing disparity data.
- [disparityToDepthFilter](cifilter-swift.class/disparitytodepth%28%29.md): Creates depth data from an image containing disparity data.
- [exposureAdjustFilter](cifilter-swift.class/exposureadjust%28%29.md): Adjusts an image’s exposure.
- [gammaAdjustFilter](cifilter-swift.class/gammaadjust%28%29.md): Alters an image’s transition between black and white.
- [hueAdjustFilter](cifilter-swift.class/hueadjust%28%29.md): Modifies an image’s hue.
- [linearToSRGBToneCurveFilter](cifilter-swift.class/lineartosrgbtonecurve%28%29.md): Alters an image’s color intensity.
- [sRGBToneCurveToLinearFilter](cifilter-swift.class/srgbtonecurvetolinear%28%29.md): Converts the colors in an image from sRGB to linear.
- [temperatureAndTintFilter](cifilter-swift.class/temperatureandtint%28%29.md): Alters an image’s temperature and tint.
- [toneCurveFilter](cifilter-swift.class/tonecurve%28%29.md): Alters an image’s tone curve according to a series of data points.
- [vibranceFilter](cifilter-swift.class/vibrance%28%29.md): Adjusts an image’s vibrancy.
- [whitePointAdjustFilter](cifilter-swift.class/whitepointadjust%28%29.md): Adjusts the image’s white-point.

### Protocols

- [CIColorAbsoluteDifference](cicolorabsolutedifference.md)
- [CIColorClamp](cicolorclamp.md): The properties you use to configure a color clamp filter.
- [CIColorControls](cicolorcontrols.md): The properties you use to configure a color controls filter.
- [CIColorMatrix](cicolormatrix.md): The properties you use to configure a color matrix filter.
- [CIColorPolynomial](cicolorpolynomial.md): The properties you use to configure a color polynomial filter.
- [CIColorThreshold](cicolorthreshold.md)
- [CIColorThresholdOtsu](cicolorthresholdotsu.md)
- [CIDepthToDisparity](cidepthtodisparity.md): The properties you use to configure a depth-to-disparity filter.
- [CIDisparityToDepth](cidisparitytodepth.md): The properties you use to configure a disparity-to-depth filter.
- [CIExposureAdjust](ciexposureadjust.md): The properties you use to configure an exposure adjust filter.
- [CIGammaAdjust](cigammaadjust.md): The properties you use to configure a gamma adjust filter.
- [CIHueAdjust](cihueadjust.md): The properties you use to configure a hue adjust filter.
- [CILinearToSRGBToneCurve](cilineartosrgbtonecurve.md): The properties you use to configure a linear-to-sRGB filter.
- [CISRGBToneCurveToLinear](cisrgbtonecurvetolinear.md): The properties you use to configure an sRGB-to-linear filter.
- [CISystemToneMap](cisystemtonemap.md): The protocol for the System Tone Map filter.
- [CITemperatureAndTint](citemperatureandtint.md): The properties you use to configure a temperature and tint filter.
- [CIToneCurve](citonecurve.md): The properties you use to configure a tone curve filter.
- [CIVibrance](civibrance.md): The properties you use to configure a vibrance filter.
- [CIWhitePointAdjust](ciwhitepointadjust.md): The properties you use to configure a white-point adjust filter.

## See Also

### Filter Catalog

- [Blur Filters](blur-filters.md): Apply blurs, simulate motion and zoom effects, reduce noise, and erode and dilate image regions.
- [Color Effect Filters](color-effect-filters.md): Apply color effects, including photo effects, dithering, and color maps.
- [Composite Operations](composite-operations.md): Composite images by using a range of blend modes and compositing operators.
- [Convolution Filters](convolution-filters.md): Produce effects such as blurring, sharpening, edge detection, translation, and embossing.
- [Distortion Filters](distortion-filters.md): Apply distortion to images.
- [Generator Filters](generator-filters.md): Generate barcode, geometric, and special-effect images.
- [Geometry Adjustment Filters](geometry-adjustment-filters.md): Translate, scale, and rotate images in 2D and 3D.
- [Gradient Filters](gradient-filters.md): Generate linear and radial gradients.
- [Halftone Effect Filters](halftone-effect-filters.md): Simulate monochrome and CMYK halftone screens.
- [Reduction Filters](reduction-filters.md): Create statistical information about an image.
- [Sharpening Filters](sharpening-filters.md): Apply sharpening to images.
- [Stylizing Filters](stylizing-filters.md): Create stylized versions of images by applying effects including pixelation and line overlays.
- [Tile Effect Filters](tile-effect-filters.md): Produce tiled images from source images.
- [Transition Filters](transition-filters.md): Transition between two images by using effects including page curl and swipe.
