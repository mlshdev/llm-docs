> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsanimationdelegate](https://developer.apple.com/documentation/appkit/nsanimationdelegate)

# NSAnimationDelegate (Swift)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A set of optional methods implemented by delegates of [NSAnimation](nsanimation.md) objects.

## Declaration

```swift
protocol NSAnimationDelegate : NSObjectProtocol
```

## Topics

### Controlling and Monitoring an Animation

- [animationDidEnd(\_:)](nsanimationdelegate/animationdidend%28__%29.md): Sent to the delegate when the specified animation completes its run.
- [animationDidStop(\_:)](nsanimationdelegate/animationdidstop%28__%29.md): Sent to the delegate when the specified animation is stopped before it completes its run.
- [animationShouldStart(\_:)](nsanimationdelegate/animationshouldstart%28__%29.md): Sent to the delegate just after an animation is started.
- [animation(\_:valueForProgress:)](nsanimationdelegate/animation%28__valueforprogress_%29.md): Requests a custom curve value for the current progress value.

### Managing Progress Marks

- [animation(\_:didReachProgressMark:)](nsanimationdelegate/animation%28__didreachprogressmark_%29.md): Sent to the delegate when an animation reaches a specific progress mark.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

### Conforming Types

- [NSTitlebarAccessoryViewController](nstitlebaraccessoryviewcontroller.md)

## See Also

### Custom Animations

- [NSAnimation](nsanimation.md): An object that manages the timing and progress of animations in the user interface.

# NSAnimationDelegate (Objective-C)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A set of optional methods implemented by delegates of [NSAnimation](nsanimation.md) objects.

## Declaration

```objectivec
@protocol NSAnimationDelegate <NSObject>
```

## Topics

### Controlling and Monitoring an Animation

- [animationDidEnd:](nsanimationdelegate/animationdidend%28__%29.md): Sent to the delegate when the specified animation completes its run.
- [animationDidStop:](nsanimationdelegate/animationdidstop%28__%29.md): Sent to the delegate when the specified animation is stopped before it completes its run.
- [animationShouldStart:](nsanimationdelegate/animationshouldstart%28__%29.md): Sent to the delegate just after an animation is started.
- [animation:valueForProgress:](nsanimationdelegate/animation%28__valueforprogress_%29.md): Requests a custom curve value for the current progress value.

### Managing Progress Marks

- [animation:didReachProgressMark:](nsanimationdelegate/animation%28__didreachprogressmark_%29.md): Sent to the delegate when an animation reaches a specific progress mark.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

### Conforming Types

- [NSTitlebarAccessoryViewController](nstitlebaraccessoryviewcontroller.md)

## See Also

### Custom Animations

- [NSAnimation](nsanimation.md): An object that manages the timing and progress of animations in the user interface.
