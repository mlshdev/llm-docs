> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/citonecurve](https://developer.apple.com/documentation/coreimage/citonecurve)

# CIToneCurve (Swift)

**Framework:** Core Image  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The properties you use to configure a tone curve filter.

## Declaration

```swift
protocol CIToneCurve : CIFilterProtocol
```

## Topics

### Instance Properties

- [inputImage](citonecurve/inputimage.md): The image to use as an input image.
- [point0](citonecurve/point0.md): A vector containing the position of the first point of the tone curve.
- [point1](citonecurve/point1.md): A vector containing the position of the second point of the tone curve.
- [point2](citonecurve/point2.md): A vector containing the position of the third point of the tone curve.
- [point3](citonecurve/point3.md): A vector containing the position of the fourth point of the tone curve.
- [point4](citonecurve/point4.md): A vector containing the position of the fifth point of the tone curve.
- [extrapolate](citonecurve/extrapolate.md): If true, then the color effect will be extrapolated if the input image contains RGB component values outside the range 0.0 to 1.0.

## Relationships

### Inherits From

- [CIFilterProtocol](cifilterprotocol.md)

## See Also

### Related Documentation

- [toneCurve()](cifilter-swift.class/tonecurve%28%29.md): Alters an image’s tone curve according to a series of data points.

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

# CIToneCurve (Objective-C)

**Framework:** Core Image  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The properties you use to configure a tone curve filter.

## Declaration

```objectivec
@protocol CIToneCurve <CIFilter>
```

## Topics

### Instance Properties

- [inputImage](citonecurve/inputimage.md): The image to use as an input image.
- [point0](citonecurve/point0.md): A vector containing the position of the first point of the tone curve.
- [point1](citonecurve/point1.md): A vector containing the position of the second point of the tone curve.
- [point2](citonecurve/point2.md): A vector containing the position of the third point of the tone curve.
- [point3](citonecurve/point3.md): A vector containing the position of the fourth point of the tone curve.
- [point4](citonecurve/point4.md): A vector containing the position of the fifth point of the tone curve.
- [extrapolate](citonecurve/extrapolate.md): If true, then the color effect will be extrapolated if the input image contains RGB component values outside the range 0.0 to 1.0.

## Relationships

### Inherits From

- [CIFilter](cifilterprotocol.md)

## See Also

### Related Documentation

- [toneCurveFilter](cifilter-swift.class/tonecurve%28%29.md): Alters an image’s tone curve according to a series of data points.

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
