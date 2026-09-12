> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewanimating/isrunning](https://developer.apple.com/documentation/uikit/uiviewanimating/isrunning)

# isRunning (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

A Boolean value indicating whether the animation is currently running.

## Declaration

```swift
var isRunning: Bool { get }
```

<a id="Discussion"></a>

## Discussion

This property reflects whether the animation is running either in the forward or reverse direction. The value of this property is [true](https://developer.apple.com/documentation/swift/true) only after a call to the [startAnimation()](startanimation%28%29.md) method. The value is [false](https://developer.apple.com/documentation/swift/false) when the animator is paused or stopped.

## See Also

### Getting the animator’s state

- [fractionComplete](fractioncomplete.md): The completion percentage of the animation.
- [isReversed](isreversed.md): A Boolean value indicating whether the animation is running in the reverse direction.
- [state](state.md): The current state of the animation.

# running (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

A Boolean value indicating whether the animation is currently running.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isRunning) BOOL running;
```

<a id="Discussion"></a>

## Discussion

This property reflects whether the animation is running either in the forward or reverse direction. The value of this property is [true](https://developer.apple.com/documentation/swift/true) only after a call to the [startAnimation](startanimation%28%29.md) method. The value is [false](https://developer.apple.com/documentation/swift/false) when the animator is paused or stopped.

## See Also

### Getting the animator’s state

- [fractionComplete](fractioncomplete.md): The completion percentage of the animation.
- [reversed](isreversed.md): A Boolean value indicating whether the animation is running in the reverse direction.
- [state](state.md): The current state of the animation.
