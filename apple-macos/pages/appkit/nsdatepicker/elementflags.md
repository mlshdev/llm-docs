> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdatepicker/elementflags](https://developer.apple.com/documentation/appkit/nsdatepicker/elementflags)

# NSDatePicker.ElementFlags (Swift)

**Framework:** AppKit  
**Kind:** Structure  
**Availability:** macOS

Constants that specify the date and time elements displayed by the picker.

## Declaration

```swift
struct ElementFlags
```

<a id="overview"></a>

## Overview

You can combine these constants using the C bitwise `OR` operator.

## Topics

### Constants

- [era](elementflags/era.md)
- [hourMinute](elementflags/hourminute.md)
- [hourMinuteSecond](elementflags/hourminutesecond.md)
- [timeZone](elementflags/timezone.md)
- [yearMonth](elementflags/yearmonth.md)
- [yearMonthDay](elementflags/yearmonthday.md)

### Initializers

- [init(rawValue:)](elementflags/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Configuring Date Pickers

- [isBezeled](isbezeled.md): A Boolean value that indicates whether the date picker draws a bezeled border.
- [isBordered](isbordered.md): A Boolean value that indicates whether the date picker has a plain border.
- [backgroundColor](backgroundcolor.md): The date picker’s background color.
- [drawsBackground](drawsbackground.md): A Boolean value that indicates whether the date picker draws the background.
- [textColor](textcolor.md): The date picker’s text color.
- [datePickerStyle](datepickerstyle.md): The date picker’s style.
- [presentsCalendarOverlay](presentscalendaroverlay.md): A Boolean value that indicates whether to present a graphical calendar overlay when editing a calendar element within a text-field style date picker.
- [delegate](delegate.md): A delegate for the date picker’s cell
- [datePickerElements](datepickerelements.md): A bitmask that indicates which visual elements of the date picker are currently shown, and which won’t be usable because they are hidden.
- [NSDatePicker.Style](style.md): Constants that define the visual appearance of the date picker cell.

# NSDatePickerElementFlags (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

Constants that specify the date and time elements displayed by the picker.

## Declaration

```objectivec
enum NSDatePickerElementFlags : NSUInteger;
```

<a id="overview"></a>

## Overview

You can combine these constants using the C bitwise `OR` operator.

## Topics

### Constants

- [NSDatePickerElementFlagEra](elementflags/era.md)
- [NSDatePickerElementFlagHourMinute](elementflags/hourminute.md)
- [NSDatePickerElementFlagHourMinuteSecond](elementflags/hourminutesecond.md)
- [NSDatePickerElementFlagTimeZone](elementflags/timezone.md)
- [NSDatePickerElementFlagYearMonth](elementflags/yearmonth.md)
- [NSDatePickerElementFlagYearMonthDay](elementflags/yearmonthday.md)

### Deprecated

- [NSHourMinuteDatePickerElementFlag](../nshourminutedatepickerelementflag.md): Deprecated. Display and allow editing of the hour and minute elements of the date.
- [NSHourMinuteSecondDatePickerElementFlag](../nshourminuteseconddatepickerelementflag.md): Deprecated. Display and allow editing of the hour, minute and second elements of the date.
- [NSTimeZoneDatePickerElementFlag](../nstimezonedatepickerelementflag.md): Deprecated. Display and allow editing of the time zone.
- [NSYearMonthDatePickerElementFlag](../nsyearmonthdatepickerelementflag.md): Deprecated. Display and allow editing of the year and month elements of the date.
- [NSYearMonthDayDatePickerElementFlag](../nsyearmonthdaydatepickerelementflag.md): Deprecated. Display and allow editing of the year, month and day elements of the date.
- [NSEraDatePickerElementFlag](../nseradatepickerelementflag.md): Deprecated. Display and allow editing of the era of the date, if applicable.

## See Also

### Configuring Date Pickers

- [bezeled](isbezeled.md): A Boolean value that indicates whether the date picker draws a bezeled border.
- [bordered](isbordered.md): A Boolean value that indicates whether the date picker has a plain border.
- [backgroundColor](backgroundcolor.md): The date picker’s background color.
- [drawsBackground](drawsbackground.md): A Boolean value that indicates whether the date picker draws the background.
- [textColor](textcolor.md): The date picker’s text color.
- [datePickerStyle](datepickerstyle.md): The date picker’s style.
- [presentsCalendarOverlay](presentscalendaroverlay.md): A Boolean value that indicates whether to present a graphical calendar overlay when editing a calendar element within a text-field style date picker.
- [delegate](delegate.md): A delegate for the date picker’s cell
- [datePickerElements](datepickerelements.md): A bitmask that indicates which visual elements of the date picker are currently shown, and which won’t be usable because they are hidden.
- [NSDatePickerStyle](style.md): Constants that define the visual appearance of the date picker cell.
