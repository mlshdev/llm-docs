> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsimageconvolution/bias](https://developer.apple.com/documentation/metalperformanceshaders/mpsimageconvolution/bias)

# bias (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 9.0+ · visionOS 1.0+

The value added to a convolved pixel before it is converted back to its intended storage format.

## Declaration

```swift
var bias: Float { get set }
```

<a id="Discussion"></a>

## Discussion

This value can be used to convert negative values into a representable range for an unsigned pixel format. For example, many edge detection filters produce results in the range `[-k,k]`. By scaling the filter weights by `0.5/k` and adding `0.5`, the results will be in the range `[0,1]` suitable for use with unsigned normalized formats.

This value can be used in combination with renormalization of the filter weights to do video ranging as part of the convolution effect. It can also just be used to increase the brightness of the image.

The default value is `0.0f`.

## See Also

### Properties

- [kernelHeight](kernelheight.md): The height of the filter window. Must be an odd number.
- [kernelWidth](kernelwidth.md): The width of the filter window. Must be an odd number.

# bias (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 9.0+ · visionOS 1.0+

The value added to a convolved pixel before it is converted back to its intended storage format.

## Declaration

```objectivec
@property (nonatomic, readwrite) float bias;
```

<a id="Discussion"></a>

## Discussion

This value can be used to convert negative values into a representable range for an unsigned pixel format. For example, many edge detection filters produce results in the range `[-k,k]`. By scaling the filter weights by `0.5/k` and adding `0.5`, the results will be in the range `[0,1]` suitable for use with unsigned normalized formats.

This value can be used in combination with renormalization of the filter weights to do video ranging as part of the convolution effect. It can also just be used to increase the brightness of the image.

The default value is `0.0f`.

## See Also

### Properties

- [kernelHeight](kernelheight.md): The height of the filter window. Must be an odd number.
- [kernelWidth](kernelwidth.md): The width of the filter window. Must be an odd number.
