> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/detectcontoursrequest/detectsdarkonlight](https://developer.apple.com/documentation/vision/detectcontoursrequest/detectsdarkonlight)

# detectsDarkOnLight

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

A Boolean value that indicates whether the request detects a dark object on a light background to aid in detection.

## Declaration

```swift
var detectsDarkOnLight: Bool
```

<a id="Discussion"></a>

## Discussion

The default value is `true`.

## See Also

### Configuring a request

- [contrastAdjustment](contrastadjustment.md): The amount by which to adjust the image contrast.
- [contrastPivot](contrastpivot.md): The pixel value to use as a pivot for the contrast.
- [maximumImageDimension](maximumimagedimension.md): The maximum image dimension to use for contour detection.
