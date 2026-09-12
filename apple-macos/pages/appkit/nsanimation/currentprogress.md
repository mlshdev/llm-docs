> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsanimation/currentprogress](https://developer.apple.com/documentation/appkit/nsanimation/currentprogress)

# currentProgress (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The current progress of the animation.

## Declaration

```swift
var currentProgress: NSAnimation.Progress { get set }
```

<a id="Discussion"></a>

## Discussion

This property contains the completion percentage of the animation. Valid values are in the range `0.0` to `1.0`, where `0.0` represents the beginning of the animation and `1.0` represents the end of the animation.

Changing the value of this property adjusts the progress of a running animation. Setting this property to a value less than `0.0` sets the value of the property to `0.0`. Similarly, specifying a value greater than `1.0` changes the value of the property to `1.0`.  The `NSAnimation` class updates the value of this property during the animation. To perform additional tasks at specific progress points, use the delegate’s [animation(\_:valueForProgress:)](../nsanimationdelegate/animation%28__valueforprogress_%29.md) method.

## See Also

### Controlling and Monitoring an Animation

- [start()](start%28%29.md): Starts the animation represented by the receiver.
- [stop()](stop%28%29.md): Stops the animation represented by the receiver.
- [isAnimating](isanimating.md): A Boolean value indicating whether the animation is in progress.
- [currentValue](currentvalue.md): The current value of the animation effect, based on the current progress

# currentProgress (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The current progress of the animation.

## Declaration

```objectivec
@property NSAnimationProgress currentProgress;
```

<a id="Discussion"></a>

## Discussion

This property contains the completion percentage of the animation. Valid values are in the range `0.0` to `1.0`, where `0.0` represents the beginning of the animation and `1.0` represents the end of the animation.

Changing the value of this property adjusts the progress of a running animation. Setting this property to a value less than `0.0` sets the value of the property to `0.0`. Similarly, specifying a value greater than `1.0` changes the value of the property to `1.0`.  The `NSAnimation` class updates the value of this property during the animation. To perform additional tasks at specific progress points, use the delegate’s [animation:valueForProgress:](../nsanimationdelegate/animation%28__valueforprogress_%29.md) method.

## See Also

### Controlling and Monitoring an Animation

- [startAnimation](start%28%29.md): Starts the animation represented by the receiver.
- [stopAnimation](stop%28%29.md): Stops the animation represented by the receiver.
- [animating](isanimating.md): A Boolean value indicating whether the animation is in progress.
- [currentValue](currentvalue.md): The current value of the animation effect, based on the current progress
