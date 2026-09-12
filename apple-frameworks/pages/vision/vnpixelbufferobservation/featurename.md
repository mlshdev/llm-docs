> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnpixelbufferobservation/featurename](https://developer.apple.com/documentation/vision/vnpixelbufferobservation/featurename)

# featureName (Swift)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

A feature name that the CoreML model defines.

## Declaration

```swift
var featureName: String? { get }
```

<a id="Discussion"></a>

## Discussion

This value is [nil](../../objectivec/nil-227m0.md) if the observation isn’t the result of a [VNCoreMLRequest](../vncoremlrequest.md) operation.

## See Also

### Parsing Observation Content

- [pixelBuffer](pixelbuffer.md): The image that results from a request with image output.

# featureName (Objective-C)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

A feature name that the CoreML model defines.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSString * featureName;
```

<a id="Discussion"></a>

## Discussion

This value is [nil](../../objectivec/nil-227m0.md) if the observation isn’t the result of a [VNCoreMLRequest](../vncoremlrequest.md) operation.

## See Also

### Parsing Observation Content

- [pixelBuffer](pixelbuffer.md): The image that results from a request with image output.
