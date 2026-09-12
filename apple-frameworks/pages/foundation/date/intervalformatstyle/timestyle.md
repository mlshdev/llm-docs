> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/date/intervalformatstyle/timestyle](https://developer.apple.com/documentation/foundation/date/intervalformatstyle/timestyle)

# Date.IntervalFormatStyle.TimeStyle

**Framework:** Foundation  
**Kind:** Type Alias  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The type that defines time styles that vary in length or in their included components.

## Declaration

```swift
typealias TimeStyle = Date.FormatStyle.TimeStyle
```

<a id="Discussion"></a>

## Discussion

The exact format depends on the locale. Possible time styles include: [omitted](../formatstyle/timestyle/omitted.md), [shortened](../formatstyle/timestyle/shortened.md), [standard](../formatstyle/timestyle/standard.md), and [complete](../formatstyle/timestyle/complete.md).

The following code sample shows a variety of time style format results using the `en_US` locale.

```swift
if let today = Calendar.current.date(byAdding: .day, value: -120, to: Date()),
   let thirtyDaysBeforeToday = Calendar.current.date(byAdding: .day, value: -30, to: today) {
   // today: Apr 11, 2021 at 7:14 AM
   // thirtyDaysBeforeToday: Mar 12, 2021 at 7:14 AM

   // Create a Range<Date>.
   let last30days = thirtyDaysBeforeToday..<today
    
    last30days.formatted(date: .omitted, time: .standard)
// 3/12/2021, 7:11:16 AM – 4/11/2021, 7:11:16 AM

    last30days.formatted(date: .numeric, time: .omitted)
// 3/12/2021 – 4/11/2021

    last30days.formatted(date: .abbreviated, time: .omitted)
// Mar 12 – Apr 11, 2021

    last30days.formatted(date: .long, time: .omitted)
// March 12 – April 11, 2021"

    last30days.formatted(date: .complete, time: .omitted)
// Friday, March 12 – Sunday, April 11, 2021

    last30days.formatted()
// 3/12/21, 7:14 AM – 4/11/21, 7:14 AM
}
```

## See Also

### Supporting Types

- [Date.IntervalFormatStyle.DateStyle](datestyle.md): The type that defines date interval styles that vary in length or in their included components.
- [Date.IntervalFormatStyle.Symbol](symbol.md): The type that supports customizing formatting templates using the date format style’s modifier functions, and constructing fixed-pattern date format strings.
