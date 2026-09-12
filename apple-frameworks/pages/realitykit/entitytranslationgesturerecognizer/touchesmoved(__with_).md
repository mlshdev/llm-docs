> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/entitytranslationgesturerecognizer/touchesmoved(_:with:)](https://developer.apple.com/documentation/realitykit/entitytranslationgesturerecognizer/touchesmoved(_:with:))

# touchesMoved(\_:with:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+

Sent to the gesture recognizer when one or more fingers move in the associated view.

## Declaration

```swift
@MainActor @preconcurrency override dynamic func touchesMoved(_ touches: Set<UITouch>, with event: UIEvent)
```

## Parameters

- `touches`: A set of `UITouch` instances in the event represented by `event` that represent the touches in the `UITouch.Phase.moved` phase.
- `event`: A `UIEvent` object representing the event to which the touches belong.

## See Also

### Using the recognizer

- [entity](entity.md): The entity the receiver is associated with
- [canPrevent(\_:)](canprevent%28__%29.md)
- [location(in:)](location%28in_%29.md): Returns the unprojected location of the gesture represented by the receiver in the space of the given entity.
- [reset()](reset%28%29.md): Overridden to reset internal state when a gesture recognition attempt completes.
- [setTranslation(\_:in:)](settranslation%28__in_%29.md): Sets the translation of the receiver in the entity’s coordinate space
- [touchesBegan(\_:with:)](touchesbegan%28__with_%29.md): Sent to the gesture recognizer when one or more fingers touch down on the associated entity.
- [touchesCancelled(\_:with:)](touchescancelled%28__with_%29.md): Sent to the gesture recognizer when a system event (such as an incoming phone call) cancels a touch event.
- [touchesEnded(\_:with:)](touchesended%28__with_%29.md): Sent to the gesture recognizer when one or more fingers lift from the associated view.
- [translation(in:)](translation%28in_%29.md): The translation of the gesture in the space of the specified entity.
- [velocity(in:)](velocity%28in_%29.md): The velocity of the translation gesture in the space of the specified entity.
