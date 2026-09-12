> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcactivationtype/threshold](https://developer.apple.com/documentation/mlcompute/mlcactivationtype/threshold)

# MLCActivationType.threshold (Swift)

**Framework:** ML Compute  
**Kind:** Case  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

An activation type that implements the threshold activation function.

## Declaration

```swift
case threshold
```

<a id="Discussion"></a>

## Discussion

This activation type implements the following function:

`f(x) = x`, if `x > a`, else `b`, where:

`a = threshold`

`b = replacement`

## See Also

### Enumeration Cases

- [MLCActivationType.absolute](absolute.md): Deprecated. An activation type that implements the absolute activation function.
- [MLCActivationType.celu](celu.md): Deprecated. An activation type that implements the CELU activation function.
- [MLCActivationType.clamp](clamp.md): Deprecated. An activation type that implements the clamp activation function.
- [MLCActivationType.elu](elu.md): Deprecated. An activation type that implements the exponential linear unit activation function.
- [MLCActivationType.gelu](gelu.md): Deprecated. An activation type that implements the gaussian error linear unit activation function.
- [MLCActivationType.hardShrink](hardshrink.md): Deprecated. An activation type that implements the hard shrink activation function.
- [MLCActivationType.hardSigmoid](hardsigmoid.md): Deprecated. An activation type that implements the hard sigmoid activation function.
- [MLCActivationType.hardSwish](hardswish.md): Deprecated. An activation type that implements the hard swish activation function.
- [MLCActivationType.linear](linear.md): Deprecated. An activation type that implements the linear activation function.
- [MLCActivationType.logSigmoid](logsigmoid.md): Deprecated. An activation type that implements the log sigmoid activation function.
- [MLCActivationType.none](none.md): Deprecated. An activation type that implements the identity function.
- [MLCActivationType.relu](relu.md): Deprecated. An activation type that implements the rectified linear unit activation function.
- [MLCActivationType.relun](relun.md): Deprecated. An activation type that implements the ReLUN activation function.
- [MLCActivationType.selu](selu.md): Deprecated. An activation type that implements the scaled exponential linear unit activation function.
- [MLCActivationType.sigmoid](sigmoid.md): Deprecated. An activation type that implements the sigmoid activation function.

# MLCActivationTypeThreshold (Objective-C)

**Framework:** ML Compute  
**Kind:** Enumeration Case  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+

An activation type that implements the threshold activation function.

## Declaration

```objectivec
MLCActivationTypeThreshold
```

<a id="Discussion"></a>

## Discussion

This activation type implements the following function:

`f(x) = x`, if `x > a`, else `b`, where:

`a = threshold`

`b = replacement`

## See Also

### Enumeration Cases

- [MLCActivationTypeAbsolute](absolute.md): Deprecated. An activation type that implements the absolute activation function.
- [MLCActivationTypeCELU](celu.md): Deprecated. An activation type that implements the CELU activation function.
- [MLCActivationTypeClamp](clamp.md): Deprecated. An activation type that implements the clamp activation function.
- [MLCActivationTypeELU](elu.md): Deprecated. An activation type that implements the exponential linear unit activation function.
- [MLCActivationTypeGELU](gelu.md): Deprecated. An activation type that implements the gaussian error linear unit activation function.
- [MLCActivationTypeHardShrink](hardshrink.md): Deprecated. An activation type that implements the hard shrink activation function.
- [MLCActivationTypeHardSigmoid](hardsigmoid.md): Deprecated. An activation type that implements the hard sigmoid activation function.
- [MLCActivationTypeHardSwish](hardswish.md): Deprecated. An activation type that implements the hard swish activation function.
- [MLCActivationTypeLinear](linear.md): Deprecated. An activation type that implements the linear activation function.
- [MLCActivationTypeLogSigmoid](logsigmoid.md): Deprecated. An activation type that implements the log sigmoid activation function.
- [MLCActivationTypeNone](none.md): Deprecated. An activation type that implements the identity function.
- [MLCActivationTypeReLU](relu.md): Deprecated. An activation type that implements the rectified linear unit activation function.
- [MLCActivationTypeReLUN](relun.md): Deprecated. An activation type that implements the ReLUN activation function.
- [MLCActivationTypeSELU](selu.md): Deprecated. An activation type that implements the scaled exponential linear unit activation function.
- [MLCActivationTypeSigmoid](sigmoid.md): Deprecated. An activation type that implements the sigmoid activation function.
