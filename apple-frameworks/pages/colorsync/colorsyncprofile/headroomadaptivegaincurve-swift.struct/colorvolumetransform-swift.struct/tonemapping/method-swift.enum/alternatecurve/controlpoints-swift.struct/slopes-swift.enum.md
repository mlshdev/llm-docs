> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/colorsync/colorsyncprofile/headroomadaptivegaincurve-swift.struct/colorvolumetransform-swift.struct/tonemapping/method-swift.enum/alternatecurve/controlpoints-swift.struct/slopes-swift.enum

# ColorSyncProfile.HeadroomAdaptiveGainCurve.ColorVolumeTransform.ToneMapping.Method.AlternateCurve.ControlPoints.Slopes

**Framework:** ColorSync  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

How the framework determines slopes at spline control points.

## Declaration

```swift
enum Slopes
```

## Topics

### Enumeration Cases

- [ColorSyncProfile.HeadroomAdaptiveGainCurve.ColorVolumeTransform.ToneMapping.Method.AlternateCurve.ControlPoints.Slopes.interpolate](slopes-swift.enum/interpolate.md): The framework computes slopes by Piecewise Cubic Hermite Interpolating Polynomial from the X/Y coordinates.
- [ColorSyncProfile.HeadroomAdaptiveGainCurve.ColorVolumeTransform.ToneMapping.Method.AlternateCurve.ControlPoints.Slopes.tangent(\_:)](slopes-swift.enum/tangent%28__%29.md): Explicit tangent slopes expressed as tan(slope_angle), one per control point.
