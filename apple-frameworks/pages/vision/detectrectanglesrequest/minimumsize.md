> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/detectrectanglesrequest/minimumsize](https://developer.apple.com/documentation/vision/detectrectanglesrequest/minimumsize)

# minimumSize

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

The minimum size of the rectangle detected as a proportion of the smallest dimension.

## Declaration

```swift
var minimumSize: Float
```

<a id="discussion"></a>

## Discussion

The property’s value defaults to `0.2`, but you can set it to any value in the range `[0.0, 1.0]`. Any smaller rectangles that Vision may detect aren’t returned.

## See Also

### Configuring a request

- [maximumAspectRatio](maximumaspectratio.md): The largest aspect ratio the rectangle request detects.
- [maximumObservations](maximumobservations.md): The maximum number of rectangles the request returns.
- [minimumAspectRatio](minimumaspectratio.md): The smallest aspect ratio the rectangle request detects.
- [minimumConfidence](minimumconfidence.md): The minimum acceptable confidence level for detected rectangles.
- [quadratureToleranceDegrees](quadraturetolerancedegrees.md): The maximum number of degrees a rectangle corner angle deviates from 90°.
