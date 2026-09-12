> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnns/sgdmomentumoptimizer/learningrate](https://developer.apple.com/documentation/accelerate/bnns/sgdmomentumoptimizer/learningrate)

# learningRate

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

A value that specifies the learning rate.

> Use the BNNSGraph API instead.

## Declaration

```swift
var learningRate: Float { get set }
```

## See Also

### Inspecting the Properties of an SGD with Momentum Optimizer

- [momentum](momentum.md): Deprecated. The rate of momentum decay.
- [gradientScale](gradientscale.md): Deprecated. A value that specifies the gradient scaling factor.
- [regularizationScale](regularizationscale.md): Deprecated. A value that specifies the regularization scaling factor.
- [gradientBounds](gradientbounds.md): Deprecated. The values for the minimum and maximum gradients.
- [gradientClipping](gradientclipping.md): The gradient clipping.
- [BNNS.GradientClipping](../gradientclipping.md): Constants that describe clipping functions.
- [usesNestrovMomentum](usesnestrovmomentum.md): Deprecated. A Boolean value that specifies whether to use Nesterov momentum update.
- [regularizationFunction](regularizationfunction.md): Deprecated. The variable that specifies the regularization function.
- [sgdMomentumVariant](sgdmomentumvariant.md): Deprecated. The variable that specifies the momentum variant.
- [accumulatorCountMultiplier](accumulatorcountmultiplier.md): Deprecated. The number of accumulators required for each parameter.
