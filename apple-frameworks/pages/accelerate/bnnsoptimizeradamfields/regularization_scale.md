> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsoptimizeradamfields/regularization_scale](https://developer.apple.com/documentation/accelerate/bnnsoptimizeradamfields/regularization_scale)

# regularization_scale (Swift)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 18.0) · iPadOS 14.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · tvOS 14.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 7.0+ (deprecated in 11.0)

A value that specifies the regularization scaling factor.

> Use BNNSGraph\* APIs

## Declaration

```swift
var regularization_scale: Float
```

## See Also

### Instance Properties

- [learning_rate](learning_rate.md): Deprecated. A value that specifies the learning rate.
- [beta1](beta1.md): Deprecated. A value that specifies the first moment constant in the range 0 to 1.
- [beta2](beta2.md): Deprecated. A value that specifies the second moment constant in the range 0 to 1.
- [time_step](time_step.md): Deprecated. A value that represents the optimizer’s current time and you’re responsible for updating after optimizing all the layer parameters in your network.
- [epsilon](epsilon.md): Deprecated. An addition for the division in the parameter update stage.
- [gradient_scale](gradient_scale.md): Deprecated. A value that specifies the gradient scaling factor.
- [clip_gradients](clip_gradients.md): Deprecated. A Boolean value that specifies whether to clip the gradient between minimum and maximum values.
- [clip_gradients_min](clip_gradients_min.md): Deprecated. The values for the minimum gradient.
- [clip_gradients_max](clip_gradients_max.md): Deprecated. The values for the maximum gradient.
- [regularization_func](regularization_func.md): Deprecated. The variable that specifies the regularization function.

# regularization_scale (Objective-C)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A value that specifies the regularization scaling factor.

## Declaration

```objectivec
float regularization_scale;
```

## See Also

### Instance Properties

- [learning_rate](learning_rate.md): Deprecated. A value that specifies the learning rate.
- [beta1](beta1.md): Deprecated. A value that specifies the first moment constant in the range 0 to 1.
- [beta2](beta2.md): Deprecated. A value that specifies the second moment constant in the range 0 to 1.
- [time_step](time_step.md): Deprecated. A value that represents the optimizer’s current time and you’re responsible for updating after optimizing all the layer parameters in your network.
- [epsilon](epsilon.md): Deprecated. An addition for the division in the parameter update stage.
- [gradient_scale](gradient_scale.md): Deprecated. A value that specifies the gradient scaling factor.
- [clip_gradients](clip_gradients.md): Deprecated. A Boolean value that specifies whether to clip the gradient between minimum and maximum values.
- [clip_gradients_min](clip_gradients_min.md): Deprecated. The values for the minimum gradient.
- [clip_gradients_max](clip_gradients_max.md): Deprecated. The values for the maximum gradient.
- [regularization_func](regularization_func.md): Deprecated. The variable that specifies the regularization function.
