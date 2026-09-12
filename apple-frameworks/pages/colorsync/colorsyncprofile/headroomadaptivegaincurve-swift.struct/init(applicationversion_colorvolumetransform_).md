> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/colorsync/colorsyncprofile/headroomadaptivegaincurve-swift.struct/init(applicationversion:colorvolumetransform:)](https://developer.apple.com/documentation/colorsync/colorsyncprofile/headroomadaptivegaincurve-swift.struct/init(applicationversion:colorvolumetransform:))

# init(applicationVersion:colorVolumeTransform:)

**Framework:** ColorSync  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Creates Headroom Adaptive Gain Curve metadata.

## Declaration

```swift
init(applicationVersion: UInt8 = 0, colorVolumeTransform: ColorSyncProfile.HeadroomAdaptiveGainCurve.ColorVolumeTransform? = nil) throws
```

## Parameters

- `applicationVersion`: The ST 2094-50 application version. Must be `0`.
- `colorVolumeTransform`: The color volume transform to apply, or `nil` for none.

<a id="discussion"></a>

## Discussion

> **Throws**

> [ColorSyncProfile.HeadroomAdaptiveGainCurve.Error.unsupportedApplicationVersion(\_:)](error/unsupportedapplicationversion%28__%29.md) if `applicationVersion` is not `0`.
