> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/instantprotocol](https://developer.apple.com/documentation/swift/instantprotocol)

# InstantProtocol

**Framework:** Swift  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

## Declaration

```swift
protocol InstantProtocol<Duration> : Comparable, Hashable, Sendable
```

## Topics

### Associated Types

- [Duration](instantprotocol/duration.md)

### Instance Methods

- [advanced(by:)](instantprotocol/advanced%28by_%29.md)
- [duration(to:)](instantprotocol/duration%28to_%29.md)

## Relationships

### Inherits From

- [Comparable](comparable.md)
- [Equatable](equatable.md)
- [Hashable](hashable.md)
- [Sendable](sendable.md)
- [SendableMetatype](sendablemetatype.md)

### Conforming Types

- [ContinuousClock.Instant](continuousclock/instant.md)
- [SuspendingClock.Instant](suspendingclock/instant.md)
