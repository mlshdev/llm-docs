> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/date/formatstyle/hour(_:)](https://developer.apple.com/documentation/foundation/date/formatstyle/hour(_:))

# hour(\_:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Modifies the date format style to use the specified hour format style.

## Declaration

```swift
func hour(_ format: Date.FormatStyle.Symbol.Hour = .defaultDigits(amPM: .abbreviated)) -> Date.FormatStyle
```

## Parameters

- `format`: The hour format style applied to the date format style.

<a id="return-value"></a>

## Return Value

A date format style modified to include the specified hour style.

<a id="Discussion"></a>

## Discussion

Values of [Date.FormatStyle.Symbol.Hour](symbol/hour.md) are [defaultDigitsNoAMPM](symbol/hour/defaultdigitsnoampm.md) and [twoDigitsNoAMPM](symbol/hour/twodigitsnoampm.md).

Static methods that return [Date.FormatStyle.Symbol.Hour](symbol/hour.md) objects include [conversationalDefaultDigits(amPM:)](symbol/hour/conversationaldefaultdigits%28ampm_%29.md), [conversationalTwoDigits(amPM:)](symbol/hour/conversationaltwodigits%28ampm_%29.md), [defaultDigits(amPM:)](symbol/hour/defaultdigits%28ampm_%29.md), and [twoDigitsNoAMPM](symbol/hour/twodigitsnoampm.md).

This example shows a variety of [Date.FormatStyle.Symbol.Hour](symbol/hour.md) format styles applied to a date:

```swift
let meetingDate = Date() // Feb 9, 2021 at 7:00 PM
meetingDate.formatted(Date.FormatStyle().hour(.defaultDigitsNoAMPM)) 
// 7

meetingDate.formatted(Date.FormatStyle().hour(.twoDigitsNoAMPM)) 
// 07

meetingDate.formatted(Date.FormatStyle().hour(.defaultDigits(amPM: .narrow))) 
// 7p

meetingDate.formatted(Date.FormatStyle().hour(.twoDigits(amPM: .abbreviated))
// 07 PM

meetingDate.formatted(Date.FormatStyle().hour(.conversationalDefaultDigits(amPM: .wide))
// 7 P.M.
```

If you don’t provide a format, the [defaultDigits](symbol/minute/defaultdigits.md) static variable is the default format.

For more information about formatting dates, see [Date.FormatStyle](../formatstyle.md).

## See Also

### Specifying the Time Format

- [minute(\_:)](minute%28__%29.md): Modifies the date format style to use the specified minute format style.
- [second(\_:)](second%28__%29.md): Modifies the date format style to use the specified second format style.
- [secondFraction(\_:)](secondfraction%28__%29.md): Modifies the date format style to use the specified second fraction format style.
- [timeZone(\_:)](timezone%28__%29.md): Modifies the date format style to use the specified time zone format style.
- [Date.FormatStyle.TimeStyle](timestyle.md): Type that defines time styles varied in length or components included.
