> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsevent/magnification](https://developer.apple.com/documentation/appkit/nsevent/magnification)

# magnification (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

The amount of change to add to a magnification gesture.

## Declaration

```swift
var magnification: CGFloat { get }
```

<a id="Discussion"></a>

## Discussion

The change in magnification that should be added to the current scaling of an item to achieve the new scale factor. This message is valid only for events of type [NSEvent.EventType.magnify](eventtype/magnify.md).

## See Also

### Getting gesture and touch information

- [phase](phase-swift.property.md): The phase of a gesture event, such as a magnify, scroll, or pressure change.
- [NSEvent.Phase](phase-swift.struct.md): Constants that represent the possible phases during an event phase.
- [touches(matching:in:)](touches%28matching_in_%29.md): Returns the touch objects associated with the specified phase.
- [allTouches()](alltouches%28%29.md): Returns all touch objects associated with the event.
- [touches(for:)](touches%28for_%29.md): Returns the touch objects from the event that belong to the specified view.
- [coalescedTouches(for:)](coalescedtouches%28for_%29.md): Returns all of the touch objects associated with the specified main touch.
- [isMouseCoalescingEnabled](ismousecoalescingenabled.md): A Boolean value that indicates whether the system coalesces mouse movement events.
- [NSEvent.GestureAxis](gestureaxis.md): Constants that specify the direction of travel for a gesture.

# magnification (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

The amount of change to add to a magnification gesture.

## Declaration

```objectivec
@property (readonly) CGFloat magnification;
```

<a id="Discussion"></a>

## Discussion

The change in magnification that should be added to the current scaling of an item to achieve the new scale factor. This message is valid only for events of type [NSEventTypeMagnify](eventtype/magnify.md).

## See Also

### Getting gesture and touch information

- [phase](phase-swift.property.md): The phase of a gesture event, such as a magnify, scroll, or pressure change.
- [NSEventPhase](phase-swift.struct.md): Constants that represent the possible phases during an event phase.
- [touchesMatchingPhase:inView:](touches%28matching_in_%29.md): Returns the touch objects associated with the specified phase.
- [allTouches](alltouches%28%29.md): Returns all touch objects associated with the event.
- [touchesForView:](touches%28for_%29.md): Returns the touch objects from the event that belong to the specified view.
- [coalescedTouchesForTouch:](coalescedtouches%28for_%29.md): Returns all of the touch objects associated with the specified main touch.
- [mouseCoalescingEnabled](ismousecoalescingenabled.md): A Boolean value that indicates whether the system coalesces mouse movement events.
- [NSEventGestureAxis](gestureaxis.md): Constants that specify the direction of travel for a gesture.
