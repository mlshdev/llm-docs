> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcoptimizer](https://developer.apple.com/documentation/mlcompute/mlcoptimizer)

# MLCOptimizer (Swift)

**Framework:** ML Compute  
**Kind:** Class  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

The base class for all framework optimizers.

## Declaration

```swift
class MLCOptimizer
```

## Topics

### Inspecting an Optimizer

- [learningRate](mlcoptimizer/learningrate.md): Deprecated. The learning rate.
- [gradientRescale](mlcoptimizer/gradientrescale.md): Deprecated. The rescale value the optimizer applies to gradients during updates.
- [appliesGradientClipping](mlcoptimizer/appliesgradientclipping.md): Deprecated. A Boolean value that indicates whether you apply gradient clipping.
- [gradientClipMax](mlcoptimizer/gradientclipmax.md): Deprecated. The maximum gradient value before the optimizer rescales the gradient, if you enable gradient clipping.
- [gradientClipMin](mlcoptimizer/gradientclipmin.md): Deprecated. The minimum gradient value before the optimizer rescales the gradient, if you enable gradient clipping.
- [regularizationScale](mlcoptimizer/regularizationscale.md): Deprecated. The regularization scale.
- [regularizationType](mlcoptimizer/regularizationtype.md): Deprecated. The regularization type.
- [gradientClippingType](mlcoptimizer/gradientclippingtype.md): Deprecated. The type of clipping the system applies to the gradient.
- [MLCGradientClippingType](mlcgradientclippingtype.md): Deprecated. A clipping type the system applies to a gradient.
- [maximumClippingNorm](mlcoptimizer/maximumclippingnorm.md): Deprecated. The maximum clipping value.
- [customGlobalNorm](mlcoptimizer/customglobalnorm.md): Deprecated. A custom norm the system uses in place of the global norm.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [MLCAdamOptimizer](mlcadamoptimizer.md)
- [MLCAdamWOptimizer](mlcadamwoptimizer.md)
- [MLCRMSPropOptimizer](mlcrmspropoptimizer.md)
- [MLCSGDOptimizer](mlcsgdoptimizer.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Optimizer Types

- [MLCSGDOptimizer](mlcsgdoptimizer.md): Deprecated. An optimizer that represents the stochastic gradient decent algorithm.
- [MLCRMSPropOptimizer](mlcrmspropoptimizer.md): Deprecated. An optimizer that represents the root mean square propagation algorithm.
- [MLCAdamOptimizer](mlcadamoptimizer.md): Deprecated. An optimizer that represents the adaptive moment estimation algorithm.
- [MLCAdamWOptimizer](mlcadamwoptimizer.md): Deprecated. An optimizer that represents the Adam algorithm with weight decay.

# MLCOptimizer (Objective-C)

**Framework:** ML Compute  
**Kind:** Class  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

The base class for all framework optimizers.

## Declaration

```objectivec
@interface MLCOptimizer : NSObject
```

## Topics

### Inspecting an Optimizer

- [learningRate](mlcoptimizer/learningrate.md): Deprecated. The learning rate.
- [gradientRescale](mlcoptimizer/gradientrescale.md): Deprecated. The rescale value the optimizer applies to gradients during updates.
- [appliesGradientClipping](mlcoptimizer/appliesgradientclipping.md): Deprecated. A Boolean value that indicates whether you apply gradient clipping.
- [gradientClipMax](mlcoptimizer/gradientclipmax.md): Deprecated. The maximum gradient value before the optimizer rescales the gradient, if you enable gradient clipping.
- [gradientClipMin](mlcoptimizer/gradientclipmin.md): Deprecated. The minimum gradient value before the optimizer rescales the gradient, if you enable gradient clipping.
- [regularizationScale](mlcoptimizer/regularizationscale.md): Deprecated. The regularization scale.
- [regularizationType](mlcoptimizer/regularizationtype.md): Deprecated. The regularization type.
- [gradientClippingType](mlcoptimizer/gradientclippingtype.md): Deprecated. The type of clipping the system applies to the gradient.
- [MLCGradientClippingType](mlcgradientclippingtype.md): Deprecated. A clipping type the system applies to a gradient.
- [maximumClippingNorm](mlcoptimizer/maximumclippingnorm.md): Deprecated. The maximum clipping value.
- [customGlobalNorm](mlcoptimizer/customglobalnorm.md): Deprecated. A custom norm the system uses in place of the global norm.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [MLCAdamOptimizer](mlcadamoptimizer.md)
- [MLCAdamWOptimizer](mlcadamwoptimizer.md)
- [MLCRMSPropOptimizer](mlcrmspropoptimizer.md)
- [MLCSGDOptimizer](mlcsgdoptimizer.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Optimizer Types

- [MLCSGDOptimizer](mlcsgdoptimizer.md): Deprecated. An optimizer that represents the stochastic gradient decent algorithm.
- [MLCRMSPropOptimizer](mlcrmspropoptimizer.md): Deprecated. An optimizer that represents the root mean square propagation algorithm.
- [MLCAdamOptimizer](mlcadamoptimizer.md): Deprecated. An optimizer that represents the adaptive moment estimation algorithm.
- [MLCAdamWOptimizer](mlcadamwoptimizer.md): Deprecated. An optimizer that represents the Adam algorithm with weight decay.
