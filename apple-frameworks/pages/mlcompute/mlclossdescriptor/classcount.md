> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlclossdescriptor/classcount](https://developer.apple.com/documentation/mlcompute/mlclossdescriptor/classcount)

# classCount (Swift)

**Framework:** ML Compute  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

The number of classes.

## Declaration

```swift
var classCount: Int { get }
```

<a id="Discussion"></a>

## Discussion

The default value is 1.

> **Note**

>  This is only valid for the loss function type [MLCLossType.softmaxCrossEntropy](../mlclosstype/softmaxcrossentropy.md).

## See Also

### Inspecting Loss Descriptors

- [lossType](losstype.md): Deprecated. The loss function type.
- [reductionType](reductiontype.md): Deprecated. The reduction operation performed by the loss function.
- [weight](weight.md): Deprecated. The scale factor you apply to each element of a result.
- [labelSmoothing](labelsmoothing.md): Deprecated. The value for label smoothing.
- [epsilon](epsilon.md): Deprecated. The epsilon value.
- [delta](delta.md): Deprecated. The delta value.

# classCount (Objective-C)

**Framework:** ML Compute  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

The number of classes.

## Declaration

```objectivec
@property (nonatomic, readonly) NSUInteger classCount;
```

<a id="Discussion"></a>

## Discussion

The default value is 1.

> **Note**

>  This is only valid for the loss function type [MLCLossTypeSoftmaxCrossEntropy](../mlclosstype/softmaxcrossentropy.md).

## See Also

### Inspecting Loss Descriptors

- [lossType](losstype.md): Deprecated. The loss function type.
- [reductionType](reductiontype.md): Deprecated. The reduction operation performed by the loss function.
- [weight](weight.md): Deprecated. The scale factor you apply to each element of a result.
- [labelSmoothing](labelsmoothing.md): Deprecated. The value for label smoothing.
- [epsilon](epsilon.md): Deprecated. The epsilon value.
- [delta](delta.md): Deprecated. The delta value.
