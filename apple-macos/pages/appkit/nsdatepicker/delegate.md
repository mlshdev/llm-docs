> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdatepicker/delegate](https://developer.apple.com/documentation/appkit/nsdatepicker/delegate)

# delegate (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A delegate for the date picker’s cell

## Declaration

```swift
weak var delegate: (any NSDatePickerCellDelegate)? { get set }
```

<a id="Discussion"></a>

## Discussion

The date picker’s [NSDatePickerCell](../nsdatepickercell.md) instance handles all delegate methods.

## See Also

### Configuring Date Pickers

- [isBezeled](isbezeled.md): A Boolean value that indicates whether the date picker draws a bezeled border.
- [isBordered](isbordered.md): A Boolean value that indicates whether the date picker has a plain border.
- [backgroundColor](backgroundcolor.md): The date picker’s background color.
- [drawsBackground](drawsbackground.md): A Boolean value that indicates whether the date picker draws the background.
- [textColor](textcolor.md): The date picker’s text color.
- [datePickerStyle](datepickerstyle.md): The date picker’s style.
- [presentsCalendarOverlay](presentscalendaroverlay.md): A Boolean value that indicates whether to present a graphical calendar overlay when editing a calendar element within a text-field style date picker.
- [datePickerElements](datepickerelements.md): A bitmask that indicates which visual elements of the date picker are currently shown, and which won’t be usable because they are hidden.
- [NSDatePicker.ElementFlags](elementflags.md): Constants that specify the date and time elements displayed by the picker.
- [NSDatePicker.Style](style.md): Constants that define the visual appearance of the date picker cell.

# delegate (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A delegate for the date picker’s cell

## Declaration

```objectivec
@property (weak, nullable) id<NSDatePickerCellDelegate> delegate;
```

<a id="Discussion"></a>

## Discussion

The date picker’s [NSDatePickerCell](../nsdatepickercell.md) instance handles all delegate methods.

## See Also

### Configuring Date Pickers

- [bezeled](isbezeled.md): A Boolean value that indicates whether the date picker draws a bezeled border.
- [bordered](isbordered.md): A Boolean value that indicates whether the date picker has a plain border.
- [backgroundColor](backgroundcolor.md): The date picker’s background color.
- [drawsBackground](drawsbackground.md): A Boolean value that indicates whether the date picker draws the background.
- [textColor](textcolor.md): The date picker’s text color.
- [datePickerStyle](datepickerstyle.md): The date picker’s style.
- [presentsCalendarOverlay](presentscalendaroverlay.md): A Boolean value that indicates whether to present a graphical calendar overlay when editing a calendar element within a text-field style date picker.
- [datePickerElements](datepickerelements.md): A bitmask that indicates which visual elements of the date picker are currently shown, and which won’t be usable because they are hidden.
- [NSDatePickerElementFlags](elementflags.md): Constants that specify the date and time elements displayed by the picker.
- [NSDatePickerStyle](style.md): Constants that define the visual appearance of the date picker cell.
