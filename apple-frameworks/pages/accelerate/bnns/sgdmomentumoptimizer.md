> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnns/sgdmomentumoptimizer](https://developer.apple.com/documentation/accelerate/bnns/sgdmomentumoptimizer)

# BNNS.SGDMomentumOptimizer

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

An optimizer that uses the stochastic gradient descent (SGD) with the momentum optimization method.

> Use the BNNSGraph API instead.

## Declaration

```swift
struct SGDMomentumOptimizer
```

## Topics

### Creating an SGD with Momentum Optimizer

- [init(learningRate:momentum:gradientScale:regularizationScale:clipsGradientsTo:usesNestrovMomentum:regularizationFunction:sgdMomentumVariant:)](sgdmomentumoptimizer/init%28learningrate_momentum_gradientscale_regularizationscale_clipsgradientsto_usesnestrovmomentum_regularizationfunction_sgdmomentumvariant_%29.md): Deprecated. Returns a new stochastic gradient descent (SGD) with momentum optimizer object.

### Inspecting the Properties of an SGD with Momentum Optimizer

- [learningRate](sgdmomentumoptimizer/learningrate.md): Deprecated. A value that specifies the learning rate.
- [momentum](sgdmomentumoptimizer/momentum.md): Deprecated. The rate of momentum decay.
- [gradientScale](sgdmomentumoptimizer/gradientscale.md): Deprecated. A value that specifies the gradient scaling factor.
- [regularizationScale](sgdmomentumoptimizer/regularizationscale.md): Deprecated. A value that specifies the regularization scaling factor.
- [gradientBounds](sgdmomentumoptimizer/gradientbounds.md): Deprecated. The values for the minimum and maximum gradients.
- [gradientClipping](sgdmomentumoptimizer/gradientclipping.md): The gradient clipping.
- [BNNS.GradientClipping](gradientclipping.md): Constants that describe clipping functions.
- [usesNestrovMomentum](sgdmomentumoptimizer/usesnestrovmomentum.md): Deprecated. A Boolean value that specifies whether to use Nesterov momentum update.
- [regularizationFunction](sgdmomentumoptimizer/regularizationfunction.md): Deprecated. The variable that specifies the regularization function.
- [sgdMomentumVariant](sgdmomentumoptimizer/sgdmomentumvariant.md): Deprecated. The variable that specifies the momentum variant.
- [accumulatorCountMultiplier](sgdmomentumoptimizer/accumulatorcountmultiplier.md): Deprecated. The number of accumulators required for each parameter.

### Initializers

- [init(learningRate:momentum:gradientScale:regularizationScale:clipsGradientsTo:usesNesterovMomentum:regularizationFunction:sgdMomentumVariant:)](sgdmomentumoptimizer/init%28learningrate_momentum_gradientscale_regularizationscale_clipsgradientsto_usesnesterovmomentum_regularizationfunction_sgdmomentumvariant_%29.md): Deprecated.
- [init(learningRate:momentum:gradientScale:regularizationScale:gradientClipping:usesNesterovMomentum:regularizationFunction:sgdMomentumVariant:)](sgdmomentumoptimizer/init%28learningrate_momentum_gradientscale_regularizationscale_gradientclipping_usesnesterovmomentum_regularizationfunction_sgdmomentumvariant_%29.md)

### Instance Properties

- [usesNesterovMomentum](sgdmomentumoptimizer/usesnesterovmomentum.md): Deprecated.

## Relationships

### Conforms To

- [BNNSOptimizer](../bnnsoptimizer.md)

## See Also

### Optimizers

- [BNNS.AdamOptimizer](adamoptimizer.md): Deprecated. An optimizer that uses the Adam optimization algorithm.
- [BNNS.AdamWOptimizer](adamwoptimizer.md): Deprecated. An optimizer that uses the AdamW optimization algorithm.
- [BNNS.RMSPropOptimizer](rmspropoptimizer.md): Deprecated. An optimizer that uses the root mean square propagation (RMSProp) optimization method.
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
