> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontrollertransitioncoordinatorcontext/initiallyinteractive](https://developer.apple.com/documentation/uikit/uiviewcontrollertransitioncoordinatorcontext/initiallyinteractive)

# initiallyInteractive (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

A Boolean value indicating whether the transition started as an interactive transition.

## Declaration

```swift
var initiallyInteractive: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) when the transition was initiated interactively and the [isAnimated](isanimated.md) property is also set to [true](https://developer.apple.com/documentation/swift/true); otherwise, the value is [false](https://developer.apple.com/documentation/swift/false). The value of this property doesn’t change during the course of a transition. To determine whether the transition is currently interactive, use the [isInteractive](isinteractive.md) method instead.

## See Also

### Getting the transition state

- [isInteractive](isinteractive.md): A Boolean value indicating whether the transition is currently interactive.
- [isAnimated](isanimated.md): A Boolean value indicating whether the transition is explicitly animated.
- [isCancelled](iscancelled.md): A Boolean value indicating whether an interactive transition was canceled.
- [isInterruptible](isinterruptible.md): A Boolean value indicating whether the transition animations can be interrupted.

# initiallyInteractive (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

A Boolean value indicating whether the transition started as an interactive transition.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL initiallyInteractive;
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) when the transition was initiated interactively and the [animated](isanimated.md) property is also set to [true](https://developer.apple.com/documentation/swift/true); otherwise, the value is [false](https://developer.apple.com/documentation/swift/false). The value of this property doesn’t change during the course of a transition. To determine whether the transition is currently interactive, use the [interactive](isinteractive.md) method instead.

## See Also

### Getting the transition state

- [interactive](isinteractive.md): A Boolean value indicating whether the transition is currently interactive.
- [animated](isanimated.md): A Boolean value indicating whether the transition is explicitly animated.
- [cancelled](iscancelled.md): A Boolean value indicating whether an interactive transition was canceled.
- [isInterruptible](isinterruptible.md): A Boolean value indicating whether the transition animations can be interrupted.
