> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vndetectcontoursrequest/maximumimagedimension](https://developer.apple.com/documentation/vision/vndetectcontoursrequest/maximumimagedimension)

# maximumImageDimension (Swift)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The maximum image dimension to use for contour detection.

## Declaration

```swift
var maximumImageDimension: Int { get set }
```

<a id="Discussion"></a>

## Discussion

Contour detection is computationally intensive. To improve performance, Vision scales the input image down, while maintaining its aspect ratio, such that its maximum dimension is the value of this property. Vision never scales the image up, so specifying the maximum value ensures that the image processes in its original size and not as a downscaled version.

This property supports values from 64 to [NSUIntegerMax](../../objectivec/nsuintegermax.md). The default value is 512.

## See Also

### Configuring the Request

- [contrastAdjustment](contrastadjustment.md): The amount by which to adjust the image contrast.
- [contrastPivot](contrastpivot.md): The pixel value to use as a pivot for the contrast.
- [detectsDarkOnLight](detectsdarkonlight.md): A Boolean value that indicates whether the request detects a dark object on a light background to aid in detection.
- [detectDarkOnLight](detectdarkonlight.md): Deprecated. A Boolean value that indicates whether the request detects a dark object on a light background.

# maximumImageDimension (Objective-C)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The maximum image dimension to use for contour detection.

## Declaration

```objectivec
@property (nonatomic, readwrite) NSUInteger maximumImageDimension;
```

<a id="Discussion"></a>

## Discussion

Contour detection is computationally intensive. To improve performance, Vision scales the input image down, while maintaining its aspect ratio, such that its maximum dimension is the value of this property. Vision never scales the image up, so specifying the maximum value ensures that the image processes in its original size and not as a downscaled version.

This property supports values from 64 to [NSUIntegerMax](../../objectivec/nsuintegermax.md). The default value is 512.

## See Also

### Configuring the Request

- [contrastAdjustment](contrastadjustment.md): The amount by which to adjust the image contrast.
- [contrastPivot](contrastpivot.md): The pixel value to use as a pivot for the contrast.
- [detectsDarkOnLight](detectsdarkonlight.md): A Boolean value that indicates whether the request detects a dark object on a light background to aid in detection.
- [detectDarkOnLight](detectdarkonlight.md): Deprecated. A Boolean value that indicates whether the request detects a dark object on a light background.
