> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbuttontouchbaritem](https://developer.apple.com/documentation/appkit/nsbuttontouchbaritem)

# NSButtonTouchBarItem (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+

A bar item that provides a button.

## Declaration

```swift
class NSButtonTouchBarItem
```

## Topics

### Creating a button item

- [init(identifier:image:target:action:)](nsbuttontouchbaritem/init%28identifier_image_target_action_%29.md)
- [init(identifier:title:image:target:action:)](nsbuttontouchbaritem/init%28identifier_title_image_target_action_%29.md)
- [init(identifier:title:target:action:)](nsbuttontouchbaritem/init%28identifier_title_target_action_%29.md)

### Configuring button appearance

- [title](nsbuttontouchbaritem/title.md)
- [image](nsbuttontouchbaritem/image.md)
- [bezelColor](nsbuttontouchbaritem/bezelcolor.md)

### Configuring button state

- [isEnabled](nsbuttontouchbaritem/isenabled.md)

### Handling button interaction

- [target](nsbuttontouchbaritem/target.md)
- [action](nsbuttontouchbaritem/action.md)

### Configuring bar customization

- [customizationLabel](nsbuttontouchbaritem/customizationlabel.md): The localized string labeling this item during user customization. The default value is empty string.

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
- [NSStepperTouchBarItem](nssteppertouchbaritem.md): A bar item that provides a stepper control for incrementing or decrementing a value.
- [NSUserInterfaceCompressionOptions](nsuserinterfacecompressionoptions.md): An object that specifies how user interface elements resize themselves when space is constrained.
- [NSPickerTouchBarItem](nspickertouchbaritem.md): A bar item that provides a picker control with multiple options.
- [NSPickerTouchBarItem.ControlRepresentation](nspickertouchbaritem/controlrepresentation-swift.enum.md): Constants that specify display styles for picker bar items.
- [NSPickerTouchBarItem.SelectionMode](nspickertouchbaritem/selectionmode-swift.enum.md): Constants that specify selection modes for picker bar items.

# NSButtonTouchBarItem (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** Mac Catalyst 13.1+ · macOS 10.15+

A bar item that provides a button.

## Declaration

```objectivec
@interface NSButtonTouchBarItem : NSTouchBarItem
```

## Topics

### Creating a button item

- [buttonTouchBarItemWithIdentifier:image:target:action:](nsbuttontouchbaritem/init%28identifier_image_target_action_%29.md)
- [buttonTouchBarItemWithIdentifier:title:image:target:action:](nsbuttontouchbaritem/init%28identifier_title_image_target_action_%29.md)
- [buttonTouchBarItemWithIdentifier:title:target:action:](nsbuttontouchbaritem/init%28identifier_title_target_action_%29.md)

### Configuring button appearance

- [title](nsbuttontouchbaritem/title.md)
- [image](nsbuttontouchbaritem/image.md)
- [bezelColor](nsbuttontouchbaritem/bezelcolor.md)

### Configuring button state

- [enabled](nsbuttontouchbaritem/isenabled.md)

### Handling button interaction

- [target](nsbuttontouchbaritem/target.md)
- [action](nsbuttontouchbaritem/action.md)

### Configuring bar customization

- [customizationLabel](nsbuttontouchbaritem/customizationlabel.md): The localized string labeling this item during user customization. The default value is empty string.

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
- [NSStepperTouchBarItem](nssteppertouchbaritem.md): A bar item that provides a stepper control for incrementing or decrementing a value.
- [NSUserInterfaceCompressionOptions](nsuserinterfacecompressionoptions.md): An object that specifies how user interface elements resize themselves when space is constrained.
- [NSPickerTouchBarItem](nspickertouchbaritem.md): A bar item that provides a picker control with multiple options.
- [NSPickerTouchBarItemControlRepresentation](nspickertouchbaritem/controlrepresentation-swift.enum.md): Constants that specify display styles for picker bar items.
- [NSPickerTouchBarItemSelectionMode](nspickertouchbaritem/selectionmode-swift.enum.md): Constants that specify selection modes for picker bar items.
