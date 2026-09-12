> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontroller/viewwilldisappear(_:)](https://developer.apple.com/documentation/uikit/uiviewcontroller/viewwilldisappear(_:))

# viewWillDisappear(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Notifies the view controller that its view is about to be removed from a view hierarchy.

## Declaration

```swift
func viewWillDisappear(_ animated: Bool)
```

## Parameters

- `animated`: If [true](https://developer.apple.com/documentation/swift/true), the disappearance of the view is being animated.

## Mentioned In

- [Enhancing your app with fluid transitions](../enhancing-your-app-with-fluid-transitions.md)

<a id="Discussion"></a>

## Discussion

This method is called in response to a view being removed from a view hierarchy. This method is called before the view is actually removed and before any animations are configured.

Subclasses can override this method and use it to commit editing changes, resign the first responder status of the view, or perform other relevant tasks. For example, you might use this method to revert changes to the orientation or style of the status bar that were made in the [viewDidAppear(\_:)](viewdidappear%28__%29.md) method when the view was first presented. If you override this method, you must call `super` at some point in your implementation.

## See Also

### Responding to view-related events

- [viewWillAppear(\_:)](viewwillappear%28__%29.md): Notifies the view controller that its view is about to be added to a view hierarchy.
- [viewIsAppearing(\_:)](viewisappearing%28__%29.md): Notifies the view controller that the system is adding the view controller’s view to a view hierarchy.
- [viewDidAppear(\_:)](viewdidappear%28__%29.md): Notifies the view controller that its view was added to a view hierarchy.
- [viewDidDisappear(\_:)](viewdiddisappear%28__%29.md): Notifies the view controller that its view was removed from a view hierarchy.
- [isBeingDismissed](isbeingdismissed.md): A Boolean value indicating whether the view controller is in the process of being dismissed by one of its ancestors.
- [isBeingPresented](isbeingpresented.md): A Boolean value indicating whether the view controller in the process of being presented by one of its ancestors.
- [isMovingFromParent](ismovingfromparent.md): A Boolean value indicating whether the view controller is moving from a parent view controller.
- [isMovingToParent](ismovingtoparent.md): A Boolean value indicating whether the view controller is moving to a parent view controller.

# viewWillDisappear: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Notifies the view controller that its view is about to be removed from a view hierarchy.

## Declaration

```objectivec
- (void) viewWillDisappear:(BOOL) animated;
```

## Parameters

- `animated`: If [true](https://developer.apple.com/documentation/swift/true), the disappearance of the view is being animated.

## Mentioned In

- [Enhancing your app with fluid transitions](../enhancing-your-app-with-fluid-transitions.md)

<a id="Discussion"></a>

## Discussion

This method is called in response to a view being removed from a view hierarchy. This method is called before the view is actually removed and before any animations are configured.

Subclasses can override this method and use it to commit editing changes, resign the first responder status of the view, or perform other relevant tasks. For example, you might use this method to revert changes to the orientation or style of the status bar that were made in the [viewDidAppear:](viewdidappear%28__%29.md) method when the view was first presented. If you override this method, you must call `super` at some point in your implementation.

## See Also

### Responding to view-related events

- [viewWillAppear:](viewwillappear%28__%29.md): Notifies the view controller that its view is about to be added to a view hierarchy.
- [viewIsAppearing:](viewisappearing%28__%29.md): Notifies the view controller that the system is adding the view controller’s view to a view hierarchy.
- [viewDidAppear:](viewdidappear%28__%29.md): Notifies the view controller that its view was added to a view hierarchy.
- [viewDidDisappear:](viewdiddisappear%28__%29.md): Notifies the view controller that its view was removed from a view hierarchy.
- [beingDismissed](isbeingdismissed.md): A Boolean value indicating whether the view controller is in the process of being dismissed by one of its ancestors.
- [beingPresented](isbeingpresented.md): A Boolean value indicating whether the view controller in the process of being presented by one of its ancestors.
- [movingFromParentViewController](ismovingfromparent.md): A Boolean value indicating whether the view controller is moving from a parent view controller.
- [movingToParentViewController](ismovingtoparent.md): A Boolean value indicating whether the view controller is moving to a parent view controller.
