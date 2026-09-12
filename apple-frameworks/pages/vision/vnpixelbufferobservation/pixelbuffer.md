> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnpixelbufferobservation/pixelbuffer](https://developer.apple.com/documentation/vision/vnpixelbufferobservation/pixelbuffer)

# pixelBuffer (Swift)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The image that results from a request with image output.

## Declaration

```swift
var pixelBuffer: CVPixelBuffer { get }
```

<a id="Discussion"></a>

## Discussion

[VNCoreMLRequest](../vncoremlrequest.md) produces observations that contain images in pixel buffer format. The confidence level is always `1.0`.

## See Also

### Parsing Observation Content

- [featureName](featurename.md): A feature name that the CoreML model defines.

# pixelBuffer (Objective-C)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The image that results from a request with image output.

## Declaration

```objectivec
@property (nonatomic, readonly) CVPixelBufferRef pixelBuffer;
```

<a id="Discussion"></a>

## Discussion

[VNCoreMLRequest](../vncoremlrequest.md) produces observations that contain images in pixel buffer format. The confidence level is always `1.0`.

## See Also

### Parsing Observation Content

- [featureName](featurename.md): A feature name that the CoreML model defines.
