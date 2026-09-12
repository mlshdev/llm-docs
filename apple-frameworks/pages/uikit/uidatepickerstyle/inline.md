> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidatepickerstyle/inline](https://developer.apple.com/documentation/uikit/uidatepickerstyle/inline)

# UIDatePickerStyle.inline (Swift)

**Framework:** UIKit  
**Kind:** Case  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

A style indicating that the date pickers displays as an inline, editable field.

## Declaration

```swift
case inline
```

<a id="Discussion"></a>

## Discussion

Use this style when you want to let users edit the date picker value without having to tap the label shown in the [UIDatePickerStyle.compact](compact.md) style.

You can’t use this style with the [UIDatePicker.Mode.countDownTimer](../uidatepicker/mode/countdowntimer.md) mode.

## See Also

### Styles

- [UIDatePickerStyle.automatic](automatic.md): A style indicating that the system picks the concrete style based on the current platform and date picker mode.
- [UIDatePickerStyle.compact](compact.md): A style indicating that the date picker displays as a label that when tapped displays a calendar-style editor.
- [UIDatePickerStyle.wheels](wheels.md): A style indicating that the date picker displays as a wheel picker.

# UIDatePickerStyleInline (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration Case  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

A style indicating that the date pickers displays as an inline, editable field.

## Declaration

```objectivec
UIDatePickerStyleInline
```

<a id="Discussion"></a>

## Discussion

Use this style when you want to let users edit the date picker value without having to tap the label shown in the [UIDatePickerStyleCompact](compact.md) style.

You can’t use this style with the [UIDatePickerModeCountDownTimer](../uidatepicker/mode/countdowntimer.md) mode.

## See Also

### Styles

- [UIDatePickerStyleAutomatic](automatic.md): A style indicating that the system picks the concrete style based on the current platform and date picker mode.
- [UIDatePickerStyleCompact](compact.md): A style indicating that the date picker displays as a label that when tapped displays a calendar-style editor.
- [UIDatePickerStyleWheels](wheels.md): A style indicating that the date picker displays as a wheel picker.
