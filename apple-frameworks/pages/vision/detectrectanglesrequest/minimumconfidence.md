> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/detectrectanglesrequest/minimumconfidence](https://developer.apple.com/documentation/vision/detectrectanglesrequest/minimumconfidence)

# minimumConfidence

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

The minimum acceptable confidence level for detected rectangles.

## Declaration

```swift
var minimumConfidence: Float
```

<a id="discussion"></a>

## Discussion

Vision won’t return rectangles with a confidence score lower than the specified minimum. The property’s default value is `0.0`, but you can set it to any value in the range `[0.0, 1.0]`. A value of `0.0` represents no confidence, while `1.0` represents full confidence.

## See Also

### Configuring a request

- [maximumAspectRatio](maximumaspectratio.md): The largest aspect ratio the rectangle request detects.
- [maximumObservations](maximumobservations.md): The maximum number of rectangles the request returns.
- [minimumAspectRatio](minimumaspectratio.md): The smallest aspect ratio the rectangle request detects.
- [minimumSize](minimumsize.md): The minimum size of the rectangle detected as a proportion of the smallest dimension.
- [quadratureToleranceDegrees](quadraturetolerancedegrees.md): The maximum number of degrees a rectangle corner angle deviates from 90°.
