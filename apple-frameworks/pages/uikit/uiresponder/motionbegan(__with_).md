> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiresponder/motionbegan(_:with:)](https://developer.apple.com/documentation/uikit/uiresponder/motionbegan(_:with:))

# motionBegan(\_:with:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Tells the responder that a motion event has begun.

## Declaration

```swift
func motionBegan(_ motion: UIEvent.EventSubtype, with event: UIEvent?)
```

## Parameters

- `motion`: An event-subtype constant indicating the kind of motion. A common motion is shaking, which is indicated by [UIEvent.EventSubtype.motionShake](../uievent/eventsubtype/motionshake.md).
- `event`: An object representing the event associated with the motion.

<a id="Discussion"></a>

## Discussion

UIKit informs the responder only when a motion event starts and ends. It doesn’t report intermediate shakes. Motion events are delivered initially to the first responder and are forwarded up the responder chain as appropriate.

The default implementation of this method forwards the message up the responder chain.

## See Also

### Responding to motion events

- [motionEnded(\_:with:)](motionended%28__with_%29.md): Tells the responder that a motion event has ended.
- [motionCancelled(\_:with:)](motioncancelled%28__with_%29.md): Tells the responder that a motion event has been canceled.

# motionBegan:withEvent: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Tells the responder that a motion event has begun.

## Declaration

```objectivec
- (void) motionBegan:(UIEventSubtype) motion withEvent:(UIEvent *) event;
```

## Parameters

- `motion`: An event-subtype constant indicating the kind of motion. A common motion is shaking, which is indicated by [UIEventSubtypeMotionShake](../uievent/eventsubtype/motionshake.md).
- `event`: An object representing the event associated with the motion.

<a id="Discussion"></a>

## Discussion

UIKit informs the responder only when a motion event starts and ends. It doesn’t report intermediate shakes. Motion events are delivered initially to the first responder and are forwarded up the responder chain as appropriate.

The default implementation of this method forwards the message up the responder chain.

## See Also

### Responding to motion events

- [motionEnded:withEvent:](motionended%28__with_%29.md): Tells the responder that a motion event has ended.
- [motionCancelled:withEvent:](motioncancelled%28__with_%29.md): Tells the responder that a motion event has been canceled.
