> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidatepickerstyle](https://developer.apple.com/documentation/uikit/uidatepickerstyle)

# UIDatePickerStyle (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · visionOS 1.0+

Styles that determine the appearance of a date picker.

## Declaration

```swift
enum UIDatePickerStyle
```

<a id="overview"></a>

## Overview

A date picker style determines how your app displays the date picker value and its editor. For instance, a date picker with a [datePickerMode](uidatepicker/datepickermode.md) of [UIDatePicker.Mode.dateAndTime](uidatepicker/mode/dateandtime.md) and [datePickerStyle](uidatepicker/datepickerstyle.md) of [UIDatePickerStyle.compact](uidatepickerstyle/compact.md) displays the date picker’s value as a label that the user can tap to view a calendar-style editor. On the other hand, the same date picker using the [UIDatePickerStyle.inline](uidatepickerstyle/inline.md) style displays a view that lets the user edit the value without having to tap the label shown in the [UIDatePickerStyle.compact](uidatepickerstyle/compact.md) style.

## Topics

### Styles

- [UIDatePickerStyle.automatic](uidatepickerstyle/automatic.md): A style indicating that the system picks the concrete style based on the current platform and date picker mode.
- [UIDatePickerStyle.compact](uidatepickerstyle/compact.md): A style indicating that the date picker displays as a label that when tapped displays a calendar-style editor.
- [UIDatePickerStyle.inline](uidatepickerstyle/inline.md): A style indicating that the date pickers displays as an inline, editable field.
- [UIDatePickerStyle.wheels](uidatepickerstyle/wheels.md): A style indicating that the date picker displays as a wheel picker.

### Initializers

- [init(rawValue:)](uidatepickerstyle/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring the date picker style

- [datePickerStyle](uidatepicker/datepickerstyle.md): The current style of the date picker.
- [preferredDatePickerStyle](uidatepicker/preferreddatepickerstyle.md): The preferred style of the date picker.

# UIDatePickerStyle (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · visionOS 1.0+

Styles that determine the appearance of a date picker.

## Declaration

```objectivec
enum UIDatePickerStyle : NSInteger;
```

<a id="overview"></a>

## Overview

A date picker style determines how your app displays the date picker value and its editor. For instance, a date picker with a [datePickerMode](uidatepicker/datepickermode.md) of [UIDatePickerModeDateAndTime](uidatepicker/mode/dateandtime.md) and [datePickerStyle](uidatepicker/datepickerstyle.md) of [UIDatePickerStyleCompact](uidatepickerstyle/compact.md) displays the date picker’s value as a label that the user can tap to view a calendar-style editor. On the other hand, the same date picker using the [UIDatePickerStyleInline](uidatepickerstyle/inline.md) style displays a view that lets the user edit the value without having to tap the label shown in the [UIDatePickerStyleCompact](uidatepickerstyle/compact.md) style.

## Topics

### Styles

- [UIDatePickerStyleAutomatic](uidatepickerstyle/automatic.md): A style indicating that the system picks the concrete style based on the current platform and date picker mode.
- [UIDatePickerStyleCompact](uidatepickerstyle/compact.md): A style indicating that the date picker displays as a label that when tapped displays a calendar-style editor.
- [UIDatePickerStyleInline](uidatepickerstyle/inline.md): A style indicating that the date pickers displays as an inline, editable field.
- [UIDatePickerStyleWheels](uidatepickerstyle/wheels.md): A style indicating that the date picker displays as a wheel picker.

## See Also

### Configuring the date picker style

- [datePickerStyle](uidatepicker/datepickerstyle.md): The current style of the date picker.
- [preferredDatePickerStyle](uidatepicker/preferreddatepickerstyle.md): The preferred style of the date picker.
