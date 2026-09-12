> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnns/adamwoptimizer](https://developer.apple.com/documentation/accelerate/bnns/adamwoptimizer)

# BNNS.AdamWOptimizer

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS · watchOS 8.0+

An optimizer that uses the AdamW optimization algorithm.

> Use the BNNSGraph API instead.

## Declaration

```swift
struct AdamWOptimizer
```

## Topics

### Creating an AdamW Optimizer

- [init(learningRate:beta1:beta2:timeStep:epsilon:gradientScale:weightDecay:gradientClipping:usesAMSGrad:)](adamwoptimizer/init%28learningrate_beta1_beta2_timestep_epsilon_gradientscale_weightdecay_gradientclipping_usesamsgrad_%29.md): Deprecated. Returns a new AdamW optimizer object with gradient clipped by value or clipped by norm.

### Inspecting the Properties of an AdamW Optimizer

- [learningRate](adamwoptimizer/learningrate.md): Deprecated. A value that specifies the learning rate.
- [beta1](adamwoptimizer/beta1.md): Deprecated. A value that specifies the first-moment constant, in the range `0` to `1`.
- [beta2](adamwoptimizer/beta2.md): Deprecated. A value that specifies the second-moment constant, in the range `0` to `1`.
- [timeStep](adamwoptimizer/timestep.md): Deprecated. A value that’s at least `1` and represents the optimizer’s current time.
- [epsilon](adamwoptimizer/epsilon.md): Deprecated. The epsilon value you use to improve numerical stability.
- [gradientScale](adamwoptimizer/gradientscale.md): Deprecated. A value that specifies the gradient scaling factor.
- [weightDecay](adamwoptimizer/weightdecay.md): Deprecated. The weight decay coefficient.
- [gradientClipping](adamwoptimizer/gradientclipping.md): Deprecated. The gradient clipping function and bounds.
- [BNNS.GradientClipping](gradientclipping.md): Constants that describe clipping functions.
- [accumulatorCountMultiplier](adamwoptimizer/accumulatorcountmultiplier.md): Deprecated. The number of accumulators required for each parameter.

## Relationships

### Conforms To

- [BNNSOptimizer](../bnnsoptimizer.md)

## See Also

### Optimizers

- [BNNS.AdamOptimizer](adamoptimizer.md): Deprecated. An optimizer that uses the Adam optimization algorithm.
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
