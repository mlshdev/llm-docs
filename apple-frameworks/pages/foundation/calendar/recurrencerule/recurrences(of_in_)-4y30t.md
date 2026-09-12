> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/calendar/recurrencerule/recurrences(of:in:)-4y30t](https://developer.apple.com/documentation/foundation/calendar/recurrencerule/recurrences(of:in:)-4y30t)

# recurrences(of:in:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 1.0+ · watchOS 11.0+

Find recurrences of the given date

## Declaration

```swift
func recurrences(of start: Date, in range: Range<Date>? = nil) -> some Sendable & Sequence<Date>

```

## Parameters

- `start`: The date which defines the starting point for the recurrence rule.
- `range`: A range of dates which to search for recurrences. If `nil`, return all recurrences of the event.

<a id="return-value"></a>

## Return Value

A sequence of dates conforming to the recurrence rule, in the given `range`. An empty sequence if the rule doesn’t match any dates.

<a id="discussion"></a>

## Discussion

The calculations are implemented according to RFC-5545 and RFC-7529.
