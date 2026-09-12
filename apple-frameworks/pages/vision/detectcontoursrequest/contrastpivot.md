> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/detectcontoursrequest/contrastpivot](https://developer.apple.com/documentation/vision/detectcontoursrequest/contrastpivot)

# contrastPivot

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

The pixel value to use as a pivot for the contrast.

## Declaration

```swift
var contrastPivot: Float?
```

<a id="Discussion"></a>

## Discussion

Numeric values range from `0.0` to `1.0`. You can also specify `nil` to have the framework automatically detect the value according to image intensity.

The default value is `0.5`, which indicates the pixel center.

## See Also

### Configuring a request

- [contrastAdjustment](contrastadjustment.md): The amount by which to adjust the image contrast.
- [detectsDarkOnLight](detectsdarkonlight.md): A Boolean value that indicates whether the request detects a dark object on a light background to aid in detection.
- [maximumImageDimension](maximumimagedimension.md): The maximum image dimension to use for contour detection.
