> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnns/rmspropoptimizer/init(learningrate:alpha:epsilon:centered:momentum:gradientscale:regularizationscale:gradientclipping:regularizationfunction:)](https://developer.apple.com/documentation/accelerate/bnns/rmspropoptimizer/init(learningrate:alpha:epsilon:centered:momentum:gradientscale:regularizationscale:gradientclipping:regularizationfunction:))

# init(learningRate:alpha:epsilon:centered:momentum:gradientScale:regularizationScale:gradientClipping:regularizationFunction:)

**Framework:** Accelerate  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS · watchOS 8.0+

Returns a new RMSProp optimizer object with gradient clipped by value or clipped by norm.

## Declaration

```swift
init(learningRate: Float = 1e-2, alpha: Float = 0.99, epsilon: Float = 1e-8, centered: Bool, momentum: Float = 0, gradientScale: Float, regularizationScale: Float, gradientClipping: BNNS.GradientClipping, regularizationFunction: BNNSOptimizerRegularizationFunction)
```

## Parameters

- `learningRate`: A value that specifies the learning rate.
- `alpha`: A constant that specifies smoothing, in the range `0` to `1`.
- `epsilon`: A term that the optimizer adds to the denominator.
- `centered`: A Boolean value that specifies whether to use the centered variant.
- `momentum`: The rate of momentum decay.
- `gradientScale`: A value that specifies the gradient scaling factor.
- `regularizationScale`: A value that specifies the regularization scaling factor.
- `gradientClipping`: The gradient clipping function and bounds.
- `regularizationFunction`: The variable that specifies the regularization function.

## See Also

### Creating an RMSProp Optimizer

- [init(learningRate:alpha:epsilon:centered:momentum:gradientScale:regularizationScale:clipsGradientsTo:regularizationFunction:)](init%28learningrate_alpha_epsilon_centered_momentum_gradientscale_regularizationscale_clipsgradientsto_regularizationfunction_%29.md): Deprecated. Returns a new RMSProp optimizer object.
