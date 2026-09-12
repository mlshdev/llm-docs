> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcoptimizerdescriptor/maximumclippingnorm](https://developer.apple.com/documentation/mlcompute/mlcoptimizerdescriptor/maximumclippingnorm)

# maximumClippingNorm (Swift)

**Framework:** ML Compute  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ (deprecated in 17.4) · iPadOS 15.0+ (deprecated in 17.4) · Mac Catalyst 15.0+ (deprecated in 17.4) · macOS 12.0+ (deprecated in 14.3) · tvOS 15.0+ (deprecated in 17.4)

The maximum clipping value.

## Declaration

```swift
var maximumClippingNorm: Float { get }
```

## See Also

### Inspecting an Optimizer Descriptor

- [learningRate](learningrate.md): Deprecated. The learning rate.
- [gradientRescale](gradientrescale.md): Deprecated. The rescale value the optimizer applies to gradients during updates.
- [appliesGradientClipping](appliesgradientclipping.md): Deprecated. A Boolean that indicates whether you apply gradient clipping.
- [gradientClipMax](gradientclipmax.md): Deprecated. The maximum gradient value before the optimizer rescales the gradient, if you enabled gradient clipping.
- [gradientClipMin](gradientclipmin.md): Deprecated. The minimum gradient value before the optimizer rescales the gradient, if you enabled gradient clipping.
- [regularizationScale](regularizationscale.md): Deprecated. The regularization scale.
- [regularizationType](regularizationtype.md): Deprecated. The regularization type.
- [gradientClippingType](gradientclippingtype.md): Deprecated. The type of clipping the system applies to the gradient.
- [MLCGradientClippingType](../mlcgradientclippingtype.md): Deprecated. A clipping type the system applies to a gradient.
- [customGlobalNorm](customglobalnorm.md): Deprecated. A custom norm the system uses in place of the global norm.

# maximumClippingNorm (Objective-C)

**Framework:** ML Compute  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ (deprecated in 17.4) · iPadOS 15.0+ (deprecated in 17.4) · Mac Catalyst 15.0+ (deprecated in 17.4) · macOS 12.0+ (deprecated in 14.3) · tvOS 15.0+ (deprecated in 17.4)

The maximum clipping value.

## Declaration

```objectivec
@property (nonatomic, readonly) float maximumClippingNorm;
```

## See Also

### Inspecting an Optimizer Descriptor

- [learningRate](learningrate.md): Deprecated. The learning rate.
- [gradientRescale](gradientrescale.md): Deprecated. The rescale value the optimizer applies to gradients during updates.
- [appliesGradientClipping](appliesgradientclipping.md): Deprecated. A Boolean that indicates whether you apply gradient clipping.
- [gradientClipMax](gradientclipmax.md): Deprecated. The maximum gradient value before the optimizer rescales the gradient, if you enabled gradient clipping.
- [gradientClipMin](gradientclipmin.md): Deprecated. The minimum gradient value before the optimizer rescales the gradient, if you enabled gradient clipping.
- [regularizationScale](regularizationscale.md): Deprecated. The regularization scale.
- [regularizationType](regularizationtype.md): Deprecated. The regularization type.
- [gradientClippingType](gradientclippingtype.md): Deprecated. The type of clipping the system applies to the gradient.
- [MLCGradientClippingType](../mlcgradientclippingtype.md): Deprecated. A clipping type the system applies to a gradient.
- [customGlobalNorm](customglobalnorm.md): Deprecated. A custom norm the system uses in place of the global norm.
