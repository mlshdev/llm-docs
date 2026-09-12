> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vndetectcontoursrequest/contrastpivot](https://developer.apple.com/documentation/vision/vndetectcontoursrequest/contrastpivot)

# contrastPivot (Swift)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

The pixel value to use as a pivot for the contrast.

## Declaration

```swift
var contrastPivot: NSNumber? { get set }
```

<a id="Discussion"></a>

## Discussion

Numeric values range from `0.0` to `1.0`. You can also specify `nil` to have the framework automatically detect the value according to image intensity.

The default value is `0.5`, which indicates the pixel center.

## See Also

### Configuring the Request

- [contrastAdjustment](contrastadjustment.md): The amount by which to adjust the image contrast.
- [detectsDarkOnLight](detectsdarkonlight.md): A Boolean value that indicates whether the request detects a dark object on a light background to aid in detection.
- [maximumImageDimension](maximumimagedimension.md): The maximum image dimension to use for contour detection.
- [detectDarkOnLight](detectdarkonlight.md): Deprecated. A Boolean value that indicates whether the request detects a dark object on a light background.

# contrastPivot (Objective-C)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

The pixel value to use as a pivot for the contrast.

## Declaration

```objectivec
@property (nonatomic, strong, readwrite, nullable) NSNumber * contrastPivot;
```

<a id="Discussion"></a>

## Discussion

Numeric values range from `0.0` to `1.0`. You can also specify `nil` to have the framework automatically detect the value according to image intensity.

The default value is `0.5`, which indicates the pixel center.

## See Also

### Configuring the Request

- [contrastAdjustment](contrastadjustment.md): The amount by which to adjust the image contrast.
- [detectsDarkOnLight](detectsdarkonlight.md): A Boolean value that indicates whether the request detects a dark object on a light background to aid in detection.
- [maximumImageDimension](maximumimagedimension.md): The maximum image dimension to use for contour detection.
- [detectDarkOnLight](detectdarkonlight.md): Deprecated. A Boolean value that indicates whether the request detects a dark object on a light background.
