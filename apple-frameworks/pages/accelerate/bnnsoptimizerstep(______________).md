> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsoptimizerstep(_:_:_:_:_:_:_:)](https://developer.apple.com/documentation/accelerate/bnnsoptimizerstep(_:_:_:_:_:_:_:))

# BNNSOptimizerStep(\_:\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 14.0+ (deprecated in 18.0) · iPadOS 14.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · tvOS 14.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 7.0+ (deprecated in 11.0)

Applies a single optimization step to one or more parameters.

> Use BNNSGraph\* APIs

## Declaration

```swift
func BNNSOptimizerStep(_ function: BNNSOptimizerFunction, _ OptimizerAlgFields: UnsafeRawPointer, _ number_of_parameters: Int, _ parameters: UnsafeMutablePointer<UnsafeMutablePointer<BNNSNDArrayDescriptor>>, _ gradients: UnsafeMutablePointer<UnsafePointer<BNNSNDArrayDescriptor>>, _ accumulators: UnsafeMutablePointer<UnsafeMutablePointer<BNNSNDArrayDescriptor>?>?, _ filter_params: UnsafePointer<BNNSFilterParameters>?) -> Int32
```

## Parameters

- `function`: The optimization algorithm.
- `OptimizerAlgFields`: A pointer to parameters for optimization function.
- `number_of_parameters`: The number of parameters the step updates.
- `parameters`: An array of pointers to parameter descriptors.
- `gradients`: An array of pointers to gradient descriptors.
- `accumulators`: An array of pointers to accumulator descriptors.
- `filter_params`: The filter runtime parameters.

<a id="Discussion"></a>

## Discussion

Use [BNNSOptimizerStep(\_:\_:\_:\_:\_:\_:\_:)](bnnsoptimizerstep%28______________%29.md) to update a set of parameters using a supplied optimization algorithm.

> **Important**

>  Parameter, gradient, and accumulator descriptors must have the same sizes and strides and be of type `float`.

For example, the following shows the code required to update the weights data described by `weightsDescriptor` using an Adam optimizer.

```swift
var weightsDescriptor: BNNSNDArrayDescriptor = ...
var deltaDescriptor: BNNSNDArrayDescriptor = ...
var accumulatorOneDescriptor: BNNSNDArrayDescriptor = ...
var accumulatorTwoDescriptor: BNNSNDArrayDescriptor = ...
var adamFields: BNNSOptimizerAdamFields = ...

withUnsafeMutablePointer(to: &weightsDescriptor) { weightsDescriptorPtr in
    withUnsafePointer(to: &deltaDescriptor) { deltaDescriptorPtr in
        withUnsafeMutablePointer(to: &accumulatorOneDescriptor) { accumulatorOneDescriptorPtr in
            withUnsafeMutablePointer(to: &accumulatorTwoDescriptor) { accumulatorTwoDescriptorPtr in
                
                var paramaters = [ weightsDescriptorPtr ]
                var gradients = [ deltaDescriptorPtr ]
                var accumulators = [ Optional(accumulatorOneDescriptorPtr),
                                     Optional(accumulatorTwoDescriptorPtr) ]
                
                let error = withUnsafePointer(to: &adamFields) { adamFieldsPointer in
                    BNNSOptimizerStep(BNNSOptimizerFunctionAdam,
                                      adamFieldsPointer, 1,
                                      &paramaters,
                                      &gradients,
                                      &accumulators,
                                      nil)
                }
                
                if error != 0 {
                    fatalError("BNNSOptimizerStep failed.")
                }
            }
        }
    }
}

```

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
- [BNNSOptimizerFunction](bnnsoptimizerfunction.md): A structure that contains optimizer functions.

# BNNSOptimizerStep (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 14.0+ (deprecated in 18.0) · iPadOS 14.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · tvOS 14.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 7.0+ (deprecated in 11.0)

Applies a single optimization step to one or more parameters.

> Use BNNSGraph\* APIs

## Declaration

```objectivec
int BNNSOptimizerStep(BNNSOptimizerFunction function, const void *OptimizerAlgFields, size_t number_of_parameters, BNNSNDArrayDescriptor **parameters, const BNNSNDArrayDescriptor **gradients, BNNSNDArrayDescriptor **accumulators, const BNNSFilterParameters *filter_params);
```

## Parameters

- `function`: The optimization algorithm.
- `OptimizerAlgFields`: A pointer to parameters for optimization function.
- `number_of_parameters`: The number of parameters the step updates.
- `parameters`: An array of pointers to parameter descriptors.
- `gradients`: An array of pointers to gradient descriptors.
- `accumulators`: An array of pointers to accumulator descriptors.
- `filter_params`: The filter runtime parameters.

<a id="Discussion"></a>

## Discussion

Use [BNNSOptimizerStep](bnnsoptimizerstep%28______________%29.md) to update a set of parameters using a supplied optimization algorithm.

> **Important**

>  Parameter, gradient, and accumulator descriptors must have the same sizes and strides and be of type `float`.

For example, the following shows the code required to update the weights data described by `weightsDescriptor` using an Adam optimizer.

```swift
var weightsDescriptor: BNNSNDArrayDescriptor = ...
var deltaDescriptor: BNNSNDArrayDescriptor = ...
var accumulatorOneDescriptor: BNNSNDArrayDescriptor = ...
var accumulatorTwoDescriptor: BNNSNDArrayDescriptor = ...
var adamFields: BNNSOptimizerAdamFields = ...

withUnsafeMutablePointer(to: &weightsDescriptor) { weightsDescriptorPtr in
    withUnsafePointer(to: &deltaDescriptor) { deltaDescriptorPtr in
        withUnsafeMutablePointer(to: &accumulatorOneDescriptor) { accumulatorOneDescriptorPtr in
            withUnsafeMutablePointer(to: &accumulatorTwoDescriptor) { accumulatorTwoDescriptorPtr in
                
                var paramaters = [ weightsDescriptorPtr ]
                var gradients = [ deltaDescriptorPtr ]
                var accumulators = [ Optional(accumulatorOneDescriptorPtr),
                                     Optional(accumulatorTwoDescriptorPtr) ]
                
                let error = withUnsafePointer(to: &adamFields) { adamFieldsPointer in
                    BNNSOptimizerStep(BNNSOptimizerFunctionAdam,
                                      adamFieldsPointer, 1,
                                      &paramaters,
                                      &gradients,
                                      &accumulators,
                                      nil)
                }
                
                if error != 0 {
                    fatalError("BNNSOptimizerStep failed.")
                }
            }
        }
    }
}

```

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
- [BNNSOptimizerFunction](bnnsoptimizerfunction.md): A structure that contains optimizer functions.
