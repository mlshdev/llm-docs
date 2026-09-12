> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vndetectrectanglesrequest/maximumaspectratio](https://developer.apple.com/documentation/vision/vndetectrectanglesrequest/maximumaspectratio)

# maximumAspectRatio (Swift)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A `float` specifying the maximum aspect ratio of the rectangle to detect, defined as the shorter dimension over the longer dimension.

## Declaration

```swift
var maximumAspectRatio: VNAspectRatio { get set }
```

<a id="Discussion"></a>

## Discussion

The value should range from `0.0` to `1.0`, inclusive. The default value is `0.5`.

## See Also

### Configuring Detection

- [minimumAspectRatio](minimumaspectratio.md): A `float` specifying the minimum aspect ratio of the rectangle to detect, defined as the shorter dimension over the longer dimension.
- [VNAspectRatio](../vnaspectratio.md): A type alias for expressing rectangle aspect ratios in Vision.
- [quadratureTolerance](quadraturetolerance.md): A float specifying the number of degrees a rectangle corner angle can deviate from 90°.
- [VNDegrees](../vndegrees.md): A typealias for expressing tolerance angles in Vision.
- [minimumSize](minimumsize.md): The minimum size of a rectangle to detect, as a proportion of the smallest dimension.
- [minimumConfidence](minimumconfidence.md): A value specifying the minimum acceptable confidence level.
- [VNConfidence](../vnconfidence.md): A type alias for the confidence value of an observation.
- [maximumObservations](maximumobservations.md): An integer specifying the maximum number of rectangles Vision returns.

# maximumAspectRatio (Objective-C)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A `float` specifying the maximum aspect ratio of the rectangle to detect, defined as the shorter dimension over the longer dimension.

## Declaration

```objectivec
@property (nonatomic, assign, readwrite) VNAspectRatio maximumAspectRatio;
```

<a id="Discussion"></a>

## Discussion

The value should range from `0.0` to `1.0`, inclusive. The default value is `0.5`.

## See Also

### Configuring Detection

- [minimumAspectRatio](minimumaspectratio.md): A `float` specifying the minimum aspect ratio of the rectangle to detect, defined as the shorter dimension over the longer dimension.
- [VNAspectRatio](../vnaspectratio.md): A type alias for expressing rectangle aspect ratios in Vision.
- [quadratureTolerance](quadraturetolerance.md): A float specifying the number of degrees a rectangle corner angle can deviate from 90°.
- [VNDegrees](../vndegrees.md): A typealias for expressing tolerance angles in Vision.
- [minimumSize](minimumsize.md): The minimum size of a rectangle to detect, as a proportion of the smallest dimension.
- [minimumConfidence](minimumconfidence.md): A value specifying the minimum acceptable confidence level.
- [VNConfidence](../vnconfidence.md): A type alias for the confidence value of an observation.
- [maximumObservations](maximumobservations.md): An integer specifying the maximum number of rectangles Vision returns.
