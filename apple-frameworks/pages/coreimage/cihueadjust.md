> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cihueadjust](https://developer.apple.com/documentation/coreimage/cihueadjust)

# CIHueAdjust (Swift)

**Framework:** Core Image  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The properties you use to configure a hue adjust filter.

## Declaration

```swift
protocol CIHueAdjust : CIFilterProtocol
```

## Topics

### Instance Properties

- [angle](cihueadjust/angle.md): An angle, in radians, to use to correct the hue of an image.
- [inputImage](cihueadjust/inputimage.md): The image to use as an input image.

## Relationships

### Inherits From

- [CIFilterProtocol](cifilterprotocol.md)

## See Also

### Related Documentation

- [hueAdjust()](cifilter-swift.class/hueadjust%28%29.md): Modifies an image’s hue.

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
- [CILinearToSRGBToneCurve](cilineartosrgbtonecurve.md): The properties you use to configure a linear-to-sRGB filter.
- [CISRGBToneCurveToLinear](cisrgbtonecurvetolinear.md): The properties you use to configure an sRGB-to-linear filter.
- [CISystemToneMap](cisystemtonemap.md): The protocol for the System Tone Map filter.
- [CITemperatureAndTint](citemperatureandtint.md): The properties you use to configure a temperature and tint filter.

# CIHueAdjust (Objective-C)

**Framework:** Core Image  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The properties you use to configure a hue adjust filter.

## Declaration

```objectivec
@protocol CIHueAdjust <CIFilter>
```

## Topics

### Instance Properties

- [angle](cihueadjust/angle.md): An angle, in radians, to use to correct the hue of an image.
- [inputImage](cihueadjust/inputimage.md): The image to use as an input image.

## Relationships

### Inherits From

- [CIFilter](cifilterprotocol.md)

## See Also

### Related Documentation

- [hueAdjustFilter](cifilter-swift.class/hueadjust%28%29.md): Modifies an image’s hue.

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
- [CILinearToSRGBToneCurve](cilineartosrgbtonecurve.md): The properties you use to configure a linear-to-sRGB filter.
- [CISRGBToneCurveToLinear](cisrgbtonecurvetolinear.md): The properties you use to configure an sRGB-to-linear filter.
- [CISystemToneMap](cisystemtonemap.md): The protocol for the System Tone Map filter.
- [CITemperatureAndTint](citemperatureandtint.md): The properties you use to configure a temperature and tint filter.
