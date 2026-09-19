> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/calendar/recurrencerule/daysofthemonth

# daysOfTheMonth

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 1.0+ · watchOS 11.0+

On which days in the month the event should occur

## Declaration

```swift
var daysOfTheMonth: [Int]
```

<a id="discussion"></a>

## Discussion

- 1 signifies the first day of the month.
- Negative values point to a day counted backwards from the last day of the month This field is unused when `frequency` is `.weekly`.
