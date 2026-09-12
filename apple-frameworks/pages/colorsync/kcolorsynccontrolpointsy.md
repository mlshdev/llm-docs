> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/colorsync/kcolorsynccontrolpointsy](https://developer.apple.com/documentation/colorsync/kcolorsynccontrolpointsy)

# kColorSyncControlPointsY (Swift)

**Framework:** ColorSync  
**Kind:** Global Variable  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

CFArrayRef of floats — the Y-axis gain offsets at the control points.

## Declaration

```swift
var kColorSyncControlPointsY: Unmanaged<CFString>
```

<a id="discussion"></a>

## Discussion

Values are in stops (float in the range \[0.0, 6.0\]) and must be non-negative; the framework infers the gain direction (expand vs. compress) from the relationship between this alternate’s headroom and the baseline headroom.

## See Also

### Describing gain curves

- [kColorSyncAlternateCurveHeadroomStops](kcolorsyncalternatecurveheadroomstops.md): Target headroom of this alternate curve in stops (log2) above reference white (float in the range \[0.0, 6.0\]). The renderer selects the closest alternate to the actual display headroom.
- [kColorSyncCommonComponentMixing](kcolorsynccommoncomponentmixing.md): CFBooleanRef indicating whether alternate curves share one component-mixing configuration.
- [kColorSyncCommonCurveParameters](kcolorsynccommoncurveparameters.md): CFBooleanRef indicating whether alternate curves share common gain-curve parameters.
- [kColorSyncComponentMix](kcolorsynccomponentmix.md): Component mixing type (uint8_t) matching `component_mixing_value` in ST 2094-50.
- [kColorSyncControlPointSlopes](kcolorsynccontrolpointslopes.md): CFArrayRef of floats — explicit tangent slopes at each control point, expressed as tan(slope_angle). Only present when [kColorSyncInterpolateSlopes](kcolorsyncinterpolateslopes.md) is false.
- [kColorSyncControlPointsX](kcolorsynccontrolpointsx.md): CFArrayRef of floats — the X-axis coordinates of the gain-curve control points.
- [kColorSyncGainCurveChromaticities](kcolorsyncgaincurvechromaticities.md): Chromaticity primaries used to compute the driving signal for the gain curve.
- [kColorSyncInterpolateSlopes](kcolorsyncinterpolateslopes.md): CFBooleanRef controlling how the framework determines control-point slopes.
- [kColorSyncMaxControlPointIndex](kcolorsyncmaxcontrolpointindex.md): Index of the last control point (uint8_t, 0–31), i.e. the number of control points minus 1. Shared across all alternates from index 0 when [kColorSyncCommonCurveParameters](kcolorsynccommoncurveparameters.md) is true.

# kColorSyncControlPointsY (Objective-C)

**Framework:** ColorSync  
**Kind:** Global Variable  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

CFArrayRef of floats — the Y-axis gain offsets at the control points.

## Declaration

```objectivec
extern CFStringRef kColorSyncControlPointsY;
```

<a id="discussion"></a>

## Discussion

Values are in stops (float in the range \[0.0, 6.0\]) and must be non-negative; the framework infers the gain direction (expand vs. compress) from the relationship between this alternate’s headroom and the baseline headroom.

## See Also

### Describing gain curves

- [kColorSyncAlternateCurveHeadroomStops](kcolorsyncalternatecurveheadroomstops.md): Target headroom of this alternate curve in stops (log2) above reference white (float in the range \[0.0, 6.0\]). The renderer selects the closest alternate to the actual display headroom.
- [kColorSyncCommonComponentMixing](kcolorsynccommoncomponentmixing.md): CFBooleanRef indicating whether alternate curves share one component-mixing configuration.
- [kColorSyncCommonCurveParameters](kcolorsynccommoncurveparameters.md): CFBooleanRef indicating whether alternate curves share common gain-curve parameters.
- [kColorSyncComponentMix](kcolorsynccomponentmix.md): Component mixing type (uint8_t) matching `component_mixing_value` in ST 2094-50.
- [kColorSyncControlPointSlopes](kcolorsynccontrolpointslopes.md): CFArrayRef of floats — explicit tangent slopes at each control point, expressed as tan(slope_angle). Only present when [kColorSyncInterpolateSlopes](kcolorsyncinterpolateslopes.md) is false.
- [kColorSyncControlPointsX](kcolorsynccontrolpointsx.md): CFArrayRef of floats — the X-axis coordinates of the gain-curve control points.
- [kColorSyncGainCurveChromaticities](kcolorsyncgaincurvechromaticities.md): Chromaticity primaries used to compute the driving signal for the gain curve.
- [kColorSyncInterpolateSlopes](kcolorsyncinterpolateslopes.md): CFBooleanRef controlling how the framework determines control-point slopes.
- [kColorSyncMaxControlPointIndex](kcolorsyncmaxcontrolpointindex.md): Index of the last control point (uint8_t, 0–31), i.e. the number of control points minus 1. Shared across all alternates from index 0 when [kColorSyncCommonCurveParameters](kcolorsynccommoncurveparameters.md) is true.
