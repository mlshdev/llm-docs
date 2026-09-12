> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/event](https://developer.apple.com/documentation/createmlcomponents/event)

# Event

**Framework:** Create ML Components  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

Maintains the status of the pipeline.

## Declaration

```swift
struct Event
```

## Topics

### Creating the event

- [init(origin:itemCount:totalItemCount:metrics:)](event/init%28origin_itemcount_totalitemcount_metrics_%29.md): Creates an event.

### Getting the properties

- [itemCount](event/itemcount.md): The number of items processed so far.
- [metrics](event/metrics.md): A dictionary of custom metrics values.
- [origin](event/origin.md): A description of the event’s origin.
- [totalItemCount](event/totalitemcount.md): The total number of items being processed.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Event handling

- [EventHandler](eventhandler.md): A closure to handle processing events.
- [MetricsKey](metricskey.md): A key that uniquely identifies a metric.
