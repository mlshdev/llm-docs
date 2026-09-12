> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsactivationfunction/scaledtanh](https://developer.apple.com/documentation/accelerate/bnnsactivationfunction/scaledtanh)

# scaledTanh

**Framework:** Accelerate  
**Kind:** Type Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.12+ · tvOS 10.0+ · visionOS · watchOS 3.0+

An activation function that returns the scaled hyperbolic tangent of its input.

> Use the BNNSGraph API instead.

## Declaration

```swift
static var scaledTanh: BNNSActivationFunction { get }
```

<a id="Discussion"></a>

## Discussion

This constant defines an activation function that returns values using the following operation:

```c
alpha*tanh(x*beta)
```

Use `alpha` and `beta` to specify the scale and input multiplier:

```swift
var activation = BNNSActivation(function: .scaledTanh, 
                                alpha: 1, 
                                beta: 0.5)
```

The following illustrates the output that the activation function generates from inputs in the range `-10...10`:

![Graph that shows input values for the activation function on horizontal axis and its output values on vertical axis. ](https://developer.apple.com/images/com.apple.accelerate/media-3401569@2x.png)

## See Also

### Activation Functions

- [abs](abs.md): Deprecated. An activation function that returns the absolute value of its input.
- [clamp](clamp.md): Deprecated. An activation function that returns its input clamped to a specified range.
- [identity](identity.md): Deprecated. An activation function that returns its input.
- [integerLinearSaturate](integerlinearsaturate.md): Deprecated. An activation function that returns an arithmetic shift, preserving sign.
- [integerLinearSaturatePerChannel](integerlinearsaturateperchannel.md): Deprecated. An activation function that returns an arithmetic shift, preserving sign for each channel.
- [leakyRectifiedLinear](leakyrectifiedlinear.md): Deprecated. An activation function that returns its input when that is greater than or equal to zero, otherwise it returns its input multiplied by a specified value.
- [linear](linear.md): Deprecated. An activation function that returns its input multiplied by a specified value.
- [rectifiedLinear](rectifiedlinear.md): Deprecated. An activation function that returns its input when that is greater than or equal to zero, otherwise it returns zero.
- [sigmoid](sigmoid.md): Deprecated. An activation function that returns the sigmoid function of its input.
- [softmax](softmax.md): Deprecated. An activation function that returns the softmax function of its input.
- [tanh](tanh.md): Deprecated. An activation function that returns the hyperbolic tangent of its input.
