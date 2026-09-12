> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontrolleranimatedtransitioning/transitionduration(using:)](https://developer.apple.com/documentation/uikit/uiviewcontrolleranimatedtransitioning/transitionduration(using:))

# transitionDuration(using:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Asks your animator object for the duration (in seconds) of the transition animation.

## Declaration

```swift
func transitionDuration(using transitionContext: (any UIViewControllerContextTransitioning)?) -> TimeInterval
```

## Parameters

- `transitionContext`: The context object containing information to use during the transition.

<a id="return-value"></a>

## Return Value

The duration, in seconds, of your custom transition animation.

<a id="Discussion"></a>

## Discussion

UIKit calls this method to obtain the timing information for your animations. The value you provide should be the same value that you use when configuring the animations in your [animateTransition(using:)](animatetransition%28using_%29.md) method. UIKit uses the value to synchronize the actions of other objects that might be involved in the transition. For example, a navigation controller uses the value to synchronize changes to the navigation bar.

When determining the value to return, assume there will be no user interaction during the transition—even if you plan to support user interactions at runtime.

# transitionDuration: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Asks your animator object for the duration (in seconds) of the transition animation.

## Declaration

```objectivec
- (NSTimeInterval) transitionDuration:(id<UIViewControllerContextTransitioning>) transitionContext;
```

## Parameters

- `transitionContext`: The context object containing information to use during the transition.

<a id="return-value"></a>

## Return Value

The duration, in seconds, of your custom transition animation.

<a id="Discussion"></a>

## Discussion

UIKit calls this method to obtain the timing information for your animations. The value you provide should be the same value that you use when configuring the animations in your [animateTransition:](animatetransition%28using_%29.md) method. UIKit uses the value to synchronize the actions of other objects that might be involved in the transition. For example, a navigation controller uses the value to synchronize changes to the navigation bar.

When determining the value to return, assume there will be no user interaction during the transition—even if you plan to support user interactions at runtime.
