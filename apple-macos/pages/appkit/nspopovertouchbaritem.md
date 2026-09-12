> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspopovertouchbaritem](https://developer.apple.com/documentation/appkit/nspopovertouchbaritem)

# NSPopoverTouchBarItem (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.12.2+

A bar item that provides a two-state control that can expand into its second state, showing the contents of a bar that it owns.

## Declaration

```swift
class NSPopoverTouchBarItem
```

## Topics

### Configuring the collapsed popover

- [collapsedRepresentation](nspopovertouchbaritem/collapsedrepresentation.md): The view displayed when this item is displayed in its parent bar.
- [collapsedRepresentationImage](nspopovertouchbaritem/collapsedrepresentationimage.md): The image displayed by the button for the default collapsed representation.
- [collapsedRepresentationLabel](nspopovertouchbaritem/collapsedrepresentationlabel.md): The localized string displayed by the button for the default collapsed representation.

### Configuring the expanded popover

- [popoverTouchBar](nspopovertouchbaritem/popovertouchbar.md): The bar displayed when this item is “popped.”
- [showsCloseButton](nspopovertouchbaritem/showsclosebutton.md): A Boolean value that determines whether a close button should be shown on the popover bar.
- [pressAndHoldTouchBar](nspopovertouchbaritem/pressandholdtouchbar.md): The bar that is displayed when a user press-and-holds on the popover item.

### Expanding and collapsing a popover

- [showPopover(\_:)](nspopovertouchbaritem/showpopover%28__%29.md): Replaces the main bar with this item’s popover bar.
- [dismissPopover(\_:)](nspopovertouchbaritem/dismisspopover%28__%29.md): Restores the previously visible main bar.
- [makeStandardActivatePopoverGestureRecognizer()](nspopovertouchbaritem/makestandardactivatepopovergesturerecognizer%28%29.md): Returns a gesture recognizer, configured to invoke the [showPopover(\_:)](nspopovertouchbaritem/showpopover%28__%29.md) method.

### Configuring bar customization

- [customizationLabel](nspopovertouchbaritem/customizationlabel.md): The user-visible string identifying this item during bar customization.

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
- [NSSharingServicePickerTouchBarItem](nssharingservicepickertouchbaritem.md): A bar item that, along with its delegate, provides a list of objects eligible for sharing.
- [NSSliderTouchBarItem](nsslidertouchbaritem.md): A bar item that provides a slider control for choosing a value in a range.
- [NSStepperTouchBarItem](nssteppertouchbaritem.md): A bar item that provides a stepper control for incrementing or decrementing a value.
- [NSUserInterfaceCompressionOptions](nsuserinterfacecompressionoptions.md): An object that specifies how user interface elements resize themselves when space is constrained.
- [NSButtonTouchBarItem](nsbuttontouchbaritem.md): A bar item that provides a button.
- [NSPickerTouchBarItem](nspickertouchbaritem.md): A bar item that provides a picker control with multiple options.
- [NSPickerTouchBarItem.ControlRepresentation](nspickertouchbaritem/controlrepresentation-swift.enum.md): Constants that specify display styles for picker bar items.
- [NSPickerTouchBarItem.SelectionMode](nspickertouchbaritem/selectionmode-swift.enum.md): Constants that specify selection modes for picker bar items.

# NSPopoverTouchBarItem (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** Mac Catalyst 13.1+ · macOS 10.12.2+

A bar item that provides a two-state control that can expand into its second state, showing the contents of a bar that it owns.

## Declaration

```objectivec
@interface NSPopoverTouchBarItem : NSTouchBarItem
```

## Topics

### Configuring the collapsed popover

- [collapsedRepresentation](nspopovertouchbaritem/collapsedrepresentation.md): The view displayed when this item is displayed in its parent bar.
- [collapsedRepresentationImage](nspopovertouchbaritem/collapsedrepresentationimage.md): The image displayed by the button for the default collapsed representation.
- [collapsedRepresentationLabel](nspopovertouchbaritem/collapsedrepresentationlabel.md): The localized string displayed by the button for the default collapsed representation.

### Configuring the expanded popover

- [popoverTouchBar](nspopovertouchbaritem/popovertouchbar.md): The bar displayed when this item is “popped.”
- [showsCloseButton](nspopovertouchbaritem/showsclosebutton.md): A Boolean value that determines whether a close button should be shown on the popover bar.
- [pressAndHoldTouchBar](nspopovertouchbaritem/pressandholdtouchbar.md): The bar that is displayed when a user press-and-holds on the popover item.

### Expanding and collapsing a popover

- [showPopover:](nspopovertouchbaritem/showpopover%28__%29.md): Replaces the main bar with this item’s popover bar.
- [dismissPopover:](nspopovertouchbaritem/dismisspopover%28__%29.md): Restores the previously visible main bar.
- [makeStandardActivatePopoverGestureRecognizer](nspopovertouchbaritem/makestandardactivatepopovergesturerecognizer%28%29.md): Returns a gesture recognizer, configured to invoke the [showPopover:](nspopovertouchbaritem/showpopover%28__%29.md) method.

### Configuring bar customization

- [customizationLabel](nspopovertouchbaritem/customizationlabel.md): The user-visible string identifying this item during bar customization.

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
- [NSSharingServicePickerTouchBarItem](nssharingservicepickertouchbaritem.md): A bar item that, along with its delegate, provides a list of objects eligible for sharing.
- [NSSliderTouchBarItem](nsslidertouchbaritem.md): A bar item that provides a slider control for choosing a value in a range.
- [NSStepperTouchBarItem](nssteppertouchbaritem.md): A bar item that provides a stepper control for incrementing or decrementing a value.
- [NSUserInterfaceCompressionOptions](nsuserinterfacecompressionoptions.md): An object that specifies how user interface elements resize themselves when space is constrained.
- [NSButtonTouchBarItem](nsbuttontouchbaritem.md): A bar item that provides a button.
- [NSPickerTouchBarItem](nspickertouchbaritem.md): A bar item that provides a picker control with multiple options.
- [NSPickerTouchBarItemControlRepresentation](nspickertouchbaritem/controlrepresentation-swift.enum.md): Constants that specify display styles for picker bar items.
- [NSPickerTouchBarItemSelectionMode](nspickertouchbaritem/selectionmode-swift.enum.md): Constants that specify selection modes for picker bar items.
