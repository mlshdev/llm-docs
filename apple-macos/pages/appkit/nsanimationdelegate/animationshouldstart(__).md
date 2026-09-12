> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsanimationdelegate/animationshouldstart(_:)](https://developer.apple.com/documentation/appkit/nsanimationdelegate/animationshouldstart(_:))

# animationShouldStart(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sent to the delegate just after an animation is started.

## Declaration

```swift
nonisolated optional func animationShouldStart(_ animation: NSAnimation) -> Bool
```

## Parameters

- `animation`: The `NSAnimation` object that was just started.

<a id="return-value"></a>

## Return Value

[false](https://developer.apple.com/documentation/swift/false) to cancel the animation, [true](https://developer.apple.com/documentation/swift/true) to have the animation proceed.

<a id="Discussion"></a>

## Discussion

The delegate is sent this message just after `animation` receives a [start()](../nsanimation/start%28%29.md) message. The delegate can use this method to prepare objects and resources for the effect.

## See Also

### Controlling and Monitoring an Animation

- [animationDidEnd(\_:)](animationdidend%28__%29.md): Sent to the delegate when the specified animation completes its run.
- [animationDidStop(\_:)](animationdidstop%28__%29.md): Sent to the delegate when the specified animation is stopped before it completes its run.
- [animation(\_:valueForProgress:)](animation%28__valueforprogress_%29.md): Requests a custom curve value for the current progress value.

# animationShouldStart: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sent to the delegate just after an animation is started.

## Declaration

```objectivec
- (BOOL) animationShouldStart:(NSAnimation *) animation;
```

## Parameters

- `animation`: The `NSAnimation` object that was just started.

<a id="return-value"></a>

## Return Value

[false](https://developer.apple.com/documentation/swift/false) to cancel the animation, [true](https://developer.apple.com/documentation/swift/true) to have the animation proceed.

<a id="Discussion"></a>

## Discussion

The delegate is sent this message just after `animation` receives a [startAnimation](../nsanimation/start%28%29.md) message. The delegate can use this method to prepare objects and resources for the effect.

## See Also

### Controlling and Monitoring an Animation

- [animationDidEnd:](animationdidend%28__%29.md): Sent to the delegate when the specified animation completes its run.
- [animationDidStop:](animationdidstop%28__%29.md): Sent to the delegate when the specified animation is stopped before it completes its run.
- [animation:valueForProgress:](animation%28__valueforprogress_%29.md): Requests a custom curve value for the current progress value.
