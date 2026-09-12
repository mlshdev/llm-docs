> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspagecontrollerdelegate/pagecontroller(_:didtransitionto:)](https://developer.apple.com/documentation/appkit/nspagecontrollerdelegate/pagecontroller(_:didtransitionto:))

# pageController(\_:didTransitionTo:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.8+

This message is sent when any page transition is completed.

## Declaration

```swift
@MainActor optional func pageController(_ pageController: NSPageController, didTransitionTo object: Any)
```

## Parameters

- `pageController`: The page controller.
- `object`: The object to display.

## See Also

### Transition Notification

- [pageControllerWillStartLiveTransition(\_:)](pagecontrollerwillstartlivetransition%28__%29.md): This message is sent when the user begins a transition.
- [pageControllerDidEndLiveTransition(\_:)](pagecontrollerdidendlivetransition%28__%29.md): This message is sent when a transition animation completes.

# pageController:didTransitionToObject: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

This message is sent when any page transition is completed.

## Declaration

```objectivec
- (void) pageController:(NSPageController *) pageController didTransitionToObject:(id) object;
```

## Parameters

- `pageController`: The page controller.
- `object`: The object to display.

## See Also

### Transition Notification

- [pageControllerWillStartLiveTransition:](pagecontrollerwillstartlivetransition%28__%29.md): This message is sent when the user begins a transition.
- [pageControllerDidEndLiveTransition:](pagecontrollerdidendlivetransition%28__%29.md): This message is sent when a transition animation completes.
