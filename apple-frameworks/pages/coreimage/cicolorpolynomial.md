> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cicolorpolynomial](https://developer.apple.com/documentation/coreimage/cicolorpolynomial)

# CIColorPolynomial (Swift)

**Framework:** Core Image  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The properties you use to configure a color polynomial filter.

## Declaration

```swift
protocol CIColorPolynomial : CIFilterProtocol
```

## Topics

### Instance Properties

- [alphaCoefficients](cicolorpolynomial/alphacoefficients.md): Polynomial coefficients for the alpha channel.
- [blueCoefficients](cicolorpolynomial/bluecoefficients.md): Polynomial coefficients for the blue channel.
- [greenCoefficients](cicolorpolynomial/greencoefficients.md): Polynomial coefficients for the green channel.
- [inputImage](cicolorpolynomial/inputimage.md): The image to use as an input image.
- [redCoefficients](cicolorpolynomial/redcoefficients.md): Polynomial coefficients for the red channel.

## Relationships

### Inherits From

- [CIFilterProtocol](cifilterprotocol.md)

## See Also

### Related Documentation

- [colorPolynomial()](cifilter-swift.class/colorpolynomial%28%29.md): Alters an image’s colors.

### Protocols

- [CIColorAbsoluteDifference](cicolorabsolutedifference.md)
- [CIColorClamp](cicolorclamp.md): The properties you use to configure a color clamp filter.
- [CIColorControls](cicolorcontrols.md): The properties you use to configure a color controls filter.
- [CIColorMatrix](cicolormatrix.md): The properties you use to configure a color matrix filter.
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

# CIColorPolynomial (Objective-C)

**Framework:** Core Image  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The properties you use to configure a color polynomial filter.

## Declaration

```objectivec
@protocol CIColorPolynomial <CIFilter>
```

## Topics

### Instance Properties

- [alphaCoefficients](cicolorpolynomial/alphacoefficients.md): Polynomial coefficients for the alpha channel.
- [blueCoefficients](cicolorpolynomial/bluecoefficients.md): Polynomial coefficients for the blue channel.
- [greenCoefficients](cicolorpolynomial/greencoefficients.md): Polynomial coefficients for the green channel.
- [inputImage](cicolorpolynomial/inputimage.md): The image to use as an input image.
- [redCoefficients](cicolorpolynomial/redcoefficients.md): Polynomial coefficients for the red channel.

## Relationships

### Inherits From

- [CIFilter](cifilterprotocol.md)

## See Also

### Related Documentation

- [colorPolynomialFilter](cifilter-swift.class/colorpolynomial%28%29.md): Alters an image’s colors.

### Protocols

- [CIColorAbsoluteDifference](cicolorabsolutedifference.md)
- [CIColorClamp](cicolorclamp.md): The properties you use to configure a color clamp filter.
- [CIColorControls](cicolorcontrols.md): The properties you use to configure a color controls filter.
- [CIColorMatrix](cicolormatrix.md): The properties you use to configure a color matrix filter.
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
