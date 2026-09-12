> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlupdatecontext/metrics](https://developer.apple.com/documentation/coreml/mlupdatecontext/metrics)

# metrics (Swift)

**Framework:** Core ML  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

The training metrics of the model for the update task, contained in a dictionary.

## Declaration

```swift
var metrics: [MLMetricKey : Any] { get }
```

<a id="Discussion"></a>

## Discussion

Use the [MLMetricKey](../mlmetrickey.md) to access the values within the dictionary.

## See Also

### Evaluating the update

- [MLMetricKey](../mlmetrickey.md): A key for the metrics dictionary in an update context.

# metrics (Objective-C)

**Framework:** Core ML  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

The training metrics of the model for the update task, contained in a dictionary.

## Declaration

```objectivec
@property (nonatomic, readonly) NSDictionary<MLMetricKey *,id> * metrics;
```

<a id="Discussion"></a>

## Discussion

Use the [MLMetricKey](../mlmetrickey.md) to access the values within the dictionary.

## See Also

### Evaluating the update

- [MLMetricKey](../mlmetrickey.md): A key for the metrics dictionary in an update context.
