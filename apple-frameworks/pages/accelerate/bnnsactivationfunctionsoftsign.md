> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsactivationfunctionsoftsign](https://developer.apple.com/documentation/accelerate/bnnsactivationfunctionsoftsign)

# BNNSActivationFunctionSoftsign (Swift)

**Framework:** Accelerate  
**Kind:** Global Variable  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

An activation function that returns the softsign function of its input.

## Declaration

```swift
var BNNSActivationFunctionSoftsign: BNNSActivationFunction { get }
```

<a id="Discussion"></a>

## Discussion

This constant defines an activation function that returns values using the following operation:

```c
x / (1 + abs(x))
```

The following illustrates the output that the activation function generates from inputs in the range `-10...10`:

![Graph that shows input values for the activation function on horizontal axis and its output values on vertical axis. ](https://developer.apple.com/images/com.apple.accelerate/media-3560508@2x.png)

## See Also

### Raw Values

- [init(\_:)](bnnsactivationfunction/init%28__%29.md)
- [init(rawValue:)](bnnsactivationfunction/init%28rawvalue_%29.md)
- [rawValue](bnnsactivationfunction/rawvalue.md)
- [BNNSActivationFunctionAbs](bnnsactivationfunctionabs.md): Deprecated.
- [BNNSActivationFunctionCELU](bnnsactivationfunctioncelu.md): An activation function that evaluates the continuously differentiable exponential linear units (CELU) on its input.
- [BNNSActivationFunctionClampedLeakyRectifiedLinear](bnnsactivationfunctionclampedleakyrectifiedlinear.md): An activation function that returns its input clamped to beta when that is greater than or equal to zero, otherwise it returns its input multiplied by alpha clamped to beta.
- [BNNSActivationFunctionELU](bnnsactivationfunctionelu.md): An activation function that evaluates the exponential linear units (ELU) on its input.
- [BNNSActivationFunctionErf](bnnsactivationfunctionerf.md)
- [BNNSActivationFunctionGELU](bnnsactivationfunctiongelu.md)
- [BNNSActivationFunctionGELUApproximation](bnnsactivationfunctiongeluapproximation.md): An activation function that evaluates the Gaussian error linear units (GELU) approximation on its input.
- [BNNSActivationFunctionGELUApproximation2](bnnsactivationfunctiongeluapproximation2.md): An activation function that provides a fast evaluation of the Gaussian error linear units (GELU) approximation on its input.
- [BNNSActivationFunctionGELUApproximationSigmoid](bnnsactivationfunctiongeluapproximationsigmoid.md)
- [BNNSActivationFunctionGumbel](bnnsactivationfunctiongumbel.md): An activation function that returns random numbers from the Gumbel distribution.
- [BNNSActivationFunctionGumbelMax](bnnsactivationfunctiongumbelmax.md): An activation function that returns random numbers from the Gumbel distribution.
- [BNNSActivationFunctionHardShrink](bnnsactivationfunctionhardshrink.md): An activation function that returns zero when the absolute input is less than alpha, otherwise it returns its input.

# BNNSActivationFunctionSoftsign (Objective-C)

**Framework:** Accelerate  
**Kind:** Enumeration Case  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

An activation function that returns the softsign function of its input.

## Declaration

```objectivec
BNNSActivationFunctionSoftsign
```

<a id="Discussion"></a>

## Discussion

This constant defines an activation function that returns values using the following operation:

```c
x / (1 + abs(x))
```

The following illustrates the output that the activation function generates from inputs in the range `-10...10`:

![Graph that shows input values for the activation function on horizontal axis and its output values on vertical axis. ](https://developer.apple.com/images/com.apple.accelerate/media-3560508@2x.png)

## See Also

### Raw Values

- [BNNSActivationFunctionCELU](bnnsactivationfunctioncelu.md): An activation function that evaluates the continuously differentiable exponential linear units (CELU) on its input.
- [BNNSActivationFunctionClamp](bnnsactivationfunction/bnnsactivationfunctionclamp.md): An activation function that returns its input clamped to the specified range.
- [BNNSActivationFunctionClampedLeakyRectifiedLinear](bnnsactivationfunctionclampedleakyrectifiedlinear.md): An activation function that returns its input clamped to beta when that is greater than or equal to zero, otherwise it returns its input multiplied by alpha clamped to beta.
- [BNNSActivationFunctionELU](bnnsactivationfunctionelu.md): An activation function that evaluates the exponential linear units (ELU) on its input.
- [BNNSActivationFunctionErf](bnnsactivationfunctionerf.md)
- [BNNSActivationFunctionGELU](bnnsactivationfunctiongelu.md)
- [BNNSActivationFunctionGELUApproximation](bnnsactivationfunctiongeluapproximation.md): An activation function that evaluates the Gaussian error linear units (GELU) approximation on its input.
- [BNNSActivationFunctionGELUApproximation2](bnnsactivationfunctiongeluapproximation2.md): An activation function that provides a fast evaluation of the Gaussian error linear units (GELU) approximation on its input.
- [BNNSActivationFunctionGELUApproximationSigmoid](bnnsactivationfunctiongeluapproximationsigmoid.md)
- [BNNSActivationFunctionGumbel](bnnsactivationfunctiongumbel.md): An activation function that returns random numbers from the Gumbel distribution.
- [BNNSActivationFunctionGumbelMax](bnnsactivationfunctiongumbelmax.md): An activation function that returns random numbers from the Gumbel distribution.
- [BNNSActivationFunctionHardShrink](bnnsactivationfunctionhardshrink.md): An activation function that returns zero when the absolute input is less than alpha, otherwise it returns its input.
- [BNNSActivationFunctionHardSigmoid](bnnsactivationfunctionhardsigmoid.md): An activation function that returns the hard sigmoid function of its input.
- [BNNSActivationFunctionHardSwish](bnnsactivationfunctionhardswish.md): An activation function that returns the hard swish function of its input.
- [BNNSActivationFunctionIntegerLinearSaturate](bnnsactivationfunction/bnnsactivationfunctionintegerlinearsaturate.md): An activation function that returns an arithmetic shift, preserving sign.
