> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnns/rmspropoptimizer/gradientclipping](https://developer.apple.com/documentation/accelerate/bnns/rmspropoptimizer/gradientclipping)

# gradientClipping

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS · watchOS 8.0+

The gradient clipping.

## Declaration

```swift
var gradientClipping: BNNS.GradientClipping { get set }
```

## See Also

### Inspecting the Properties of an RMSProp Optimizer

- [learningRate](learningrate.md): Deprecated. A value that specifies the learning rate.
- [alpha](alpha.md): Deprecated. A constant that specifies smoothing.
- [epsilon](epsilon.md): Deprecated. A term that the optimizer adds to the denominator.
- [centered](centered.md): Deprecated. A Boolean value that specifies whether to use the centered variant.
- [momentum](momentum.md): Deprecated. The rate of momentum decay.
- [gradientScale](gradientscale.md): Deprecated. A value that specifies the gradient scaling factor.
- [regularizationScale](regularizationscale.md): Deprecated. A value that specifies the regularization scaling factor.
- [gradientBounds](gradientbounds.md): Deprecated. The values for the minimum and maximum gradients.
- [BNNS.GradientClipping](../gradientclipping.md): Constants that describe clipping functions.
- [regularizationFunction](regularizationfunction.md): Deprecated. The variable that specifies the regularization function.
- [accumulatorCountMultiplier](accumulatorcountmultiplier.md): Deprecated. The number of accumulators required for each parameter.
