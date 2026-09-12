> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsanimation/currentvalue](https://developer.apple.com/documentation/appkit/nsanimation/currentvalue)

# currentValue (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The current value of the animation effect, based on the current progress

## Declaration

```swift
var currentValue: Float { get }
```

<a id="Discussion"></a>

## Discussion

An `NSAnimation` object gets the current value from delegate’s [animation(\_:valueForProgress:)](../nsanimationdelegate/animation%28__valueforprogress_%29.md) method. If that method is not implemented, the animation computes the current value from the current progress by factoring in the animation curve. An animation object does not access this property directly. Instances of `NSAnimation` subclasses or other objects can invoke this method on a periodic basis to get the current value.

Subclasses may override this property and return a custom curve value instead of implementing [animation(\_:valueForProgress:)](../nsanimationdelegate/animation%28__valueforprogress_%29.md), thereby saving on the overhead of using a delegate. The current value can be less than `0.0` or greater than `1.0`. For example, if you make the value greater than `1.0` you can achieve a “rubber effect” where the size of a view is temporarily larger before its final size.

## See Also

### Related Documentation

- [animationCurve](animationcurve.md): The timing curve for the animation.

### Controlling and Monitoring an Animation

- [start()](start%28%29.md): Starts the animation represented by the receiver.
- [stop()](stop%28%29.md): Stops the animation represented by the receiver.
- [isAnimating](isanimating.md): A Boolean value indicating whether the animation is in progress.
- [currentProgress](currentprogress.md): The current progress of the animation.

# currentValue (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The current value of the animation effect, based on the current progress

## Declaration

```objectivec
@property (readonly) float currentValue;
```

<a id="Discussion"></a>

## Discussion

An `NSAnimation` object gets the current value from delegate’s [animation:valueForProgress:](../nsanimationdelegate/animation%28__valueforprogress_%29.md) method. If that method is not implemented, the animation computes the current value from the current progress by factoring in the animation curve. An animation object does not access this property directly. Instances of `NSAnimation` subclasses or other objects can invoke this method on a periodic basis to get the current value.

Subclasses may override this property and return a custom curve value instead of implementing [animation:valueForProgress:](../nsanimationdelegate/animation%28__valueforprogress_%29.md), thereby saving on the overhead of using a delegate. The current value can be less than `0.0` or greater than `1.0`. For example, if you make the value greater than `1.0` you can achieve a “rubber effect” where the size of a view is temporarily larger before its final size.

## See Also

### Related Documentation

- [animationCurve](animationcurve.md): The timing curve for the animation.

### Controlling and Monitoring an Animation

- [startAnimation](start%28%29.md): Starts the animation represented by the receiver.
- [stopAnimation](stop%28%29.md): Stops the animation represented by the receiver.
- [animating](isanimating.md): A Boolean value indicating whether the animation is in progress.
- [currentProgress](currentprogress.md): The current progress of the animation.
