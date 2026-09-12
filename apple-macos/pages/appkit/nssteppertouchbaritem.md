> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssteppertouchbaritem](https://developer.apple.com/documentation/appkit/nssteppertouchbaritem)

# NSStepperTouchBarItem (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+

A bar item that provides a stepper control for incrementing or decrementing a value.

## Declaration

```swift
class NSStepperTouchBarItem
```

## Topics

### Creating a stepper item

- [init(identifier:drawingHandler:)](nssteppertouchbaritem/init%28identifier_drawinghandler_%29.md): Creates a `NSStepperTouchBarItem` using the result of `drawingHandler` to display the stepper’s value as an image.
- [init(identifier:formatter:)](nssteppertouchbaritem/init%28identifier_formatter_%29.md): Creates a `NSStepperTouchBarItem` with a `formatter` to display the stepper’s value as text.

### Handling stepper interaction

- [target](nssteppertouchbaritem/target.md): The target object that receives action messages from the stepper.
- [action](nssteppertouchbaritem/action.md): The action-message selector associated with the stepper.

### Managing the stepper’s value

- [value](nssteppertouchbaritem/value.md): The current value of the stepper.
- [maxValue](nssteppertouchbaritem/maxvalue.md): The stepper’s maximum value.
- [minValue](nssteppertouchbaritem/minvalue.md): The stepper’s minimum value.
- [increment](nssteppertouchbaritem/increment.md): The stepper’s increment value.

### Configuring bar customization

- [customizationLabel](nssteppertouchbaritem/customizationlabel.md): The localized string labeling this item during user customization.

## Relationships

### Inherits From

- [NSTouchBarItem](nstouchbaritem.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Touch Bar items

- [NSTouchBarItem](nstouchbaritem.md): A UI control shown in the Touch Bar on supported models of MacBook Pro.
- [NSCandidateListTouchBarItem](nscandidatelisttouchbaritem.md): A bar item that, along with its delegate, provides a list of textual suggestions for the current text view.
- [NSColorPickerTouchBarItem](nscolorpickertouchbaritem.md): A bar item that provides a system-defined color picker.
- [NSCustomTouchBarItem](nscustomtouchbaritem.md): A bar item that contains a responder of your choice, such as a view, a button, or a scrubber.
- [NSGroupTouchBarItem](nsgrouptouchbaritem.md): A bar item that provides a bar to contain other items.
- [NSPopoverTouchBarItem](nspopovertouchbaritem.md): A bar item that provides a two-state control that can expand into its second state, showing the contents of a bar that it owns.
- [NSSharingServicePickerTouchBarItem](nssharingservicepickertouchbaritem.md): A bar item that, along with its delegate, provides a list of objects eligible for sharing.
- [NSSliderTouchBarItem](nsslidertouchbaritem.md): A bar item that provides a slider control for choosing a value in a range.
- [NSUserInterfaceCompressionOptions](nsuserinterfacecompressionoptions.md): An object that specifies how user interface elements resize themselves when space is constrained.
- [NSButtonTouchBarItem](nsbuttontouchbaritem.md): A bar item that provides a button.
- [NSPickerTouchBarItem](nspickertouchbaritem.md): A bar item that provides a picker control with multiple options.
- [NSPickerTouchBarItem.ControlRepresentation](nspickertouchbaritem/controlrepresentation-swift.enum.md): Constants that specify display styles for picker bar items.
- [NSPickerTouchBarItem.SelectionMode](nspickertouchbaritem/selectionmode-swift.enum.md): Constants that specify selection modes for picker bar items.

# NSStepperTouchBarItem (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** Mac Catalyst 13.1+ · macOS 10.15+

A bar item that provides a stepper control for incrementing or decrementing a value.

## Declaration

```objectivec
@interface NSStepperTouchBarItem : NSTouchBarItem
```

## Topics

### Creating a stepper item

- [stepperTouchBarItemWithIdentifier:drawingHandler:](nssteppertouchbaritem/init%28identifier_drawinghandler_%29.md): Creates a `NSStepperTouchBarItem` using the result of `drawingHandler` to display the stepper’s value as an image.
- [stepperTouchBarItemWithIdentifier:formatter:](nssteppertouchbaritem/init%28identifier_formatter_%29.md): Creates a `NSStepperTouchBarItem` with a `formatter` to display the stepper’s value as text.

### Handling stepper interaction

- [target](nssteppertouchbaritem/target.md): The target object that receives action messages from the stepper.
- [action](nssteppertouchbaritem/action.md): The action-message selector associated with the stepper.

### Managing the stepper’s value

- [value](nssteppertouchbaritem/value.md): The current value of the stepper.
- [maxValue](nssteppertouchbaritem/maxvalue.md): The stepper’s maximum value.
- [minValue](nssteppertouchbaritem/minvalue.md): The stepper’s minimum value.
- [increment](nssteppertouchbaritem/increment.md): The stepper’s increment value.

### Configuring bar customization

- [customizationLabel](nssteppertouchbaritem/customizationlabel.md): The localized string labeling this item during user customization.

## Relationships

### Inherits From

- [NSTouchBarItem](nstouchbaritem.md)

## See Also

### Touch Bar items

- [NSTouchBarItem](nstouchbaritem.md): A UI control shown in the Touch Bar on supported models of MacBook Pro.
- [NSCandidateListTouchBarItem](nscandidatelisttouchbaritem.md): A bar item that, along with its delegate, provides a list of textual suggestions for the current text view.
- [NSColorPickerTouchBarItem](nscolorpickertouchbaritem.md): A bar item that provides a system-defined color picker.
- [NSCustomTouchBarItem](nscustomtouchbaritem.md): A bar item that contains a responder of your choice, such as a view, a button, or a scrubber.
- [NSGroupTouchBarItem](nsgrouptouchbaritem.md): A bar item that provides a bar to contain other items.
- [NSPopoverTouchBarItem](nspopovertouchbaritem.md): A bar item that provides a two-state control that can expand into its second state, showing the contents of a bar that it owns.
- [NSSharingServicePickerTouchBarItem](nssharingservicepickertouchbaritem.md): A bar item that, along with its delegate, provides a list of objects eligible for sharing.
- [NSSliderTouchBarItem](nsslidertouchbaritem.md): A bar item that provides a slider control for choosing a value in a range.
- [NSUserInterfaceCompressionOptions](nsuserinterfacecompressionoptions.md): An object that specifies how user interface elements resize themselves when space is constrained.
- [NSButtonTouchBarItem](nsbuttontouchbaritem.md): A bar item that provides a button.
- [NSPickerTouchBarItem](nspickertouchbaritem.md): A bar item that provides a picker control with multiple options.
- [NSPickerTouchBarItemControlRepresentation](nspickertouchbaritem/controlrepresentation-swift.enum.md): Constants that specify display styles for picker bar items.
- [NSPickerTouchBarItemSelectionMode](nspickertouchbaritem/selectionmode-swift.enum.md): Constants that specify selection modes for picker bar items.
