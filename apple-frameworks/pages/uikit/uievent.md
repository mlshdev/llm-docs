> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uievent](https://developer.apple.com/documentation/uikit/uievent)

# UIEvent (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

An object that describes a single user interaction with your app.

## Declaration

```swift
@MainActor class UIEvent
```

## Mentioned In

- [Responding to control-based events using target-action](responding-to-control-based-events-using-target-action.md)

<a id="overview"></a>

## Overview

Apps can receive many different types of events, including touch events, motion events, remote-control events, and press events. Touch events are the most common and are delivered to the view in which the touch originally occurred. Motion events are UIKit triggered and are separate from the motion events reported by the Core Motion framework. Remote-control events allow a responder object to receive commands from an external accessory or headset so that it can manage audio and video — for example, playing a video or skipping to the next audio track. Press events represent interactions with a game controller, Apple TV remote, or other device that has physical buttons. You can determine the type of an event using the [type](uievent/type.md) and [subtype](uievent/subtype.md) properties.

A touch event object contains the touches (that is, the fingers on the screen) that have some relation to the event. A touch event object may contain one or more touches, and each touch is represented by a [UITouch](uitouch.md) object. When a touch event occurs, the system routes it to the appropriate responder and calls the appropriate method, such as [touchesBegan(\_:with:)](uiresponder/touchesbegan%28__with_%29.md). The responder then uses the touches to determine an appropriate course of action.

During a multitouch sequence, UIKit reuses the same [UIEvent](uievent.md) object when delivering updated touch data to your app. You should never retain an event object or any object returned from an event object. If you need to retain data outside of the responder method you use to process that data, copy that data from the [UITouch](uitouch.md) or [UIEvent](uievent.md) object to your local data structures.

For more information on how to handle events in your UIKit app, see [Event Handling Guide for UIKit Apps](https://developer.apple.com/library/archive/documentation/EventHandling/Conceptual/EventHandlingiPhoneOS/index.html#//apple_ref/doc/uid/TP40009541).

## Topics

### Getting the touches for an event

- [allTouches](uievent/alltouches.md): All touches associated with the event.
- [touches(for:)](uievent/touches%28for_%29-9neb4.md): Returns the touch objects from the event that belong to the specified given view.
- [touches(for:)](uievent/touches%28for_%29-767rm.md): Returns the touch objects from the event that belong to the specified window.
- [coalescedTouches(for:)](uievent/coalescedtouches%28for_%29.md): Returns all of the touches associated with the specified main touch.
- [predictedTouches(for:)](uievent/predictedtouches%28for_%29.md): Returns an array of touches that are predicted to occur for the specified touch.

### Getting event attributes

- [timestamp](uievent/timestamp.md): The time when the event occurred.

### Getting the event type

- [type](uievent/type.md): Returns the type of the event.
- [UIEvent.EventType](uievent/eventtype.md): Constants that specify the general type of an event.
- [subtype](uievent/subtype.md): Returns the subtype of the event.
- [UIEvent.EventSubtype](uievent/eventsubtype.md): Constants that specify the subtype of the event in relation to its general type.

### Getting the touches for a gesture recognizer

- [touches(for:)](uievent/touches%28for_%29-6krou.md): Returns the touch objects that are being delivered to the specified gesture recognizer.

### Getting the button mask

- [buttonMask](uievent/buttonmask-swift.property.md): A bit mask that represents which input-device buttons are pressed for the current event.
- [UIEvent.ButtonMask](uievent/buttonmask-swift.struct.md): Constants that indicate which input-device buttons are pressed.

### Getting the modifier flags

- [modifierFlags](uievent/modifierflags.md): The set of modifier keys that are pressed for the current event.
- [UIKeyModifierFlags](uikeymodifierflags.md): Constants that indicate which modifier keys are pressed.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [UIPressesEvent](uipressesevent.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Essentials

- [Using responders and the responder chain to handle events](using-responders-and-the-responder-chain-to-handle-events.md): Learn how to handle events that propagate through your app.
- [UIResponder](uiresponder.md): An abstract interface for responding to and handling events.

# UIEvent (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

An object that describes a single user interaction with your app.

## Declaration

```objectivec
@interface UIEvent : NSObject
```

## Mentioned In

- [Responding to control-based events using target-action](responding-to-control-based-events-using-target-action.md)

<a id="overview"></a>

## Overview

Apps can receive many different types of events, including touch events, motion events, remote-control events, and press events. Touch events are the most common and are delivered to the view in which the touch originally occurred. Motion events are UIKit triggered and are separate from the motion events reported by the Core Motion framework. Remote-control events allow a responder object to receive commands from an external accessory or headset so that it can manage audio and video — for example, playing a video or skipping to the next audio track. Press events represent interactions with a game controller, Apple TV remote, or other device that has physical buttons. You can determine the type of an event using the [type](uievent/type.md) and [subtype](uievent/subtype.md) properties.

A touch event object contains the touches (that is, the fingers on the screen) that have some relation to the event. A touch event object may contain one or more touches, and each touch is represented by a [UITouch](uitouch.md) object. When a touch event occurs, the system routes it to the appropriate responder and calls the appropriate method, such as [touchesBegan:withEvent:](uiresponder/touchesbegan%28__with_%29.md). The responder then uses the touches to determine an appropriate course of action.

During a multitouch sequence, UIKit reuses the same [UIEvent](uievent.md) object when delivering updated touch data to your app. You should never retain an event object or any object returned from an event object. If you need to retain data outside of the responder method you use to process that data, copy that data from the [UITouch](uitouch.md) or [UIEvent](uievent.md) object to your local data structures.

For more information on how to handle events in your UIKit app, see [Event Handling Guide for UIKit Apps](https://developer.apple.com/library/archive/documentation/EventHandling/Conceptual/EventHandlingiPhoneOS/index.html#//apple_ref/doc/uid/TP40009541).

## Topics

### Getting the touches for an event

- [allTouches](uievent/alltouches.md): All touches associated with the event.
- [touchesForView:](uievent/touches%28for_%29-9neb4.md): Returns the touch objects from the event that belong to the specified given view.
- [touchesForWindow:](uievent/touches%28for_%29-767rm.md): Returns the touch objects from the event that belong to the specified window.
- [coalescedTouchesForTouch:](uievent/coalescedtouches%28for_%29.md): Returns all of the touches associated with the specified main touch.
- [predictedTouchesForTouch:](uievent/predictedtouches%28for_%29.md): Returns an array of touches that are predicted to occur for the specified touch.

### Getting event attributes

- [timestamp](uievent/timestamp.md): The time when the event occurred.

### Getting the event type

- [type](uievent/type.md): Returns the type of the event.
- [UIEventType](uievent/eventtype.md): Constants that specify the general type of an event.
- [subtype](uievent/subtype.md): Returns the subtype of the event.
- [UIEventSubtype](uievent/eventsubtype.md): Constants that specify the subtype of the event in relation to its general type.

### Getting the touches for a gesture recognizer

- [touchesForGestureRecognizer:](uievent/touches%28for_%29-6krou.md): Returns the touch objects that are being delivered to the specified gesture recognizer.

### Getting the button mask

- [buttonMask](uievent/buttonmask-swift.property.md): A bit mask that represents which input-device buttons are pressed for the current event.
- [UIEventButtonMask](uievent/buttonmask-swift.struct.md): Constants that indicate which input-device buttons are pressed.

### Getting the modifier flags

- [modifierFlags](uievent/modifierflags.md): The set of modifier keys that are pressed for the current event.
- [UIKeyModifierFlags](uikeymodifierflags.md): Constants that indicate which modifier keys are pressed.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [UIPressesEvent](uipressesevent.md)

## See Also

### Essentials

- [Using responders and the responder chain to handle events](using-responders-and-the-responder-chain-to-handle-events.md): Learn how to handle events that propagate through your app.
- [UIResponder](uiresponder.md): An abstract interface for responding to and handling events.
