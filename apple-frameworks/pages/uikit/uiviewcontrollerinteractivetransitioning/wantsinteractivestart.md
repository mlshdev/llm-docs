> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontrollerinteractivetransitioning/wantsinteractivestart](https://developer.apple.com/documentation/uikit/uiviewcontrollerinteractivetransitioning/wantsinteractivestart)

# wantsInteractiveStart (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

A Boolean value indicating whether the transition is interactive when it starts.

## Declaration

```swift
optional var wantsInteractiveStart: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) when the transition is interactive from the moment it starts. The property is [false](https://developer.apple.com/documentation/swift/false) when the transition starts off as noninteractive. However, even a transition that starts off as noninteractive may become interactive later if it implements the [interruptibleAnimator(using:)](../uiviewcontrolleranimatedtransitioning/interruptibleanimator%28using_%29.md) method of the [UIViewControllerAnimatedTransitioning](../uiviewcontrolleranimatedtransitioning.md) protocol.

## See Also

### Starting an interactive transition

- [startInteractiveTransition(\_:)](startinteractivetransition%28__%29.md): Called when the system needs to set up the interactive portions of a view controller transition and start the animations.

# wantsInteractiveStart (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

A Boolean value indicating whether the transition is interactive when it starts.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL wantsInteractiveStart;
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) when the transition is interactive from the moment it starts. The property is [false](https://developer.apple.com/documentation/swift/false) when the transition starts off as noninteractive. However, even a transition that starts off as noninteractive may become interactive later if it implements the [interruptibleAnimatorForTransition:](../uiviewcontrolleranimatedtransitioning/interruptibleanimator%28using_%29.md) method of the [UIViewControllerAnimatedTransitioning](../uiviewcontrolleranimatedtransitioning.md) protocol.

## See Also

### Starting an interactive transition

- [startInteractiveTransition:](startinteractivetransition%28__%29.md): Called when the system needs to set up the interactive portions of a view controller transition and start the animations.
