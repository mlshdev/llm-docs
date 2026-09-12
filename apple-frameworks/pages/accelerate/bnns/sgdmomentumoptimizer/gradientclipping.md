> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnns/sgdmomentumoptimizer/gradientclipping](https://developer.apple.com/documentation/accelerate/bnns/sgdmomentumoptimizer/gradientclipping)

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

### Inspecting the Properties of an SGD with Momentum Optimizer

- [learningRate](learningrate.md): Deprecated. A value that specifies the learning rate.
- [momentum](momentum.md): Deprecated. The rate of momentum decay.
- [gradientScale](gradientscale.md): Deprecated. A value that specifies the gradient scaling factor.
- [regularizationScale](regularizationscale.md): Deprecated. A value that specifies the regularization scaling factor.
- [gradientBounds](gradientbounds.md): Deprecated. The values for the minimum and maximum gradients.
- [BNNS.GradientClipping](../gradientclipping.md): Constants that describe clipping functions.
- [usesNestrovMomentum](usesnestrovmomentum.md): Deprecated. A Boolean value that specifies whether to use Nesterov momentum update.
- [regularizationFunction](regularizationfunction.md): Deprecated. The variable that specifies the regularization function.
- [sgdMomentumVariant](sgdmomentumvariant.md): Deprecated. The variable that specifies the momentum variant.
- [accumulatorCountMultiplier](accumulatorcountmultiplier.md): Deprecated. The number of accumulators required for each parameter.
