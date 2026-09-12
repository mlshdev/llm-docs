> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlmetrickey/lossvalue](https://developer.apple.com/documentation/coreml/mlmetrickey/lossvalue)

# lossValue (Swift)

**Framework:** Core ML  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

The key you use to access the current loss (a `float` value).

## Declaration

```swift
class var lossValue: MLMetricKey { get }
```

<a id="Discussion"></a>

## Discussion

Use this key to fetch the loss value in the [metrics](../mlupdatecontext/metrics.md) dictionary.

## See Also

### Getting the keys

- [epochIndex](epochindex.md): The key you use to access the epoch index (an `Int64` value).
- [miniBatchIndex](minibatchindex.md): The key you use to access the mini-batch index (an `Int64` value) within an epoch.

# lossValue (Objective-C)

**Framework:** Core ML  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

The key you use to access the current loss (a `float` value).

## Declaration

```objectivec
@property (class, nonatomic, readonly) MLMetricKey * lossValue;
```

<a id="Discussion"></a>

## Discussion

Use this key to fetch the loss value in the [metrics](../mlupdatecontext/metrics.md) dictionary.

## See Also

### Getting the keys

- [epochIndex](epochindex.md): The key you use to access the epoch index (an `Int64` value).
- [miniBatchIndex](minibatchindex.md): The key you use to access the mini-batch index (an `Int64` value) within an epoch.
