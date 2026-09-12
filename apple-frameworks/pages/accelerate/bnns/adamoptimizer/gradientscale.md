> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnns/adamoptimizer/gradientscale](https://developer.apple.com/documentation/accelerate/bnns/adamoptimizer/gradientscale)

# gradientScale

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

A value that specifies the gradient scaling factor.

> Use the BNNSGraph API instead.

## Declaration

```swift
var gradientScale: Float { get set }
```

## See Also

### Inspecting the Properties of an Adam Optimizer

- [learningRate](learningrate.md): Deprecated. A value that specifies the learning rate.
- [beta1](beta1.md): Deprecated. A value that specifies the first-moment constant, in the range `0` to `1`.
- [beta2](beta2.md): Deprecated. A value that specifies the second-moment constant, in the range `0` to `1`.
- [timeStep](timestep.md): Deprecated. A value that’s at least `1` and represents the optimizer’s current time.
- [epsilon](epsilon.md): Deprecated. The epsilon value you use to improve numerical stability.
- [regularizationScale](regularizationscale.md): Deprecated. A value that specifies the regularization scaling factor.
- [gradientBounds](gradientbounds.md): Deprecated. The values for the minimum and maximum gradients.
- [gradientClipping](gradientclipping.md): Deprecated. The gradient clipping.
- [regularizationFunction](regularizationfunction.md): Deprecated. The variable that specifies the regularization function.
- [usesAMSGrad](usesamsgrad.md): Deprecated. A Boolean value that specifies whether to use the AMSGrad variant.
- [accumulatorCountMultiplier](accumulatorcountmultiplier.md): Deprecated. The number of accumulators required for each parameter.
- [BNNS.GradientClipping](../gradientclipping.md): Constants that describe clipping functions.
