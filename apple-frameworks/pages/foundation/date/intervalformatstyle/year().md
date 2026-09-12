> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/date/intervalformatstyle/year()](https://developer.apple.com/documentation/foundation/date/intervalformatstyle/year())

# year()

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Modifies the date interval format style to include the year.

## Declaration

```swift
func year() -> Date.IntervalFormatStyle
```

<a id="return-value"></a>

## Return Value

A date interval format style that includes the year.

<a id="Discussion"></a>

## Discussion

Use a combination of modifier instance methods to customize the format of the date interval. The following example shows several combinations of year, month, and day components in the date interval:

```swift
if let today = Calendar.current.date(byAdding: .day, value: -140, to: Date()),
   let sevenDaysBeforeToday = Calendar.current.date(byAdding: .day, value: -7, to: today) {

    // Create a Range<Date>.
    let weekBefore = sevenDaysBeforeToday..<today

    print(weekBefore.formatted(.interval))
    print(weekBefore.formatted(.interval.day()))
    print(weekBefore.formatted(.interval.day().month(.defaultDigits)))
    print(weekBefore.formatted(.interval.day().month(.wide).year()))
}
// 2/5/21, 6:37 AM – 2/12/21, 6:37 AM
// 5 – 12
// 2/5 – 2/12
// February 5 – 12, 2021
```

## See Also

### Modifying Date Interval Format Styles

- [day()](day%28%29.md): Modifies the date interval format style to include the day.
- [hour(\_:)](hour%28__%29.md): Modifies the date interval format style to use the specified hour format style.
- [minute()](minute%28%29.md): Modifies the date interval format style to include the minutes.
- [month(\_:)](month%28__%29.md): Modifies the date interval format style to include the month.
- [second()](second%28%29.md): Modifies the date interval format style to include the seconds.
- [weekday(\_:)](weekday%28__%29.md): Modifies the date interval format style to include the specified weekday style.
