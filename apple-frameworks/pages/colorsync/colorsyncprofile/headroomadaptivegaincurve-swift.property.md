> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/colorsync/colorsyncprofile/headroomadaptivegaincurve-swift.property](https://developer.apple.com/documentation/colorsync/colorsyncprofile/headroomadaptivegaincurve-swift.property)

# headroomAdaptiveGainCurve

**Framework:** ColorSync  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

The Headroom Adaptive Gain Curve embedded in this profile, or `nil` if it carries no HAGC tag.

## Declaration

```swift
var headroomAdaptiveGainCurve: ColorSyncProfile.HeadroomAdaptiveGainCurve? { get }
```

<a id="discussion"></a>

## Discussion

This decodes the HAGC tag into its structured form. For the unparsed bytes, use [headroomAdaptiveGainCurveMetadata](headroomadaptivegaincurvemetadata.md).

## See Also

### Reading a curve in Swift

- [headroomAdaptiveGainCurveMetadata](headroomadaptivegaincurvemetadata.md): The raw Headroom Adaptive Gain Curve data embedded in this profile, or `nil` if it carries no HAGC tag.
