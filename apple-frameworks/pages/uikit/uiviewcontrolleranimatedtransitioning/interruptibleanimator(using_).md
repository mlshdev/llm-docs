> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontrolleranimatedtransitioning/interruptibleanimator(using:)](https://developer.apple.com/documentation/uikit/uiviewcontrolleranimatedtransitioning/interruptibleanimator(using:))

# interruptibleAnimator(using:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

Returns the interruptible animator to use during the transition.

## Declaration

```swift
optional func interruptibleAnimator(using transitionContext: any UIViewControllerContextTransitioning) -> any UIViewImplicitlyAnimating
```

## Parameters

- `transitionContext`: The context object containing information to use during the transition.

<a id="return-value"></a>

## Return Value

An animator object that supports the modification of its running animations.

<a id="Discussion"></a>

## Discussion

Implement this method when you want to perform your transitions using an interruptible animator object, such as a [UIViewPropertyAnimator](../uiviewpropertyanimator.md) object. You must return the same animator object for the duration of the transition.

# interruptibleAnimatorForTransition: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

Returns the interruptible animator to use during the transition.

## Declaration

```objectivec
- (id<UIViewImplicitlyAnimating>) interruptibleAnimatorForTransition:(id<UIViewControllerContextTransitioning>) transitionContext;
```

## Parameters

- `transitionContext`: The context object containing information to use during the transition.

<a id="return-value"></a>

## Return Value

An animator object that supports the modification of its running animations.

<a id="Discussion"></a>

## Discussion

Implement this method when you want to perform your transitions using an interruptible animator object, such as a [UIViewPropertyAnimator](../uiviewpropertyanimator.md) object. You must return the same animator object for the duration of the transition.
