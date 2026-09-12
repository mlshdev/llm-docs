> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcactivationlayer/hardswish](https://developer.apple.com/documentation/mlcompute/mlcactivationlayer/hardswish)

# hardSwish (Swift)

**Framework:** ML Compute  
**Kind:** Type Property  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Creates an instance of a hard swish activation layer.

## Declaration

```swift
class var hardSwish: MLCActivationLayer { get }
```

<a id="Discussion"></a>

## Discussion

This factory creates an activation descriptor using [init(type:)](../mlcactivationdescriptor/init%28type_%29.md), where `type =` [MLCActivationType.hardSwish](../mlcactivationtype/hardswish.md), and passes that descriptor to [init(descriptor:)](init%28descriptor_%29.md).

## See Also

### Factory Properties

- [absolute](absolute.md): Deprecated. Creates an instance of an absolute activation layer.
- [celu](celu.md): Deprecated. Creates an instance of a CELU activation layer.
- [elu](elu.md): Deprecated. Creates an instance of a parametric ELU activation layer.
- [gelu](gelu.md): Deprecated. Creates an instance of a GELU activation layer.
- [hardShrink](hardshrink.md): Deprecated. Creates an instance of a hard shrink activation layer.
- [hardSigmoid](hardsigmoid.md): Deprecated. Creates an instance of a hard sigmoid activation layer.
- [leakyReLU](leakyrelu.md): Deprecated. Creates an instance of a leaky ReLU activation layer.
- [logSigmoid](logsigmoid.md): Deprecated. Creates an instance of a log sigmoid activation layer.
- [relu](relu.md): Deprecated. Creates an instance of a ReLU activation layer.
- [relu6](relu6.md): Deprecated. Creates an instance of a ReLU6 activation layer.
- [selu](selu.md): Deprecated. Creates an instance of a SELU activation layer.
- [sigmoid](sigmoid.md): Deprecated. Creates an instance of a sigmoid activation layer.
- [softPlus](softplus.md): Deprecated. Creates an instance of a parametric soft plus activation layer.
- [softShrink](softshrink.md): Deprecated. Creates an instance of a soft shrink activation layer.
- [softSign](softsign.md): Deprecated. Creates an instance of a parametric soft sign activation layer.

# hardSwishLayer (Objective-C)

**Framework:** ML Compute  
**Kind:** Type Property  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Creates an instance of a hard swish activation layer.

## Declaration

```objectivec
@property (class, nonatomic, readonly) MLCActivationLayer * hardSwishLayer;
```

<a id="Discussion"></a>

## Discussion

This factory creates an activation descriptor using [descriptorWithType:](../mlcactivationdescriptor/init%28type_%29.md), where `type =` [MLCActivationTypeHardSwish](../mlcactivationtype/hardswish.md), and passes that descriptor to [layerWithDescriptor:](init%28descriptor_%29.md).

## See Also

### Factory Properties

- [absoluteLayer](absolute.md): Deprecated. Creates an instance of an absolute activation layer.
- [celuLayer](celu.md): Deprecated. Creates an instance of a CELU activation layer.
- [eluLayer](elu.md): Deprecated. Creates an instance of a parametric ELU activation layer.
- [geluLayer](gelu.md): Deprecated. Creates an instance of a GELU activation layer.
- [hardShrinkLayer](hardshrink.md): Deprecated. Creates an instance of a hard shrink activation layer.
- [hardSigmoidLayer](hardsigmoid.md): Deprecated. Creates an instance of a hard sigmoid activation layer.
- [leakyReLULayer](leakyrelu.md): Deprecated. Creates an instance of a leaky ReLU activation layer.
- [logSigmoidLayer](logsigmoid.md): Deprecated. Creates an instance of a log sigmoid activation layer.
- [reluLayer](relu.md): Deprecated. Creates an instance of a ReLU activation layer.
- [relu6Layer](relu6.md): Deprecated. Creates an instance of a ReLU6 activation layer.
- [seluLayer](selu.md): Deprecated. Creates an instance of a SELU activation layer.
- [sigmoidLayer](sigmoid.md): Deprecated. Creates an instance of a sigmoid activation layer.
- [softPlusLayer](softplus.md): Deprecated. Creates an instance of a parametric soft plus activation layer.
- [softShrinkLayer](softshrink.md): Deprecated. Creates an instance of a soft shrink activation layer.
- [softSignLayer](softsign.md): Deprecated. Creates an instance of a parametric soft sign activation layer.
