> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspickertouchbaritem](https://developer.apple.com/documentation/appkit/nspickertouchbaritem)

# NSPickerTouchBarItem (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+

A bar item that provides a picker control with multiple options.

## Declaration

```swift
class NSPickerTouchBarItem
```

## Topics

### Creating a picker item

- [init(identifier:images:selectionMode:target:action:)](nspickertouchbaritem/init%28identifier_images_selectionmode_target_action_%29.md)
- [init(identifier:labels:selectionMode:target:action:)](nspickertouchbaritem/init%28identifier_labels_selectionmode_target_action_%29.md)

### Configuring picker appearance

- [numberOfOptions](nspickertouchbaritem/numberofoptions.md)
- [setLabel(\_:at:)](nspickertouchbaritem/setlabel%28__at_%29.md)
- [label(at:)](nspickertouchbaritem/label%28at_%29.md)
- [setImage(\_:at:)](nspickertouchbaritem/setimage%28__at_%29.md)
- [image(at:)](nspickertouchbaritem/image%28at_%29.md)
- [collapsedRepresentationImage](nspickertouchbaritem/collapsedrepresentationimage.md)
- [collapsedRepresentationLabel](nspickertouchbaritem/collapsedrepresentationlabel.md)
- [controlRepresentation](nspickertouchbaritem/controlrepresentation-swift.property.md)
- [NSPickerTouchBarItem.ControlRepresentation](nspickertouchbaritem/controlrepresentation-swift.enum.md): Constants that specify display styles for picker bar items.

### Configuring picker state

- [isEnabled](nspickertouchbaritem/isenabled.md)
- [isEnabled(at:)](nspickertouchbaritem/isenabled%28at_%29.md)
- [setEnabled(\_:at:)](nspickertouchbaritem/setenabled%28__at_%29.md)

### Handling selection

- [selectedIndex](nspickertouchbaritem/selectedindex.md)
- [selectionColor](nspickertouchbaritem/selectioncolor.md)
- [selectionMode](nspickertouchbaritem/selectionmode-swift.property.md)
- [NSPickerTouchBarItem.SelectionMode](nspickertouchbaritem/selectionmode-swift.enum.md): Constants that specify selection modes for picker bar items.

### Handling picker interaction

- [action](nspickertouchbaritem/action.md)
- [target](nspickertouchbaritem/target.md)

### Configuring bar customization

- [customizationLabel](nspickertouchbaritem/customizationlabel.md): The localized string labeling this item during user customization.

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
- [NSButtonTouchBarItem](nsbuttontouchbaritem.md): A bar item that provides a button.
- [NSPickerTouchBarItem.ControlRepresentation](nspickertouchbaritem/controlrepresentation-swift.enum.md): Constants that specify display styles for picker bar items.
- [NSPickerTouchBarItem.SelectionMode](nspickertouchbaritem/selectionmode-swift.enum.md): Constants that specify selection modes for picker bar items.

# NSPickerTouchBarItem (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** Mac Catalyst 13.1+ · macOS 10.15+

A bar item that provides a picker control with multiple options.

## Declaration

```objectivec
@interface NSPickerTouchBarItem : NSTouchBarItem
```

## Topics

### Creating a picker item

- [pickerTouchBarItemWithIdentifier:images:selectionMode:target:action:](nspickertouchbaritem/init%28identifier_images_selectionmode_target_action_%29.md)
- [pickerTouchBarItemWithIdentifier:labels:selectionMode:target:action:](nspickertouchbaritem/init%28identifier_labels_selectionmode_target_action_%29.md)

### Configuring picker appearance

- [numberOfOptions](nspickertouchbaritem/numberofoptions.md)
- [setLabel:atIndex:](nspickertouchbaritem/setlabel%28__at_%29.md)
- [labelAtIndex:](nspickertouchbaritem/label%28at_%29.md)
- [setImage:atIndex:](nspickertouchbaritem/setimage%28__at_%29.md)
- [imageAtIndex:](nspickertouchbaritem/image%28at_%29.md)
- [collapsedRepresentationImage](nspickertouchbaritem/collapsedrepresentationimage.md)
- [collapsedRepresentationLabel](nspickertouchbaritem/collapsedrepresentationlabel.md)
- [controlRepresentation](nspickertouchbaritem/controlrepresentation-swift.property.md)
- [NSPickerTouchBarItemControlRepresentation](nspickertouchbaritem/controlrepresentation-swift.enum.md): Constants that specify display styles for picker bar items.

### Configuring picker state

- [enabled](nspickertouchbaritem/isenabled.md)
- [isEnabledAtIndex:](nspickertouchbaritem/isenabled%28at_%29.md)
- [setEnabled:atIndex:](nspickertouchbaritem/setenabled%28__at_%29.md)

### Handling selection

- [selectedIndex](nspickertouchbaritem/selectedindex.md)
- [selectionColor](nspickertouchbaritem/selectioncolor.md)
- [selectionMode](nspickertouchbaritem/selectionmode-swift.property.md)
- [NSPickerTouchBarItemSelectionMode](nspickertouchbaritem/selectionmode-swift.enum.md): Constants that specify selection modes for picker bar items.

### Handling picker interaction

- [action](nspickertouchbaritem/action.md)
- [target](nspickertouchbaritem/target.md)

### Configuring bar customization

- [customizationLabel](nspickertouchbaritem/customizationlabel.md): The localized string labeling this item during user customization.

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
- [NSButtonTouchBarItem](nsbuttontouchbaritem.md): A bar item that provides a button.
- [NSPickerTouchBarItemControlRepresentation](nspickertouchbaritem/controlrepresentation-swift.enum.md): Constants that specify display styles for picker bar items.
- [NSPickerTouchBarItemSelectionMode](nspickertouchbaritem/selectionmode-swift.enum.md): Constants that specify selection modes for picker bar items.
