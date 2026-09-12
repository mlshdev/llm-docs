> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidatepicker/maximumdate](https://developer.apple.com/documentation/uikit/uidatepicker/maximumdate)

# maximumDate (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The maximum date that a date picker can show.

## Declaration

```swift
var maximumDate: Date? { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to configure the maximum date that’s selected in the date picker interface. The property contains an [NSDate](../../foundation/nsdate.md) object or `nil` (the default), which means no maximum date. This property, along with the [minimumDate](minimumdate.md) property, lets you specify a valid date range. If the minimum date value is greater than the maximum date value, both properties are ignored. The minimum and maximum dates are also ignored in the countdown-timer mode ([UIDatePicker.Mode.countDownTimer](mode/countdowntimer.md)).

## See Also

### Configuring temporal attributes

- [minimumDate](minimumdate.md): The minimum date that a date picker can show.
- [minuteInterval](minuteinterval.md): The interval at which the date picker should display minutes.
- [countDownDuration](countdownduration.md): The value displayed by the date picker when the mode property is set to show a countdown time.
- [roundsToMinuteInterval](roundstominuteinterval.md): A Boolean value that determines whether the date rounds to a specific minute interval.

# maximumDate (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The maximum date that a date picker can show.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) NSDate * maximumDate;
```

<a id="Discussion"></a>

## Discussion

Use this property to configure the maximum date that’s selected in the date picker interface. The property contains an [NSDate](../../foundation/nsdate.md) object or `nil` (the default), which means no maximum date. This property, along with the [minimumDate](minimumdate.md) property, lets you specify a valid date range. If the minimum date value is greater than the maximum date value, both properties are ignored. The minimum and maximum dates are also ignored in the countdown-timer mode ([UIDatePickerModeCountDownTimer](mode/countdowntimer.md)).

## See Also

### Configuring temporal attributes

- [minimumDate](minimumdate.md): The minimum date that a date picker can show.
- [minuteInterval](minuteinterval.md): The interval at which the date picker should display minutes.
- [countDownDuration](countdownduration.md): The value displayed by the date picker when the mode property is set to show a countdown time.
- [roundsToMinuteInterval](roundstominuteinterval.md): A Boolean value that determines whether the date rounds to a specific minute interval.
