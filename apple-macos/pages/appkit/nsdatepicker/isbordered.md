> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdatepicker/isbordered](https://developer.apple.com/documentation/appkit/nsdatepicker/isbordered)

# isBordered (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates whether the date picker has a plain border.

## Declaration

```swift
var isBordered: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

This property contains [true](https://developer.apple.com/documentation/swift/true) if the date picker has a plain boarder; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Configuring Date Pickers

- [isBezeled](isbezeled.md): A Boolean value that indicates whether the date picker draws a bezeled border.
- [backgroundColor](backgroundcolor.md): The date picker’s background color.
- [drawsBackground](drawsbackground.md): A Boolean value that indicates whether the date picker draws the background.
- [textColor](textcolor.md): The date picker’s text color.
- [datePickerStyle](datepickerstyle.md): The date picker’s style.
- [presentsCalendarOverlay](presentscalendaroverlay.md): A Boolean value that indicates whether to present a graphical calendar overlay when editing a calendar element within a text-field style date picker.
- [delegate](delegate.md): A delegate for the date picker’s cell
- [datePickerElements](datepickerelements.md): A bitmask that indicates which visual elements of the date picker are currently shown, and which won’t be usable because they are hidden.
- [NSDatePicker.ElementFlags](elementflags.md): Constants that specify the date and time elements displayed by the picker.
- [NSDatePicker.Style](style.md): Constants that define the visual appearance of the date picker cell.

# bordered (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates whether the date picker has a plain border.

## Declaration

```objectivec
@property (getter=isBordered) BOOL bordered;
```

<a id="Discussion"></a>

## Discussion

This property contains [true](https://developer.apple.com/documentation/swift/true) if the date picker has a plain boarder; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Configuring Date Pickers

- [bezeled](isbezeled.md): A Boolean value that indicates whether the date picker draws a bezeled border.
- [backgroundColor](backgroundcolor.md): The date picker’s background color.
- [drawsBackground](drawsbackground.md): A Boolean value that indicates whether the date picker draws the background.
- [textColor](textcolor.md): The date picker’s text color.
- [datePickerStyle](datepickerstyle.md): The date picker’s style.
- [presentsCalendarOverlay](presentscalendaroverlay.md): A Boolean value that indicates whether to present a graphical calendar overlay when editing a calendar element within a text-field style date picker.
- [delegate](delegate.md): A delegate for the date picker’s cell
- [datePickerElements](datepickerelements.md): A bitmask that indicates which visual elements of the date picker are currently shown, and which won’t be usable because they are hidden.
- [NSDatePickerElementFlags](elementflags.md): Constants that specify the date and time elements displayed by the picker.
- [NSDatePickerStyle](style.md): Constants that define the visual appearance of the date picker cell.
