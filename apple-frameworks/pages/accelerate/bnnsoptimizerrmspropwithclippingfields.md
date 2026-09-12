> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsoptimizerrmspropwithclippingfields](https://developer.apple.com/documentation/accelerate/bnnsoptimizerrmspropwithclippingfields)

# BNNSOptimizerRMSPropWithClippingFields (Swift)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS 14.0+ (deprecated in 18.0) · iPadOS 14.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · tvOS 14.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 7.0+ (deprecated in 11.0)

A structure that contains the fields of a root mean square propagation (RMSProp) optimizer that optionally clips the gradient by value or by norm.

> Use BNNSGraph\* APIs

## Declaration

```swift
struct BNNSOptimizerRMSPropWithClippingFields
```

## Topics

### Initializers

- [init(learning_rate:alpha:epsilon:centered:momentum:gradient_scale:regularization_scale:regularization_func:clipping_func:clip_gradients_min:clip_gradients_max:clip_gradients_max_norm:clip_gradients_use_norm:)](bnnsoptimizerrmspropwithclippingfields/init%28learning_rate_alpha_epsilon_centered_momentum_gradient_scale_regularization_scale_regularization_func_clipping_func_clip_gradients_min_clip_gradients_max_clip_gradients_max_no~84333f6c.md): Deprecated. Returns a new RMSProp optimizer fields structure from the specified parameters.
- [init()](bnnsoptimizerrmspropwithclippingfields/init%28%29.md): Deprecated. Returns a new RMSProp optimizer fields structure.

### Instance Properties

- [learning_rate](bnnsoptimizerrmspropwithclippingfields/learning_rate.md): Deprecated. A value that specifies the learning rate.
- [alpha](bnnsoptimizerrmspropwithclippingfields/alpha.md): Deprecated. A constant that specifies smoothing.
- [epsilon](bnnsoptimizerrmspropwithclippingfields/epsilon.md): Deprecated. A term that the optimizer adds to the denominator.
- [centered](bnnsoptimizerrmspropwithclippingfields/centered.md): Deprecated. A Boolean value that specifies whether to use the centered variant.
- [momentum](bnnsoptimizerrmspropwithclippingfields/momentum.md): Deprecated. The rate of momentum decay.
- [gradient_scale](bnnsoptimizerrmspropwithclippingfields/gradient_scale.md): Deprecated. A value that specifies the gradient scaling factor.
- [regularization_scale](bnnsoptimizerrmspropwithclippingfields/regularization_scale.md): Deprecated. A value that specifies the regularization scaling factor.
- [regularization_func](bnnsoptimizerrmspropwithclippingfields/regularization_func.md): Deprecated. The variable that specifies the regularization function.
- [clipping_func](bnnsoptimizerrmspropwithclippingfields/clipping_func.md): Deprecated. The clipping function.
- [BNNSOptimizerClippingFunction](bnnsoptimizerclippingfunction.md): Constants that describe clipping functions.
- [clip_gradients_min](bnnsoptimizerrmspropwithclippingfields/clip_gradients_min.md): Deprecated. The minimum clipping value for clipping by value.
- [clip_gradients_max](bnnsoptimizerrmspropwithclippingfields/clip_gradients_max.md): Deprecated. The maximum clipping value for clipping by value.
- [clip_gradients_max_norm](bnnsoptimizerrmspropwithclippingfields/clip_gradients_max_norm.md): Deprecated. The maximum Euclidean norm for clipping by norm and clipping by global norm.
- [clip_gradients_use_norm](bnnsoptimizerrmspropwithclippingfields/clip_gradients_use_norm.md): Deprecated. An optional value for a known Euclidean norm for clipping by global norm.

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
- [BNNSOptimizerSGDMomentumFields](bnnsoptimizersgdmomentumfields.md): Deprecated. A structure that contains the fields of a stochastic gradient descent (SGD) with momentum optimizer.
- [BNNSOptimizerSGDMomentumWithClippingFields](bnnsoptimizersgdmomentumwithclippingfields.md): Deprecated. A structure that contains the fields of a stochastic gradient descent (SGD) with momentum optimizer that optionally clips the gradient by value or by norm.
- [BNNSOptimizerSGDMomentumVariant](bnnsoptimizersgdmomentumvariant.md): Constants that define SGD momentum variants.
- [BNNSOptimizerStep(\_:\_:\_:\_:\_:\_:\_:)](bnnsoptimizerstep%28______________%29.md): Deprecated. Applies a single optimization step to one or more parameters.
- [BNNSOptimizerFunction](bnnsoptimizerfunction.md): A structure that contains optimizer functions.

# BNNSOptimizerRMSPropWithClippingFields (Objective-C)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A structure that contains the fields of a root mean square propagation (RMSProp) optimizer that optionally clips the gradient by value or by norm.

## Declaration

```objectivec
typedef struct { ... } BNNSOptimizerRMSPropWithClippingFields;
```

## Topics

### Instance Properties

- [learning_rate](bnnsoptimizerrmspropwithclippingfields/learning_rate.md): Deprecated. A value that specifies the learning rate.
- [alpha](bnnsoptimizerrmspropwithclippingfields/alpha.md): Deprecated. A constant that specifies smoothing.
- [epsilon](bnnsoptimizerrmspropwithclippingfields/epsilon.md): Deprecated. A term that the optimizer adds to the denominator.
- [centered](bnnsoptimizerrmspropwithclippingfields/centered.md): Deprecated. A Boolean value that specifies whether to use the centered variant.
- [momentum](bnnsoptimizerrmspropwithclippingfields/momentum.md): Deprecated. The rate of momentum decay.
- [gradient_scale](bnnsoptimizerrmspropwithclippingfields/gradient_scale.md): Deprecated. A value that specifies the gradient scaling factor.
- [regularization_scale](bnnsoptimizerrmspropwithclippingfields/regularization_scale.md): Deprecated. A value that specifies the regularization scaling factor.
- [regularization_func](bnnsoptimizerrmspropwithclippingfields/regularization_func.md): Deprecated. The variable that specifies the regularization function.
- [clipping_func](bnnsoptimizerrmspropwithclippingfields/clipping_func.md): Deprecated. The clipping function.
- [BNNSOptimizerClippingFunction](bnnsoptimizerclippingfunction.md): Constants that describe clipping functions.
- [clip_gradients_min](bnnsoptimizerrmspropwithclippingfields/clip_gradients_min.md): Deprecated. The minimum clipping value for clipping by value.
- [clip_gradients_max](bnnsoptimizerrmspropwithclippingfields/clip_gradients_max.md): Deprecated. The maximum clipping value for clipping by value.
- [clip_gradients_max_norm](bnnsoptimizerrmspropwithclippingfields/clip_gradients_max_norm.md): Deprecated. The maximum Euclidean norm for clipping by norm and clipping by global norm.
- [clip_gradients_use_norm](bnnsoptimizerrmspropwithclippingfields/clip_gradients_use_norm.md): Deprecated. An optional value for a known Euclidean norm for clipping by global norm.

## See Also

### Optimizers

- [BNNSOptimizerRegularizationFunction](bnnsoptimizerregularizationfunction.md): A structure that contains optimizer regularization functions.
- [BNNSOptimizerAdamFields](bnnsoptimizeradamfields.md): Deprecated. A structure that contains the fields of an Adam optimizer.
- [BNNSOptimizerAdamWithClippingFields](bnnsoptimizeradamwithclippingfields.md): Deprecated. A structure that contains the fields of an Adam or AdamW optimizer that optionally clips the gradient by value or by norm.
- [BNNSOptimizerRMSPropFields](bnnsoptimizerrmspropfields.md): Deprecated. A structure that contains the fields of a root mean square propagation (RMSProp) optimizer.
- [BNNSOptimizerSGDMomentumFields](bnnsoptimizersgdmomentumfields.md): Deprecated. A structure that contains the fields of a stochastic gradient descent (SGD) with momentum optimizer.
- [BNNSOptimizerSGDMomentumWithClippingFields](bnnsoptimizersgdmomentumwithclippingfields.md): Deprecated. A structure that contains the fields of a stochastic gradient descent (SGD) with momentum optimizer that optionally clips the gradient by value or by norm.
- [BNNSOptimizerSGDMomentumVariant](bnnsoptimizersgdmomentumvariant.md): Constants that define SGD momentum variants.
- [BNNSOptimizerStep](bnnsoptimizerstep%28______________%29.md): Deprecated. Applies a single optimization step to one or more parameters.
- [BNNSOptimizerFunction](bnnsoptimizerfunction.md): A structure that contains optimizer functions.
