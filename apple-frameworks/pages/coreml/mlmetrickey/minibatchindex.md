> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreml/mlmetrickey/minibatchindex

# miniBatchIndex (Swift)

**Framework:** Core ML  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

The key you use to access the mini-batch index (an `Int64` value) within an epoch.

## Declaration

```swift
class var miniBatchIndex: MLMetricKey { get }
```

<a id="Discussion"></a>

## Discussion

Use this key to fetch the mini-batch index value in the [metrics](../mlupdatecontext/metrics.md) dictionary.

## See Also

### Getting the keys

- [lossValue](lossvalue.md): The key you use to access the current loss (a `float` value).
- [epochIndex](epochindex.md): The key you use to access the epoch index (an `Int64` value).

# miniBatchIndex (Objective-C)

**Framework:** Core ML  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

The key you use to access the mini-batch index (an `Int64` value) within an epoch.

## Declaration

```objectivec
@property (class, nonatomic, readonly) MLMetricKey * miniBatchIndex;
```

<a id="Discussion"></a>

## Discussion

Use this key to fetch the mini-batch index value in the [metrics](../mlupdatecontext/metrics.md) dictionary.

## See Also

### Getting the keys

- [lossValue](lossvalue.md): The key you use to access the current loss (a `float` value).
- [epochIndex](epochindex.md): The key you use to access the epoch index (an `Int64` value).
