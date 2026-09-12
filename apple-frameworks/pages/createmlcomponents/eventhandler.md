> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/eventhandler](https://developer.apple.com/documentation/createmlcomponents/eventhandler)

# EventHandler

**Framework:** Create ML Components  
**Kind:** Type Alias  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

A closure to handle processing events.

## Declaration

```swift
typealias EventHandler = @Sendable (Event) -> Void
```

## See Also

### Event handling

- [Event](event.md): Maintains the status of the pipeline.
- [MetricsKey](metricskey.md): A key that uniquely identifies a metric.
