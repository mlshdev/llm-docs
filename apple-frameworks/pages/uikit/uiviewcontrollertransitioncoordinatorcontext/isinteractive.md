> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontrollertransitioncoordinatorcontext/isinteractive](https://developer.apple.com/documentation/uikit/uiviewcontrollertransitioncoordinatorcontext/isinteractive)

# isInteractive (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

A Boolean value indicating whether the transition is currently interactive.

## Declaration

```swift
var isInteractive: Bool { get }
```

<a id="Discussion"></a>

## Discussion

Every interactive transition has at least one noninteractive segment — namely, when it’s completing. In addition, you can design an interactive transition to have intermediate segments that are noninteractive.

If the [initiallyInteractive](initiallyinteractive.md) property is set to [false](https://developer.apple.com/documentation/swift/false), the value of this property can be [true](https://developer.apple.com/documentation/swift/true) only when the [isInterruptible](isinterruptible.md) property is also [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Getting the transition state

- [initiallyInteractive](initiallyinteractive.md): A Boolean value indicating whether the transition started as an interactive transition.
- [isAnimated](isanimated.md): A Boolean value indicating whether the transition is explicitly animated.
- [isCancelled](iscancelled.md): A Boolean value indicating whether an interactive transition was canceled.
- [isInterruptible](isinterruptible.md): A Boolean value indicating whether the transition animations can be interrupted.

# interactive (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

A Boolean value indicating whether the transition is currently interactive.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isInteractive) BOOL interactive;
```

<a id="Discussion"></a>

## Discussion

Every interactive transition has at least one noninteractive segment — namely, when it’s completing. In addition, you can design an interactive transition to have intermediate segments that are noninteractive.

If the [initiallyInteractive](initiallyinteractive.md) property is set to [false](https://developer.apple.com/documentation/swift/false), the value of this property can be [true](https://developer.apple.com/documentation/swift/true) only when the [isInterruptible](isinterruptible.md) property is also [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Getting the transition state

- [initiallyInteractive](initiallyinteractive.md): A Boolean value indicating whether the transition started as an interactive transition.
- [animated](isanimated.md): A Boolean value indicating whether the transition is explicitly animated.
- [cancelled](iscancelled.md): A Boolean value indicating whether an interactive transition was canceled.
- [isInterruptible](isinterruptible.md): A Boolean value indicating whether the transition animations can be interrupted.
