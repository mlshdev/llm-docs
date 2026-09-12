> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontrollertransitioncoordinatorcontext/isinterruptible](https://developer.apple.com/documentation/uikit/uiviewcontrollertransitioncoordinatorcontext/isinterruptible)

# isInterruptible (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

A Boolean value indicating whether the transition animations can be interrupted.

## Declaration

```swift
var isInterruptible: Bool { get }
```

## See Also

### Getting the transition state

- [initiallyInteractive](initiallyinteractive.md): A Boolean value indicating whether the transition started as an interactive transition.
- [isInteractive](isinteractive.md): A Boolean value indicating whether the transition is currently interactive.
- [isAnimated](isanimated.md): A Boolean value indicating whether the transition is explicitly animated.
- [isCancelled](iscancelled.md): A Boolean value indicating whether an interactive transition was canceled.

# isInterruptible (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

A Boolean value indicating whether the transition animations can be interrupted.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL isInterruptible;
```

## See Also

### Getting the transition state

- [initiallyInteractive](initiallyinteractive.md): A Boolean value indicating whether the transition started as an interactive transition.
- [interactive](isinteractive.md): A Boolean value indicating whether the transition is currently interactive.
- [animated](isanimated.md): A Boolean value indicating whether the transition is explicitly animated.
- [cancelled](iscancelled.md): A Boolean value indicating whether an interactive transition was canceled.
