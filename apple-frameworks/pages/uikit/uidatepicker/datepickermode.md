> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidatepicker/datepickermode](https://developer.apple.com/documentation/uikit/uidatepicker/datepickermode)

# datePickerMode (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The mode of the date picker.

## Declaration

```swift
var datePickerMode: UIDatePicker.Mode { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to change the type of information displayed by the date picker. It determines whether the date picker allows selection of a date, a time, both date and time, or a countdown time. The default mode is [UIDatePicker.Mode.dateAndTime](mode/dateandtime.md). See [UIDatePicker.Mode](mode.md) for a list of mode constants.

## See Also

### Configuring the date picker mode

- [UIDatePicker.Mode](mode.md): The mode displayed by the date picker.

# datePickerMode (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The mode of the date picker.

## Declaration

```objectivec
@property (nonatomic) UIDatePickerMode datePickerMode;
```

<a id="Discussion"></a>

## Discussion

Use this property to change the type of information displayed by the date picker. It determines whether the date picker allows selection of a date, a time, both date and time, or a countdown time. The default mode is [UIDatePickerModeDateAndTime](mode/dateandtime.md). See [UIDatePickerMode](mode.md) for a list of mode constants.

## See Also

### Configuring the date picker mode

- [UIDatePickerMode](mode.md): The mode displayed by the date picker.
