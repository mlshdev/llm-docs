> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspagecontrollerdelegate/pagecontrollerwillstartlivetransition(_:)](https://developer.apple.com/documentation/appkit/nspagecontrollerdelegate/pagecontrollerwillstartlivetransition(_:))

# pageControllerWillStartLiveTransition(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.8+

This message is sent when the user begins a transition.

## Declaration

```swift
@MainActor optional func pageControllerWillStartLiveTransition(_ pageController: NSPageController)
```

## Parameters

- `pageController`: The page controller.

<a id="Discussion"></a>

## Discussion

This message is sent when the user begins a transition whether via a swipe gesture of one of the page controller’s target-action navigation methods.

## See Also

### Transition Notification

- [pageControllerDidEndLiveTransition(\_:)](pagecontrollerdidendlivetransition%28__%29.md): This message is sent when a transition animation completes.
- [pageController(\_:didTransitionTo:)](pagecontroller%28__didtransitionto_%29.md): This message is sent when any page transition is completed.

# pageControllerWillStartLiveTransition: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

This message is sent when the user begins a transition.

## Declaration

```objectivec
- (void) pageControllerWillStartLiveTransition:(NSPageController *) pageController;
```

## Parameters

- `pageController`: The page controller.

<a id="Discussion"></a>

## Discussion

This message is sent when the user begins a transition whether via a swipe gesture of one of the page controller’s target-action navigation methods.

## See Also

### Transition Notification

- [pageControllerDidEndLiveTransition:](pagecontrollerdidendlivetransition%28__%29.md): This message is sent when a transition animation completes.
- [pageController:didTransitionToObject:](pagecontroller%28__didtransitionto_%29.md): This message is sent when any page transition is completed.
