> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/calendar/datecomponents(_:from:to:)-2kcg](https://developer.apple.com/documentation/foundation/calendar/datecomponents(_:from:to:)-2kcg)

# dateComponents(\_:from:to:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the difference between two dates.

## Declaration

```swift
func dateComponents(_ components: Set<Calendar.Component>, from start: Date, to end: Date) -> DateComponents
```

## Parameters

- `components`: Which components to compare.
- `start`: The starting date.
- `end`: The ending date.

<a id="return-value"></a>

## Return Value

The result of calculating the difference from start to end.

## See Also

### Extracting Components

- [date(\_:matchesComponents:)](date%28__matchescomponents_%29.md): Determines if the date has all of the specified date components.
- [component(\_:from:)](component%28__from_%29.md): Returns the value for one component of a date.
- [dateComponents(\_:from:)](datecomponents%28__from_%29.md): Returns all the date components of a date, using the calendar time zone.
- [dateComponents(\_:from:to:)](datecomponents%28__from_to_%29-5g20t.md): Returns the difference between two dates specified as `DateComponents`.
- [dateComponents(in:from:)](datecomponents%28in_from_%29.md): Returns all the date components of a date, as if in a given time zone (instead of the `Calendar` time zone).
- [Calendar.Component](component.md): An enumeration for the various components of a calendar date.
