> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/detectrectanglesrequest/minimumaspectratio](https://developer.apple.com/documentation/vision/detectrectanglesrequest/minimumaspectratio)

# minimumAspectRatio

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

The smallest aspect ratio the rectangle request detects.

## Declaration

```swift
var minimumAspectRatio: Float
```

<a id="discussion"></a>

## Discussion

The property’s value defaults to `0.5`, but you can set it to any value in the range `[0.0, 1.0]`. You can use this value to choose specific rectangles in the detection like filtering out narrow rectangles by excluding small aspect ratios, or setting a range of `0.95` to `1.0` to select mostly squares.

## See Also

### Configuring a request

- [maximumAspectRatio](maximumaspectratio.md): The largest aspect ratio the rectangle request detects.
- [maximumObservations](maximumobservations.md): The maximum number of rectangles the request returns.
- [minimumConfidence](minimumconfidence.md): The minimum acceptable confidence level for detected rectangles.
- [minimumSize](minimumsize.md): The minimum size of the rectangle detected as a proportion of the smallest dimension.
- [quadratureToleranceDegrees](quadraturetolerancedegrees.md): The maximum number of degrees a rectangle corner angle deviates from 90°.
