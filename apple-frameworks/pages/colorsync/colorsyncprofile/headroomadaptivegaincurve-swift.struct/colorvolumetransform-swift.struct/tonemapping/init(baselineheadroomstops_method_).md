> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/colorsync/colorsyncprofile/headroomadaptivegaincurve-swift.struct/colorvolumetransform-swift.struct/tonemapping/init(baselineheadroomstops:method:)](https://developer.apple.com/documentation/colorsync/colorsyncprofile/headroomadaptivegaincurve-swift.struct/colorvolumetransform-swift.struct/tonemapping/init(baselineheadroomstops:method:))

# init(baselineHeadroomStops:method:)

**Framework:** ColorSync  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Creates a headroom-adaptive tone mapping.

## Declaration

```swift
init(baselineHeadroomStops: Float, method: ColorSyncProfile.HeadroomAdaptiveGainCurve.ColorVolumeTransform.ToneMapping.Method = .referenceWhiteBased) throws
```

## Parameters

- `baselineHeadroomStops`: The headroom of the source content in stops above reference white. Must be greater than or equal to `0`.
- `method`: The tone-mapping method to apply. Defaults to [ColorSyncProfile.HeadroomAdaptiveGainCurve.ColorVolumeTransform.ToneMapping.Method.referenceWhiteBased](method-swift.enum/referencewhitebased.md).

<a id="discussion"></a>

## Discussion

> **Throws**

> [ColorSyncProfile.HeadroomAdaptiveGainCurve.Error.negativeBaselineHeadroom(\_:)](../../error/negativebaselineheadroom%28__%29.md) if `baselineHeadroomStops` is negative.
