> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnns/gradientclipping](https://developer.apple.com/documentation/accelerate/bnns/gradientclipping)

# BNNS.GradientClipping

**Framework:** Accelerate  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS · watchOS 8.0+

Constants that describe clipping functions.

## Declaration

```swift
enum GradientClipping
```

## Topics

### Gradient Clipping Functions

- [BNNS.GradientClipping.none](gradientclipping/none.md): A constant that indicates that the operation doesn’t clip gradients.
- [BNNS.GradientClipping.byValue(bounds:)](gradientclipping/byvalue%28bounds_%29.md): A constant that indicates that the operation clips gradients to a specified range.
- [BNNS.GradientClipping.byNorm(threshold:)](gradientclipping/bynorm%28threshold_%29.md): A constant that indicates that the operation clips gradients to a specified Euclidean norm.
- [BNNS.GradientClipping.byGlobalNorm(threshold:globalNorm:)](gradientclipping/byglobalnorm%28threshold_globalnorm_%29.md): A constant that indicates that the operation clips gradients to a specified global Euclidean norm.

## See Also

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
