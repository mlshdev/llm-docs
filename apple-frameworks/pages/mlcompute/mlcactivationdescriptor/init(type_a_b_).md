> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcactivationdescriptor/init(type:a:b:)](https://developer.apple.com/documentation/mlcompute/mlcactivationdescriptor/init(type:a:b:))

# init(type:a:b:) (Swift)

**Framework:** ML Compute  
**Kind:** Initializer  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Creates an activation descriptor with the activation type and parameters a and b that you specify.

## Declaration

```swift
convenience init?(type activationType: MLCActivationType, a: Float, b: Float)
```

## Parameters

- `activationType`: A type of activation function.
- `a`: Parameter a.
- `b`: Parameter b.

<a id="Discussion"></a>

## Discussion

Use this initializer to create one of the following activation descriptors:

- **Hard Sigmoid**: `f(x) = clamp((x * a) + b, 0, 1)`

Activation type: [MLCActivationType.hardSigmoid](../mlcactivationtype/hardsigmoid.md)

For common behavior, set `a` to `0.2` and `b` to `0.5`.

- **Hyperbolic tangent (TanH)**: `f(x) = a * tanh(b * x)`

Activation type: [MLCActivationType.tanh](../mlcactivationtype/tanh.md)

For common behavior, set `a` to `1.0` and `b` to `1.0`.

- **Linear**: `f(x) = a * x + b`

Activation type: [MLCActivationType.linear](../mlcactivationtype/linear.md)

For common behavior, set `a` to `1.0` and `b` to `0.0`.

- **Parametric Soft Plus**: `f(x) = a * log(1 + e^(b * x))`

Activation type: [MLCActivationType.softPlus](../mlcactivationtype/softplus.md)

For common behavior, set `a` to `1.0` and `b` to `1.0`.

- **ReLUN**: `f(x) = min((x >= 0 ? x : a * x), b)`

Activation type: [MLCActivationType.relun](../mlcactivationtype/relun.md)

For common behavior, set `a` to `0.0` and `b` to `6.0`.

- **Threshold**: `f(x) = x`, if `x > a`, else `b`, where:

`a = threshold`

`b = replacement`

Activation type: [MLCActivationType.threshold](../mlcactivationtype/threshold.md)

## See Also

### Creating Activation Descriptors

- [init(type:)](init%28type_%29.md): Deprecated. Creates an activation descriptor with the activation type you specify.
- [init(type:a:)](init%28type_a_%29.md): Deprecated. Creates an activation descriptor with the activation type and parameter a that you specify.
- [init(type:a:b:c:)](init%28type_a_b_c_%29.md): Deprecated. Creates an activation descriptor with the activation type and parameters a, b, and c that you specify.
- [MLCActivationType](../mlcactivationtype.md): Deprecated. An activation type that you specify for an activation descriptor.

# descriptorWithType:a:b: (Objective-C)

**Framework:** ML Compute  
**Kind:** Type Method  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Creates an activation descriptor with the activation type and parameters a and b that you specify.

## Declaration

```objectivec
+ (instancetype) descriptorWithType:(MLCActivationType) activationType a:(float) a b:(float) b;
```

## Parameters

- `activationType`: A type of activation function.
- `a`: Parameter a.
- `b`: Parameter b.

<a id="Discussion"></a>

## Discussion

Use this initializer to create one of the following activation descriptors:

- **Hard Sigmoid**: `f(x) = clamp((x * a) + b, 0, 1)`

Activation type: [MLCActivationTypeHardSigmoid](../mlcactivationtype/hardsigmoid.md)

For common behavior, set `a` to `0.2` and `b` to `0.5`.

- **Hyperbolic tangent (TanH)**: `f(x) = a * tanh(b * x)`

Activation type: [MLCActivationTypeTanh](../mlcactivationtype/tanh.md)

For common behavior, set `a` to `1.0` and `b` to `1.0`.

- **Linear**: `f(x) = a * x + b`

Activation type: [MLCActivationTypeLinear](../mlcactivationtype/linear.md)

For common behavior, set `a` to `1.0` and `b` to `0.0`.

- **Parametric Soft Plus**: `f(x) = a * log(1 + e^(b * x))`

Activation type: [MLCActivationTypeSoftPlus](../mlcactivationtype/softplus.md)

For common behavior, set `a` to `1.0` and `b` to `1.0`.

- **ReLUN**: `f(x) = min((x >= 0 ? x : a * x), b)`

Activation type: [MLCActivationTypeReLUN](../mlcactivationtype/relun.md)

For common behavior, set `a` to `0.0` and `b` to `6.0`.

- **Threshold**: `f(x) = x`, if `x > a`, else `b`, where:

`a = threshold`

`b = replacement`

Activation type: [MLCActivationTypeThreshold](../mlcactivationtype/threshold.md)

## See Also

### Creating Activation Descriptors

- [descriptorWithType:](init%28type_%29.md): Deprecated. Creates an activation descriptor with the activation type you specify.
- [descriptorWithType:a:](init%28type_a_%29.md): Deprecated. Creates an activation descriptor with the activation type and parameter a that you specify.
- [descriptorWithType:a:b:c:](init%28type_a_b_c_%29.md): Deprecated. Creates an activation descriptor with the activation type and parameters a, b, and c that you specify.
- [MLCActivationType](../mlcactivationtype.md): Deprecated. An activation type that you specify for an activation descriptor.
