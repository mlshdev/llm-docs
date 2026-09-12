> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdatepicker](https://developer.apple.com/documentation/appkit/nsdatepicker)

# NSDatePicker (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

A display of a calendar date with controls for editing the date value.

## Declaration

```swift
class NSDatePicker
```

<a id="overview"></a>

## Overview

`NSDatePicker` uses an [NSDatePickerCell](nsdatepickercell.md) to implement much of the control’s functionality. `NSDatePicker` provides cover methods for most of `NSDatePickerCell` methods, which invoke the corresponding cell method.

## Topics

### Configuring Date Pickers

- [isBezeled](nsdatepicker/isbezeled.md): A Boolean value that indicates whether the date picker draws a bezeled border.
- [isBordered](nsdatepicker/isbordered.md): A Boolean value that indicates whether the date picker has a plain border.
- [backgroundColor](nsdatepicker/backgroundcolor.md): The date picker’s background color.
- [drawsBackground](nsdatepicker/drawsbackground.md): A Boolean value that indicates whether the date picker draws the background.
- [textColor](nsdatepicker/textcolor.md): The date picker’s text color.
- [datePickerStyle](nsdatepicker/datepickerstyle.md): The date picker’s style.
- [presentsCalendarOverlay](nsdatepicker/presentscalendaroverlay.md): A Boolean value that indicates whether to present a graphical calendar overlay when editing a calendar element within a text-field style date picker.
- [delegate](nsdatepicker/delegate.md): A delegate for the date picker’s cell
- [datePickerElements](nsdatepicker/datepickerelements.md): A bitmask that indicates which visual elements of the date picker are currently shown, and which won’t be usable because they are hidden.
- [NSDatePicker.ElementFlags](nsdatepicker/elementflags.md): Constants that specify the date and time elements displayed by the picker.
- [NSDatePicker.Style](nsdatepicker/style.md): Constants that define the visual appearance of the date picker cell.

### Controlling Date Picker Range and Mode

- [calendar](nsdatepicker/calendar.md): The calendar used by the date picker.
- [locale](nsdatepicker/locale.md): The date picker’s locale.
- [datePickerMode](nsdatepicker/datepickermode.md): The date picker’s mode.
- [timeZone](nsdatepicker/timezone.md): The time zone for the date picker.
- [NSDatePicker.Mode](nsdatepicker/mode.md): Constants that define whether the picker provides a single date, or a range of dates.

### Accessing Object Values

- [dateValue](nsdatepicker/datevalue.md): The date selected by the date picker.
- [timeInterval](nsdatepicker/timeinterval.md): The time interval selected by the date picker.

### Constraining the Displayable/Selectable Range

- [minDate](nsdatepicker/mindate.md): The date picker’s minimum date value.
- [maxDate](nsdatepicker/maxdate.md): The date picker’s maximum date value.

## Relationships

### Inherits From

- [NSControl](nscontrol.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSAccessibilityElementProtocol](nsaccessibilityelementprotocol.md)
- [NSAccessibilityProtocol](nsaccessibilityprotocol.md)
- [NSAnimatablePropertyContainer](nsanimatablepropertycontainer.md)
- [NSAppearanceCustomization](nsappearancecustomization.md)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSDraggingDestination](nsdraggingdestination.md)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSStandardKeyBindingResponding](nsstandardkeybindingresponding.md)
- [NSTouchBarProvider](nstouchbarprovider.md)
- [NSUserActivityRestoring](nsuseractivityrestoring.md)
- [NSUserInterfaceItemIdentification](nsuserinterfaceitemidentification.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# NSDatePicker (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

A display of a calendar date with controls for editing the date value.

## Declaration

```objectivec
@interface NSDatePicker : NSControl
```

<a id="overview"></a>

## Overview

`NSDatePicker` uses an [NSDatePickerCell](nsdatepickercell.md) to implement much of the control’s functionality. `NSDatePicker` provides cover methods for most of `NSDatePickerCell` methods, which invoke the corresponding cell method.

## Topics

### Configuring Date Pickers

- [bezeled](nsdatepicker/isbezeled.md): A Boolean value that indicates whether the date picker draws a bezeled border.
- [bordered](nsdatepicker/isbordered.md): A Boolean value that indicates whether the date picker has a plain border.
- [backgroundColor](nsdatepicker/backgroundcolor.md): The date picker’s background color.
- [drawsBackground](nsdatepicker/drawsbackground.md): A Boolean value that indicates whether the date picker draws the background.
- [textColor](nsdatepicker/textcolor.md): The date picker’s text color.
- [datePickerStyle](nsdatepicker/datepickerstyle.md): The date picker’s style.
- [presentsCalendarOverlay](nsdatepicker/presentscalendaroverlay.md): A Boolean value that indicates whether to present a graphical calendar overlay when editing a calendar element within a text-field style date picker.
- [delegate](nsdatepicker/delegate.md): A delegate for the date picker’s cell
- [datePickerElements](nsdatepicker/datepickerelements.md): A bitmask that indicates which visual elements of the date picker are currently shown, and which won’t be usable because they are hidden.
- [NSDatePickerElementFlags](nsdatepicker/elementflags.md): Constants that specify the date and time elements displayed by the picker.
- [NSDatePickerStyle](nsdatepicker/style.md): Constants that define the visual appearance of the date picker cell.

### Controlling Date Picker Range and Mode

- [calendar](nsdatepicker/calendar.md): The calendar used by the date picker.
- [locale](nsdatepicker/locale.md): The date picker’s locale.
- [datePickerMode](nsdatepicker/datepickermode.md): The date picker’s mode.
- [timeZone](nsdatepicker/timezone.md): The time zone for the date picker.
- [NSDatePickerMode](nsdatepicker/mode.md): Constants that define whether the picker provides a single date, or a range of dates.

### Accessing Object Values

- [dateValue](nsdatepicker/datevalue.md): The date selected by the date picker.
- [timeInterval](nsdatepicker/timeinterval.md): The time interval selected by the date picker.

### Constraining the Displayable/Selectable Range

- [minDate](nsdatepicker/mindate.md): The date picker’s minimum date value.
- [maxDate](nsdatepicker/maxdate.md): The date picker’s maximum date value.

## Relationships

### Inherits From

- [NSControl](nscontrol.md)
