> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidatepicker/countdownduration](https://developer.apple.com/documentation/uikit/uidatepicker/countdownduration)

# countDownDuration (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The value displayed by the date picker when the mode property is set to show a countdown time.

## Declaration

```swift
var countDownDuration: TimeInterval { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to get and set the currently selected value when the date picker’s mode property is set to [UIDatePicker.Mode.countDownTimer](mode/countdowntimer.md). This property is of type [TimeInterval](../../foundation/timeinterval.md) and therefore is measured in seconds, although the date picker displays only hours and minutes. If the mode of the date picker is not [UIDatePicker.Mode.countDownTimer](mode/countdowntimer.md), this value is undefined; refer instead to the [date](date.md) property. The default value is 0.0 and the maximum value is 23:59 (86,340 seconds).

## See Also

### Configuring temporal attributes

- [maximumDate](maximumdate.md): The maximum date that a date picker can show.
- [minimumDate](minimumdate.md): The minimum date that a date picker can show.
- [minuteInterval](minuteinterval.md): The interval at which the date picker should display minutes.
- [roundsToMinuteInterval](roundstominuteinterval.md): A Boolean value that determines whether the date rounds to a specific minute interval.

# countDownDuration (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The value displayed by the date picker when the mode property is set to show a countdown time.

## Declaration

```objectivec
@property (nonatomic) NSTimeInterval countDownDuration;
```

<a id="Discussion"></a>

## Discussion

Use this property to get and set the currently selected value when the date picker’s mode property is set to [UIDatePickerModeCountDownTimer](mode/countdowntimer.md). This property is of type [NSTimeInterval](../../foundation/timeinterval.md) and therefore is measured in seconds, although the date picker displays only hours and minutes. If the mode of the date picker is not [UIDatePickerModeCountDownTimer](mode/countdowntimer.md), this value is undefined; refer instead to the [date](date.md) property. The default value is 0.0 and the maximum value is 23:59 (86,340 seconds).

## See Also

### Configuring temporal attributes

- [maximumDate](maximumdate.md): The maximum date that a date picker can show.
- [minimumDate](minimumdate.md): The minimum date that a date picker can show.
- [minuteInterval](minuteinterval.md): The interval at which the date picker should display minutes.
- [roundsToMinuteInterval](roundstominuteinterval.md): A Boolean value that determines whether the date rounds to a specific minute interval.
