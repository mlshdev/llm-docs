> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/detectrectanglesrequest/maximumobservations](https://developer.apple.com/documentation/vision/detectrectanglesrequest/maximumobservations)

# maximumObservations

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

The maximum number of rectangles the request returns.

## Declaration

```swift
var maximumObservations: Int
```

<a id="discussion"></a>

## Discussion

The property’s default value is `1`. Setting this property to `0` will return a potentially unlimited number of observations.

## See Also

### Configuring a request

- [maximumAspectRatio](maximumaspectratio.md): The largest aspect ratio the rectangle request detects.
- [minimumAspectRatio](minimumaspectratio.md): The smallest aspect ratio the rectangle request detects.
- [minimumConfidence](minimumconfidence.md): The minimum acceptable confidence level for detected rectangles.
- [minimumSize](minimumsize.md): The minimum size of the rectangle detected as a proportion of the smallest dimension.
- [quadratureToleranceDegrees](quadraturetolerancedegrees.md): The maximum number of degrees a rectangle corner angle deviates from 90°.
