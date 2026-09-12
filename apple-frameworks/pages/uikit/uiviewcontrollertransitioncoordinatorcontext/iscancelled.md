> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontrollertransitioncoordinatorcontext/iscancelled](https://developer.apple.com/documentation/uikit/uiviewcontrollertransitioncoordinatorcontext/iscancelled)

# isCancelled (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

A Boolean value indicating whether an interactive transition was canceled.

## Declaration

```swift
var isCancelled: Bool { get }
```

## See Also

### Getting the transition state

- [initiallyInteractive](initiallyinteractive.md): A Boolean value indicating whether the transition started as an interactive transition.
- [isInteractive](isinteractive.md): A Boolean value indicating whether the transition is currently interactive.
- [isAnimated](isanimated.md): A Boolean value indicating whether the transition is explicitly animated.
- [isInterruptible](isinterruptible.md): A Boolean value indicating whether the transition animations can be interrupted.

# cancelled (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

A Boolean value indicating whether an interactive transition was canceled.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isCancelled) BOOL cancelled;
```

## See Also

### Getting the transition state

- [initiallyInteractive](initiallyinteractive.md): A Boolean value indicating whether the transition started as an interactive transition.
- [interactive](isinteractive.md): A Boolean value indicating whether the transition is currently interactive.
- [animated](isanimated.md): A Boolean value indicating whether the transition is explicitly animated.
- [isInterruptible](isinterruptible.md): A Boolean value indicating whether the transition animations can be interrupted.
