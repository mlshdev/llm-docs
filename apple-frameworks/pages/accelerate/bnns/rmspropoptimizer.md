> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnns/rmspropoptimizer](https://developer.apple.com/documentation/accelerate/bnns/rmspropoptimizer)

# BNNS.RMSPropOptimizer

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

An optimizer that uses the root mean square propagation (RMSProp) optimization method.

> Use the BNNSGraph API instead.

## Declaration

```swift
struct RMSPropOptimizer
```

## Topics

### Creating an RMSProp Optimizer

- [init(learningRate:alpha:epsilon:centered:momentum:gradientScale:regularizationScale:clipsGradientsTo:regularizationFunction:)](rmspropoptimizer/init%28learningrate_alpha_epsilon_centered_momentum_gradientscale_regularizationscale_clipsgradientsto_regularizationfunction_%29.md): Deprecated. Returns a new RMSProp optimizer object.
- [init(learningRate:alpha:epsilon:centered:momentum:gradientScale:regularizationScale:gradientClipping:regularizationFunction:)](rmspropoptimizer/init%28learningrate_alpha_epsilon_centered_momentum_gradientscale_regularizationscale_gradientclipping_regularizationfunction_%29.md): Returns a new RMSProp optimizer object with gradient clipped by value or clipped by norm.

### Inspecting the Properties of an RMSProp Optimizer

- [learningRate](rmspropoptimizer/learningrate.md): Deprecated. A value that specifies the learning rate.
- [alpha](rmspropoptimizer/alpha.md): Deprecated. A constant that specifies smoothing.
- [epsilon](rmspropoptimizer/epsilon.md): Deprecated. A term that the optimizer adds to the denominator.
- [centered](rmspropoptimizer/centered.md): Deprecated. A Boolean value that specifies whether to use the centered variant.
- [momentum](rmspropoptimizer/momentum.md): Deprecated. The rate of momentum decay.
- [gradientScale](rmspropoptimizer/gradientscale.md): Deprecated. A value that specifies the gradient scaling factor.
- [regularizationScale](rmspropoptimizer/regularizationscale.md): Deprecated. A value that specifies the regularization scaling factor.
- [gradientBounds](rmspropoptimizer/gradientbounds.md): Deprecated. The values for the minimum and maximum gradients.
- [gradientClipping](rmspropoptimizer/gradientclipping.md): The gradient clipping.
- [BNNS.GradientClipping](gradientclipping.md): Constants that describe clipping functions.
- [regularizationFunction](rmspropoptimizer/regularizationfunction.md): Deprecated. The variable that specifies the regularization function.
- [accumulatorCountMultiplier](rmspropoptimizer/accumulatorcountmultiplier.md): Deprecated. The number of accumulators required for each parameter.

## Relationships

### Conforms To

- [BNNSOptimizer](../bnnsoptimizer.md)

## See Also

### Optimizers

- [BNNS.AdamOptimizer](adamoptimizer.md): Deprecated. An optimizer that uses the Adam optimization algorithm.
- [BNNS.AdamWOptimizer](adamwoptimizer.md): Deprecated. An optimizer that uses the AdamW optimization algorithm.
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
