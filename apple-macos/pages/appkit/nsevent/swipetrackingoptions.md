> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsevent/swipetrackingoptions](https://developer.apple.com/documentation/appkit/nsevent/swipetrackingoptions)

# NSEvent.SwipeTrackingOptions (Swift)

**Framework:** AppKit  
**Kind:** Structure  
**Availability:** macOS 10.7+

Constants that specify swipe-tracking options.

## Declaration

```swift
struct SwipeTrackingOptions
```

## Topics

### Constants

- [lockDirection](swipetrackingoptions/lockdirection.md): Clamp gestureAmount to 0 if the user starts to swipe in the opposite direction than they started.
- [clampGestureAmount](swipetrackingoptions/clampgestureamount.md): Don’t allow gestureAmount to go beyond +/-1.0

### Initializers

- [init(rawValue:)](swipetrackingoptions/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Constants

- [NSEvent.EventTypeMask](eventtypemask.md): Constants that you use to filter out specific event types from the stream of incoming events.
- [NSEvent.ButtonMask](buttonmask-swift.struct.md): Constants you use to identify the activated tablet buttons in an event.
- [NSEvent.ModifierFlags](modifierflags-swift.struct.md): Flags that represent key states in an event object.
- [NSEvent.Phase](phase-swift.struct.md): Constants that represent the possible phases during an event phase.
- [init(type:)](eventtypemask/init%28type_%29.md): Returns the event mask for the specified type.

# NSEventSwipeTrackingOptions (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 10.7+

Constants that specify swipe-tracking options.

## Declaration

```objectivec
enum NSEventSwipeTrackingOptions : NSUInteger;
```

## Topics

### Constants

- [NSEventSwipeTrackingLockDirection](swipetrackingoptions/lockdirection.md): Clamp gestureAmount to 0 if the user starts to swipe in the opposite direction than they started.
- [NSEventSwipeTrackingClampGestureAmount](swipetrackingoptions/clampgestureamount.md): Don’t allow gestureAmount to go beyond +/-1.0

## See Also

### Constants

- [NSEventMask](eventtypemask.md): Constants that you use to filter out specific event types from the stream of incoming events.
- [NSEventButtonMask](buttonmask-swift.struct.md): Constants you use to identify the activated tablet buttons in an event.
- [NSEventModifierFlags](modifierflags-swift.struct.md): Flags that represent key states in an event object.
- [NSEventPhase](phase-swift.struct.md): Constants that represent the possible phases during an event phase.
- [NSEventMaskFromType](eventtypemask/init%28type_%29.md): Returns the event mask for the specified type.
