> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nsevent/swipetrackingoptions/clampgestureamount

# clampGestureAmount (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.7+

Don’t allow gestureAmount to go beyond +/-1.0

## Declaration

```swift
static var clampGestureAmount: NSEvent.SwipeTrackingOptions { get }
```

## See Also

### Constants

- [lockDirection](lockdirection.md): Clamp gestureAmount to 0 if the user starts to swipe in the opposite direction than they started.

# NSEventSwipeTrackingClampGestureAmount (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS 10.7+

Don’t allow gestureAmount to go beyond +/-1.0

## Declaration

```objectivec
NSEventSwipeTrackingClampGestureAmount
```

## See Also

### Constants

- [NSEventSwipeTrackingLockDirection](lockdirection.md): Clamp gestureAmount to 0 if the user starts to swipe in the opposite direction than they started.
