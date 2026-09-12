> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnrecognizedtext/boundingbox(for:)](https://developer.apple.com/documentation/vision/vnrecognizedtext/boundingbox(for:))

# boundingBox(for:)

**Framework:** Vision  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+

Calculates the bounding box around the characters in the range of a string.

## Declaration

```swift
@nonobjc func boundingBox(for range: Range<String.Index>) throws -> VNRectangleObservation?
```

## Parameters

- `range`: The range of the characters in the text string to draw a bounding box around.

<a id="return-value"></a>

## Return Value

A bounding box.

<a id="Discussion"></a>

## Discussion

Bounding boxes aren’t always an exact fit around the characters. Use them to display in user interfaces to provide general guidance, but avoid using their contents for image processing.

The bounding box that returns from this method differs based on the value of [recognitionLevel](../vnrecognizetextrequest/recognitionlevel.md), as follows:

| [VNRequestTextRecognitionLevel.fast](../vnrequesttextrecognitionlevel/fast.md) | The bounding box has character precision. When you specify a range from `0` to `1`, the value that returns is the first character’s bounding box. |
| --- | --- |
| [VNRequestTextRecognitionLevel.accurate](../vnrequesttextrecognitionlevel/accurate.md) | The bounding box has word precision. When you specify a range from `0` to `1`, or `1` to `2`, the value that returns is the bounding box of the whole word containing the first character. |
