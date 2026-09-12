> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsevent/ismousecoalescingenabled](https://developer.apple.com/documentation/appkit/nsevent/ismousecoalescingenabled)

# isMouseCoalescingEnabled (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.5+

A Boolean value that indicates whether the system coalesces mouse movement events.

## Declaration

```swift
class var isMouseCoalescingEnabled: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

Mouse movement events include mouse-moved, mouse-dragged, and tablet events. If this property is [true](https://developer.apple.com/documentation/swift/true), coalescing is enabled; otherwise, it’s disabled. The default value of this property is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Getting gesture and touch information

- [phase](phase-swift.property.md): The phase of a gesture event, such as a magnify, scroll, or pressure change.
- [NSEvent.Phase](phase-swift.struct.md): Constants that represent the possible phases during an event phase.
- [magnification](magnification.md): The amount of change to add to a magnification gesture.
- [touches(matching:in:)](touches%28matching_in_%29.md): Returns the touch objects associated with the specified phase.
- [allTouches()](alltouches%28%29.md): Returns all touch objects associated with the event.
- [touches(for:)](touches%28for_%29.md): Returns the touch objects from the event that belong to the specified view.
- [coalescedTouches(for:)](coalescedtouches%28for_%29.md): Returns all of the touch objects associated with the specified main touch.
- [NSEvent.GestureAxis](gestureaxis.md): Constants that specify the direction of travel for a gesture.

# mouseCoalescingEnabled (Objective-C)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.5+

A Boolean value that indicates whether the system coalesces mouse movement events.

## Declaration

```objectivec
@property (class, getter=isMouseCoalescingEnabled) BOOL mouseCoalescingEnabled;
```

<a id="Discussion"></a>

## Discussion

Mouse movement events include mouse-moved, mouse-dragged, and tablet events. If this property is [true](https://developer.apple.com/documentation/swift/true), coalescing is enabled; otherwise, it’s disabled. The default value of this property is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Getting gesture and touch information

- [phase](phase-swift.property.md): The phase of a gesture event, such as a magnify, scroll, or pressure change.
- [NSEventPhase](phase-swift.struct.md): Constants that represent the possible phases during an event phase.
- [magnification](magnification.md): The amount of change to add to a magnification gesture.
- [touchesMatchingPhase:inView:](touches%28matching_in_%29.md): Returns the touch objects associated with the specified phase.
- [allTouches](alltouches%28%29.md): Returns all touch objects associated with the event.
- [touchesForView:](touches%28for_%29.md): Returns the touch objects from the event that belong to the specified view.
- [coalescedTouchesForTouch:](coalescedtouches%28for_%29.md): Returns all of the touch objects associated with the specified main touch.
- [NSEventGestureAxis](gestureaxis.md): Constants that specify the direction of travel for a gesture.
