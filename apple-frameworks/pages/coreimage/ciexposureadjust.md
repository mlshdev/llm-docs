> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/ciexposureadjust](https://developer.apple.com/documentation/coreimage/ciexposureadjust)

# CIExposureAdjust (Swift)

**Framework:** Core Image  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The properties you use to configure an exposure adjust filter.

## Declaration

```swift
protocol CIExposureAdjust : CIFilterProtocol
```

## Topics

### Instance Properties

- [ev](ciexposureadjust/ev.md): The amount to adjust the exposure of the image by.
- [inputImage](ciexposureadjust/inputimage.md): The image to use as an input image.

## Relationships

### Inherits From

- [CIFilterProtocol](cifilterprotocol.md)

## See Also

### Related Documentation

- [exposureAdjust()](cifilter-swift.class/exposureadjust%28%29.md): Adjusts an image’s exposure.

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
- [CIGammaAdjust](cigammaadjust.md): The properties you use to configure a gamma adjust filter.
- [CIHueAdjust](cihueadjust.md): The properties you use to configure a hue adjust filter.
- [CILinearToSRGBToneCurve](cilineartosrgbtonecurve.md): The properties you use to configure a linear-to-sRGB filter.
- [CISRGBToneCurveToLinear](cisrgbtonecurvetolinear.md): The properties you use to configure an sRGB-to-linear filter.
- [CISystemToneMap](cisystemtonemap.md): The protocol for the System Tone Map filter.
- [CITemperatureAndTint](citemperatureandtint.md): The properties you use to configure a temperature and tint filter.

# CIExposureAdjust (Objective-C)

**Framework:** Core Image  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The properties you use to configure an exposure adjust filter.

## Declaration

```objectivec
@protocol CIExposureAdjust <CIFilter>
```

## Topics

### Instance Properties

- [EV](ciexposureadjust/ev.md): The amount to adjust the exposure of the image by.
- [inputImage](ciexposureadjust/inputimage.md): The image to use as an input image.

## Relationships

### Inherits From

- [CIFilter](cifilterprotocol.md)

## See Also

### Related Documentation

- [exposureAdjustFilter](cifilter-swift.class/exposureadjust%28%29.md): Adjusts an image’s exposure.

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
- [CIGammaAdjust](cigammaadjust.md): The properties you use to configure a gamma adjust filter.
- [CIHueAdjust](cihueadjust.md): The properties you use to configure a hue adjust filter.
- [CILinearToSRGBToneCurve](cilineartosrgbtonecurve.md): The properties you use to configure a linear-to-sRGB filter.
- [CISRGBToneCurveToLinear](cisrgbtonecurvetolinear.md): The properties you use to configure an sRGB-to-linear filter.
- [CISystemToneMap](cisystemtonemap.md): The protocol for the System Tone Map filter.
- [CITemperatureAndTint](citemperatureandtint.md): The properties you use to configure a temperature and tint filter.
