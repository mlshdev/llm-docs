> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/detectcontoursrequest/maximumimagedimension](https://developer.apple.com/documentation/vision/detectcontoursrequest/maximumimagedimension)

# maximumImageDimension

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

The maximum image dimension to use for contour detection.

## Declaration

```swift
var maximumImageDimension: Int
```

<a id="Discussion"></a>

## Discussion

Contour detection is computationally intensive. To improve performance, the framework scales the input image down, while maintaining its aspect ratio, such that its maximum dimension is the value of this property. The framework never scales the image up, so specifying the maximum value ensures that the image processes in its original size and not as a downscaled version.

This minimum value supported is `64`. The default value is `512`.

## See Also

### Configuring a request

- [contrastAdjustment](contrastadjustment.md): The amount by which to adjust the image contrast.
- [contrastPivot](contrastpivot.md): The pixel value to use as a pivot for the contrast.
- [detectsDarkOnLight](detectsdarkonlight.md): A Boolean value that indicates whether the request detects a dark object on a light background to aid in detection.
