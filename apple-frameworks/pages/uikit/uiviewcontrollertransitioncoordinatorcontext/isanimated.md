> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontrollertransitioncoordinatorcontext/isanimated](https://developer.apple.com/documentation/uikit/uiviewcontrollertransitioncoordinatorcontext/isanimated)

# isAnimated (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

A Boolean value indicating whether the transition is explicitly animated.

## Declaration

```swift
var isAnimated: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is [false](https://developer.apple.com/documentation/swift/false) for custom transitions — transitions where the view controller’s [modalPresentationStyle](../uiviewcontroller/modalpresentationstyle.md) property is set to [UIModalPresentationStyle.custom](../uimodalpresentationstyle/custom.md) — even when the transition is started by a call to the [animateTransition(using:)](../uiviewcontrolleranimatedtransitioning/animatetransition%28using_%29.md) method. In nearly all other cases, the value of this property is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Getting the transition state

- [initiallyInteractive](initiallyinteractive.md): A Boolean value indicating whether the transition started as an interactive transition.
- [isInteractive](isinteractive.md): A Boolean value indicating whether the transition is currently interactive.
- [isCancelled](iscancelled.md): A Boolean value indicating whether an interactive transition was canceled.
- [isInterruptible](isinterruptible.md): A Boolean value indicating whether the transition animations can be interrupted.

# animated (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

A Boolean value indicating whether the transition is explicitly animated.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isAnimated) BOOL animated;
```

<a id="Discussion"></a>

## Discussion

The value of this property is [false](https://developer.apple.com/documentation/swift/false) for custom transitions — transitions where the view controller’s [modalPresentationStyle](../uiviewcontroller/modalpresentationstyle.md) property is set to [UIModalPresentationCustom](../uimodalpresentationstyle/custom.md) — even when the transition is started by a call to the [animateTransition:](../uiviewcontrolleranimatedtransitioning/animatetransition%28using_%29.md) method. In nearly all other cases, the value of this property is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Getting the transition state

- [initiallyInteractive](initiallyinteractive.md): A Boolean value indicating whether the transition started as an interactive transition.
- [interactive](isinteractive.md): A Boolean value indicating whether the transition is currently interactive.
- [cancelled](iscancelled.md): A Boolean value indicating whether an interactive transition was canceled.
- [isInterruptible](isinterruptible.md): A Boolean value indicating whether the transition animations can be interrupted.
