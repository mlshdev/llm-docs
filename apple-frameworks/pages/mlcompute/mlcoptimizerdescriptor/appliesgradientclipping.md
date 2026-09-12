> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcoptimizerdescriptor/appliesgradientclipping](https://developer.apple.com/documentation/mlcompute/mlcoptimizerdescriptor/appliesgradientclipping)

# appliesGradientClipping (Swift)

**Framework:** ML Compute  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

A Boolean that indicates whether you apply gradient clipping.

## Declaration

```swift
var appliesGradientClipping: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The default value is `false`.

## See Also

### Inspecting an Optimizer Descriptor

- [learningRate](learningrate.md): Deprecated. The learning rate.
- [gradientRescale](gradientrescale.md): Deprecated. The rescale value the optimizer applies to gradients during updates.
- [gradientClipMax](gradientclipmax.md): Deprecated. The maximum gradient value before the optimizer rescales the gradient, if you enabled gradient clipping.
- [gradientClipMin](gradientclipmin.md): Deprecated. The minimum gradient value before the optimizer rescales the gradient, if you enabled gradient clipping.
- [regularizationScale](regularizationscale.md): Deprecated. The regularization scale.
- [regularizationType](regularizationtype.md): Deprecated. The regularization type.
- [gradientClippingType](gradientclippingtype.md): Deprecated. The type of clipping the system applies to the gradient.
- [MLCGradientClippingType](../mlcgradientclippingtype.md): Deprecated. A clipping type the system applies to a gradient.
- [maximumClippingNorm](maximumclippingnorm.md): Deprecated. The maximum clipping value.
- [customGlobalNorm](customglobalnorm.md): Deprecated. A custom norm the system uses in place of the global norm.

# appliesGradientClipping (Objective-C)

**Framework:** ML Compute  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

A Boolean that indicates whether you apply gradient clipping.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL appliesGradientClipping;
```

<a id="Discussion"></a>

## Discussion

The default value is `false`.

## See Also

### Inspecting an Optimizer Descriptor

- [learningRate](learningrate.md): Deprecated. The learning rate.
- [gradientRescale](gradientrescale.md): Deprecated. The rescale value the optimizer applies to gradients during updates.
- [gradientClipMax](gradientclipmax.md): Deprecated. The maximum gradient value before the optimizer rescales the gradient, if you enabled gradient clipping.
- [gradientClipMin](gradientclipmin.md): Deprecated. The minimum gradient value before the optimizer rescales the gradient, if you enabled gradient clipping.
- [regularizationScale](regularizationscale.md): Deprecated. The regularization scale.
- [regularizationType](regularizationtype.md): Deprecated. The regularization type.
- [gradientClippingType](gradientclippingtype.md): Deprecated. The type of clipping the system applies to the gradient.
- [MLCGradientClippingType](../mlcgradientclippingtype.md): Deprecated. A clipping type the system applies to a gradient.
- [maximumClippingNorm](maximumclippingnorm.md): Deprecated. The maximum clipping value.
- [customGlobalNorm](customglobalnorm.md): Deprecated. A custom norm the system uses in place of the global norm.
