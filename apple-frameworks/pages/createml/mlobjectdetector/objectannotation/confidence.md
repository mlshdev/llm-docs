> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlobjectdetector/objectannotation/confidence](https://developer.apple.com/documentation/createml/mlobjectdetector/objectannotation/confidence)

# confidence

**Framework:** Create ML  
**Kind:** Instance Property  
**Availability:** macOS 10.15+

The object detector’s confidence score for its prediction’s accuracy.

## Declaration

```swift
var confidence: Double
```

<a id="discussion"></a>

## Discussion

The confidence range is `[0.0, 1.0]`, where `1.0` is the highest possible confidence score.

## See Also

### Inspecting an annotation

- [label](label.md): The name of the item the object detector found in an image.
- [boundingBox](boundingbox.md): A rectangular region that encloses an item the object detector found in the image.
