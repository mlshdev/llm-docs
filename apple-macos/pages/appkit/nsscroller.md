> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsscroller](https://developer.apple.com/documentation/appkit/nsscroller)

# NSScroller (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

An object that controls scrolling of a document view within a scroll view or other type of container view.

## Declaration

```swift
class NSScroller
```

<a id="overview"></a>

## Overview

A scroller displays a slot containing a knob that the user can drag directly to the desired location. The knob indicates both the position within the document view and—by varying in size within the slot—the amount visible relative to the size of the document view.

Typically, you don’t need to program with scrollers; instead, you configure them with an [NSScrollView](nsscrollview.md) object in a [Nib file](https://developer.apple.com/library/archive/documentation/General/Conceptual/DevPedia-CocoaCore/NibFile.html#//apple_ref/doc/uid/TP40008195-CH34).

Don’t use an scroller when a slider would be more appropriate. An [NSSlider](nsslider.md) object represents a range of values for something in the application and lets the user choose a setting. A scroller represents the relative position of the visible portion of a view and lets the user choose which portion to view.

## Topics

### Determining Scroller Size

- [scrollerWidth(for:scrollerStyle:)](nsscroller/scrollerwidth%28for_scrollerstyle_%29.md): Returns the width for scrollers of the receiving class for a given control size and scroller style.
- [controlSize](nsscroller/controlsize.md): The size of the scroller.

### Laying out a Scroller

- [arrowsPosition](nsscroller/arrowsposition.md): Deprecated. The location of the scroll buttons within the scroller, as described in [NSScroller.ArrowPosition](nsscroller/arrowposition.md).

### Setting the Knob Position

- [knobProportion](nsscroller/knobproportion.md): The proportion of the knob slot that the knob should fill.

### Calculating Layout

- [rect(for:)](nsscroller/rect%28for_%29.md): Returns the rectangle occupied by `aPart`, which for this method is interpreted literally rather than as an indicator of scrolling direction.
- [testPart(\_:)](nsscroller/testpart%28__%29.md): Returns the part that would be hit by a mouse-down event at `aPoint` (expressed in the window’s coordinate system).
- [checkSpaceForParts()](nsscroller/checkspaceforparts%28%29.md): Checks to see if there is enough room in the receiver to display the knob and buttons.
- [usableParts](nsscroller/usableparts-swift.property.md): A value that indicates which parts of the receiver are displayed and usable.

### Drawing Scroller Parts

- [drawArrow(\_:highlight:)](nsscroller/drawarrow%28__highlight_%29.md): Deprecated. Draws the scroll button indicated by `arrow`, which is either `NSScrollerIncrementArrow` (the down or right scroll button) or `NSScrollerDecrementArrow` (up or left).
- [drawKnobSlot(in:highlight:)](nsscroller/drawknobslot%28in_highlight_%29.md): Draws the portion of the scroller’s track, possibly including the line increment and decrement arrow buttons, that falls in the given rectangle.
- [drawKnob()](nsscroller/drawknob%28%29.md): Draws the knob.
- [highlight(\_:)](nsscroller/highlight%28__%29.md): Deprecated. Highlights or unhighlights the scroll button the user clicked.

### Event Handling

- [hitPart](nsscroller/hitpart.md): A part code indicating the manner in which the scrolling should be performed.
- [trackKnob(with:)](nsscroller/trackknob%28with_%29.md): Tracks the knob and sends action messages to the receiver’s target.
- [trackScrollButtons(with:)](nsscroller/trackscrollbuttons%28with_%29.md): Deprecated. Tracks the scroll buttons and sends action messages to the receiver’s target.

### Setting Control Tint

- [controlTint](nsscroller/controltint.md): Deprecated. The scroller’s control tint.

### Managing Presentation Style

- [preferredScrollerStyle](nsscroller/preferredscrollerstyle.md): Returns the style of scrollers that applications should use wherever possible.
- [scrollerStyle](nsscroller/scrollerstyle.md): The scroller style for this scroller.
- [knobStyle](nsscroller/knobstyle-swift.property.md): The scroller’s knob style.

### Constants

- [NSScroller.Style](nsscroller/style.md): Constants to specify the scroller style.
- [NSScroller.KnobStyle](nsscroller/knobstyle-swift.enum.md): Specify different knob styles.
- [NSScroller.Part](nsscroller/part.md): These constants specify the different parts of the scroller:
- [NSScroller.Arrow](nsscroller/arrow.md): Deprecated. These constants describe the two scroller buttons and are used by [drawArrow(\_:highlight:)](nsscroller/drawarrow%28__highlight_%29.md).
- [NSScroller.ArrowPosition](nsscroller/arrowposition.md): Deprecated. These constants specify where the scroller’s buttons appear and are used by the [arrowsPosition](nsscroller/arrowsposition.md) property.
- [NSScroller.UsableParts](nsscroller/usableparts-swift.enum.md): These constants specify which parts of the scroller are visible.

### Notifications

- [preferredScrollerStyleDidChangeNotification](nsscroller/preferredscrollerstyledidchangenotification.md): Posted if the preferred scroller style changes.

### Instance Properties

- [knobProportion](nsscroller/knobproportion.md): The proportion of the knob slot that the knob should fill.

### Type Properties

- [isCompatibleWithOverlayScrollers](nsscroller/iscompatiblewithoverlayscrollers.md)

### Structures

- [NSScroller.PreferredScrollerStyleDidChangeMessage](nsscroller/preferredscrollerstyledidchangemessage.md)

## Relationships

### Inherits From

- [NSControl](nscontrol.md)

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

### Views

- [NSScrollView](nsscrollview.md): A view that displays a portion of a document view and provides scroll bars that allow the user to move the document view within the scroll view.
- [NSClipView](nsclipview.md): An object that clips a document view to a scroll view’s frame.

# NSScroller (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

An object that controls scrolling of a document view within a scroll view or other type of container view.

## Declaration

```objectivec
@interface NSScroller : NSControl
```

<a id="overview"></a>

## Overview

A scroller displays a slot containing a knob that the user can drag directly to the desired location. The knob indicates both the position within the document view and—by varying in size within the slot—the amount visible relative to the size of the document view.

Typically, you don’t need to program with scrollers; instead, you configure them with an [NSScrollView](nsscrollview.md) object in a [Nib file](https://developer.apple.com/library/archive/documentation/General/Conceptual/DevPedia-CocoaCore/NibFile.html#//apple_ref/doc/uid/TP40008195-CH34).

Don’t use an scroller when a slider would be more appropriate. An [NSSlider](nsslider.md) object represents a range of values for something in the application and lets the user choose a setting. A scroller represents the relative position of the visible portion of a view and lets the user choose which portion to view.

## Topics

### Determining Scroller Size

- [scrollerWidthForControlSize:scrollerStyle:](nsscroller/scrollerwidth%28for_scrollerstyle_%29.md): Returns the width for scrollers of the receiving class for a given control size and scroller style.
- [scrollerWidth](nsscroller/scrollerwidth.md): Deprecated. Returns the width for scrollers of the receiving class, assuming a control size [NSRegularControlSize](nsregularcontrolsize.md), and a scroller style of [NSScrollerStyleLegacy](nsscroller/style/legacy.md).
- [scrollerWidthForControlSize:](nsscroller/scrollerwidthforcontrolsize_.md): Deprecated. Returns the width of the scroller based on `controlSize` and assuming a scroller style of [NSScrollerStyleLegacy](nsscroller/style/legacy.md).
- [controlSize](nsscroller/controlsize.md): The size of the scroller.

### Laying out a Scroller

- [arrowsPosition](nsscroller/arrowsposition.md): Deprecated. The location of the scroll buttons within the scroller, as described in [NSScrollArrowPosition](nsscroller/arrowposition.md).

### Setting the Knob Position

- [setFloatValue:knobProportion:](nsscroller/setfloatvalue_knobproportion_.md): Deprecated. Sets the position of the knob to `aFloat`, which is a value from 0.0 (indicating the top or left end) to 1.0 (the bottom or right end).
- [knobProportion](nsscroller/knobproportion.md): The proportion of the knob slot that the knob should fill.

### Calculating Layout

- [rectForPart:](nsscroller/rect%28for_%29.md): Returns the rectangle occupied by `aPart`, which for this method is interpreted literally rather than as an indicator of scrolling direction.
- [testPart:](nsscroller/testpart%28__%29.md): Returns the part that would be hit by a mouse-down event at `aPoint` (expressed in the window’s coordinate system).
- [checkSpaceForParts](nsscroller/checkspaceforparts%28%29.md): Checks to see if there is enough room in the receiver to display the knob and buttons.
- [usableParts](nsscroller/usableparts-swift.property.md): A value that indicates which parts of the receiver are displayed and usable.

### Drawing Scroller Parts

- [drawArrow:highlight:](nsscroller/drawarrow%28__highlight_%29.md): Deprecated. Draws the scroll button indicated by `arrow`, which is either `NSScrollerIncrementArrow` (the down or right scroll button) or `NSScrollerDecrementArrow` (up or left).
- [drawKnobSlotInRect:highlight:](nsscroller/drawknobslot%28in_highlight_%29.md): Draws the portion of the scroller’s track, possibly including the line increment and decrement arrow buttons, that falls in the given rectangle.
- [drawKnob](nsscroller/drawknob%28%29.md): Draws the knob.
- [drawParts](nsscroller/drawparts.md): Deprecated. Caches images for the scroll buttons and knob.
- [highlight:](nsscroller/highlight%28__%29.md): Deprecated. Highlights or unhighlights the scroll button the user clicked.

### Event Handling

- [hitPart](nsscroller/hitpart.md): A part code indicating the manner in which the scrolling should be performed.
- [trackKnob:](nsscroller/trackknob%28with_%29.md): Tracks the knob and sends action messages to the receiver’s target.
- [trackScrollButtons:](nsscroller/trackscrollbuttons%28with_%29.md): Deprecated. Tracks the scroll buttons and sends action messages to the receiver’s target.

### Setting Control Tint

- [controlTint](nsscroller/controltint.md): Deprecated. The scroller’s control tint.

### Managing Presentation Style

- [preferredScrollerStyle](nsscroller/preferredscrollerstyle.md): Returns the style of scrollers that applications should use wherever possible.
- [scrollerStyle](nsscroller/scrollerstyle.md): The scroller style for this scroller.
- [knobStyle](nsscroller/knobstyle-swift.property.md): The scroller’s knob style.

### Constants

- [NSScrollerStyle](nsscroller/style.md): Constants to specify the scroller style.
- [NSScrollerKnobStyle](nsscroller/knobstyle-swift.enum.md): Specify different knob styles.
- [NSScrollerPart](nsscroller/part.md): These constants specify the different parts of the scroller:
- [NSScrollerArrow](nsscroller/arrow.md): Deprecated. These constants describe the two scroller buttons and are used by [drawArrow:highlight:](nsscroller/drawarrow%28__highlight_%29.md).
- [NSScrollArrowPosition](nsscroller/arrowposition.md): Deprecated. These constants specify where the scroller’s buttons appear and are used by the [arrowsPosition](nsscroller/arrowsposition.md) property.
- [NSUsableScrollerParts](nsscroller/usableparts-swift.enum.md): These constants specify which parts of the scroller are visible.

### Notifications

- [NSPreferredScrollerStyleDidChangeNotification](nsscroller/preferredscrollerstyledidchangenotification.md): Posted if the preferred scroller style changes.

### Instance Properties

- [knobProportion](nsscroller/knobproportion.md): The proportion of the knob slot that the knob should fill.

### Type Properties

- [compatibleWithOverlayScrollers](nsscroller/iscompatiblewithoverlayscrollers.md)

## Relationships

### Inherits From

- [NSControl](nscontrol.md)

## See Also

### Views

- [NSScrollView](nsscrollview.md): A view that displays a portion of a document view and provides scroll bars that allow the user to move the document view within the scroll view.
- [NSClipView](nsclipview.md): An object that clips a document view to a scroll view’s frame.
