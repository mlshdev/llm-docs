> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/calendar/recurrencerule/recurrences(of:in:)-7k3ha](https://developer.apple.com/documentation/foundation/calendar/recurrencerule/recurrences(of:in:)-7k3ha)

# recurrences(of:in:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+ · macOS 26.4+ · tvOS 26.4+ · visionOS 26.4+ · watchOS 26.4+

Find recurrences of the given date

## Declaration

```swift
func recurrences(of start: Date, in range: ClosedRange<Date>) -> some Sendable & Sequence<Date>

```

## Parameters

- `start`: The date which defines the starting point for the recurrence rule.
- `range`: A range of dates which to search for recurrences.

<a id="return-value"></a>

## Return Value

A sequence of dates conforming to the recurrence rule, in the given `range`. An empty sequence if the rule doesn’t match any dates.

<a id="discussion"></a>

## Discussion

The calculations are implemented according to RFC-5545 and RFC-7529.
