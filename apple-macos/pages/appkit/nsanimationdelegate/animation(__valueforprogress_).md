> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsanimationdelegate/animation(_:valueforprogress:)](https://developer.apple.com/documentation/appkit/nsanimationdelegate/animation(_:valueforprogress:))

# animation(\_:valueForProgress:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Requests a custom curve value for the current progress value.

## Declaration

```swift
nonisolated optional func animation(_ animation: NSAnimation, valueForProgress progress: NSAnimation.Progress) -> Float
```

## Parameters

- `animation`: An `NSAnimation` object that is running.
- `progress`: A `float` value (typed as `NSAnimationProgress`) that indicates a progress mark of `animation`. This value is always between 0.0 and 1.0.

<a id="return-value"></a>

## Return Value

A `float` value representing a custom curve.

<a id="Discussion"></a>

## Discussion

The delegate can compute and return a custom curve value for the given progress value.  If the delegate does not implement this method, `NSAnimation` computes the current curve value.

The animation:valueForProgress: message is sent to the delegate when an `NSAnimation` object receives a [currentValue](../nsanimation/currentvalue.md) message. The value the delegate returns is used as the value of [currentValue](../nsanimation/currentvalue.md); if there is no delegate, or it doesn’t implement animation:valueForProgress:, `NSAnimation` computes and returns the current value. `NSAnimation` does not invoke [currentValue](../nsanimation/currentvalue.md)itself, but subclasses might.

See the description of [currentValue](../nsanimation/currentvalue.md) for more information.

## See Also

### Related Documentation

- [currentValue](../nsanimation/currentvalue.md): The current value of the animation effect, based on the current progress

### Controlling and Monitoring an Animation

- [animationDidEnd(\_:)](animationdidend%28__%29.md): Sent to the delegate when the specified animation completes its run.
- [animationDidStop(\_:)](animationdidstop%28__%29.md): Sent to the delegate when the specified animation is stopped before it completes its run.
- [animationShouldStart(\_:)](animationshouldstart%28__%29.md): Sent to the delegate just after an animation is started.

# animation:valueForProgress: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Requests a custom curve value for the current progress value.

## Declaration

```objectivec
- (float) animation:(NSAnimation *) animation valueForProgress:(NSAnimationProgress) progress;
```

## Parameters

- `animation`: An `NSAnimation` object that is running.
- `progress`: A `float` value (typed as `NSAnimationProgress`) that indicates a progress mark of `animation`. This value is always between 0.0 and 1.0.

<a id="return-value"></a>

## Return Value

A `float` value representing a custom curve.

<a id="Discussion"></a>

## Discussion

The delegate can compute and return a custom curve value for the given progress value.  If the delegate does not implement this method, `NSAnimation` computes the current curve value.

The animation:valueForProgress: message is sent to the delegate when an `NSAnimation` object receives a [currentValue](../nsanimation/currentvalue.md) message. The value the delegate returns is used as the value of [currentValue](../nsanimation/currentvalue.md); if there is no delegate, or it doesn’t implement animation:valueForProgress:, `NSAnimation` computes and returns the current value. `NSAnimation` does not invoke [currentValue](../nsanimation/currentvalue.md)itself, but subclasses might.

See the description of [currentValue](../nsanimation/currentvalue.md) for more information.

## See Also

### Related Documentation

- [currentValue](../nsanimation/currentvalue.md): The current value of the animation effect, based on the current progress

### Controlling and Monitoring an Animation

- [animationDidEnd:](animationdidend%28__%29.md): Sent to the delegate when the specified animation completes its run.
- [animationDidStop:](animationdidstop%28__%29.md): Sent to the delegate when the specified animation is stopped before it completes its run.
- [animationShouldStart:](animationshouldstart%28__%29.md): Sent to the delegate just after an animation is started.
