> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsviewcontroller/transition(from:to:options:completionhandler:)](https://developer.apple.com/documentation/appkit/nsviewcontroller/transition(from:to:options:completionhandler:))

# transition(from:to:options:completionHandler:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Performs a transition between two sibling child view controllers of the view controller.

## Declaration

```swift
func transition(from fromViewController: NSViewController, to toViewController: NSViewController, options: NSViewController.TransitionOptions = [], completionHandler completion: (@Sendable () -> Void)? = nil)
```

```swift
func transition(from fromViewController: NSViewController, to toViewController: NSViewController, options: NSViewController.TransitionOptions = []) async
```

## Parameters

- `fromViewController`: A child view controller whose view is visible in the view controller’s view hierarchy.

  > **Note**

  >  The view of this view controller must have a superview, or else this method raises an exception.
- `toViewController`: A child view controller whose view is not in the view controller’s view hierarchy.
- `options`: A bitmask of options that specify how you want to perform the transition animation. For the options, see the [NSViewController.TransitionOptions](transitionoptions.md) enumeration.
- `completion`: A block called immediately after the transition animation completes.

<a id="Discussion"></a>

## Discussion

Use this method to transition between sibling child view controllers owned by a parent view controller (which is the receiver of this method).

This method adds the view in the `toViewController` view controller to the superview of the view in the `fromViewController` view controller. Likewise, this method removes the `fromViewController` view from the parent view controller’s view hierarchy at the appropriate time. It is important to allow this method to add and remove these views.

> **Note**

>  The receiver of this method must be the parent view controller of the `fromViewController` and `toViewController` view controllers, or else this method raises an exception.

To create a parent/child relationship between view controllers, use the [addChild(\_:)](addchild%28__%29.md) method or the [insertChild(\_:at:)](insertchild%28__at_%29.md) method.

## See Also

### Managing Child View Controllers in a Custom Container

- [addChild(\_:)](addchild%28__%29.md): A convenience method for adding a child view controller at the end of the [children](children.md) array.
- [children](children.md): An array of view controllers that are hierarchical children of the view controller.
- [insertChild(\_:at:)](insertchild%28__at_%29.md): Inserts a specified child view controller into the [children](children.md) array at a specified position.
- [removeChild(at:)](removechild%28at_%29.md): Removes a specified child controller from the view controller.
- [removeFromParent()](removefromparent%28%29.md): Removes the called view controller from its parent view controller.
- [preferredContentSizeDidChange(for:)](preferredcontentsizedidchange%28for_%29.md): Called when there is a change in value of the [preferredContentSize](preferredcontentsize.md) property of a child view controller or a presented view controller.

# transitionFromViewController:toViewController:options:completionHandler: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Performs a transition between two sibling child view controllers of the view controller.

## Declaration

```objectivec
- (void) transitionFromViewController:(NSViewController *) fromViewController toViewController:(NSViewController *) toViewController options:(NSViewControllerTransitionOptions) options completionHandler:(void (^)()) completion;
```

## Parameters

- `fromViewController`: A child view controller whose view is visible in the view controller’s view hierarchy.

  > **Note**

  >  The view of this view controller must have a superview, or else this method raises an exception.
- `toViewController`: A child view controller whose view is not in the view controller’s view hierarchy.
- `options`: A bitmask of options that specify how you want to perform the transition animation. For the options, see the [NSViewControllerTransitionOptions](transitionoptions.md) enumeration.
- `completion`: A block called immediately after the transition animation completes.

<a id="Discussion"></a>

## Discussion

Use this method to transition between sibling child view controllers owned by a parent view controller (which is the receiver of this method).

This method adds the view in the `toViewController` view controller to the superview of the view in the `fromViewController` view controller. Likewise, this method removes the `fromViewController` view from the parent view controller’s view hierarchy at the appropriate time. It is important to allow this method to add and remove these views.

> **Note**

>  The receiver of this method must be the parent view controller of the `fromViewController` and `toViewController` view controllers, or else this method raises an exception.

To create a parent/child relationship between view controllers, use the [addChildViewController:](addchild%28__%29.md) method or the [insertChildViewController:atIndex:](insertchild%28__at_%29.md) method.

## See Also

### Managing Child View Controllers in a Custom Container

- [addChildViewController:](addchild%28__%29.md): A convenience method for adding a child view controller at the end of the [childViewControllers](children.md) array.
- [childViewControllers](children.md): An array of view controllers that are hierarchical children of the view controller.
- [insertChildViewController:atIndex:](insertchild%28__at_%29.md): Inserts a specified child view controller into the [childViewControllers](children.md) array at a specified position.
- [removeChildViewControllerAtIndex:](removechild%28at_%29.md): Removes a specified child controller from the view controller.
- [removeFromParentViewController](removefromparent%28%29.md): Removes the called view controller from its parent view controller.
- [preferredContentSizeDidChangeForViewController:](preferredcontentsizedidchange%28for_%29.md): Called when there is a change in value of the [preferredContentSize](preferredcontentsize.md) property of a child view controller or a presented view controller.
