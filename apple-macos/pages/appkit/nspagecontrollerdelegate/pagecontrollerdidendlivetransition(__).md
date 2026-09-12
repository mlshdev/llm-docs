> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspagecontrollerdelegate/pagecontrollerdidendlivetransition(_:)](https://developer.apple.com/documentation/appkit/nspagecontrollerdelegate/pagecontrollerdidendlivetransition(_:))

# pageControllerDidEndLiveTransition(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.8+

This message is sent when a transition animation completes.

## Declaration

```swift
@MainActor optional func pageControllerDidEndLiveTransition(_ pageController: NSPageController)
```

## Parameters

- `pageController`: The page controller.

<a id="Discussion"></a>

## Discussion

This message is sent when a transition animation completes either via swipe gesture or one of the page controller’s target-action navigation methods.

Your content view is still hidden and you must call the [completeTransition()](../nspagecontroller/completetransition%28%29.md) method on `pageController` when your content is ready to show.

If completed successfully, a [pageController(\_:didTransitionTo:)](pagecontroller%28__didtransitionto_%29.md) will already have been sent.

## See Also

### Transition Notification

- [pageControllerWillStartLiveTransition(\_:)](pagecontrollerwillstartlivetransition%28__%29.md): This message is sent when the user begins a transition.
- [pageController(\_:didTransitionTo:)](pagecontroller%28__didtransitionto_%29.md): This message is sent when any page transition is completed.

# pageControllerDidEndLiveTransition: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

This message is sent when a transition animation completes.

## Declaration

```objectivec
- (void) pageControllerDidEndLiveTransition:(NSPageController *) pageController;
```

## Parameters

- `pageController`: The page controller.

<a id="Discussion"></a>

## Discussion

This message is sent when a transition animation completes either via swipe gesture or one of the page controller’s target-action navigation methods.

Your content view is still hidden and you must call the [completeTransition](../nspagecontroller/completetransition%28%29.md) method on `pageController` when your content is ready to show.

If completed successfully, a [pageController:didTransitionToObject:](pagecontroller%28__didtransitionto_%29.md) will already have been sent.

## See Also

### Transition Notification

- [pageControllerWillStartLiveTransition:](pagecontrollerwillstartlivetransition%28__%29.md): This message is sent when the user begins a transition.
- [pageController:didTransitionToObject:](pagecontroller%28__didtransitionto_%29.md): This message is sent when any page transition is completed.
