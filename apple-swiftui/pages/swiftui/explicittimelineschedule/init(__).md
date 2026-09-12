> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/explicittimelineschedule/init(_:)](https://developer.apple.com/documentation/swiftui/explicittimelineschedule/init(_:))

# init(\_:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Creates a schedule composed of an explicit sequence of dates.

## Declaration

```swift
init(_ dates: Entries)
```

## Parameters

- `dates`: The sequence of dates at which a timeline view updates. Use a monotonically increasing sequence of dates, and ensure that at least one is in the future.

<a id="discussion"></a>

## Discussion

Use the [entries(from:mode:)](entries%28from_mode_%29.md) method to get the sequence of dates.
