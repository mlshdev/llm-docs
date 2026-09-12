> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsactivationfunction/bnnsactivationfunctionsoftmax](https://developer.apple.com/documentation/accelerate/bnnsactivationfunction/bnnsactivationfunctionsoftmax)

# BNNSActivationFunctionSoftmax

**Interface language:** Objective-C

**Framework:** Accelerate  
**Kind:** Enumeration Case  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

An activation function that returns the softmax function of its input.

## Declaration

```objectivec
BNNSActivationFunctionSoftmax
```

<a id="Discussion"></a>

## Discussion

This constant defines an activation function that returns values using the following formula:

![General formula that describes mathematically the softmax activation function. s open bracket x sub i close bracket equals  the exponential of x sub i over summation from j equals one to n times the exponential of x sub j.](https://developer.apple.com/images/com.apple.accelerate/media-3401551@2x.png)

The softmax function transforms a vector of real numbers into a vector of probabilities. Each probability in the result is in the range 0…1, and the sum of the probabilities is 1.

The following code shows how to apply the softmax function to a vector that contains seven elements:

```swift
let inputs: [Float] = [3, 5, 1, 6, 2, 1, 4]
let count = inputs.count
var outputs = [Float](repeating: 0,
                      count: count)

var inDescription = BNNSVectorDescriptor(size: count,
                                         data_type: .float)
var outDescription = BNNSVectorDescriptor(size: count,
                                          data_type: .float)
var activation = BNNSActivation(function: .softmax)
var filterParameters = BNNSFilterParameters()

let activationLayer = BNNSFilterCreateVectorActivationLayer(&inDescription,
                                                            &outDescription,
                                                            &activation,
                                                            &filterParameters)

BNNSFilterApply(activationLayer, inputs, &outputs)
```

On return, the softmax function calculates the following values:

| Inputs | Outputs |
| --- | --- |
| `3.0` | `0.031415492` |
| `5.0` | `0.23213086` |
| `1.0` | `0.004251625` |
| `6.0` | `0.63099706` |
| `2.0` | `0.011557114` |
| `1.0` | `0.004251625` |
| `4.0` | `0.08539616` |

Changing the fourth element in `inputs` to 10 increases its probability to almost 1.0:

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

### Raw Values

- [BNNSActivationFunctionCELU](../bnnsactivationfunctioncelu.md): An activation function that evaluates the continuously differentiable exponential linear units (CELU) on its input.
- [BNNSActivationFunctionClamp](bnnsactivationfunctionclamp.md): An activation function that returns its input clamped to the specified range.
- [BNNSActivationFunctionClampedLeakyRectifiedLinear](../bnnsactivationfunctionclampedleakyrectifiedlinear.md): An activation function that returns its input clamped to beta when that is greater than or equal to zero, otherwise it returns its input multiplied by alpha clamped to beta.
- [BNNSActivationFunctionELU](../bnnsactivationfunctionelu.md): An activation function that evaluates the exponential linear units (ELU) on its input.
- [BNNSActivationFunctionErf](../bnnsactivationfunctionerf.md)
- [BNNSActivationFunctionGELU](../bnnsactivationfunctiongelu.md)
- [BNNSActivationFunctionGELUApproximation](../bnnsactivationfunctiongeluapproximation.md): An activation function that evaluates the Gaussian error linear units (GELU) approximation on its input.
- [BNNSActivationFunctionGELUApproximation2](../bnnsactivationfunctiongeluapproximation2.md): An activation function that provides a fast evaluation of the Gaussian error linear units (GELU) approximation on its input.
- [BNNSActivationFunctionGELUApproximationSigmoid](../bnnsactivationfunctiongeluapproximationsigmoid.md)
- [BNNSActivationFunctionGumbel](../bnnsactivationfunctiongumbel.md): An activation function that returns random numbers from the Gumbel distribution.
- [BNNSActivationFunctionGumbelMax](../bnnsactivationfunctiongumbelmax.md): An activation function that returns random numbers from the Gumbel distribution.
- [BNNSActivationFunctionHardShrink](../bnnsactivationfunctionhardshrink.md): An activation function that returns zero when the absolute input is less than alpha, otherwise it returns its input.
- [BNNSActivationFunctionHardSigmoid](../bnnsactivationfunctionhardsigmoid.md): An activation function that returns the hard sigmoid function of its input.
- [BNNSActivationFunctionHardSwish](../bnnsactivationfunctionhardswish.md): An activation function that returns the hard swish function of its input.
- [BNNSActivationFunctionIntegerLinearSaturate](bnnsactivationfunctionintegerlinearsaturate.md): An activation function that returns an arithmetic shift, preserving sign.
