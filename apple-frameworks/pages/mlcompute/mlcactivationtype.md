> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcactivationtype](https://developer.apple.com/documentation/mlcompute/mlcactivationtype)

# MLCActivationType (Swift)

**Framework:** ML Compute  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

An activation type that you specify for an activation descriptor.

## Declaration

```swift
enum MLCActivationType
```

## Topics

### Enumeration Cases

- [MLCActivationType.absolute](mlcactivationtype/absolute.md): Deprecated. An activation type that implements the absolute activation function.
- [MLCActivationType.celu](mlcactivationtype/celu.md): Deprecated. An activation type that implements the CELU activation function.
- [MLCActivationType.clamp](mlcactivationtype/clamp.md): Deprecated. An activation type that implements the clamp activation function.
- [MLCActivationType.elu](mlcactivationtype/elu.md): Deprecated. An activation type that implements the exponential linear unit activation function.
- [MLCActivationType.gelu](mlcactivationtype/gelu.md): Deprecated. An activation type that implements the gaussian error linear unit activation function.
- [MLCActivationType.hardShrink](mlcactivationtype/hardshrink.md): Deprecated. An activation type that implements the hard shrink activation function.
- [MLCActivationType.hardSigmoid](mlcactivationtype/hardsigmoid.md): Deprecated. An activation type that implements the hard sigmoid activation function.
- [MLCActivationType.hardSwish](mlcactivationtype/hardswish.md): Deprecated. An activation type that implements the hard swish activation function.
- [MLCActivationType.linear](mlcactivationtype/linear.md): Deprecated. An activation type that implements the linear activation function.
- [MLCActivationType.logSigmoid](mlcactivationtype/logsigmoid.md): Deprecated. An activation type that implements the log sigmoid activation function.
- [MLCActivationType.none](mlcactivationtype/none.md): Deprecated. An activation type that implements the identity function.
- [MLCActivationType.relu](mlcactivationtype/relu.md): Deprecated. An activation type that implements the rectified linear unit activation function.
- [MLCActivationType.relun](mlcactivationtype/relun.md): Deprecated. An activation type that implements the ReLUN activation function.
- [MLCActivationType.selu](mlcactivationtype/selu.md): Deprecated. An activation type that implements the scaled exponential linear unit activation function.
- [MLCActivationType.sigmoid](mlcactivationtype/sigmoid.md): Deprecated. An activation type that implements the sigmoid activation function.
- [MLCActivationType.softPlus](mlcactivationtype/softplus.md): Deprecated. An activation type that implements the soft plus activation function.
- [MLCActivationType.softShrink](mlcactivationtype/softshrink.md): Deprecated. An activation type that implements the soft shrink activation function.
- [MLCActivationType.softSign](mlcactivationtype/softsign.md): Deprecated. An activation type that implements the parametric soft sign activation function.
- [MLCActivationType.tanh](mlcactivationtype/tanh.md): Deprecated. An activation type that implements the hyperbolic tangent activation function.
- [MLCActivationType.tanhShrink](mlcactivationtype/tanhshrink.md): Deprecated. An activation type that implements the hyperbolic tangent shrink activation function.
- [MLCActivationType.threshold](mlcactivationtype/threshold.md): Deprecated. An activation type that implements the threshold activation function.
- [debugDescription](mlcactivationtype/debugdescription.md): A textual description of the activation type, suitable for debugging.

### Initializers

- [init(rawValue:)](mlcactivationtype/init%28rawvalue_%29.md): Deprecated.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating Activation Descriptors

- [init(type:)](mlcactivationdescriptor/init%28type_%29.md): Deprecated. Creates an activation descriptor with the activation type you specify.
- [init(type:a:)](mlcactivationdescriptor/init%28type_a_%29.md): Deprecated. Creates an activation descriptor with the activation type and parameter a that you specify.
- [init(type:a:b:)](mlcactivationdescriptor/init%28type_a_b_%29.md): Deprecated. Creates an activation descriptor with the activation type and parameters a and b that you specify.
- [init(type:a:b:c:)](mlcactivationdescriptor/init%28type_a_b_c_%29.md): Deprecated. Creates an activation descriptor with the activation type and parameters a, b, and c that you specify.

# MLCActivationType (Objective-C)

**Framework:** ML Compute  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+

An activation type that you specify for an activation descriptor.

## Declaration

```objectivec
enum MLCActivationType : int32_t;
```

## Topics

### Enumeration Cases

- [MLCActivationTypeAbsolute](mlcactivationtype/absolute.md): Deprecated. An activation type that implements the absolute activation function.
- [MLCActivationTypeCELU](mlcactivationtype/celu.md): Deprecated. An activation type that implements the CELU activation function.
- [MLCActivationTypeClamp](mlcactivationtype/clamp.md): Deprecated. An activation type that implements the clamp activation function.
- [MLCActivationTypeELU](mlcactivationtype/elu.md): Deprecated. An activation type that implements the exponential linear unit activation function.
- [MLCActivationTypeGELU](mlcactivationtype/gelu.md): Deprecated. An activation type that implements the gaussian error linear unit activation function.
- [MLCActivationTypeHardShrink](mlcactivationtype/hardshrink.md): Deprecated. An activation type that implements the hard shrink activation function.
- [MLCActivationTypeHardSigmoid](mlcactivationtype/hardsigmoid.md): Deprecated. An activation type that implements the hard sigmoid activation function.
- [MLCActivationTypeHardSwish](mlcactivationtype/hardswish.md): Deprecated. An activation type that implements the hard swish activation function.
- [MLCActivationTypeLinear](mlcactivationtype/linear.md): Deprecated. An activation type that implements the linear activation function.
- [MLCActivationTypeLogSigmoid](mlcactivationtype/logsigmoid.md): Deprecated. An activation type that implements the log sigmoid activation function.
- [MLCActivationTypeNone](mlcactivationtype/none.md): Deprecated. An activation type that implements the identity function.
- [MLCActivationTypeReLU](mlcactivationtype/relu.md): Deprecated. An activation type that implements the rectified linear unit activation function.
- [MLCActivationTypeReLUN](mlcactivationtype/relun.md): Deprecated. An activation type that implements the ReLUN activation function.
- [MLCActivationTypeSELU](mlcactivationtype/selu.md): Deprecated. An activation type that implements the scaled exponential linear unit activation function.
- [MLCActivationTypeSigmoid](mlcactivationtype/sigmoid.md): Deprecated. An activation type that implements the sigmoid activation function.
- [MLCActivationTypeSoftPlus](mlcactivationtype/softplus.md): Deprecated. An activation type that implements the soft plus activation function.
- [MLCActivationTypeSoftShrink](mlcactivationtype/softshrink.md): Deprecated. An activation type that implements the soft shrink activation function.
- [MLCActivationTypeSoftSign](mlcactivationtype/softsign.md): Deprecated. An activation type that implements the parametric soft sign activation function.
- [MLCActivationTypeTanh](mlcactivationtype/tanh.md): Deprecated. An activation type that implements the hyperbolic tangent activation function.
- [MLCActivationTypeTanhShrink](mlcactivationtype/tanhshrink.md): Deprecated. An activation type that implements the hyperbolic tangent shrink activation function.
- [MLCActivationTypeThreshold](mlcactivationtype/threshold.md): Deprecated. An activation type that implements the threshold activation function.
- [MLCActivationTypeCount](mlcactivationtype/mlcactivationtypecount.md): The count of activation types.
- [MLCActivationTypeDebugDescription](mlcactivationtype/debugdescription.md): A textual description of the activation type, suitable for debugging.

## See Also

### Creating Activation Descriptors

- [descriptorWithType:](mlcactivationdescriptor/init%28type_%29.md): Deprecated. Creates an activation descriptor with the activation type you specify.
- [descriptorWithType:a:](mlcactivationdescriptor/init%28type_a_%29.md): Deprecated. Creates an activation descriptor with the activation type and parameter a that you specify.
- [descriptorWithType:a:b:](mlcactivationdescriptor/init%28type_a_b_%29.md): Deprecated. Creates an activation descriptor with the activation type and parameters a and b that you specify.
- [descriptorWithType:a:b:c:](mlcactivationdescriptor/init%28type_a_b_c_%29.md): Deprecated. Creates an activation descriptor with the activation type and parameters a, b, and c that you specify.
