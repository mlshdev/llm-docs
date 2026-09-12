> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/timelineschedule/entries](https://developer.apple.com/documentation/swiftui/timelineschedule/entries)

# Entries

**Framework:** SwiftUI  
**Kind:** Associated Type  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The sequence of dates within a schedule.

## Declaration

```swift
associatedtype Entries : Sequence where Self.Entries.Element == Date
```

<a id="discussion"></a>

## Discussion

The [entries(from:mode:)](entries%28from_mode_%29.md) method returns a value of this type, which is a [Sequence](https://developer.apple.com/documentation/swift/sequence) of dates in ascending order. A [TimelineView](../timelineview.md) that you create with a schedule updates its content at the moments in time corresponding to the dates included in the sequence.

## See Also

### Getting a sequence of dates

- [entries(from:mode:)](entries%28from_mode_%29.md): Provides a sequence of dates starting around a given date.
