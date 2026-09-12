> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/colorsync/kcolorsyncalternatecurvecount](https://developer.apple.com/documentation/colorsync/kcolorsyncalternatecurvecount)

# kColorSyncAlternateCurveCount (Swift)

**Framework:** ColorSync  
**Kind:** Global Variable  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Number of alternate (tone-mapped) curves encoded in the metadata (uint8_t in the range \[0, 4\]). Each alternate targets a different display headroom.

## Declaration

```swift
var kColorSyncAlternateCurveCount: Unmanaged<CFString>
```

## See Also

### Structuring the info dictionary

- [kColorSyncAlternateGainCurveInfo](kcolorsyncalternategaincurveinfo.md): CFArrayRef of per-alternate dictionaries.
- [kColorSyncBaselineHeadroomStops](kcolorsyncbaselineheadroomstops.md): Headroom of the source (baseline) curve in stops (log2) above reference white (float in the range \[0.0, 6.0\]).
- [kColorSyncCustomHDRReferenceWhite](kcolorsynccustomhdrreferencewhite.md): Custom reference white luminance in nits (float), overriding the standard 203-nit reference white.
- [kColorSyncHeadroomAdaptiveGainCurveApplicationVersion](kcolorsyncheadroomadaptivegaincurveapplicationversion.md): Application version (uint8_t). 3-bit field from ST 2094-50 Table C.1. Must be `0`; the framework rejects any other value.
- [kColorSyncHeadroomAdaptiveGainCurveColorVolumeTransform](kcolorsyncheadroomadaptivegaincurvecolorvolumetransform.md): Top-level container (CFDictionaryRef) for the color volume transform.
- [kColorSyncHeadroomAdaptiveGainCurveInfo](kcolorsyncheadroomadaptivegaincurveinfo.md): Container (CFDictionaryRef) for the adaptive gain curve data.
- [kColorSyncHeadroomAdaptiveToneMappingInfo](kcolorsyncheadroomadaptivetonemappinginfo.md): Container (CFDictionaryRef) for Headroom-Adaptive tone mapping parameters.

# kColorSyncAlternateCurveCount (Objective-C)

**Framework:** ColorSync  
**Kind:** Global Variable  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Number of alternate (tone-mapped) curves encoded in the metadata (uint8_t in the range \[0, 4\]). Each alternate targets a different display headroom.

## Declaration

```objectivec
extern CFStringRef kColorSyncAlternateCurveCount;
```

## See Also

### Structuring the info dictionary

- [kColorSyncAlternateGainCurveInfo](kcolorsyncalternategaincurveinfo.md): CFArrayRef of per-alternate dictionaries.
- [kColorSyncBaselineHeadroomStops](kcolorsyncbaselineheadroomstops.md): Headroom of the source (baseline) curve in stops (log2) above reference white (float in the range \[0.0, 6.0\]).
- [kColorSyncCustomHDRReferenceWhite](kcolorsynccustomhdrreferencewhite.md): Custom reference white luminance in nits (float), overriding the standard 203-nit reference white.
- [kColorSyncHeadroomAdaptiveGainCurveApplicationVersion](kcolorsyncheadroomadaptivegaincurveapplicationversion.md): Application version (uint8_t). 3-bit field from ST 2094-50 Table C.1. Must be `0`; the framework rejects any other value.
- [kColorSyncHeadroomAdaptiveGainCurveColorVolumeTransform](kcolorsyncheadroomadaptivegaincurvecolorvolumetransform.md): Top-level container (CFDictionaryRef) for the color volume transform.
- [kColorSyncHeadroomAdaptiveGainCurveInfo](kcolorsyncheadroomadaptivegaincurveinfo.md): Container (CFDictionaryRef) for the adaptive gain curve data.
- [kColorSyncHeadroomAdaptiveToneMappingInfo](kcolorsyncheadroomadaptivetonemappinginfo.md): Container (CFDictionaryRef) for Headroom-Adaptive tone mapping parameters.
