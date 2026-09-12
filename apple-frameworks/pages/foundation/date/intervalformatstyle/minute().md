> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/date/intervalformatstyle/minute()](https://developer.apple.com/documentation/foundation/date/intervalformatstyle/minute())

# minute()

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Modifies the date interval format style to include the minutes.

## Declaration

```swift
func minute() -> Date.IntervalFormatStyle
```

<a id="return-value"></a>

## Return Value

A date interval format style that includes the minutes.

<a id="Discussion"></a>

## Discussion

This example shows a combination of date interval format styles that includes the hour and minutes:

```swift
if let today = Calendar.current.date(byAdding: .day, value: -140, to: Date()),
   let sevenDaysBeforeToday = Calendar.current.date(byAdding: .day, value: -7, to: today) {

    // Create a Range<Date>.
    let weekBefore = sevenDaysBeforeToday..<today

    print(weekBefore.formatted(.interval.minute()))
    print(weekBefore.formatted(.interval.day().minute().hour()))
    print(weekBefore.formatted(.interval.day().month().minute().hour(.defaultDigitsNoAMPM)))
    print(weekBefore.formatted(.interval.day().month().minute().hour(.conversationalDefaultDigits(amPM: .wide))))
    print(weekBefore.formatted(.interval.day().month().minute().hour(.conversationalDefaultDigits(amPM: .narrow))))
}
// 2/5/2021, 9 – 2/12/2021, 9
// 5, 7:09 AM – 12, 7:09 AM
// Feb 5, 07:09 – Feb 12, 07:09
// Feb 5, 7:09 AM – Feb 12, 7:09 AM
// Feb 5, 7:09 a – Feb 12, 7:09 a

```

## See Also

### Modifying Date Interval Format Styles

- [day()](day%28%29.md): Modifies the date interval format style to include the day.
- [hour(\_:)](hour%28__%29.md): Modifies the date interval format style to use the specified hour format style.
- [month(\_:)](month%28__%29.md): Modifies the date interval format style to include the month.
- [second()](second%28%29.md): Modifies the date interval format style to include the seconds.
- [weekday(\_:)](weekday%28__%29.md): Modifies the date interval format style to include the specified weekday style.
- [year()](year%28%29.md): Modifies the date interval format style to include the year.
