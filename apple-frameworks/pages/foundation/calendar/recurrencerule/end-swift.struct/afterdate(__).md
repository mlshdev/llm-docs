> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/calendar/recurrencerule/end-swift.struct/afterdate(_:)](https://developer.apple.com/documentation/foundation/calendar/recurrencerule/end-swift.struct/afterdate(_:))

# afterDate(\_:)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 1.0+ · watchOS 11.0+

The event stops repeating after a given date

## Declaration

```swift
static func afterDate(_ date: Date) -> Calendar.RecurrenceRule.End
```

## Parameters

- `date`: The date on which the event may last occur. No further occurrences will be found after that
