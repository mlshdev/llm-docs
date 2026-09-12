> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnns/adamwoptimizer/timestep](https://developer.apple.com/documentation/accelerate/bnns/adamwoptimizer/timestep)

# timeStep

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS · watchOS 8.0+

A value that’s at least `1` and represents the optimizer’s current time.

> Use the BNNSGraph API instead.

## Declaration

```swift
var timeStep: Float { get set }
```

## See Also

### Inspecting the Properties of an AdamW Optimizer

- [learningRate](learningrate.md): Deprecated. A value that specifies the learning rate.
- [beta1](beta1.md): Deprecated. A value that specifies the first-moment constant, in the range `0` to `1`.
- [beta2](beta2.md): Deprecated. A value that specifies the second-moment constant, in the range `0` to `1`.
- [epsilon](epsilon.md): Deprecated. The epsilon value you use to improve numerical stability.
- [gradientScale](gradientscale.md): Deprecated. A value that specifies the gradient scaling factor.
- [weightDecay](weightdecay.md): Deprecated. The weight decay coefficient.
- [gradientClipping](gradientclipping.md): Deprecated. The gradient clipping function and bounds.
- [BNNS.GradientClipping](../gradientclipping.md): Constants that describe clipping functions.
- [accumulatorCountMultiplier](accumulatorcountmultiplier.md): Deprecated. The number of accumulators required for each parameter.
