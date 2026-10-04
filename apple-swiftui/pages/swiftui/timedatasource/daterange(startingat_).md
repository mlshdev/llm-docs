> Snapshot-pinned source payload for Apple SwiftUI snapshot-8247613c923d; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/timedatasource/daterange(startingat:)

# dateRange(startingAt:)

**Framework:** SwiftUI  
**Kind:** Type Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

A time data source that produces `date..<max(date, Date.now)`.

## Declaration

```swift
static func dateRange(startingAt date: Date) -> TimeDataSource<Range<Date>>
```
