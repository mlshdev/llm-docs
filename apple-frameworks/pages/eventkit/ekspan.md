> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkit/ekspan](https://developer.apple.com/documentation/eventkit/ekspan)

# EKSpan (Swift)

**Framework:** EventKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

An object that indicates whether modifications should apply to a single event or all future events of a recurring event.

## Declaration

```swift
enum EKSpan
```

## Topics

### Constants

- [EKSpan.thisEvent](ekspan/thisevent.md): Modifications to this event instance should affect only this instance.
- [EKSpan.futureEvents](ekspan/futureevents.md): Modifications to this event instance should also affect future instances of this event.

### Initializers

- [init(rawValue:)](ekspan/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating a Basic Recurrence Rule

- [init(recurrenceWith:interval:end:)](ekrecurrencerule/init%28recurrencewith_interval_end_%29.md): Initializes and returns a simple recurrence rule with a given frequency, interval, and end.

# EKSpan (Objective-C)

**Framework:** EventKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

An object that indicates whether modifications should apply to a single event or all future events of a recurring event.

## Declaration

```objectivec
enum EKSpan : NSInteger;
```

## Topics

### Constants

- [EKSpanThisEvent](ekspan/thisevent.md): Modifications to this event instance should affect only this instance.
- [EKSpanFutureEvents](ekspan/futureevents.md): Modifications to this event instance should also affect future instances of this event.

## See Also

### Creating a Basic Recurrence Rule

- [initRecurrenceWithFrequency:interval:end:](ekrecurrencerule/init%28recurrencewith_interval_end_%29.md): Initializes and returns a simple recurrence rule with a given frequency, interval, and end.
