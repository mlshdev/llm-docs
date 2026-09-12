> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/calendar/date(_:matchescomponents:)](https://developer.apple.com/documentation/foundation/calendar/date(_:matchescomponents:))

# date(\_:matchesComponents:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Determines if the date has all of the specified date components.

## Declaration

```swift
func date(_ date: Date, matchesComponents components: DateComponents) -> Bool
```

<a id="return-value"></a>

## Return Value

`true` if the date matches all of the components, otherwise `false`.

<a id="Discussion"></a>

## Discussion

It may be useful to test the return value of `nextDate(after:matching:matchingPolicy:behavior:direction:)` to find out if the components were obeyed or if the method had to fudge the result value due to missing time (for example, a daylight saving time transition).

## See Also

### Extracting Components

- [component(\_:from:)](component%28__from_%29.md): Returns the value for one component of a date.
- [dateComponents(\_:from:)](datecomponents%28__from_%29.md): Returns all the date components of a date, using the calendar time zone.
- [dateComponents(\_:from:to:)](datecomponents%28__from_to_%29-2kcg.md): Returns the difference between two dates.
- [dateComponents(\_:from:to:)](datecomponents%28__from_to_%29-5g20t.md): Returns the difference between two dates specified as `DateComponents`.
- [dateComponents(in:from:)](datecomponents%28in_from_%29.md): Returns all the date components of a date, as if in a given time zone (instead of the `Calendar` time zone).
- [Calendar.Component](component.md): An enumeration for the various components of a calendar date.
