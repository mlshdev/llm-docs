> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/timedatasource/durationoffset(to:)](https://developer.apple.com/documentation/swiftui/timedatasource/durationoffset(to:))

# durationOffset(to:)

**Framework:** SwiftUI  
**Kind:** Type Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

A time data source that produces the offset between `Date.now` and the given `date` as a `Duration`.

## Declaration

```swift
static func durationOffset(to date: Date) -> TimeDataSource<Duration>
```
