> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsanimation/duration](https://developer.apple.com/documentation/appkit/nsanimation/duration)

# duration (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The duration of the animation, in seconds.

## Declaration

```swift
var duration: TimeInterval { get set }
```

<a id="Discussion"></a>

## Discussion

The value of this property must be greater than or equal to `0`. Setting the duration to a negative value raises an exception.

You can change the duration of an animation while it is running. Setting the duration to a value that is less than the current progress value ends an in-progress animation.

## See Also

### Configuring an Animation

- [animationBlockingMode](animationblockingmode.md): The blocking mode of the animation.
- [runLoopModesForAnimating](runloopmodesforanimating.md): An array of strings representing the run loop modes in which the animation can run.
- [animationCurve](animationcurve.md): The timing curve for the animation.
- [frameRate](framerate.md): The number of frame updates per second to generate for the animation.

# duration (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The duration of the animation, in seconds.

## Declaration

```objectivec
@property NSTimeInterval duration;
```

<a id="Discussion"></a>

## Discussion

The value of this property must be greater than or equal to `0`. Setting the duration to a negative value raises an exception.

You can change the duration of an animation while it is running. Setting the duration to a value that is less than the current progress value ends an in-progress animation.

## See Also

### Configuring an Animation

- [animationBlockingMode](animationblockingmode.md): The blocking mode of the animation.
- [runLoopModesForAnimating](runloopmodesforanimating.md): An array of strings representing the run loop modes in which the animation can run.
- [animationCurve](animationcurve.md): The timing curve for the animation.
- [frameRate](framerate.md): The number of frame updates per second to generate for the animation.
