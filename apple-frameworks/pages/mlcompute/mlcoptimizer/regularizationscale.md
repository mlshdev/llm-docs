> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcoptimizer/regularizationscale](https://developer.apple.com/documentation/mlcompute/mlcoptimizer/regularizationscale)

# regularizationScale (Swift)

**Framework:** ML Compute  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

The regularization scale.

## Declaration

```swift
var regularizationScale: Float { get }
```

## See Also

### Inspecting an Optimizer

- [learningRate](learningrate.md): Deprecated. The learning rate.
- [gradientRescale](gradientrescale.md): Deprecated. The rescale value the optimizer applies to gradients during updates.
- [appliesGradientClipping](appliesgradientclipping.md): Deprecated. A Boolean value that indicates whether you apply gradient clipping.
- [gradientClipMax](gradientclipmax.md): Deprecated. The maximum gradient value before the optimizer rescales the gradient, if you enable gradient clipping.
- [gradientClipMin](gradientclipmin.md): Deprecated. The minimum gradient value before the optimizer rescales the gradient, if you enable gradient clipping.
- [regularizationType](regularizationtype.md): Deprecated. The regularization type.
- [gradientClippingType](gradientclippingtype.md): Deprecated. The type of clipping the system applies to the gradient.
- [MLCGradientClippingType](../mlcgradientclippingtype.md): Deprecated. A clipping type the system applies to a gradient.
- [maximumClippingNorm](maximumclippingnorm.md): Deprecated. The maximum clipping value.
- [customGlobalNorm](customglobalnorm.md): Deprecated. A custom norm the system uses in place of the global norm.

# regularizationScale (Objective-C)

**Framework:** ML Compute  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

The regularization scale.

## Declaration

```objectivec
@property (nonatomic, readonly) float regularizationScale;
```

## See Also

### Inspecting an Optimizer

- [learningRate](learningrate.md): Deprecated. The learning rate.
- [gradientRescale](gradientrescale.md): Deprecated. The rescale value the optimizer applies to gradients during updates.
- [appliesGradientClipping](appliesgradientclipping.md): Deprecated. A Boolean value that indicates whether you apply gradient clipping.
- [gradientClipMax](gradientclipmax.md): Deprecated. The maximum gradient value before the optimizer rescales the gradient, if you enable gradient clipping.
- [gradientClipMin](gradientclipmin.md): Deprecated. The minimum gradient value before the optimizer rescales the gradient, if you enable gradient clipping.
- [regularizationType](regularizationtype.md): Deprecated. The regularization type.
- [gradientClippingType](gradientclippingtype.md): Deprecated. The type of clipping the system applies to the gradient.
- [MLCGradientClippingType](../mlcgradientclippingtype.md): Deprecated. A clipping type the system applies to a gradient.
- [maximumClippingNorm](maximumclippingnorm.md): Deprecated. The maximum clipping value.
- [customGlobalNorm](customglobalnorm.md): Deprecated. A custom norm the system uses in place of the global norm.
