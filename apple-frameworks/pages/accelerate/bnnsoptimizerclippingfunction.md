> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsoptimizerclippingfunction](https://developer.apple.com/documentation/accelerate/bnnsoptimizerclippingfunction)

# BNNSOptimizerClippingFunction (Swift)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Constants that describe clipping functions.

## Declaration

```swift
struct BNNSOptimizerClippingFunction
```

## Topics

### Clipping Functions

- [init(\_:)](bnnsoptimizerclippingfunction/init%28__%29.md): Creates a new instance with the specified raw value.
- [init(rawValue:)](bnnsoptimizerclippingfunction/init%28rawvalue_%29.md): Creates a new instance with the specified raw value.
- [rawValue](bnnsoptimizerclippingfunction/rawvalue.md): The corresponding value of the raw type.
- [BNNSOptimizerClippingNone](bnnsoptimizerclippingnone.md): A constant that specifes no clipping.
- [BNNSOptimizerClippingByValue](bnnsoptimizerclippingbyvalue.md): A constant that specifes clipping to minimum and maximum values.
- [BNNSOptimizerClippingByNorm](bnnsoptimizerclippingbynorm.md): A constant that specifes clipping to a maximum Euclidean norm.
- [BNNSOptimizerClippingByGlobalNorm](bnnsoptimizerclippingbyglobalnorm.md): A constant that specifes clipping to a maximum global Euclidean norm.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Instance Properties

- [learning_rate](bnnsoptimizeradamwithclippingfields/learning_rate.md): Deprecated. A value that specifies the learning rate.
- [beta1](bnnsoptimizeradamwithclippingfields/beta1.md): Deprecated. A value that specifies the first moment constant in the range 0 to 1.
- [beta2](bnnsoptimizeradamwithclippingfields/beta2.md): Deprecated. A value that specifies the second moment constant in the range 0 to 1.
- [time_step](bnnsoptimizeradamwithclippingfields/time_step.md): Deprecated. A value that’s at least 1 and represents the optimizer’s current time.
- [epsilon](bnnsoptimizeradamwithclippingfields/epsilon.md): Deprecated. An addition for the division in the parameter update stage.
- [gradient_scale](bnnsoptimizeradamwithclippingfields/gradient_scale.md): Deprecated. A value that specifies the gradient scaling factor.
- [regularization_scale](bnnsoptimizeradamwithclippingfields/regularization_scale.md): Deprecated. A value that specifies the regularization scaling factor.
- [regularization_func](bnnsoptimizeradamwithclippingfields/regularization_func.md): Deprecated. The variable that specifies the regularization function.
- [clipping_func](bnnsoptimizeradamwithclippingfields/clipping_func.md): Deprecated. The clipping function.
- [clip_gradients_min](bnnsoptimizeradamwithclippingfields/clip_gradients_min.md): Deprecated. The minimum clipping value for clipping by value.
- [clip_gradients_max](bnnsoptimizeradamwithclippingfields/clip_gradients_max.md): Deprecated. The maximum clipping value for clipping by value.
- [clip_gradients_max_norm](bnnsoptimizeradamwithclippingfields/clip_gradients_max_norm.md): Deprecated. The maximum Euclidean norm for clipping by norm and clipping by global norm.
- [clip_gradients_use_norm](bnnsoptimizeradamwithclippingfields/clip_gradients_use_norm.md): Deprecated. An optional value for a known Euclidean norm for clipping by global norm.

# BNNSOptimizerClippingFunction (Objective-C)

**Framework:** Accelerate  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Constants that describe clipping functions.

## Declaration

```objectivec
typedef enum { ... } BNNSOptimizerClippingFunction;
```

## Topics

### Clipping Functions

- [BNNSOptimizerClippingNone](bnnsoptimizerclippingnone.md): A constant that specifes no clipping.
- [BNNSOptimizerClippingByValue](bnnsoptimizerclippingbyvalue.md): A constant that specifes clipping to minimum and maximum values.
- [BNNSOptimizerClippingByNorm](bnnsoptimizerclippingbynorm.md): A constant that specifes clipping to a maximum Euclidean norm.
- [BNNSOptimizerClippingByGlobalNorm](bnnsoptimizerclippingbyglobalnorm.md): A constant that specifes clipping to a maximum global Euclidean norm.

## See Also

### Instance Properties

- [learning_rate](bnnsoptimizeradamwithclippingfields/learning_rate.md): Deprecated. A value that specifies the learning rate.
- [beta1](bnnsoptimizeradamwithclippingfields/beta1.md): Deprecated. A value that specifies the first moment constant in the range 0 to 1.
- [beta2](bnnsoptimizeradamwithclippingfields/beta2.md): Deprecated. A value that specifies the second moment constant in the range 0 to 1.
- [time_step](bnnsoptimizeradamwithclippingfields/time_step.md): Deprecated. A value that’s at least 1 and represents the optimizer’s current time.
- [epsilon](bnnsoptimizeradamwithclippingfields/epsilon.md): Deprecated. An addition for the division in the parameter update stage.
- [gradient_scale](bnnsoptimizeradamwithclippingfields/gradient_scale.md): Deprecated. A value that specifies the gradient scaling factor.
- [regularization_scale](bnnsoptimizeradamwithclippingfields/regularization_scale.md): Deprecated. A value that specifies the regularization scaling factor.
- [regularization_func](bnnsoptimizeradamwithclippingfields/regularization_func.md): Deprecated. The variable that specifies the regularization function.
- [clipping_func](bnnsoptimizeradamwithclippingfields/clipping_func.md): Deprecated. The clipping function.
- [clip_gradients_min](bnnsoptimizeradamwithclippingfields/clip_gradients_min.md): Deprecated. The minimum clipping value for clipping by value.
- [clip_gradients_max](bnnsoptimizeradamwithclippingfields/clip_gradients_max.md): Deprecated. The maximum clipping value for clipping by value.
- [clip_gradients_max_norm](bnnsoptimizeradamwithclippingfields/clip_gradients_max_norm.md): Deprecated. The maximum Euclidean norm for clipping by norm and clipping by global norm.
- [clip_gradients_use_norm](bnnsoptimizeradamwithclippingfields/clip_gradients_use_norm.md): Deprecated. An optional value for a known Euclidean norm for clipping by global norm.
