> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/periodictimelineschedule/init(from:by:)](https://developer.apple.com/documentation/swiftui/periodictimelineschedule/init(from:by:))

# init(from:by:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Creates a periodic update schedule.

## Declaration

```swift
init(from startDate: Date, by interval: TimeInterval)
```

## Parameters

- `startDate`: The date on which to start the sequence.
- `interval`: The time interval between successive sequence entries.

<a id="discussion"></a>

## Discussion

Use the [entries(from:mode:)](entries%28from_mode_%29.md) method to get the sequence of dates.
