> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdatepicker/datepickerelements](https://developer.apple.com/documentation/appkit/nsdatepicker/datepickerelements)

# datePickerElements (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A bitmask that indicates which visual elements of the date picker are currently shown, and which won’t be usable because they are hidden.

## Declaration

```swift
var datePickerElements: NSDatePicker.ElementFlags { get set }
```

<a id="Discussion"></a>

## Discussion

See “Constants” in [NSDatePickerCell](../nsdatepickercell.md) for a description of the possible values.

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
- [NSDatePicker.ElementFlags](elementflags.md): Constants that specify the date and time elements displayed by the picker.
- [NSDatePicker.Style](style.md): Constants that define the visual appearance of the date picker cell.

# datePickerElements (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A bitmask that indicates which visual elements of the date picker are currently shown, and which won’t be usable because they are hidden.

## Declaration

```objectivec
@property NSDatePickerElementFlags datePickerElements;
```

<a id="Discussion"></a>

## Discussion

See “Constants” in [NSDatePickerCell](../nsdatepickercell.md) for a description of the possible values.

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
- [NSDatePickerElementFlags](elementflags.md): Constants that specify the date and time elements displayed by the picker.
- [NSDatePickerStyle](style.md): Constants that define the visual appearance of the date picker cell.
