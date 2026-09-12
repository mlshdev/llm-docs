> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontroller/viewisappearing(_:)](https://developer.apple.com/documentation/uikit/uiviewcontroller/viewisappearing(_:))

# viewIsAppearing(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Notifies the view controller that the system is adding the view controller’s view to a view hierarchy.

## Declaration

```swift
func viewIsAppearing(_ animated: Bool)
```

## Parameters

- `animated`: If [true](https://developer.apple.com/documentation/swift/true), the system is adding the view to the window using an animation.

## Mentioned In

- [Displaying and managing views with a view controller](../displaying-and-managing-views-with-a-view-controller.md)
- [Enhancing your app with fluid transitions](../enhancing-your-app-with-fluid-transitions.md)

<a id="Discussion"></a>

## Discussion

The system calls this method once each time a view controller’s view appears after the [viewWillAppear(\_:)](viewwillappear%28__%29.md) call. In contrast to `viewWillAppear(_:)`, the system calls this method after it adds the view controller’s view to the view hierarchy, and the superview lays out the view controller’s view. By the time the system calls this method, both the view controller and its view have received updated trait collections and the view has accurate geometry.

You can override this method to perform custom tasks associated with displaying the view. For example, you might use this method to configure or update views based on the trait collections of the view or view controller. Or, because computing a scroll position relies on the view’s size and geometry, you might programmatically scroll a collection or table view to ensure a selected cell is visible when the view appears.

If you override this method, you need to call `super` at some point in your implementation.

<a id="Choosing-the-appropriate-callback"></a>

### Choosing the appropriate callback

Although the system calls this method after [viewWillAppear(\_:)](viewwillappear%28__%29.md), both callbacks occur within the same [CATransaction](../../quartzcore/catransaction.md). This means that changes you make in either method become visible to the user at the same time.

![A diagram titled View controller appearance that consists of seven stacked horizontal bars in three distinct sections. An arrow on the right labeled Time descends from the top to the bottom. The top section is labeled Transaction and contains two horizontal bars labeled viewWillAppear and View added to hierarchy. The second section is labeled Layout and contains four horizontal bars labeled View laid out by superview; traits updated; viewIsAppearing; viewWillLayoutSubviews; and viewDidLayoutSubviews. There is a gap between the second and third sections that contains the text: Transition animates. The third section is labeled Transaction and contains one horizontal bar labeled viewDidAppear.](https://developer.apple.com/images/com.apple.uikit/media-4250012@2x.png)

The traits and geometry aren’t up to date when the system calls [viewWillAppear(\_:)](viewwillappear%28__%29.md), but they are when the system calls `viewIsAppearing(_:)`, so use `viewIsAppearing(_:)` to update your views.

Use `viewWillAppear(:_)` only when:

- You need a callback before the view transition begins, such as when accessing the [transitionCoordinator](transitioncoordinator.md) to add alongside animations. Alongside animations are animations that you direct the framework to perform concurrently with the view controller transition animations.
- You need balanced callbacks to do something that doesn’t depend on the view controller or view traits, hierarchy, or geometry. Use cases include registering for database notifications in [viewWillAppear(\_:)](viewwillappear%28__%29.md) and unregistering in [viewDidDisappear(\_:)](viewdiddisappear%28__%29.md).

For all other cases, use `viewIsAppearing(_:)` to update your views.

| State at callback time | `viewWillAppear(_:)` | `viewIsAppearing(_:)` |
| --- | --- | --- |
| Transition coordinator available for adding alongside animations | **✓** | ✘ |
| View added to hierarchy | **✘** | **✓** |
| View controller and view trait collections updated | ✘ | **✓** |
| View geometry (size, safe area, and so forth) is accurate | ✘ | **✓** |

The system calls layout methods, such as [viewWillLayoutSubviews()](viewwilllayoutsubviews%28%29.md) and [viewDidLayoutSubviews()](viewdidlayoutsubviews%28%29.md), whenever the view runs [layoutSubviews()](../uiview/layoutsubviews%28%29.md), which can happen multiple times during the transition, or at any time while the view is visible. However, the system calls `viewIsAppearing(_:)` only once during the appearance transition, and calls it even if the view doesn’t require laying out when it appears.

For more information about how a view controller adds views to view hierarchies, and the sequence of messages that occur, see [Displaying and managing views with a view controller](../displaying-and-managing-views-with-a-view-controller.md).

## See Also

### Related Documentation

- [viewDidLoad()](viewdidload%28%29.md): Called after the controller’s view is loaded into memory.

### Responding to view-related events

- [viewWillAppear(\_:)](viewwillappear%28__%29.md): Notifies the view controller that its view is about to be added to a view hierarchy.
- [viewDidAppear(\_:)](viewdidappear%28__%29.md): Notifies the view controller that its view was added to a view hierarchy.
- [viewWillDisappear(\_:)](viewwilldisappear%28__%29.md): Notifies the view controller that its view is about to be removed from a view hierarchy.
- [viewDidDisappear(\_:)](viewdiddisappear%28__%29.md): Notifies the view controller that its view was removed from a view hierarchy.
- [isBeingDismissed](isbeingdismissed.md): A Boolean value indicating whether the view controller is in the process of being dismissed by one of its ancestors.
- [isBeingPresented](isbeingpresented.md): A Boolean value indicating whether the view controller in the process of being presented by one of its ancestors.
- [isMovingFromParent](ismovingfromparent.md): A Boolean value indicating whether the view controller is moving from a parent view controller.
- [isMovingToParent](ismovingtoparent.md): A Boolean value indicating whether the view controller is moving to a parent view controller.

# viewIsAppearing: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Notifies the view controller that the system is adding the view controller’s view to a view hierarchy.

## Declaration

```objectivec
- (void) viewIsAppearing:(BOOL) animated;
```

## Parameters

- `animated`: If [true](https://developer.apple.com/documentation/swift/true), the system is adding the view to the window using an animation.

## Mentioned In

- [Displaying and managing views with a view controller](../displaying-and-managing-views-with-a-view-controller.md)
- [Enhancing your app with fluid transitions](../enhancing-your-app-with-fluid-transitions.md)

<a id="Discussion"></a>

## Discussion

The system calls this method once each time a view controller’s view appears after the [viewWillAppear:](viewwillappear%28__%29.md) call. In contrast to `viewWillAppear(_:)`, the system calls this method after it adds the view controller’s view to the view hierarchy, and the superview lays out the view controller’s view. By the time the system calls this method, both the view controller and its view have received updated trait collections and the view has accurate geometry.

You can override this method to perform custom tasks associated with displaying the view. For example, you might use this method to configure or update views based on the trait collections of the view or view controller. Or, because computing a scroll position relies on the view’s size and geometry, you might programmatically scroll a collection or table view to ensure a selected cell is visible when the view appears.

If you override this method, you need to call `super` at some point in your implementation.

<a id="Choosing-the-appropriate-callback"></a>

### Choosing the appropriate callback

Although the system calls this method after [viewWillAppear:](viewwillappear%28__%29.md), both callbacks occur within the same [CATransaction](../../quartzcore/catransaction.md). This means that changes you make in either method become visible to the user at the same time.

![A diagram titled View controller appearance that consists of seven stacked horizontal bars in three distinct sections. An arrow on the right labeled Time descends from the top to the bottom. The top section is labeled Transaction and contains two horizontal bars labeled viewWillAppear and View added to hierarchy. The second section is labeled Layout and contains four horizontal bars labeled View laid out by superview; traits updated; viewIsAppearing; viewWillLayoutSubviews; and viewDidLayoutSubviews. There is a gap between the second and third sections that contains the text: Transition animates. The third section is labeled Transaction and contains one horizontal bar labeled viewDidAppear.](https://developer.apple.com/images/com.apple.uikit/media-4250012@2x.png)

The traits and geometry aren’t up to date when the system calls [viewWillAppear:](viewwillappear%28__%29.md), but they are when the system calls `viewIsAppearing(_:)`, so use `viewIsAppearing(_:)` to update your views.

Use `viewWillAppear(:_)` only when:

- You need a callback before the view transition begins, such as when accessing the [transitionCoordinator](transitioncoordinator.md) to add alongside animations. Alongside animations are animations that you direct the framework to perform concurrently with the view controller transition animations.
- You need balanced callbacks to do something that doesn’t depend on the view controller or view traits, hierarchy, or geometry. Use cases include registering for database notifications in [viewWillAppear:](viewwillappear%28__%29.md) and unregistering in [viewDidDisappear:](viewdiddisappear%28__%29.md).

For all other cases, use `viewIsAppearing(_:)` to update your views.

| State at callback time | `viewWillAppear(_:)` | `viewIsAppearing(_:)` |
| --- | --- | --- |
| Transition coordinator available for adding alongside animations | **✓** | ✘ |
| View added to hierarchy | **✘** | **✓** |
| View controller and view trait collections updated | ✘ | **✓** |
| View geometry (size, safe area, and so forth) is accurate | ✘ | **✓** |

The system calls layout methods, such as [viewWillLayoutSubviews](viewwilllayoutsubviews%28%29.md) and [viewDidLayoutSubviews](viewdidlayoutsubviews%28%29.md), whenever the view runs [layoutSubviews](../uiview/layoutsubviews%28%29.md), which can happen multiple times during the transition, or at any time while the view is visible. However, the system calls `viewIsAppearing(_:)` only once during the appearance transition, and calls it even if the view doesn’t require laying out when it appears.

For more information about how a view controller adds views to view hierarchies, and the sequence of messages that occur, see [Displaying and managing views with a view controller](../displaying-and-managing-views-with-a-view-controller.md).

## See Also

### Related Documentation

- [viewDidLoad](viewdidload%28%29.md): Called after the controller’s view is loaded into memory.

### Responding to view-related events

- [viewWillAppear:](viewwillappear%28__%29.md): Notifies the view controller that its view is about to be added to a view hierarchy.
- [viewDidAppear:](viewdidappear%28__%29.md): Notifies the view controller that its view was added to a view hierarchy.
- [viewWillDisappear:](viewwilldisappear%28__%29.md): Notifies the view controller that its view is about to be removed from a view hierarchy.
- [viewDidDisappear:](viewdiddisappear%28__%29.md): Notifies the view controller that its view was removed from a view hierarchy.
- [beingDismissed](isbeingdismissed.md): A Boolean value indicating whether the view controller is in the process of being dismissed by one of its ancestors.
- [beingPresented](isbeingpresented.md): A Boolean value indicating whether the view controller in the process of being presented by one of its ancestors.
- [movingFromParentViewController](ismovingfromparent.md): A Boolean value indicating whether the view controller is moving from a parent view controller.
- [movingToParentViewController](ismovingtoparent.md): A Boolean value indicating whether the view controller is moving to a parent view controller.
