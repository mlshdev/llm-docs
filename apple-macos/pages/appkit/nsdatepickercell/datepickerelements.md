> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdatepickercell/datepickerelements](https://developer.apple.com/documentation/appkit/nsdatepickercell/datepickerelements)

# datePickerElements (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A bitmask that indicates which visual elements are shown by the date picker.

## Declaration

```swift
var datePickerElements: NSDatePicker.ElementFlags { get set }
```

<a id="Discussion"></a>

## Discussion

Elements not included in the bitmask are hidden from view. For a list of possible values, see [NSDatePicker.ElementFlags](../nsdatepicker/elementflags.md).

## See Also

### Configuring Appearance

- [backgroundColor](backgroundcolor.md): The cell’s background color.
- [drawsBackground](drawsbackground.md): A Boolean value indicating whether the cell draws its background.
- [textColor](textcolor.md): The cell’s text color.
- [datePickerStyle](datepickerstyle.md): The date picker style to use.

# datePickerElements (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A bitmask that indicates which visual elements are shown by the date picker.

## Declaration

```objectivec
@property NSDatePickerElementFlags datePickerElements;
```

<a id="Discussion"></a>

## Discussion

Elements not included in the bitmask are hidden from view. For a list of possible values, see [NSDatePickerElementFlags](../nsdatepicker/elementflags.md).

## See Also

### Configuring Appearance

- [backgroundColor](backgroundcolor.md): The cell’s background color.
- [drawsBackground](drawsbackground.md): A Boolean value indicating whether the cell draws its background.
- [textColor](textcolor.md): The cell’s text color.
- [datePickerStyle](datepickerstyle.md): The date picker style to use.
