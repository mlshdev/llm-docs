> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsoptimizeradamwithclippingfields/clip_gradients_use_norm](https://developer.apple.com/documentation/accelerate/bnnsoptimizeradamwithclippingfields/clip_gradients_use_norm)

# clip_gradients_use_norm (Swift)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 18.0) · iPadOS 14.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · tvOS 14.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 7.0+ (deprecated in 11.0)

An optional value for a known Euclidean norm for clipping by global norm.

> Use BNNSGraph\* APIs

## Declaration

```swift
var clip_gradients_use_norm: Float
```

<a id="Discussion"></a>

## Discussion

Set to `0` to specify that the function computes the norm.

## See Also

### Instance Properties

- [learning_rate](learning_rate.md): Deprecated. A value that specifies the learning rate.
- [beta1](beta1.md): Deprecated. A value that specifies the first moment constant in the range 0 to 1.
- [beta2](beta2.md): Deprecated. A value that specifies the second moment constant in the range 0 to 1.
- [time_step](time_step.md): Deprecated. A value that’s at least 1 and represents the optimizer’s current time.
- [epsilon](epsilon.md): Deprecated. An addition for the division in the parameter update stage.
- [gradient_scale](gradient_scale.md): Deprecated. A value that specifies the gradient scaling factor.
- [regularization_scale](regularization_scale.md): Deprecated. A value that specifies the regularization scaling factor.
- [regularization_func](regularization_func.md): Deprecated. The variable that specifies the regularization function.
- [clipping_func](clipping_func.md): Deprecated. The clipping function.
- [BNNSOptimizerClippingFunction](../bnnsoptimizerclippingfunction.md): Constants that describe clipping functions.
- [clip_gradients_min](clip_gradients_min.md): Deprecated. The minimum clipping value for clipping by value.
- [clip_gradients_max](clip_gradients_max.md): Deprecated. The maximum clipping value for clipping by value.
- [clip_gradients_max_norm](clip_gradients_max_norm.md): Deprecated. The maximum Euclidean norm for clipping by norm and clipping by global norm.

# clip_gradients_use_norm (Objective-C)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An optional value for a known Euclidean norm for clipping by global norm.

## Declaration

```objectivec
float clip_gradients_use_norm;
```

<a id="Discussion"></a>

## Discussion

Set to `0` to specify that the function computes the norm.

## See Also

### Instance Properties

- [learning_rate](learning_rate.md): Deprecated. A value that specifies the learning rate.
- [beta1](beta1.md): Deprecated. A value that specifies the first moment constant in the range 0 to 1.
- [beta2](beta2.md): Deprecated. A value that specifies the second moment constant in the range 0 to 1.
- [time_step](time_step.md): Deprecated. A value that’s at least 1 and represents the optimizer’s current time.
- [epsilon](epsilon.md): Deprecated. An addition for the division in the parameter update stage.
- [gradient_scale](gradient_scale.md): Deprecated. A value that specifies the gradient scaling factor.
- [regularization_scale](regularization_scale.md): Deprecated. A value that specifies the regularization scaling factor.
- [regularization_func](regularization_func.md): Deprecated. The variable that specifies the regularization function.
- [clipping_func](clipping_func.md): Deprecated. The clipping function.
- [BNNSOptimizerClippingFunction](../bnnsoptimizerclippingfunction.md): Constants that describe clipping functions.
- [clip_gradients_min](clip_gradients_min.md): Deprecated. The minimum clipping value for clipping by value.
- [clip_gradients_max](clip_gradients_max.md): Deprecated. The maximum clipping value for clipping by value.
- [clip_gradients_max_norm](clip_gradients_max_norm.md): Deprecated. The maximum Euclidean norm for clipping by norm and clipping by global norm.
