> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdatepicker/presentscalendaroverlay](https://developer.apple.com/documentation/appkit/nsdatepicker/presentscalendaroverlay)

# presentsCalendarOverlay (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.15.4+

A Boolean value that indicates whether to present a graphical calendar overlay when editing a calendar element within a text-field style date picker.

## Declaration

```swift
var presentsCalendarOverlay: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is `NO`. The overlay only appears for text-style date pickers when you select a calendar element. The overlay doesn’t appear when there are no calendar events or the value of this property is `YES`.

## See Also

### Configuring Date Pickers

- [isBezeled](isbezeled.md): A Boolean value that indicates whether the date picker draws a bezeled border.
- [isBordered](isbordered.md): A Boolean value that indicates whether the date picker has a plain border.
- [backgroundColor](backgroundcolor.md): The date picker’s background color.
- [drawsBackground](drawsbackground.md): A Boolean value that indicates whether the date picker draws the background.
- [textColor](textcolor.md): The date picker’s text color.
- [datePickerStyle](datepickerstyle.md): The date picker’s style.
- [delegate](delegate.md): A delegate for the date picker’s cell
- [datePickerElements](datepickerelements.md): A bitmask that indicates which visual elements of the date picker are currently shown, and which won’t be usable because they are hidden.
- [NSDatePicker.ElementFlags](elementflags.md): Constants that specify the date and time elements displayed by the picker.
- [NSDatePicker.Style](style.md): Constants that define the visual appearance of the date picker cell.

# presentsCalendarOverlay (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.15.4+

A Boolean value that indicates whether to present a graphical calendar overlay when editing a calendar element within a text-field style date picker.

## Declaration

```objectivec
@property BOOL presentsCalendarOverlay;
```

<a id="Discussion"></a>

## Discussion

The default value is `NO`. The overlay only appears for text-style date pickers when you select a calendar element. The overlay doesn’t appear when there are no calendar events or the value of this property is `YES`.

## See Also

### Configuring Date Pickers

- [bezeled](isbezeled.md): A Boolean value that indicates whether the date picker draws a bezeled border.
- [bordered](isbordered.md): A Boolean value that indicates whether the date picker has a plain border.
- [backgroundColor](backgroundcolor.md): The date picker’s background color.
- [drawsBackground](drawsbackground.md): A Boolean value that indicates whether the date picker draws the background.
- [textColor](textcolor.md): The date picker’s text color.
- [datePickerStyle](datepickerstyle.md): The date picker’s style.
- [delegate](delegate.md): A delegate for the date picker’s cell
- [datePickerElements](datepickerelements.md): A bitmask that indicates which visual elements of the date picker are currently shown, and which won’t be usable because they are hidden.
- [NSDatePickerElementFlags](elementflags.md): Constants that specify the date and time elements displayed by the picker.
- [NSDatePickerStyle](style.md): Constants that define the visual appearance of the date picker cell.
