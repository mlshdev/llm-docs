> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metalperformanceshaders/mpsnnoptimizerdescriptor/optimizerdescriptorwithlearningrate:gradientrescale:applygradientclipping:gradientclipmax:gradientclipmin:regularizationtype:regularizationscale:

# optimizerDescriptorWithLearningRate:gradientRescale:applyGradientClipping:gradientClipMax:gradientClipMin:regularizationType:regularizationScale:

**Interface language:** Objective-C

**Framework:** Metal Performance Shaders  
**Kind:** Type Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

## Declaration

```objectivec
+ (instancetype) optimizerDescriptorWithLearningRate:(float) learningRate gradientRescale:(float) gradientRescale applyGradientClipping:(BOOL) applyGradientClipping gradientClipMax:(float) gradientClipMax gradientClipMin:(float) gradientClipMin regularizationType:(MPSNNRegularizationType) regularizationType regularizationScale:(float) regularizationScale;
```
