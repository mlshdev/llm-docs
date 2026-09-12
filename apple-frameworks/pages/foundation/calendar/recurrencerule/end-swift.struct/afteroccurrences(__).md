> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/calendar/recurrencerule/end-swift.struct/afteroccurrences(_:)](https://developer.apple.com/documentation/foundation/calendar/recurrencerule/end-swift.struct/afteroccurrences(_:))

# afterOccurrences(\_:)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 1.0+ · watchOS 11.0+

The event stops repeating after a given number of times

## Declaration

```swift
static func afterOccurrences(_ count: Int) -> Calendar.RecurrenceRule.End
```

## Parameters

- `count`: How many times to repeat the event, including the first occurrence. `count` must be greater than `0`
