> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/entitytranslationgesturerecognizer/location(in:)](https://developer.apple.com/documentation/realitykit/entitytranslationgesturerecognizer/location(in:))

# location(in:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+

Returns the unprojected location of the gesture represented by the receiver in the space of the given entity.

## Declaration

```swift
@MainActor @preconcurrency func location(in entity: Entity?) -> SIMD3<Float>?
```

## Parameters

- `entity`: An entity in whose space the location is computed. A `nil` entity will result in world space.

<a id="return-value"></a>

## Return Value

The 3D position identifying the location of the gesture in the space specified.

<a id="discussion"></a>

## Discussion

The location is typically the result of a centroid of touches for a gesture, unprojected onto the associated `entity`, and then converted into the space of the entity passed in, or world space if `nil` is passed in.

## See Also

### Using the recognizer

- [entity](entity.md): The entity the receiver is associated with
- [canPrevent(\_:)](canprevent%28__%29.md)
- [reset()](reset%28%29.md): Overridden to reset internal state when a gesture recognition attempt completes.
- [setTranslation(\_:in:)](settranslation%28__in_%29.md): Sets the translation of the receiver in the entity’s coordinate space
- [touchesBegan(\_:with:)](touchesbegan%28__with_%29.md): Sent to the gesture recognizer when one or more fingers touch down on the associated entity.
- [touchesCancelled(\_:with:)](touchescancelled%28__with_%29.md): Sent to the gesture recognizer when a system event (such as an incoming phone call) cancels a touch event.
- [touchesEnded(\_:with:)](touchesended%28__with_%29.md): Sent to the gesture recognizer when one or more fingers lift from the associated view.
- [touchesMoved(\_:with:)](touchesmoved%28__with_%29.md): Sent to the gesture recognizer when one or more fingers move in the associated view.
- [translation(in:)](translation%28in_%29.md): The translation of the gesture in the space of the specified entity.
- [velocity(in:)](velocity%28in_%29.md): The velocity of the translation gesture in the space of the specified entity.
