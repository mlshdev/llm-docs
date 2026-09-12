> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/detectcontoursrequest/contrastadjustment](https://developer.apple.com/documentation/vision/detectcontoursrequest/contrastadjustment)

# contrastAdjustment

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

The amount by which to adjust the image contrast.

## Declaration

```swift
var contrastAdjustment: Float
```

<a id="Discussion"></a>

## Discussion

Contour detection works best with high-contrast images. The default value of this property is `2.0`, which doubles the image contrast to achieve the most accurate results.

This property supports a value range from `0.0` to `3.0`.

## See Also

### Configuring a request

- [contrastPivot](contrastpivot.md): The pixel value to use as a pivot for the contrast.
- [detectsDarkOnLight](detectsdarkonlight.md): A Boolean value that indicates whether the request detects a dark object on a light background to aid in detection.
- [maximumImageDimension](maximumimagedimension.md): The maximum image dimension to use for contour detection.
