> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdatepickercell](https://developer.apple.com/documentation/appkit/nsdatepickercell)

# NSDatePickerCell (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

An object that controls the behavior of a date picker, or of a single date picker cell in a matrix.

## Declaration

```swift
class NSDatePickerCell
```

## Topics

### Configuring Appearance

- [backgroundColor](nsdatepickercell/backgroundcolor.md): The cell’s background color.
- [drawsBackground](nsdatepickercell/drawsbackground.md): A Boolean value indicating whether the cell draws its background.
- [textColor](nsdatepickercell/textcolor.md): The cell’s text color.
- [datePickerStyle](nsdatepickercell/datepickerstyle.md): The date picker style to use.
- [datePickerElements](nsdatepickercell/datepickerelements.md): A bitmask that indicates which visual elements are shown by the date picker.

### Range Mode

- [datePickerMode](nsdatepickercell/datepickermode.md): The mode in use by the date picker.

### Object Values

- [dateValue](nsdatepickercell/datevalue.md): The date currently specified in the picker.
- [timeInterval](nsdatepickercell/timeinterval.md): The time interval that represents the date range.
- [calendar](nsdatepickercell/calendar.md): The calendar used by the date picker.
- [locale](nsdatepickercell/locale.md): The locale used to display dates.
- [timeZone](nsdatepickercell/timezone.md): The time zone used to display time-related values.

### Date Range Constraints

- [minDate](nsdatepickercell/mindate.md): The minimum date that the picker allows as input.
- [maxDate](nsdatepickercell/maxdate.md): The maximum date that the picker allows as input.

### Getting and Setting the Delegate

- [delegate](nsdatepickercell/delegate.md): The delegate associated with the date picker.

### Constants

- [NSDatePicker.Style](nsdatepicker/style.md): Constants that define the visual appearance of the date picker cell.
- [NSDatePicker.Mode](nsdatepicker/mode.md): Constants that define whether the picker provides a single date, or a range of dates.
- [NSDatePicker.ElementFlags](nsdatepicker/elementflags.md): Constants that specify the date and time elements displayed by the picker.

### Initializers

- [init(coder:)](nsdatepickercell/init%28coder_%29.md)
- [init(textCell:)](nsdatepickercell/init%28textcell_%29.md)

## Relationships

### Inherits From

- [NSActionCell](nsactioncell.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSAccessibilityElementProtocol](nsaccessibilityelementprotocol.md)
- [NSAccessibilityProtocol](nsaccessibilityprotocol.md)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSUserInterfaceItemIdentification](nsuserinterfaceitemidentification.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Cells

- [NSDatePickerCellDelegate](nsdatepickercelldelegate.md): A set of optional methods implemented by delegates of [NSDatePickerCell](nsdatepickercell.md) objects.

# NSDatePickerCell (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

An object that controls the behavior of a date picker, or of a single date picker cell in a matrix.

## Declaration

```objectivec
@interface NSDatePickerCell : NSActionCell
```

## Topics

### Configuring Appearance

- [backgroundColor](nsdatepickercell/backgroundcolor.md): The cell’s background color.
- [drawsBackground](nsdatepickercell/drawsbackground.md): A Boolean value indicating whether the cell draws its background.
- [textColor](nsdatepickercell/textcolor.md): The cell’s text color.
- [datePickerStyle](nsdatepickercell/datepickerstyle.md): The date picker style to use.
- [datePickerElements](nsdatepickercell/datepickerelements.md): A bitmask that indicates which visual elements are shown by the date picker.

### Range Mode

- [datePickerMode](nsdatepickercell/datepickermode.md): The mode in use by the date picker.

### Object Values

- [dateValue](nsdatepickercell/datevalue.md): The date currently specified in the picker.
- [timeInterval](nsdatepickercell/timeinterval.md): The time interval that represents the date range.
- [calendar](nsdatepickercell/calendar.md): The calendar used by the date picker.
- [locale](nsdatepickercell/locale.md): The locale used to display dates.
- [timeZone](nsdatepickercell/timezone.md): The time zone used to display time-related values.

### Date Range Constraints

- [minDate](nsdatepickercell/mindate.md): The minimum date that the picker allows as input.
- [maxDate](nsdatepickercell/maxdate.md): The maximum date that the picker allows as input.

### Getting and Setting the Delegate

- [delegate](nsdatepickercell/delegate.md): The delegate associated with the date picker.

### Constants

- [NSDatePickerStyle](nsdatepicker/style.md): Constants that define the visual appearance of the date picker cell.
- [NSDatePickerMode](nsdatepicker/mode.md): Constants that define whether the picker provides a single date, or a range of dates.
- [NSDatePickerElementFlags](nsdatepicker/elementflags.md): Constants that specify the date and time elements displayed by the picker.

### Initializers

- [initWithCoder:](nsdatepickercell/init%28coder_%29.md)
- [initTextCell:](nsdatepickercell/init%28textcell_%29.md)

## Relationships

### Inherits From

- [NSActionCell](nsactioncell.md)

## See Also

### Cells

- [NSDatePickerCellDelegate](nsdatepickercelldelegate.md): A set of optional methods implemented by delegates of [NSDatePickerCell](nsdatepickercell.md) objects.
