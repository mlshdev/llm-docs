> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontrollercontexttransitioning](https://developer.apple.com/documentation/uikit/uiviewcontrollercontexttransitioning)

# UIViewControllerContextTransitioning (Swift)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

A set of methods that provide contextual information for transition animations between view controllers.

## Declaration

```swift
@MainActor protocol UIViewControllerContextTransitioning : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Don’t adopt this protocol in your own classes, nor should you directly create objects that adopt this protocol. During a transition, the animator objects involved in that transition receive a fully configured context object from UIKit. Custom animator objects — objects that adopt the [UIViewControllerAnimatedTransitioning](uiviewcontrolleranimatedtransitioning.md) or [UIViewControllerInteractiveTransitioning](uiviewcontrollerinteractivetransitioning.md) protocol — should simply retrieve the information they need from the provided object.

A context object encapsulates information about the views and view controllers involved in the transition. It also contains details about the how to execute the transition. For interactive transitions, the interactive animator object uses the methods of this protocol to report the animation’s progress. When the animation starts, the interactive animator object must save a pointer to the context object. Based on user interactions, the animator object then calls the [updateInteractiveTransition(\_:)](uiviewcontrollercontexttransitioning/updateinteractivetransition%28__%29.md), [finishInteractiveTransition()](uiviewcontrollercontexttransitioning/finishinteractivetransition%28%29.md), or [cancelInteractiveTransition()](uiviewcontrollercontexttransitioning/cancelinteractivetransition%28%29.md) methods to report the progress toward completing the animation. Those methods send that information to UIKit so that it can drive the timing of the animations.

> **Important**

>  When defining custom animator objects, always check the value returned by the [isAnimated](uiviewcontrollercontexttransitioning/isanimated.md) method to determine whether you should create animations at all. And when you do create transition animations, always call the [completeTransition(\_:)](uiviewcontrollercontexttransitioning/completetransition%28__%29.md) method from an appropriate completion block to let UIKit know when all of your animations have finished.

## Topics

### Accessing the transition objects

- [containerView](uiviewcontrollercontexttransitioning/containerview.md): The view that acts as the superview for the views involved in the transition.
- [viewController(forKey:)](uiviewcontrollercontexttransitioning/viewcontroller%28forkey_%29.md): Returns a view controller involved in the transition.
- [view(forKey:)](uiviewcontrollercontexttransitioning/view%28forkey_%29.md): Returns the specified view involved in the transition.

### Getting the transition frame rectangles

- [initialFrame(for:)](uiviewcontrollercontexttransitioning/initialframe%28for_%29.md): Returns the starting frame rectangle for the specified view controller’s view.
- [finalFrame(for:)](uiviewcontrollercontexttransitioning/finalframe%28for_%29.md): Returns the ending frame rectangle for the specified view controller’s view.

### Getting the transition behaviors

- [isAnimated](uiviewcontrollercontexttransitioning/isanimated.md): A Boolean value indicating whether the transition should be animated.
- [isInteractive](uiviewcontrollercontexttransitioning/isinteractive.md): A Boolean value indicating whether the transition is currently interactive.
- [presentationStyle](uiviewcontrollercontexttransitioning/presentationstyle.md): Returns the presentation style for the view controller transition.

### Reporting the transition progress

- [completeTransition(\_:)](uiviewcontrollercontexttransitioning/completetransition%28__%29.md): Notifies the system that the transition animation is done.
- [updateInteractiveTransition(\_:)](uiviewcontrollercontexttransitioning/updateinteractivetransition%28__%29.md): Updates the completion percentage of the transition.
- [pauseInteractiveTransition()](uiviewcontrollercontexttransitioning/pauseinteractivetransition%28%29.md): Tells the system to pause the animations.
- [finishInteractiveTransition()](uiviewcontrollercontexttransitioning/finishinteractivetransition%28%29.md): Notifies the system that user interactions signaled the completion of the transition.
- [cancelInteractiveTransition()](uiviewcontrollercontexttransitioning/cancelinteractivetransition%28%29.md): Notifies the system that user interactions canceled the transition.
- [transitionWasCancelled](uiviewcontrollercontexttransitioning/transitionwascancelled.md): Returns a Boolean value indicating whether the transition was canceled.

### Getting the rotation factor

- [targetTransform](uiviewcontrollercontexttransitioning/targettransform.md): Returns a transform indicating the amount of rotation being applied during the transition.

### Constants

- [UITransitionContextViewControllerKey](uitransitioncontextviewcontrollerkey.md): The keys you use to identify the view controllers involved in a transition.
- [UITransitionContextViewKey](uitransitioncontextviewkey.md): The keys you use to identify the views involved in a transition.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Non-interactive transitions

- [UIViewControllerAnimatedTransitioning](uiviewcontrolleranimatedtransitioning.md): A set of methods for implementing the animations for a custom view controller transition.

# UIViewControllerContextTransitioning (Objective-C)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

A set of methods that provide contextual information for transition animations between view controllers.

## Declaration

```objectivec
@protocol UIViewControllerContextTransitioning <NSObject>
```

<a id="overview"></a>

## Overview

Don’t adopt this protocol in your own classes, nor should you directly create objects that adopt this protocol. During a transition, the animator objects involved in that transition receive a fully configured context object from UIKit. Custom animator objects — objects that adopt the [UIViewControllerAnimatedTransitioning](uiviewcontrolleranimatedtransitioning.md) or [UIViewControllerInteractiveTransitioning](uiviewcontrollerinteractivetransitioning.md) protocol — should simply retrieve the information they need from the provided object.

A context object encapsulates information about the views and view controllers involved in the transition. It also contains details about the how to execute the transition. For interactive transitions, the interactive animator object uses the methods of this protocol to report the animation’s progress. When the animation starts, the interactive animator object must save a pointer to the context object. Based on user interactions, the animator object then calls the [updateInteractiveTransition:](uiviewcontrollercontexttransitioning/updateinteractivetransition%28__%29.md), [finishInteractiveTransition](uiviewcontrollercontexttransitioning/finishinteractivetransition%28%29.md), or [cancelInteractiveTransition](uiviewcontrollercontexttransitioning/cancelinteractivetransition%28%29.md) methods to report the progress toward completing the animation. Those methods send that information to UIKit so that it can drive the timing of the animations.

> **Important**

>  When defining custom animator objects, always check the value returned by the [animated](uiviewcontrollercontexttransitioning/isanimated.md) method to determine whether you should create animations at all. And when you do create transition animations, always call the [completeTransition:](uiviewcontrollercontexttransitioning/completetransition%28__%29.md) method from an appropriate completion block to let UIKit know when all of your animations have finished.

## Topics

### Accessing the transition objects

- [containerView](uiviewcontrollercontexttransitioning/containerview.md): The view that acts as the superview for the views involved in the transition.
- [viewControllerForKey:](uiviewcontrollercontexttransitioning/viewcontroller%28forkey_%29.md): Returns a view controller involved in the transition.
- [viewForKey:](uiviewcontrollercontexttransitioning/view%28forkey_%29.md): Returns the specified view involved in the transition.

### Getting the transition frame rectangles

- [initialFrameForViewController:](uiviewcontrollercontexttransitioning/initialframe%28for_%29.md): Returns the starting frame rectangle for the specified view controller’s view.
- [finalFrameForViewController:](uiviewcontrollercontexttransitioning/finalframe%28for_%29.md): Returns the ending frame rectangle for the specified view controller’s view.

### Getting the transition behaviors

- [animated](uiviewcontrollercontexttransitioning/isanimated.md): A Boolean value indicating whether the transition should be animated.
- [interactive](uiviewcontrollercontexttransitioning/isinteractive.md): A Boolean value indicating whether the transition is currently interactive.
- [presentationStyle](uiviewcontrollercontexttransitioning/presentationstyle.md): Returns the presentation style for the view controller transition.

### Reporting the transition progress

- [completeTransition:](uiviewcontrollercontexttransitioning/completetransition%28__%29.md): Notifies the system that the transition animation is done.
- [updateInteractiveTransition:](uiviewcontrollercontexttransitioning/updateinteractivetransition%28__%29.md): Updates the completion percentage of the transition.
- [pauseInteractiveTransition](uiviewcontrollercontexttransitioning/pauseinteractivetransition%28%29.md): Tells the system to pause the animations.
- [finishInteractiveTransition](uiviewcontrollercontexttransitioning/finishinteractivetransition%28%29.md): Notifies the system that user interactions signaled the completion of the transition.
- [cancelInteractiveTransition](uiviewcontrollercontexttransitioning/cancelinteractivetransition%28%29.md): Notifies the system that user interactions canceled the transition.
- [transitionWasCancelled](uiviewcontrollercontexttransitioning/transitionwascancelled.md): Returns a Boolean value indicating whether the transition was canceled.

### Getting the rotation factor

- [targetTransform](uiviewcontrollercontexttransitioning/targettransform.md): Returns a transform indicating the amount of rotation being applied during the transition.

### Constants

- [UITransitionContextViewControllerKey](uitransitioncontextviewcontrollerkey.md): The keys you use to identify the view controllers involved in a transition.
- [UITransitionContextViewKey](uitransitioncontextviewkey.md): The keys you use to identify the views involved in a transition.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Non-interactive transitions

- [UIViewControllerAnimatedTransitioning](uiviewcontrolleranimatedtransitioning.md): A set of methods for implementing the animations for a custom view controller transition.
