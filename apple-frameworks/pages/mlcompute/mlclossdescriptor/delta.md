> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlclossdescriptor/delta](https://developer.apple.com/documentation/mlcompute/mlclossdescriptor/delta)

# delta (Swift)

**Framework:** ML Compute  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

The delta value.

## Declaration

```swift
var delta: Float { get }
```

<a id="Discussion"></a>

## Discussion

The default value is `1.0`.

> **Note**

>  This is only valid for the loss function type [MLCLossType.huber](../mlclosstype/huber.md).

## See Also

### Inspecting Loss Descriptors

- [lossType](losstype.md): Deprecated. The loss function type.
- [reductionType](reductiontype.md): Deprecated. The reduction operation performed by the loss function.
- [weight](weight.md): Deprecated. The scale factor you apply to each element of a result.
- [labelSmoothing](labelsmoothing.md): Deprecated. The value for label smoothing.
- [classCount](classcount.md): Deprecated. The number of classes.
- [epsilon](epsilon.md): Deprecated. The epsilon value.

# delta (Objective-C)

**Framework:** ML Compute  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

The delta value.

## Declaration

```objectivec
@property (nonatomic, readonly) float delta;
```

<a id="Discussion"></a>

## Discussion

The default value is `1.0`.

> **Note**

>  This is only valid for the loss function type [MLCLossTypeHuber](../mlclosstype/huber.md).

## See Also

### Inspecting Loss Descriptors

- [lossType](losstype.md): Deprecated. The loss function type.
- [reductionType](reductiontype.md): Deprecated. The reduction operation performed by the loss function.
- [weight](weight.md): Deprecated. The scale factor you apply to each element of a result.
- [labelSmoothing](labelsmoothing.md): Deprecated. The value for label smoothing.
- [classCount](classcount.md): Deprecated. The number of classes.
- [epsilon](epsilon.md): Deprecated. The epsilon value.
