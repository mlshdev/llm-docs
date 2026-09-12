> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/metricskey](https://developer.apple.com/documentation/createmlcomponents/metricskey)

# MetricsKey

**Framework:** Create ML Components  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

A key that uniquely identifies a metric.

## Declaration

```swift
struct MetricsKey
```

## Topics

### Getting the properties

- [source](metricskey/source.md): A key associated with a temporal stream source (e.g. a file name).
- [trainingAccuracy](metricskey/trainingaccuracy.md): A key associated with a training accuracy metric.
- [trainingError](metricskey/trainingerror.md): A key associated with a training error metric.
- [trainingLoss](metricskey/trainingloss.md): A key associated with a training loss metric.
- [trainingMaximumError](metricskey/trainingmaximumerror.md): A key associated with a training maximum error metric.
- [trainingMeanAveragePrecision](metricskey/trainingmeanaverageprecision.md): A key associated with a training mean average precision metric.
- [validationAccuracy](metricskey/validationaccuracy.md): A key associated with a validation accuracy metric.
- [validationError](metricskey/validationerror.md): A key associated with a validation error metric.
- [validationLoss](metricskey/validationloss.md): A key associated with a validation loss metric.
- [validationMaximumError](metricskey/validationmaximumerror.md): A key associated with a validation maximum error metric.
- [validationMeanAveragePrecision](metricskey/validationmeanaverageprecision.md): A key associated with a validation mean average precision metric.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Event handling

- [Event](event.md): Maintains the status of the pipeline.
- [EventHandler](eventhandler.md): A closure to handle processing events.
