> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiview/animationoptions/flushupdates](https://developer.apple.com/documentation/uikit/uiview/animationoptions/flushupdates)

# flushUpdates (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 26.0+ · visionOS 26.0+

Flush all pending updates (including traits, properties, and layout) whenever the animation context changes. This includes flushing updates:

## Declaration

```swift
static var flushUpdates: UIView.AnimationOptions { get }
```

<a id="discussion"></a>

## Discussion

- Before entering an animation scope, for invalidations that happened previously without animation.
- Before entering a nested animation scope, for invalidations that happened in the outer animation scope.
- Before exiting any animation scope, for invalidations that happened in that animation scope.
- Before disabling animations, for invalidations that happened in the animation scope with animations enabled.
- Before re-enabling animations, for invalidations that happened in the scope with animations disabled. This animation option implicitly applies to any nested animation scopes, even if they don’t explicitly use this option.

# UIViewAnimationOptionFlushUpdates (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration Case  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 26.0+ · visionOS 26.0+

Flush all pending updates (including traits, properties, and layout) whenever the animation context changes. This includes flushing updates:

## Declaration

```objectivec
UIViewAnimationOptionFlushUpdates
```

<a id="discussion"></a>

## Discussion

- Before entering an animation scope, for invalidations that happened previously without animation.
- Before entering a nested animation scope, for invalidations that happened in the outer animation scope.
- Before exiting any animation scope, for invalidations that happened in that animation scope.
- Before disabling animations, for invalidations that happened in the animation scope with animations enabled.
- Before re-enabling animations, for invalidations that happened in the scope with animations disabled. This animation option implicitly applies to any nested animation scopes, even if they don’t explicitly use this option.
