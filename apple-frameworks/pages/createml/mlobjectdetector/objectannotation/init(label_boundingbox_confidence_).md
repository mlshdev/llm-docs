> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlobjectdetector/objectannotation/init(label:boundingbox:confidence:)](https://developer.apple.com/documentation/createml/mlobjectdetector/objectannotation/init(label:boundingbox:confidence:))

# init(label:boundingBox:confidence:)

**Framework:** Create ML  
**Kind:** Initializer  
**Availability:** macOS 10.15+

Creates an annotation for an item an object detector finds in an image.

## Declaration

```swift
init(label: String, boundingBox: CGRect, confidence: Double)
```

## Parameters

- `label`: The name of the item.
- `boundingBox`: The location of the item in an image.
- `confidence`: The confidence score of the item in the image. The value must be in the range `[0.0, 1.0]`, where `1.0` is the most confident.

<a id="discussion"></a>

## Discussion

Don’t use this initializer to create an object annotation yourself. The object detector uses it to create object annotations when it makes predictions on your images, such as when you use [prediction(from:)](../prediction%28from_%29.md).
