> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdatepicker/style](https://developer.apple.com/documentation/appkit/nsdatepicker/style)

# NSDatePicker.Style (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

Constants that define the visual appearance of the date picker cell.

## Declaration

```swift
enum Style
```

## Topics

### Enumeration Cases

- [NSDatePicker.Style.clockAndCalendar](style/clockandcalendar.md)
- [NSDatePicker.Style.textField](style/textfield.md)
- [NSDatePicker.Style.textFieldAndStepper](style/textfieldandstepper.md)

### Initializers

- [init(rawValue:)](style/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

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
- [NSDatePicker.ElementFlags](elementflags.md): Constants that specify the date and time elements displayed by the picker.

# NSDatePickerStyle (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

Constants that define the visual appearance of the date picker cell.

## Declaration

```objectivec
enum NSDatePickerStyle : NSUInteger;
```

## Topics

### Enumeration Cases

- [NSDatePickerStyleClockAndCalendar](style/clockandcalendar.md)
- [NSDatePickerStyleTextField](style/textfield.md)
- [NSDatePickerStyleTextFieldAndStepper](style/textfieldandstepper.md)

### Constants

- [NSTextFieldAndStepperDatePickerStyle](../nstextfieldandstepperdatepickerstyle.md): Deprecated.
- [NSTextFieldDatePickerStyle](../nstextfielddatepickerstyle.md): Deprecated.
- [NSClockAndCalendarDatePickerStyle](../nsclockandcalendardatepickerstyle.md): Deprecated.

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
- [NSDatePickerElementFlags](elementflags.md): Constants that specify the date and time elements displayed by the picker.
