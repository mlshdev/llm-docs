> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnaspectratio](https://developer.apple.com/documentation/vision/vnaspectratio)

# VNAspectRatio (Swift)

**Framework:** Vision  
**Kind:** Type Alias

A type alias for expressing rectangle aspect ratios in Vision.

## Declaration

```swift
typealias VNAspectRatio = Float
```

<a id="Discussion"></a>

## Discussion

The value is a [float](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariCSSRef/Articles/StandardCSSProperties.html#//apple_ref/doc/uid/TP30001266-float), but limited to a range of `0.0` to `1.0`, inclusive, with the default of `0.5` indicating a square image. It defines aspect ratio as the shorter dimension over the longer dimension.

## See Also

### Configuring Detection

- [minimumAspectRatio](vndetectrectanglesrequest/minimumaspectratio.md): A `float` specifying the minimum aspect ratio of the rectangle to detect, defined as the shorter dimension over the longer dimension.
- [maximumAspectRatio](vndetectrectanglesrequest/maximumaspectratio.md): A `float` specifying the maximum aspect ratio of the rectangle to detect, defined as the shorter dimension over the longer dimension.
- [quadratureTolerance](vndetectrectanglesrequest/quadraturetolerance.md): A float specifying the number of degrees a rectangle corner angle can deviate from 90°.
- [VNDegrees](vndegrees.md): A typealias for expressing tolerance angles in Vision.
- [minimumSize](vndetectrectanglesrequest/minimumsize.md): The minimum size of a rectangle to detect, as a proportion of the smallest dimension.
- [minimumConfidence](vndetectrectanglesrequest/minimumconfidence.md): A value specifying the minimum acceptable confidence level.
- [VNConfidence](vnconfidence.md): A type alias for the confidence value of an observation.
- [maximumObservations](vndetectrectanglesrequest/maximumobservations.md): An integer specifying the maximum number of rectangles Vision returns.

# VNAspectRatio (Objective-C)

**Framework:** Vision  
**Kind:** Type Alias

A type alias for expressing rectangle aspect ratios in Vision.

## Declaration

```objectivec
typedef float VNAspectRatio;
```

<a id="Discussion"></a>

## Discussion

The value is a [float](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariCSSRef/Articles/StandardCSSProperties.html#//apple_ref/doc/uid/TP30001266-float), but limited to a range of `0.0` to `1.0`, inclusive, with the default of `0.5` indicating a square image. It defines aspect ratio as the shorter dimension over the longer dimension.

## See Also

### Configuring Detection

- [minimumAspectRatio](vndetectrectanglesrequest/minimumaspectratio.md): A `float` specifying the minimum aspect ratio of the rectangle to detect, defined as the shorter dimension over the longer dimension.
- [maximumAspectRatio](vndetectrectanglesrequest/maximumaspectratio.md): A `float` specifying the maximum aspect ratio of the rectangle to detect, defined as the shorter dimension over the longer dimension.
- [quadratureTolerance](vndetectrectanglesrequest/quadraturetolerance.md): A float specifying the number of degrees a rectangle corner angle can deviate from 90°.
- [VNDegrees](vndegrees.md): A typealias for expressing tolerance angles in Vision.
- [minimumSize](vndetectrectanglesrequest/minimumsize.md): The minimum size of a rectangle to detect, as a proportion of the smallest dimension.
- [minimumConfidence](vndetectrectanglesrequest/minimumconfidence.md): A value specifying the minimum acceptable confidence level.
- [VNConfidence](vnconfidence.md): A type alias for the confidence value of an observation.
- [maximumObservations](vndetectrectanglesrequest/maximumobservations.md): An integer specifying the maximum number of rectangles Vision returns.
