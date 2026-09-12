> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/colorsync/colorsyncprofilecreatecopywithheadroomadaptivegaincurvemetadata](https://developer.apple.com/documentation/colorsync/colorsyncprofilecreatecopywithheadroomadaptivegaincurvemetadata)

# ColorSyncProfileCreateCopyWithHeadroomAdaptiveGainCurveMetadata

**Interface language:** Objective-C

**Framework:** ColorSync  
**Kind:** Function  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Returns a copy of a profile with the supplied Headroom Adaptive Gain Curve data embedded as an HAGC tag.

## Declaration

```objectivec
extern ColorSyncProfileRefColorSyncProfileCreateCopyWithHeadroomAdaptiveGainCurveMetadata(ColorSyncProfileRef profile, CFDataRef data, CFDictionaryRef options);
```

## Parameters

- `profile`: A profile whose CICP tag indicates a PQ, HLG, or linear transfer function. (Use linear for extended-range data.) Passing an SDR profile returns `NULL`.
- `data`: The raw Headroom Adaptive Gain Curve data to embed. Must be non-`NULL`.
- `options`: Reserved for future use. Pass `NULL`.

<a id="return-value"></a>

## Return Value

A new profile that the caller must release with `CFRelease`, or `NULL` on failure.

## Mentioned In

- [Authoring Headroom Adaptive Gain Curve metadata](authoring-headroom-adaptive-gain-curve-metadata.md)

## See Also

### Attaching a curve (C API)

- [ColorSyncProfileCreateCopyWithHeadroomAdaptiveGainCurveInfoDictionary](colorsyncprofilecreatecopywithheadroomadaptivegaincurveinfodictionary.md): Returns a copy of a profile with an HAGC tag synthesized from an info dictionary.
