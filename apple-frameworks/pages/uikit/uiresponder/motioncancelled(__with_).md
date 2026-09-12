> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiresponder/motioncancelled(_:with:)](https://developer.apple.com/documentation/uikit/uiresponder/motioncancelled(_:with:))

# motionCancelled(\_:with:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Tells the responder that a motion event has been canceled.

## Declaration

```swift
func motionCancelled(_ motion: UIEvent.EventSubtype, with event: UIEvent?)
```

## Parameters

- `motion`: An event-subtype constant indicating the kind of motion associated with `event`. A common motion is shaking, which is indicated by [UIEvent.EventSubtype.motionShake](../uievent/eventsubtype/motionshake.md).
- `event`: An object representing the event associated with the motion.

<a id="Discussion"></a>

## Discussion

UIKit calls this method when it receives an interruption requiring cancellation of the motion event. An interruption is anything that causes the application to become inactive or causes the view handling the motion events to be removed from its window. UIKit might also call this method if the shaking goes on too long. All responders that handle motion events should implement this method. In your implementation, clean up any state information associated with handling the motion events.

The default implementation of this method forwards the message up the responder chain.

## See Also

### Responding to motion events

- [motionBegan(\_:with:)](motionbegan%28__with_%29.md): Tells the responder that a motion event has begun.
- [motionEnded(\_:with:)](motionended%28__with_%29.md): Tells the responder that a motion event has ended.

# motionCancelled:withEvent: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Tells the responder that a motion event has been canceled.

## Declaration

```objectivec
- (void) motionCancelled:(UIEventSubtype) motion withEvent:(UIEvent *) event;
```

## Parameters

- `motion`: An event-subtype constant indicating the kind of motion associated with `event`. A common motion is shaking, which is indicated by [UIEventSubtypeMotionShake](../uievent/eventsubtype/motionshake.md).
- `event`: An object representing the event associated with the motion.

<a id="Discussion"></a>

## Discussion

UIKit calls this method when it receives an interruption requiring cancellation of the motion event. An interruption is anything that causes the application to become inactive or causes the view handling the motion events to be removed from its window. UIKit might also call this method if the shaking goes on too long. All responders that handle motion events should implement this method. In your implementation, clean up any state information associated with handling the motion events.

The default implementation of this method forwards the message up the responder chain.

## See Also

### Responding to motion events

- [motionBegan:withEvent:](motionbegan%28__with_%29.md): Tells the responder that a motion event has begun.
- [motionEnded:withEvent:](motionended%28__with_%29.md): Tells the responder that a motion event has ended.
