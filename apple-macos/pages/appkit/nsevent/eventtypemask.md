> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsevent/eventtypemask](https://developer.apple.com/documentation/appkit/nsevent/eventtypemask)

# NSEvent.EventTypeMask (Swift)

**Framework:** AppKit  
**Kind:** Structure  
**Availability:** macOS

Constants that you use to filter out specific event types from the stream of incoming events.

## Declaration

```swift
struct EventTypeMask
```

<a id="overview"></a>

## Overview

Pass these constants to the [NSCell](../nscell.md) method [sendAction(on:)](../nscell/sendaction%28on_%29.md) to specify when an [NSCell](../nscell.md) object should send its action message.

## Topics

### Getting Any Event

- [any](eventtypemask/any.md): A mask that matches any type of event.

### Getting Mouse-Related Events

- [leftMouseDown](eventtypemask/leftmousedown.md): A mask for left mouse-down events.
- [leftMouseDragged](eventtypemask/leftmousedragged.md): A mask for left mouse-dragged events.
- [leftMouseUp](eventtypemask/leftmouseup.md): A mask for left mouse-up events.
- [rightMouseDown](eventtypemask/rightmousedown.md): A mask for right mouse-down events.
- [rightMouseDragged](eventtypemask/rightmousedragged.md): A mask for right mouse-dragged events.
- [rightMouseUp](eventtypemask/rightmouseup.md): A mask for right mouse-up events.
- [otherMouseDown](eventtypemask/othermousedown.md): A mask for tertiary mouse-down events.
- [otherMouseDragged](eventtypemask/othermousedragged.md): A mask for tertiary mouse-dragged events.
- [otherMouseUp](eventtypemask/othermouseup.md): A mask for tertiary mouse-up events.
- [mouseEntered](eventtypemask/mouseentered.md): A mask for mouse-entered events.
- [mouseMoved](eventtypemask/mousemoved.md): A mask for mouse-moved events.
- [mouseExited](eventtypemask/mouseexited.md): A mask for mouse-exited events.

### Getting Keyboard Events

- [keyDown](eventtypemask/keydown.md): A mask for key-down events.
- [keyUp](eventtypemask/keyup.md): A mask for key-up events.

### Getting Touch Events

- [beginGesture](eventtypemask/begingesture.md): Deprecated. A mask for begin-gesture events.
- [endGesture](eventtypemask/endgesture.md): Deprecated. A mask for end-gesture events.
- [magnify](eventtypemask/magnify.md): A mask for magnify-gesture events.
- [smartMagnify](eventtypemask/smartmagnify.md): A mask for smart-zoom gesture events.
- [swipe](eventtypemask/swipe.md): A mask for swipe-gesture events.
- [rotate](eventtypemask/rotate.md): A mask for rotate-gesture events.
- [gesture](eventtypemask/gesture.md): A mask for generic gesture events.
- [directTouch](eventtypemask/directtouch.md): A mask for touch events.
- [tabletPoint](eventtypemask/tabletpoint.md): A mask for tablet-point events.
- [tabletProximity](eventtypemask/tabletproximity.md): A mask for tablet-proximity events.
- [pressure](eventtypemask/pressure.md): A mask for pressure-change events.

### Getting Input Events

- [scrollWheel](eventtypemask/scrollwheel.md): A mask for scroll-wheel events.
- [changeMode](eventtypemask/changemode.md): A mask for change-mode events.

### Getting System Events

- [appKitDefined](eventtypemask/appkitdefined.md): A mask for AppKit–defined events.
- [applicationDefined](eventtypemask/applicationdefined.md): A mask for app-defined events.
- [cursorUpdate](eventtypemask/cursorupdate.md): A mask for cursor-update events.
- [flagsChanged](eventtypemask/flagschanged.md): A mask for flags-changed events.
- [periodic](eventtypemask/periodic.md): A mask for periodic events.
- [systemDefined](eventtypemask/systemdefined.md): A mask for system-defined events.

### Creating an Event Mask

- [init(rawValue:)](eventtypemask/init%28rawvalue_%29.md)
- [init(type:)](eventtypemask/init%28type_%29.md): Returns the event mask for the specified type.

### Type Properties

- [mouseCancelled](eventtypemask/mousecancelled.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Constants

- [NSEvent.ButtonMask](buttonmask-swift.struct.md): Constants you use to identify the activated tablet buttons in an event.
- [NSEvent.ModifierFlags](modifierflags-swift.struct.md): Flags that represent key states in an event object.
- [NSEvent.Phase](phase-swift.struct.md): Constants that represent the possible phases during an event phase.
- [NSEvent.SwipeTrackingOptions](swipetrackingoptions.md): Constants that specify swipe-tracking options.
- [init(type:)](eventtypemask/init%28type_%29.md): Returns the event mask for the specified type.

# NSEventMask (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

Constants that you use to filter out specific event types from the stream of incoming events.

## Declaration

```objectivec
enum NSEventMask : unsigned long long;
```

<a id="overview"></a>

## Overview

Pass these constants to the [NSCell](../nscell.md) method [sendActionOn:](../nscell/sendaction%28on_%29.md) to specify when an [NSCell](../nscell.md) object should send its action message.

## Topics

### Getting Any Event

- [NSEventMaskAny](eventtypemask/any.md): A mask that matches any type of event.

### Getting Mouse-Related Events

- [NSEventMaskLeftMouseDown](eventtypemask/leftmousedown.md): A mask for left mouse-down events.
- [NSEventMaskLeftMouseDragged](eventtypemask/leftmousedragged.md): A mask for left mouse-dragged events.
- [NSEventMaskLeftMouseUp](eventtypemask/leftmouseup.md): A mask for left mouse-up events.
- [NSEventMaskRightMouseDown](eventtypemask/rightmousedown.md): A mask for right mouse-down events.
- [NSEventMaskRightMouseDragged](eventtypemask/rightmousedragged.md): A mask for right mouse-dragged events.
- [NSEventMaskRightMouseUp](eventtypemask/rightmouseup.md): A mask for right mouse-up events.
- [NSEventMaskOtherMouseDown](eventtypemask/othermousedown.md): A mask for tertiary mouse-down events.
- [NSEventMaskOtherMouseDragged](eventtypemask/othermousedragged.md): A mask for tertiary mouse-dragged events.
- [NSEventMaskOtherMouseUp](eventtypemask/othermouseup.md): A mask for tertiary mouse-up events.
- [NSEventMaskMouseEntered](eventtypemask/mouseentered.md): A mask for mouse-entered events.
- [NSEventMaskMouseMoved](eventtypemask/mousemoved.md): A mask for mouse-moved events.
- [NSEventMaskMouseExited](eventtypemask/mouseexited.md): A mask for mouse-exited events.

### Getting Keyboard Events

- [NSEventMaskKeyDown](eventtypemask/keydown.md): A mask for key-down events.
- [NSEventMaskKeyUp](eventtypemask/keyup.md): A mask for key-up events.

### Getting Touch Events

- [NSEventMaskBeginGesture](eventtypemask/begingesture.md): Deprecated. A mask for begin-gesture events.
- [NSEventMaskEndGesture](eventtypemask/endgesture.md): Deprecated. A mask for end-gesture events.
- [NSEventMaskMagnify](eventtypemask/magnify.md): A mask for magnify-gesture events.
- [NSEventMaskSmartMagnify](eventtypemask/smartmagnify.md): A mask for smart-zoom gesture events.
- [NSEventMaskSwipe](eventtypemask/swipe.md): A mask for swipe-gesture events.
- [NSEventMaskRotate](eventtypemask/rotate.md): A mask for rotate-gesture events.
- [NSEventMaskGesture](eventtypemask/gesture.md): A mask for generic gesture events.
- [NSEventMaskDirectTouch](eventtypemask/directtouch.md): A mask for touch events.
- [NSEventMaskTabletPoint](eventtypemask/tabletpoint.md): A mask for tablet-point events.
- [NSEventMaskTabletProximity](eventtypemask/tabletproximity.md): A mask for tablet-proximity events.
- [NSEventMaskPressure](eventtypemask/pressure.md): A mask for pressure-change events.

### Getting Input Events

- [NSEventMaskScrollWheel](eventtypemask/scrollwheel.md): A mask for scroll-wheel events.
- [NSEventMaskChangeMode](eventtypemask/changemode.md): A mask for change-mode events.

### Getting System Events

- [NSEventMaskAppKitDefined](eventtypemask/appkitdefined.md): A mask for AppKit–defined events.
- [NSEventMaskApplicationDefined](eventtypemask/applicationdefined.md): A mask for app-defined events.
- [NSEventMaskCursorUpdate](eventtypemask/cursorupdate.md): A mask for cursor-update events.
- [NSEventMaskFlagsChanged](eventtypemask/flagschanged.md): A mask for flags-changed events.
- [NSEventMaskPeriodic](eventtypemask/periodic.md): A mask for periodic events.
- [NSEventMaskSystemDefined](eventtypemask/systemdefined.md): A mask for system-defined events.

### Creating an Event Mask

- [NSEventMaskFromType](eventtypemask/init%28type_%29.md): Returns the event mask for the specified type.

### Deprecated Types

- [NSLeftMouseDownMask](../nsleftmousedownmask.md): Deprecated. A mask for left mouse-down events.
- [NSLeftMouseUpMask](../nsleftmouseupmask.md): Deprecated. A mask for left mouse-up events.
- [NSRightMouseDownMask](../nsrightmousedownmask.md): Deprecated. A mask for right mouse-down events.
- [NSRightMouseUpMask](../nsrightmouseupmask.md): Deprecated. A mask for right mouse-up events.
- [NSOtherMouseDownMask](../nsothermousedownmask.md): Deprecated. A mask for other mouse-down events.
- [NSOtherMouseUpMask](../nsothermouseupmask.md): Deprecated. A mask for other mouse-up events.
- [NSMouseMovedMask](../nsmousemovedmask.md): Deprecated. A mask for mouse-moved events.
- [NSLeftMouseDraggedMask](../nsleftmousedraggedmask.md): Deprecated. A mask for left mouse-dragged events.
- [NSRightMouseDraggedMask](../nsrightmousedraggedmask.md): Deprecated. A mask for right mouse-dragged events.
- [NSOtherMouseDraggedMask](../nsothermousedraggedmask.md): Deprecated. A mask for other mouse-dragged events.
- [NSMouseEnteredMask](../nsmouseenteredmask.md): Deprecated. A mask for mouse-entered events.
- [NSMouseExitedMask](../nsmouseexitedmask.md): Deprecated. A mask for mouse-exited events.
- [NSCursorUpdateMask](../nscursorupdatemask.md): Deprecated. A mask for cursor-update events.
- [NSKeyDownMask](../nskeydownmask.md): Deprecated. A mask for key-down events.
- [NSKeyUpMask](../nskeyupmask.md): Deprecated. A mask for key-up events.
- [NSFlagsChangedMask](../nsflagschangedmask.md): Deprecated. A mask for flags-changed events.
- [NSAppKitDefinedMask](../nsappkitdefinedmask.md): Deprecated. A mask for AppKit-defined events.
- [NSSystemDefinedMask](../nssystemdefinedmask.md): Deprecated. A mask for system-defined events.
- [NSApplicationDefinedMask](../nsapplicationdefinedmask.md): Deprecated. A mask for app-defined events.
- [NSPeriodicMask](../nsperiodicmask.md): Deprecated. A mask for periodic events.
- [NSScrollWheelMask](../nsscrollwheelmask.md): Deprecated. A mask for scroll-wheel events.
- [NSTabletPointMask](../nstabletpointmask.md): Deprecated. A mask for tablet-point events.
- [NSTabletProximityMask](../nstabletproximitymask.md): Deprecated. A mask for tablet-proximity events.
- [NSAnyEventMask](../nsanyeventmask.md): Deprecated. A mask that matches any type of event.

### Enumeration Cases

- [NSEventMaskMouseCancelled](eventtypemask/mousecancelled.md)

## See Also

### Constants

- [NSEventButtonMask](buttonmask-swift.struct.md): Constants you use to identify the activated tablet buttons in an event.
- [NSEventModifierFlags](modifierflags-swift.struct.md): Flags that represent key states in an event object.
- [NSEventPhase](phase-swift.struct.md): Constants that represent the possible phases during an event phase.
- [NSEventSwipeTrackingOptions](swipetrackingoptions.md): Constants that specify swipe-tracking options.
- [NSEventMaskFromType](eventtypemask/init%28type_%29.md): Returns the event mask for the specified type.
