> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsevent/alltouches()](https://developer.apple.com/documentation/appkit/nsevent/alltouches())

# allTouches() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.12+

Returns all touch objects associated with the event.

## Declaration

```swift
func allTouches() -> Set<NSTouch>
```

<a id="return-value"></a>

## Return Value

A set of [NSTouch](../nstouch.md) objects that correspond to the touches of this event.

<a id="Discussion"></a>

## Discussion

If the touches originate in different views or windows, each [NSTouch](../nstouch.md) object may have a different responder object.

## See Also

### Getting gesture and touch information

- [phase](phase-swift.property.md): The phase of a gesture event, such as a magnify, scroll, or pressure change.
- [NSEvent.Phase](phase-swift.struct.md): Constants that represent the possible phases during an event phase.
- [magnification](magnification.md): The amount of change to add to a magnification gesture.
- [touches(matching:in:)](touches%28matching_in_%29.md): Returns the touch objects associated with the specified phase.
- [touches(for:)](touches%28for_%29.md): Returns the touch objects from the event that belong to the specified view.
- [coalescedTouches(for:)](coalescedtouches%28for_%29.md): Returns all of the touch objects associated with the specified main touch.
- [isMouseCoalescingEnabled](ismousecoalescingenabled.md): A Boolean value that indicates whether the system coalesces mouse movement events.
- [NSEvent.GestureAxis](gestureaxis.md): Constants that specify the direction of travel for a gesture.

# allTouches (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.12+

Returns all touch objects associated with the event.

## Declaration

```objectivec
- (NSSet<NSTouch *> *) allTouches;
```

<a id="return-value"></a>

## Return Value

A set of [NSTouch](../nstouch.md) objects that correspond to the touches of this event.

<a id="Discussion"></a>

## Discussion

If the touches originate in different views or windows, each [NSTouch](../nstouch.md) object may have a different responder object.

## See Also

### Getting gesture and touch information

- [phase](phase-swift.property.md): The phase of a gesture event, such as a magnify, scroll, or pressure change.
- [NSEventPhase](phase-swift.struct.md): Constants that represent the possible phases during an event phase.
- [magnification](magnification.md): The amount of change to add to a magnification gesture.
- [touchesMatchingPhase:inView:](touches%28matching_in_%29.md): Returns the touch objects associated with the specified phase.
- [touchesForView:](touches%28for_%29.md): Returns the touch objects from the event that belong to the specified view.
- [coalescedTouchesForTouch:](coalescedtouches%28for_%29.md): Returns all of the touch objects associated with the specified main touch.
- [mouseCoalescingEnabled](ismousecoalescingenabled.md): A Boolean value that indicates whether the system coalesces mouse movement events.
- [NSEventGestureAxis](gestureaxis.md): Constants that specify the direction of travel for a gesture.
