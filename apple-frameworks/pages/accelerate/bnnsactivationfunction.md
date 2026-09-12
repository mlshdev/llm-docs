> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsactivationfunction](https://developer.apple.com/documentation/accelerate/bnnsactivationfunction)

# BNNSActivationFunction (Swift)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Constants that describe activation functions.

## Declaration

```swift
struct BNNSActivationFunction
```

## Topics

### Activation Functions

- [abs](bnnsactivationfunction/abs.md): Deprecated. An activation function that returns the absolute value of its input.
- [clamp](bnnsactivationfunction/clamp.md): Deprecated. An activation function that returns its input clamped to a specified range.
- [identity](bnnsactivationfunction/identity.md): Deprecated. An activation function that returns its input.
- [integerLinearSaturate](bnnsactivationfunction/integerlinearsaturate.md): Deprecated. An activation function that returns an arithmetic shift, preserving sign.
- [integerLinearSaturatePerChannel](bnnsactivationfunction/integerlinearsaturateperchannel.md): Deprecated. An activation function that returns an arithmetic shift, preserving sign for each channel.
- [leakyRectifiedLinear](bnnsactivationfunction/leakyrectifiedlinear.md): Deprecated. An activation function that returns its input when that is greater than or equal to zero, otherwise it returns its input multiplied by a specified value.
- [linear](bnnsactivationfunction/linear.md): Deprecated. An activation function that returns its input multiplied by a specified value.
- [rectifiedLinear](bnnsactivationfunction/rectifiedlinear.md): Deprecated. An activation function that returns its input when that is greater than or equal to zero, otherwise it returns zero.
- [scaledTanh](bnnsactivationfunction/scaledtanh.md): Deprecated. An activation function that returns the scaled hyperbolic tangent of its input.
- [sigmoid](bnnsactivationfunction/sigmoid.md): Deprecated. An activation function that returns the sigmoid function of its input.
- [softmax](bnnsactivationfunction/softmax.md): Deprecated. An activation function that returns the softmax function of its input.
- [tanh](bnnsactivationfunction/tanh.md): Deprecated. An activation function that returns the hyperbolic tangent of its input.

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
- [BNNSActivationFunctionHardSigmoid](bnnsactivationfunctionhardsigmoid.md): An activation function that returns the hard sigmoid function of its input.
- [BNNSActivationFunctionHardSwish](bnnsactivationfunctionhardswish.md): An activation function that returns the hard swish function of its input.
- [BNNSActivationFunctionIdentity](bnnsactivationfunctionidentity.md): Deprecated.
- [BNNSActivationFunctionLeakyRectifiedLinear](bnnsactivationfunctionleakyrectifiedlinear.md): Deprecated.
- [BNNSActivationFunctionLinearWithBias](bnnsactivationfunctionlinearwithbias.md): An activation function that returns its input multiplied by a scale and added to a bias.
- [BNNSActivationFunctionLogSigmoid](bnnsactivationfunctionlogsigmoid.md): An activation function that returns the logarithm of the sigmoid function of its input.
- [BNNSActivationFunctionLogSoftmax](bnnsactivationfunctionlogsoftmax.md): An activation function that returns the logarithm of the softmax function of its input.
- [BNNSActivationFunctionPReLUPerChannel](bnnsactivationfunctionpreluperchannel.md): An activation function provides per-channel alpha values to Leaky Rectified Linear.
- [BNNSActivationFunctionRectifiedLinear](bnnsactivationfunctionrectifiedlinear.md): Deprecated.
- [BNNSActivationFunctionReLU6](bnnsactivationfunctionrelu6.md)
- [BNNSActivationFunctionScaledTanh](bnnsactivationfunctionscaledtanh.md): Deprecated.
- [BNNSActivationFunctionSELU](bnnsactivationfunctionselu.md): An activation function that evaluates the scaled exponential linear units (SELU) on its input.
- [BNNSActivationFunctionSigmoid](bnnsactivationfunctionsigmoid.md): Deprecated.
- [BNNSActivationFunctionSiLU](bnnsactivationfunctionsilu.md): An activation function that returns the sigmoid linear unit (SiLU) function of its input.
- [BNNSActivationFunctionSoftplus](bnnsactivationfunctionsoftplus.md): An activation function that returns the softplus function of its input.
- [BNNSActivationFunctionSoftShrink](bnnsactivationfunctionsoftshrink.md): An activation function that returns zero when the absolute input is less than alpha, otherwise it returns its input minus alpha.
- [BNNSActivationFunctionSoftsign](bnnsactivationfunctionsoftsign.md): An activation function that returns the softsign function of its input.
- [BNNSActivationFunctionTanh](bnnsactivationfunctiontanh.md): Deprecated.
- [BNNSActivationFunctionTanhShrink](bnnsactivationfunctiontanhshrink.md): An activation function that returns its input minus the hyperbolic tangent of its input.
- [BNNSActivationFunctionThreshold](bnnsactivationfunctionthreshold.md): An activation function that returns beta if its input is less than a specified threshold, otherwise it returns its input.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Activation layers

- [BNNSFilterCreateVectorActivationLayer(\_:\_:\_:\_:)](bnnsfiltercreatevectoractivationlayer%28________%29.md): Deprecated.
- [BNNS.ActivationLayer](bnns/activationlayer.md): Deprecated. A layer object that wraps an activation filter and manages its deinitialization.
- [BNNSActivation](bnnsactivation.md): A set of parameters that describe common activation functions.
- [BNNSLayerParametersActivation](bnnslayerparametersactivation.md): Deprecated. A set of parameters that define an activation layer.
- [BNNSFilterCreateLayerActivation(\_:\_:)](bnnsfiltercreatelayeractivation%28____%29.md): Deprecated. Returns a new activation layer.
- [BNNSDirectApplyActivationBatch(\_:\_:\_:\_:\_:)](bnnsdirectapplyactivationbatch%28__________%29.md): Deprecated. Applies an activation filter to a set of input objects, writing out the result to a set of output objects.
- [applyActivation(activation:axes:input:output:batchSize:filterParameters:)](bnns/applyactivation%28activation_axes_input_output_batchsize_filterparameters_%29.md): Deprecated. Applies an activation function on the specified axes.
- [applyActivation(activation:input:output:batchSize:filterParameters:)](bnns/applyactivation%28activation_input_output_batchsize_filterparameters_%29.md): Deprecated. Applies the specified activation function.

# BNNSActivationFunction (Objective-C)

**Framework:** Accelerate  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Constants that describe activation functions.

## Declaration

```objectivec
typedef enum { ... } BNNSActivationFunction;
```

## Topics

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
- [BNNSActivationFunctionIntegerLinearSaturatePerChannel](bnnsactivationfunction/bnnsactivationfunctionintegerlinearsaturateperchannel.md): An activation function that returns an arithmetic shift, preserving sign for each channel.
- [BNNSActivationFunctionLinear](bnnsactivationfunction/bnnsactivationfunctionlinear.md): An activation function that returns its input multiplied by a specified value.
- [BNNSActivationFunctionLinearWithBias](bnnsactivationfunctionlinearwithbias.md): An activation function that returns its input multiplied by a scale and added to a bias.
- [BNNSActivationFunctionLogSigmoid](bnnsactivationfunctionlogsigmoid.md): An activation function that returns the logarithm of the sigmoid function of its input.
- [BNNSActivationFunctionLogSoftmax](bnnsactivationfunctionlogsoftmax.md): An activation function that returns the logarithm of the softmax function of its input.
- [BNNSActivationFunctionPReLUPerChannel](bnnsactivationfunctionpreluperchannel.md): An activation function provides per-channel alpha values to Leaky Rectified Linear.
- [BNNSActivationFunctionReLU6](bnnsactivationfunctionrelu6.md)
- [BNNSActivationFunctionSELU](bnnsactivationfunctionselu.md): An activation function that evaluates the scaled exponential linear units (SELU) on its input.
- [BNNSActivationFunctionSiLU](bnnsactivationfunctionsilu.md): An activation function that returns the sigmoid linear unit (SiLU) function of its input.
- [BNNSActivationFunctionSoftmax](bnnsactivationfunction/bnnsactivationfunctionsoftmax.md): An activation function that returns the softmax function of its input.
- [BNNSActivationFunctionSoftplus](bnnsactivationfunctionsoftplus.md): An activation function that returns the softplus function of its input.
- [BNNSActivationFunctionSoftShrink](bnnsactivationfunctionsoftshrink.md): An activation function that returns zero when the absolute input is less than alpha, otherwise it returns its input minus alpha.
- [BNNSActivationFunctionSoftsign](bnnsactivationfunctionsoftsign.md): An activation function that returns the softsign function of its input.
- [BNNSActivationFunctionTanhShrink](bnnsactivationfunctiontanhshrink.md): An activation function that returns its input minus the hyperbolic tangent of its input.
- [BNNSActivationFunctionThreshold](bnnsactivationfunctionthreshold.md): An activation function that returns beta if its input is less than a specified threshold, otherwise it returns its input.

### Enumeration Cases

- [BNNSActivationFunctionAbs](bnnsactivationfunction/bnnsactivationfunctionabs.md): An activation function that returns the absolute value of its input.
- [BNNSActivationFunctionIdentity](bnnsactivationfunction/bnnsactivationfunctionidentity.md): An activation function that returns its input.
- [BNNSActivationFunctionLeakyRectifiedLinear](bnnsactivationfunction/bnnsactivationfunctionleakyrectifiedlinear.md): An activation function that returns its input when that is greater than or equal to zero, otherwise it returns its input multiplied by a specified value.
- [BNNSActivationFunctionRectifiedLinear](bnnsactivationfunction/bnnsactivationfunctionrectifiedlinear.md): An activation function that returns its input when that is greater than or equal to zero, otherwise it returns zero.
- [BNNSActivationFunctionScaledTanh](bnnsactivationfunction/bnnsactivationfunctionscaledtanh.md): An activation function that returns the scaled hyperbolic tangent of its input.
- [BNNSActivationFunctionSigmoid](bnnsactivationfunction/bnnsactivationfunctionsigmoid.md): An activation function that returns the sigmoid function of its input.
- [BNNSActivationFunctionTanh](bnnsactivationfunction/bnnsactivationfunctiontanh.md): An activation function that returns the hyperbolic tangent of its input.

## See Also

### Activation layers

- [BNNSFilterCreateVectorActivationLayer](bnnsfiltercreatevectoractivationlayer%28________%29.md): Deprecated.
- [BNNSActivation](bnnsactivation.md): A set of parameters that describe common activation functions.
- [BNNSLayerParametersActivation](bnnslayerparametersactivation.md): Deprecated. A set of parameters that define an activation layer.
- [BNNSFilterCreateLayerActivation](bnnsfiltercreatelayeractivation%28____%29.md): Deprecated. Returns a new activation layer.
- [BNNSDirectApplyActivationBatch](bnnsdirectapplyactivationbatch%28__________%29.md): Deprecated. Applies an activation filter to a set of input objects, writing out the result to a set of output objects.
