> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/recognizedtext/boundingbox(for:)](https://developer.apple.com/documentation/vision/recognizedtext/boundingbox(for:))

# boundingBox(for:)

**Framework:** Vision  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

Calculates the bounding box around the characters in the range of a string.

## Declaration

```swift
func boundingBox(for range: Range<String.Index>) -> RectangleObservation?
```

## Parameters

- `range`: The range of the characters in the text string to draw a bounding box around.

<a id="return-value"></a>

## Return Value

The bounding box surrounding the characters recognized in the image.

<a id="Discussion"></a>

## Discussion

Bounding boxes aren’t always an exact fit around the characters. Use them to display in user interfaces to provide general guidance, but avoid using their contents for image processing.

The coordinates of the bounding box are normalized to the dimensions of the processed image, with the origin at the lower-left corner of the image.
