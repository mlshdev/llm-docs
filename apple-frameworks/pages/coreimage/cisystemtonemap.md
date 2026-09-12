> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cisystemtonemap](https://developer.apple.com/documentation/coreimage/cisystemtonemap)

# CISystemToneMap (Swift)

**Framework:** Core Image  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The protocol for the System Tone Map filter.

## Declaration

```swift
protocol CISystemToneMap : CIFilterProtocol
```

<a id="overview"></a>

## Overview

Apply a global tone curve to an image that reduces colors of the input image to a desired dynamic range consistent with other frameworks.

## Topics

### Instance Properties

- [displayHeadroom](cisystemtonemap/displayheadroom.md): Specifies the current headroom of the intended display.
- [inputImage](cisystemtonemap/inputimage.md): Specifies input image with content headroom and average light level properties.
- [preferredDynamicRange](cisystemtonemap/preferreddynamicrange.md): Specifies the preferred dynamic range behavior of the tone mapping. The value should be kCIDynamicRangeStandard, kCIDynamicRangeConstrainedHigh, kCIDynamicRangeHigh or nil. If nil then it will behave as kCIDynamicRangeHigh.

## Relationships

### Inherits From

- [CIFilterProtocol](cifilterprotocol.md)

## See Also

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
- [CITemperatureAndTint](citemperatureandtint.md): The properties you use to configure a temperature and tint filter.

# CISystemToneMap (Objective-C)

**Framework:** Core Image  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The protocol for the System Tone Map filter.

## Declaration

```objectivec
@protocol CISystemToneMap <CIFilter>
```

<a id="overview"></a>

## Overview

Apply a global tone curve to an image that reduces colors of the input image to a desired dynamic range consistent with other frameworks.

## Topics

### Instance Properties

- [displayHeadroom](cisystemtonemap/displayheadroom.md): Specifies the current headroom of the intended display.
- [inputImage](cisystemtonemap/inputimage.md): Specifies input image with content headroom and average light level properties.
- [preferredDynamicRange](cisystemtonemap/preferreddynamicrange.md): Specifies the preferred dynamic range behavior of the tone mapping. The value should be kCIDynamicRangeStandard, kCIDynamicRangeConstrainedHigh, kCIDynamicRangeHigh or nil. If nil then it will behave as kCIDynamicRangeHigh.

## Relationships

### Inherits From

- [CIFilter](cifilterprotocol.md)

## See Also

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
- [CITemperatureAndTint](citemperatureandtint.md): The properties you use to configure a temperature and tint filter.
