> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidatepicker/mode/yearandmonth](https://developer.apple.com/documentation/uikit/uidatepicker/mode/yearandmonth)

# UIDatePicker.Mode.yearAndMonth (Swift)

**Framework:** UIKit  
**Kind:** Case  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · visionOS 1.1+

A mode that displays the date in months and years.

## Declaration

```swift
case yearAndMonth
```

<a id="Discussion"></a>

## Discussion

The exact order of these items depends on the locale setting. An example of this mode is “November | 2007”.

> **Important**

>  You can only use this mode with the date picker style [UIDatePickerStyle.wheels](../../uidatepickerstyle/wheels.md), and can’t use it on Mac Catalyst with the [UIUserInterfaceIdiom.mac](../../uiuserinterfaceidiom/mac.md) user interface idiom; otherwise, [UIDatePicker](../../uidatepicker.md) throws an exception.

## See Also

### Constants

- [UIDatePicker.Mode.time](time.md): A mode that displays the date in hours, minutes, and (optionally) an AM/PM designation. The exact items shown and their order depend upon the locale set. An example of this mode is “6 | 53 | PM”.
- [UIDatePicker.Mode.date](date.md): A mode that displays the date in months, days of the month, and years. The exact order of these items depends on the locale setting. An example of this mode is “November | 15 | 2007 “.
- [UIDatePicker.Mode.dateAndTime](dateandtime.md): A mode that displays the date as unified day of the week, month, and day of the month values, plus hours, minutes, and (optionally) an AM/PM designation. The exact order and format of these items depends on the locale set. An example of this mode is “Wed Nov 15 | 6 | 53 | PM”.
- [UIDatePicker.Mode.countDownTimer](countdowntimer.md): A mode that displays hour and minute values, for example, “1 | 53”. The application must set a timer to fire at the proper interval and set the date picker as the seconds tick down.

# UIDatePickerModeYearAndMonth (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration Case  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · visionOS 1.1+

A mode that displays the date in months and years.

## Declaration

```objectivec
UIDatePickerModeYearAndMonth
```

<a id="Discussion"></a>

## Discussion

The exact order of these items depends on the locale setting. An example of this mode is “November | 2007”.

> **Important**

>  You can only use this mode with the date picker style [UIDatePickerStyleWheels](../../uidatepickerstyle/wheels.md), and can’t use it on Mac Catalyst with the [UIUserInterfaceIdiomMac](../../uiuserinterfaceidiom/mac.md) user interface idiom; otherwise, [UIDatePicker](../../uidatepicker.md) throws an exception.

## See Also

### Constants

- [UIDatePickerModeTime](time.md): A mode that displays the date in hours, minutes, and (optionally) an AM/PM designation. The exact items shown and their order depend upon the locale set. An example of this mode is “6 | 53 | PM”.
- [UIDatePickerModeDate](date.md): A mode that displays the date in months, days of the month, and years. The exact order of these items depends on the locale setting. An example of this mode is “November | 15 | 2007 “.
- [UIDatePickerModeDateAndTime](dateandtime.md): A mode that displays the date as unified day of the week, month, and day of the month values, plus hours, minutes, and (optionally) an AM/PM designation. The exact order and format of these items depends on the locale set. An example of this mode is “Wed Nov 15 | 6 | 53 | PM”.
- [UIDatePickerModeCountDownTimer](countdowntimer.md): A mode that displays hour and minute values, for example, “1 | 53”. The application must set a timer to fire at the proper interval and set the date picker as the seconds tick down.
