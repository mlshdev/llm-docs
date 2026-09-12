> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsgrouptouchbaritem](https://developer.apple.com/documentation/appkit/nsgrouptouchbaritem)

# NSGroupTouchBarItem (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.12.2+

A bar item that provides a bar to contain other items.

## Declaration

```swift
class NSGroupTouchBarItem
```

## Topics

### Creating a group

- [init(identifier:items:)](nsgrouptouchbaritem/init%28identifier_items_%29.md): Initializes and returns a group item whose bar is constructed from the supplied items.
- [init(identifier:items:allowedCompressionOptions:)](nsgrouptouchbaritem/init%28identifier_items_allowedcompressionoptions_%29.md): Initializes and returns a group item whose bar is constructed from the supplied items, and with the specified compression options.
- [init(alertStyleWithIdentifier:)](nsgrouptouchbaritem/init%28alertstylewithidentifier_%29.md): Initializes and returns a group item configured to match system alerts.

### Configuring groups

- [groupTouchBar](nsgrouptouchbaritem/grouptouchbar.md): A bar that holds this group’s items.
- [groupUserInterfaceLayoutDirection](nsgrouptouchbaritem/groupuserinterfacelayoutdirection.md): The user interface direction that controls the layout order of the items.

### Configuring item width

- [prefersEqualWidths](nsgrouptouchbaritem/prefersequalwidths.md): A Boolean value that specifies that items should have equal widths when possible.
- [preferredItemWidth](nsgrouptouchbaritem/preferreditemwidth.md): The preferred width for items in the group.

### Configuring item compression

- [effectiveCompressionOptions](nsgrouptouchbaritem/effectivecompressionoptions.md): The compression options that are currently active on the group.
- [prioritizedCompressionOptions](nsgrouptouchbaritem/prioritizedcompressionoptions.md): The allowed compression options, in the order they should be applied.

### Configuring bar customization

- [customizationLabel](nsgrouptouchbaritem/customizationlabel.md): The user-visible string identifying this item during bar customization.

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
- [NSPopoverTouchBarItem](nspopovertouchbaritem.md): A bar item that provides a two-state control that can expand into its second state, showing the contents of a bar that it owns.
- [NSSharingServicePickerTouchBarItem](nssharingservicepickertouchbaritem.md): A bar item that, along with its delegate, provides a list of objects eligible for sharing.
- [NSSliderTouchBarItem](nsslidertouchbaritem.md): A bar item that provides a slider control for choosing a value in a range.
- [NSStepperTouchBarItem](nssteppertouchbaritem.md): A bar item that provides a stepper control for incrementing or decrementing a value.
- [NSUserInterfaceCompressionOptions](nsuserinterfacecompressionoptions.md): An object that specifies how user interface elements resize themselves when space is constrained.
- [NSButtonTouchBarItem](nsbuttontouchbaritem.md): A bar item that provides a button.
- [NSPickerTouchBarItem](nspickertouchbaritem.md): A bar item that provides a picker control with multiple options.
- [NSPickerTouchBarItem.ControlRepresentation](nspickertouchbaritem/controlrepresentation-swift.enum.md): Constants that specify display styles for picker bar items.
- [NSPickerTouchBarItem.SelectionMode](nspickertouchbaritem/selectionmode-swift.enum.md): Constants that specify selection modes for picker bar items.

# NSGroupTouchBarItem (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** Mac Catalyst 13.1+ · macOS 10.12.2+

A bar item that provides a bar to contain other items.

## Declaration

```objectivec
@interface NSGroupTouchBarItem : NSTouchBarItem
```

## Topics

### Creating a group

- [groupItemWithIdentifier:items:](nsgrouptouchbaritem/init%28identifier_items_%29.md): Initializes and returns a group item whose bar is constructed from the supplied items.
- [groupItemWithIdentifier:items:allowedCompressionOptions:](nsgrouptouchbaritem/init%28identifier_items_allowedcompressionoptions_%29.md): Initializes and returns a group item whose bar is constructed from the supplied items, and with the specified compression options.
- [alertStyleGroupItemWithIdentifier:](nsgrouptouchbaritem/init%28alertstylewithidentifier_%29.md): Initializes and returns a group item configured to match system alerts.

### Configuring groups

- [groupTouchBar](nsgrouptouchbaritem/grouptouchbar.md): A bar that holds this group’s items.
- [groupUserInterfaceLayoutDirection](nsgrouptouchbaritem/groupuserinterfacelayoutdirection.md): The user interface direction that controls the layout order of the items.

### Configuring item width

- [prefersEqualWidths](nsgrouptouchbaritem/prefersequalwidths.md): A Boolean value that specifies that items should have equal widths when possible.
- [preferredItemWidth](nsgrouptouchbaritem/preferreditemwidth.md): The preferred width for items in the group.

### Configuring item compression

- [effectiveCompressionOptions](nsgrouptouchbaritem/effectivecompressionoptions.md): The compression options that are currently active on the group.
- [prioritizedCompressionOptions](nsgrouptouchbaritem/prioritizedcompressionoptions.md): The allowed compression options, in the order they should be applied.

### Configuring bar customization

- [customizationLabel](nsgrouptouchbaritem/customizationlabel.md): The user-visible string identifying this item during bar customization.

## Relationships

### Inherits From

- [NSTouchBarItem](nstouchbaritem.md)

## See Also

### Touch Bar items

- [NSTouchBarItem](nstouchbaritem.md): A UI control shown in the Touch Bar on supported models of MacBook Pro.
- [NSCandidateListTouchBarItem](nscandidatelisttouchbaritem.md): A bar item that, along with its delegate, provides a list of textual suggestions for the current text view.
- [NSColorPickerTouchBarItem](nscolorpickertouchbaritem.md): A bar item that provides a system-defined color picker.
- [NSCustomTouchBarItem](nscustomtouchbaritem.md): A bar item that contains a responder of your choice, such as a view, a button, or a scrubber.
- [NSPopoverTouchBarItem](nspopovertouchbaritem.md): A bar item that provides a two-state control that can expand into its second state, showing the contents of a bar that it owns.
- [NSSharingServicePickerTouchBarItem](nssharingservicepickertouchbaritem.md): A bar item that, along with its delegate, provides a list of objects eligible for sharing.
- [NSSliderTouchBarItem](nsslidertouchbaritem.md): A bar item that provides a slider control for choosing a value in a range.
- [NSStepperTouchBarItem](nssteppertouchbaritem.md): A bar item that provides a stepper control for incrementing or decrementing a value.
- [NSUserInterfaceCompressionOptions](nsuserinterfacecompressionoptions.md): An object that specifies how user interface elements resize themselves when space is constrained.
- [NSButtonTouchBarItem](nsbuttontouchbaritem.md): A bar item that provides a button.
- [NSPickerTouchBarItem](nspickertouchbaritem.md): A bar item that provides a picker control with multiple options.
- [NSPickerTouchBarItemControlRepresentation](nspickertouchbaritem/controlrepresentation-swift.enum.md): Constants that specify display styles for picker bar items.
- [NSPickerTouchBarItemSelectionMode](nspickertouchbaritem/selectionmode-swift.enum.md): Constants that specify selection modes for picker bar items.
