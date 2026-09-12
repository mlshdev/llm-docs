> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/calendar/isdateinweekend(_:)](https://developer.apple.com/documentation/foundation/calendar/isdateinweekend(_:))

# isDateInWeekend(\_:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value indicating whether the given date is within a weekend period.

## Declaration

```swift
func isDateInWeekend(_ date: Date) -> Bool
```

## Parameters

- `date`: The specified date.

<a id="return-value"></a>

## Return Value

`true` if the given date is within a weekend, as defined by the calendar and calendar’s locale; otherwise, `false`.

## See Also

### Comparing Dates

- [compare(\_:to:toGranularity:)](compare%28__to_togranularity_%29.md): Compares two dates down to the specified component.
- [isDate(\_:equalTo:toGranularity:)](isdate%28__equalto_togranularity_%29.md): Returns a Boolean value indicating whether two dates are equal down to the specified component.
- [isDate(\_:inSameDayAs:)](isdate%28__insamedayas_%29.md): Returns a Boolean value indicating whether a date is within the same day as another date.
- [isDateInToday(\_:)](isdateintoday%28__%29.md): Returns a Boolean value indicating whether the given date is within today.
- [isDateInTomorrow(\_:)](isdateintomorrow%28__%29.md): Returns a Boolean value indicating whether the given date is within tomorrow.
- [isDateInYesterday(\_:)](isdateinyesterday%28__%29.md): Returns a Boolean value indicating whether the given date is within yesterday.
