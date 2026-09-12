> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/calendar/datecomponents(_:from:)](https://developer.apple.com/documentation/foundation/calendar/datecomponents(_:from:))

# dateComponents(\_:from:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns all the date components of a date, using the calendar time zone.

## Declaration

```swift
func dateComponents(_ components: Set<Calendar.Component>, from date: Date) -> DateComponents
```

## Parameters

- `components`: The components to return.
- `date`: The `Date` to use.

<a id="return-value"></a>

## Return Value

The date components of the specified date.

<a id="Discussion"></a>

## Discussion

> **Note**

>  If you want “date information in a given time zone” in order to display it, you should use `DateFormatter` to format the date.

## See Also

### Extracting Components

- [date(\_:matchesComponents:)](date%28__matchescomponents_%29.md): Determines if the date has all of the specified date components.
- [component(\_:from:)](component%28__from_%29.md): Returns the value for one component of a date.
- [dateComponents(\_:from:to:)](datecomponents%28__from_to_%29-2kcg.md): Returns the difference between two dates.
- [dateComponents(\_:from:to:)](datecomponents%28__from_to_%29-5g20t.md): Returns the difference between two dates specified as `DateComponents`.
- [dateComponents(in:from:)](datecomponents%28in_from_%29.md): Returns all the date components of a date, as if in a given time zone (instead of the `Calendar` time zone).
- [Calendar.Component](component.md): An enumeration for the various components of a calendar date.
