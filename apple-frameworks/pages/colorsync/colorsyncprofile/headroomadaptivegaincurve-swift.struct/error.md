> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/colorsync/colorsyncprofile/headroomadaptivegaincurve-swift.struct/error](https://developer.apple.com/documentation/colorsync/colorsyncprofile/headroomadaptivegaincurve-swift.struct/error)

# ColorSyncProfile.HeadroomAdaptiveGainCurve.Error

**Framework:** ColorSync  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

An error thrown while constructing Headroom Adaptive Gain Curve metadata.

## Declaration

```swift
enum Error
```

## Topics

### Enumeration Cases

- [ColorSyncProfile.HeadroomAdaptiveGainCurve.Error.invalidCustomChromaticities](error/invalidcustomchromaticities.md): The custom chromaticities fall outside the valid range.
- [ColorSyncProfile.HeadroomAdaptiveGainCurve.Error.invalidHDRReferenceWhite(\_:)](error/invalidhdrreferencewhite%28__%29.md): The custom HDR reference white luminance isn’t greater than `0`.
- [ColorSyncProfile.HeadroomAdaptiveGainCurve.Error.mismatchedControlPointArrays(x:y:)](error/mismatchedcontrolpointarrays%28x_y_%29.md): The control points’ `x` and `y` arrays have different counts.
- [ColorSyncProfile.HeadroomAdaptiveGainCurve.Error.mismatchedTangentCount(got:expected:)](error/mismatchedtangentcount%28got_expected_%29.md): The number of explicit tangent slopes doesn’t match the control point count.
- [ColorSyncProfile.HeadroomAdaptiveGainCurve.Error.negativeBaselineHeadroom(\_:)](error/negativebaselineheadroom%28__%29.md): The baseline headroom is negative.
- [ColorSyncProfile.HeadroomAdaptiveGainCurve.Error.negativeHeadroomStops(\_:)](error/negativeheadroomstops%28__%29.md): An alternate curve’s headroom is negative.
- [ColorSyncProfile.HeadroomAdaptiveGainCurve.Error.tooManyAlternateCurves(count:limit:)](error/toomanyalternatecurves%28count_limit_%29.md): The number of alternate curves exceeds the limit.
- [ColorSyncProfile.HeadroomAdaptiveGainCurve.Error.tooManyControlPoints(count:limit:)](error/toomanycontrolpoints%28count_limit_%29.md): The number of control points exceeds the limit.
- [ColorSyncProfile.HeadroomAdaptiveGainCurve.Error.unsupportedApplicationVersion(\_:)](error/unsupportedapplicationversion%28__%29.md): The application version isn’t supported. Only `0` is valid.
- [ColorSyncProfile.HeadroomAdaptiveGainCurve.Error.zeroFreeStyleWeights](error/zerofreestyleweights.md): A free-style component mix has all-zero weights.

## Relationships

### Conforms To

- [Error](https://developer.apple.com/documentation/swift/error)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Describing a curve in Swift

- [ColorSyncProfile.HeadroomAdaptiveGainCurve](../headroomadaptivegaincurve-swift.struct.md): Headroom Adaptive Gain Curve metadata that describes how to tone map a profile’s HDR content to the dynamic range available on the display.
- [ColorSyncProfile.HeadroomAdaptiveGainCurve.ColorVolumeTransform](colorvolumetransform-swift.struct.md): A color volume transform that maps HDR content into a display’s dynamic range.
- [ColorSyncProfile.HeadroomAdaptiveGainCurve.ColorVolumeTransform.ToneMapping](colorvolumetransform-swift.struct/tonemapping.md): Headroom-adaptive tone mapping that adjusts HDR content to the display’s available headroom.
- [ColorSyncProfile.HeadroomAdaptiveGainCurve.ColorVolumeTransform.ToneMapping.Method](colorvolumetransform-swift.struct/tonemapping/method-swift.enum.md): The tone-mapping method: reference-white-based, or a headroom-adaptive gain curve.
