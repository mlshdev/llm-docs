> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnns/sgdmomentumoptimizer/init(learningrate:momentum:gradientscale:regularizationscale:clipsgradientsto:usesnestrovmomentum:regularizationfunction:sgdmomentumvariant:)](https://developer.apple.com/documentation/accelerate/bnns/sgdmomentumoptimizer/init(learningrate:momentum:gradientscale:regularizationscale:clipsgradientsto:usesnestrovmomentum:regularizationfunction:sgdmomentumvariant:))

# init(learningRate:momentum:gradientScale:regularizationScale:clipsGradientsTo:usesNestrovMomentum:regularizationFunction:sgdMomentumVariant:)

**Framework:** Accelerate  
**Kind:** Initializer  
**Availability:** iOS 14.0+ (deprecated in 15.0) · iPadOS 14.0+ (deprecated in 15.0) · Mac Catalyst 14.0+ (deprecated in 15.0) · macOS 11.0+ (deprecated in 12.0) · tvOS 14.0+ (deprecated in 15.0) · visionOS · watchOS 7.0+ (deprecated in 8.0)

Returns a new stochastic gradient descent (SGD) with momentum optimizer object.

## Declaration

```swift
init(learningRate: Float, momentum: Float, gradientScale: Float, regularizationScale: Float, clipsGradientsTo gradientBounds: ClosedRange<Float>? = nil, usesNestrovMomentum: Bool, regularizationFunction: BNNSOptimizerRegularizationFunction, sgdMomentumVariant: BNNSOptimizerSGDMomentumVariant)
```

## Parameters

- `learningRate`: A value that specifies the learning rate.
- `momentum`: The rate of momentum decay.
- `gradientScale`: A value that specifies the gradient scaling factor.
- `regularizationScale`: A value that specifies the regularization scaling factor.
- `gradientBounds`: The values for the minimum and maximum gradients.
- `usesNestrovMomentum`: A Boolean value that specifies whether to use Nesterov momentum update.
- `regularizationFunction`: The variable that specifies the regularization function.
- `sgdMomentumVariant`: The variable that specifies the momentum variant.
