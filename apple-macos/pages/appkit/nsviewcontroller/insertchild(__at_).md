> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsviewcontroller/insertchild(_:at:)](https://developer.apple.com/documentation/appkit/nsviewcontroller/insertchild(_:at:))

# insertChild(\_:at:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Inserts a specified child view controller into the [children](children.md) array at a specified position.

## Declaration

```swift
func insertChild(_ childViewController: NSViewController, at index: Int)
```

## Parameters

- `childViewController`: The child view controller to add to the [children](children.md) array.
- `index`: The index in the [children](children.md) array at which to insert the child view controller. This value must not be greater than the count of elements in the array.

<a id="Discussion"></a>

## Discussion

You should instead use the [addChild(\_:)](addchild%28__%29.md) method unless you want to perform work on child view controllers as you add them. In that case, override this method to perform that work.

If a child view controller has a different parent when you call this method, the child is first be removed from its existing parent by calling the child’s [removeFromParent()](removefromparent%28%29.md) method.

## See Also

### Managing Child View Controllers in a Custom Container

- [addChild(\_:)](addchild%28__%29.md): A convenience method for adding a child view controller at the end of the [children](children.md) array.
- [children](children.md): An array of view controllers that are hierarchical children of the view controller.
- [transition(from:to:options:completionHandler:)](transition%28from_to_options_completionhandler_%29.md): Performs a transition between two sibling child view controllers of the view controller.
- [removeChild(at:)](removechild%28at_%29.md): Removes a specified child controller from the view controller.
- [removeFromParent()](removefromparent%28%29.md): Removes the called view controller from its parent view controller.
- [preferredContentSizeDidChange(for:)](preferredcontentsizedidchange%28for_%29.md): Called when there is a change in value of the [preferredContentSize](preferredcontentsize.md) property of a child view controller or a presented view controller.

# insertChildViewController:atIndex: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Inserts a specified child view controller into the [childViewControllers](children.md) array at a specified position.

## Declaration

```objectivec
- (void) insertChildViewController:(NSViewController *) childViewController atIndex:(NSInteger) index;
```

## Parameters

- `childViewController`: The child view controller to add to the [childViewControllers](children.md) array.
- `index`: The index in the [childViewControllers](children.md) array at which to insert the child view controller. This value must not be greater than the count of elements in the array.

<a id="Discussion"></a>

## Discussion

You should instead use the [addChildViewController:](addchild%28__%29.md) method unless you want to perform work on child view controllers as you add them. In that case, override this method to perform that work.

If a child view controller has a different parent when you call this method, the child is first be removed from its existing parent by calling the child’s [removeFromParentViewController](removefromparent%28%29.md) method.

## See Also

### Managing Child View Controllers in a Custom Container

- [addChildViewController:](addchild%28__%29.md): A convenience method for adding a child view controller at the end of the [childViewControllers](children.md) array.
- [childViewControllers](children.md): An array of view controllers that are hierarchical children of the view controller.
- [transitionFromViewController:toViewController:options:completionHandler:](transition%28from_to_options_completionhandler_%29.md): Performs a transition between two sibling child view controllers of the view controller.
- [removeChildViewControllerAtIndex:](removechild%28at_%29.md): Removes a specified child controller from the view controller.
- [removeFromParentViewController](removefromparent%28%29.md): Removes the called view controller from its parent view controller.
- [preferredContentSizeDidChangeForViewController:](preferredcontentsizedidchange%28for_%29.md): Called when there is a change in value of the [preferredContentSize](preferredcontentsize.md) property of a child view controller or a presented view controller.
