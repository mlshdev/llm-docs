> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcactivationdescriptor/init(type:)](https://developer.apple.com/documentation/mlcompute/mlcactivationdescriptor/init(type:))

# init(type:) (Swift)

**Framework:** ML Compute  
**Kind:** Initializer  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Creates an activation descriptor with the activation type you specify.

## Declaration

```swift
convenience init?(type activationType: MLCActivationType)
```

## Parameters

- `activationType`: A type of activation function.

<a id="Discussion"></a>

## Discussion

Use this initializer to create one of the following activation descriptors:

- **Absolute**: `f(x) = fabs(x)`

Activation type: [MLCActivationType.absolute](../mlcactivationtype/absolute.md)

- **GELU**: `f(x) = x * CDF(x)`

Activation type: [MLCActivationType.gelu](../mlcactivationtype/gelu.md)

- **Hard Swish**: `f(x) = 0, if x <= -3`

`f(x) = x, if x >= +3`

`f(x) = x * (x + 3)/6`

Activation type: [MLCActivationType.hardSwish](../mlcactivationtype/hardswish.md)

- **Identity**: `f(x) = x`

Activation type: [MLCActivationType.none](../mlcactivationtype/none.md)

- **LogSigmoid**: `f(x) = log(1 / (1 + exp(-x)))`

Activation type: [MLCActivationType.logSigmoid](../mlcactivationtype/logsigmoid.md)

- **Parametric Soft Sign**: `f(x) = x / (1 + abs(x))`

Activation type: [MLCActivationType.softSign](../mlcactivationtype/softsign.md)

- **SELU**: `f(x) = scale * (max(0, x) + min(0, α * (exp(x)−1)))`, where:

`α = 1.6732632423543772848170429916717`

`scale = 1.0507009873554804934193349852946`

Activation type: [MLCActivationType.selu](../mlcactivationtype/selu.md)

- **Sigmoid**: `f(x) = 1 / (1 + e⁻ˣ)`

Activation type: [MLCActivationType.sigmoid](../mlcactivationtype/sigmoid.md)

- **TanhShrink**: `f(x) = x - tanh(x)`

Activation type: [MLCActivationType.tanhShrink](../mlcactivationtype/tanhshrink.md)

## See Also

### Creating Activation Descriptors

- [init(type:a:)](init%28type_a_%29.md): Deprecated. Creates an activation descriptor with the activation type and parameter a that you specify.
- [init(type:a:b:)](init%28type_a_b_%29.md): Deprecated. Creates an activation descriptor with the activation type and parameters a and b that you specify.
- [init(type:a:b:c:)](init%28type_a_b_c_%29.md): Deprecated. Creates an activation descriptor with the activation type and parameters a, b, and c that you specify.
- [MLCActivationType](../mlcactivationtype.md): Deprecated. An activation type that you specify for an activation descriptor.

# descriptorWithType: (Objective-C)

**Framework:** ML Compute  
**Kind:** Type Method  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Creates an activation descriptor with the activation type you specify.

## Declaration

```objectivec
+ (instancetype) descriptorWithType:(MLCActivationType) activationType;
```

## Parameters

- `activationType`: A type of activation function.

<a id="Discussion"></a>

## Discussion

Use this initializer to create one of the following activation descriptors:

- **Absolute**: `f(x) = fabs(x)`

Activation type: [MLCActivationTypeAbsolute](../mlcactivationtype/absolute.md)

- **GELU**: `f(x) = x * CDF(x)`

Activation type: [MLCActivationTypeGELU](../mlcactivationtype/gelu.md)

- **Hard Swish**: `f(x) = 0, if x <= -3`

`f(x) = x, if x >= +3`

`f(x) = x * (x + 3)/6`

Activation type: [MLCActivationTypeHardSwish](../mlcactivationtype/hardswish.md)

- **Identity**: `f(x) = x`

Activation type: [MLCActivationTypeNone](../mlcactivationtype/none.md)

- **LogSigmoid**: `f(x) = log(1 / (1 + exp(-x)))`

Activation type: [MLCActivationTypeLogSigmoid](../mlcactivationtype/logsigmoid.md)

- **Parametric Soft Sign**: `f(x) = x / (1 + abs(x))`

Activation type: [MLCActivationTypeSoftSign](../mlcactivationtype/softsign.md)

- **SELU**: `f(x) = scale * (max(0, x) + min(0, α * (exp(x)−1)))`, where:

`α = 1.6732632423543772848170429916717`

`scale = 1.0507009873554804934193349852946`

Activation type: [MLCActivationTypeSELU](../mlcactivationtype/selu.md)

- **Sigmoid**: `f(x) = 1 / (1 + e⁻ˣ)`

Activation type: [MLCActivationTypeSigmoid](../mlcactivationtype/sigmoid.md)

- **TanhShrink**: `f(x) = x - tanh(x)`

Activation type: [MLCActivationTypeTanhShrink](../mlcactivationtype/tanhshrink.md)

## See Also

### Creating Activation Descriptors

- [descriptorWithType:a:](init%28type_a_%29.md): Deprecated. Creates an activation descriptor with the activation type and parameter a that you specify.
- [descriptorWithType:a:b:](init%28type_a_b_%29.md): Deprecated. Creates an activation descriptor with the activation type and parameters a and b that you specify.
- [descriptorWithType:a:b:c:](init%28type_a_b_c_%29.md): Deprecated. Creates an activation descriptor with the activation type and parameters a, b, and c that you specify.
- [MLCActivationType](../mlcactivationtype.md): Deprecated. An activation type that you specify for an activation descriptor.
