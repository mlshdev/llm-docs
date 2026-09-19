> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/colorsync/colorsyncprofilecopyheadroomadaptivegaincurveinfodictionary

# ColorSyncProfileCopyHeadroomAdaptiveGainCurveInfoDictionary

**Interface language:** Objective-C

**Framework:** ColorSync  
**Kind:** Function  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Returns a dictionary describing the Headroom Adaptive Gain Curve decoded from a profile.

## Declaration

```objectivec
extern CFDictionaryRefColorSyncProfileCopyHeadroomAdaptiveGainCurveInfoDictionary(ColorSyncProfileRef profile);
```

## Parameters

- `profile`: The profile to decode the HAGC tag from.

<a id="return-value"></a>

## Return Value

A dictionary describing the gain curve, which the caller must release with `CFRelease`, or `NULL` if the profile carries no HAGC tag. See the key constants declared below for the dictionary’s contents.

## See Also

### Reading a curve (C API)

- [ColorSyncProfileCopyHeadroomAdaptiveGainCurveMetadata](colorsyncprofilecopyheadroomadaptivegaincurvemetadata.md): Returns a copy of the raw Headroom Adaptive Gain Curve data embedded in a profile.
