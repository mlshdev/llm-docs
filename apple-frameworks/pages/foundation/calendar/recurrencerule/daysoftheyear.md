> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/calendar/recurrencerule/daysoftheyear](https://developer.apple.com/documentation/foundation/calendar/recurrencerule/daysoftheyear)

# daysOfTheYear

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 1.0+ · watchOS 11.0+

On which days of the year the event may occur.

## Declaration

```swift
var daysOfTheYear: [Int]
```

<a id="discussion"></a>

## Discussion

- 1 signifies the first day of the year.
- Negative values point to a day counted backwards from the last day of the year This field is unused when `frequency` is any of `.daily`, `.weekly`, or `.monthly`.
