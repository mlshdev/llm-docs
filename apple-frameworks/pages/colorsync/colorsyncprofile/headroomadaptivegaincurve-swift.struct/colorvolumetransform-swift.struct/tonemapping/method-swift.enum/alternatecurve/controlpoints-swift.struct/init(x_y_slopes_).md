> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/colorsync/colorsyncprofile/headroomadaptivegaincurve-swift.struct/colorvolumetransform-swift.struct/tonemapping/method-swift.enum/alternatecurve/controlpoints-swift.struct/init(x:y:slopes:)](https://developer.apple.com/documentation/colorsync/colorsyncprofile/headroomadaptivegaincurve-swift.struct/colorvolumetransform-swift.struct/tonemapping/method-swift.enum/alternatecurve/controlpoints-swift.struct/init(x:y:slopes:))

# init(x:y:slopes:)

**Framework:** ColorSync  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Creates a set of spline control points.

## Declaration

```swift
init(x: [Float], y: [Float], slopes: ColorSyncProfile.HeadroomAdaptiveGainCurve.ColorVolumeTransform.ToneMapping.Method.AlternateCurve.ControlPoints.Slopes = .interpolate) throws
```

## Parameters

- `x`: Input levels normalized by reference white: 1.0 = reference white, and at most 32 points.
- `y`: Gain offsets in stops, one per `x` value. Must have the same count as `x` and non-negative.
- `slopes`: How the framework determines the slope at each control point. Defaults to [ColorSyncProfile.HeadroomAdaptiveGainCurve.ColorVolumeTransform.ToneMapping.Method.AlternateCurve.ControlPoints.Slopes.interpolate](slopes-swift.enum/interpolate.md).

<a id="discussion"></a>

## Discussion

> **Throws**

> [ColorSyncProfile.HeadroomAdaptiveGainCurve.Error.mismatchedControlPointArrays(x:y:)](../../../../../error/mismatchedcontrolpointarrays%28x_y_%29.md) if `x` and `y` differ in count, [ColorSyncProfile.HeadroomAdaptiveGainCurve.Error.tooManyControlPoints(count:limit:)](../../../../../error/toomanycontrolpoints%28count_limit_%29.md) if there are more than 32 points, or [ColorSyncProfile.HeadroomAdaptiveGainCurve.Error.mismatchedTangentCount(got:expected:)](../../../../../error/mismatchedtangentcount%28got_expected_%29.md) if explicit `slopes` don’t match the point count.
