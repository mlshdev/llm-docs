> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcoptimizerdescriptor](https://developer.apple.com/documentation/mlcompute/mlcoptimizerdescriptor)

# MLCOptimizerDescriptor (Swift)

**Framework:** ML Compute  
**Kind:** Class  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

A configuration object you use to create an optimizer.

## Declaration

```swift
class MLCOptimizerDescriptor
```

## Topics

### Creating an Optimizer Descriptor

- [init(learningRate:gradientRescale:regularizationType:regularizationScale:)](mlcoptimizerdescriptor/init%28learningrate_gradientrescale_regularizationtype_regularizationscale_%29.md): Deprecated. Creates an optimizer descriptor with the learning rate, gradient rescale, regularization type, and regulation scale that you specify.
- [init(learningRate:gradientRescale:appliesGradientClipping:gradientClipMax:gradientClipMin:regularizationType:regularizationScale:)](mlcoptimizerdescriptor/init%28learningrate_gradientrescale_appliesgradientclipping_gradientclipmax_gradientclipmin_regularizationtype_regularizationscale_%29.md): Deprecated. Creates a descriptor with the learning rate, gradient rescale, clipping option and values, and regularization type and scale that you specify.
- [init(learningRate:gradientRescale:appliesGradientClipping:gradientClippingType:gradientClipMax:gradientClipMin:maximumClippingNorm:customGlobalNorm:regularizationType:regularizationScale:)](mlcoptimizerdescriptor/init%28learningrate_gradientrescale_appliesgradientclipping_gradientclippingtype_gradientclipmax_gradientclipmin_maximumclippingnorm_customglobalnorm_regularizationtype_regularizatio~3c2d6b04.md): Deprecated. Creates a descriptor with the learning rate, gradient rescale, clipping option and values, and regularization type and scale that you specify.

### Inspecting an Optimizer Descriptor

- [learningRate](mlcoptimizerdescriptor/learningrate.md): Deprecated. The learning rate.
- [gradientRescale](mlcoptimizerdescriptor/gradientrescale.md): Deprecated. The rescale value the optimizer applies to gradients during updates.
- [appliesGradientClipping](mlcoptimizerdescriptor/appliesgradientclipping.md): Deprecated. A Boolean that indicates whether you apply gradient clipping.
- [gradientClipMax](mlcoptimizerdescriptor/gradientclipmax.md): Deprecated. The maximum gradient value before the optimizer rescales the gradient, if you enabled gradient clipping.
- [gradientClipMin](mlcoptimizerdescriptor/gradientclipmin.md): Deprecated. The minimum gradient value before the optimizer rescales the gradient, if you enabled gradient clipping.
- [regularizationScale](mlcoptimizerdescriptor/regularizationscale.md): Deprecated. The regularization scale.
- [regularizationType](mlcoptimizerdescriptor/regularizationtype.md): Deprecated. The regularization type.
- [gradientClippingType](mlcoptimizerdescriptor/gradientclippingtype.md): Deprecated. The type of clipping the system applies to the gradient.
- [MLCGradientClippingType](mlcgradientclippingtype.md): Deprecated. A clipping type the system applies to a gradient.
- [maximumClippingNorm](mlcoptimizerdescriptor/maximumclippingnorm.md): Deprecated. The maximum clipping value.
- [customGlobalNorm](mlcoptimizerdescriptor/customglobalnorm.md): Deprecated. A custom norm the system uses in place of the global norm.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Supporting Types

- [MLCRegularizationType](mlcregularizationtype.md): Deprecated. A regularization function to use with an optimizer.

# MLCOptimizerDescriptor (Objective-C)

**Framework:** ML Compute  
**Kind:** Class  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

A configuration object you use to create an optimizer.

## Declaration

```objectivec
@interface MLCOptimizerDescriptor : NSObject
```

## Topics

### Creating an Optimizer Descriptor

- [descriptorWithLearningRate:gradientRescale:regularizationType:regularizationScale:](mlcoptimizerdescriptor/init%28learningrate_gradientrescale_regularizationtype_regularizationscale_%29.md): Deprecated. Creates an optimizer descriptor with the learning rate, gradient rescale, regularization type, and regulation scale that you specify.
- [descriptorWithLearningRate:gradientRescale:appliesGradientClipping:gradientClipMax:gradientClipMin:regularizationType:regularizationScale:](mlcoptimizerdescriptor/init%28learningrate_gradientrescale_appliesgradientclipping_gradientclipmax_gradientclipmin_regularizationtype_regularizationscale_%29.md): Deprecated. Creates a descriptor with the learning rate, gradient rescale, clipping option and values, and regularization type and scale that you specify.
- [descriptorWithLearningRate:gradientRescale:appliesGradientClipping:gradientClippingType:gradientClipMax:gradientClipMin:maximumClippingNorm:customGlobalNorm:regularizationType:regularizationScale:](mlcoptimizerdescriptor/init%28learningrate_gradientrescale_appliesgradientclipping_gradientclippingtype_gradientclipmax_gradientclipmin_maximumclippingnorm_customglobalnorm_regularizationtype_regularizatio~3c2d6b04.md): Deprecated. Creates a descriptor with the learning rate, gradient rescale, clipping option and values, and regularization type and scale that you specify.

### Inspecting an Optimizer Descriptor

- [learningRate](mlcoptimizerdescriptor/learningrate.md): Deprecated. The learning rate.
- [gradientRescale](mlcoptimizerdescriptor/gradientrescale.md): Deprecated. The rescale value the optimizer applies to gradients during updates.
- [appliesGradientClipping](mlcoptimizerdescriptor/appliesgradientclipping.md): Deprecated. A Boolean that indicates whether you apply gradient clipping.
- [gradientClipMax](mlcoptimizerdescriptor/gradientclipmax.md): Deprecated. The maximum gradient value before the optimizer rescales the gradient, if you enabled gradient clipping.
- [gradientClipMin](mlcoptimizerdescriptor/gradientclipmin.md): Deprecated. The minimum gradient value before the optimizer rescales the gradient, if you enabled gradient clipping.
- [regularizationScale](mlcoptimizerdescriptor/regularizationscale.md): Deprecated. The regularization scale.
- [regularizationType](mlcoptimizerdescriptor/regularizationtype.md): Deprecated. The regularization type.
- [gradientClippingType](mlcoptimizerdescriptor/gradientclippingtype.md): Deprecated. The type of clipping the system applies to the gradient.
- [MLCGradientClippingType](mlcgradientclippingtype.md): Deprecated. A clipping type the system applies to a gradient.
- [maximumClippingNorm](mlcoptimizerdescriptor/maximumclippingnorm.md): Deprecated. The maximum clipping value.
- [customGlobalNorm](mlcoptimizerdescriptor/customglobalnorm.md): Deprecated. A custom norm the system uses in place of the global norm.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Supporting Types

- [MLCRegularizationType](mlcregularizationtype.md): Deprecated. A regularization function to use with an optimizer.
