> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcoptimizerdescriptor/init(learningrate:gradientrescale:appliesgradientclipping:gradientclippingtype:gradientclipmax:gradientclipmin:maximumclippingnorm:customglobalnorm:regularizationtype:regularizationscale:)](https://developer.apple.com/documentation/mlcompute/mlcoptimizerdescriptor/init(learningrate:gradientrescale:appliesgradientclipping:gradientclippingtype:gradientclipmax:gradientclipmin:maximumclippingnorm:customglobalnorm:regularizationtype:regularizationscale:))

# init(learningRate:gradientRescale:appliesGradientClipping:gradientClippingType:gradientClipMax:gradientClipMin:maximumClippingNorm:customGlobalNorm:regularizationType:regularizationScale:) (Swift)

**Framework:** ML Compute  
**Kind:** Initializer  
**Availability:** iOS 15.0+ (deprecated in 17.4) · iPadOS 15.0+ (deprecated in 17.4) · Mac Catalyst 15.0+ (deprecated in 17.4) · macOS 12.0+ (deprecated in 14.3) · tvOS 15.0+ (deprecated in 17.4)

Creates a descriptor with the learning rate, gradient rescale, clipping option and values, and regularization type and scale that you specify.

## Declaration

```swift
convenience init(learningRate: Float, gradientRescale: Float, appliesGradientClipping: Bool, gradientClippingType: MLCGradientClippingType, gradientClipMax: Float, gradientClipMin: Float, maximumClippingNorm: Float, customGlobalNorm: Float, regularizationType: MLCRegularizationType, regularizationScale: Float)
```

## Parameters

- `learningRate`: The learning rate.
- `gradientRescale`: The gradient rescale value.
- `appliesGradientClipping`: A Boolean value that indicates whether you apply gradient clipping.
- `gradientClippingType`: The type of clipping the system applies to gradients.
- `gradientClipMax`: The maximum gradient value before the optimizer rescales the gradient, if you enable gradient clipping.
- `gradientClipMin`: The minimum gradient value before the optimizer rescales the gradient, if you enable gradient clipping.
- `maximumClippingNorm`: The maximum norm to use with gradient clipping.
- `customGlobalNorm`: If nonzero, the value the system uses instead of calculating it.
- `regularizationType`: The regularization type.
- `regularizationScale`: The regularization scale.

## See Also

### Creating an Optimizer Descriptor

- [init(learningRate:gradientRescale:regularizationType:regularizationScale:)](init%28learningrate_gradientrescale_regularizationtype_regularizationscale_%29.md): Deprecated. Creates an optimizer descriptor with the learning rate, gradient rescale, regularization type, and regulation scale that you specify.
- [init(learningRate:gradientRescale:appliesGradientClipping:gradientClipMax:gradientClipMin:regularizationType:regularizationScale:)](init%28learningrate_gradientrescale_appliesgradientclipping_gradientclipmax_gradientclipmin_regularizationtype_regularizationscale_%29.md): Deprecated. Creates a descriptor with the learning rate, gradient rescale, clipping option and values, and regularization type and scale that you specify.

# descriptorWithLearningRate:gradientRescale:appliesGradientClipping:gradientClippingType:gradientClipMax:gradientClipMin:maximumClippingNorm:customGlobalNorm:regularizationType:regularizationScale: (Objective-C)

**Framework:** ML Compute  
**Kind:** Type Method  
**Availability:** iOS 15.0+ (deprecated in 17.4) · iPadOS 15.0+ (deprecated in 17.4) · Mac Catalyst 15.0+ (deprecated in 17.4) · macOS 12.0+ (deprecated in 14.3) · tvOS 15.0+ (deprecated in 17.4)

Creates a descriptor with the learning rate, gradient rescale, clipping option and values, and regularization type and scale that you specify.

## Declaration

```objectivec
+ (instancetype) descriptorWithLearningRate:(float) learningRate gradientRescale:(float) gradientRescale appliesGradientClipping:(BOOL) appliesGradientClipping gradientClippingType:(MLCGradientClippingType) gradientClippingType gradientClipMax:(float) gradientClipMax gradientClipMin:(float) gradientClipMin maximumClippingNorm:(float) maximumClippingNorm customGlobalNorm:(float) customGlobalNorm regularizationType:(MLCRegularizationType) regularizationType regularizationScale:(float) regularizationScale;
```

## Parameters

- `learningRate`: The learning rate.
- `gradientRescale`: The gradient rescale value.
- `appliesGradientClipping`: A Boolean value that indicates whether you apply gradient clipping.
- `gradientClippingType`: The type of clipping the system applies to gradients.
- `gradientClipMax`: The maximum gradient value before the optimizer rescales the gradient, if you enable gradient clipping.
- `gradientClipMin`: The minimum gradient value before the optimizer rescales the gradient, if you enable gradient clipping.
- `maximumClippingNorm`: The maximum norm to use with gradient clipping.
- `customGlobalNorm`: If nonzero, the value the system uses instead of calculating it.
- `regularizationType`: The regularization type.
- `regularizationScale`: The regularization scale.

## See Also

### Creating an Optimizer Descriptor

- [descriptorWithLearningRate:gradientRescale:regularizationType:regularizationScale:](init%28learningrate_gradientrescale_regularizationtype_regularizationscale_%29.md): Deprecated. Creates an optimizer descriptor with the learning rate, gradient rescale, regularization type, and regulation scale that you specify.
- [descriptorWithLearningRate:gradientRescale:appliesGradientClipping:gradientClipMax:gradientClipMin:regularizationType:regularizationScale:](init%28learningrate_gradientrescale_appliesgradientclipping_gradientclipmax_gradientclipmin_regularizationtype_regularizationscale_%29.md): Deprecated. Creates a descriptor with the learning rate, gradient rescale, clipping option and values, and regularization type and scale that you specify.
