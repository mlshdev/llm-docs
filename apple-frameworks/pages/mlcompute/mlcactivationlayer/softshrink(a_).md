> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcactivationlayer/softshrink(a:)](https://developer.apple.com/documentation/mlcompute/mlcactivationlayer/softshrink(a:))

# softShrink(a:) (Swift)

**Framework:** ML Compute  
**Kind:** Type Method  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Creates an instance of a soft shrink activation layer using the lambda value you specify for the soft shrink formation.

## Declaration

```swift
class func softShrink(a: Float) -> Self
```

## Parameters

- `a`: The lambda value for the soft shrink formation.

<a id="return-value"></a>

## Return Value

A new `MLCActivationLayer` instance.

<a id="Discussion"></a>

## Discussion

The [softShrink(a:)](softshrink%28a_%29.md) factory type method creates an activation descriptor using [init(type:a:)](../mlcactivationdescriptor/init%28type_a_%29.md), where `type =` [MLCActivationType.softShrink](../mlcactivationtype/softshrink.md) and `a = lambda`, and passes that descriptor to [init(descriptor:)](init%28descriptor_%29.md).

## See Also

### Factory Methods

- [celu(a:)](celu%28a_%29.md): Deprecated. Creates an instance of a CELU activation layer using the alpha value you specify for the CELU formation.
- [clamp(min:max:)](clamp%28min_max_%29.md): Deprecated. Creates an instance of a clamp activation layer using the minimum and maximum values you specify for the clamp formation.
- [elu(a:)](elu%28a_%29.md): Deprecated. Creates an instance of an ELU activation layer using the alpha value you specify for the ELU formation.
- [hardShrink(a:)](hardshrink%28a_%29.md): Deprecated. Creates an instance of a hard shrink activation layer using the lambda value you specify for the hard shrink formation.
- [leakyReLU(negativeSlope:)](leakyrelu%28negativeslope_%29.md): Deprecated. Creates an instance of a leaky ReLU activation layer using the angle of the negative slope you specify.
- [linear(scale:bias:)](linear%28scale_bias_%29.md): Deprecated. Creates an instance of a linear activation layer using the scale factor and bias value you specify.
- [relun(a:b:)](relun%28a_b_%29.md): Deprecated. Creates an instance of a ReLUN activation layer using the alpha and beta values you specify.
- [softPlus(beta:)](softplus%28beta_%29.md): Deprecated. Creates an instance of a soft plus activation layer using the beta value you specify for the soft plus formation.
- [threshold(\_:replacement:)](threshold%28__replacement_%29.md): Deprecated. Creates an instance of a threshold activation layer using the threshold and replacement values you specify.

# softShrinkLayerWithA: (Objective-C)

**Framework:** ML Compute  
**Kind:** Type Method  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Creates an instance of a soft shrink activation layer using the lambda value you specify for the soft shrink formation.

## Declaration

```objectivec
+ (instancetype) softShrinkLayerWithA:(float) a;
```

## Parameters

- `a`: The lambda value for the soft shrink formation.

<a id="return-value"></a>

## Return Value

A new `MLCActivationLayer` instance.

<a id="Discussion"></a>

## Discussion

The [softShrinkLayerWithA:](softshrink%28a_%29.md) factory type method creates an activation descriptor using [descriptorWithType:a:](../mlcactivationdescriptor/init%28type_a_%29.md), where `type =` [MLCActivationTypeSoftShrink](../mlcactivationtype/softshrink.md) and `a = lambda`, and passes that descriptor to [layerWithDescriptor:](init%28descriptor_%29.md).

## See Also

### Factory Methods

- [celuLayerWithA:](celu%28a_%29.md): Deprecated. Creates an instance of a CELU activation layer using the alpha value you specify for the CELU formation.
- [clampLayerWithMinValue:maxValue:](clamp%28min_max_%29.md): Deprecated. Creates an instance of a clamp activation layer using the minimum and maximum values you specify for the clamp formation.
- [eluLayerWithA:](elu%28a_%29.md): Deprecated. Creates an instance of an ELU activation layer using the alpha value you specify for the ELU formation.
- [hardShrinkLayerWithA:](hardshrink%28a_%29.md): Deprecated. Creates an instance of a hard shrink activation layer using the lambda value you specify for the hard shrink formation.
- [leakyReLULayerWithNegativeSlope:](leakyrelu%28negativeslope_%29.md): Deprecated. Creates an instance of a leaky ReLU activation layer using the angle of the negative slope you specify.
- [linearLayerWithScale:bias:](linear%28scale_bias_%29.md): Deprecated. Creates an instance of a linear activation layer using the scale factor and bias value you specify.
- [relunLayerWithA:b:](relun%28a_b_%29.md): Deprecated. Creates an instance of a ReLUN activation layer using the alpha and beta values you specify.
- [softPlusLayerWithBeta:](softplus%28beta_%29.md): Deprecated. Creates an instance of a soft plus activation layer using the beta value you specify for the soft plus formation.
- [thresholdLayerWithThreshold:replacement:](threshold%28__replacement_%29.md): Deprecated. Creates an instance of a threshold activation layer using the threshold and replacement values you specify.
