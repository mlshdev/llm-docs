> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidatepicker/mode](https://developer.apple.com/documentation/uikit/uidatepicker/mode)

# UIDatePicker.Mode (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · visionOS

The mode displayed by the date picker.

## Declaration

```swift
enum Mode
```

<a id="overview"></a>

## Overview

The mode determines whether dates, times, or both dates and times are displayed. You can also use it to specify the appearance of a countdown timer. You can set and retrieve the mode value through the [datePickerMode](datepickermode.md) property.

## Topics

### Constants

- [UIDatePicker.Mode.time](mode/time.md): A mode that displays the date in hours, minutes, and (optionally) an AM/PM designation. The exact items shown and their order depend upon the locale set. An example of this mode is “6 | 53 | PM”.
- [UIDatePicker.Mode.date](mode/date.md): A mode that displays the date in months, days of the month, and years. The exact order of these items depends on the locale setting. An example of this mode is “November | 15 | 2007 “.
- [UIDatePicker.Mode.dateAndTime](mode/dateandtime.md): A mode that displays the date as unified day of the week, month, and day of the month values, plus hours, minutes, and (optionally) an AM/PM designation. The exact order and format of these items depends on the locale set. An example of this mode is “Wed Nov 15 | 6 | 53 | PM”.
- [UIDatePicker.Mode.yearAndMonth](mode/yearandmonth.md): A mode that displays the date in months and years.
- [UIDatePicker.Mode.countDownTimer](mode/countdowntimer.md): A mode that displays hour and minute values, for example, “1 | 53”. The application must set a timer to fire at the proper interval and set the date picker as the seconds tick down.

### Initializers

- [init(rawValue:)](mode/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring the date picker mode

- [datePickerMode](datepickermode.md): The mode of the date picker.

# UIDatePickerMode (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · visionOS

The mode displayed by the date picker.

## Declaration

```objectivec
enum UIDatePickerMode : NSInteger;
```

<a id="overview"></a>

## Overview

The mode determines whether dates, times, or both dates and times are displayed. You can also use it to specify the appearance of a countdown timer. You can set and retrieve the mode value through the [datePickerMode](datepickermode.md) property.

## Topics

### Constants

- [UIDatePickerModeTime](mode/time.md): A mode that displays the date in hours, minutes, and (optionally) an AM/PM designation. The exact items shown and their order depend upon the locale set. An example of this mode is “6 | 53 | PM”.
- [UIDatePickerModeDate](mode/date.md): A mode that displays the date in months, days of the month, and years. The exact order of these items depends on the locale setting. An example of this mode is “November | 15 | 2007 “.
- [UIDatePickerModeDateAndTime](mode/dateandtime.md): A mode that displays the date as unified day of the week, month, and day of the month values, plus hours, minutes, and (optionally) an AM/PM designation. The exact order and format of these items depends on the locale set. An example of this mode is “Wed Nov 15 | 6 | 53 | PM”.
- [UIDatePickerModeYearAndMonth](mode/yearandmonth.md): A mode that displays the date in months and years.
- [UIDatePickerModeCountDownTimer](mode/countdowntimer.md): A mode that displays hour and minute values, for example, “1 | 53”. The application must set a timer to fire at the proper interval and set the date picker as the seconds tick down.

## See Also

### Configuring the date picker mode

- [datePickerMode](datepickermode.md): The mode of the date picker.
