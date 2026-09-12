> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontroller/viewdiddisappear(_:)](https://developer.apple.com/documentation/uikit/uiviewcontroller/viewdiddisappear(_:))

# viewDidDisappear(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Notifies the view controller that its view was removed from a view hierarchy.

## Declaration

```swift
func viewDidDisappear(_ animated: Bool)
```

## Parameters

- `animated`: If [true](https://developer.apple.com/documentation/swift/true), the disappearance of the view was animated.

## Mentioned In

- [Enhancing your app with fluid transitions](../enhancing-your-app-with-fluid-transitions.md)

<a id="Discussion"></a>

## Discussion

You can override this method to perform additional tasks associated with dismissing or hiding the view. If you override this method, you must call `super` at some point in your implementation.

## See Also

### Responding to view-related events

- [viewWillAppear(\_:)](viewwillappear%28__%29.md): Notifies the view controller that its view is about to be added to a view hierarchy.
- [viewIsAppearing(\_:)](viewisappearing%28__%29.md): Notifies the view controller that the system is adding the view controller’s view to a view hierarchy.
- [viewDidAppear(\_:)](viewdidappear%28__%29.md): Notifies the view controller that its view was added to a view hierarchy.
- [viewWillDisappear(\_:)](viewwilldisappear%28__%29.md): Notifies the view controller that its view is about to be removed from a view hierarchy.
- [isBeingDismissed](isbeingdismissed.md): A Boolean value indicating whether the view controller is in the process of being dismissed by one of its ancestors.
- [isBeingPresented](isbeingpresented.md): A Boolean value indicating whether the view controller in the process of being presented by one of its ancestors.
- [isMovingFromParent](ismovingfromparent.md): A Boolean value indicating whether the view controller is moving from a parent view controller.
- [isMovingToParent](ismovingtoparent.md): A Boolean value indicating whether the view controller is moving to a parent view controller.

# viewDidDisappear: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Notifies the view controller that its view was removed from a view hierarchy.

## Declaration

```objectivec
- (void) viewDidDisappear:(BOOL) animated;
```

## Parameters

- `animated`: If [true](https://developer.apple.com/documentation/swift/true), the disappearance of the view was animated.

## Mentioned In

- [Enhancing your app with fluid transitions](../enhancing-your-app-with-fluid-transitions.md)

<a id="Discussion"></a>

## Discussion

You can override this method to perform additional tasks associated with dismissing or hiding the view. If you override this method, you must call `super` at some point in your implementation.

## See Also

### Responding to view-related events

- [viewWillAppear:](viewwillappear%28__%29.md): Notifies the view controller that its view is about to be added to a view hierarchy.
- [viewIsAppearing:](viewisappearing%28__%29.md): Notifies the view controller that the system is adding the view controller’s view to a view hierarchy.
- [viewDidAppear:](viewdidappear%28__%29.md): Notifies the view controller that its view was added to a view hierarchy.
- [viewWillDisappear:](viewwilldisappear%28__%29.md): Notifies the view controller that its view is about to be removed from a view hierarchy.
- [beingDismissed](isbeingdismissed.md): A Boolean value indicating whether the view controller is in the process of being dismissed by one of its ancestors.
- [beingPresented](isbeingpresented.md): A Boolean value indicating whether the view controller in the process of being presented by one of its ancestors.
- [movingFromParentViewController](ismovingfromparent.md): A Boolean value indicating whether the view controller is moving from a parent view controller.
- [movingToParentViewController](ismovingtoparent.md): A Boolean value indicating whether the view controller is moving to a parent view controller.
