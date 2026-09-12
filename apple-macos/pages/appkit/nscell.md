> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscell](https://developer.apple.com/documentation/appkit/nscell)

# NSCell (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

A mechanism for displaying text or images in a view object without the overhead of a full [NSView](nsview.md) subclass.

## Declaration

```swift
@MainActor class NSCell
```

<a id="overview"></a>

## Overview

Cells are used by most of the [NSControl](nscontrol.md) classes to implement their internal workings.

<a id="Designated-Initializers"></a>

### Designated Initializers

When subclassing `NSCell` you must implement all of the designated initializers. Those methods include [init()](nscell/init%28%29.md), [init(coder:)](nscell/init%28coder_%29.md), [init(textCell:)](nscell/init%28textcell_%29.md), and [init(imageCell:)](nscell/init%28imagecell_%29.md).

## Topics

### Initializing a Cell

- [init(imageCell:)](nscell/init%28imagecell_%29.md): Returns an `NSCell` object initialized with the specified image and set to have the cell’s default menu.
- [init(textCell:)](nscell/init%28textcell_%29.md): Returns an NSCell object initialized with the specified string and set to have the cell’s default menu.

### Managing Cell Values

- [objectValue](nscell/objectvalue.md): The cell’s value as an Objective-C object.
- [hasValidObjectValue](nscell/hasvalidobjectvalue.md): A Boolean value that indicates whether the cell has a valid object value.
- [intValue](nscell/intvalue.md): The cell’s value as an integer.
- [integerValue](nscell/integervalue.md): The cell’s value as an integer value.
- [stringValue](nscell/stringvalue.md): The cell’s value as a string.
- [doubleValue](nscell/doublevalue.md): The cell’s value as a double-precision floating-point number.
- [floatValue](nscell/floatvalue.md): The cell’s value as a single-precision floating-point number.

### Managing Cell Attributes

- [setCellAttribute(\_:to:)](nscell/setcellattribute%28__to_%29.md): Sets the value for the specified cell attribute.
- [cellAttribute(\_:)](nscell/cellattribute%28__%29.md): Returns the value for the specified cell attribute.
- [type](nscell/type.md): The type of the cell.
- [isEnabled](nscell/isenabled.md): A Boolean value indicating whether the cell is currently enabled.
- [allowsUndo](nscell/allowsundo.md): A Boolean value indicating whether the cell assumes responsibility for undo operations.

### Managing Display Attributes

- [isBezeled](nscell/isbezeled.md): A Boolean value indicating whether the cell has a bezeled border.
- [isBordered](nscell/isbordered.md): A Boolean value indicating whether the cell draws itself outlined with a plain border.
- [isOpaque](nscell/isopaque.md): A Boolean value indicating whether the cell is completely opaque.
- [controlTint](nscell/controltint.md): Deprecated. The cell’s control tint.
- [backgroundStyle](nscell/backgroundstyle.md): The cell’s background style.
- [interiorBackgroundStyle](nscell/interiorbackgroundstyle.md): The cell’s interior background style.
- [NSView.BackgroundStyle](nsview/backgroundstyle.md): Background styles to apply to a view’s cell.

### Managing Cell State

- [allowsMixedState](nscell/allowsmixedstate.md): A Boolean value indicating whether the cell supports three states instead of two.
- [nextState](nscell/nextstate.md): The cell’s next state.
- [setNextState()](nscell/setnextstate%28%29.md): Changes cell’s state to the next value in the sequence.
- [state](nscell/state.md): The cell’s current state.
- [NSControl.StateValue](nscontrol/statevalue.md): A constant that indicates whether a control is on, off, or in a mixed state.

### Modifying Textual Attributes

- [isEditable](nscell/iseditable.md): A Boolean value indicating whether the cell is editable.
- [isSelectable](nscell/isselectable.md): A Boolean value indicating whether the cell’s text can be selected.
- [isScrollable](nscell/isscrollable.md): A Boolean value indicating whether excess text scrolls past the cell’s bounds.
- [alignment](nscell/alignment.md): The alignment of the cell’s text.
- [font](nscell/font.md): The font that the cell uses to display text.
- [lineBreakMode](nscell/linebreakmode.md): The line break mode to use when drawing text in the cell.
- [truncatesLastVisibleLine](nscell/truncateslastvisibleline.md): A Boolean value indicating whether the cell truncates text that does not fit within the cell’s bounds.
- [wraps](nscell/wraps.md): A Boolean value indicating whether the cell wraps text whose length that exceeds the cell’s frame.
- [baseWritingDirection](nscell/basewritingdirection.md): The initial writing direction used to determine the actual writing direction for text.
- [attributedStringValue](nscell/attributedstringvalue.md): The cell’s value as an attributed string.
- [allowsEditingTextAttributes](nscell/allowseditingtextattributes.md): A Boolean value indicating whether the cell allows the editing of its content’s text attributes by the user.
- [importsGraphics](nscell/importsgraphics.md): A Boolean value indicating whether the cell supports the importation of images into its text.
- [setUpFieldEditorAttributes(\_:)](nscell/setupfieldeditorattributes%28__%29.md): Configures the textual and background attributes of the receiver’s field editor.
- [title](nscell/title.md): The cell’s title text.

### Managing the Target and Action

- [action](nscell/action.md): The action performed by the cell.
- [target](nscell/target.md): The object that receives the cell’s action messages.
- [isContinuous](nscell/iscontinuous.md): A Boolean value indicating whether the cell sends its action message continuously during mouse tracking.
- [sendAction(on:)](nscell/sendaction%28on_%29.md): Sets the conditions on which the receiver sends action messages to its target.

### Managing the Image

- [image](nscell/image.md): The image displayed by the cell, if any.

### Managing the Tag

- [tag](nscell/tag.md): A tag for identifying the cell.

### Formatting and Validating Data

- [formatter](nscell/formatter.md): The cell’s formatter object.

### Managing Menus

- [defaultMenu](nscell/defaultmenu.md): Returns the default menu for instances of the cell.
- [menu](nscell/menu.md): The cell’s contextual menu.
- [menu(for:in:of:)](nscell/menu%28for_in_of_%29.md): Returns the menu associated with the cell and related to the specified event and frame.

### Comparing Cells

- [compare(\_:)](nscell/compare%28__%29.md): Compares the string values of the receiver another cell, disregarding case.

### Respond to Keyboard Events

- [acceptsFirstResponder](nscell/acceptsfirstresponder.md): A Boolean value indicating whether the cell accepts first responder status.
- [showsFirstResponder](nscell/showsfirstresponder.md): A Boolean value indicating whether the cell provides a visual indication that it is the first responder.
- [refusesFirstResponder](nscell/refusesfirstresponder.md): A Boolean value indicating whether the cell refuses the first responder status.
- [performClick(\_:)](nscell/performclick%28__%29.md): Simulates a single mouse click on the receiver.

### Deriving Values

- [takeObjectValueFrom(\_:)](nscell/takeobjectvaluefrom%28__%29.md): Sets the value of the receiver’s cell to the object value obtained from the specified object.
- [takeIntegerValueFrom(\_:)](nscell/takeintegervaluefrom%28__%29.md): Sets the value of the receiver’s cell to an integer value obtained from the specified object.
- [takeIntValueFrom(\_:)](nscell/takeintvaluefrom%28__%29.md): Sets the value of the receiver’s cell to an integer value obtained from the specified object.
- [takeStringValueFrom(\_:)](nscell/takestringvaluefrom%28__%29.md): Sets the value of the receiver’s cell to the string value obtained from the specified object.
- [takeDoubleValueFrom(\_:)](nscell/takedoublevaluefrom%28__%29.md): Sets the value of the receiver’s cell to a double-precision floating-point value obtained from the specified object.
- [takeFloatValueFrom(\_:)](nscell/takefloatvaluefrom%28__%29.md): Sets the value of the receiver’s cell to a single-precision floating-point value obtained from the specified object.

### Representing an Object

- [representedObject](nscell/representedobject.md): The object represented by the cell.

### Tracking the Mouse

- [trackMouse(with:in:of:untilMouseUp:)](nscell/trackmouse%28with_in_of_untilmouseup_%29.md): Initiates the mouse tracking behavior in a cell.
- [startTracking(at:in:)](nscell/starttracking%28at_in_%29.md): Begins tracking mouse events within the receiver.
- [continueTracking(last:current:in:)](nscell/continuetracking%28last_current_in_%29.md): Returns a Boolean value that indicates whether mouse tracking should continue in the receiving cell.
- [stopTracking(last:current:in:mouseIsUp:)](nscell/stoptracking%28last_current_in_mouseisup_%29.md): Stops tracking mouse events within the receiver.
- [mouseDownFlags](nscell/mousedownflags.md): The modifier flags for the last (left) mouse-down event.
- [prefersTrackingUntilMouseUp](nscell/preferstrackinguntilmouseup.md): Returns a Boolean value that indicates whether tracking stops when the cursor leaves the cell.
- [getPeriodicDelay(\_:interval:)](nscell/getperiodicdelay%28__interval_%29.md): Returns the initial delay and repeat values for continuous sending of action messages to target objects.

### Hit Testing

- [hitTest(for:in:of:)](nscell/hittest%28for_in_of_%29.md): Returns hit testing information for the receiver.

### Managing the Cursor

- [resetCursorRect(\_:in:)](nscell/resetcursorrect%28__in_%29.md): Sets the receiver to show the I-beam cursor while it tracks the mouse.

### Handling Keyboard Alternatives

- [keyEquivalent](nscell/keyequivalent.md): The key equivalent associated with clicking the cell.

### Dragging Cells

- [draggingImageComponents(withFrame:in:)](nscell/draggingimagecomponents%28withframe_in_%29.md): Generates dragging image components with the specified frame in the view.

### Managing Focus Rings

- [drawFocusRingMask(withFrame:in:)](nscell/drawfocusringmask%28withframe_in_%29.md): Draws the focus ring for the control.
- [focusRingMaskBounds(forFrame:in:)](nscell/focusringmaskbounds%28forframe_in_%29.md): Returns the bounds of the focus ring mask.
- [defaultFocusRingType](nscell/defaultfocusringtype.md): Returns the default type of focus ring for the receiver.
- [focusRingType](nscell/focusringtype.md): The type of focus ring to use with the associated view.

### Determining Cell Size

- [calcDrawInfo(\_:)](nscell/calcdrawinfo%28__%29.md): Recalculates the cell geometry.
- [cellSize](nscell/cellsize.md): The minimum size needed to display the cell.
- [cellSize(forBounds:)](nscell/cellsize%28forbounds_%29.md): Returns the minimum size needed to display the receiver, constraining it to the specified rectangle.
- [drawingRect(forBounds:)](nscell/drawingrect%28forbounds_%29.md): Returns the rectangle within which the receiver draws itself
- [imageRect(forBounds:)](nscell/imagerect%28forbounds_%29.md): Returns the rectangle in which the receiver draws its image.
- [titleRect(forBounds:)](nscell/titlerect%28forbounds_%29.md): Returns the rectangle in which the receiver draws its title text.
- [controlSize](nscell/controlsize.md): The size of the cell.

### Drawing and Highlighting

- [draw(withFrame:in:)](nscell/draw%28withframe_in_%29.md): Draws the receiver’s border and then draws the interior of the cell.
- [highlightColor(withFrame:in:)](nscell/highlightcolor%28withframe_in_%29.md): Returns the color the receiver uses when drawing the selection highlight.
- [drawInterior(withFrame:in:)](nscell/drawinterior%28withframe_in_%29.md): Draws the interior portion of the receiver, which includes the image or text portion but does not include the border.
- [controlView](nscell/controlview.md): The view associated with the cell.
- [highlight(\_:withFrame:in:)](nscell/highlight%28__withframe_in_%29.md): Redraws the receiver with the specified highlight setting.
- [isHighlighted](nscell/ishighlighted.md): A Boolean value indicating whether the cell has a highlighted appearance.

### Editing and Selecting Text

- [edit(withFrame:in:editor:delegate:event:)](nscell/edit%28withframe_in_editor_delegate_event_%29.md): Begins editing of the receiver’s text using the specified field editor.
- [select(withFrame:in:editor:delegate:start:length:)](nscell/select%28withframe_in_editor_delegate_start_length_%29.md): Selects the specified text range in the cell’s field editor.
- [sendsActionOnEndEditing](nscell/sendsactiononendediting.md): A Boolean value indicating whether the cell’s control object sends its action message when the user finishes editing the cell’s text.
- [endEditing(\_:)](nscell/endediting%28__%29.md): Ends the editing of text in the receiver using the specified field editor.
- [wantsNotificationForMarkedText](nscell/wantsnotificationformarkedtext.md): A Boolean value indicating whether the cell’s field editor should post text change notifications.
- [fieldEditor(for:)](nscell/fieldeditor%28for_%29.md): Returns a custom field editor for editing in the view.
- [usesSingleLineMode](nscell/usessinglelinemode.md): A Boolean value indicating whether the cell restricts layout and rendering of text to a single line.

### Managing Expansion Frames

- [expansionFrame(withFrame:in:)](nscell/expansionframe%28withframe_in_%29.md): Returns the expansion cell frame for the receiver.
- [draw(withExpansionFrame:in:)](nscell/draw%28withexpansionframe_in_%29.md): Instructs the receiver to draw in an expansion frame.

### User Interface Layout Direction

- [userInterfaceLayoutDirection](nscell/userinterfacelayoutdirection.md): The layout direction of the user interface.

### Constants

- [NSCell.CellType](nscell/celltype.md): Constants for specifying how a cell represents its data (as text or as an image).
- [NSCell.Attribute](nscell/attribute.md): Constants for specifying how a button behaves when pressed and how it displays its state.
- [NSControl.ImagePosition](nscontrol/imageposition.md): A constant for specifying the position of a button’s image relative to its title.
- [NSImageScaling](nsimagescaling.md): Constants that specify a cell’s image scaling behavior.
- [NSCell.StateValue](nscell/statevalue.md): Deprecated. Constants for specifying a cell’s state and are used mostly for buttons.
- [NSCell.StyleMask](nscell/stylemask.md): Constants for specifying what happens when a button is pressed or is displaying its alternate state.
- [NSControlTint](nscontroltint.md): Constants for specifying a cell’s tint color.
- [NSControl.ControlSize](nscontrol/controlsize-swift.enum.md): A constant for specifying a cell’s size.
- [NSCell.HitResult](nscell/hitresult.md): Constants used by the [hitTest(for:in:of:)](nscell/hittest%28for_in_of_%29.md) method to determine the effect of an event.
- [NSView.BackgroundStyle](nsview/backgroundstyle.md): Background styles to apply to a view’s cell.
- [Deprecated Scaling Constants](deprecated-scaling-constants.md): These are deprecated scaling constants.
- [Data Entry Types](data-entry-types.md): These constants specify how a cell formats numeric data.

### Notifications

- [currentControlTintDidChangeNotification](nscolor/currentcontroltintdidchangenotification.md): Deprecated. Sent after the user changes control tint preference.

### Initializers

- [init()](nscell/init%28%29.md)
- [init(coder:)](nscell/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [NSActionCell](nsactioncell.md)
- [NSBrowserCell](nsbrowsercell.md)
- [NSImageCell](nsimagecell.md)
- [NSTextAttachmentCell](nstextattachmentcell-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSAccessibilityElementProtocol](nsaccessibilityelementprotocol.md)
- [NSAccessibilityProtocol](nsaccessibilityprotocol.md)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSUserInterfaceItemIdentification](nsuserinterfaceitemidentification.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### View fundamentals

- [NSView](nsview.md): The infrastructure for drawing, printing, and handling events in an app.
- [NSControl](nscontrol.md): A specialized view, such as a button or text field, that notifies your app of relevant events using the target-action design pattern.
- [NSActionCell](nsactioncell.md): An active area inside a control.

# NSCell (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

A mechanism for displaying text or images in a view object without the overhead of a full [NSView](nsview.md) subclass.

## Declaration

```objectivec
@interface NSCell : NSObject
```

<a id="overview"></a>

## Overview

Cells are used by most of the [NSControl](nscontrol.md) classes to implement their internal workings.

<a id="Designated-Initializers"></a>

### Designated Initializers

When subclassing `NSCell` you must implement all of the designated initializers. Those methods include [init](nscell/init%28%29.md), [initWithCoder:](nscell/init%28coder_%29.md), [initTextCell:](nscell/init%28textcell_%29.md), and [initImageCell:](nscell/init%28imagecell_%29.md).

## Topics

### Initializing a Cell

- [initImageCell:](nscell/init%28imagecell_%29.md): Returns an `NSCell` object initialized with the specified image and set to have the cell’s default menu.
- [initTextCell:](nscell/init%28textcell_%29.md): Returns an NSCell object initialized with the specified string and set to have the cell’s default menu.

### Managing Cell Values

- [objectValue](nscell/objectvalue.md): The cell’s value as an Objective-C object.
- [hasValidObjectValue](nscell/hasvalidobjectvalue.md): A Boolean value that indicates whether the cell has a valid object value.
- [intValue](nscell/intvalue.md): The cell’s value as an integer.
- [integerValue](nscell/integervalue.md): The cell’s value as an integer value.
- [stringValue](nscell/stringvalue.md): The cell’s value as a string.
- [doubleValue](nscell/doublevalue.md): The cell’s value as a double-precision floating-point number.
- [floatValue](nscell/floatvalue.md): The cell’s value as a single-precision floating-point number.

### Managing Cell Attributes

- [setCellAttribute:to:](nscell/setcellattribute%28__to_%29.md): Sets the value for the specified cell attribute.
- [cellAttribute:](nscell/cellattribute%28__%29.md): Returns the value for the specified cell attribute.
- [type](nscell/type.md): The type of the cell.
- [enabled](nscell/isenabled.md): A Boolean value indicating whether the cell is currently enabled.
- [allowsUndo](nscell/allowsundo.md): A Boolean value indicating whether the cell assumes responsibility for undo operations.

### Managing Display Attributes

- [bezeled](nscell/isbezeled.md): A Boolean value indicating whether the cell has a bezeled border.
- [bordered](nscell/isbordered.md): A Boolean value indicating whether the cell draws itself outlined with a plain border.
- [opaque](nscell/isopaque.md): A Boolean value indicating whether the cell is completely opaque.
- [controlTint](nscell/controltint.md): Deprecated. The cell’s control tint.
- [backgroundStyle](nscell/backgroundstyle.md): The cell’s background style.
- [interiorBackgroundStyle](nscell/interiorbackgroundstyle.md): The cell’s interior background style.
- [NSBackgroundStyle](nsview/backgroundstyle.md): Background styles to apply to a view’s cell.

### Managing Cell State

- [allowsMixedState](nscell/allowsmixedstate.md): A Boolean value indicating whether the cell supports three states instead of two.
- [nextState](nscell/nextstate.md): The cell’s next state.
- [setNextState](nscell/setnextstate%28%29.md): Changes cell’s state to the next value in the sequence.
- [state](nscell/state.md): The cell’s current state.
- [NSControlStateValue](nscontrol/statevalue.md): A constant that indicates whether a control is on, off, or in a mixed state.

### Modifying Textual Attributes

- [editable](nscell/iseditable.md): A Boolean value indicating whether the cell is editable.
- [selectable](nscell/isselectable.md): A Boolean value indicating whether the cell’s text can be selected.
- [scrollable](nscell/isscrollable.md): A Boolean value indicating whether excess text scrolls past the cell’s bounds.
- [alignment](nscell/alignment.md): The alignment of the cell’s text.
- [font](nscell/font.md): The font that the cell uses to display text.
- [lineBreakMode](nscell/linebreakmode.md): The line break mode to use when drawing text in the cell.
- [truncatesLastVisibleLine](nscell/truncateslastvisibleline.md): A Boolean value indicating whether the cell truncates text that does not fit within the cell’s bounds.
- [wraps](nscell/wraps.md): A Boolean value indicating whether the cell wraps text whose length that exceeds the cell’s frame.
- [baseWritingDirection](nscell/basewritingdirection.md): The initial writing direction used to determine the actual writing direction for text.
- [attributedStringValue](nscell/attributedstringvalue.md): The cell’s value as an attributed string.
- [allowsEditingTextAttributes](nscell/allowseditingtextattributes.md): A Boolean value indicating whether the cell allows the editing of its content’s text attributes by the user.
- [importsGraphics](nscell/importsgraphics.md): A Boolean value indicating whether the cell supports the importation of images into its text.
- [setUpFieldEditorAttributes:](nscell/setupfieldeditorattributes%28__%29.md): Configures the textual and background attributes of the receiver’s field editor.
- [title](nscell/title.md): The cell’s title text.

### Managing the Target and Action

- [action](nscell/action.md): The action performed by the cell.
- [target](nscell/target.md): The object that receives the cell’s action messages.
- [continuous](nscell/iscontinuous.md): A Boolean value indicating whether the cell sends its action message continuously during mouse tracking.
- [sendActionOn:](nscell/sendaction%28on_%29.md): Sets the conditions on which the receiver sends action messages to its target.

### Managing the Image

- [image](nscell/image.md): The image displayed by the cell, if any.

### Managing the Tag

- [tag](nscell/tag.md): A tag for identifying the cell.

### Formatting and Validating Data

- [formatter](nscell/formatter.md): The cell’s formatter object.

### Managing Menus

- [defaultMenu](nscell/defaultmenu.md): Returns the default menu for instances of the cell.
- [menu](nscell/menu.md): The cell’s contextual menu.
- [menuForEvent:inRect:ofView:](nscell/menu%28for_in_of_%29.md): Returns the menu associated with the cell and related to the specified event and frame.

### Comparing Cells

- [compare:](nscell/compare%28__%29.md): Compares the string values of the receiver another cell, disregarding case.

### Respond to Keyboard Events

- [acceptsFirstResponder](nscell/acceptsfirstresponder.md): A Boolean value indicating whether the cell accepts first responder status.
- [showsFirstResponder](nscell/showsfirstresponder.md): A Boolean value indicating whether the cell provides a visual indication that it is the first responder.
- [refusesFirstResponder](nscell/refusesfirstresponder.md): A Boolean value indicating whether the cell refuses the first responder status.
- [performClick:](nscell/performclick%28__%29.md): Simulates a single mouse click on the receiver.

### Deriving Values

- [takeObjectValueFrom:](nscell/takeobjectvaluefrom%28__%29.md): Sets the value of the receiver’s cell to the object value obtained from the specified object.
- [takeIntegerValueFrom:](nscell/takeintegervaluefrom%28__%29.md): Sets the value of the receiver’s cell to an integer value obtained from the specified object.
- [takeIntValueFrom:](nscell/takeintvaluefrom%28__%29.md): Sets the value of the receiver’s cell to an integer value obtained from the specified object.
- [takeStringValueFrom:](nscell/takestringvaluefrom%28__%29.md): Sets the value of the receiver’s cell to the string value obtained from the specified object.
- [takeDoubleValueFrom:](nscell/takedoublevaluefrom%28__%29.md): Sets the value of the receiver’s cell to a double-precision floating-point value obtained from the specified object.
- [takeFloatValueFrom:](nscell/takefloatvaluefrom%28__%29.md): Sets the value of the receiver’s cell to a single-precision floating-point value obtained from the specified object.

### Representing an Object

- [representedObject](nscell/representedobject.md): The object represented by the cell.

### Tracking the Mouse

- [trackMouse:inRect:ofView:untilMouseUp:](nscell/trackmouse%28with_in_of_untilmouseup_%29.md): Initiates the mouse tracking behavior in a cell.
- [startTrackingAt:inView:](nscell/starttracking%28at_in_%29.md): Begins tracking mouse events within the receiver.
- [continueTracking:at:inView:](nscell/continuetracking%28last_current_in_%29.md): Returns a Boolean value that indicates whether mouse tracking should continue in the receiving cell.
- [stopTracking:at:inView:mouseIsUp:](nscell/stoptracking%28last_current_in_mouseisup_%29.md): Stops tracking mouse events within the receiver.
- [mouseDownFlags](nscell/mousedownflags.md): The modifier flags for the last (left) mouse-down event.
- [prefersTrackingUntilMouseUp](nscell/preferstrackinguntilmouseup.md): Returns a Boolean value that indicates whether tracking stops when the cursor leaves the cell.
- [getPeriodicDelay:interval:](nscell/getperiodicdelay%28__interval_%29.md): Returns the initial delay and repeat values for continuous sending of action messages to target objects.

### Hit Testing

- [hitTestForEvent:inRect:ofView:](nscell/hittest%28for_in_of_%29.md): Returns hit testing information for the receiver.

### Managing the Cursor

- [resetCursorRect:inView:](nscell/resetcursorrect%28__in_%29.md): Sets the receiver to show the I-beam cursor while it tracks the mouse.

### Handling Keyboard Alternatives

- [keyEquivalent](nscell/keyequivalent.md): The key equivalent associated with clicking the cell.

### Dragging Cells

- [draggingImageComponentsWithFrame:inView:](nscell/draggingimagecomponents%28withframe_in_%29.md): Generates dragging image components with the specified frame in the view.

### Managing Focus Rings

- [drawFocusRingMaskWithFrame:inView:](nscell/drawfocusringmask%28withframe_in_%29.md): Draws the focus ring for the control.
- [focusRingMaskBoundsForFrame:inView:](nscell/focusringmaskbounds%28forframe_in_%29.md): Returns the bounds of the focus ring mask.
- [defaultFocusRingType](nscell/defaultfocusringtype.md): Returns the default type of focus ring for the receiver.
- [focusRingType](nscell/focusringtype.md): The type of focus ring to use with the associated view.

### Determining Cell Size

- [calcDrawInfo:](nscell/calcdrawinfo%28__%29.md): Recalculates the cell geometry.
- [cellSize](nscell/cellsize.md): The minimum size needed to display the cell.
- [cellSizeForBounds:](nscell/cellsize%28forbounds_%29.md): Returns the minimum size needed to display the receiver, constraining it to the specified rectangle.
- [drawingRectForBounds:](nscell/drawingrect%28forbounds_%29.md): Returns the rectangle within which the receiver draws itself
- [imageRectForBounds:](nscell/imagerect%28forbounds_%29.md): Returns the rectangle in which the receiver draws its image.
- [titleRectForBounds:](nscell/titlerect%28forbounds_%29.md): Returns the rectangle in which the receiver draws its title text.
- [controlSize](nscell/controlsize.md): The size of the cell.

### Drawing and Highlighting

- [drawWithFrame:inView:](nscell/draw%28withframe_in_%29.md): Draws the receiver’s border and then draws the interior of the cell.
- [highlightColorWithFrame:inView:](nscell/highlightcolor%28withframe_in_%29.md): Returns the color the receiver uses when drawing the selection highlight.
- [drawInteriorWithFrame:inView:](nscell/drawinterior%28withframe_in_%29.md): Draws the interior portion of the receiver, which includes the image or text portion but does not include the border.
- [controlView](nscell/controlview.md): The view associated with the cell.
- [highlight:withFrame:inView:](nscell/highlight%28__withframe_in_%29.md): Redraws the receiver with the specified highlight setting.
- [highlighted](nscell/ishighlighted.md): A Boolean value indicating whether the cell has a highlighted appearance.

### Editing and Selecting Text

- [editWithFrame:inView:editor:delegate:event:](nscell/edit%28withframe_in_editor_delegate_event_%29.md): Begins editing of the receiver’s text using the specified field editor.
- [selectWithFrame:inView:editor:delegate:start:length:](nscell/select%28withframe_in_editor_delegate_start_length_%29.md): Selects the specified text range in the cell’s field editor.
- [sendsActionOnEndEditing](nscell/sendsactiononendediting.md): A Boolean value indicating whether the cell’s control object sends its action message when the user finishes editing the cell’s text.
- [endEditing:](nscell/endediting%28__%29.md): Ends the editing of text in the receiver using the specified field editor.
- [wantsNotificationForMarkedText](nscell/wantsnotificationformarkedtext.md): A Boolean value indicating whether the cell’s field editor should post text change notifications.
- [fieldEditorForView:](nscell/fieldeditor%28for_%29.md): Returns a custom field editor for editing in the view.
- [usesSingleLineMode](nscell/usessinglelinemode.md): A Boolean value indicating whether the cell restricts layout and rendering of text to a single line.

### Managing Expansion Frames

- [expansionFrameWithFrame:inView:](nscell/expansionframe%28withframe_in_%29.md): Returns the expansion cell frame for the receiver.
- [drawWithExpansionFrame:inView:](nscell/draw%28withexpansionframe_in_%29.md): Instructs the receiver to draw in an expansion frame.

### User Interface Layout Direction

- [userInterfaceLayoutDirection](nscell/userinterfacelayoutdirection.md): The layout direction of the user interface.

### Constants

- [NSCellType](nscell/celltype.md): Constants for specifying how a cell represents its data (as text or as an image).
- [NSCellAttribute](nscell/attribute.md): Constants for specifying how a button behaves when pressed and how it displays its state.
- [NSCellImagePosition](nscontrol/imageposition.md): A constant for specifying the position of a button’s image relative to its title.
- [NSImageScaling](nsimagescaling.md): Constants that specify a cell’s image scaling behavior.
- [NSCellStateValue](nscell/statevalue.md): Deprecated. Constants for specifying a cell’s state and are used mostly for buttons.
- [NSCellStyleMask](nscell/stylemask.md): Constants for specifying what happens when a button is pressed or is displaying its alternate state.
- [NSControlTint](nscontroltint.md): Constants for specifying a cell’s tint color.
- [NSControlSize](nscontrol/controlsize-swift.enum.md): A constant for specifying a cell’s size.
- [NSCellHitResult](nscell/hitresult.md): Constants used by the [hitTestForEvent:inRect:ofView:](nscell/hittest%28for_in_of_%29.md) method to determine the effect of an event.
- [NSBackgroundStyle](nsview/backgroundstyle.md): Background styles to apply to a view’s cell.
- [Deprecated Scaling Constants](deprecated-scaling-constants.md): These are deprecated scaling constants.
- [Data Entry Types](data-entry-types.md): These constants specify how a cell formats numeric data.

### Notifications

- [NSControlTintDidChangeNotification](nscolor/currentcontroltintdidchangenotification.md): Deprecated. Sent after the user changes control tint preference.

### Deprecated Methods

- [setEntryType:](nscell/setentrytype_.md): Deprecated. Sets how numeric data is formatted in the receiver and places restrictions on acceptable input.
- [entryType](nscell/entrytype.md): Deprecated. Returns the type of data the user can type into the receiver.
- [isEntryAcceptable:](nscell/isentryacceptable_.md): Deprecated. Returns whether a string representing a numeric or date value is formatted in a suitable way for the cell’s entry type.
- [setFloatingPointFormat:left:right:](nscell/setfloatingpointformat_left_right_.md): Deprecated. Sets the auto-ranging and floating point number format of the receiver’s cell.
- [setTitleWithMnemonic:](nscell/settitlewithmnemonic_.md): Deprecated. Sets the title of the receiver with one character in the string denoted as an access key.
- [mnemonic](nscell/mnemonic.md): Deprecated. Returns the character in the receiver’s title that appears underlined for use as a mnemonic.
- [setMnemonicLocation:](nscell/setmnemoniclocation_.md): Deprecated. Sets the character of the receiver’s title to be used as a mnemonic character.
- [mnemonicLocation](nscell/mnemoniclocation.md): Deprecated. Returns the position of the underlined mnemonic character in the receiver’s title.

### Initializers

- [init](nscell/init%28%29.md)
- [initWithCoder:](nscell/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [NSActionCell](nsactioncell.md)
- [NSBrowserCell](nsbrowsercell.md)
- [NSImageCell](nsimagecell.md)
- [NSTextAttachmentCell](nstextattachmentcell-swift.class.md)

### Conforms To

- [NSAccessibility](nsaccessibilityprotocol.md)
- [NSAccessibilityElement](nsaccessibilityelementprotocol.md)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSUserInterfaceItemIdentification](nsuserinterfaceitemidentification.md)

## See Also

### View fundamentals

- [NSView](nsview.md): The infrastructure for drawing, printing, and handling events in an app.
- [NSControl](nscontrol.md): A specialized view, such as a button or text field, that notifies your app of relevant events using the target-action design pattern.
- [NSActionCell](nsactioncell.md): An active area inside a control.
