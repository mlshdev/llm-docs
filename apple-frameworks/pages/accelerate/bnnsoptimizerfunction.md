> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsoptimizerfunction](https://developer.apple.com/documentation/accelerate/bnnsoptimizerfunction)

# BNNSOptimizerFunction (Swift)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A structure that contains optimizer functions.

## Declaration

```swift
struct BNNSOptimizerFunction
```

## Topics

### Adam Optimizer Functions

- [BNNSOptimizerFunctionAdam](bnnsoptimizerfunctionadam.md): An optimizer function that updates parameters according to the Adam algorithm.
- [BNNSOptimizerFunctionAdamWithClipping](bnnsoptimizerfunctionadamwithclipping.md): An optimizer function that updates parameters according to the Adam algorithm and optionally clips the gradient by value or by norm.
- [BNNSOptimizerFunctionAdamAMSGrad](bnnsoptimizerfunctionadamamsgrad.md): An optimizer function that updates parameters according to the AMSGrad variant of the Adam algorithm.
- [BNNSOptimizerFunctionAdamAMSGradWithClipping](bnnsoptimizerfunctionadamamsgradwithclipping.md): An optimizer function that updates parameters according to the AMSGrad variant of the Adam algorithm and optionally clips the gradient by value or by norm.

### AdamW Optimizer Functions

- [BNNSOptimizerFunctionAdamW](bnnsoptimizerfunctionadamw.md): An optimizer function that updates parameters according to the AdamW algorithm.
- [BNNSOptimizerFunctionAdamWWithClipping](bnnsoptimizerfunctionadamwwithclipping.md): An optimizer function that updates parameters according to the AdamW algorithm and optionally clips the gradient by value or by norm.
- [BNNSOptimizerFunctionAdamWAMSGrad](bnnsoptimizerfunctionadamwamsgrad.md): An optimizer function that updates parameters according to the AMSGrad variant of the AdamW algorithm.
- [BNNSOptimizerFunctionAdamWAMSGradWithClipping](bnnsoptimizerfunctionadamwamsgradwithclipping.md): An optimizer function that updates parameters according to the AMSGrad variant of the AdamW algorithm and optionally clips the gradient by value or by norm.

### RMSProp Optimizer Functions

- [BNNSOptimizerFunctionRMSProp](bnnsoptimizerfunctionrmsprop.md): An optimizer function that updates parameters according to the root mean square propagation (RMSProp) algorithm.
- [BNNSOptimizerFunctionRMSPropWithClipping](bnnsoptimizerfunctionrmspropwithclipping.md): An optimizer function that updates parameters according to the root mean square propagation (RMSProp) algorithm and optionally clips the gradient by value or by norm.

### SGD  Optimizer Functions

- [BNNSOptimizerFunctionSGDMomentum](bnnsoptimizerfunctionsgdmomentum.md): An optimizer function that updates parameters according to the stochastic gradient descent (SGD) with momentum algorithm.
- [BNNSOptimizerFunctionSGDMomentumWithClipping](bnnsoptimizerfunctionsgdmomentumwithclipping.md): An optimizer function that updates parameters according to the stochastic gradient descent (SGD) with momentum algorithm and optionally clips the gradient by value or by norm.

### Raw Values

- [rawValue](bnnsoptimizerfunction/rawvalue.md)
- [init(\_:)](bnnsoptimizerfunction/init%28__%29.md)
- [init(rawValue:)](bnnsoptimizerfunction/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
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
- [BNNSOptimizerSGDMomentumWithClippingFields](bnnsoptimizersgdmomentumwithclippingfields.md): Deprecated. A structure that contains the fields of a stochastic gradient descent (SGD) with momentum optimizer that optionally clips the gradient by value or by norm.
- [BNNSOptimizerSGDMomentumVariant](bnnsoptimizersgdmomentumvariant.md): Constants that define SGD momentum variants.
- [BNNSOptimizerStep(\_:\_:\_:\_:\_:\_:\_:)](bnnsoptimizerstep%28______________%29.md): Deprecated. Applies a single optimization step to one or more parameters.

# BNNSOptimizerFunction (Objective-C)

**Framework:** Accelerate  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A structure that contains optimizer functions.

## Declaration

```objectivec
typedef enum { ... } BNNSOptimizerFunction;
```

## Topics

### Adam Optimizer Functions

- [BNNSOptimizerFunctionAdam](bnnsoptimizerfunctionadam.md): An optimizer function that updates parameters according to the Adam algorithm.
- [BNNSOptimizerFunctionAdamWithClipping](bnnsoptimizerfunctionadamwithclipping.md): An optimizer function that updates parameters according to the Adam algorithm and optionally clips the gradient by value or by norm.
- [BNNSOptimizerFunctionAdamAMSGrad](bnnsoptimizerfunctionadamamsgrad.md): An optimizer function that updates parameters according to the AMSGrad variant of the Adam algorithm.
- [BNNSOptimizerFunctionAdamAMSGradWithClipping](bnnsoptimizerfunctionadamamsgradwithclipping.md): An optimizer function that updates parameters according to the AMSGrad variant of the Adam algorithm and optionally clips the gradient by value or by norm.

### AdamW Optimizer Functions

- [BNNSOptimizerFunctionAdamW](bnnsoptimizerfunctionadamw.md): An optimizer function that updates parameters according to the AdamW algorithm.
- [BNNSOptimizerFunctionAdamWWithClipping](bnnsoptimizerfunctionadamwwithclipping.md): An optimizer function that updates parameters according to the AdamW algorithm and optionally clips the gradient by value or by norm.
- [BNNSOptimizerFunctionAdamWAMSGrad](bnnsoptimizerfunctionadamwamsgrad.md): An optimizer function that updates parameters according to the AMSGrad variant of the AdamW algorithm.
- [BNNSOptimizerFunctionAdamWAMSGradWithClipping](bnnsoptimizerfunctionadamwamsgradwithclipping.md): An optimizer function that updates parameters according to the AMSGrad variant of the AdamW algorithm and optionally clips the gradient by value or by norm.

### RMSProp Optimizer Functions

- [BNNSOptimizerFunctionRMSProp](bnnsoptimizerfunctionrmsprop.md): An optimizer function that updates parameters according to the root mean square propagation (RMSProp) algorithm.
- [BNNSOptimizerFunctionRMSPropWithClipping](bnnsoptimizerfunctionrmspropwithclipping.md): An optimizer function that updates parameters according to the root mean square propagation (RMSProp) algorithm and optionally clips the gradient by value or by norm.

### SGD  Optimizer Functions

- [BNNSOptimizerFunctionSGDMomentum](bnnsoptimizerfunctionsgdmomentum.md): An optimizer function that updates parameters according to the stochastic gradient descent (SGD) with momentum algorithm.
- [BNNSOptimizerFunctionSGDMomentumWithClipping](bnnsoptimizerfunctionsgdmomentumwithclipping.md): An optimizer function that updates parameters according to the stochastic gradient descent (SGD) with momentum algorithm and optionally clips the gradient by value or by norm.

## See Also

### Optimizers

- [BNNSOptimizerRegularizationFunction](bnnsoptimizerregularizationfunction.md): A structure that contains optimizer regularization functions.
- [BNNSOptimizerAdamFields](bnnsoptimizeradamfields.md): Deprecated. A structure that contains the fields of an Adam optimizer.
- [BNNSOptimizerAdamWithClippingFields](bnnsoptimizeradamwithclippingfields.md): Deprecated. A structure that contains the fields of an Adam or AdamW optimizer that optionally clips the gradient by value or by norm.
- [BNNSOptimizerRMSPropFields](bnnsoptimizerrmspropfields.md): Deprecated. A structure that contains the fields of a root mean square propagation (RMSProp) optimizer.
- [BNNSOptimizerRMSPropWithClippingFields](bnnsoptimizerrmspropwithclippingfields.md): Deprecated. A structure that contains the fields of a root mean square propagation (RMSProp) optimizer that optionally clips the gradient by value or by norm.
- [BNNSOptimizerSGDMomentumFields](bnnsoptimizersgdmomentumfields.md): Deprecated. A structure that contains the fields of a stochastic gradient descent (SGD) with momentum optimizer.
- [BNNSOptimizerSGDMomentumWithClippingFields](bnnsoptimizersgdmomentumwithclippingfields.md): Deprecated. A structure that contains the fields of a stochastic gradient descent (SGD) with momentum optimizer that optionally clips the gradient by value or by norm.
- [BNNSOptimizerSGDMomentumVariant](bnnsoptimizersgdmomentumvariant.md): Constants that define SGD momentum variants.
- [BNNSOptimizerStep](bnnsoptimizerstep%28______________%29.md): Deprecated. Applies a single optimization step to one or more parameters.
