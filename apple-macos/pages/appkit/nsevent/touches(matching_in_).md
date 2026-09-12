> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsevent/touches(matching:in:)](https://developer.apple.com/documentation/appkit/nsevent/touches(matching:in:))

# touches(matching:in:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Returns the touch objects associated with the specified phase.

## Declaration

```swift
func touches(matching phase: NSTouch.Phase, in view: NSView?) -> Set<NSTouch>
```

## Parameters

- `phase`: The touch phase for which you want touches.
- `view`: The view for which touches are wanted. Touches that target this view, or any of the view’s descendants will be returned. Passing `nil` as the view gets all touches regardless of their targeted view.

<a id="return-value"></a>

## Return Value

A set of applicable [NSTouch](../nstouch.md) objects.

<a id="Discussion"></a>

## Discussion

This method is only valid for gesture events (gesture, magnify, swipe, rotate, etc.).

## See Also

### Getting gesture and touch information

- [phase](phase-swift.property.md): The phase of a gesture event, such as a magnify, scroll, or pressure change.
- [NSEvent.Phase](phase-swift.struct.md): Constants that represent the possible phases during an event phase.
- [magnification](magnification.md): The amount of change to add to a magnification gesture.
- [allTouches()](alltouches%28%29.md): Returns all touch objects associated with the event.
- [touches(for:)](touches%28for_%29.md): Returns the touch objects from the event that belong to the specified view.
- [coalescedTouches(for:)](coalescedtouches%28for_%29.md): Returns all of the touch objects associated with the specified main touch.
- [isMouseCoalescingEnabled](ismousecoalescingenabled.md): A Boolean value that indicates whether the system coalesces mouse movement events.
- [NSEvent.GestureAxis](gestureaxis.md): Constants that specify the direction of travel for a gesture.

# touchesMatchingPhase:inView: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Returns the touch objects associated with the specified phase.

## Declaration

```objectivec
- (NSSet<NSTouch *> *) touchesMatchingPhase:(NSTouchPhase) phase inView:(NSView *) view;
```

## Parameters

- `phase`: The touch phase for which you want touches.
- `view`: The view for which touches are wanted. Touches that target this view, or any of the view’s descendants will be returned. Passing `nil` as the view gets all touches regardless of their targeted view.

<a id="return-value"></a>

## Return Value

A set of applicable [NSTouch](../nstouch.md) objects.

<a id="Discussion"></a>

## Discussion

This method is only valid for gesture events (gesture, magnify, swipe, rotate, etc.).

## See Also

### Getting gesture and touch information

- [phase](phase-swift.property.md): The phase of a gesture event, such as a magnify, scroll, or pressure change.
- [NSEventPhase](phase-swift.struct.md): Constants that represent the possible phases during an event phase.
- [magnification](magnification.md): The amount of change to add to a magnification gesture.
- [allTouches](alltouches%28%29.md): Returns all touch objects associated with the event.
- [touchesForView:](touches%28for_%29.md): Returns the touch objects from the event that belong to the specified view.
- [coalescedTouchesForTouch:](coalescedtouches%28for_%29.md): Returns all of the touch objects associated with the specified main touch.
- [mouseCoalescingEnabled](ismousecoalescingenabled.md): A Boolean value that indicates whether the system coalesces mouse movement events.
- [NSEventGestureAxis](gestureaxis.md): Constants that specify the direction of travel for a gesture.
