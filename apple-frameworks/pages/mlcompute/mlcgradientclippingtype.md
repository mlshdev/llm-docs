> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcgradientclippingtype](https://developer.apple.com/documentation/mlcompute/mlcgradientclippingtype)

# MLCGradientClippingType (Swift)

**Framework:** ML Compute  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ (deprecated in 17.4) · iPadOS 15.0+ (deprecated in 17.4) · Mac Catalyst 15.0+ (deprecated in 17.4) · macOS 12.0+ (deprecated in 14.3) · tvOS 15.0+ (deprecated in 17.4)

A clipping type the system applies to a gradient.

## Declaration

```swift
enum MLCGradientClippingType
```

## Topics

### Gradient Clipping Types

- [MLCGradientClippingType.byValue](mlcgradientclippingtype/byvalue.md): Deprecated. An option that clips by value.
- [MLCGradientClippingType.byNorm](mlcgradientclippingtype/bynorm.md): Deprecated. An option that clips by norm.
- [MLCGradientClippingType.byGlobalNorm](mlcgradientclippingtype/byglobalnorm.md): Deprecated. An option that clips by global norm.
- [debugDescription](mlcgradientclippingtype/debugdescription.md): A textual description of the gradient clipping type, suitable for debugging.

### Initializers

- [init(rawValue:)](mlcgradientclippingtype/init%28rawvalue_%29.md): Deprecated.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Inspecting an Optimizer

- [learningRate](mlcoptimizer/learningrate.md): Deprecated. The learning rate.
- [gradientRescale](mlcoptimizer/gradientrescale.md): Deprecated. The rescale value the optimizer applies to gradients during updates.
- [appliesGradientClipping](mlcoptimizer/appliesgradientclipping.md): Deprecated. A Boolean value that indicates whether you apply gradient clipping.
- [gradientClipMax](mlcoptimizer/gradientclipmax.md): Deprecated. The maximum gradient value before the optimizer rescales the gradient, if you enable gradient clipping.
- [gradientClipMin](mlcoptimizer/gradientclipmin.md): Deprecated. The minimum gradient value before the optimizer rescales the gradient, if you enable gradient clipping.
- [regularizationScale](mlcoptimizer/regularizationscale.md): Deprecated. The regularization scale.
- [regularizationType](mlcoptimizer/regularizationtype.md): Deprecated. The regularization type.
- [gradientClippingType](mlcoptimizer/gradientclippingtype.md): Deprecated. The type of clipping the system applies to the gradient.
- [maximumClippingNorm](mlcoptimizer/maximumclippingnorm.md): Deprecated. The maximum clipping value.
- [customGlobalNorm](mlcoptimizer/customglobalnorm.md): Deprecated. A custom norm the system uses in place of the global norm.

# MLCGradientClippingType (Objective-C)

**Framework:** ML Compute  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+

A clipping type the system applies to a gradient.

## Declaration

```objectivec
enum MLCGradientClippingType : int32_t;
```

## Topics

### Gradient Clipping Types

- [MLCGradientClippingTypeByValue](mlcgradientclippingtype/byvalue.md): Deprecated. An option that clips by value.
- [MLCGradientClippingTypeByNorm](mlcgradientclippingtype/bynorm.md): Deprecated. An option that clips by norm.
- [MLCGradientClippingTypeByGlobalNorm](mlcgradientclippingtype/byglobalnorm.md): Deprecated. An option that clips by global norm.
- [MLCGradientClippingTypeDebugDescription](mlcgradientclippingtype/debugdescription.md): A textual description of the gradient clipping type, suitable for debugging.

## See Also

### Inspecting an Optimizer

- [learningRate](mlcoptimizer/learningrate.md): Deprecated. The learning rate.
- [gradientRescale](mlcoptimizer/gradientrescale.md): Deprecated. The rescale value the optimizer applies to gradients during updates.
- [appliesGradientClipping](mlcoptimizer/appliesgradientclipping.md): Deprecated. A Boolean value that indicates whether you apply gradient clipping.
- [gradientClipMax](mlcoptimizer/gradientclipmax.md): Deprecated. The maximum gradient value before the optimizer rescales the gradient, if you enable gradient clipping.
- [gradientClipMin](mlcoptimizer/gradientclipmin.md): Deprecated. The minimum gradient value before the optimizer rescales the gradient, if you enable gradient clipping.
- [regularizationScale](mlcoptimizer/regularizationscale.md): Deprecated. The regularization scale.
- [regularizationType](mlcoptimizer/regularizationtype.md): Deprecated. The regularization type.
- [gradientClippingType](mlcoptimizer/gradientclippingtype.md): Deprecated. The type of clipping the system applies to the gradient.
- [maximumClippingNorm](mlcoptimizer/maximumclippingnorm.md): Deprecated. The maximum clipping value.
- [customGlobalNorm](mlcoptimizer/customglobalnorm.md): Deprecated. A custom norm the system uses in place of the global norm.
