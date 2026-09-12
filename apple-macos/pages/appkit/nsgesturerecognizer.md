> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsgesturerecognizer](https://developer.apple.com/documentation/appkit/nsgesturerecognizer)

# NSGestureRecognizer (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.10+

An object that monitors events and calls its action method when a predefined sequence of events occur.

## Declaration

```swift
@MainActor class NSGestureRecognizer
```

<a id="overview"></a>

## Overview

A gesture recognizer might recognize a single click, a click and drag, or a sequence of events that imply rotation. You do not create instances of this class directly. This class is an abstract base class that defines the common behavior for all gesture recognizers. When using a gesture recognizer in your app, create an instance of one of the concrete subclasses.

The concrete subclasses of [NSGestureRecognizer](nsgesturerecognizer.md) are the following:

- [NSClickGestureRecognizer](nsclickgesturerecognizer.md)
- [NSMagnificationGestureRecognizer](nsmagnificationgesturerecognizer.md)
- [NSPanGestureRecognizer](nspangesturerecognizer.md)
- [NSPressGestureRecognizer](nspressgesturerecognizer.md)
- [NSRotationGestureRecognizer](nsrotationgesturerecognizer.md)

A gesture recognizer operates on events in a specific view (or in any of that view’s subviews). After creating a gesture recognizer, attach it to one of your views using the [addGestureRecognizer(\_:)](nsview/addgesturerecognizer%28__%29.md) method. Events received by your app are forwarded automatically to any relevant gesture recognizers before they are sent to the corresponding view. The gesture recognizer can delay the further progression of the events until recognition is complete or allow the events to be delivered normally.

A gesture recognizer can detect gestures that are either discrete or continuous in nature. A click gesture is discrete because it involves a mouse-down and mouse-up event without any mouse movements in between. By contrast, a pan or rotation gesture is continuous because it involves tracking mouse movements over a period of time.

During the gesture recognition process, a gesture recognizer calls the action method of its associated target object to report the state of the recognition process. For discrete gestures, the action method is typically called only once when the gesture is recognized. For continuous gestures, it may be called multiple times depending on the current state of the gesture recognizer. In that situation, you can use your action method to perform appropriate tasks, such as creating animations for any mouse-related movements, in addition to handling the final results of the gesture recognition process.

A gesture recognizer has only one action method and one target object, and the method must conform to one of the following signatures:

**Swift**

```swift
func handleGesture() { }
func handleGesture(gestureRecognizer: NSGestureRecognizer) { }
```

**Objective-C**

```objc
- (void)handleGesture;
- (void)handleGesture:(NSGestureRecognizer *)gestureRecognizer;
```

When your code needs additional information about the particulars of a gesture, define your action method to include the gesture recognizer parameter. You almost always want the gesture recognizer object when handling continuous gestures. For example, for a rotation gesture, you would use the gesture recognizer object to get the updated rotation value. You can also use the gesture recognizer object to get the location of where the gesture occurred.

<a id="State-Transitions"></a>

### State Transitions

Gesture recognizers operate within a predefined state machine, transitioning from state to state as they handle events. All gesture recognizers begin in the Possible ([NSGestureRecognizer.State.possible](nsgesturerecognizer/state-swift.enum/possible.md)) state, but the possible transitions differ for continuous and discrete gestures.

Discrete gestures transition from the Possible state directly to the Recognized ([recognized](nsgesturerecognizer/state-swift.enum/recognized.md)) or Failed ([NSGestureRecognizer.State.failed](nsgesturerecognizer/state-swift.enum/failed.md)) state, depending on whether they successfully interpret the gesture. When a discrete gesture recognizer transitions to the Recognized state, it calls the action method of its target object.

For continuous gestures, the state transitions are as follows:

- Possible —\> Began —\> \[Changed\] —\> Cancelled
- Possible —\> Began —\> \[Changed\] —\> Ended

The Changed state is optional and may occur multiple times before the Cancelled or Ended state is reached. Many state transitions cause the gesture recognizer to call its action method. Setting the [state](nsgesturerecognizer/state-swift.property.md) property to [NSGestureRecognizer.State.changed](nsgesturerecognizer/state-swift.enum/changed.md) while monitoring events also calls the action method. You can use these calls to update the state of your app or update any custom animations.

For a list of possible states, see the constants in [NSGestureRecognizer.State](nsgesturerecognizer/state-swift.enum.md).

<a id="Subclassing-Notes"></a>

### Subclassing Notes

You may create a subclass of `NSGestureRecognizer` that recognizes a distinctive gesture—for example, a “check mark” gesture. A custom gesture recognizer implements any appropriate event-related methods to detect its gesture along with a few other methods for managing state information.

All gesture recognizers must update the value in the state property at appropriate times. Specifically, you must update it for all state transitions. For more information about the possible state transitions of a gesture recognizer, see [State Transitions](nsgesturerecognizer.md#State-Transitions).

> **Note**

>  [NSGestureRecognizer](nsgesturerecognizer.md) does not support handing off event tracking to other non-gesture recognizer mechanisms (for example drag and drop and pop-up menus).

<a id="Methods-to-Override"></a>

#### Methods to Override

When creating your own gesture recognizer subclass:

- Implement the [reset()](nsgesturerecognizer/reset%28%29.md) method and any other relevant methods in Methods for Subclasses.
- Override the [location(in:)](nsgesturerecognizer/location%28in_%29.md) method as needed to specify an appropriate point for your gesture.

AppKit waits for a mouse-down event, magnify event, or rotation event to occur before starting the gesture recognition process. A gesture recognizer that used only key-down events to recognize its gesture would not have its [keyDown(with:)](nsgesturerecognizer/keydown%28with_%29.md) method called until a mouse-down, magnify, or rotation event started the recognition process.

<a id="Alternatives-to-Subclassing"></a>

#### Alternatives to Subclassing

The `NSGestureRecognizer` class defines the common behaviors that can be configured for all concrete gesture recognizers. It also supports a delegate—an object that adopts the [NSGestureRecognizerDelegate](nsgesturerecognizerdelegate.md) protocol—for handling finer-grained customization of some behaviors without the need for subclassing. For example, you can use the delegate to create dependencies between specific gesture recognizer objects.

For more information about using the delegate to control the behavior of your gesture recognizers, see [NSGestureRecognizerDelegate](nsgesturerecognizerdelegate.md).

## Topics

### Initializing a gesture recognizer

- [init(target:action:)](nsgesturerecognizer/init%28target_action_%29.md): Initializes the gesture recognizer with the specified target and action information.

### Accessing the target and action

- [action](nsgesturerecognizer/action.md): The action method to call when the gesture is recognized.
- [target](nsgesturerecognizer/target.md): The object that implements the action method.

### Getting the location of events

- [location(in:)](nsgesturerecognizer/location%28in_%29.md): Returns the point computed as the location of the gesture.

### Accessing the recognizer’s state

- [state](nsgesturerecognizer/state-swift.property.md): The current state of the gesture recognizer.
- [view](nsgesturerecognizer/view.md): The view to which the gesture recognizer is attached.
- [isEnabled](nsgesturerecognizer/isenabled.md): A Boolean value indicating whether the gesture recognizer is able to handle events.

### Delaying events

- [delaysPrimaryMouseButtonEvents](nsgesturerecognizer/delaysprimarymousebuttonevents.md): A Boolean value that indicates whether primary mouse button events are delivered only after gesture recognition fails.
- [delaysSecondaryMouseButtonEvents](nsgesturerecognizer/delayssecondarymousebuttonevents.md): A Boolean value that indicates whether secondary mouse button events are delivered only after gesture recognition fails.
- [delaysOtherMouseButtonEvents](nsgesturerecognizer/delaysothermousebuttonevents.md): A Boolean value that indicates whether other mouse button events are delivered only after gesture recognition fails.
- [delaysKeyEvents](nsgesturerecognizer/delayskeyevents.md): A Boolean value that indicates whether key events are delivered only after gesture recognition fails.
- [delaysMagnificationEvents](nsgesturerecognizer/delaysmagnificationevents.md): A Boolean value that indicates whether magnification events are delivered only after gesture recognition fails.
- [delaysRotationEvents](nsgesturerecognizer/delaysrotationevents.md): A Boolean value that indicates whether rotation events are delivered only after gesture recognition fails.

### Accessing the delegate

- [delegate](nsgesturerecognizer/delegate.md): The delegate of the gesture recognizer.

### Overriding methods for subclasses

- [reset()](nsgesturerecognizer/reset%28%29.md): Overridden to reset the internal state of the gesture recognizer when an attempt completes.
- [mouseDown(with:)](nsgesturerecognizer/mousedown%28with_%29.md): Informs the gesture recognizer that the user pressed the left mouse button.
- [mouseDragged(with:)](nsgesturerecognizer/mousedragged%28with_%29.md): Informs the gesture recognizer that the user moved the mouse with the left button pressed.
- [mouseUp(with:)](nsgesturerecognizer/mouseup%28with_%29.md): Informs the gesture recognizer that the user released the left mouse button.
- [otherMouseDown(with:)](nsgesturerecognizer/othermousedown%28with_%29.md): Informs the gesture recognizer that the user pressed a mouse button other than the left or right one.
- [otherMouseDragged(with:)](nsgesturerecognizer/othermousedragged%28with_%29.md): Informs the gesture recognizer that the user moved the mouse with a button other than the left or right one pressed.
- [otherMouseUp(with:)](nsgesturerecognizer/othermouseup%28with_%29.md): Informs the gesture recognizer that the user released a mouse button other than the left or right one.
- [rightMouseDown(with:)](nsgesturerecognizer/rightmousedown%28with_%29.md): Informs the gesture recognizer that the user pressed the right mouse button.
- [rightMouseDragged(with:)](nsgesturerecognizer/rightmousedragged%28with_%29.md): Informs the gesture recognizer that the user moved the mouse with the right button pressed.
- [rightMouseUp(with:)](nsgesturerecognizer/rightmouseup%28with_%29.md): Informs the gesture recognizer that the user released the right mouse button.
- [magnify(with:)](nsgesturerecognizer/magnify%28with_%29.md): Informs the gesture recognizer that the user is performing a pinch gesture.
- [rotate(with:)](nsgesturerecognizer/rotate%28with_%29.md): Informs the gesture recognizer that the user is performing a rotation gesture.
- [canBePrevented(by:)](nsgesturerecognizer/canbeprevented%28by_%29.md): Overridden to indicate that the specified gesture recognizer can prevent the current object from recognizing a gesture.
- [canPrevent(\_:)](nsgesturerecognizer/canprevent%28__%29.md): Overridden to indicate that the current object can prevent the specified gesture recognizer from recognizing its gesture.
- [shouldBeRequiredToFail(by:)](nsgesturerecognizer/shouldberequiredtofail%28by_%29.md): Overridden to indicate that the current object must fail before the specified gesture recognizer begins recognizing its gesture.
- [shouldRequireFailure(of:)](nsgesturerecognizer/shouldrequirefailure%28of_%29.md): Overridden to indicate that the specified gesture recognizer must fail before the current object begins recognizing its gesture.
- [keyDown(with:)](nsgesturerecognizer/keydown%28with_%29.md): Informs the gesture recognizer that the user has pressed a key.
- [keyUp(with:)](nsgesturerecognizer/keyup%28with_%29.md): Informs the gesture recognizer that the user released a key.
- [tabletPoint(with:)](nsgesturerecognizer/tabletpoint%28with_%29.md): Informs the user that a tablet-point event occurred.
- [flagsChanged(with:)](nsgesturerecognizer/flagschanged%28with_%29.md): Informs the current object that the user pressed or released a modifier key (Shift, Control, and so on).
- [pressureChange(with:)](nsgesturerecognizer/pressurechange%28with_%29.md): Informs the current object that a pressure change occurred on a system that supports pressure sensitivity.

### Configuring pressure

- [pressureConfiguration](nsgesturerecognizer/pressureconfiguration.md): Configures the behavior and progression of the Force Touch trackpad when responding to recognized pressure gestures.

### Getting state values

- [NSGestureRecognizer.State](nsgesturerecognizer/state-swift.enum.md): The current state of the gesture recognizer.

### Initializing from a coder

- [init(coder:)](nsgesturerecognizer/init%28coder_%29.md)

### Getting additional recognizer information

- [allowedTouchTypes](nsgesturerecognizer/allowedtouchtypes.md)
- [isCancellableByScrollGesture](nsgesturerecognizer/iscancellablebyscrollgesture.md): Causes the receiver to be cancelled when its enclosing scroll view’s gesture recognizer begins.
- [modifierFlags](nsgesturerecognizer/modifierflags.md)
- [name](nsgesturerecognizer/name.md)

### Handling touch and mouse events

- [touchesBegan(with:)](nsgesturerecognizer/touchesbegan%28with_%29.md): Called when one or more fingers first make contact with an [NSTouchBar](nstouchbar.md) instance on the Touch Bar.
- [touchesCancelled(with:)](nsgesturerecognizer/touchescancelled%28with_%29.md): Called when a system event, such as a low-memory warning, cancels an in-progress touch event in an [NSTouchBar](nstouchbar.md) object.
- [touchesEnded(with:)](nsgesturerecognizer/touchesended%28with_%29.md): Called when one or more fingers are removed from contact with an [NSTouchBar](nstouchbar.md) instance on the Touch Bar.
- [touchesMoved(with:)](nsgesturerecognizer/touchesmoved%28with_%29.md): Called when one or more fingers, associated with an in-progress event, move within an [NSTouchBar](nstouchbar.md) instance on the Touch Bar.
- [mouseCancelled(with:)](nsgesturerecognizer/mousecancelled%28with_%29.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [NSClickGestureRecognizer](nsclickgesturerecognizer.md)
- [NSMagnificationGestureRecognizer](nsmagnificationgesturerecognizer.md)
- [NSPanGestureRecognizer](nspangesturerecognizer.md)
- [NSPressGestureRecognizer](nspressgesturerecognizer.md)
- [NSRotationGestureRecognizer](nsrotationgesturerecognizer.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Custom Gestures

- [NSGestureRecognizerDelegate](nsgesturerecognizerdelegate.md): A set of methods for fine-tuning a gesture recognizer’s behavior.

# NSGestureRecognizer (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.10+

An object that monitors events and calls its action method when a predefined sequence of events occur.

## Declaration

```objectivec
@interface NSGestureRecognizer : NSObject
```

<a id="overview"></a>

## Overview

A gesture recognizer might recognize a single click, a click and drag, or a sequence of events that imply rotation. You do not create instances of this class directly. This class is an abstract base class that defines the common behavior for all gesture recognizers. When using a gesture recognizer in your app, create an instance of one of the concrete subclasses.

The concrete subclasses of [NSGestureRecognizer](nsgesturerecognizer.md) are the following:

- [NSClickGestureRecognizer](nsclickgesturerecognizer.md)
- [NSMagnificationGestureRecognizer](nsmagnificationgesturerecognizer.md)
- [NSPanGestureRecognizer](nspangesturerecognizer.md)
- [NSPressGestureRecognizer](nspressgesturerecognizer.md)
- [NSRotationGestureRecognizer](nsrotationgesturerecognizer.md)

A gesture recognizer operates on events in a specific view (or in any of that view’s subviews). After creating a gesture recognizer, attach it to one of your views using the [addGestureRecognizer:](nsview/addgesturerecognizer%28__%29.md) method. Events received by your app are forwarded automatically to any relevant gesture recognizers before they are sent to the corresponding view. The gesture recognizer can delay the further progression of the events until recognition is complete or allow the events to be delivered normally.

A gesture recognizer can detect gestures that are either discrete or continuous in nature. A click gesture is discrete because it involves a mouse-down and mouse-up event without any mouse movements in between. By contrast, a pan or rotation gesture is continuous because it involves tracking mouse movements over a period of time.

During the gesture recognition process, a gesture recognizer calls the action method of its associated target object to report the state of the recognition process. For discrete gestures, the action method is typically called only once when the gesture is recognized. For continuous gestures, it may be called multiple times depending on the current state of the gesture recognizer. In that situation, you can use your action method to perform appropriate tasks, such as creating animations for any mouse-related movements, in addition to handling the final results of the gesture recognition process.

A gesture recognizer has only one action method and one target object, and the method must conform to one of the following signatures:

**Swift**

```swift
func handleGesture() { }
func handleGesture(gestureRecognizer: NSGestureRecognizer) { }
```

**Objective-C**

```objc
- (void)handleGesture;
- (void)handleGesture:(NSGestureRecognizer *)gestureRecognizer;
```

When your code needs additional information about the particulars of a gesture, define your action method to include the gesture recognizer parameter. You almost always want the gesture recognizer object when handling continuous gestures. For example, for a rotation gesture, you would use the gesture recognizer object to get the updated rotation value. You can also use the gesture recognizer object to get the location of where the gesture occurred.

<a id="State-Transitions"></a>

### State Transitions

Gesture recognizers operate within a predefined state machine, transitioning from state to state as they handle events. All gesture recognizers begin in the Possible ([NSGestureRecognizerStatePossible](nsgesturerecognizer/state-swift.enum/possible.md)) state, but the possible transitions differ for continuous and discrete gestures.

Discrete gestures transition from the Possible state directly to the Recognized ([NSGestureRecognizerStateRecognized](nsgesturerecognizer/state-swift.enum/recognized.md)) or Failed ([NSGestureRecognizerStateFailed](nsgesturerecognizer/state-swift.enum/failed.md)) state, depending on whether they successfully interpret the gesture. When a discrete gesture recognizer transitions to the Recognized state, it calls the action method of its target object.

For continuous gestures, the state transitions are as follows:

- Possible —\> Began —\> \[Changed\] —\> Cancelled
- Possible —\> Began —\> \[Changed\] —\> Ended

The Changed state is optional and may occur multiple times before the Cancelled or Ended state is reached. Many state transitions cause the gesture recognizer to call its action method. Setting the [state](nsgesturerecognizer/state-swift.property.md) property to [NSGestureRecognizerStateChanged](nsgesturerecognizer/state-swift.enum/changed.md) while monitoring events also calls the action method. You can use these calls to update the state of your app or update any custom animations.

For a list of possible states, see the constants in [NSGestureRecognizerState](nsgesturerecognizer/state-swift.enum.md).

<a id="Subclassing-Notes"></a>

### Subclassing Notes

You may create a subclass of `NSGestureRecognizer` that recognizes a distinctive gesture—for example, a “check mark” gesture. A custom gesture recognizer implements any appropriate event-related methods to detect its gesture along with a few other methods for managing state information.

All gesture recognizers must update the value in the state property at appropriate times. Specifically, you must update it for all state transitions. For more information about the possible state transitions of a gesture recognizer, see [State Transitions](nsgesturerecognizer.md#State-Transitions).

> **Note**

>  [NSGestureRecognizer](nsgesturerecognizer.md) does not support handing off event tracking to other non-gesture recognizer mechanisms (for example drag and drop and pop-up menus).

<a id="Methods-to-Override"></a>

#### Methods to Override

When creating your own gesture recognizer subclass:

- Implement the [reset](nsgesturerecognizer/reset%28%29.md) method and any other relevant methods in Methods for Subclasses.
- Override the [locationInView:](nsgesturerecognizer/location%28in_%29.md) method as needed to specify an appropriate point for your gesture.

AppKit waits for a mouse-down event, magnify event, or rotation event to occur before starting the gesture recognition process. A gesture recognizer that used only key-down events to recognize its gesture would not have its [keyDown:](nsgesturerecognizer/keydown%28with_%29.md) method called until a mouse-down, magnify, or rotation event started the recognition process.

<a id="Alternatives-to-Subclassing"></a>

#### Alternatives to Subclassing

The `NSGestureRecognizer` class defines the common behaviors that can be configured for all concrete gesture recognizers. It also supports a delegate—an object that adopts the [NSGestureRecognizerDelegate](nsgesturerecognizerdelegate.md) protocol—for handling finer-grained customization of some behaviors without the need for subclassing. For example, you can use the delegate to create dependencies between specific gesture recognizer objects.

For more information about using the delegate to control the behavior of your gesture recognizers, see [NSGestureRecognizerDelegate](nsgesturerecognizerdelegate.md).

## Topics

### Initializing a gesture recognizer

- [initWithTarget:action:](nsgesturerecognizer/init%28target_action_%29.md): Initializes the gesture recognizer with the specified target and action information.

### Accessing the target and action

- [action](nsgesturerecognizer/action.md): The action method to call when the gesture is recognized.
- [target](nsgesturerecognizer/target.md): The object that implements the action method.

### Getting the location of events

- [locationInView:](nsgesturerecognizer/location%28in_%29.md): Returns the point computed as the location of the gesture.

### Accessing the recognizer’s state

- [state](nsgesturerecognizer/state-swift.property.md): The current state of the gesture recognizer.
- [view](nsgesturerecognizer/view.md): The view to which the gesture recognizer is attached.
- [enabled](nsgesturerecognizer/isenabled.md): A Boolean value indicating whether the gesture recognizer is able to handle events.

### Delaying events

- [delaysPrimaryMouseButtonEvents](nsgesturerecognizer/delaysprimarymousebuttonevents.md): A Boolean value that indicates whether primary mouse button events are delivered only after gesture recognition fails.
- [delaysSecondaryMouseButtonEvents](nsgesturerecognizer/delayssecondarymousebuttonevents.md): A Boolean value that indicates whether secondary mouse button events are delivered only after gesture recognition fails.
- [delaysOtherMouseButtonEvents](nsgesturerecognizer/delaysothermousebuttonevents.md): A Boolean value that indicates whether other mouse button events are delivered only after gesture recognition fails.
- [delaysKeyEvents](nsgesturerecognizer/delayskeyevents.md): A Boolean value that indicates whether key events are delivered only after gesture recognition fails.
- [delaysMagnificationEvents](nsgesturerecognizer/delaysmagnificationevents.md): A Boolean value that indicates whether magnification events are delivered only after gesture recognition fails.
- [delaysRotationEvents](nsgesturerecognizer/delaysrotationevents.md): A Boolean value that indicates whether rotation events are delivered only after gesture recognition fails.

### Accessing the delegate

- [delegate](nsgesturerecognizer/delegate.md): The delegate of the gesture recognizer.

### Overriding methods for subclasses

- [reset](nsgesturerecognizer/reset%28%29.md): Overridden to reset the internal state of the gesture recognizer when an attempt completes.
- [mouseDown:](nsgesturerecognizer/mousedown%28with_%29.md): Informs the gesture recognizer that the user pressed the left mouse button.
- [mouseDragged:](nsgesturerecognizer/mousedragged%28with_%29.md): Informs the gesture recognizer that the user moved the mouse with the left button pressed.
- [mouseUp:](nsgesturerecognizer/mouseup%28with_%29.md): Informs the gesture recognizer that the user released the left mouse button.
- [otherMouseDown:](nsgesturerecognizer/othermousedown%28with_%29.md): Informs the gesture recognizer that the user pressed a mouse button other than the left or right one.
- [otherMouseDragged:](nsgesturerecognizer/othermousedragged%28with_%29.md): Informs the gesture recognizer that the user moved the mouse with a button other than the left or right one pressed.
- [otherMouseUp:](nsgesturerecognizer/othermouseup%28with_%29.md): Informs the gesture recognizer that the user released a mouse button other than the left or right one.
- [rightMouseDown:](nsgesturerecognizer/rightmousedown%28with_%29.md): Informs the gesture recognizer that the user pressed the right mouse button.
- [rightMouseDragged:](nsgesturerecognizer/rightmousedragged%28with_%29.md): Informs the gesture recognizer that the user moved the mouse with the right button pressed.
- [rightMouseUp:](nsgesturerecognizer/rightmouseup%28with_%29.md): Informs the gesture recognizer that the user released the right mouse button.
- [magnifyWithEvent:](nsgesturerecognizer/magnify%28with_%29.md): Informs the gesture recognizer that the user is performing a pinch gesture.
- [rotateWithEvent:](nsgesturerecognizer/rotate%28with_%29.md): Informs the gesture recognizer that the user is performing a rotation gesture.
- [canBePreventedByGestureRecognizer:](nsgesturerecognizer/canbeprevented%28by_%29.md): Overridden to indicate that the specified gesture recognizer can prevent the current object from recognizing a gesture.
- [canPreventGestureRecognizer:](nsgesturerecognizer/canprevent%28__%29.md): Overridden to indicate that the current object can prevent the specified gesture recognizer from recognizing its gesture.
- [shouldBeRequiredToFailByGestureRecognizer:](nsgesturerecognizer/shouldberequiredtofail%28by_%29.md): Overridden to indicate that the current object must fail before the specified gesture recognizer begins recognizing its gesture.
- [shouldRequireFailureOfGestureRecognizer:](nsgesturerecognizer/shouldrequirefailure%28of_%29.md): Overridden to indicate that the specified gesture recognizer must fail before the current object begins recognizing its gesture.
- [keyDown:](nsgesturerecognizer/keydown%28with_%29.md): Informs the gesture recognizer that the user has pressed a key.
- [keyUp:](nsgesturerecognizer/keyup%28with_%29.md): Informs the gesture recognizer that the user released a key.
- [tabletPoint:](nsgesturerecognizer/tabletpoint%28with_%29.md): Informs the user that a tablet-point event occurred.
- [flagsChanged:](nsgesturerecognizer/flagschanged%28with_%29.md): Informs the current object that the user pressed or released a modifier key (Shift, Control, and so on).
- [pressureChangeWithEvent:](nsgesturerecognizer/pressurechange%28with_%29.md): Informs the current object that a pressure change occurred on a system that supports pressure sensitivity.

### Configuring pressure

- [pressureConfiguration](nsgesturerecognizer/pressureconfiguration.md): Configures the behavior and progression of the Force Touch trackpad when responding to recognized pressure gestures.

### Getting state values

- [NSGestureRecognizerState](nsgesturerecognizer/state-swift.enum.md): The current state of the gesture recognizer.

### Initializing from a coder

- [initWithCoder:](nsgesturerecognizer/init%28coder_%29.md)

### Getting additional recognizer information

- [allowedTouchTypes](nsgesturerecognizer/allowedtouchtypes.md)
- [cancellableByScrollGesture](nsgesturerecognizer/iscancellablebyscrollgesture.md): Causes the receiver to be cancelled when its enclosing scroll view’s gesture recognizer begins.
- [modifierFlags](nsgesturerecognizer/modifierflags.md)
- [name](nsgesturerecognizer/name.md)

### Handling touch and mouse events

- [touchesBeganWithEvent:](nsgesturerecognizer/touchesbegan%28with_%29.md): Called when one or more fingers first make contact with an [NSTouchBar](nstouchbar.md) instance on the Touch Bar.
- [touchesCancelledWithEvent:](nsgesturerecognizer/touchescancelled%28with_%29.md): Called when a system event, such as a low-memory warning, cancels an in-progress touch event in an [NSTouchBar](nstouchbar.md) object.
- [touchesEndedWithEvent:](nsgesturerecognizer/touchesended%28with_%29.md): Called when one or more fingers are removed from contact with an [NSTouchBar](nstouchbar.md) instance on the Touch Bar.
- [touchesMovedWithEvent:](nsgesturerecognizer/touchesmoved%28with_%29.md): Called when one or more fingers, associated with an in-progress event, move within an [NSTouchBar](nstouchbar.md) instance on the Touch Bar.
- [mouseCancelled:](nsgesturerecognizer/mousecancelled%28with_%29.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [NSClickGestureRecognizer](nsclickgesturerecognizer.md)
- [NSMagnificationGestureRecognizer](nsmagnificationgesturerecognizer.md)
- [NSPanGestureRecognizer](nspangesturerecognizer.md)
- [NSPressGestureRecognizer](nspressgesturerecognizer.md)
- [NSRotationGestureRecognizer](nsrotationgesturerecognizer.md)

### Conforms To

- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)

## See Also

### Custom Gestures

- [NSGestureRecognizerDelegate](nsgesturerecognizerdelegate.md): A set of methods for fine-tuning a gesture recognizer’s behavior.
