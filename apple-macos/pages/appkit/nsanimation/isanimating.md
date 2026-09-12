> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsanimation/isanimating](https://developer.apple.com/documentation/appkit/nsanimation/isanimating)

# isAnimating (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value indicating whether the animation is in progress.

## Declaration

```swift
var isAnimating: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) when the animation is in progress or [false](https://developer.apple.com/documentation/swift/false) when it is stopped.

## See Also

### Controlling and Monitoring an Animation

- [start()](start%28%29.md): Starts the animation represented by the receiver.
- [stop()](stop%28%29.md): Stops the animation represented by the receiver.
- [currentProgress](currentprogress.md): The current progress of the animation.
- [currentValue](currentvalue.md): The current value of the animation effect, based on the current progress

# animating (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value indicating whether the animation is in progress.

## Declaration

```objectivec
@property (readonly, getter=isAnimating) BOOL animating;
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) when the animation is in progress or [false](https://developer.apple.com/documentation/swift/false) when it is stopped.

## See Also

### Controlling and Monitoring an Animation

- [startAnimation](start%28%29.md): Starts the animation represented by the receiver.
- [stopAnimation](stop%28%29.md): Stops the animation represented by the receiver.
- [currentProgress](currentprogress.md): The current progress of the animation.
- [currentValue](currentvalue.md): The current value of the animation effect, based on the current progress
