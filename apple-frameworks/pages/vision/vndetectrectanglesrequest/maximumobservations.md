> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vndetectrectanglesrequest/maximumobservations](https://developer.apple.com/documentation/vision/vndetectrectanglesrequest/maximumobservations)

# maximumObservations (Swift)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

An integer specifying the maximum number of rectangles Vision returns.

## Declaration

```swift
var maximumObservations: Int { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is `1`.

Setting this property to `0` allows Vision algorithms to return an unlimited number of observations.

## See Also

### Configuring Detection

- [minimumAspectRatio](minimumaspectratio.md): A `float` specifying the minimum aspect ratio of the rectangle to detect, defined as the shorter dimension over the longer dimension.
- [maximumAspectRatio](maximumaspectratio.md): A `float` specifying the maximum aspect ratio of the rectangle to detect, defined as the shorter dimension over the longer dimension.
- [VNAspectRatio](../vnaspectratio.md): A type alias for expressing rectangle aspect ratios in Vision.
- [quadratureTolerance](quadraturetolerance.md): A float specifying the number of degrees a rectangle corner angle can deviate from 90°.
- [VNDegrees](../vndegrees.md): A typealias for expressing tolerance angles in Vision.
- [minimumSize](minimumsize.md): The minimum size of a rectangle to detect, as a proportion of the smallest dimension.
- [minimumConfidence](minimumconfidence.md): A value specifying the minimum acceptable confidence level.
- [VNConfidence](../vnconfidence.md): A type alias for the confidence value of an observation.

# maximumObservations (Objective-C)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

An integer specifying the maximum number of rectangles Vision returns.

## Declaration

```objectivec
@property (nonatomic, assign, readwrite) NSUInteger maximumObservations;
```

<a id="Discussion"></a>

## Discussion

The default value is `1`.

Setting this property to `0` allows Vision algorithms to return an unlimited number of observations.

## See Also

### Configuring Detection

- [minimumAspectRatio](minimumaspectratio.md): A `float` specifying the minimum aspect ratio of the rectangle to detect, defined as the shorter dimension over the longer dimension.
- [maximumAspectRatio](maximumaspectratio.md): A `float` specifying the maximum aspect ratio of the rectangle to detect, defined as the shorter dimension over the longer dimension.
- [VNAspectRatio](../vnaspectratio.md): A type alias for expressing rectangle aspect ratios in Vision.
- [quadratureTolerance](quadraturetolerance.md): A float specifying the number of degrees a rectangle corner angle can deviate from 90°.
- [VNDegrees](../vndegrees.md): A typealias for expressing tolerance angles in Vision.
- [minimumSize](minimumsize.md): The minimum size of a rectangle to detect, as a proportion of the smallest dimension.
- [minimumConfidence](minimumconfidence.md): A value specifying the minimum acceptable confidence level.
- [VNConfidence](../vnconfidence.md): A type alias for the confidence value of an observation.
