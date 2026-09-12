> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsoptimizer](https://developer.apple.com/documentation/accelerate/bnnsoptimizer)

# BNNSOptimizer

**Framework:** Accelerate  
**Kind:** Protocol  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

> Use the BNNSGraph API instead.

## Declaration

```swift
protocol BNNSOptimizer
```

## Topics

### Instance Properties

- [accumulatorCountMultiplier](bnnsoptimizer/accumulatorcountmultiplier.md): Deprecated.
- [bnnsOptimizerFunction](bnnsoptimizer/bnnsoptimizerfunction.md): Deprecated.

### Instance Methods

- [step(parameters:gradients:accumulators:filterParameters:)](bnnsoptimizer/step%28parameters_gradients_accumulators_filterparameters_%29.md): Deprecated.

## Relationships

### Conforming Types

- [BNNS.AdamOptimizer](bnns/adamoptimizer.md)
- [BNNS.AdamWOptimizer](bnns/adamwoptimizer.md)
- [BNNS.RMSPropOptimizer](bnns/rmspropoptimizer.md)
- [BNNS.SGDMomentumOptimizer](bnns/sgdmomentumoptimizer.md)

## See Also

### Optimizers

- [BNNS.AdamOptimizer](bnns/adamoptimizer.md): Deprecated. An optimizer that uses the Adam optimization algorithm.
- [BNNS.AdamWOptimizer](bnns/adamwoptimizer.md): Deprecated. An optimizer that uses the AdamW optimization algorithm.
- [BNNS.RMSPropOptimizer](bnns/rmspropoptimizer.md): Deprecated. An optimizer that uses the root mean square propagation (RMSProp) optimization method.
- [BNNS.SGDMomentumOptimizer](bnns/sgdmomentumoptimizer.md): Deprecated. An optimizer that uses the stochastic gradient descent (SGD) with the momentum optimization method.
- [BNNSOptimizerRegularizationFunction](bnnsoptimizerregularizationfunction.md): A structure that contains optimizer regularization functions.
- [BNNSOptimizerAdamFields](bnnsoptimizeradamfields.md): Deprecated. A structure that contains the fields of an Adam optimizer.
- [BNNSOptimizerAdamWithClippingFields](bnnsoptimizeradamwithclippingfields.md): Deprecated. A structure that contains the fields of an Adam or AdamW optimizer that optionally clips the gradient by value or by norm.
- [BNNSOptimizerRMSPropFields](bnnsoptimizerrmspropfields.md): Deprecated. A structure that contains the fields of a root mean square propagation (RMSProp) optimizer.
- [BNNSOptimizerRMSPropWithClippingFields](bnnsoptimizerrmspropwithclippingfields.md): Deprecated. A structure that contains the fields of a root mean square propagation (RMSProp) optimizer that optionally clips the gradient by value or by norm.
- [BNNSOptimizerSGDMomentumFields](bnnsoptimizersgdmomentumfields.md): Deprecated. A structure that contains the fields of a stochastic gradient descent (SGD) with momentum optimizer.
- [BNNSOptimizerSGDMomentumWithClippingFields](bnnsoptimizersgdmomentumwithclippingfields.md): Deprecated. A structure that contains the fields of a stochastic gradient descent (SGD) with momentum optimizer that optionally clips the gradient by value or by norm.
- [BNNSOptimizerSGDMomentumVariant](bnnsoptimizersgdmomentumvariant.md): Constants that define SGD momentum variants.
- [BNNSOptimizerStep(\_:\_:\_:\_:\_:\_:\_:)](bnnsoptimizerstep%28______________%29.md): Deprecated. Applies a single optimization step to one or more parameters.
- [BNNSOptimizerFunction](bnnsoptimizerfunction.md): A structure that contains optimizer functions.
