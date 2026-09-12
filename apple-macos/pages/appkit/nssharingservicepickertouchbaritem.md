> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssharingservicepickertouchbaritem](https://developer.apple.com/documentation/appkit/nssharingservicepickertouchbaritem)

# NSSharingServicePickerTouchBarItem (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** iOS 10.13+ · iPadOS 10.13+ · Mac Catalyst 13.1+ · macOS 10.12.2+

A bar item that, along with its delegate, provides a list of objects eligible for sharing.

## Declaration

```swift
class NSSharingServicePickerTouchBarItem
```

## Topics

### Setting the delegate

- [delegate](nssharingservicepickertouchbaritem/delegate.md): The object that acts as the delegate of the sharing service picker bar item.
- [NSSharingServicePickerTouchBarItemDelegate](nssharingservicepickertouchbaritemdelegate.md): A protocol that a sharing service picker item delegate uses to provide a list of items eligible for sharing.

### Configuring the appearance

- [buttonImage](nssharingservicepickertouchbaritem/buttonimage.md): The image displayed in the sharing service picker item button.
- [buttonTitle](nssharingservicepickertouchbaritem/buttontitle.md): The text displayed in the sharing service picker item button.

### Enabling the item

- [isEnabled](nssharingservicepickertouchbaritem/isenabled.md): A Boolean value that specifies whether the sharing service picker item is enabled.

### Supporting sharing

- [activityItemsConfiguration](nssharingservicepickertouchbaritem/activityitemsconfiguration.md)

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
- [NSSliderTouchBarItem](nsslidertouchbaritem.md): A bar item that provides a slider control for choosing a value in a range.
- [NSStepperTouchBarItem](nssteppertouchbaritem.md): A bar item that provides a stepper control for incrementing or decrementing a value.
- [NSUserInterfaceCompressionOptions](nsuserinterfacecompressionoptions.md): An object that specifies how user interface elements resize themselves when space is constrained.
- [NSButtonTouchBarItem](nsbuttontouchbaritem.md): A bar item that provides a button.
- [NSPickerTouchBarItem](nspickertouchbaritem.md): A bar item that provides a picker control with multiple options.
- [NSPickerTouchBarItem.ControlRepresentation](nspickertouchbaritem/controlrepresentation-swift.enum.md): Constants that specify display styles for picker bar items.
- [NSPickerTouchBarItem.SelectionMode](nspickertouchbaritem/selectionmode-swift.enum.md): Constants that specify selection modes for picker bar items.

# NSSharingServicePickerTouchBarItem (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** Mac Catalyst 13.1+ · macOS 10.12.2+

A bar item that, along with its delegate, provides a list of objects eligible for sharing.

## Declaration

```objectivec
@interface NSSharingServicePickerTouchBarItem : NSTouchBarItem
```

## Topics

### Setting the delegate

- [delegate](nssharingservicepickertouchbaritem/delegate.md): The object that acts as the delegate of the sharing service picker bar item.
- [NSSharingServicePickerTouchBarItemDelegate](nssharingservicepickertouchbaritemdelegate.md): A protocol that a sharing service picker item delegate uses to provide a list of items eligible for sharing.

### Configuring the appearance

- [buttonImage](nssharingservicepickertouchbaritem/buttonimage.md): The image displayed in the sharing service picker item button.
- [buttonTitle](nssharingservicepickertouchbaritem/buttontitle.md): The text displayed in the sharing service picker item button.

### Enabling the item

- [enabled](nssharingservicepickertouchbaritem/isenabled.md): A Boolean value that specifies whether the sharing service picker item is enabled.

### Supporting sharing

- [activityItemsConfiguration](nssharingservicepickertouchbaritem/activityitemsconfiguration.md)

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
- [NSSliderTouchBarItem](nsslidertouchbaritem.md): A bar item that provides a slider control for choosing a value in a range.
- [NSStepperTouchBarItem](nssteppertouchbaritem.md): A bar item that provides a stepper control for incrementing or decrementing a value.
- [NSUserInterfaceCompressionOptions](nsuserinterfacecompressionoptions.md): An object that specifies how user interface elements resize themselves when space is constrained.
- [NSButtonTouchBarItem](nsbuttontouchbaritem.md): A bar item that provides a button.
- [NSPickerTouchBarItem](nspickertouchbaritem.md): A bar item that provides a picker control with multiple options.
- [NSPickerTouchBarItemControlRepresentation](nspickertouchbaritem/controlrepresentation-swift.enum.md): Constants that specify display styles for picker bar items.
- [NSPickerTouchBarItemSelectionMode](nspickertouchbaritem/selectionmode-swift.enum.md): Constants that specify selection modes for picker bar items.
