> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vndetectrectanglesrequest/quadraturetolerance](https://developer.apple.com/documentation/vision/vndetectrectanglesrequest/quadraturetolerance)

# quadratureTolerance (Swift)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A float specifying the number of degrees a rectangle corner angle can deviate from 90°.

## Declaration

```swift
var quadratureTolerance: VNDegrees { get set }
```

<a id="Discussion"></a>

## Discussion

The tolerance value should range from `0` to `45`, inclusive. The default tolerance is `30`.

## See Also

### Configuring Detection

- [minimumAspectRatio](minimumaspectratio.md): A `float` specifying the minimum aspect ratio of the rectangle to detect, defined as the shorter dimension over the longer dimension.
- [maximumAspectRatio](maximumaspectratio.md): A `float` specifying the maximum aspect ratio of the rectangle to detect, defined as the shorter dimension over the longer dimension.
- [VNAspectRatio](../vnaspectratio.md): A type alias for expressing rectangle aspect ratios in Vision.
- [VNDegrees](../vndegrees.md): A typealias for expressing tolerance angles in Vision.
- [minimumSize](minimumsize.md): The minimum size of a rectangle to detect, as a proportion of the smallest dimension.
- [minimumConfidence](minimumconfidence.md): A value specifying the minimum acceptable confidence level.
- [VNConfidence](../vnconfidence.md): A type alias for the confidence value of an observation.
- [maximumObservations](maximumobservations.md): An integer specifying the maximum number of rectangles Vision returns.

# quadratureTolerance (Objective-C)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A float specifying the number of degrees a rectangle corner angle can deviate from 90°.

## Declaration

```objectivec
@property (nonatomic, assign, readwrite) VNDegrees quadratureTolerance;
```

<a id="Discussion"></a>

## Discussion

The tolerance value should range from `0` to `45`, inclusive. The default tolerance is `30`.

## See Also

### Configuring Detection

- [minimumAspectRatio](minimumaspectratio.md): A `float` specifying the minimum aspect ratio of the rectangle to detect, defined as the shorter dimension over the longer dimension.
- [maximumAspectRatio](maximumaspectratio.md): A `float` specifying the maximum aspect ratio of the rectangle to detect, defined as the shorter dimension over the longer dimension.
- [VNAspectRatio](../vnaspectratio.md): A type alias for expressing rectangle aspect ratios in Vision.
- [VNDegrees](../vndegrees.md): A typealias for expressing tolerance angles in Vision.
- [minimumSize](minimumsize.md): The minimum size of a rectangle to detect, as a proportion of the smallest dimension.
- [minimumConfidence](minimumconfidence.md): A value specifying the minimum acceptable confidence level.
- [VNConfidence](../vnconfidence.md): A type alias for the confidence value of an observation.
- [maximumObservations](maximumobservations.md): An integer specifying the maximum number of rectangles Vision returns.
