> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsanimation/runloopmodesforanimating](https://developer.apple.com/documentation/appkit/nsanimation/runloopmodesforanimating)

# runLoopModesForAnimating (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

An array of strings representing the run loop modes in which the animation can run.

## Declaration

```swift
var runLoopModesForAnimating: [RunLoop.Mode]? { get }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is `nil`, which indicates that the animation can be run in the default, modal, or event-tracking modes. The value of this property is ignored if the animation blocking mode is something other than [NSAnimation.BlockingMode.nonblocking](blockingmode/nonblocking.md).

For information about run loop modes and for constants, see [RunLoop](https://developer.apple.com/documentation/foundation/runloop).

## See Also

### Configuring an Animation

- [animationBlockingMode](animationblockingmode.md): The blocking mode of the animation.
- [animationCurve](animationcurve.md): The timing curve for the animation.
- [duration](duration.md): The duration of the animation, in seconds.
- [frameRate](framerate.md): The number of frame updates per second to generate for the animation.

# runLoopModesForAnimating (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

An array of strings representing the run loop modes in which the animation can run.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSArray<NSString *> * runLoopModesForAnimating;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is `nil`, which indicates that the animation can be run in the default, modal, or event-tracking modes. The value of this property is ignored if the animation blocking mode is something other than [NSAnimationNonblocking](blockingmode/nonblocking.md).

For information about run loop modes and for constants, see [NSRunLoop](https://developer.apple.com/documentation/foundation/runloop).

## See Also

### Configuring an Animation

- [animationBlockingMode](animationblockingmode.md): The blocking mode of the animation.
- [animationCurve](animationcurve.md): The timing curve for the animation.
- [duration](duration.md): The duration of the animation, in seconds.
- [frameRate](framerate.md): The number of frame updates per second to generate for the animation.
