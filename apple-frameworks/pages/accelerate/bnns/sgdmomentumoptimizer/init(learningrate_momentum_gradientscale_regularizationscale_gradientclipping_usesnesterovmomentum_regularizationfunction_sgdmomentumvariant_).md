> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnns/sgdmomentumoptimizer/init(learningrate:momentum:gradientscale:regularizationscale:gradientclipping:usesnesterovmomentum:regularizationfunction:sgdmomentumvariant:)](https://developer.apple.com/documentation/accelerate/bnns/sgdmomentumoptimizer/init(learningrate:momentum:gradientscale:regularizationscale:gradientclipping:usesnesterovmomentum:regularizationfunction:sgdmomentumvariant:))

# init(learningRate:momentum:gradientScale:regularizationScale:gradientClipping:usesNesterovMomentum:regularizationFunction:sgdMomentumVariant:)

**Framework:** Accelerate  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS · watchOS 8.0+

## Declaration

```swift
init(learningRate: Float, momentum: Float = 0, gradientScale: Float, regularizationScale: Float, gradientClipping: BNNS.GradientClipping, usesNesterovMomentum: Bool = false, regularizationFunction: BNNSOptimizerRegularizationFunction, sgdMomentumVariant: BNNSOptimizerSGDMomentumVariant)
```
