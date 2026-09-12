> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsevent/gestureaxis](https://developer.apple.com/documentation/appkit/nsevent/gestureaxis)

# NSEvent.GestureAxis (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 10.7+

Constants that specify the direction of travel for a gesture.

## Declaration

```swift
enum GestureAxis
```

## Topics

### Getting the Axis

- [NSEvent.GestureAxis.none](gestureaxis/none.md): No specific axis.
- [NSEvent.GestureAxis.horizontal](gestureaxis/horizontal.md): The horizontal axis.
- [NSEvent.GestureAxis.vertical](gestureaxis/vertical.md): The vertical axis.

### Initializers

- [init(rawValue:)](gestureaxis/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting gesture and touch information

- [phase](phase-swift.property.md): The phase of a gesture event, such as a magnify, scroll, or pressure change.
- [NSEvent.Phase](phase-swift.struct.md): Constants that represent the possible phases during an event phase.
- [magnification](magnification.md): The amount of change to add to a magnification gesture.
- [touches(matching:in:)](touches%28matching_in_%29.md): Returns the touch objects associated with the specified phase.
- [allTouches()](alltouches%28%29.md): Returns all touch objects associated with the event.
- [touches(for:)](touches%28for_%29.md): Returns the touch objects from the event that belong to the specified view.
- [coalescedTouches(for:)](coalescedtouches%28for_%29.md): Returns all of the touch objects associated with the specified main touch.
- [isMouseCoalescingEnabled](ismousecoalescingenabled.md): A Boolean value that indicates whether the system coalesces mouse movement events.

# NSEventGestureAxis (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 10.7+

Constants that specify the direction of travel for a gesture.

## Declaration

```objectivec
enum NSEventGestureAxis : NSInteger;
```

## Topics

### Getting the Axis

- [NSEventGestureAxisNone](gestureaxis/none.md): No specific axis.
- [NSEventGestureAxisHorizontal](gestureaxis/horizontal.md): The horizontal axis.
- [NSEventGestureAxisVertical](gestureaxis/vertical.md): The vertical axis.

## See Also

### Getting gesture and touch information

- [phase](phase-swift.property.md): The phase of a gesture event, such as a magnify, scroll, or pressure change.
- [NSEventPhase](phase-swift.struct.md): Constants that represent the possible phases during an event phase.
- [magnification](magnification.md): The amount of change to add to a magnification gesture.
- [touchesMatchingPhase:inView:](touches%28matching_in_%29.md): Returns the touch objects associated with the specified phase.
- [allTouches](alltouches%28%29.md): Returns all touch objects associated with the event.
- [touchesForView:](touches%28for_%29.md): Returns the touch objects from the event that belong to the specified view.
- [coalescedTouchesForTouch:](coalescedtouches%28for_%29.md): Returns all of the touch objects associated with the specified main touch.
- [mouseCoalescingEnabled](ismousecoalescingenabled.md): A Boolean value that indicates whether the system coalesces mouse movement events.
