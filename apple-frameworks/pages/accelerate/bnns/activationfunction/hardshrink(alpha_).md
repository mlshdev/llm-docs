> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnns/activationfunction/hardshrink(alpha:)](https://developer.apple.com/documentation/accelerate/bnns/activationfunction/hardshrink(alpha:))

# BNNS.ActivationFunction.hardShrink(alpha:)

**Framework:** Accelerate  
**Kind:** Case  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

An activation function that returns zero when the absolute input is less than alpha, otherwise it returns its input.

> Use the BNNSGraph API instead.

## Declaration

```swift
case hardShrink(alpha: Float)
```

<a id="Discussion"></a>

## Discussion

This constant defines an activation function that returns values using the following operation:

```c
abs(x) < abs(alpha)
    0
else
    x
```

The following illustrates the output that the activation function generates from inputs in the range `-10...10` and an `alpha` of `5`:

![ Graph that shows input values for the activation function on horizontal axis and its output values on vertical axis.](https://developer.apple.com/images/com.apple.accelerate/media-3654616@2x.png)

## See Also

### Activation Functions

- [BNNS.ActivationFunction.abs](abs.md): Deprecated. An activation function that returns the absolute value of its input.
- [BNNS.ActivationFunction.celu(alpha:)](celu%28alpha_%29.md): Deprecated. An activation function that evaluates the continuously differentiable exponential linear units (CELU) on its input.
- [BNNS.ActivationFunction.clamp(bounds:)](clamp%28bounds_%29.md): Deprecated. An activation function that returns its input clamped to the specified range.
- [BNNS.ActivationFunction.clampedLeakyRectifiedLinear(alpha:beta:)](clampedleakyrectifiedlinear%28alpha_beta_%29.md): Deprecated. An activation function that returns its input clamped to beta when that is greater than or equal to zero, otherwise it returns its input multiplied by alpha clamped to beta.
- [BNNS.ActivationFunction.elu(alpha:)](elu%28alpha_%29.md): Deprecated. An activation function that evaluates the exponential linear units (ELU) on its input.
- [BNNS.ActivationFunction.geluApproximation(alpha:beta:)](geluapproximation%28alpha_beta_%29.md): Deprecated. An activation function that evaluates the Gaussian error linear units (GELU) approximation on its input.
- [BNNS.ActivationFunction.geluApproximation2(alpha:beta:)](geluapproximation2%28alpha_beta_%29.md): Deprecated. An activation function that provides a fast evaluation of the Gaussian error linear units (GELU) approximation on its input.
- [BNNS.ActivationFunction.gumbel(alpha:beta:)](gumbel%28alpha_beta_%29.md): Deprecated. An activation function that returns random numbers from the Gumbel distribution.
- [BNNS.ActivationFunction.gumbelMax(alpha:beta:)](gumbelmax%28alpha_beta_%29.md): Deprecated. An activation function that returns random numbers from the Gumbel distribution.
- [BNNS.ActivationFunction.hardSigmoid(alpha:beta:)](hardsigmoid%28alpha_beta_%29.md): Deprecated. An activation function that returns the hard sigmoid function of its input.
- [BNNS.ActivationFunction.hardSwish(alpha:beta:)](hardswish%28alpha_beta_%29.md): Deprecated. An activation function that returns the hard swish function of its input.
- [BNNS.ActivationFunction.identity](identity.md): Deprecated. An activation function that returns its input.
- [BNNS.ActivationFunction.leakyRectifiedLinear(alpha:)](leakyrectifiedlinear%28alpha_%29.md): Deprecated. An activation function that returns its input when that is greater than or equal to zero, otherwise it returns its input multiplied by a specified value.
- [BNNS.ActivationFunction.linear(alpha:)](linear%28alpha_%29.md): Deprecated. An activation function that returns its input multiplied by a specified value.
- [BNNS.ActivationFunction.linearWithBias(alpha:beta:)](linearwithbias%28alpha_beta_%29.md): Deprecated. An activation function that returns its input multiplied by a scale and added to a bias.
