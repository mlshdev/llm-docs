> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcoptimizerdescriptor/init(learningrate:gradientrescale:regularizationtype:regularizationscale:)](https://developer.apple.com/documentation/mlcompute/mlcoptimizerdescriptor/init(learningrate:gradientrescale:regularizationtype:regularizationscale:))

# init(learningRate:gradientRescale:regularizationType:regularizationScale:) (Swift)

**Framework:** ML Compute  
**Kind:** Initializer  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Creates an optimizer descriptor with the learning rate, gradient rescale, regularization type, and regulation scale that you specify.

## Declaration

```swift
convenience init(learningRate: Float, gradientRescale: Float, regularizationType: MLCRegularizationType, regularizationScale: Float)
```

## Parameters

- `learningRate`: The learning rate.
- `gradientRescale`: The gradient rescale value.
- `regularizationType`: The regularization type.
- `regularizationScale`: The regularization scale.

## See Also

### Creating an Optimizer Descriptor

- [init(learningRate:gradientRescale:appliesGradientClipping:gradientClipMax:gradientClipMin:regularizationType:regularizationScale:)](init%28learningrate_gradientrescale_appliesgradientclipping_gradientclipmax_gradientclipmin_regularizationtype_regularizationscale_%29.md): Deprecated. Creates a descriptor with the learning rate, gradient rescale, clipping option and values, and regularization type and scale that you specify.
- [init(learningRate:gradientRescale:appliesGradientClipping:gradientClippingType:gradientClipMax:gradientClipMin:maximumClippingNorm:customGlobalNorm:regularizationType:regularizationScale:)](init%28learningrate_gradientrescale_appliesgradientclipping_gradientclippingtype_gradientclipmax_gradientclipmin_maximumclippingnorm_customglobalnorm_regularizationtype_regularizatio~3c2d6b04.md): Deprecated. Creates a descriptor with the learning rate, gradient rescale, clipping option and values, and regularization type and scale that you specify.

# descriptorWithLearningRate:gradientRescale:regularizationType:regularizationScale: (Objective-C)

**Framework:** ML Compute  
**Kind:** Type Method  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Creates an optimizer descriptor with the learning rate, gradient rescale, regularization type, and regulation scale that you specify.

## Declaration

```objectivec
+ (instancetype) descriptorWithLearningRate:(float) learningRate gradientRescale:(float) gradientRescale regularizationType:(MLCRegularizationType) regularizationType regularizationScale:(float) regularizationScale;
```

## Parameters

- `learningRate`: The learning rate.
- `gradientRescale`: The gradient rescale value.
- `regularizationType`: The regularization type.
- `regularizationScale`: The regularization scale.

## See Also

### Creating an Optimizer Descriptor

- [descriptorWithLearningRate:gradientRescale:appliesGradientClipping:gradientClipMax:gradientClipMin:regularizationType:regularizationScale:](init%28learningrate_gradientrescale_appliesgradientclipping_gradientclipmax_gradientclipmin_regularizationtype_regularizationscale_%29.md): Deprecated. Creates a descriptor with the learning rate, gradient rescale, clipping option and values, and regularization type and scale that you specify.
- [descriptorWithLearningRate:gradientRescale:appliesGradientClipping:gradientClippingType:gradientClipMax:gradientClipMin:maximumClippingNorm:customGlobalNorm:regularizationType:regularizationScale:](init%28learningrate_gradientrescale_appliesgradientclipping_gradientclippingtype_gradientclipmax_gradientclipmin_maximumclippingnorm_customglobalnorm_regularizationtype_regularizatio~3c2d6b04.md): Deprecated. Creates a descriptor with the learning rate, gradient rescale, clipping option and values, and regularization type and scale that you specify.
