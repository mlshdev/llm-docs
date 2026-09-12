> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/date/intervalformatstyle/second()](https://developer.apple.com/documentation/foundation/date/intervalformatstyle/second())

# second()

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Modifies the date interval format style to include the seconds.

## Declaration

```swift
func second() -> Date.IntervalFormatStyle
```

<a id="return-value"></a>

## Return Value

A date interval format style that includes the seconds.

<a id="Discussion"></a>

## Discussion

This example shows a combination of date interval format styles that include the hour, minutes, and seconds:

```swift
if let today = Calendar.current.date(byAdding: .day, value: -140, to: Date()),
   let sevenDaysBeforeToday = Calendar.current.date(byAdding: .day, value: -7, to: today) {

    // Create a Range<Date>.
    let weekBefore = sevenDaysBeforeToday..<today

    print(weekBefore.formatted(.interval.minute()))
    print(weekBefore.formatted(.interval.day().minute().hour().second()))
}
// 2/5/2021, 17 – 2/12/2021, 17
// 5, 8:17:19 AM – 12, 8:17:19 AM
```

## See Also

### Modifying Date Interval Format Styles

- [day()](day%28%29.md): Modifies the date interval format style to include the day.
- [hour(\_:)](hour%28__%29.md): Modifies the date interval format style to use the specified hour format style.
- [minute()](minute%28%29.md): Modifies the date interval format style to include the minutes.
- [month(\_:)](month%28__%29.md): Modifies the date interval format style to include the month.
- [weekday(\_:)](weekday%28__%29.md): Modifies the date interval format style to include the specified weekday style.
- [year()](year%28%29.md): Modifies the date interval format style to include the year.
