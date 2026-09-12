> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcoptimizerdescriptor/gradientrescale](https://developer.apple.com/documentation/mlcompute/mlcoptimizerdescriptor/gradientrescale)

# gradientRescale (Swift)

**Framework:** ML Compute  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

The rescale value the optimizer applies to gradients during updates.

## Declaration

```swift
var gradientRescale: Float { get }
```

## See Also

### Inspecting an Optimizer Descriptor

- [learningRate](learningrate.md): Deprecated. The learning rate.
- [appliesGradientClipping](appliesgradientclipping.md): Deprecated. A Boolean that indicates whether you apply gradient clipping.
- [gradientClipMax](gradientclipmax.md): Deprecated. The maximum gradient value before the optimizer rescales the gradient, if you enabled gradient clipping.
- [gradientClipMin](gradientclipmin.md): Deprecated. The minimum gradient value before the optimizer rescales the gradient, if you enabled gradient clipping.
- [regularizationScale](regularizationscale.md): Deprecated. The regularization scale.
- [regularizationType](regularizationtype.md): Deprecated. The regularization type.
- [gradientClippingType](gradientclippingtype.md): Deprecated. The type of clipping the system applies to the gradient.
- [MLCGradientClippingType](../mlcgradientclippingtype.md): Deprecated. A clipping type the system applies to a gradient.
- [maximumClippingNorm](maximumclippingnorm.md): Deprecated. The maximum clipping value.
- [customGlobalNorm](customglobalnorm.md): Deprecated. A custom norm the system uses in place of the global norm.

# gradientRescale (Objective-C)

**Framework:** ML Compute  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

The rescale value the optimizer applies to gradients during updates.

## Declaration

```objectivec
@property (nonatomic, readonly) float gradientRescale;
```

## See Also

### Inspecting an Optimizer Descriptor

- [learningRate](learningrate.md): Deprecated. The learning rate.
- [appliesGradientClipping](appliesgradientclipping.md): Deprecated. A Boolean that indicates whether you apply gradient clipping.
- [gradientClipMax](gradientclipmax.md): Deprecated. The maximum gradient value before the optimizer rescales the gradient, if you enabled gradient clipping.
- [gradientClipMin](gradientclipmin.md): Deprecated. The minimum gradient value before the optimizer rescales the gradient, if you enabled gradient clipping.
- [regularizationScale](regularizationscale.md): Deprecated. The regularization scale.
- [regularizationType](regularizationtype.md): Deprecated. The regularization type.
- [gradientClippingType](gradientclippingtype.md): Deprecated. The type of clipping the system applies to the gradient.
- [MLCGradientClippingType](../mlcgradientclippingtype.md): Deprecated. A clipping type the system applies to a gradient.
- [maximumClippingNorm](maximumclippingnorm.md): Deprecated. The maximum clipping value.
- [customGlobalNorm](customglobalnorm.md): Deprecated. A custom norm the system uses in place of the global norm.
