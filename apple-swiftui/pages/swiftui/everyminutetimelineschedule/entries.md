> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/everyminutetimelineschedule/entries](https://developer.apple.com/documentation/swiftui/everyminutetimelineschedule/entries)

# EveryMinuteTimelineSchedule.Entries

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The sequence of dates in an every minute schedule.

## Declaration

```swift
struct Entries
```

<a id="overview"></a>

## Overview

The [entries(from:mode:)](entries%28from_mode_%29.md) method returns a value of this type, which is a [Sequence](https://developer.apple.com/documentation/swift/sequence) of dates, one per minute, in ascending order. A [TimelineView](../timelineview.md) that you create updates its content at the moments in time corresponding to the dates included in the sequence.

## Relationships

### Conforms To

- [IteratorProtocol](https://developer.apple.com/documentation/swift/iteratorprotocol)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [Sequence](https://developer.apple.com/documentation/swift/sequence)

## See Also

### Getting the sequence of dates

- [entries(from:mode:)](entries%28from_mode_%29.md): Provides a sequence of per-minute dates starting from a given date.
