> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/vision/detecttextrectanglesrequest/reportcharacterboxes

# reportCharacterBoxes

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

A Boolean value that indicates whether the request detects character-bounding boxes.

## Declaration

```swift
var reportCharacterBoxes: Bool
```

<a id="Discussion"></a>

## Discussion

Set the value to `true` to have the detector return character-bounding boxes as an array of [VNRectangleObservation](../vnrectangleobservation.md) objects.
