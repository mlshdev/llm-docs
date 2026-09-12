> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/date/intervalformatstyle/weekday(_:)](https://developer.apple.com/documentation/foundation/date/intervalformatstyle/weekday(_:))

# weekday(\_:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Modifies the date interval format style to include the specified weekday style.

## Declaration

```swift
func weekday(_ format: Date.IntervalFormatStyle.Symbol.Weekday = .abbreviated) -> Date.IntervalFormatStyle
```

## Parameters

- `format`: The weekday format style to apply to the date interval format style.

<a id="return-value"></a>

## Return Value

A date interval format style that includes the specified weekday style.

<a id="Discussion"></a>

## Discussion

Use a combination of modifier instance methods to customize the format of the date interval. The following example shows a combination date interval format styles that include the weekday:

```swift
if let today = Calendar.current.date(byAdding: .day, value: -140, to: Date()),
   let sevenDaysBeforeToday = Calendar.current.date(byAdding: .day, value: -7, to: today) {

    // Create a Range<Date>.
    let weekBefore = sevenDaysBeforeToday..<today

    print(weekBefore.formatted(.interval.day().month(.wide).year().weekday(.wide)))
    print(weekBefore.formatted(.interval.day().weekday(.abbreviated)))
    print(weekBefore.formatted(.interval.day().month(.wide).weekday(.narrow)))
}
// Friday, February 5 – Friday, February 12, 2021
// 5 Fri – 12 Fri
// F, February 5 – F, February 12
```

## See Also

### Modifying Date Interval Format Styles

- [day()](day%28%29.md): Modifies the date interval format style to include the day.
- [hour(\_:)](hour%28__%29.md): Modifies the date interval format style to use the specified hour format style.
- [minute()](minute%28%29.md): Modifies the date interval format style to include the minutes.
- [month(\_:)](month%28__%29.md): Modifies the date interval format style to include the month.
- [second()](second%28%29.md): Modifies the date interval format style to include the seconds.
- [year()](year%28%29.md): Modifies the date interval format style to include the year.
