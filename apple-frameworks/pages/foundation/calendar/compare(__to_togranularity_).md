> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/calendar/compare(_:to:togranularity:)

# compare(\_:to:toGranularity:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Compares two dates down to the specified component.

## Declaration

```swift
func compare(_ date1: Date, to date2: Date, toGranularity component: Calendar.Component) -> ComparisonResult
```

## Parameters

- `date1`: A date to compare.
- `date2`: A date to compare.
- `component`: A granularity to compare. For example, pass `.hour` to check if two dates are in the same hour.

<a id="return-value"></a>

## Return Value

`.orderedSame` if the two dates are equal in the given component and all larger components; otherwise, either `.orderedAscending` or `.orderedDescending`.

## See Also

### Comparing Dates

- [isDate(\_:equalTo:toGranularity:)](isdate%28__equalto_togranularity_%29.md): Returns a Boolean value indicating whether two dates are equal down to the specified component.
- [isDate(\_:inSameDayAs:)](isdate%28__insamedayas_%29.md): Returns a Boolean value indicating whether a date is within the same day as another date.
- [isDateInToday(\_:)](isdateintoday%28__%29.md): Returns a Boolean value indicating whether the given date is within today.
- [isDateInTomorrow(\_:)](isdateintomorrow%28__%29.md): Returns a Boolean value indicating whether the given date is within tomorrow.
- [isDateInYesterday(\_:)](isdateinyesterday%28__%29.md): Returns a Boolean value indicating whether the given date is within yesterday.
- [isDateInWeekend(\_:)](isdateinweekend%28__%29.md): Returns a Boolean value indicating whether the given date is within a weekend period.
