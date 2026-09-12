> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlclossdescriptor/labelsmoothing](https://developer.apple.com/documentation/mlcompute/mlclossdescriptor/labelsmoothing)

# labelSmoothing (Swift)

**Framework:** ML Compute  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

The value for label smoothing.

## Declaration

```swift
var labelSmoothing: Float { get }
```

<a id="Discussion"></a>

## Discussion

The default value is `1.0`.

> **Note**

>  This is only valid for the following loss function types:
>
> [MLCLossType.softmaxCrossEntropy](../mlclosstype/softmaxcrossentropy.md)
>
> [MLCLossType.sigmoidCrossEntropy](../mlclosstype/sigmoidcrossentropy.md)

## See Also

### Inspecting Loss Descriptors

- [lossType](losstype.md): Deprecated. The loss function type.
- [reductionType](reductiontype.md): Deprecated. The reduction operation performed by the loss function.
- [weight](weight.md): Deprecated. The scale factor you apply to each element of a result.
- [classCount](classcount.md): Deprecated. The number of classes.
- [epsilon](epsilon.md): Deprecated. The epsilon value.
- [delta](delta.md): Deprecated. The delta value.

# labelSmoothing (Objective-C)

**Framework:** ML Compute  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

The value for label smoothing.

## Declaration

```objectivec
@property (nonatomic, readonly) float labelSmoothing;
```

<a id="Discussion"></a>

## Discussion

The default value is `1.0`.

> **Note**

>  This is only valid for the following loss function types:
>
> [MLCLossTypeSoftmaxCrossEntropy](../mlclosstype/softmaxcrossentropy.md)
>
> [MLCLossTypeSigmoidCrossEntropy](../mlclosstype/sigmoidcrossentropy.md)

## See Also

### Inspecting Loss Descriptors

- [lossType](losstype.md): Deprecated. The loss function type.
- [reductionType](reductiontype.md): Deprecated. The reduction operation performed by the loss function.
- [weight](weight.md): Deprecated. The scale factor you apply to each element of a result.
- [classCount](classcount.md): Deprecated. The number of classes.
- [epsilon](epsilon.md): Deprecated. The epsilon value.
- [delta](delta.md): Deprecated. The delta value.
