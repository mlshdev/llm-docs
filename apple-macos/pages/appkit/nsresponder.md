> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsresponder](https://developer.apple.com/documentation/appkit/nsresponder)

# NSResponder (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

An abstract class that forms the basis of event and command processing in AppKit.

## Declaration

```swift
@MainActor class NSResponder
```

<a id="overview"></a>

## Overview

The core classes—[NSApplication](nsapplication.md), [NSWindow](nswindow.md), and [NSView](nsview.md)—inherit from [NSResponder](nsresponder.md), as must any class that handles events. The responder model uses three components: event messages, action messages, and the responder chain.

[NSResponder](nsresponder.md) also plays an important role in the presentation of error information. The default implementations of the [presentError(\_:)](nsresponder/presenterror%28__%29.md) and [presentError(\_:modalFor:delegate:didPresent:contextInfo:)](nsresponder/presenterror%28__modalfor_delegate_didpresent_contextinfo_%29.md) methods send [willPresentError(\_:)](nsresponder/willpresenterror%28__%29.md) to `self`, thereby giving subclasses the opportunity to customize the localized information presented in error alerts. `NSResponder` then forwards the message to the next responder, passing it the customized [NSError](https://developer.apple.com/documentation/foundation/nserror) object. The exact path up the modified responder chain depends on the type of application window:

- Window that the document owns: view \> superviews \> window \> window controller \> document object \> document controller \> the application object
- Window with window controller but no documents: view \> superviews \> window \> window controller \> the application object
- Window with no window controllers: view \> superviews \> window \> the application object

[NSApplication](nsapplication.md) displays a document-modal error alert and, if the error object has a recovery attempter, gives it a chance to recover from the error. A recovery attempter is an object that conforms to the [NSErrorRecoveryAttempting](https://developer.apple.com/documentation/foundation/nserrorrecoveryattempting) informal protocol.

> **Note**

>  In macOS 10.15 and later, [NSResponder](nsresponder.md) and its descendants call the [dealloc](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/dealloc) method on the main thread. This method helps to avoid situations where an asynchronous block unexpectedly deallocates an object on a background queue.

## Topics

### Changing the First Responder

- [acceptsFirstResponder](nsresponder/acceptsfirstresponder.md): A Boolean value that indicates whether the responder accepts first responder status.
- [becomeFirstResponder()](nsresponder/becomefirstresponder%28%29.md): Notifies the receiver that it’s about to become first responder in its [NSWindow](nswindow.md).
- [resignFirstResponder()](nsresponder/resignfirstresponder%28%29.md): Notifies the receiver that it’s been asked to relinquish its status as first responder in its window.
- [validateProposedFirstResponder(\_:for:)](nsresponder/validateproposedfirstresponder%28__for_%29.md): Allows controls to determine when they should become first responder.

### Managing the Next Responder

- [nextResponder](nsresponder/nextresponder.md): The next responder after this one, or `nil` if it has none.

### Responding to Mouse Events

- [mouseDown(with:)](nsresponder/mousedown%28with_%29.md): Informs the receiver that the user has pressed the left mouse button.
- [mouseDragged(with:)](nsresponder/mousedragged%28with_%29.md): Informs the receiver that the user has moved the mouse with the left button pressed.
- [mouseUp(with:)](nsresponder/mouseup%28with_%29.md): Informs the receiver that the user has released the left mouse button.
- [mouseMoved(with:)](nsresponder/mousemoved%28with_%29.md): Informs the receiver that the mouse has moved.
- [mouseEntered(with:)](nsresponder/mouseentered%28with_%29.md): Informs the receiver that the cursor has entered a tracking rectangle.
- [mouseExited(with:)](nsresponder/mouseexited%28with_%29.md): Informs the receiver that the cursor has exited a tracking rectangle.
- [rightMouseDown(with:)](nsresponder/rightmousedown%28with_%29.md): Informs the receiver that the user has pressed the right mouse button.
- [rightMouseDragged(with:)](nsresponder/rightmousedragged%28with_%29.md): Informs the receiver that the user has moved the mouse with the right button pressed.
- [rightMouseUp(with:)](nsresponder/rightmouseup%28with_%29.md): Informs the receiver that the user has released the right mouse button.
- [otherMouseDown(with:)](nsresponder/othermousedown%28with_%29.md): Informs the receiver that the user has pressed a mouse button other than the left or right one.
- [otherMouseDragged(with:)](nsresponder/othermousedragged%28with_%29.md): Informs the receiver that the user has moved the mouse with a button other than the left or right button pressed.
- [otherMouseUp(with:)](nsresponder/othermouseup%28with_%29.md): Informs the receiver that the user has released a mouse button other than the left or right button.

### Responding to Key Events

- [keyDown(with:)](nsresponder/keydown%28with_%29.md): Informs the receiver that the user has pressed a key.
- [keyUp(with:)](nsresponder/keyup%28with_%29.md): Informs the receiver that the user has released a key.
- [interpretKeyEvents(\_:)](nsresponder/interpretkeyevents%28__%29.md): Handles a series of key events.
- [performKeyEquivalent(with:)](nsresponder/performkeyequivalent%28with_%29.md): Handle a key equivalent.
- [flushBufferedKeyEvents()](nsresponder/flushbufferedkeyevents%28%29.md): Clears any unprocessed key events when overridden by subclasses.

### Responding to Pressure Changes

- [pressureChange(with:)](nsresponder/pressurechange%28with_%29.md): Indicates a pressure change as the result of a user input event on a system that supports pressure sensitivity.

### Responding to Other Kinds of Events

- [cursorUpdate(with:)](nsresponder/cursorupdate%28with_%29.md): Informs the receiver that the mouse cursor has moved into a cursor rectangle.
- [flagsChanged(with:)](nsresponder/flagschanged%28with_%29.md): Informs the receiver that the user has pressed or released a modifier key (Shift, Control, and so on).
- [tabletPoint(with:)](nsresponder/tabletpoint%28with_%29.md): Informs the receiver that a tablet-point event has occurred.
- [tabletProximity(with:)](nsresponder/tabletproximity%28with_%29.md): Informs the receiver that a tablet-proximity event has occurred.
- [helpRequested(\_:)](nsresponder/helprequested%28__%29.md): Displays context-sensitive help for the receiver if help has been registered.
- [scrollWheel(with:)](nsresponder/scrollwheel%28with_%29.md): Informs the receiver that the mouse’s scroll wheel has moved.
- [quickLook(with:)](nsresponder/quicklook%28with_%29.md): Performs a Quick Look on the content at the location specified by the supplied event.
- [changeMode(with:)](nsresponder/changemode%28with_%29.md): Informs the responder that performed a double-tap on the side of an Apple Pencil.

### Responding to Action Messages

- [supplementalTarget(forAction:sender:)](nsresponder/supplementaltarget%28foraction_sender_%29.md): Finds a target for an action method.
- [NSStandardKeyBindingResponding](nsstandardkeybindingresponding.md): Methods that responder subclasses implement to support key binding commands, such as inserting tabs and newlines, or moving the insertion point.
- [Action Messages](action-messages.md): Implement action messages in your first responders to handle common tasks.

### Handling Window Restoration

- [allowedClasses(forRestorableStateKeyPath:)](nsresponder/allowedclasses%28forrestorablestatekeypath_%29.md): Returns the classes that support secure coding.
- [encodeRestorableState(with:)](nsresponder/encoderestorablestate%28with_%29.md): Saves the interface-related state of the responder.
- [encodeRestorableState(with:backgroundQueue:)](nsresponder/encoderestorablestate%28with_backgroundqueue_%29.md): Saves the interface-related state of the responder to a keyed archiver either synchronously or asynchronously on the given operation queue.
- [restoreState(with:)](nsresponder/restorestate%28with_%29.md): Restores the interface-related state of the responder.
- [restorableStateKeyPaths](nsresponder/restorablestatekeypaths.md): Returns an array of key paths representing the restorable attributes of the responder.
- [invalidateRestorableState()](nsresponder/invalidaterestorablestate%28%29.md): Marks the responder’s interface-related state as dirty.

### Supporting User Activities

- [userActivity](nsresponder/useractivity.md): An object encapsulating a user activity supported by this responder.
- [updateUserActivityState(\_:)](nsresponder/updateuseractivitystate%28__%29.md): Updates the state of the given user activity.

### Presenting and Customizing Error Information

- [presentError(\_:)](nsresponder/presenterror%28__%29.md): Presents an error alert to the user as an application-modal dialog.
- [presentError(\_:modalFor:delegate:didPresent:contextInfo:)](nsresponder/presenterror%28__modalfor_delegate_didpresent_contextinfo_%29.md): Presents an error alert to the user as a document-modal sheet attached to document window.
- [willPresentError(\_:)](nsresponder/willpresenterror%28__%29.md): Returns a custom version of the supplied error object that’s more suitable for presentation in alert sheets and dialogs.

### Dispatching Messages

- [tryToPerform(\_:with:)](nsresponder/trytoperform%28__with_%29.md): Attempts to perform the method indicated by an action with a specified argument.

### Managing a Responder’s Menu

- [menu](nsresponder/menu.md): Returns the responder’s menu.

### Updating the Services Menu

- [validRequestor(forSendType:returnType:)](nsresponder/validrequestor%28forsendtype_returntype_%29.md): Overridden by subclasses to determine what services are available.

### Getting the Undo Manager

- [undoManager](nsresponder/undomanager.md): The undo manager for this responder.

### Testing Events

- [shouldBeTreatedAsInkEvent(\_:)](nsresponder/shouldbetreatedasinkevent%28__%29.md): Indicates whether a pen-down event should be treated as an ink event.

### Terminating the Responder Chain

- [noResponder(for:)](nsresponder/noresponder%28for_%29.md): Handles the case where an event or action message falls off the end of the responder chain.

### Touch and Gesture Events

- [beginGesture(with:)](nsresponder/begingesture%28with_%29.md): Deprecated. Informs the receiver that the user has begun a touch gesture.
- [endGesture(with:)](nsresponder/endgesture%28with_%29.md): Deprecated. Informs the receiver that the user has ended a touch gesture.
- [magnify(with:)](nsresponder/magnify%28with_%29.md): Informs the receiver that the user has begun a pinch gesture.
- [rotate(with:)](nsresponder/rotate%28with_%29.md): Informs the receiver that the user has begun a rotation gesture.
- [swipe(with:)](nsresponder/swipe%28with_%29.md): Informs the receiver that the user has begun a swipe gesture.
- [touchesBegan(with:)](nsresponder/touchesbegan%28with_%29.md): Informs the receiver that new set of touches has been recognized.
- [touchesMoved(with:)](nsresponder/touchesmoved%28with_%29.md): Informs the receiver that one or more touches has moved.
- [touchesCancelled(with:)](nsresponder/touchescancelled%28with_%29.md): Informs the receiver that tracking of touches has been cancelled for any reason.
- [touchesEnded(with:)](nsresponder/touchesended%28with_%29.md): Returns that a set of touches have been removed.
- [wantsForwardedScrollEvents(for:)](nsresponder/wantsforwardedscrollevents%28for_%29.md): Returns whether to forward elastic scrolling gesture events up the responder.
- [smartMagnify(with:)](nsresponder/smartmagnify%28with_%29.md): Informs the receiver that the user performed a smart zoom gesture.
- [wantsScrollEventsForSwipeTracking(on:)](nsresponder/wantsscrolleventsforswipetracking%28on_%29.md): Implement this method to track gesture scroll events such as a swipe.
- [NSEvent.GestureAxis](nsevent/gestureaxis.md): Constants that specify the direction of travel for a gesture.

### Supporting the Touch Bar

- [touchBar](nsresponder/touchbar.md): The [NSTouchBar](nstouchbar.md) object associated with the responder.
- [makeTouchBar()](nsresponder/maketouchbar%28%29.md): Your custom subclass of the `NSResponder` class should override this method to create and configure your subclass’s default [NSTouchBar](nstouchbar.md) object.

### Performing Text Find Actions

- [performTextFinderAction(\_:)](nsresponder/performtextfinderaction%28__%29.md): Performs all find oriented actions.

### Supporting Tabbed Windows

- [newWindowForTab(\_:)](nsresponder/newwindowfortab%28__%29.md): Creates a new window to show as a tab in a tabbed window.

### Creating Responders

- [init()](nsresponder/init%28%29.md): Creates a new responder object.
- [init(coder:)](nsresponder/init%28coder_%29.md): Creates a new responder object with data in an unarchiver.

### Instance Methods

- [contextMenuKeyDown(\_:)](nsresponder/contextmenukeydown%28__%29.md)
- [mouseCancelled(with:)](nsresponder/mousecancelled%28with_%29.md)
- [showWritingTools(\_:)](nsresponder/showwritingtools%28__%29.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [NSApplication](nsapplication.md)
- [NSDrawer](nsdrawer.md)
- [NSPopover](nspopover.md)
- [NSView](nsview.md)
- [NSViewController](nsviewcontroller.md)
- [NSWindow](nswindow.md)
- [NSWindowController](nswindowcontroller.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSStandardKeyBindingResponding](nsstandardkeybindingresponding.md)
- [NSTouchBarProvider](nstouchbarprovider.md)
- [NSUserActivityRestoring](nsuseractivityrestoring.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

# NSResponder (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

An abstract class that forms the basis of event and command processing in AppKit.

## Declaration

```objectivec
@interface NSResponder : NSObject
```

<a id="overview"></a>

## Overview

The core classes—[NSApplication](nsapplication.md), [NSWindow](nswindow.md), and [NSView](nsview.md)—inherit from [NSResponder](nsresponder.md), as must any class that handles events. The responder model uses three components: event messages, action messages, and the responder chain.

[NSResponder](nsresponder.md) also plays an important role in the presentation of error information. The default implementations of the [presentError:](nsresponder/presenterror%28__%29.md) and [presentError:modalForWindow:delegate:didPresentSelector:contextInfo:](nsresponder/presenterror%28__modalfor_delegate_didpresent_contextinfo_%29.md) methods send [willPresentError:](nsresponder/willpresenterror%28__%29.md) to `self`, thereby giving subclasses the opportunity to customize the localized information presented in error alerts. `NSResponder` then forwards the message to the next responder, passing it the customized [NSError](https://developer.apple.com/documentation/foundation/nserror) object. The exact path up the modified responder chain depends on the type of application window:

- Window that the document owns: view \> superviews \> window \> window controller \> document object \> document controller \> the application object
- Window with window controller but no documents: view \> superviews \> window \> window controller \> the application object
- Window with no window controllers: view \> superviews \> window \> the application object

[NSApplication](nsapplication.md) displays a document-modal error alert and, if the error object has a recovery attempter, gives it a chance to recover from the error. A recovery attempter is an object that conforms to the [NSErrorRecoveryAttempting](https://developer.apple.com/documentation/foundation/nserrorrecoveryattempting) informal protocol.

> **Note**

>  In macOS 10.15 and later, [NSResponder](nsresponder.md) and its descendants call the [dealloc](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/dealloc) method on the main thread. This method helps to avoid situations where an asynchronous block unexpectedly deallocates an object on a background queue.

## Topics

### Changing the First Responder

- [acceptsFirstResponder](nsresponder/acceptsfirstresponder.md): A Boolean value that indicates whether the responder accepts first responder status.
- [becomeFirstResponder](nsresponder/becomefirstresponder%28%29.md): Notifies the receiver that it’s about to become first responder in its [NSWindow](nswindow.md).
- [resignFirstResponder](nsresponder/resignfirstresponder%28%29.md): Notifies the receiver that it’s been asked to relinquish its status as first responder in its window.
- [validateProposedFirstResponder:forEvent:](nsresponder/validateproposedfirstresponder%28__for_%29.md): Allows controls to determine when they should become first responder.

### Managing the Next Responder

- [nextResponder](nsresponder/nextresponder.md): The next responder after this one, or `nil` if it has none.

### Responding to Mouse Events

- [mouseDown:](nsresponder/mousedown%28with_%29.md): Informs the receiver that the user has pressed the left mouse button.
- [mouseDragged:](nsresponder/mousedragged%28with_%29.md): Informs the receiver that the user has moved the mouse with the left button pressed.
- [mouseUp:](nsresponder/mouseup%28with_%29.md): Informs the receiver that the user has released the left mouse button.
- [mouseMoved:](nsresponder/mousemoved%28with_%29.md): Informs the receiver that the mouse has moved.
- [mouseEntered:](nsresponder/mouseentered%28with_%29.md): Informs the receiver that the cursor has entered a tracking rectangle.
- [mouseExited:](nsresponder/mouseexited%28with_%29.md): Informs the receiver that the cursor has exited a tracking rectangle.
- [rightMouseDown:](nsresponder/rightmousedown%28with_%29.md): Informs the receiver that the user has pressed the right mouse button.
- [rightMouseDragged:](nsresponder/rightmousedragged%28with_%29.md): Informs the receiver that the user has moved the mouse with the right button pressed.
- [rightMouseUp:](nsresponder/rightmouseup%28with_%29.md): Informs the receiver that the user has released the right mouse button.
- [otherMouseDown:](nsresponder/othermousedown%28with_%29.md): Informs the receiver that the user has pressed a mouse button other than the left or right one.
- [otherMouseDragged:](nsresponder/othermousedragged%28with_%29.md): Informs the receiver that the user has moved the mouse with a button other than the left or right button pressed.
- [otherMouseUp:](nsresponder/othermouseup%28with_%29.md): Informs the receiver that the user has released a mouse button other than the left or right button.

### Responding to Key Events

- [keyDown:](nsresponder/keydown%28with_%29.md): Informs the receiver that the user has pressed a key.
- [keyUp:](nsresponder/keyup%28with_%29.md): Informs the receiver that the user has released a key.
- [interpretKeyEvents:](nsresponder/interpretkeyevents%28__%29.md): Handles a series of key events.
- [performKeyEquivalent:](nsresponder/performkeyequivalent%28with_%29.md): Handle a key equivalent.
- [performMnemonic:](nsresponder/performmnemonic_.md): Deprecated. Handle a mnemonic.
- [flushBufferedKeyEvents](nsresponder/flushbufferedkeyevents%28%29.md): Clears any unprocessed key events when overridden by subclasses.

### Responding to Pressure Changes

- [pressureChangeWithEvent:](nsresponder/pressurechange%28with_%29.md): Indicates a pressure change as the result of a user input event on a system that supports pressure sensitivity.

### Responding to Other Kinds of Events

- [cursorUpdate:](nsresponder/cursorupdate%28with_%29.md): Informs the receiver that the mouse cursor has moved into a cursor rectangle.
- [flagsChanged:](nsresponder/flagschanged%28with_%29.md): Informs the receiver that the user has pressed or released a modifier key (Shift, Control, and so on).
- [tabletPoint:](nsresponder/tabletpoint%28with_%29.md): Informs the receiver that a tablet-point event has occurred.
- [tabletProximity:](nsresponder/tabletproximity%28with_%29.md): Informs the receiver that a tablet-proximity event has occurred.
- [helpRequested:](nsresponder/helprequested%28__%29.md): Displays context-sensitive help for the receiver if help has been registered.
- [scrollWheel:](nsresponder/scrollwheel%28with_%29.md): Informs the receiver that the mouse’s scroll wheel has moved.
- [quickLookWithEvent:](nsresponder/quicklook%28with_%29.md): Performs a Quick Look on the content at the location specified by the supplied event.
- [changeModeWithEvent:](nsresponder/changemode%28with_%29.md): Informs the responder that performed a double-tap on the side of an Apple Pencil.

### Responding to Action Messages

- [supplementalTargetForAction:sender:](nsresponder/supplementaltarget%28foraction_sender_%29.md): Finds a target for an action method.
- [NSStandardKeyBindingResponding](nsstandardkeybindingresponding.md): Methods that responder subclasses implement to support key binding commands, such as inserting tabs and newlines, or moving the insertion point.
- [Action Messages](action-messages.md): Implement action messages in your first responders to handle common tasks.

### Handling Window Restoration

- [allowedClassesForRestorableStateKeyPath:](nsresponder/allowedclasses%28forrestorablestatekeypath_%29.md): Returns the classes that support secure coding.
- [encodeRestorableStateWithCoder:](nsresponder/encoderestorablestate%28with_%29.md): Saves the interface-related state of the responder.
- [encodeRestorableStateWithCoder:backgroundQueue:](nsresponder/encoderestorablestate%28with_backgroundqueue_%29.md): Saves the interface-related state of the responder to a keyed archiver either synchronously or asynchronously on the given operation queue.
- [restoreStateWithCoder:](nsresponder/restorestate%28with_%29.md): Restores the interface-related state of the responder.
- [restorableStateKeyPaths](nsresponder/restorablestatekeypaths.md): Returns an array of key paths representing the restorable attributes of the responder.
- [invalidateRestorableState](nsresponder/invalidaterestorablestate%28%29.md): Marks the responder’s interface-related state as dirty.

### Supporting User Activities

- [userActivity](nsresponder/useractivity.md): An object encapsulating a user activity supported by this responder.
- [updateUserActivityState:](nsresponder/updateuseractivitystate%28__%29.md): Updates the state of the given user activity.

### Presenting and Customizing Error Information

- [presentError:](nsresponder/presenterror%28__%29.md): Presents an error alert to the user as an application-modal dialog.
- [presentError:modalForWindow:delegate:didPresentSelector:contextInfo:](nsresponder/presenterror%28__modalfor_delegate_didpresent_contextinfo_%29.md): Presents an error alert to the user as a document-modal sheet attached to document window.
- [willPresentError:](nsresponder/willpresenterror%28__%29.md): Returns a custom version of the supplied error object that’s more suitable for presentation in alert sheets and dialogs.

### Dispatching Messages

- [tryToPerform:with:](nsresponder/trytoperform%28__with_%29.md): Attempts to perform the method indicated by an action with a specified argument.

### Managing a Responder’s Menu

- [menu](nsresponder/menu.md): Returns the responder’s menu.

### Updating the Services Menu

- [validRequestorForSendType:returnType:](nsresponder/validrequestor%28forsendtype_returntype_%29.md): Overridden by subclasses to determine what services are available.

### Getting the Undo Manager

- [undoManager](nsresponder/undomanager.md): The undo manager for this responder.

### Testing Events

- [shouldBeTreatedAsInkEvent:](nsresponder/shouldbetreatedasinkevent%28__%29.md): Indicates whether a pen-down event should be treated as an ink event.

### Terminating the Responder Chain

- [noResponderFor:](nsresponder/noresponder%28for_%29.md): Handles the case where an event or action message falls off the end of the responder chain.

### Setting the Interface Style

- [setInterfaceStyle:](nsresponder/setinterfacestyle_.md): Deprecated. Sets the receiver’s style to the style specified by `interfaceStyle`, such as `NSMacintoshInterfaceStyle` or `NSWindows95InterfaceStyle`.
- [interfaceStyle](nsresponder/interfacestyle.md): Deprecated. Returns the receiver’s interface style.
- [NSInterfaceStyleDefault](nsinterfacestyledefault.md): Deprecated. For more information, see the function [NSInterfaceStyleForKey](nsinterfacestyleforkey.md).

### Touch and Gesture Events

- [beginGestureWithEvent:](nsresponder/begingesture%28with_%29.md): Deprecated. Informs the receiver that the user has begun a touch gesture.
- [endGestureWithEvent:](nsresponder/endgesture%28with_%29.md): Deprecated. Informs the receiver that the user has ended a touch gesture.
- [magnifyWithEvent:](nsresponder/magnify%28with_%29.md): Informs the receiver that the user has begun a pinch gesture.
- [rotateWithEvent:](nsresponder/rotate%28with_%29.md): Informs the receiver that the user has begun a rotation gesture.
- [swipeWithEvent:](nsresponder/swipe%28with_%29.md): Informs the receiver that the user has begun a swipe gesture.
- [touchesBeganWithEvent:](nsresponder/touchesbegan%28with_%29.md): Informs the receiver that new set of touches has been recognized.
- [touchesMovedWithEvent:](nsresponder/touchesmoved%28with_%29.md): Informs the receiver that one or more touches has moved.
- [touchesCancelledWithEvent:](nsresponder/touchescancelled%28with_%29.md): Informs the receiver that tracking of touches has been cancelled for any reason.
- [touchesEndedWithEvent:](nsresponder/touchesended%28with_%29.md): Returns that a set of touches have been removed.
- [wantsForwardedScrollEventsForAxis:](nsresponder/wantsforwardedscrollevents%28for_%29.md): Returns whether to forward elastic scrolling gesture events up the responder.
- [smartMagnifyWithEvent:](nsresponder/smartmagnify%28with_%29.md): Informs the receiver that the user performed a smart zoom gesture.
- [wantsScrollEventsForSwipeTrackingOnAxis:](nsresponder/wantsscrolleventsforswipetracking%28on_%29.md): Implement this method to track gesture scroll events such as a swipe.
- [NSEventGestureAxis](nsevent/gestureaxis.md): Constants that specify the direction of travel for a gesture.

### Supporting the Touch Bar

- [touchBar](nsresponder/touchbar.md): The [NSTouchBar](nstouchbar.md) object associated with the responder.
- [makeTouchBar](nsresponder/maketouchbar%28%29.md): Your custom subclass of the `NSResponder` class should override this method to create and configure your subclass’s default [NSTouchBar](nstouchbar.md) object.

### Performing Text Find Actions

- [performTextFinderAction:](nsresponder/performtextfinderaction%28__%29.md): Performs all find oriented actions.

### Supporting Tabbed Windows

- [newWindowForTab:](nsresponder/newwindowfortab%28__%29.md): Creates a new window to show as a tab in a tabbed window.

### Creating Responders

- [init](nsresponder/init%28%29.md): Creates a new responder object.
- [initWithCoder:](nsresponder/init%28coder_%29.md): Creates a new responder object with data in an unarchiver.

### Instance Methods

- [contextMenuKeyDown:](nsresponder/contextmenukeydown%28__%29.md)
- [mouseCancelled:](nsresponder/mousecancelled%28with_%29.md)
- [showWritingTools:](nsresponder/showwritingtools%28__%29.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [NSApplication](nsapplication.md)
- [NSDrawer](nsdrawer.md)
- [NSPopover](nspopover.md)
- [NSView](nsview.md)
- [NSViewController](nsviewcontroller.md)
- [NSWindow](nswindow.md)
- [NSWindowController](nswindowcontroller.md)

### Conforms To

- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSStandardKeyBindingResponding](nsstandardkeybindingresponding.md)
- [NSTouchBarProvider](nstouchbarprovider.md)
- [NSUserActivityRestoring](nsuseractivityrestoring.md)
