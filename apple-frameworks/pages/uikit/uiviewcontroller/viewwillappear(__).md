> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontroller/viewwillappear(_:)](https://developer.apple.com/documentation/uikit/uiviewcontroller/viewwillappear(_:))

# viewWillAppear(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Notifies the view controller that its view is about to be added to a view hierarchy.

## Declaration

```swift
func viewWillAppear(_ animated: Bool)
```

## Parameters

- `animated`: If [true](https://developer.apple.com/documentation/swift/true), the view is being added to the window using an animation.

## Mentioned In

- [Displaying and managing views with a view controller](../displaying-and-managing-views-with-a-view-controller.md)
- [Enhancing your app with fluid transitions](../enhancing-your-app-with-fluid-transitions.md)
- [Handling row selection in a table view](../handling-row-selection-in-a-table-view.md)

<a id="Discussion"></a>

## Discussion

This method is called before the view controller’s view is about to be added to a view hierarchy and before any animations are configured for showing the view. You can override this method to perform custom tasks associated with displaying the view. For example, you might use this method to change the orientation or style of the status bar to coordinate with the orientation or style of the view being presented. If you override this method, you must call `super` at some point in your implementation.

For more information about the how views are added to view hierarchies by a view controller, and the sequence of messages that occur, see [Supporting Accessibility](https://developer.apple.com/library/archive/featuredarticles/ViewControllerPGforiPhoneOS/SupportingAccessibility.html#//apple_ref/doc/uid/TP40007457-CH12).

> **Note**

>  If a view controller is presented by a view controller inside of a popover, this method is not invoked on the presenting view controller after the presented controller is dismissed.

## See Also

### Responding to view-related events

- [viewIsAppearing(\_:)](viewisappearing%28__%29.md): Notifies the view controller that the system is adding the view controller’s view to a view hierarchy.
- [viewDidAppear(\_:)](viewdidappear%28__%29.md): Notifies the view controller that its view was added to a view hierarchy.
- [viewWillDisappear(\_:)](viewwilldisappear%28__%29.md): Notifies the view controller that its view is about to be removed from a view hierarchy.
- [viewDidDisappear(\_:)](viewdiddisappear%28__%29.md): Notifies the view controller that its view was removed from a view hierarchy.
- [isBeingDismissed](isbeingdismissed.md): A Boolean value indicating whether the view controller is in the process of being dismissed by one of its ancestors.
- [isBeingPresented](isbeingpresented.md): A Boolean value indicating whether the view controller in the process of being presented by one of its ancestors.
- [isMovingFromParent](ismovingfromparent.md): A Boolean value indicating whether the view controller is moving from a parent view controller.
- [isMovingToParent](ismovingtoparent.md): A Boolean value indicating whether the view controller is moving to a parent view controller.

# viewWillAppear: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Notifies the view controller that its view is about to be added to a view hierarchy.

## Declaration

```objectivec
- (void) viewWillAppear:(BOOL) animated;
```

## Parameters

- `animated`: If [true](https://developer.apple.com/documentation/swift/true), the view is being added to the window using an animation.

## Mentioned In

- [Displaying and managing views with a view controller](../displaying-and-managing-views-with-a-view-controller.md)
- [Enhancing your app with fluid transitions](../enhancing-your-app-with-fluid-transitions.md)
- [Handling row selection in a table view](../handling-row-selection-in-a-table-view.md)

<a id="Discussion"></a>

## Discussion

This method is called before the view controller’s view is about to be added to a view hierarchy and before any animations are configured for showing the view. You can override this method to perform custom tasks associated with displaying the view. For example, you might use this method to change the orientation or style of the status bar to coordinate with the orientation or style of the view being presented. If you override this method, you must call `super` at some point in your implementation.

For more information about the how views are added to view hierarchies by a view controller, and the sequence of messages that occur, see [Supporting Accessibility](https://developer.apple.com/library/archive/featuredarticles/ViewControllerPGforiPhoneOS/SupportingAccessibility.html#//apple_ref/doc/uid/TP40007457-CH12).

> **Note**

>  If a view controller is presented by a view controller inside of a popover, this method is not invoked on the presenting view controller after the presented controller is dismissed.

## See Also

### Responding to view-related events

- [viewIsAppearing:](viewisappearing%28__%29.md): Notifies the view controller that the system is adding the view controller’s view to a view hierarchy.
- [viewDidAppear:](viewdidappear%28__%29.md): Notifies the view controller that its view was added to a view hierarchy.
- [viewWillDisappear:](viewwilldisappear%28__%29.md): Notifies the view controller that its view is about to be removed from a view hierarchy.
- [viewDidDisappear:](viewdiddisappear%28__%29.md): Notifies the view controller that its view was removed from a view hierarchy.
- [beingDismissed](isbeingdismissed.md): A Boolean value indicating whether the view controller is in the process of being dismissed by one of its ancestors.
- [beingPresented](isbeingpresented.md): A Boolean value indicating whether the view controller in the process of being presented by one of its ancestors.
- [movingFromParentViewController](ismovingfromparent.md): A Boolean value indicating whether the view controller is moving from a parent view controller.
- [movingToParentViewController](ismovingtoparent.md): A Boolean value indicating whether the view controller is moving to a parent view controller.
