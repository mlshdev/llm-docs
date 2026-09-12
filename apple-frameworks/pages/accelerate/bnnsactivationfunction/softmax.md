> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsactivationfunction/softmax](https://developer.apple.com/documentation/accelerate/bnnsactivationfunction/softmax)

# softmax

**Framework:** Accelerate  
**Kind:** Type Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS · watchOS 4.0+

An activation function that returns the softmax function of its input.

> Use the BNNSGraph API instead.

## Declaration

```swift
static var softmax: BNNSActivationFunction { get }
```

<a id="Discussion"></a>

## Discussion

This constant defines an activation function that returns values using the following formula:

![General formula that describes mathematically the softmax activation function. s open bracket x sub i close bracket equals  the exponential of x sub i over summation from j equals one to n times the exponential of x sub j.](https://developer.apple.com/images/com.apple.accelerate/media-3402491@2x.png)

The softmax function transforms a vector of real numbers into a vector of probabilities. Each probability in the result is in the range 0…1, and the sum of the probabilities is 1.

For example, given and array that contains the values `[3.0, 5.0, 1.0, 6.0, 2.0, 1.0, 4.0]`, the softmax function calculates the following values:

| Inputs | Outputs |
| --- | --- |
| `3.0` | `0.031415492` |
| `5.0` | `0.23213086` |
| `1.0` | `0.004251625` |
| `6.0` | `0.63099706` |
| `2.0` | `0.011557114` |
| `1.0` | `0.004251625` |
| `4.0` | `0.08539616` |

Changing the fourth element from `6.0` to `10.0` increases its probability to almost 1.0:

| Inputs | Outputs |
| --- | --- |
| `3.0` | `0.00090221845` |
| `5.0` | `0.0066665425` |
| `1.0` | `0.00012210199` |
| `10.0` | `0.98940265` |
| `2.0` | `0.00033190762` |
| `1.0` | `0.00012210199` |
| `4.0` | `0.002452484` |

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
- [scaledTanh](scaledtanh.md): Deprecated. An activation function that returns the scaled hyperbolic tangent of its input.
- [sigmoid](sigmoid.md): Deprecated. An activation function that returns the sigmoid function of its input.
- [tanh](tanh.md): Deprecated. An activation function that returns the hyperbolic tangent of its input.
