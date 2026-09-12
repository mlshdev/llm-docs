> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/colorsync/colorsyncprofile/headroomadaptivegaincurve-swift.struct/colorvolumetransform-swift.struct/tonemapping/method-swift.enum/adaptivegaincurve/init(chromaticities:alternatecurves:)](https://developer.apple.com/documentation/colorsync/colorsyncprofile/headroomadaptivegaincurve-swift.struct/colorvolumetransform-swift.struct/tonemapping/method-swift.enum/adaptivegaincurve/init(chromaticities:alternatecurves:))

# init(chromaticities:alternateCurves:)

**Framework:** ColorSync  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Creates an adaptive gain curve.

## Declaration

```swift
init(chromaticities: ColorSyncProfile.HeadroomAdaptiveGainCurve.ColorVolumeTransform.ToneMapping.Method.Chromaticities = .bt709, alternateCurves: [ColorSyncProfile.HeadroomAdaptiveGainCurve.ColorVolumeTransform.ToneMapping.Method.AlternateCurve]) throws
```

## Parameters

- `chromaticities`: The chromaticities used to derive the driving signal. Defaults to [ColorSyncProfile.HeadroomAdaptiveGainCurve.ColorVolumeTransform.ToneMapping.Method.Chromaticities.bt709](../chromaticities/bt709.md).
- `alternateCurves`: The alternate curves. At most four.

<a id="discussion"></a>

## Discussion

> **Throws**

> [ColorSyncProfile.HeadroomAdaptiveGainCurve.Error.tooManyAlternateCurves(count:limit:)](../../../../error/toomanyalternatecurves%28count_limit_%29.md) if more than four curves are supplied, or [ColorSyncProfile.HeadroomAdaptiveGainCurve.Error.invalidCustomChromaticities](../../../../error/invalidcustomchromaticities.md) if custom chromaticities fall outside the valid range.
