> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/detectrectanglesrequest/maximumaspectratio](https://developer.apple.com/documentation/vision/detectrectanglesrequest/maximumaspectratio)

# maximumAspectRatio

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

The largest aspect ratio the rectangle request detects.

## Declaration

```swift
var maximumAspectRatio: Float
```

<a id="discussion"></a>

## Discussion

The property’s value defaults to `1.0`, but you can set it to any value in the range `[0.0, 1.0]`. You can use this value to choose specific rectangles in the detection like filtering out narrow rectangles by excluding small aspect ratios, or setting a range of `0.95` to `1.0` to select mostly squares.

## See Also

### Configuring a request

- [maximumObservations](maximumobservations.md): The maximum number of rectangles the request returns.
- [minimumAspectRatio](minimumaspectratio.md): The smallest aspect ratio the rectangle request detects.
- [minimumConfidence](minimumconfidence.md): The minimum acceptable confidence level for detected rectangles.
- [minimumSize](minimumsize.md): The minimum size of the rectangle detected as a proportion of the smallest dimension.
- [quadratureToleranceDegrees](quadraturetolerancedegrees.md): The maximum number of degrees a rectangle corner angle deviates from 90°.
