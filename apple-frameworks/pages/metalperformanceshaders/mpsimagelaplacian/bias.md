> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsimagelaplacian/bias](https://developer.apple.com/documentation/metalperformanceshaders/mpsimagelaplacian/bias)

# bias (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

The value added to a convolved pixel before it is converted back to its intended storage format.

## Declaration

```swift
var bias: Float { get set }
```

<a id="Discussion"></a>

## Discussion

This value can be used to convert negative values into a representable range for a unsigned pixel format. For example, many edge detection filters produce results in the range `[-k,k]`. By scaling the filter weights by `0.5/k` and adding `0.5`, the results will be in range `[0,1]` suitable for use with unsigned normalized pixel formats.

This value can also be used in combination with renormalization of the filter weights to do video ranging as part of the convolution effect. It can also just be used to increase the brightness of the image.

The default value is `0.0f`.

# bias (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

The value added to a convolved pixel before it is converted back to its intended storage format.

## Declaration

```objectivec
@property (nonatomic, readwrite) float bias;
```

<a id="Discussion"></a>

## Discussion

This value can be used to convert negative values into a representable range for a unsigned pixel format. For example, many edge detection filters produce results in the range `[-k,k]`. By scaling the filter weights by `0.5/k` and adding `0.5`, the results will be in range `[0,1]` suitable for use with unsigned normalized pixel formats.

This value can also be used in combination with renormalization of the filter weights to do video ranging as part of the convolution effect. It can also just be used to increase the brightness of the image.

The default value is `0.0f`.
