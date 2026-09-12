> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnns/adamoptimizer](https://developer.apple.com/documentation/accelerate/bnns/adamoptimizer)

# BNNS.AdamOptimizer

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

An optimizer that uses the Adam optimization algorithm.

> Use the BNNSGraph API instead.

## Declaration

```swift
struct AdamOptimizer
```

## Topics

### Creating an Adam Optimizer

- [init(learningRate:beta1:beta2:timeStep:epsilon:gradientScale:regularizationScale:clipsGradientsTo:regularizationFunction:)](adamoptimizer/init%28learningrate_beta1_beta2_timestep_epsilon_gradientscale_regularizationscale_clipsgradientsto_regularizationfunction_%29.md): Deprecated. Returns a new Adam optimizer object.
- [init(learningRate:beta1:beta2:timeStep:epsilon:gradientScale:regularizationScale:gradientClipping:regularizationFunction:usesAMSGrad:)](adamoptimizer/init%28learningrate_beta1_beta2_timestep_epsilon_gradientscale_regularizationscale_gradientclipping_regularizationfunction_usesamsgrad_%29.md): Deprecated. Returns a new Adam optimizer object with gradient clipped by value or clipped by norm.

### Inspecting the Properties of an Adam Optimizer

- [learningRate](adamoptimizer/learningrate.md): Deprecated. A value that specifies the learning rate.
- [beta1](adamoptimizer/beta1.md): Deprecated. A value that specifies the first-moment constant, in the range `0` to `1`.
- [beta2](adamoptimizer/beta2.md): Deprecated. A value that specifies the second-moment constant, in the range `0` to `1`.
- [timeStep](adamoptimizer/timestep.md): Deprecated. A value that’s at least `1` and represents the optimizer’s current time.
- [epsilon](adamoptimizer/epsilon.md): Deprecated. The epsilon value you use to improve numerical stability.
- [gradientScale](adamoptimizer/gradientscale.md): Deprecated. A value that specifies the gradient scaling factor.
- [regularizationScale](adamoptimizer/regularizationscale.md): Deprecated. A value that specifies the regularization scaling factor.
- [gradientBounds](adamoptimizer/gradientbounds.md): Deprecated. The values for the minimum and maximum gradients.
- [gradientClipping](adamoptimizer/gradientclipping.md): Deprecated. The gradient clipping.
- [regularizationFunction](adamoptimizer/regularizationfunction.md): Deprecated. The variable that specifies the regularization function.
- [usesAMSGrad](adamoptimizer/usesamsgrad.md): Deprecated. A Boolean value that specifies whether to use the AMSGrad variant.
- [accumulatorCountMultiplier](adamoptimizer/accumulatorcountmultiplier.md): Deprecated. The number of accumulators required for each parameter.
- [BNNS.GradientClipping](gradientclipping.md): Constants that describe clipping functions.

## Relationships

### Conforms To

- [BNNSOptimizer](../bnnsoptimizer.md)

## See Also

### Optimizers

- [BNNS.AdamWOptimizer](adamwoptimizer.md): Deprecated. An optimizer that uses the AdamW optimization algorithm.
- [BNNS.RMSPropOptimizer](rmspropoptimizer.md): Deprecated. An optimizer that uses the root mean square propagation (RMSProp) optimization method.
- [BNNS.SGDMomentumOptimizer](sgdmomentumoptimizer.md): Deprecated. An optimizer that uses the stochastic gradient descent (SGD) with the momentum optimization method.
- [BNNSOptimizer](../bnnsoptimizer.md): Deprecated.
- [BNNSOptimizerRegularizationFunction](../bnnsoptimizerregularizationfunction.md): A structure that contains optimizer regularization functions.
- [BNNSOptimizerAdamFields](../bnnsoptimizeradamfields.md): Deprecated. A structure that contains the fields of an Adam optimizer.
- [BNNSOptimizerAdamWithClippingFields](../bnnsoptimizeradamwithclippingfields.md): Deprecated. A structure that contains the fields of an Adam or AdamW optimizer that optionally clips the gradient by value or by norm.
- [BNNSOptimizerRMSPropFields](../bnnsoptimizerrmspropfields.md): Deprecated. A structure that contains the fields of a root mean square propagation (RMSProp) optimizer.
- [BNNSOptimizerRMSPropWithClippingFields](../bnnsoptimizerrmspropwithclippingfields.md): Deprecated. A structure that contains the fields of a root mean square propagation (RMSProp) optimizer that optionally clips the gradient by value or by norm.
- [BNNSOptimizerSGDMomentumFields](../bnnsoptimizersgdmomentumfields.md): Deprecated. A structure that contains the fields of a stochastic gradient descent (SGD) with momentum optimizer.
- [BNNSOptimizerSGDMomentumWithClippingFields](../bnnsoptimizersgdmomentumwithclippingfields.md): Deprecated. A structure that contains the fields of a stochastic gradient descent (SGD) with momentum optimizer that optionally clips the gradient by value or by norm.
- [BNNSOptimizerSGDMomentumVariant](../bnnsoptimizersgdmomentumvariant.md): Constants that define SGD momentum variants.
- [BNNSOptimizerStep(\_:\_:\_:\_:\_:\_:\_:)](../bnnsoptimizerstep%28______________%29.md): Deprecated. Applies a single optimization step to one or more parameters.
- [BNNSOptimizerFunction](../bnnsoptimizerfunction.md): A structure that contains optimizer functions.
