> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsevent/swipetrackingoptions/lockdirection](https://developer.apple.com/documentation/appkit/nsevent/swipetrackingoptions/lockdirection)

# lockDirection (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.7+

Clamp gestureAmount to 0 if the user starts to swipe in the opposite direction than they started.

## Declaration

```swift
static var lockDirection: NSEvent.SwipeTrackingOptions { get }
```

## See Also

### Constants

- [clampGestureAmount](clampgestureamount.md): Don’t allow gestureAmount to go beyond +/-1.0

# NSEventSwipeTrackingLockDirection (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS 10.7+

Clamp gestureAmount to 0 if the user starts to swipe in the opposite direction than they started.

## Declaration

```objectivec
NSEventSwipeTrackingLockDirection
```

## See Also

### Constants

- [NSEventSwipeTrackingClampGestureAmount](clampgestureamount.md): Don’t allow gestureAmount to go beyond +/-1.0
