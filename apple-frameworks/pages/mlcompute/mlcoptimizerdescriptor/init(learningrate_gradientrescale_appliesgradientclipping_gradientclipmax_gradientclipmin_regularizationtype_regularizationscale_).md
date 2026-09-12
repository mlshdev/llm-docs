> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcoptimizerdescriptor/init(learningrate:gradientrescale:appliesgradientclipping:gradientclipmax:gradientclipmin:regularizationtype:regularizationscale:)](https://developer.apple.com/documentation/mlcompute/mlcoptimizerdescriptor/init(learningrate:gradientrescale:appliesgradientclipping:gradientclipmax:gradientclipmin:regularizationtype:regularizationscale:))

# init(learningRate:gradientRescale:appliesGradientClipping:gradientClipMax:gradientClipMin:regularizationType:regularizationScale:) (Swift)

**Framework:** ML Compute  
**Kind:** Initializer  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Creates a descriptor with the learning rate, gradient rescale, clipping option and values, and regularization type and scale that you specify.

## Declaration

```swift
convenience init(learningRate: Float, gradientRescale: Float, appliesGradientClipping: Bool, gradientClipMax: Float, gradientClipMin: Float, regularizationType: MLCRegularizationType, regularizationScale: Float)
```

## Parameters

- `learningRate`: The learning rate.
- `gradientRescale`: The gradient rescale value.
- `appliesGradientClipping`: A Boolean value that indicates whether you apply gradient clipping.
- `gradientClipMax`: The maximum gradient value before the optimizer rescales the gradient, if you enable gradient clipping.
- `gradientClipMin`: The minimum gradient value before the optimizer rescales the gradient, if you enable gradient clipping.
- `regularizationType`: The regularization type.
- `regularizationScale`: The regularization scale.

## See Also

### Creating an Optimizer Descriptor

- [init(learningRate:gradientRescale:regularizationType:regularizationScale:)](init%28learningrate_gradientrescale_regularizationtype_regularizationscale_%29.md): Deprecated. Creates an optimizer descriptor with the learning rate, gradient rescale, regularization type, and regulation scale that you specify.
- [init(learningRate:gradientRescale:appliesGradientClipping:gradientClippingType:gradientClipMax:gradientClipMin:maximumClippingNorm:customGlobalNorm:regularizationType:regularizationScale:)](init%28learningrate_gradientrescale_appliesgradientclipping_gradientclippingtype_gradientclipmax_gradientclipmin_maximumclippingnorm_customglobalnorm_regularizationtype_regularizatio~3c2d6b04.md): Deprecated. Creates a descriptor with the learning rate, gradient rescale, clipping option and values, and regularization type and scale that you specify.

# descriptorWithLearningRate:gradientRescale:appliesGradientClipping:gradientClipMax:gradientClipMin:regularizationType:regularizationScale: (Objective-C)

**Framework:** ML Compute  
**Kind:** Type Method  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Creates a descriptor with the learning rate, gradient rescale, clipping option and values, and regularization type and scale that you specify.

## Declaration

```objectivec
+ (instancetype) descriptorWithLearningRate:(float) learningRate gradientRescale:(float) gradientRescale appliesGradientClipping:(BOOL) appliesGradientClipping gradientClipMax:(float) gradientClipMax gradientClipMin:(float) gradientClipMin regularizationType:(MLCRegularizationType) regularizationType regularizationScale:(float) regularizationScale;
```

## Parameters

- `learningRate`: The learning rate.
- `gradientRescale`: The gradient rescale value.
- `appliesGradientClipping`: A Boolean value that indicates whether you apply gradient clipping.
- `gradientClipMax`: The maximum gradient value before the optimizer rescales the gradient, if you enable gradient clipping.
- `gradientClipMin`: The minimum gradient value before the optimizer rescales the gradient, if you enable gradient clipping.
- `regularizationType`: The regularization type.
- `regularizationScale`: The regularization scale.

## See Also

### Creating an Optimizer Descriptor

- [descriptorWithLearningRate:gradientRescale:regularizationType:regularizationScale:](init%28learningrate_gradientrescale_regularizationtype_regularizationscale_%29.md): Deprecated. Creates an optimizer descriptor with the learning rate, gradient rescale, regularization type, and regulation scale that you specify.
- [descriptorWithLearningRate:gradientRescale:appliesGradientClipping:gradientClippingType:gradientClipMax:gradientClipMin:maximumClippingNorm:customGlobalNorm:regularizationType:regularizationScale:](init%28learningrate_gradientrescale_appliesgradientclipping_gradientclippingtype_gradientclipmax_gradientclipmin_maximumclippingnorm_customglobalnorm_regularizationtype_regularizatio~3c2d6b04.md): Deprecated. Creates a descriptor with the learning rate, gradient rescale, clipping option and values, and regularization type and scale that you specify.
