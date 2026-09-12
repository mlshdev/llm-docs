> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsappleeventmanager](https://developer.apple.com/documentation/foundation/nsappleeventmanager)

# NSAppleEventManager (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A mechanism for registering handler routines for specific types of Apple events and dispatching events to those handlers.

## Declaration

```swift
class NSAppleEventManager
```

<a id="overview"></a>

## Overview

Cocoa provides built-in scriptability support that uses scriptability information supplied by an application to automatically convert Apple events into script command objects that perform the desired operation. However, some applications may want to perform more basic Apple event handling, in which an application registers handlers for the Apple events it can process, then calls on the Apple Event Manager to dispatch received Apple events to the appropriate handler. `NSAppleEventManager` supports these mechanisms by providing methods to register and remove handlers and to dispatch Apple events to the appropriate handler, if one exists. For related information, see [How Cocoa Applications Handle Apple Events](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ScriptableCocoaApplications/SApps_handle_AEs/SAppsHandleAEs.html#//apple_ref/doc/uid/20001239)

Each application has at most one instance of `NSAppleEventManager`. To obtain a reference to it, you call the class method [shared()](nsappleeventmanager/shared%28%29.md), which creates the instance if it doesn’t already exist.

For information about the Apple Event Manager, see [Apple Event Manager](https://developer.apple.com/documentation/applicationservices/apple_event_manager) and Apple Events Programming Guide.

## Topics

### Getting an event manager

- [shared()](nsappleeventmanager/shared%28%29.md): Returns the single instance of `NSAppleEventManager`, creating it first if it doesn’t exist.

### Working with event handlers

- [removeEventHandler(forEventClass:andEventID:)](nsappleeventmanager/removeeventhandler%28foreventclass_andeventid_%29.md): If an Apple event handler has been registered for the event specified by `eventClass` and `eventID`, removes it.
- [setEventHandler(\_:andSelector:forEventClass:andEventID:)](nsappleeventmanager/seteventhandler%28__andselector_foreventclass_andeventid_%29.md): Registers the Apple event handler specified by `handler` for the event specified by `eventClass` and `eventID`.

### Working with events

- [dispatchRawAppleEvent(\_:withRawReply:handlerRefCon:)](nsappleeventmanager/dispatchrawappleevent%28__withrawreply_handlerrefcon_%29.md): Causes the Apple event specified by `theAppleEvent` to be dispatched to the appropriate Apple event handler, if one has been registered by calling [setEventHandler(\_:andSelector:forEventClass:andEventID:)](nsappleeventmanager/seteventhandler%28__andselector_foreventclass_andeventid_%29.md).

### Suspending and resuming Apple events

- [appleEvent(forSuspensionID:)](nsappleeventmanager/appleevent%28forsuspensionid_%29.md): Given a nonzero `suspensionID` returned by an invocation of [suspendCurrentAppleEvent()](nsappleeventmanager/suspendcurrentappleevent%28%29.md), returns the descriptor for the event whose handling was suspended.
- [currentAppleEvent](nsappleeventmanager/currentappleevent.md): Returns the descriptor for `currentAppleEvent` if an Apple event is being handled on the current thread.
- [currentReplyAppleEvent](nsappleeventmanager/currentreplyappleevent.md): Returns the corresponding reply event descriptor if an Apple event is being handled on the current thread.
- [replyAppleEvent(forSuspensionID:)](nsappleeventmanager/replyappleevent%28forsuspensionid_%29.md): Given a nonzero `suspensionID` returned by an invocation of [suspendCurrentAppleEvent()](nsappleeventmanager/suspendcurrentappleevent%28%29.md), returns the corresponding reply event descriptor.
- [resume(withSuspensionID:)](nsappleeventmanager/resume%28withsuspensionid_%29.md): Given a nonzero `suspensionID` returned by an invocation of [suspendCurrentAppleEvent()](nsappleeventmanager/suspendcurrentappleevent%28%29.md), signal that handling of the suspended event may now continue.
- [setCurrentAppleEventAndReplyEventWithSuspensionID(\_:)](nsappleeventmanager/setcurrentappleeventandreplyeventwithsuspensionid%28__%29.md): Given a nonzero `suspensionID` returned by an invocation of [suspendCurrentAppleEvent()](nsappleeventmanager/suspendcurrentappleevent%28%29.md), sets the values that will be returned by subsequent invocations of [currentAppleEvent](nsappleeventmanager/currentappleevent.md) and [currentReplyAppleEvent](nsappleeventmanager/currentreplyappleevent.md) to be the event whose handling was suspended and its corresponding reply event, respectively.
- [suspendCurrentAppleEvent()](nsappleeventmanager/suspendcurrentappleevent%28%29.md): Suspends the handling of the current event and returns an ID that must be used to resume the handling of the event if an Apple event is being handled on the current thread.
- [NSAppleEventManager.SuspensionID](nsappleeventmanager/suspensionid.md): Identifies an Apple event whose handling has been suspended. Can be used to resume handling of the Apple event.

### Constants

- [NSAppleEvent Timeouts](nsappleevent-timeouts.md): The following constants should not be used and may eventually be removed.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Apple Event Handling

- [NSAppleEventDescriptor](nsappleeventdescriptor.md): A wrapper for the Apple event descriptor data type.

# NSAppleEventManager (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A mechanism for registering handler routines for specific types of Apple events and dispatching events to those handlers.

## Declaration

```objectivec
@interface NSAppleEventManager : NSObject
```

<a id="overview"></a>

## Overview

Cocoa provides built-in scriptability support that uses scriptability information supplied by an application to automatically convert Apple events into script command objects that perform the desired operation. However, some applications may want to perform more basic Apple event handling, in which an application registers handlers for the Apple events it can process, then calls on the Apple Event Manager to dispatch received Apple events to the appropriate handler. `NSAppleEventManager` supports these mechanisms by providing methods to register and remove handlers and to dispatch Apple events to the appropriate handler, if one exists. For related information, see [How Cocoa Applications Handle Apple Events](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ScriptableCocoaApplications/SApps_handle_AEs/SAppsHandleAEs.html#//apple_ref/doc/uid/20001239)

Each application has at most one instance of `NSAppleEventManager`. To obtain a reference to it, you call the class method [sharedAppleEventManager](nsappleeventmanager/shared%28%29.md), which creates the instance if it doesn’t already exist.

For information about the Apple Event Manager, see [Apple Event Manager](https://developer.apple.com/documentation/applicationservices/apple_event_manager) and Apple Events Programming Guide.

## Topics

### Getting an event manager

- [sharedAppleEventManager](nsappleeventmanager/shared%28%29.md): Returns the single instance of `NSAppleEventManager`, creating it first if it doesn’t exist.

### Working with event handlers

- [removeEventHandlerForEventClass:andEventID:](nsappleeventmanager/removeeventhandler%28foreventclass_andeventid_%29.md): If an Apple event handler has been registered for the event specified by `eventClass` and `eventID`, removes it.
- [setEventHandler:andSelector:forEventClass:andEventID:](nsappleeventmanager/seteventhandler%28__andselector_foreventclass_andeventid_%29.md): Registers the Apple event handler specified by `handler` for the event specified by `eventClass` and `eventID`.

### Working with events

- [dispatchRawAppleEvent:withRawReply:handlerRefCon:](nsappleeventmanager/dispatchrawappleevent%28__withrawreply_handlerrefcon_%29.md): Causes the Apple event specified by `theAppleEvent` to be dispatched to the appropriate Apple event handler, if one has been registered by calling [setEventHandler:andSelector:forEventClass:andEventID:](nsappleeventmanager/seteventhandler%28__andselector_foreventclass_andeventid_%29.md).

### Suspending and resuming Apple events

- [appleEventForSuspensionID:](nsappleeventmanager/appleevent%28forsuspensionid_%29.md): Given a nonzero `suspensionID` returned by an invocation of [suspendCurrentAppleEvent](nsappleeventmanager/suspendcurrentappleevent%28%29.md), returns the descriptor for the event whose handling was suspended.
- [currentAppleEvent](nsappleeventmanager/currentappleevent.md): Returns the descriptor for `currentAppleEvent` if an Apple event is being handled on the current thread.
- [currentReplyAppleEvent](nsappleeventmanager/currentreplyappleevent.md): Returns the corresponding reply event descriptor if an Apple event is being handled on the current thread.
- [replyAppleEventForSuspensionID:](nsappleeventmanager/replyappleevent%28forsuspensionid_%29.md): Given a nonzero `suspensionID` returned by an invocation of [suspendCurrentAppleEvent](nsappleeventmanager/suspendcurrentappleevent%28%29.md), returns the corresponding reply event descriptor.
- [resumeWithSuspensionID:](nsappleeventmanager/resume%28withsuspensionid_%29.md): Given a nonzero `suspensionID` returned by an invocation of [suspendCurrentAppleEvent](nsappleeventmanager/suspendcurrentappleevent%28%29.md), signal that handling of the suspended event may now continue.
- [setCurrentAppleEventAndReplyEventWithSuspensionID:](nsappleeventmanager/setcurrentappleeventandreplyeventwithsuspensionid%28__%29.md): Given a nonzero `suspensionID` returned by an invocation of [suspendCurrentAppleEvent](nsappleeventmanager/suspendcurrentappleevent%28%29.md), sets the values that will be returned by subsequent invocations of [currentAppleEvent](nsappleeventmanager/currentappleevent.md) and [currentReplyAppleEvent](nsappleeventmanager/currentreplyappleevent.md) to be the event whose handling was suspended and its corresponding reply event, respectively.
- [suspendCurrentAppleEvent](nsappleeventmanager/suspendcurrentappleevent%28%29.md): Suspends the handling of the current event and returns an ID that must be used to resume the handling of the event if an Apple event is being handled on the current thread.
- [NSAppleEventManagerSuspensionID](nsappleeventmanager/suspensionid.md): Identifies an Apple event whose handling has been suspended. Can be used to resume handling of the Apple event.

### Constants

- [NSAppleEvent Timeouts](nsappleevent-timeouts.md): The following constants should not be used and may eventually be removed.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Apple Event Handling

- [NSAppleEventDescriptor](nsappleeventdescriptor.md): A wrapper for the Apple event descriptor data type.
