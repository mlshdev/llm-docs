> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscontrol](https://developer.apple.com/documentation/appkit/nscontrol)

# NSControl (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

A specialized view, such as a button or text field, that notifies your app of relevant events using the target-action design pattern.

## Declaration

```swift
class NSControl
```

<a id="overview"></a>

## Overview

The [NSControl](nscontrol.md) class is abstract and must be subclassed to be used. Although you can subclass it yourself, more often you use one of the subclasses already defined by AppKit. A control draws content on the screen, automatically handles user interactions with that content, and calls the action method of its target object for any significant user interactions.

<a id="About-delegate-methods"></a>

### About delegate methods

The `NSControl` class provides several delegate methods for its subclasses that allow text editing, such as `NSTextField` and `NSMatrix`. These include: [controlTextDidBeginEditing:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/controltextdidbeginediting:), [controlTextDidChange:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/controltextdidchange:), and [controlTextDidEndEditing:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/controltextdidendediting:).

Note that although `NSControl` defines delegate methods, it doesn’t itself have a delegate. Any subclass that uses these methods must have a delegate and the methods to get and set it. In addition, a formal delegate protocol [NSControlTextEditingDelegate](nscontroltexteditingdelegate.md) also defines delegate methods used by control delegates.

<a id="Responding-to-mouse-events"></a>

### Responding to mouse events

When the mouse button is pressed while the cursor is within the bounds of the receiver, the system calls [mouseDown(with:)](nsresponder/mousedown%28with_%29.md). This method highlights the receiver’s cell and sends it a [trackMouse(with:in:of:untilMouseUp:)](nscell/trackmouse%28with_in_of_untilmouseup_%29.md) message. Whenever the cell finishes tracking the mouse (for example, because the cursor has left the cell’s bounds), the cell is unhighlighted. If the mouse button is still down and the cursor reenters the bounds, the cell is again highlighted and a new [trackMouse(with:in:of:untilMouseUp:)](nscell/trackmouse%28with_in_of_untilmouseup_%29.md) message is sent. This behavior repeats until the mouse button goes up. If it goes up with the cursor in the control, the state of the control is changed, and the action message is sent to the target. If the mouse button goes up when the cursor is outside the control, no action message is sent.

## Topics

### Creating a Control

- [init(frame:)](nscontrol/init%28frame_%29.md): Initializes a control with the specified frame rectangle.
- [init(coder:)](nscontrol/init%28coder_%29.md): Initializes a control with data in an unarchiver.

### Enabling and Disabling the Control

- [isEnabled](nscontrol/isenabled.md): A Boolean value that indicates whether the receiver reacts to mouse events.

### Accessing the Control’s Value

- [doubleValue](nscontrol/doublevalue.md): The value of the receiver’s cell as a double-precision floating-point number.
- [floatValue](nscontrol/floatvalue.md): The value of the receiver’s cell as a single-precision floating-point number.
- [intValue](nscontrol/intvalue.md): The value of the receiver’s cell as an integer.
- [integerValue](nscontrol/integervalue.md): The value of the receiver’s cell as an integer value.
- [objectValue](nscontrol/objectvalue.md): The value of the receiver’s cell as an Objective-C object.
- [stringValue](nscontrol/stringvalue.md): The value of the receiver’s cell as an `NSString` object.
- [attributedStringValue](nscontrol/attributedstringvalue.md): The value of the receiver’s cell as an attributed string.

### Interacting with Other Controls

- [takeDoubleValueFrom(\_:)](nscontrol/takedoublevaluefrom%28__%29.md): Sets the value of the receiver’s cell to a double-precision floating-point value obtained from the specified object.
- [takeFloatValueFrom(\_:)](nscontrol/takefloatvaluefrom%28__%29.md): Sets the value of the receiver’s cell to a single-precision floating-point value obtained from the specified object.
- [takeIntValueFrom(\_:)](nscontrol/takeintvaluefrom%28__%29.md): Sets the value of the receiver’s cell to an integer value obtained from the specified object.
- [takeIntegerValueFrom(\_:)](nscontrol/takeintegervaluefrom%28__%29.md): Sets the value of the receiver’s cell to an `NSInteger` value obtained from the specified object.
- [takeObjectValueFrom(\_:)](nscontrol/takeobjectvaluefrom%28__%29.md): Sets the value of the receiver’s cell to the object value obtained from the specified object.
- [takeStringValueFrom(\_:)](nscontrol/takestringvaluefrom%28__%29.md): Sets the value of the receiver’s cell to the string value obtained from the specified object.

### Formatting Text

- [alignment](nscontrol/alignment.md): The alignment mode of the text in the receiver’s cell.
- [font](nscontrol/font.md): The font used to draw text in the receiver’s cell.
- [lineBreakMode](nscontrol/linebreakmode.md): The line break mode to use for text in the control’s cell.
- [usesSingleLineMode](nscontrol/usessinglelinemode.md): A Boolean value that indicates whether the text in the control’s cell uses single line mode.
- [formatter](nscontrol/formatter.md): The receiver’s formatter.
- [baseWritingDirection](nscontrol/basewritingdirection.md): The initial writing direction used to determine the actual writing direction for text.

### Managing Expansion Tool Tips

- [draw(withExpansionFrame:in:)](nscontrol/draw%28withexpansionframe_in_%29.md): Performs custom expansion tool tip drawing.
- [allowsExpansionToolTips](nscontrol/allowsexpansiontooltips.md): A Boolean value that indicates whether expansion tool tips are shown when the control is hovered over.
- [expansionFrame(withFrame:)](nscontrol/expansionframe%28withframe_%29.md): The frame in which a tool tip can be displayed, if needed.

### Managing the Field Editor

- [abortEditing()](nscontrol/abortediting%28%29.md): Terminates the current editing operation and discards any edited text.
- [currentEditor()](nscontrol/currenteditor%28%29.md): Returns the current field editor for the control.
- [validateEditing()](nscontrol/validateediting%28%29.md): Validates changes to any user-typed text.
- [edit(withFrame:editor:delegate:event:)](nscontrol/edit%28withframe_editor_delegate_event_%29.md): Begins editing of the receiver’s text using the specified field editor.
- [endEditing(\_:)](nscontrol/endediting%28__%29.md): Ends the editing of text in the receiver using the specified field editor.
- [select(withFrame:editor:delegate:start:length:)](nscontrol/select%28withframe_editor_delegate_start_length_%29.md): Selects the specified text range in the receiver’s field editor.

### Control-Editing Notifications

An [NSControl](nscontrol.md) object posts the following notifications to interested observers and its delegate. Note that although the [NSControl](nscontrol.md) class defines delegate methods, it doesn’t itself have a delegate. Any subclass that uses these methods must have a delegate and the methods to get and set it.

- [textDidBeginEditingNotification](nscontrol/textdidbegineditingnotification.md): Sent when a control with editable cells begins an edit session.
- [textDidChangeNotification](nscontrol/textdidchangenotification.md): Sent when the text in the receiving control changes.
- [textDidEndEditingNotification](nscontrol/textdidendeditingnotification.md): Sent when a control with editable cells ends an editing session.

### Resizing the Control

- [controlSize](nscontrol/controlsize-swift.property.md): The size of the control.
- [NSControl.ControlSize](nscontrol/controlsize-swift.enum.md): A constant for specifying a cell’s size.
- [sizeThatFits(\_:)](nscontrol/sizethatfits%28__%29.md): Asks the control to calculate and return the size that best fits the specified size.
- [sizeToFit()](nscontrol/sizetofit%28%29.md): Resizes the receiver’s frame so that it’s the minimum size needed to contain its cell.

### Displaying a Cell

- [isHighlighted](nscontrol/ishighlighted.md): A Boolean value that indicates whether the cell is highlighted.
- [NSControl.ImagePosition](nscontrol/imageposition.md): A constant for specifying the position of a button’s image relative to its title.
- [NSControl.StateValue](nscontrol/statevalue.md): A constant that indicates whether a control is on, off, or in a mixed state.

### Implementing the Target-Action Mechanism

- [action](nscontrol/action.md): The default action-message selector associated with the control.
- [target](nscontrol/target.md): The target object that receives action messages from the cell.
- [isContinuous](nscontrol/iscontinuous.md): A Boolean value indicating whether the receiver’s cell sends its action message continuously to its target during mouse tracking.
- [sendAction(\_:to:)](nscontrol/sendaction%28__to_%29.md): Causes the specified action to be sent to the target.
- [sendAction(on:)](nscontrol/sendaction%28on_%29.md): Sets the conditions on which the receiver sends action messages to its target.

### Handling Control Events

- [NSControl.Events](nscontrol/events.md): A set of events that a control can report to its target.
- [addTarget(\_:action:for:)](nscontrol/addtarget%28__action_for_%29.md): Registers a target-action pair for the specified control events.
- [removeTarget(\_:action:for:)](nscontrol/removetarget%28__action_for_%29.md): Stops the delivery of events to the specified target object.

### Accessing Tags

- [tag](nscontrol/tag.md): The tag identifying the receiver (not the tag of the receiver’s cell).

### Activating from the Keyboard

- [performClick(\_:)](nscontrol/performclick%28__%29.md): Simulates a single mouse click on the receiver.
- [refusesFirstResponder](nscontrol/refusesfirstresponder.md): A Boolean value indicating whether the receiver refuses the first responder role.

### Tracking the Mouse

- [mouseDown(with:)](nsresponder/mousedown%28with_%29.md): Informs the receiver that the user has pressed the left mouse button.
- [ignoresMultiClick](nscontrol/ignoresmulticlick.md): A Boolean value indicating whether the receiver ignores multiple clicks made in rapid succession.

### Supporting Constraint-Based Layout

- [invalidateIntrinsicContentSize(for:)](nscontrol/invalidateintrinsiccontentsize%28for_%29.md): Notifies the control that the intrinsic content size for its cell is no longer valid.

### Deprecated

- [Deprecated Symbols](nscontrol-deprecated-symbols.md): Review unsupported symbols and their replacements.

### Structures

- [NSControl.TextDidBeginEditingMessage](nscontrol/textdidbegineditingmessage.md)
- [NSControl.TextDidChangeMessage](nscontrol/textdidchangemessage.md)
- [NSControl.TextDidEndEditingMessage](nscontrol/textdidendeditingmessage.md)

## Relationships

### Inherits From

- [NSView](nsview.md)

### Inherited By

- [NSBrowser](nsbrowser.md)
- [NSButton](nsbutton.md)
- [NSColorWell](nscolorwell.md)
- [NSComboButton](nscombobutton.md)
- [NSDatePicker](nsdatepicker.md)
- [NSImageView](nsimageview.md)
- [NSLevelIndicator](nslevelindicator.md)
- [NSMatrix](nsmatrix.md)
- [NSPathControl](nspathcontrol.md)
- [NSRuleEditor](nsruleeditor.md)
- [NSScroller](nsscroller.md)
- [NSSegmentedControl](nssegmentedcontrol.md)
- [NSSlider](nsslider.md)
- [NSStepper](nsstepper.md)
- [NSSwitch](nsswitch.md)
- [NSTableView](nstableview.md)
- [NSTextField](nstextfield.md)

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

## See Also

### View fundamentals

- [NSView](nsview.md): The infrastructure for drawing, printing, and handling events in an app.
- [NSCell](nscell.md): A mechanism for displaying text or images in a view object without the overhead of a full [NSView](nsview.md) subclass.
- [NSActionCell](nsactioncell.md): An active area inside a control.

# NSControl (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

A specialized view, such as a button or text field, that notifies your app of relevant events using the target-action design pattern.

## Declaration

```objectivec
@interface NSControl : NSView
```

<a id="overview"></a>

## Overview

The [NSControl](nscontrol.md) class is abstract and must be subclassed to be used. Although you can subclass it yourself, more often you use one of the subclasses already defined by AppKit. A control draws content on the screen, automatically handles user interactions with that content, and calls the action method of its target object for any significant user interactions.

<a id="About-delegate-methods"></a>

### About delegate methods

The `NSControl` class provides several delegate methods for its subclasses that allow text editing, such as `NSTextField` and `NSMatrix`. These include: [controlTextDidBeginEditing:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/controltextdidbeginediting:), [controlTextDidChange:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/controltextdidchange:), and [controlTextDidEndEditing:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/controltextdidendediting:).

Note that although `NSControl` defines delegate methods, it doesn’t itself have a delegate. Any subclass that uses these methods must have a delegate and the methods to get and set it. In addition, a formal delegate protocol [NSControlTextEditingDelegate](nscontroltexteditingdelegate.md) also defines delegate methods used by control delegates.

<a id="Responding-to-mouse-events"></a>

### Responding to mouse events

When the mouse button is pressed while the cursor is within the bounds of the receiver, the system calls [mouseDown:](nsresponder/mousedown%28with_%29.md). This method highlights the receiver’s cell and sends it a [trackMouse:inRect:ofView:untilMouseUp:](nscell/trackmouse%28with_in_of_untilmouseup_%29.md) message. Whenever the cell finishes tracking the mouse (for example, because the cursor has left the cell’s bounds), the cell is unhighlighted. If the mouse button is still down and the cursor reenters the bounds, the cell is again highlighted and a new [trackMouse:inRect:ofView:untilMouseUp:](nscell/trackmouse%28with_in_of_untilmouseup_%29.md) message is sent. This behavior repeats until the mouse button goes up. If it goes up with the cursor in the control, the state of the control is changed, and the action message is sent to the target. If the mouse button goes up when the cursor is outside the control, no action message is sent.

## Topics

### Creating a Control

- [initWithFrame:](nscontrol/init%28frame_%29.md): Initializes a control with the specified frame rectangle.
- [initWithCoder:](nscontrol/init%28coder_%29.md): Initializes a control with data in an unarchiver.

### Enabling and Disabling the Control

- [enabled](nscontrol/isenabled.md): A Boolean value that indicates whether the receiver reacts to mouse events.

### Accessing the Control’s Value

- [doubleValue](nscontrol/doublevalue.md): The value of the receiver’s cell as a double-precision floating-point number.
- [floatValue](nscontrol/floatvalue.md): The value of the receiver’s cell as a single-precision floating-point number.
- [intValue](nscontrol/intvalue.md): The value of the receiver’s cell as an integer.
- [integerValue](nscontrol/integervalue.md): The value of the receiver’s cell as an integer value.
- [objectValue](nscontrol/objectvalue.md): The value of the receiver’s cell as an Objective-C object.
- [stringValue](nscontrol/stringvalue.md): The value of the receiver’s cell as an `NSString` object.
- [attributedStringValue](nscontrol/attributedstringvalue.md): The value of the receiver’s cell as an attributed string.

### Interacting with Other Controls

- [takeDoubleValueFrom:](nscontrol/takedoublevaluefrom%28__%29.md): Sets the value of the receiver’s cell to a double-precision floating-point value obtained from the specified object.
- [takeFloatValueFrom:](nscontrol/takefloatvaluefrom%28__%29.md): Sets the value of the receiver’s cell to a single-precision floating-point value obtained from the specified object.
- [takeIntValueFrom:](nscontrol/takeintvaluefrom%28__%29.md): Sets the value of the receiver’s cell to an integer value obtained from the specified object.
- [takeIntegerValueFrom:](nscontrol/takeintegervaluefrom%28__%29.md): Sets the value of the receiver’s cell to an `NSInteger` value obtained from the specified object.
- [takeObjectValueFrom:](nscontrol/takeobjectvaluefrom%28__%29.md): Sets the value of the receiver’s cell to the object value obtained from the specified object.
- [takeStringValueFrom:](nscontrol/takestringvaluefrom%28__%29.md): Sets the value of the receiver’s cell to the string value obtained from the specified object.

### Formatting Text

- [alignment](nscontrol/alignment.md): The alignment mode of the text in the receiver’s cell.
- [font](nscontrol/font.md): The font used to draw text in the receiver’s cell.
- [lineBreakMode](nscontrol/linebreakmode.md): The line break mode to use for text in the control’s cell.
- [usesSingleLineMode](nscontrol/usessinglelinemode.md): A Boolean value that indicates whether the text in the control’s cell uses single line mode.
- [setFloatingPointFormat:left:right:](nscontrol/setfloatingpointformat_left_right_.md): Deprecated. Sets the auto-ranging and floating point number format of the receiver’s cell.
- [formatter](nscontrol/formatter.md): The receiver’s formatter.
- [baseWritingDirection](nscontrol/basewritingdirection.md): The initial writing direction used to determine the actual writing direction for text.

### Managing Expansion Tool Tips

- [drawWithExpansionFrame:inView:](nscontrol/draw%28withexpansionframe_in_%29.md): Performs custom expansion tool tip drawing.
- [allowsExpansionToolTips](nscontrol/allowsexpansiontooltips.md): A Boolean value that indicates whether expansion tool tips are shown when the control is hovered over.
- [expansionFrameWithFrame:](nscontrol/expansionframe%28withframe_%29.md): The frame in which a tool tip can be displayed, if needed.

### Managing the Field Editor

- [abortEditing](nscontrol/abortediting%28%29.md): Terminates the current editing operation and discards any edited text.
- [currentEditor](nscontrol/currenteditor%28%29.md): Returns the current field editor for the control.
- [validateEditing](nscontrol/validateediting%28%29.md): Validates changes to any user-typed text.
- [editWithFrame:editor:delegate:event:](nscontrol/edit%28withframe_editor_delegate_event_%29.md): Begins editing of the receiver’s text using the specified field editor.
- [endEditing:](nscontrol/endediting%28__%29.md): Ends the editing of text in the receiver using the specified field editor.
- [selectWithFrame:editor:delegate:start:length:](nscontrol/select%28withframe_editor_delegate_start_length_%29.md): Selects the specified text range in the receiver’s field editor.

### Control-Editing Notifications

An [NSControl](nscontrol.md) object posts the following notifications to interested observers and its delegate. Note that although the [NSControl](nscontrol.md) class defines delegate methods, it doesn’t itself have a delegate. Any subclass that uses these methods must have a delegate and the methods to get and set it.

- [NSControlTextDidBeginEditingNotification](nscontrol/textdidbegineditingnotification.md): Sent when a control with editable cells begins an edit session.
- [NSControlTextDidChangeNotification](nscontrol/textdidchangenotification.md): Sent when the text in the receiving control changes.
- [NSControlTextDidEndEditingNotification](nscontrol/textdidendeditingnotification.md): Sent when a control with editable cells ends an editing session.

### Resizing the Control

- [controlSize](nscontrol/controlsize-swift.property.md): The size of the control.
- [NSControlSize](nscontrol/controlsize-swift.enum.md): A constant for specifying a cell’s size.
- [sizeThatFits:](nscontrol/sizethatfits%28__%29.md): Asks the control to calculate and return the size that best fits the specified size.
- [sizeToFit](nscontrol/sizetofit%28%29.md): Resizes the receiver’s frame so that it’s the minimum size needed to contain its cell.

### Displaying a Cell

- [highlighted](nscontrol/ishighlighted.md): A Boolean value that indicates whether the cell is highlighted.
- [NSCellImagePosition](nscontrol/imageposition.md): A constant for specifying the position of a button’s image relative to its title.
- [NSControlStateValue](nscontrol/statevalue.md): A constant that indicates whether a control is on, off, or in a mixed state.

### Implementing the Target-Action Mechanism

- [action](nscontrol/action.md): The default action-message selector associated with the control.
- [target](nscontrol/target.md): The target object that receives action messages from the cell.
- [continuous](nscontrol/iscontinuous.md): A Boolean value indicating whether the receiver’s cell sends its action message continuously to its target during mouse tracking.
- [sendAction:to:](nscontrol/sendaction%28__to_%29.md): Causes the specified action to be sent to the target.
- [sendActionOn:](nscontrol/sendaction%28on_%29.md): Sets the conditions on which the receiver sends action messages to its target.

### Handling Control Events

- [NSControlEvents](nscontrol/events.md): A set of events that a control can report to its target.
- [addTarget:action:forControlEvents:](nscontrol/addtarget%28__action_for_%29.md): Registers a target-action pair for the specified control events.
- [removeTarget:action:forControlEvents:](nscontrol/removetarget%28__action_for_%29.md): Stops the delivery of events to the specified target object.

### Accessing Tags

- [tag](nscontrol/tag.md): The tag identifying the receiver (not the tag of the receiver’s cell).

### Activating from the Keyboard

- [performClick:](nscontrol/performclick%28__%29.md): Simulates a single mouse click on the receiver.
- [refusesFirstResponder](nscontrol/refusesfirstresponder.md): A Boolean value indicating whether the receiver refuses the first responder role.

### Tracking the Mouse

- [mouseDown:](nsresponder/mousedown%28with_%29.md): Informs the receiver that the user has pressed the left mouse button.
- [ignoresMultiClick](nscontrol/ignoresmulticlick.md): A Boolean value indicating whether the receiver ignores multiple clicks made in rapid succession.

### Supporting Constraint-Based Layout

- [invalidateIntrinsicContentSizeForCell:](nscontrol/invalidateintrinsiccontentsize%28for_%29.md): Notifies the control that the intrinsic content size for its cell is no longer valid.

### Deprecated

- [Deprecated Symbols](nscontrol-deprecated-symbols.md): Review unsupported symbols and their replacements.

## Relationships

### Inherits From

- [NSView](nsview.md)

### Inherited By

- [NSBrowser](nsbrowser.md)
- [NSButton](nsbutton.md)
- [NSColorWell](nscolorwell.md)
- [NSComboButton](nscombobutton.md)
- [NSDatePicker](nsdatepicker.md)
- [NSImageView](nsimageview.md)
- [NSLevelIndicator](nslevelindicator.md)
- [NSMatrix](nsmatrix.md)
- [NSPathControl](nspathcontrol.md)
- [NSRuleEditor](nsruleeditor.md)
- [NSScroller](nsscroller.md)
- [NSSegmentedControl](nssegmentedcontrol.md)
- [NSSlider](nsslider.md)
- [NSStepper](nsstepper.md)
- [NSSwitch](nsswitch.md)
- [NSTableView](nstableview.md)
- [NSTextField](nstextfield.md)

## See Also

### View fundamentals

- [NSView](nsview.md): The infrastructure for drawing, printing, and handling events in an app.
- [NSCell](nscell.md): A mechanism for displaying text or images in a view object without the overhead of a full [NSView](nsview.md) subclass.
- [NSActionCell](nsactioncell.md): An active area inside a control.
