> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/colorsync/colorsyncprofile/headroomadaptivegaincurve-swift.struct/colorvolumetransform-swift.struct/init(customhdrreferencewhite:adaptivetonemapping:)](https://developer.apple.com/documentation/colorsync/colorsyncprofile/headroomadaptivegaincurve-swift.struct/colorvolumetransform-swift.struct/init(customhdrreferencewhite:adaptivetonemapping:))

# init(customHDRReferenceWhite:adaptiveToneMapping:)

**Framework:** ColorSync  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Creates a color volume transform.

## Declaration

```swift
init(customHDRReferenceWhite: Float? = nil, adaptiveToneMapping: ColorSyncProfile.HeadroomAdaptiveGainCurve.ColorVolumeTransform.ToneMapping? = nil) throws
```

## Parameters

- `customHDRReferenceWhite`: A custom HDR reference white luminance in nits, or `nil` to use the standard 203-nit reference white. Must be greater than `0` when specified.
- `adaptiveToneMapping`: The headroom-adaptive tone mapping to apply, or `nil` for none.

<a id="discussion"></a>

## Discussion

> **Throws**

> [ColorSyncProfile.HeadroomAdaptiveGainCurve.Error.invalidHDRReferenceWhite(\_:)](../error/invalidhdrreferencewhite%28__%29.md) if `customHDRReferenceWhite` is less than or equal to `0`.
