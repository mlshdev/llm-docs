> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cicolorclamp](https://developer.apple.com/documentation/coreimage/cicolorclamp)

# CIColorClamp (Swift)

**Framework:** Core Image  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The properties you use to configure a color clamp filter.

## Declaration

```swift
protocol CIColorClamp : CIFilterProtocol
```

## Topics

### Instance Properties

- [inputImage](cicolorclamp/inputimage.md): The image to use as an input image.
- [maxComponents](cicolorclamp/maxcomponents.md): A vector containing the higher clamping values.
- [minComponents](cicolorclamp/mincomponents.md): A vector containing the lower clamping values.

## Relationships

### Inherits From

- [CIFilterProtocol](cifilterprotocol.md)

## See Also

### Related Documentation

- [colorClamp()](cifilter-swift.class/colorclamp%28%29.md): Alters the colors in an image based on color components.

### Protocols

- [CIColorAbsoluteDifference](cicolorabsolutedifference.md)
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

# CIColorClamp (Objective-C)

**Framework:** Core Image  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The properties you use to configure a color clamp filter.

## Declaration

```objectivec
@protocol CIColorClamp <CIFilter>
```

## Topics

### Instance Properties

- [inputImage](cicolorclamp/inputimage.md): The image to use as an input image.
- [maxComponents](cicolorclamp/maxcomponents.md): A vector containing the higher clamping values.
- [minComponents](cicolorclamp/mincomponents.md): A vector containing the lower clamping values.

## Relationships

### Inherits From

- [CIFilter](cifilterprotocol.md)

## See Also

### Related Documentation

- [colorClampFilter](cifilter-swift.class/colorclamp%28%29.md): Alters the colors in an image based on color components.

### Protocols

- [CIColorAbsoluteDifference](cicolorabsolutedifference.md)
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
