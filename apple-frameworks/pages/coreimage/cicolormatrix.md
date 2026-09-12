> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cicolormatrix](https://developer.apple.com/documentation/coreimage/cicolormatrix)

# CIColorMatrix (Swift)

**Framework:** Core Image  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The properties you use to configure a color matrix filter.

## Declaration

```swift
protocol CIColorMatrix : CIFilterProtocol
```

## Topics

### Instance Properties

- [aVector](cicolormatrix/avector.md): The amount of alpha to multiply the source color values by.
- [bVector](cicolormatrix/bvector.md): The amount of blue to multiply the source color values by.
- [gVector](cicolormatrix/gvector.md): The amount of green to multiply the source color values by.
- [rVector](cicolormatrix/rvector.md): The amount of red to multiply the source color values by.
- [biasVector](cicolormatrix/biasvector.md): A vector that’s added to each color component.
- [inputImage](cicolormatrix/inputimage.md): The image to use as an input image.

## Relationships

### Inherits From

- [CIFilterProtocol](cifilterprotocol.md)

## See Also

### Related Documentation

- [colorMatrix()](cifilter-swift.class/colormatrix%28%29.md): Alters the colors in an image based on vectors provided.

### Protocols

- [CIColorAbsoluteDifference](cicolorabsolutedifference.md)
- [CIColorClamp](cicolorclamp.md): The properties you use to configure a color clamp filter.
- [CIColorControls](cicolorcontrols.md): The properties you use to configure a color controls filter.
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

# CIColorMatrix (Objective-C)

**Framework:** Core Image  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The properties you use to configure a color matrix filter.

## Declaration

```objectivec
@protocol CIColorMatrix <CIFilter>
```

## Topics

### Instance Properties

- [AVector](cicolormatrix/avector.md): The amount of alpha to multiply the source color values by.
- [BVector](cicolormatrix/bvector.md): The amount of blue to multiply the source color values by.
- [GVector](cicolormatrix/gvector.md): The amount of green to multiply the source color values by.
- [RVector](cicolormatrix/rvector.md): The amount of red to multiply the source color values by.
- [biasVector](cicolormatrix/biasvector.md): A vector that’s added to each color component.
- [inputImage](cicolormatrix/inputimage.md): The image to use as an input image.

## Relationships

### Inherits From

- [CIFilter](cifilterprotocol.md)

## See Also

### Related Documentation

- [colorMatrixFilter](cifilter-swift.class/colormatrix%28%29.md): Alters the colors in an image based on vectors provided.

### Protocols

- [CIColorAbsoluteDifference](cicolorabsolutedifference.md)
- [CIColorClamp](cicolorclamp.md): The properties you use to configure a color clamp filter.
- [CIColorControls](cicolorcontrols.md): The properties you use to configure a color controls filter.
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
