> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/colorsync/colorsyncprofile/headroomadaptivegaincurvemetadata](https://developer.apple.com/documentation/colorsync/colorsyncprofile/headroomadaptivegaincurvemetadata)

# headroomAdaptiveGainCurveMetadata

**Framework:** ColorSync  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

The raw Headroom Adaptive Gain Curve data embedded in this profile, or `nil` if it carries no HAGC tag.

## Declaration

```swift
var headroomAdaptiveGainCurveMetadata: Data? { get }
```

## Mentioned In

- [Authoring Headroom Adaptive Gain Curve metadata](../authoring-headroom-adaptive-gain-curve-metadata.md)

<a id="discussion"></a>

## Discussion

This is equivalent to the serialized SMPTE ST 2094-50. Embed it in another profile with [adding(headroomAdaptiveGainCurveMetadata:options:)](adding%28headroomadaptivegaincurvemetadata_options_%29.md), or read the decoded form from [headroomAdaptiveGainCurve](headroomadaptivegaincurve-swift.property.md).

## See Also

### Reading a curve in Swift

- [headroomAdaptiveGainCurve](headroomadaptivegaincurve-swift.property.md): The Headroom Adaptive Gain Curve embedded in this profile, or `nil` if it carries no HAGC tag.
