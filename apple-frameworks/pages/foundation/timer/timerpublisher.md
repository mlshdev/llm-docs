> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/timer/timerpublisher](https://developer.apple.com/documentation/foundation/timer/timerpublisher)

# Timer.TimerPublisher

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A publisher that repeatedly emits the current date on a given interval.

## Declaration

```swift
final class TimerPublisher
```

## Topics

### Initializers

- [init(interval:tolerance:runLoop:mode:options:)](timerpublisher/init%28interval_tolerance_runloop_mode_options_%29.md): Creates a publisher that repeatedly emits the current date on the given interval.

### Instance Properties

- [interval](timerpublisher/interval.md)
- [mode](timerpublisher/mode.md)
- [options](timerpublisher/options.md)
- [runLoop](timerpublisher/runloop.md)
- [tolerance](timerpublisher/tolerance.md)

## Relationships

### Conforms To

- [ConnectablePublisher](../../combine/connectablepublisher.md)
- [Publisher](../../combine/publisher.md)

## See Also

### Firing Messages as a Combine Publisher

- [publish(every:tolerance:on:in:options:)](publish%28every_tolerance_on_in_options_%29.md): Returns a publisher that repeatedly emits the current date on the given interval.
