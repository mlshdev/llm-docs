> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/colorsync/kcolorsyncalternategaincurveinfo](https://developer.apple.com/documentation/colorsync/kcolorsyncalternategaincurveinfo)

# kColorSyncAlternateGainCurveInfo (Swift)

**Framework:** ColorSync  
**Kind:** Global Variable  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

CFArrayRef of per-alternate dictionaries.

## Declaration

```swift
var kColorSyncAlternateGainCurveInfo: Unmanaged<CFString>
```

<a id="discussion"></a>

## Discussion

Count equals [kColorSyncAlternateCurveCount](kcolorsyncalternatecurvecount.md). Only present when the alternate curve count is greater than 0. See the alternate curve keys below.

## See Also

### Structuring the info dictionary

- [kColorSyncAlternateCurveCount](kcolorsyncalternatecurvecount.md): Number of alternate (tone-mapped) curves encoded in the metadata (uint8_t in the range \[0, 4\]). Each alternate targets a different display headroom.
- [kColorSyncBaselineHeadroomStops](kcolorsyncbaselineheadroomstops.md): Headroom of the source (baseline) curve in stops (log2) above reference white (float in the range \[0.0, 6.0\]).
- [kColorSyncCustomHDRReferenceWhite](kcolorsynccustomhdrreferencewhite.md): Custom reference white luminance in nits (float), overriding the standard 203-nit reference white.
- [kColorSyncHeadroomAdaptiveGainCurveApplicationVersion](kcolorsyncheadroomadaptivegaincurveapplicationversion.md): Application version (uint8_t). 3-bit field from ST 2094-50 Table C.1. Must be `0`; the framework rejects any other value.
- [kColorSyncHeadroomAdaptiveGainCurveColorVolumeTransform](kcolorsyncheadroomadaptivegaincurvecolorvolumetransform.md): Top-level container (CFDictionaryRef) for the color volume transform.
- [kColorSyncHeadroomAdaptiveGainCurveInfo](kcolorsyncheadroomadaptivegaincurveinfo.md): Container (CFDictionaryRef) for the adaptive gain curve data.
- [kColorSyncHeadroomAdaptiveToneMappingInfo](kcolorsyncheadroomadaptivetonemappinginfo.md): Container (CFDictionaryRef) for Headroom-Adaptive tone mapping parameters.

# kColorSyncAlternateGainCurveInfo (Objective-C)

**Framework:** ColorSync  
**Kind:** Global Variable  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

CFArrayRef of per-alternate dictionaries.

## Declaration

```objectivec
extern CFStringRef kColorSyncAlternateGainCurveInfo;
```

<a id="discussion"></a>

## Discussion

Count equals [kColorSyncAlternateCurveCount](kcolorsyncalternatecurvecount.md). Only present when the alternate curve count is greater than 0. See the alternate curve keys below.

## See Also

### Structuring the info dictionary

- [kColorSyncAlternateCurveCount](kcolorsyncalternatecurvecount.md): Number of alternate (tone-mapped) curves encoded in the metadata (uint8_t in the range \[0, 4\]). Each alternate targets a different display headroom.
- [kColorSyncBaselineHeadroomStops](kcolorsyncbaselineheadroomstops.md): Headroom of the source (baseline) curve in stops (log2) above reference white (float in the range \[0.0, 6.0\]).
- [kColorSyncCustomHDRReferenceWhite](kcolorsynccustomhdrreferencewhite.md): Custom reference white luminance in nits (float), overriding the standard 203-nit reference white.
- [kColorSyncHeadroomAdaptiveGainCurveApplicationVersion](kcolorsyncheadroomadaptivegaincurveapplicationversion.md): Application version (uint8_t). 3-bit field from ST 2094-50 Table C.1. Must be `0`; the framework rejects any other value.
- [kColorSyncHeadroomAdaptiveGainCurveColorVolumeTransform](kcolorsyncheadroomadaptivegaincurvecolorvolumetransform.md): Top-level container (CFDictionaryRef) for the color volume transform.
- [kColorSyncHeadroomAdaptiveGainCurveInfo](kcolorsyncheadroomadaptivegaincurveinfo.md): Container (CFDictionaryRef) for the adaptive gain curve data.
- [kColorSyncHeadroomAdaptiveToneMappingInfo](kcolorsyncheadroomadaptivetonemappinginfo.md): Container (CFDictionaryRef) for Headroom-Adaptive tone mapping parameters.
