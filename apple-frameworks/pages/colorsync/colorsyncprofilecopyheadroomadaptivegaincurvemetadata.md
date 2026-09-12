> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/colorsync/colorsyncprofilecopyheadroomadaptivegaincurvemetadata](https://developer.apple.com/documentation/colorsync/colorsyncprofilecopyheadroomadaptivegaincurvemetadata)

# ColorSyncProfileCopyHeadroomAdaptiveGainCurveMetadata

**Interface language:** Objective-C

**Framework:** ColorSync  
**Kind:** Function  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Returns a copy of the raw Headroom Adaptive Gain Curve data embedded in a profile.

## Declaration

```objectivec
extern CFDataRefColorSyncProfileCopyHeadroomAdaptiveGainCurveMetadata(ColorSyncProfileRef profile);
```

## Parameters

- `profile`: The profile to read the HAGC tag from.

<a id="return-value"></a>

## Return Value

A copy of the raw HAGC data that the caller must release with `CFRelease`, or `NULL` if the profile contains no HAGC tag.

## Mentioned In

- [Authoring Headroom Adaptive Gain Curve metadata](authoring-headroom-adaptive-gain-curve-metadata.md)

## See Also

### Reading a curve (C API)

- [ColorSyncProfileCopyHeadroomAdaptiveGainCurveInfoDictionary](colorsyncprofilecopyheadroomadaptivegaincurveinfodictionary.md): Returns a dictionary describing the Headroom Adaptive Gain Curve decoded from a profile.
