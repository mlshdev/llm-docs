> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsalignmentfeedbackfilter](https://developer.apple.com/documentation/appkit/nsalignmentfeedbackfilter)

# NSAlignmentFeedbackFilter (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.11+

An object that can filter the movement of an object and provides haptic feedback when alignment occurs.

## Declaration

```swift
class NSAlignmentFeedbackFilter
```

<a id="overview"></a>

## Overview

With a Force Touch trackpad, apps can produce tactile feedback to complement user actions. If your app implements alignment features, you can use the [NSAlignmentFeedbackFilter](nsalignmentfeedbackfilter.md) class to filter object movements and provide haptic feedback to the user at appropriate times. As the user drags objects into alignment with a guide or another object, the user actually feels a physical bump as the object snaps into place.

<a id="Implementing-Alignment-Feedback"></a>

### Implementing Alignment Feedback

To implement alignment feedback in your custom alignment controller class, set up the class to receive events for tracking the movement of an object. These can be events matching the [inputEventMask](nsalignmentfeedbackfilter/inputeventmask.md) value of an `NSAlignmentFeedbackFilter` object, or events from a gesture recognizer ([NSGestureRecognizer](nsgesturerecognizer.md)). For each event received:

1. Create an instance of an `NSAlignmentFeedbackFilter` object. For example:

**Swift**

```swift
let self.feedbackFilter = NSAlignmentFeedbackFilter()
```

**Objective-C**

```objc
self.feedbackFilter = [NSAlignmentFeedbackFilter new];
```

2. Inform the alignment feedback filter object about the event. To do this, call one of the following methods:

- [update(with:)](nsalignmentfeedbackfilter/update%28with_%29.md)
- [update(withPanRecognizer:)](nsalignmentfeedbackfilter/update%28withpanrecognizer_%29.md)

3. Store the location of the object before it moves in response to the event. This is considered the *previous* location of the object.
4. Move the object to its new location in response to the event. This is the location where the object will reside if no alignment occurs.
5. Store the new location of the object. This is considered the *default* location of the object.
6. Determine where the object will move to be aligned. This is considered the *aligned* location of the object.
7. Request a feedback token based on the previous location, default location, and aligned location. To do this, call one of the following methods:

- [alignmentFeedbackTokenForMovement(in:previousPoint:alignedPoint:defaultPoint:)](nsalignmentfeedbackfilter/alignmentfeedbacktokenformovement%28in_previouspoint_alignedpoint_defaultpoint_%29.md) \- If the object will be moved both horizontally and vertically to become aligned.
- [alignmentFeedbackTokenForHorizontalMovement(in:previousX:alignedX:defaultX:)](nsalignmentfeedbackfilter/alignmentfeedbacktokenforhorizontalmovement%28in_previousx_alignedx_defaultx_%29.md) \- If the object will be moved horizontally only to become aligned.
- [alignmentFeedbackTokenForVerticalMovement(in:previousY:alignedY:defaultY:)](nsalignmentfeedbackfilter/alignmentfeedbacktokenforverticalmovement%28in_previousy_alignedy_defaulty_%29.md) \- If the object will be moved vertically only to become aligned.

8. If a feedback token is successfully prepared, call [performFeedback(\_:performanceTime:)](nsalignmentfeedbackfilter/performfeedback%28__performancetime_%29.md) to perform the haptic feedback. Then, move the object to the aligned location.

If a value of `null` is returned, rather than a feedback token, then the system has determined that alignment and feedback are not appropriate. Perhaps the cursor is moving too fast or the distance to the aligned location is not significant enough to produce a visual snap. Move the object to its default location.

## Topics

### Determining Event Types for the Filter

- [inputEventMask](nsalignmentfeedbackfilter/inputeventmask.md): Retrieves the event types the filter accepts.

### Informing the Filter About Events

- [update(with:)](nsalignmentfeedbackfilter/update%28with_%29.md): Informs the feedback filter about a new event.
- [update(withPanRecognizer:)](nsalignmentfeedbackfilter/update%28withpanrecognizer_%29.md): Informs the feedback filter about a new pan (drag) gesture recognizer event.

### Preparing Haptic Feedback for Alignment

- [alignmentFeedbackTokenForMovement(in:previousPoint:alignedPoint:defaultPoint:)](nsalignmentfeedbackfilter/alignmentfeedbacktokenformovement%28in_previouspoint_alignedpoint_defaultpoint_%29.md): Requests a feedback token for the alignment of an object requiring horizontal and vertical movement.
- [alignmentFeedbackTokenForHorizontalMovement(in:previousX:alignedX:defaultX:)](nsalignmentfeedbackfilter/alignmentfeedbacktokenforhorizontalmovement%28in_previousx_alignedx_defaultx_%29.md): Requests a feedback token for the alignment of an object requiring horizontal movement only.
- [alignmentFeedbackTokenForVerticalMovement(in:previousY:alignedY:defaultY:)](nsalignmentfeedbackfilter/alignmentfeedbacktokenforverticalmovement%28in_previousy_alignedy_defaulty_%29.md): Requests a feedback token for the alignment of an object requiring vertical movement only.

### Providing Feedback to the User

- [performFeedback(\_:performanceTime:)](nsalignmentfeedbackfilter/performfeedback%28__performancetime_%29.md): Performs the haptic feedback described by one or more alignment feedback tokens.

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

### Haptics

- [NSHapticFeedbackManager](nshapticfeedbackmanager.md): An object that provides access to the haptic feedback management attributes on a system with a Force Touch trackpad.
- [NSHapticFeedbackPerformer](nshapticfeedbackperformer.md): A set of methods and constants that a haptic feedback performer implements.
- [NSAlignmentFeedbackToken](nsalignmentfeedbacktoken.md)

# NSAlignmentFeedbackFilter (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.11+

An object that can filter the movement of an object and provides haptic feedback when alignment occurs.

## Declaration

```objectivec
@interface NSAlignmentFeedbackFilter : NSObject
```

<a id="overview"></a>

## Overview

With a Force Touch trackpad, apps can produce tactile feedback to complement user actions. If your app implements alignment features, you can use the [NSAlignmentFeedbackFilter](nsalignmentfeedbackfilter.md) class to filter object movements and provide haptic feedback to the user at appropriate times. As the user drags objects into alignment with a guide or another object, the user actually feels a physical bump as the object snaps into place.

<a id="Implementing-Alignment-Feedback"></a>

### Implementing Alignment Feedback

To implement alignment feedback in your custom alignment controller class, set up the class to receive events for tracking the movement of an object. These can be events matching the [inputEventMask](nsalignmentfeedbackfilter/inputeventmask.md) value of an `NSAlignmentFeedbackFilter` object, or events from a gesture recognizer ([NSGestureRecognizer](nsgesturerecognizer.md)). For each event received:

1. Create an instance of an `NSAlignmentFeedbackFilter` object. For example:

**Swift**

```swift
let self.feedbackFilter = NSAlignmentFeedbackFilter()
```

**Objective-C**

```objc
self.feedbackFilter = [NSAlignmentFeedbackFilter new];
```

2. Inform the alignment feedback filter object about the event. To do this, call one of the following methods:

- [updateWithEvent:](nsalignmentfeedbackfilter/update%28with_%29.md)
- [updateWithPanRecognizer:](nsalignmentfeedbackfilter/update%28withpanrecognizer_%29.md)

3. Store the location of the object before it moves in response to the event. This is considered the *previous* location of the object.
4. Move the object to its new location in response to the event. This is the location where the object will reside if no alignment occurs.
5. Store the new location of the object. This is considered the *default* location of the object.
6. Determine where the object will move to be aligned. This is considered the *aligned* location of the object.
7. Request a feedback token based on the previous location, default location, and aligned location. To do this, call one of the following methods:

- [alignmentFeedbackTokenForMovementInView:previousPoint:alignedPoint:defaultPoint:](nsalignmentfeedbackfilter/alignmentfeedbacktokenformovement%28in_previouspoint_alignedpoint_defaultpoint_%29.md) \- If the object will be moved both horizontally and vertically to become aligned.
- [alignmentFeedbackTokenForHorizontalMovementInView:previousX:alignedX:defaultX:](nsalignmentfeedbackfilter/alignmentfeedbacktokenforhorizontalmovement%28in_previousx_alignedx_defaultx_%29.md) \- If the object will be moved horizontally only to become aligned.
- [alignmentFeedbackTokenForVerticalMovementInView:previousY:alignedY:defaultY:](nsalignmentfeedbackfilter/alignmentfeedbacktokenforverticalmovement%28in_previousy_alignedy_defaulty_%29.md) \- If the object will be moved vertically only to become aligned.

8. If a feedback token is successfully prepared, call [performFeedback:performanceTime:](nsalignmentfeedbackfilter/performfeedback%28__performancetime_%29.md) to perform the haptic feedback. Then, move the object to the aligned location.

If a value of `null` is returned, rather than a feedback token, then the system has determined that alignment and feedback are not appropriate. Perhaps the cursor is moving too fast or the distance to the aligned location is not significant enough to produce a visual snap. Move the object to its default location.

## Topics

### Determining Event Types for the Filter

- [inputEventMask](nsalignmentfeedbackfilter/inputeventmask.md): Retrieves the event types the filter accepts.

### Informing the Filter About Events

- [updateWithEvent:](nsalignmentfeedbackfilter/update%28with_%29.md): Informs the feedback filter about a new event.
- [updateWithPanRecognizer:](nsalignmentfeedbackfilter/update%28withpanrecognizer_%29.md): Informs the feedback filter about a new pan (drag) gesture recognizer event.

### Preparing Haptic Feedback for Alignment

- [alignmentFeedbackTokenForMovementInView:previousPoint:alignedPoint:defaultPoint:](nsalignmentfeedbackfilter/alignmentfeedbacktokenformovement%28in_previouspoint_alignedpoint_defaultpoint_%29.md): Requests a feedback token for the alignment of an object requiring horizontal and vertical movement.
- [alignmentFeedbackTokenForHorizontalMovementInView:previousX:alignedX:defaultX:](nsalignmentfeedbackfilter/alignmentfeedbacktokenforhorizontalmovement%28in_previousx_alignedx_defaultx_%29.md): Requests a feedback token for the alignment of an object requiring horizontal movement only.
- [alignmentFeedbackTokenForVerticalMovementInView:previousY:alignedY:defaultY:](nsalignmentfeedbackfilter/alignmentfeedbacktokenforverticalmovement%28in_previousy_alignedy_defaulty_%29.md): Requests a feedback token for the alignment of an object requiring vertical movement only.

### Providing Feedback to the User

- [performFeedback:performanceTime:](nsalignmentfeedbackfilter/performfeedback%28__performancetime_%29.md): Performs the haptic feedback described by one or more alignment feedback tokens.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Haptics

- [NSHapticFeedbackManager](nshapticfeedbackmanager.md): An object that provides access to the haptic feedback management attributes on a system with a Force Touch trackpad.
- [NSHapticFeedbackPerformer](nshapticfeedbackperformer.md): A set of methods and constants that a haptic feedback performer implements.
- [NSAlignmentFeedbackToken](nsalignmentfeedbacktoken.md)
