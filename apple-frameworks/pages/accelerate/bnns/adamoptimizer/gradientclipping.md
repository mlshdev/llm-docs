> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnns/adamoptimizer/gradientclipping](https://developer.apple.com/documentation/accelerate/bnns/adamoptimizer/gradientclipping)

# gradientClipping

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS · watchOS 8.0+

The gradient clipping.

> Use the BNNSGraph API instead.

## Declaration

```swift
var gradientClipping: BNNS.GradientClipping { get set }
```

## See Also

### Inspecting the Properties of an Adam Optimizer

- [learningRate](learningrate.md): Deprecated. A value that specifies the learning rate.
- [beta1](beta1.md): Deprecated. A value that specifies the first-moment constant, in the range `0` to `1`.
- [beta2](beta2.md): Deprecated. A value that specifies the second-moment constant, in the range `0` to `1`.
- [timeStep](timestep.md): Deprecated. A value that’s at least `1` and represents the optimizer’s current time.
- [epsilon](epsilon.md): Deprecated. The epsilon value you use to improve numerical stability.
- [gradientScale](gradientscale.md): Deprecated. A value that specifies the gradient scaling factor.
- [regularizationScale](regularizationscale.md): Deprecated. A value that specifies the regularization scaling factor.
- [gradientBounds](gradientbounds.md): Deprecated. The values for the minimum and maximum gradients.
- [regularizationFunction](regularizationfunction.md): Deprecated. The variable that specifies the regularization function.
- [usesAMSGrad](usesamsgrad.md): Deprecated. A Boolean value that specifies whether to use the AMSGrad variant.
- [accumulatorCountMultiplier](accumulatorcountmultiplier.md): Deprecated. The number of accumulators required for each parameter.
- [BNNS.GradientClipping](../gradientclipping.md): Constants that describe clipping functions.
