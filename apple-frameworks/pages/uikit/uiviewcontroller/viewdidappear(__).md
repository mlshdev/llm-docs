> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontroller/viewdidappear(_:)](https://developer.apple.com/documentation/uikit/uiviewcontroller/viewdidappear(_:))

# viewDidAppear(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Notifies the view controller that its view was added to a view hierarchy.

## Declaration

```swift
func viewDidAppear(_ animated: Bool)
```

## Parameters

- `animated`: If [true](https://developer.apple.com/documentation/swift/true), the view was added to the window using an animation.

## Mentioned In

- [Enhancing your app with fluid transitions](../enhancing-your-app-with-fluid-transitions.md)
- [Displaying and managing views with a view controller](../displaying-and-managing-views-with-a-view-controller.md)
- [Positioning content relative to the safe area](../positioning-content-relative-to-the-safe-area.md)

<a id="Discussion"></a>

## Discussion

You can override this method to perform additional tasks associated with presenting the view. If you override this method, you must call `super` at some point in your implementation.

> **Note**

>  If a view controller is presented by a view controller inside of a popover, this method is not invoked on the presenting view controller after the presented controller is dismissed.

## See Also

### Responding to view-related events

- [viewWillAppear(\_:)](viewwillappear%28__%29.md): Notifies the view controller that its view is about to be added to a view hierarchy.
- [viewIsAppearing(\_:)](viewisappearing%28__%29.md): Notifies the view controller that the system is adding the view controller’s view to a view hierarchy.
- [viewWillDisappear(\_:)](viewwilldisappear%28__%29.md): Notifies the view controller that its view is about to be removed from a view hierarchy.
- [viewDidDisappear(\_:)](viewdiddisappear%28__%29.md): Notifies the view controller that its view was removed from a view hierarchy.
- [isBeingDismissed](isbeingdismissed.md): A Boolean value indicating whether the view controller is in the process of being dismissed by one of its ancestors.
- [isBeingPresented](isbeingpresented.md): A Boolean value indicating whether the view controller in the process of being presented by one of its ancestors.
- [isMovingFromParent](ismovingfromparent.md): A Boolean value indicating whether the view controller is moving from a parent view controller.
- [isMovingToParent](ismovingtoparent.md): A Boolean value indicating whether the view controller is moving to a parent view controller.

# viewDidAppear: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Notifies the view controller that its view was added to a view hierarchy.

## Declaration

```objectivec
- (void) viewDidAppear:(BOOL) animated;
```

## Parameters

- `animated`: If [true](https://developer.apple.com/documentation/swift/true), the view was added to the window using an animation.

## Mentioned In

- [Enhancing your app with fluid transitions](../enhancing-your-app-with-fluid-transitions.md)
- [Displaying and managing views with a view controller](../displaying-and-managing-views-with-a-view-controller.md)
- [Positioning content relative to the safe area](../positioning-content-relative-to-the-safe-area.md)

<a id="Discussion"></a>

## Discussion

You can override this method to perform additional tasks associated with presenting the view. If you override this method, you must call `super` at some point in your implementation.

> **Note**

>  If a view controller is presented by a view controller inside of a popover, this method is not invoked on the presenting view controller after the presented controller is dismissed.

## See Also

### Responding to view-related events

- [viewWillAppear:](viewwillappear%28__%29.md): Notifies the view controller that its view is about to be added to a view hierarchy.
- [viewIsAppearing:](viewisappearing%28__%29.md): Notifies the view controller that the system is adding the view controller’s view to a view hierarchy.
- [viewWillDisappear:](viewwilldisappear%28__%29.md): Notifies the view controller that its view is about to be removed from a view hierarchy.
- [viewDidDisappear:](viewdiddisappear%28__%29.md): Notifies the view controller that its view was removed from a view hierarchy.
- [beingDismissed](isbeingdismissed.md): A Boolean value indicating whether the view controller is in the process of being dismissed by one of its ancestors.
- [beingPresented](isbeingpresented.md): A Boolean value indicating whether the view controller in the process of being presented by one of its ancestors.
- [movingFromParentViewController](ismovingfromparent.md): A Boolean value indicating whether the view controller is moving from a parent view controller.
- [movingToParentViewController](ismovingtoparent.md): A Boolean value indicating whether the view controller is moving to a parent view controller.
