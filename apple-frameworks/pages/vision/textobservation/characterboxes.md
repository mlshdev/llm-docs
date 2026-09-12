> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/textobservation/characterboxes](https://developer.apple.com/documentation/vision/textobservation/characterboxes)

# characterBoxes

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

An array of detected individual character bounding boxes.

## Declaration

```swift
let characterBoxes: [RectangleObservation]?
```

<a id="Discussion"></a>

## Discussion

If the associated [DetectTextRectanglesRequest](../detecttextrectanglesrequest.md) indicates interest in character boxes by setting the option [reportCharacterBoxes](../detecttextrectanglesrequest/reportcharacterboxes.md) to `true`, this property is non-`nil`. If no characters are found, it remains empty.

## See Also

### Inspecting an observation

- [RectangleObservation](../rectangleobservation.md): An object that represents the four vertices of a detected rectangle.
