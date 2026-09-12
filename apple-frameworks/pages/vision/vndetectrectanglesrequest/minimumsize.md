> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vndetectrectanglesrequest/minimumsize](https://developer.apple.com/documentation/vision/vndetectrectanglesrequest/minimumsize)

# minimumSize (Swift)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The minimum size of a rectangle to detect, as a proportion of the smallest dimension.

## Declaration

```swift
var minimumSize: Float { get set }
```

<a id="Discussion"></a>

## Discussion

The value should range from `0.0` to `1.0` inclusive. The default minimum size is `0.2`.

Any smaller rectangles that Vision may have detected aren’t returned.

## See Also

### Configuring Detection

- [minimumAspectRatio](minimumaspectratio.md): A `float` specifying the minimum aspect ratio of the rectangle to detect, defined as the shorter dimension over the longer dimension.
- [maximumAspectRatio](maximumaspectratio.md): A `float` specifying the maximum aspect ratio of the rectangle to detect, defined as the shorter dimension over the longer dimension.
- [VNAspectRatio](../vnaspectratio.md): A type alias for expressing rectangle aspect ratios in Vision.
- [quadratureTolerance](quadraturetolerance.md): A float specifying the number of degrees a rectangle corner angle can deviate from 90°.
- [VNDegrees](../vndegrees.md): A typealias for expressing tolerance angles in Vision.
- [minimumConfidence](minimumconfidence.md): A value specifying the minimum acceptable confidence level.
- [VNConfidence](../vnconfidence.md): A type alias for the confidence value of an observation.
- [maximumObservations](maximumobservations.md): An integer specifying the maximum number of rectangles Vision returns.

# minimumSize (Objective-C)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The minimum size of a rectangle to detect, as a proportion of the smallest dimension.

## Declaration

```objectivec
@property (nonatomic, assign, readwrite) float minimumSize;
```

<a id="Discussion"></a>

## Discussion

The value should range from `0.0` to `1.0` inclusive. The default minimum size is `0.2`.

Any smaller rectangles that Vision may have detected aren’t returned.

## See Also

### Configuring Detection

- [minimumAspectRatio](minimumaspectratio.md): A `float` specifying the minimum aspect ratio of the rectangle to detect, defined as the shorter dimension over the longer dimension.
- [maximumAspectRatio](maximumaspectratio.md): A `float` specifying the maximum aspect ratio of the rectangle to detect, defined as the shorter dimension over the longer dimension.
- [VNAspectRatio](../vnaspectratio.md): A type alias for expressing rectangle aspect ratios in Vision.
- [quadratureTolerance](quadraturetolerance.md): A float specifying the number of degrees a rectangle corner angle can deviate from 90°.
- [VNDegrees](../vndegrees.md): A typealias for expressing tolerance angles in Vision.
- [minimumConfidence](minimumconfidence.md): A value specifying the minimum acceptable confidence level.
- [VNConfidence](../vnconfidence.md): A type alias for the confidence value of an observation.
- [maximumObservations](maximumobservations.md): An integer specifying the maximum number of rectangles Vision returns.
