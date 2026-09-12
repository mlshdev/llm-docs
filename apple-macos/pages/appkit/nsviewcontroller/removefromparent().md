> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsviewcontroller/removefromparent()](https://developer.apple.com/documentation/appkit/nsviewcontroller/removefromparent())

# removeFromParent() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Removes the called view controller from its parent view controller.

## Declaration

```swift
func removeFromParent()
```

<a id="Discussion"></a>

## Discussion

Use this method to remove a child view controller from its parent view controller, unless you want to perform work during the removal. In that case, instead override the [removeChild(at:)](removechild%28at_%29.md) method to perform that work and call that method.

This is a convenience method that calls the [removeChild(at:)](removechild%28at_%29.md) method, automatically supplying the appropriate index value as an argument.

## See Also

### Managing Child View Controllers in a Custom Container

- [addChild(\_:)](addchild%28__%29.md): A convenience method for adding a child view controller at the end of the [children](children.md) array.
- [children](children.md): An array of view controllers that are hierarchical children of the view controller.
- [transition(from:to:options:completionHandler:)](transition%28from_to_options_completionhandler_%29.md): Performs a transition between two sibling child view controllers of the view controller.
- [insertChild(\_:at:)](insertchild%28__at_%29.md): Inserts a specified child view controller into the [children](children.md) array at a specified position.
- [removeChild(at:)](removechild%28at_%29.md): Removes a specified child controller from the view controller.
- [preferredContentSizeDidChange(for:)](preferredcontentsizedidchange%28for_%29.md): Called when there is a change in value of the [preferredContentSize](preferredcontentsize.md) property of a child view controller or a presented view controller.

# removeFromParentViewController (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Removes the called view controller from its parent view controller.

## Declaration

```objectivec
- (void) removeFromParentViewController;
```

<a id="Discussion"></a>

## Discussion

Use this method to remove a child view controller from its parent view controller, unless you want to perform work during the removal. In that case, instead override the [removeChildViewControllerAtIndex:](removechild%28at_%29.md) method to perform that work and call that method.

This is a convenience method that calls the [removeChildViewControllerAtIndex:](removechild%28at_%29.md) method, automatically supplying the appropriate index value as an argument.

## See Also

### Managing Child View Controllers in a Custom Container

- [addChildViewController:](addchild%28__%29.md): A convenience method for adding a child view controller at the end of the [childViewControllers](children.md) array.
- [childViewControllers](children.md): An array of view controllers that are hierarchical children of the view controller.
- [transitionFromViewController:toViewController:options:completionHandler:](transition%28from_to_options_completionhandler_%29.md): Performs a transition between two sibling child view controllers of the view controller.
- [insertChildViewController:atIndex:](insertchild%28__at_%29.md): Inserts a specified child view controller into the [childViewControllers](children.md) array at a specified position.
- [removeChildViewControllerAtIndex:](removechild%28at_%29.md): Removes a specified child controller from the view controller.
- [preferredContentSizeDidChangeForViewController:](preferredcontentsizedidchange%28for_%29.md): Called when there is a change in value of the [preferredContentSize](preferredcontentsize.md) property of a child view controller or a presented view controller.
