> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsoptimizeradamwithclippingfields](https://developer.apple.com/documentation/accelerate/bnnsoptimizeradamwithclippingfields)

# BNNSOptimizerAdamWithClippingFields (Swift)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS 14.0+ (deprecated in 18.0) · iPadOS 14.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · tvOS 14.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 7.0+ (deprecated in 11.0)

A structure that contains the fields of an Adam or AdamW optimizer that optionally clips the gradient by value or by norm.

> Use BNNSGraph\* APIs

## Declaration

```swift
struct BNNSOptimizerAdamWithClippingFields
```

## Topics

### Initializers

- [init(learning_rate:beta1:beta2:time_step:epsilon:gradient_scale:regularization_scale:regularization_func:clipping_func:clip_gradients_min:clip_gradients_max:clip_gradients_max_norm:clip_gradients_use_norm:)](bnnsoptimizeradamwithclippingfields/init%28learning_rate_beta1_beta2_time_step_epsilon_gradient_scale_regularization_scale_regularization_func_clipping_func_clip_gradients_min_clip_gradients_max_clip_gradients_max_norm~137ac554.md): Deprecated. Returns a new Adam or AdamW optimizer fields structure from the specified parameters.
- [init()](bnnsoptimizeradamwithclippingfields/init%28%29.md): Deprecated. Returns a new Adam or AdamW optimizer fields structure.

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
- [BNNSOptimizerClippingFunction](bnnsoptimizerclippingfunction.md): Constants that describe clipping functions.
- [clip_gradients_min](bnnsoptimizeradamwithclippingfields/clip_gradients_min.md): Deprecated. The minimum clipping value for clipping by value.
- [clip_gradients_max](bnnsoptimizeradamwithclippingfields/clip_gradients_max.md): Deprecated. The maximum clipping value for clipping by value.
- [clip_gradients_max_norm](bnnsoptimizeradamwithclippingfields/clip_gradients_max_norm.md): Deprecated. The maximum Euclidean norm for clipping by norm and clipping by global norm.
- [clip_gradients_use_norm](bnnsoptimizeradamwithclippingfields/clip_gradients_use_norm.md): Deprecated. An optional value for a known Euclidean norm for clipping by global norm.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Optimizers

- [BNNS.AdamOptimizer](bnns/adamoptimizer.md): Deprecated. An optimizer that uses the Adam optimization algorithm.
- [BNNS.AdamWOptimizer](bnns/adamwoptimizer.md): Deprecated. An optimizer that uses the AdamW optimization algorithm.
- [BNNS.RMSPropOptimizer](bnns/rmspropoptimizer.md): Deprecated. An optimizer that uses the root mean square propagation (RMSProp) optimization method.
- [BNNS.SGDMomentumOptimizer](bnns/sgdmomentumoptimizer.md): Deprecated. An optimizer that uses the stochastic gradient descent (SGD) with the momentum optimization method.
- [BNNSOptimizer](bnnsoptimizer.md): Deprecated.
- [BNNSOptimizerRegularizationFunction](bnnsoptimizerregularizationfunction.md): A structure that contains optimizer regularization functions.
- [BNNSOptimizerAdamFields](bnnsoptimizeradamfields.md): Deprecated. A structure that contains the fields of an Adam optimizer.
- [BNNSOptimizerRMSPropFields](bnnsoptimizerrmspropfields.md): Deprecated. A structure that contains the fields of a root mean square propagation (RMSProp) optimizer.
- [BNNSOptimizerRMSPropWithClippingFields](bnnsoptimizerrmspropwithclippingfields.md): Deprecated. A structure that contains the fields of a root mean square propagation (RMSProp) optimizer that optionally clips the gradient by value or by norm.
- [BNNSOptimizerSGDMomentumFields](bnnsoptimizersgdmomentumfields.md): Deprecated. A structure that contains the fields of a stochastic gradient descent (SGD) with momentum optimizer.
- [BNNSOptimizerSGDMomentumWithClippingFields](bnnsoptimizersgdmomentumwithclippingfields.md): Deprecated. A structure that contains the fields of a stochastic gradient descent (SGD) with momentum optimizer that optionally clips the gradient by value or by norm.
- [BNNSOptimizerSGDMomentumVariant](bnnsoptimizersgdmomentumvariant.md): Constants that define SGD momentum variants.
- [BNNSOptimizerStep(\_:\_:\_:\_:\_:\_:\_:)](bnnsoptimizerstep%28______________%29.md): Deprecated. Applies a single optimization step to one or more parameters.
- [BNNSOptimizerFunction](bnnsoptimizerfunction.md): A structure that contains optimizer functions.

# BNNSOptimizerAdamWithClippingFields (Objective-C)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A structure that contains the fields of an Adam or AdamW optimizer that optionally clips the gradient by value or by norm.

## Declaration

```objectivec
typedef struct { ... } BNNSOptimizerAdamWithClippingFields;
```

## Topics

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
- [BNNSOptimizerClippingFunction](bnnsoptimizerclippingfunction.md): Constants that describe clipping functions.
- [clip_gradients_min](bnnsoptimizeradamwithclippingfields/clip_gradients_min.md): Deprecated. The minimum clipping value for clipping by value.
- [clip_gradients_max](bnnsoptimizeradamwithclippingfields/clip_gradients_max.md): Deprecated. The maximum clipping value for clipping by value.
- [clip_gradients_max_norm](bnnsoptimizeradamwithclippingfields/clip_gradients_max_norm.md): Deprecated. The maximum Euclidean norm for clipping by norm and clipping by global norm.
- [clip_gradients_use_norm](bnnsoptimizeradamwithclippingfields/clip_gradients_use_norm.md): Deprecated. An optional value for a known Euclidean norm for clipping by global norm.

## See Also

### Optimizers

- [BNNSOptimizerRegularizationFunction](bnnsoptimizerregularizationfunction.md): A structure that contains optimizer regularization functions.
- [BNNSOptimizerAdamFields](bnnsoptimizeradamfields.md): Deprecated. A structure that contains the fields of an Adam optimizer.
- [BNNSOptimizerRMSPropFields](bnnsoptimizerrmspropfields.md): Deprecated. A structure that contains the fields of a root mean square propagation (RMSProp) optimizer.
- [BNNSOptimizerRMSPropWithClippingFields](bnnsoptimizerrmspropwithclippingfields.md): Deprecated. A structure that contains the fields of a root mean square propagation (RMSProp) optimizer that optionally clips the gradient by value or by norm.
- [BNNSOptimizerSGDMomentumFields](bnnsoptimizersgdmomentumfields.md): Deprecated. A structure that contains the fields of a stochastic gradient descent (SGD) with momentum optimizer.
- [BNNSOptimizerSGDMomentumWithClippingFields](bnnsoptimizersgdmomentumwithclippingfields.md): Deprecated. A structure that contains the fields of a stochastic gradient descent (SGD) with momentum optimizer that optionally clips the gradient by value or by norm.
- [BNNSOptimizerSGDMomentumVariant](bnnsoptimizersgdmomentumvariant.md): Constants that define SGD momentum variants.
- [BNNSOptimizerStep](bnnsoptimizerstep%28______________%29.md): Deprecated. Applies a single optimization step to one or more parameters.
- [BNNSOptimizerFunction](bnnsoptimizerfunction.md): A structure that contains optimizer functions.
