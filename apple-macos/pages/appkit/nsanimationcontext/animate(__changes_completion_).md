> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsanimationcontext/animate(_:changes:completion:)](https://developer.apple.com/documentation/appkit/nsanimationcontext/animate(_:changes:completion:))

# animate(\_:changes:completion:)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 15.0+

Animate changes to one or more views using the specified SwiftUI animation.

## Declaration

```swift
static func animate(_ animation: Animation, changes: () -> Void, completion: (() -> Void)? = nil)
```

## Parameters

- `animation`: The animation to use for the changes.
- `changes`: A closure containing the changes to animate.
- `completion`: A closure to execute after the animation completes.

<a id="discussion"></a>

## Discussion

Animations performed using this method can be smoothly retargeted while preserving velocity, just like animations in SwiftUI views.

```
// Grow the window with a smooth spring animation
NSAnimationContext.animate(.smooth) {
    let scaledFrame = myWindowContentView.frame.applying(
        CGAffineTransform(scaleX: 1.5, y: 1.5))
    myWindowContentView.setFrameSize(scaledFrame.size)
}
```

> **Note**

> When a SwiftUI animation is used for animating AppKit’s `NSAnimatablePropertyContainer`s, the animations are run in-process, and are not backed by `CAAnimation`s in the render server.
