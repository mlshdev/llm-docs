> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/date/formatstyle/minute(_:)](https://developer.apple.com/documentation/foundation/date/formatstyle/minute(_:))

# minute(\_:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Modifies the date format style to use the specified minute format style.

## Declaration

```swift
func minute(_ format: Date.FormatStyle.Symbol.Minute = .defaultDigits) -> Date.FormatStyle
```

## Parameters

- `format`: The minute format style applied to the date format style.

<a id="return-value"></a>

## Return Value

A date format style modified to include the specified minute style.

<a id="Discussion"></a>

## Discussion

Values of [Date.FormatStyle.Symbol.Minute](symbol/minute.md) are [defaultDigits](symbol/minute/defaultdigits.md) and [twoDigits](symbol/minute/twodigits.md).

This example shows a variety of [Date.FormatStyle.Symbol.Minute](symbol/minute.md) format styles applied to a date:

```swift
let meetingDate = Date() // Feb 9, 2021 at 3:05 PM
meetingDate.formatted(Date.FormatStyle().minute(.defaultDigits)) // 5
meetingDate.formatted(Date.FormatStyle().minute(.twoDigits)) // 05
meetingDate.formatted(Date.FormatStyle().minute()) // 5
```

If you don’t provide a format, the [defaultDigits](symbol/minute/defaultdigits.md) static variable is the default format.

For more information about formatting dates, see [Date.FormatStyle](../formatstyle.md).

## See Also

### Specifying the Time Format

- [hour(\_:)](hour%28__%29.md): Modifies the date format style to use the specified hour format style.
- [second(\_:)](second%28__%29.md): Modifies the date format style to use the specified second format style.
- [secondFraction(\_:)](secondfraction%28__%29.md): Modifies the date format style to use the specified second fraction format style.
- [timeZone(\_:)](timezone%28__%29.md): Modifies the date format style to use the specified time zone format style.
- [Date.FormatStyle.TimeStyle](timestyle.md): Type that defines time styles varied in length or components included.
