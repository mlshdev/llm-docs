> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcactivationdescriptor/init(type:a:)](https://developer.apple.com/documentation/mlcompute/mlcactivationdescriptor/init(type:a:))

# init(type:a:) (Swift)

**Framework:** ML Compute  
**Kind:** Initializer  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Creates an activation descriptor with the activation type and parameter a that you specify.

## Declaration

```swift
convenience init?(type activationType: MLCActivationType, a: Float)
```

## Parameters

- `activationType`: A type of activation function.
- `a`: Parameter a.

<a id="Discussion"></a>

## Discussion

Use this initializer to create one of the following activation descriptors:

- **CELU**: `f(x) = max(0, x) + min(0, a * (exp(x / a) − 1))`

Activation type: [MLCActivationType.celu](../mlcactivationtype/celu.md)

For common behavior, set `a` to `1.0`.

- **HardShrink**: `f(x) = x`, if `x > a` or `x < −a`, else `0`

Activation type: [MLCActivationType.hardShrink](../mlcactivationtype/hardshrink.md)

For common behavior, set `a` to `0.5`.

- **Parametric ELU**: `f(x) = x >= 0 ? x : a * (exp(x) - 1)`

Activation type: [MLCActivationType.elu](../mlcactivationtype/elu.md)

For common behavior, set `a` to `1.0`.

- **ReLU**: `f(x) = x >= 0 ? x : a * x`

Activation type: [MLCActivationType.relu](../mlcactivationtype/relu.md)

This is also referred to as Leaky ReLU. Some literature defines classical ReLU as `max(0, x)`. If you want this common behavior, set `a` to `0.0`.

- **SoftShrink**: `f(x) = x - a`, if `x > a, x + a`, if `x < −a`, else `0`

Activation type: [MLCActivationType.softShrink](../mlcactivationtype/softshrink.md)

For common behavior, set `a` to `0.5`.

## See Also

### Creating Activation Descriptors

- [init(type:)](init%28type_%29.md): Deprecated. Creates an activation descriptor with the activation type you specify.
- [init(type:a:b:)](init%28type_a_b_%29.md): Deprecated. Creates an activation descriptor with the activation type and parameters a and b that you specify.
- [init(type:a:b:c:)](init%28type_a_b_c_%29.md): Deprecated. Creates an activation descriptor with the activation type and parameters a, b, and c that you specify.
- [MLCActivationType](../mlcactivationtype.md): Deprecated. An activation type that you specify for an activation descriptor.

# descriptorWithType:a: (Objective-C)

**Framework:** ML Compute  
**Kind:** Type Method  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Creates an activation descriptor with the activation type and parameter a that you specify.

## Declaration

```objectivec
+ (instancetype) descriptorWithType:(MLCActivationType) activationType a:(float) a;
```

## Parameters

- `activationType`: A type of activation function.
- `a`: Parameter a.

<a id="Discussion"></a>

## Discussion

Use this initializer to create one of the following activation descriptors:

- **CELU**: `f(x) = max(0, x) + min(0, a * (exp(x / a) − 1))`

Activation type: [MLCActivationTypeCELU](../mlcactivationtype/celu.md)

For common behavior, set `a` to `1.0`.

- **HardShrink**: `f(x) = x`, if `x > a` or `x < −a`, else `0`

Activation type: [MLCActivationTypeHardShrink](../mlcactivationtype/hardshrink.md)

For common behavior, set `a` to `0.5`.

- **Parametric ELU**: `f(x) = x >= 0 ? x : a * (exp(x) - 1)`

Activation type: [MLCActivationTypeELU](../mlcactivationtype/elu.md)

For common behavior, set `a` to `1.0`.

- **ReLU**: `f(x) = x >= 0 ? x : a * x`

Activation type: [MLCActivationTypeReLU](../mlcactivationtype/relu.md)

This is also referred to as Leaky ReLU. Some literature defines classical ReLU as `max(0, x)`. If you want this common behavior, set `a` to `0.0`.

- **SoftShrink**: `f(x) = x - a`, if `x > a, x + a`, if `x < −a`, else `0`

Activation type: [MLCActivationTypeSoftShrink](../mlcactivationtype/softshrink.md)

For common behavior, set `a` to `0.5`.

## See Also

### Creating Activation Descriptors

- [descriptorWithType:](init%28type_%29.md): Deprecated. Creates an activation descriptor with the activation type you specify.
- [descriptorWithType:a:b:](init%28type_a_b_%29.md): Deprecated. Creates an activation descriptor with the activation type and parameters a and b that you specify.
- [descriptorWithType:a:b:c:](init%28type_a_b_c_%29.md): Deprecated. Creates an activation descriptor with the activation type and parameters a, b, and c that you specify.
- [MLCActivationType](../mlcactivationtype.md): Deprecated. An activation type that you specify for an activation descriptor.
