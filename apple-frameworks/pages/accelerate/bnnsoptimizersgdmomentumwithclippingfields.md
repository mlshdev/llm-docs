> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsoptimizersgdmomentumwithclippingfields](https://developer.apple.com/documentation/accelerate/bnnsoptimizersgdmomentumwithclippingfields)

# BNNSOptimizerSGDMomentumWithClippingFields (Swift)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS 14.0+ (deprecated in 18.0) · iPadOS 14.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · tvOS 14.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 7.0+ (deprecated in 11.0)

A structure that contains the fields of a stochastic gradient descent (SGD) with momentum optimizer that optionally clips the gradient by value or by norm.

> Use BNNSGraph\* APIs

## Declaration

```swift
struct BNNSOptimizerSGDMomentumWithClippingFields
```

## Topics

### Initializers

- [init(learning_rate:momentum:gradient_scale:regularization_scale:nesterov:regularization_func:sgd_momentum_variant:clipping_func:clip_gradients_min:clip_gradients_max:clip_gradients_max_norm:clip_gradients_use_norm:)](bnnsoptimizersgdmomentumwithclippingfields/init%28learning_rate_momentum_gradient_scale_regularization_scale_nesterov_regularization_func_sgd_momentum_variant_clipping_func_clip_gradients_min_clip_gradients_max_clip_gradients~39b13c05.md): Deprecated. Returns a new SGD with momentum optimizer fields structure from the specified parameters.
- [init()](bnnsoptimizersgdmomentumwithclippingfields/init%28%29.md): Deprecated. Returns a new SGD with momentum optimizer fields structure.

### Instance Properties

- [learning_rate](bnnsoptimizersgdmomentumwithclippingfields/learning_rate.md): Deprecated. A value that specifies the learning rate.
- [momentum](bnnsoptimizersgdmomentumwithclippingfields/momentum.md): Deprecated. The rate of momentum decay.
- [gradient_scale](bnnsoptimizersgdmomentumwithclippingfields/gradient_scale.md): Deprecated. A value that specifies the gradient scaling factor.
- [regularization_scale](bnnsoptimizersgdmomentumwithclippingfields/regularization_scale.md): Deprecated. A value that specifies the regularization scaling factor.
- [nesterov](bnnsoptimizersgdmomentumwithclippingfields/nesterov.md): Deprecated. A Boolean value that specifies whether to use Nesterov momentum update.
- [regularization_func](bnnsoptimizersgdmomentumwithclippingfields/regularization_func.md): Deprecated. The variable that specifies the regularization function.
- [sgd_momentum_variant](bnnsoptimizersgdmomentumwithclippingfields/sgd_momentum_variant.md): Deprecated. The variable that specifies the momentum variant.
- [clipping_func](bnnsoptimizersgdmomentumwithclippingfields/clipping_func.md): Deprecated. The clipping function.
- [BNNSOptimizerClippingFunction](bnnsoptimizerclippingfunction.md): Constants that describe clipping functions.
- [clip_gradients_min](bnnsoptimizersgdmomentumwithclippingfields/clip_gradients_min.md): Deprecated. The minimum clipping value for clipping by value.
- [clip_gradients_max](bnnsoptimizersgdmomentumwithclippingfields/clip_gradients_max.md): Deprecated. The maximum clipping value for clipping by value.
- [clip_gradients_max_norm](bnnsoptimizersgdmomentumwithclippingfields/clip_gradients_max_norm.md): Deprecated. The maximum Euclidean norm for clipping by norm and clipping by global norm.
- [clip_gradients_use_norm](bnnsoptimizersgdmomentumwithclippingfields/clip_gradients_use_norm.md): Deprecated. An optional value for a known Euclidean norm for clipping by global norm.

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
- [BNNSOptimizerAdamWithClippingFields](bnnsoptimizeradamwithclippingfields.md): Deprecated. A structure that contains the fields of an Adam or AdamW optimizer that optionally clips the gradient by value or by norm.
- [BNNSOptimizerRMSPropFields](bnnsoptimizerrmspropfields.md): Deprecated. A structure that contains the fields of a root mean square propagation (RMSProp) optimizer.
- [BNNSOptimizerRMSPropWithClippingFields](bnnsoptimizerrmspropwithclippingfields.md): Deprecated. A structure that contains the fields of a root mean square propagation (RMSProp) optimizer that optionally clips the gradient by value or by norm.
- [BNNSOptimizerSGDMomentumFields](bnnsoptimizersgdmomentumfields.md): Deprecated. A structure that contains the fields of a stochastic gradient descent (SGD) with momentum optimizer.
- [BNNSOptimizerSGDMomentumVariant](bnnsoptimizersgdmomentumvariant.md): Constants that define SGD momentum variants.
- [BNNSOptimizerStep(\_:\_:\_:\_:\_:\_:\_:)](bnnsoptimizerstep%28______________%29.md): Deprecated. Applies a single optimization step to one or more parameters.
- [BNNSOptimizerFunction](bnnsoptimizerfunction.md): A structure that contains optimizer functions.

# BNNSOptimizerSGDMomentumWithClippingFields (Objective-C)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A structure that contains the fields of a stochastic gradient descent (SGD) with momentum optimizer that optionally clips the gradient by value or by norm.

## Declaration

```objectivec
typedef struct { ... } BNNSOptimizerSGDMomentumWithClippingFields;
```

## Topics

### Instance Properties

- [learning_rate](bnnsoptimizersgdmomentumwithclippingfields/learning_rate.md): Deprecated. A value that specifies the learning rate.
- [momentum](bnnsoptimizersgdmomentumwithclippingfields/momentum.md): Deprecated. The rate of momentum decay.
- [gradient_scale](bnnsoptimizersgdmomentumwithclippingfields/gradient_scale.md): Deprecated. A value that specifies the gradient scaling factor.
- [regularization_scale](bnnsoptimizersgdmomentumwithclippingfields/regularization_scale.md): Deprecated. A value that specifies the regularization scaling factor.
- [nesterov](bnnsoptimizersgdmomentumwithclippingfields/nesterov.md): Deprecated. A Boolean value that specifies whether to use Nesterov momentum update.
- [regularization_func](bnnsoptimizersgdmomentumwithclippingfields/regularization_func.md): Deprecated. The variable that specifies the regularization function.
- [sgd_momentum_variant](bnnsoptimizersgdmomentumwithclippingfields/sgd_momentum_variant.md): Deprecated. The variable that specifies the momentum variant.
- [clipping_func](bnnsoptimizersgdmomentumwithclippingfields/clipping_func.md): Deprecated. The clipping function.
- [BNNSOptimizerClippingFunction](bnnsoptimizerclippingfunction.md): Constants that describe clipping functions.
- [clip_gradients_min](bnnsoptimizersgdmomentumwithclippingfields/clip_gradients_min.md): Deprecated. The minimum clipping value for clipping by value.
- [clip_gradients_max](bnnsoptimizersgdmomentumwithclippingfields/clip_gradients_max.md): Deprecated. The maximum clipping value for clipping by value.
- [clip_gradients_max_norm](bnnsoptimizersgdmomentumwithclippingfields/clip_gradients_max_norm.md): Deprecated. The maximum Euclidean norm for clipping by norm and clipping by global norm.
- [clip_gradients_use_norm](bnnsoptimizersgdmomentumwithclippingfields/clip_gradients_use_norm.md): Deprecated. An optional value for a known Euclidean norm for clipping by global norm.

## See Also

### Optimizers

- [BNNSOptimizerRegularizationFunction](bnnsoptimizerregularizationfunction.md): A structure that contains optimizer regularization functions.
- [BNNSOptimizerAdamFields](bnnsoptimizeradamfields.md): Deprecated. A structure that contains the fields of an Adam optimizer.
- [BNNSOptimizerAdamWithClippingFields](bnnsoptimizeradamwithclippingfields.md): Deprecated. A structure that contains the fields of an Adam or AdamW optimizer that optionally clips the gradient by value or by norm.
- [BNNSOptimizerRMSPropFields](bnnsoptimizerrmspropfields.md): Deprecated. A structure that contains the fields of a root mean square propagation (RMSProp) optimizer.
- [BNNSOptimizerRMSPropWithClippingFields](bnnsoptimizerrmspropwithclippingfields.md): Deprecated. A structure that contains the fields of a root mean square propagation (RMSProp) optimizer that optionally clips the gradient by value or by norm.
- [BNNSOptimizerSGDMomentumFields](bnnsoptimizersgdmomentumfields.md): Deprecated. A structure that contains the fields of a stochastic gradient descent (SGD) with momentum optimizer.
- [BNNSOptimizerSGDMomentumVariant](bnnsoptimizersgdmomentumvariant.md): Constants that define SGD momentum variants.
- [BNNSOptimizerStep](bnnsoptimizerstep%28______________%29.md): Deprecated. Applies a single optimization step to one or more parameters.
- [BNNSOptimizerFunction](bnnsoptimizerfunction.md): A structure that contains optimizer functions.
