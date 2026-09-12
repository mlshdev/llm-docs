> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/colorsync/colorsyncprofilecreatecopywithheadroomadaptivegaincurveinfodictionary](https://developer.apple.com/documentation/colorsync/colorsyncprofilecreatecopywithheadroomadaptivegaincurveinfodictionary)

# ColorSyncProfileCreateCopyWithHeadroomAdaptiveGainCurveInfoDictionary

**Interface language:** Objective-C

**Framework:** ColorSync  
**Kind:** Function  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Returns a copy of a profile with an HAGC tag synthesized from an info dictionary.

## Declaration

```objectivec
extern ColorSyncProfileRefColorSyncProfileCreateCopyWithHeadroomAdaptiveGainCurveInfoDictionary(ColorSyncProfileRef profile, CFDictionaryRef info);
```

## Parameters

- `profile`: A profile whose CICP tag indicates a PQ, HLG, or linear transfer function. (Use linear for extended-range data.) Passing an SDR profile returns `NULL`.
- `info`: A dictionary describing the gain curve. See the key constants declared below for its structure.

<a id="return-value"></a>

## Return Value

A new profile that the caller must release with `CFRelease`, or `NULL` on failure.

## See Also

### Attaching a curve (C API)

- [ColorSyncProfileCreateCopyWithHeadroomAdaptiveGainCurveMetadata](colorsyncprofilecreatecopywithheadroomadaptivegaincurvemetadata.md): Returns a copy of a profile with the supplied Headroom Adaptive Gain Curve data embedded as an HAGC tag.
