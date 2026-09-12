> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsprogressindicator/usesthreadedanimation](https://developer.apple.com/documentation/appkit/nsprogressindicator/usesthreadedanimation)

# usesThreadedAnimation (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean that indicates whether the progress indicator implements animation in a separate thread.

## Declaration

```swift
var usesThreadedAnimation: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), animation of the progress indicator occurs in a separate thread.

If the app becomes multithreaded as a result of an invocation of this method, the app’s performance could become noticeably slower.

## See Also

### Animating the progress indicator

- [startAnimation(\_:)](startanimation%28__%29.md): Starts the animation of an indeterminate progress indicator.
- [stopAnimation(\_:)](stopanimation%28__%29.md): Stops the animation of an indeterminate progress indicator.

# usesThreadedAnimation (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean that indicates whether the progress indicator implements animation in a separate thread.

## Declaration

```objectivec
@property BOOL usesThreadedAnimation;
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), animation of the progress indicator occurs in a separate thread.

If the app becomes multithreaded as a result of an invocation of this method, the app’s performance could become noticeably slower.

## See Also

### Animating the progress indicator

- [startAnimation:](startanimation%28__%29.md): Starts the animation of an indeterminate progress indicator.
- [stopAnimation:](stopanimation%28__%29.md): Stops the animation of an indeterminate progress indicator.
- [animate:](animate_.md): Deprecated. This action method advances the progress animation of an indeterminate progress animator by one step.
- [animationDelay](animationdelay.md): Deprecated. Returns the delay, in seconds, between animation steps for an indeterminate progress indicator.
- [setAnimationDelay:](setanimationdelay_.md): Deprecated. Sets the delay, in seconds, between animation steps for an indeterminate progress indicator.
