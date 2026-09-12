> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsnnoptimizerdescriptor/init(learningrate:gradientrescale:applygradientclipping:gradientclipmax:gradientclipmin:regularizationtype:regularizationscale:)](https://developer.apple.com/documentation/metalperformanceshaders/mpsnnoptimizerdescriptor/init(learningrate:gradientrescale:applygradientclipping:gradientclipmax:gradientclipmin:regularizationtype:regularizationscale:))

# init(learningRate:gradientRescale:applyGradientClipping:gradientClipMax:gradientClipMin:regularizationType:regularizationScale:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Initializer  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

## Declaration

```swift
init(learningRate: Float, gradientRescale: Float, applyGradientClipping: Bool, gradientClipMax: Float, gradientClipMin: Float, regularizationType: MPSNNRegularizationType, regularizationScale: Float)
```

# initWithLearningRate:gradientRescale:applyGradientClipping:gradientClipMax:gradientClipMin:regularizationType:regularizationScale: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

## Declaration

```objectivec
- (instancetype) initWithLearningRate:(float) learningRate gradientRescale:(float) gradientRescale applyGradientClipping:(BOOL) applyGradientClipping gradientClipMax:(float) gradientClipMax gradientClipMin:(float) gradientClipMin regularizationType:(MPSNNRegularizationType) regularizationType regularizationScale:(float) regularizationScale;
```
