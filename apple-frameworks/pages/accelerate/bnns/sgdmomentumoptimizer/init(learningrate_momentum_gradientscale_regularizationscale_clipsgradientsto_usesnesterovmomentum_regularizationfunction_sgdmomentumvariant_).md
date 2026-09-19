> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accelerate/bnns/sgdmomentumoptimizer/init(learningrate:momentum:gradientscale:regularizationscale:clipsgradientsto:usesnesterovmomentum:regularizationfunction:sgdmomentumvariant:)

# init(learningRate:momentum:gradientScale:regularizationScale:clipsGradientsTo:usesNesterovMomentum:regularizationFunction:sgdMomentumVariant:)

**Framework:** Accelerate  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS · watchOS 8.0+

> Use the BNNSGraph API instead.

## Declaration

```swift
init(learningRate: Float, momentum: Float, gradientScale: Float, regularizationScale: Float, clipsGradientsTo gradientBounds: ClosedRange<Float>? = nil, usesNesterovMomentum: Bool, regularizationFunction: BNNSOptimizerRegularizationFunction, sgdMomentumVariant: BNNSOptimizerSGDMomentumVariant)
```
