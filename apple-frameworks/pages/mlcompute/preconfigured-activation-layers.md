> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/preconfigured-activation-layers](https://developer.apple.com/documentation/mlcompute/preconfigured-activation-layers)

# Preconfigured Activation Layers (Swift)

**Framework:** ML Compute  
**Kind:** API Collection

Obtain a preconfigured activation layer with common behavior.

<a id="overview"></a>

## Overview

Use a factory to receive a preconfigured activation layer for various activation types.

## Topics

### Factory Methods

- [celu(a:)](mlcactivationlayer/celu%28a_%29.md): Deprecated. Creates an instance of a CELU activation layer using the alpha value you specify for the CELU formation.
- [clamp(min:max:)](mlcactivationlayer/clamp%28min_max_%29.md): Deprecated. Creates an instance of a clamp activation layer using the minimum and maximum values you specify for the clamp formation.
- [elu(a:)](mlcactivationlayer/elu%28a_%29.md): Deprecated. Creates an instance of an ELU activation layer using the alpha value you specify for the ELU formation.
- [hardShrink(a:)](mlcactivationlayer/hardshrink%28a_%29.md): Deprecated. Creates an instance of a hard shrink activation layer using the lambda value you specify for the hard shrink formation.
- [leakyReLU(negativeSlope:)](mlcactivationlayer/leakyrelu%28negativeslope_%29.md): Deprecated. Creates an instance of a leaky ReLU activation layer using the angle of the negative slope you specify.
- [linear(scale:bias:)](mlcactivationlayer/linear%28scale_bias_%29.md): Deprecated. Creates an instance of a linear activation layer using the scale factor and bias value you specify.
- [relun(a:b:)](mlcactivationlayer/relun%28a_b_%29.md): Deprecated. Creates an instance of a ReLUN activation layer using the alpha and beta values you specify.
- [softPlus(beta:)](mlcactivationlayer/softplus%28beta_%29.md): Deprecated. Creates an instance of a soft plus activation layer using the beta value you specify for the soft plus formation.
- [softShrink(a:)](mlcactivationlayer/softshrink%28a_%29.md): Deprecated. Creates an instance of a soft shrink activation layer using the lambda value you specify for the soft shrink formation.
- [threshold(\_:replacement:)](mlcactivationlayer/threshold%28__replacement_%29.md): Deprecated. Creates an instance of a threshold activation layer using the threshold and replacement values you specify.

### Factory Properties

- [absolute](mlcactivationlayer/absolute.md): Deprecated. Creates an instance of an absolute activation layer.
- [celu](mlcactivationlayer/celu.md): Deprecated. Creates an instance of a CELU activation layer.
- [elu](mlcactivationlayer/elu.md): Deprecated. Creates an instance of a parametric ELU activation layer.
- [gelu](mlcactivationlayer/gelu.md): Deprecated. Creates an instance of a GELU activation layer.
- [hardShrink](mlcactivationlayer/hardshrink.md): Deprecated. Creates an instance of a hard shrink activation layer.
- [hardSigmoid](mlcactivationlayer/hardsigmoid.md): Deprecated. Creates an instance of a hard sigmoid activation layer.
- [hardSwish](mlcactivationlayer/hardswish.md): Deprecated. Creates an instance of a hard swish activation layer.
- [leakyReLU](mlcactivationlayer/leakyrelu.md): Deprecated. Creates an instance of a leaky ReLU activation layer.
- [logSigmoid](mlcactivationlayer/logsigmoid.md): Deprecated. Creates an instance of a log sigmoid activation layer.
- [relu](mlcactivationlayer/relu.md): Deprecated. Creates an instance of a ReLU activation layer.
- [relu6](mlcactivationlayer/relu6.md): Deprecated. Creates an instance of a ReLU6 activation layer.
- [selu](mlcactivationlayer/selu.md): Deprecated. Creates an instance of a SELU activation layer.
- [sigmoid](mlcactivationlayer/sigmoid.md): Deprecated. Creates an instance of a sigmoid activation layer.
- [softPlus](mlcactivationlayer/softplus.md): Deprecated. Creates an instance of a parametric soft plus activation layer.
- [softShrink](mlcactivationlayer/softshrink.md): Deprecated. Creates an instance of a soft shrink activation layer.
- [softSign](mlcactivationlayer/softsign.md): Deprecated. Creates an instance of a parametric soft sign activation layer.
- [tanh](mlcactivationlayer/tanh.md): Deprecated. Creates an instance of a hyperbolic tangent activation layer.
- [tanhShrink](mlcactivationlayer/tanhshrink.md): Deprecated. Creates an instance of a tanh shrink activation layer.

## See Also

### Creating Activation Layers

- [init(descriptor:)](mlcactivationlayer/init%28descriptor_%29.md): Deprecated. Creates an activation layer with the descriptor you specify.
- [MLCActivationDescriptor](mlcactivationdescriptor.md): Deprecated. A configuration object you use to create an activation layer.

# Preconfigured Activation Layers (Objective-C)

**Framework:** ML Compute  
**Kind:** API Collection

Obtain a preconfigured activation layer with common behavior.

<a id="overview"></a>

## Overview

Use a factory to receive a preconfigured activation layer for various activation types.

## Topics

### Factory Methods

- [celuLayerWithA:](mlcactivationlayer/celu%28a_%29.md): Deprecated. Creates an instance of a CELU activation layer using the alpha value you specify for the CELU formation.
- [clampLayerWithMinValue:maxValue:](mlcactivationlayer/clamp%28min_max_%29.md): Deprecated. Creates an instance of a clamp activation layer using the minimum and maximum values you specify for the clamp formation.
- [eluLayerWithA:](mlcactivationlayer/elu%28a_%29.md): Deprecated. Creates an instance of an ELU activation layer using the alpha value you specify for the ELU formation.
- [hardShrinkLayerWithA:](mlcactivationlayer/hardshrink%28a_%29.md): Deprecated. Creates an instance of a hard shrink activation layer using the lambda value you specify for the hard shrink formation.
- [leakyReLULayerWithNegativeSlope:](mlcactivationlayer/leakyrelu%28negativeslope_%29.md): Deprecated. Creates an instance of a leaky ReLU activation layer using the angle of the negative slope you specify.
- [linearLayerWithScale:bias:](mlcactivationlayer/linear%28scale_bias_%29.md): Deprecated. Creates an instance of a linear activation layer using the scale factor and bias value you specify.
- [relunLayerWithA:b:](mlcactivationlayer/relun%28a_b_%29.md): Deprecated. Creates an instance of a ReLUN activation layer using the alpha and beta values you specify.
- [softPlusLayerWithBeta:](mlcactivationlayer/softplus%28beta_%29.md): Deprecated. Creates an instance of a soft plus activation layer using the beta value you specify for the soft plus formation.
- [softShrinkLayerWithA:](mlcactivationlayer/softshrink%28a_%29.md): Deprecated. Creates an instance of a soft shrink activation layer using the lambda value you specify for the soft shrink formation.
- [thresholdLayerWithThreshold:replacement:](mlcactivationlayer/threshold%28__replacement_%29.md): Deprecated. Creates an instance of a threshold activation layer using the threshold and replacement values you specify.

### Factory Properties

- [absoluteLayer](mlcactivationlayer/absolute.md): Deprecated. Creates an instance of an absolute activation layer.
- [celuLayer](mlcactivationlayer/celu.md): Deprecated. Creates an instance of a CELU activation layer.
- [eluLayer](mlcactivationlayer/elu.md): Deprecated. Creates an instance of a parametric ELU activation layer.
- [geluLayer](mlcactivationlayer/gelu.md): Deprecated. Creates an instance of a GELU activation layer.
- [hardShrinkLayer](mlcactivationlayer/hardshrink.md): Deprecated. Creates an instance of a hard shrink activation layer.
- [hardSigmoidLayer](mlcactivationlayer/hardsigmoid.md): Deprecated. Creates an instance of a hard sigmoid activation layer.
- [hardSwishLayer](mlcactivationlayer/hardswish.md): Deprecated. Creates an instance of a hard swish activation layer.
- [leakyReLULayer](mlcactivationlayer/leakyrelu.md): Deprecated. Creates an instance of a leaky ReLU activation layer.
- [logSigmoidLayer](mlcactivationlayer/logsigmoid.md): Deprecated. Creates an instance of a log sigmoid activation layer.
- [reluLayer](mlcactivationlayer/relu.md): Deprecated. Creates an instance of a ReLU activation layer.
- [relu6Layer](mlcactivationlayer/relu6.md): Deprecated. Creates an instance of a ReLU6 activation layer.
- [seluLayer](mlcactivationlayer/selu.md): Deprecated. Creates an instance of a SELU activation layer.
- [sigmoidLayer](mlcactivationlayer/sigmoid.md): Deprecated. Creates an instance of a sigmoid activation layer.
- [softPlusLayer](mlcactivationlayer/softplus.md): Deprecated. Creates an instance of a parametric soft plus activation layer.
- [softShrinkLayer](mlcactivationlayer/softshrink.md): Deprecated. Creates an instance of a soft shrink activation layer.
- [softSignLayer](mlcactivationlayer/softsign.md): Deprecated. Creates an instance of a parametric soft sign activation layer.
- [tanhLayer](mlcactivationlayer/tanh.md): Deprecated. Creates an instance of a hyperbolic tangent activation layer.
- [tanhShrinkLayer](mlcactivationlayer/tanhshrink.md): Deprecated. Creates an instance of a tanh shrink activation layer.

## See Also

### Creating Activation Layers

- [layerWithDescriptor:](mlcactivationlayer/init%28descriptor_%29.md): Deprecated. Creates an activation layer with the descriptor you specify.
- [MLCActivationDescriptor](mlcactivationdescriptor.md): Deprecated. A configuration object you use to create an activation layer.
