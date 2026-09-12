> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/calendar/startofday(for:)](https://developer.apple.com/documentation/foundation/calendar/startofday(for:))

# startOfDay(for:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the first moment of a given Date, as a Date.

## Declaration

```swift
func startOfDay(for date: Date) -> Date
```

## Parameters

- `date`: The date to search.

<a id="return-value"></a>

## Return Value

The first moment of the given date.

<a id="Discussion"></a>

## Discussion

For example, pass in `Date()`, if you want the start of today. If there were two midnights, it returns the first.  If there was none, it returns the first moment that did exist.

## See Also

### Scanning Dates

- [enumerateDates(startingAfter:matching:matchingPolicy:repeatedTimePolicy:direction:using:)](enumeratedates%28startingafter_matching_matchingpolicy_repeatedtimepolicy_direction_using_%29.md): Computes the dates which match (or most closely match) a given set of components, and calls the closure once for each of them, until the enumeration is stopped.
- [nextDate(after:matching:matchingPolicy:repeatedTimePolicy:direction:)](nextdate%28after_matching_matchingpolicy_repeatedtimepolicy_direction_%29.md): Computes the next date which matches (or most closely matches) a given set of components.
- [Calendar.MatchingPolicy](matchingpolicy.md): A hint to the search algorithm to control the method used for searching for dates.
- [Calendar.RepeatedTimePolicy](repeatedtimepolicy.md): Determines which result to use when a time is repeated on a day in a calendar (for example, during a daylight saving transition when the times between 2:00am and 3:00am may happen twice).
