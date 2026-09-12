> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnconfidence](https://developer.apple.com/documentation/vision/vnconfidence)

# VNConfidence (Swift)

**Framework:** Vision  
**Kind:** Type Alias

A type alias for the confidence value of an observation.

## Declaration

```swift
typealias VNConfidence = Float
```

<a id="Discussion"></a>

## Discussion

The Vision framework normalizes this value to `[0.0, 1.0]` under most circumstances. A value of `0.0` indicates no confidence. A value of `1.0` indicates highest confidence, or the observation doesn’t support or assign meaning to confidence.

> **Note**

>  When the results come from a [VNCoreMLRequest](vncoremlrequest.md), Vision forwards confidence values as-is and doesn’t normalize them.

## See Also

### Configuring Detection

- [minimumAspectRatio](vndetectrectanglesrequest/minimumaspectratio.md): A `float` specifying the minimum aspect ratio of the rectangle to detect, defined as the shorter dimension over the longer dimension.
- [maximumAspectRatio](vndetectrectanglesrequest/maximumaspectratio.md): A `float` specifying the maximum aspect ratio of the rectangle to detect, defined as the shorter dimension over the longer dimension.
- [VNAspectRatio](vnaspectratio.md): A type alias for expressing rectangle aspect ratios in Vision.
- [quadratureTolerance](vndetectrectanglesrequest/quadraturetolerance.md): A float specifying the number of degrees a rectangle corner angle can deviate from 90°.
- [VNDegrees](vndegrees.md): A typealias for expressing tolerance angles in Vision.
- [minimumSize](vndetectrectanglesrequest/minimumsize.md): The minimum size of a rectangle to detect, as a proportion of the smallest dimension.
- [minimumConfidence](vndetectrectanglesrequest/minimumconfidence.md): A value specifying the minimum acceptable confidence level.
- [maximumObservations](vndetectrectanglesrequest/maximumobservations.md): An integer specifying the maximum number of rectangles Vision returns.

# VNConfidence (Objective-C)

**Framework:** Vision  
**Kind:** Type Alias

A type alias for the confidence value of an observation.

## Declaration

```objectivec
typedef float VNConfidence;
```

<a id="Discussion"></a>

## Discussion

The Vision framework normalizes this value to `[0.0, 1.0]` under most circumstances. A value of `0.0` indicates no confidence. A value of `1.0` indicates highest confidence, or the observation doesn’t support or assign meaning to confidence.

> **Note**

>  When the results come from a [VNCoreMLRequest](vncoremlrequest.md), Vision forwards confidence values as-is and doesn’t normalize them.

## See Also

### Configuring Detection

- [minimumAspectRatio](vndetectrectanglesrequest/minimumaspectratio.md): A `float` specifying the minimum aspect ratio of the rectangle to detect, defined as the shorter dimension over the longer dimension.
- [maximumAspectRatio](vndetectrectanglesrequest/maximumaspectratio.md): A `float` specifying the maximum aspect ratio of the rectangle to detect, defined as the shorter dimension over the longer dimension.
- [VNAspectRatio](vnaspectratio.md): A type alias for expressing rectangle aspect ratios in Vision.
- [quadratureTolerance](vndetectrectanglesrequest/quadraturetolerance.md): A float specifying the number of degrees a rectangle corner angle can deviate from 90°.
- [VNDegrees](vndegrees.md): A typealias for expressing tolerance angles in Vision.
- [minimumSize](vndetectrectanglesrequest/minimumsize.md): The minimum size of a rectangle to detect, as a proportion of the smallest dimension.
- [minimumConfidence](vndetectrectanglesrequest/minimumconfidence.md): A value specifying the minimum acceptable confidence level.
- [maximumObservations](vndetectrectanglesrequest/maximumobservations.md): An integer specifying the maximum number of rectangles Vision returns.
