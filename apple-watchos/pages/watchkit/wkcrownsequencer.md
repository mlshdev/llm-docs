> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkcrownsequencer](https://developer.apple.com/documentation/watchkit/wkcrownsequencer)

# WKCrownSequencer (Swift)

**Framework:** WatchKit  
**Kind:** Class  
**Availability:** watchOS 3.0+

An object that reports the current state of the digital crown, including its rotational speed when it is in motion.

## Declaration

```swift
class WKCrownSequencer
```

<a id="overview"></a>

## Overview

Do not create instances of this class yourself. Instead, retrieve a crown sequencer object from the current interface controller’s [crownSequencer](wkinterfacecontroller/crownsequencer.md) property. Before the sequencer can receive data, you must call its [focus()](wkcrownsequencer/focus%28%29.md) method. Only one object in your interface can have focus at any given time, so if your interface also contains picker objects or has scrollable scenes, you must coordinate changes in focus accordingly. For example, calling the sequencer’s [focus()](wkcrownsequencer/focus%28%29.md) method causes any picker objects or interface controllers to resign focus. When the user taps on a picker object, the currently active sequencer resigns focus, and the selected picker object gains the focus. Because the crown sequencer is not tied to a specific interface object, you can use it as general input for your app.

Although the crown sequencer object has properties that contain the current state of the crown, it is more common to use a [delegate](wkcrownsequencer/delegate.md) object to receive notifications as the user rotates the crown. For more information on receiving data using a delegate, see [WKCrownDelegate](wkcrowndelegate.md).

## Topics

### Getting the Current Crown Status

- [rotationsPerSecond](wkcrownsequencer/rotationspersecond.md): The rotational speed of the crown, measured in rotations per second.
- [isIdle](wkcrownsequencer/isidle.md): A Boolean value indicating whether the crown is at rest.

### Accessing the Delegate

- [delegate](wkcrownsequencer/delegate.md): The object you use to monitor changes to the crown state.

### Managing the Focus

- [focus()](wkcrownsequencer/focus%28%29.md): Begins the delivery of crown events to the current crown sequencer.
- [resignFocus()](wkcrownsequencer/resignfocus%28%29.md): Ends the delivery of crown events to the current crown sequencer.

### Managing Haptic Feedback

- [isHapticFeedbackEnabled](wkcrownsequencer/ishapticfeedbackenabled.md): A Boolean value that determines whether the crown sequencer’s haptic feedback is enabled.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Event handling

- [WKCrownDelegate](wkcrowndelegate.md): A collection of methods you can implement to track the user’s interaction with the digital crown, receiving notifications when the user rotates the crown or when rotation stops.
- [WKGestureRecognizer](wkgesturerecognizer.md): The base class for all other gesture recognizer classes.
- [WKLongPressGestureRecognizer](wklongpressgesturerecognizer.md): A gesture recognizer that interprets a touch event that occurs in the same relative area for an extended period of time.
- [WKPanGestureRecognizer](wkpangesturerecognizer.md): A gesture recognizer that interprets a touch event that moves around the screen.
- [WKSwipeGestureRecognizer](wkswipegesturerecognizer.md): A gesture recognizer that interprets swiping gestures in one or more directions.
- [WKTapGestureRecognizer](wktapgesturerecognizer.md): A gesture recognizer that interprets a touch event occurring and ending in approximately the same area on the screen.

# WKCrownSequencer (Objective-C)

**Framework:** WatchKit  
**Kind:** Class  
**Availability:** watchOS 3.0+

An object that reports the current state of the digital crown, including its rotational speed when it is in motion.

## Declaration

```objectivec
@interface WKCrownSequencer : NSObject
```

<a id="overview"></a>

## Overview

Do not create instances of this class yourself. Instead, retrieve a crown sequencer object from the current interface controller’s [crownSequencer](wkinterfacecontroller/crownsequencer.md) property. Before the sequencer can receive data, you must call its [focus](wkcrownsequencer/focus%28%29.md) method. Only one object in your interface can have focus at any given time, so if your interface also contains picker objects or has scrollable scenes, you must coordinate changes in focus accordingly. For example, calling the sequencer’s [focus](wkcrownsequencer/focus%28%29.md) method causes any picker objects or interface controllers to resign focus. When the user taps on a picker object, the currently active sequencer resigns focus, and the selected picker object gains the focus. Because the crown sequencer is not tied to a specific interface object, you can use it as general input for your app.

Although the crown sequencer object has properties that contain the current state of the crown, it is more common to use a [delegate](wkcrownsequencer/delegate.md) object to receive notifications as the user rotates the crown. For more information on receiving data using a delegate, see [WKCrownDelegate](wkcrowndelegate.md).

## Topics

### Getting the Current Crown Status

- [rotationsPerSecond](wkcrownsequencer/rotationspersecond.md): The rotational speed of the crown, measured in rotations per second.
- [idle](wkcrownsequencer/isidle.md): A Boolean value indicating whether the crown is at rest.

### Accessing the Delegate

- [delegate](wkcrownsequencer/delegate.md): The object you use to monitor changes to the crown state.

### Managing the Focus

- [focus](wkcrownsequencer/focus%28%29.md): Begins the delivery of crown events to the current crown sequencer.
- [resignFocus](wkcrownsequencer/resignfocus%28%29.md): Ends the delivery of crown events to the current crown sequencer.

### Managing Haptic Feedback

- [hapticFeedbackEnabled](wkcrownsequencer/ishapticfeedbackenabled.md): A Boolean value that determines whether the crown sequencer’s haptic feedback is enabled.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Event handling

- [WKCrownDelegate](wkcrowndelegate.md): A collection of methods you can implement to track the user’s interaction with the digital crown, receiving notifications when the user rotates the crown or when rotation stops.
- [WKGestureRecognizer](wkgesturerecognizer.md): The base class for all other gesture recognizer classes.
- [WKLongPressGestureRecognizer](wklongpressgesturerecognizer.md): A gesture recognizer that interprets a touch event that occurs in the same relative area for an extended period of time.
- [WKPanGestureRecognizer](wkpangesturerecognizer.md): A gesture recognizer that interprets a touch event that moves around the screen.
- [WKSwipeGestureRecognizer](wkswipegesturerecognizer.md): A gesture recognizer that interprets swiping gestures in one or more directions.
- [WKTapGestureRecognizer](wktapgesturerecognizer.md): A gesture recognizer that interprets a touch event occurring and ending in approximately the same area on the screen.
