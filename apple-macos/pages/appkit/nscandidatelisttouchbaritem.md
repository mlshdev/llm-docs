> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscandidatelisttouchbaritem](https://developer.apple.com/documentation/appkit/nscandidatelisttouchbaritem)

# NSCandidateListTouchBarItem (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.12.2+

A bar item that, along with its delegate, provides a list of textual suggestions for the current text view.

## Declaration

```swift
class NSCandidateListTouchBarItem<CandidateType> where CandidateType : AnyObject
```

## Topics

### Providing a client and a delegate

- [client](nscandidatelisttouchbaritem/client.md): The client object for the candidate list item.
- [delegate](nscandidatelisttouchbaritem/delegate.md): The delegate of the candidate list item.
- [NSCandidateListTouchBarItemDelegate](nscandidatelisttouchbaritemdelegate.md): A set of methods that a candidate list item delegate uses to enable selection state and list visibility.

### Populating the candidate list

- [setCandidates(\_:forSelectedRange:in:)](nscandidatelisttouchbaritem/setcandidates%28__forselectedrange_in_%29.md): Sets an array of candidate objects to be displayed in the candidate list bar item.
- [candidates](nscandidatelisttouchbaritem/candidates.md): The array of candidate objects previously set by [setCandidates(\_:forSelectedRange:in:)](nscandidatelisttouchbaritem/setcandidates%28__forselectedrange_in_%29.md).
- [attributedStringForCandidate](nscandidatelisttouchbaritem/attributedstringforcandidate.md): A block that converts a candidate object into an attributed string for display in the candidate list item.
- [allowsTextInputContextCandidates](nscandidatelisttouchbaritem/allowstextinputcontextcandidates.md): A Boolean value that specifies whether a candidate list item displays candidates from text input providers.

### Handling collapsible behavior

- [allowsCollapsing](nscandidatelisttouchbaritem/allowscollapsing.md): A Boolean value that specifies whether the item can be collapsed.
- [isCollapsed](nscandidatelisttouchbaritem/iscollapsed.md): A Boolean value that controls the visibility of the candidate list.

### Managing candidate list visibility

- [isCandidateListVisible](nscandidatelisttouchbaritem/iscandidatelistvisible.md): A Boolean value that represents the visibility of this item’s candidate list.
- [update(withInsertionPointVisibility:)](nscandidatelisttouchbaritem/update%28withinsertionpointvisibility_%29.md): Updates the candidate list visibility configuration based on the client’s insertion point state.

### Configuring bar customization

- [customizationLabel](nscandidatelisttouchbaritem/customizationlabel.md): The user-visible string identifying this item during bar customization.

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
- [NSColorPickerTouchBarItem](nscolorpickertouchbaritem.md): A bar item that provides a system-defined color picker.
- [NSCustomTouchBarItem](nscustomtouchbaritem.md): A bar item that contains a responder of your choice, such as a view, a button, or a scrubber.
- [NSGroupTouchBarItem](nsgrouptouchbaritem.md): A bar item that provides a bar to contain other items.
- [NSPopoverTouchBarItem](nspopovertouchbaritem.md): A bar item that provides a two-state control that can expand into its second state, showing the contents of a bar that it owns.
- [NSSharingServicePickerTouchBarItem](nssharingservicepickertouchbaritem.md): A bar item that, along with its delegate, provides a list of objects eligible for sharing.
- [NSSliderTouchBarItem](nsslidertouchbaritem.md): A bar item that provides a slider control for choosing a value in a range.
- [NSStepperTouchBarItem](nssteppertouchbaritem.md): A bar item that provides a stepper control for incrementing or decrementing a value.
- [NSUserInterfaceCompressionOptions](nsuserinterfacecompressionoptions.md): An object that specifies how user interface elements resize themselves when space is constrained.
- [NSButtonTouchBarItem](nsbuttontouchbaritem.md): A bar item that provides a button.
- [NSPickerTouchBarItem](nspickertouchbaritem.md): A bar item that provides a picker control with multiple options.
- [NSPickerTouchBarItem.ControlRepresentation](nspickertouchbaritem/controlrepresentation-swift.enum.md): Constants that specify display styles for picker bar items.
- [NSPickerTouchBarItem.SelectionMode](nspickertouchbaritem/selectionmode-swift.enum.md): Constants that specify selection modes for picker bar items.

# NSCandidateListTouchBarItem (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.12.2+

A bar item that, along with its delegate, provides a list of textual suggestions for the current text view.

## Declaration

```objectivec
@interface NSCandidateListTouchBarItem : NSTouchBarItem
```

## Topics

### Providing a client and a delegate

- [client](nscandidatelisttouchbaritem/client.md): The client object for the candidate list item.
- [delegate](nscandidatelisttouchbaritem/delegate.md): The delegate of the candidate list item.
- [NSCandidateListTouchBarItemDelegate](nscandidatelisttouchbaritemdelegate.md): A set of methods that a candidate list item delegate uses to enable selection state and list visibility.

### Populating the candidate list

- [setCandidates:forSelectedRange:inString:](nscandidatelisttouchbaritem/setcandidates%28__forselectedrange_in_%29.md): Sets an array of candidate objects to be displayed in the candidate list bar item.
- [candidates](nscandidatelisttouchbaritem/candidates.md): The array of candidate objects previously set by [setCandidates:forSelectedRange:inString:](nscandidatelisttouchbaritem/setcandidates%28__forselectedrange_in_%29.md).
- [attributedStringForCandidate](nscandidatelisttouchbaritem/attributedstringforcandidate.md): A block that converts a candidate object into an attributed string for display in the candidate list item.
- [allowsTextInputContextCandidates](nscandidatelisttouchbaritem/allowstextinputcontextcandidates.md): A Boolean value that specifies whether a candidate list item displays candidates from text input providers.

### Handling collapsible behavior

- [allowsCollapsing](nscandidatelisttouchbaritem/allowscollapsing.md): A Boolean value that specifies whether the item can be collapsed.
- [collapsed](nscandidatelisttouchbaritem/iscollapsed.md): A Boolean value that controls the visibility of the candidate list.

### Managing candidate list visibility

- [candidateListVisible](nscandidatelisttouchbaritem/iscandidatelistvisible.md): A Boolean value that represents the visibility of this item’s candidate list.
- [updateWithInsertionPointVisibility:](nscandidatelisttouchbaritem/update%28withinsertionpointvisibility_%29.md): Updates the candidate list visibility configuration based on the client’s insertion point state.

### Configuring bar customization

- [customizationLabel](nscandidatelisttouchbaritem/customizationlabel.md): The user-visible string identifying this item during bar customization.

## Relationships

### Inherits From

- [NSTouchBarItem](nstouchbaritem.md)

## See Also

### Touch Bar items

- [NSTouchBarItem](nstouchbaritem.md): A UI control shown in the Touch Bar on supported models of MacBook Pro.
- [NSColorPickerTouchBarItem](nscolorpickertouchbaritem.md): A bar item that provides a system-defined color picker.
- [NSCustomTouchBarItem](nscustomtouchbaritem.md): A bar item that contains a responder of your choice, such as a view, a button, or a scrubber.
- [NSGroupTouchBarItem](nsgrouptouchbaritem.md): A bar item that provides a bar to contain other items.
- [NSPopoverTouchBarItem](nspopovertouchbaritem.md): A bar item that provides a two-state control that can expand into its second state, showing the contents of a bar that it owns.
- [NSSharingServicePickerTouchBarItem](nssharingservicepickertouchbaritem.md): A bar item that, along with its delegate, provides a list of objects eligible for sharing.
- [NSSliderTouchBarItem](nsslidertouchbaritem.md): A bar item that provides a slider control for choosing a value in a range.
- [NSStepperTouchBarItem](nssteppertouchbaritem.md): A bar item that provides a stepper control for incrementing or decrementing a value.
- [NSUserInterfaceCompressionOptions](nsuserinterfacecompressionoptions.md): An object that specifies how user interface elements resize themselves when space is constrained.
- [NSButtonTouchBarItem](nsbuttontouchbaritem.md): A bar item that provides a button.
- [NSPickerTouchBarItem](nspickertouchbaritem.md): A bar item that provides a picker control with multiple options.
- [NSPickerTouchBarItemControlRepresentation](nspickertouchbaritem/controlrepresentation-swift.enum.md): Constants that specify display styles for picker bar items.
- [NSPickerTouchBarItemSelectionMode](nspickertouchbaritem/selectionmode-swift.enum.md): Constants that specify selection modes for picker bar items.
