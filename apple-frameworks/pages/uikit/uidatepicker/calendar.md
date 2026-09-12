> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidatepicker/calendar](https://developer.apple.com/documentation/uikit/uidatepicker/calendar)

# calendar (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The calendar to use for the date picker.

## Declaration

```swift
var calendar: Calendar! { get set }
```

<a id="Discussion"></a>

## Discussion

The default value of this property corresponds to the user’s current calendar as configured in Settings. This is equivalent to the value returned by calling the [NSCalendar](../../foundation/nscalendar.md) class method [current](../../foundation/nscalendar/current.md). Setting this property to `nil` is equivalent to setting it to its default value.

Calendars specify the details of cultural systems used for reckoning time; they identify the beginning, length, and divisions of a year.

## See Also

### Managing the date and calendar

- [date](date.md): The date displayed by the date picker.
- [locale](locale.md): The locale used by the date picker.
- [setDate(\_:animated:)](setdate%28__animated_%29.md): Sets the date to display in the date picker, with an option to animate the setting.
- [timeZone](timezone.md): The time zone reflected in the date displayed by the date picker.

# calendar (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The calendar to use for the date picker.

## Declaration

```objectivec
@property (nonatomic, copy, null_resettable) NSCalendar * calendar;
```

<a id="Discussion"></a>

## Discussion

The default value of this property corresponds to the user’s current calendar as configured in Settings. This is equivalent to the value returned by calling the [NSCalendar](../../foundation/nscalendar.md) class method [currentCalendar](../../foundation/nscalendar/current.md). Setting this property to `nil` is equivalent to setting it to its default value.

Calendars specify the details of cultural systems used for reckoning time; they identify the beginning, length, and divisions of a year.

## See Also

### Managing the date and calendar

- [date](date.md): The date displayed by the date picker.
- [locale](locale.md): The locale used by the date picker.
- [setDate:animated:](setdate%28__animated_%29.md): Sets the date to display in the date picker, with an option to animate the setting.
- [timeZone](timezone.md): The time zone reflected in the date displayed by the date picker.
