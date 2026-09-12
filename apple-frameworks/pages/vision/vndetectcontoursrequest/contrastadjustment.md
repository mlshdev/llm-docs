> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vndetectcontoursrequest/contrastadjustment](https://developer.apple.com/documentation/vision/vndetectcontoursrequest/contrastadjustment)

# contrastAdjustment (Swift)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The amount by which to adjust the image contrast.

## Declaration

```swift
var contrastAdjustment: Float { get set }
```

<a id="Discussion"></a>

## Discussion

Contour detection works best with high-contrast images. The default value of this property is `2.0`, which doubles the image contrast to achieve the most accurate results.

This property supports a value range from `0.0` to `3.0`.

## See Also

### Configuring the Request

- [contrastPivot](contrastpivot.md): The pixel value to use as a pivot for the contrast.
- [detectsDarkOnLight](detectsdarkonlight.md): A Boolean value that indicates whether the request detects a dark object on a light background to aid in detection.
- [maximumImageDimension](maximumimagedimension.md): The maximum image dimension to use for contour detection.
- [detectDarkOnLight](detectdarkonlight.md): Deprecated. A Boolean value that indicates whether the request detects a dark object on a light background.

# contrastAdjustment (Objective-C)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The amount by which to adjust the image contrast.

## Declaration

```objectivec
@property (nonatomic, readwrite) float contrastAdjustment;
```

<a id="Discussion"></a>

## Discussion

Contour detection works best with high-contrast images. The default value of this property is `2.0`, which doubles the image contrast to achieve the most accurate results.

This property supports a value range from `0.0` to `3.0`.

## See Also

### Configuring the Request

- [contrastPivot](contrastpivot.md): The pixel value to use as a pivot for the contrast.
- [detectsDarkOnLight](detectsdarkonlight.md): A Boolean value that indicates whether the request detects a dark object on a light background to aid in detection.
- [maximumImageDimension](maximumimagedimension.md): The maximum image dimension to use for contour detection.
- [detectDarkOnLight](detectdarkonlight.md): Deprecated. A Boolean value that indicates whether the request detects a dark object on a light background.
