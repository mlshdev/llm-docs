> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsviewcontroller/addchild(_:)](https://developer.apple.com/documentation/appkit/nsviewcontroller/addchild(_:))

# addChild(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

A convenience method for adding a child view controller at the end of the [children](children.md) array.

## Declaration

```swift
func addChild(_ childViewController: NSViewController)
```

## Parameters

- `childViewController`: The view controller to be added to the end of the [children](children.md) array.

## See Also

### Managing Child View Controllers in a Custom Container

- [children](children.md): An array of view controllers that are hierarchical children of the view controller.
- [transition(from:to:options:completionHandler:)](transition%28from_to_options_completionhandler_%29.md): Performs a transition between two sibling child view controllers of the view controller.
- [insertChild(\_:at:)](insertchild%28__at_%29.md): Inserts a specified child view controller into the [children](children.md) array at a specified position.
- [removeChild(at:)](removechild%28at_%29.md): Removes a specified child controller from the view controller.
- [removeFromParent()](removefromparent%28%29.md): Removes the called view controller from its parent view controller.
- [preferredContentSizeDidChange(for:)](preferredcontentsizedidchange%28for_%29.md): Called when there is a change in value of the [preferredContentSize](preferredcontentsize.md) property of a child view controller or a presented view controller.

# addChildViewController: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

A convenience method for adding a child view controller at the end of the [childViewControllers](children.md) array.

## Declaration

```objectivec
- (void) addChildViewController:(NSViewController *) childViewController;
```

## Parameters

- `childViewController`: The view controller to be added to the end of the [childViewControllers](children.md) array.

## See Also

### Managing Child View Controllers in a Custom Container

- [childViewControllers](children.md): An array of view controllers that are hierarchical children of the view controller.
- [transitionFromViewController:toViewController:options:completionHandler:](transition%28from_to_options_completionhandler_%29.md): Performs a transition between two sibling child view controllers of the view controller.
- [insertChildViewController:atIndex:](insertchild%28__at_%29.md): Inserts a specified child view controller into the [childViewControllers](children.md) array at a specified position.
- [removeChildViewControllerAtIndex:](removechild%28at_%29.md): Removes a specified child controller from the view controller.
- [removeFromParentViewController](removefromparent%28%29.md): Removes the called view controller from its parent view controller.
- [preferredContentSizeDidChangeForViewController:](preferredcontentsizedidchange%28for_%29.md): Called when there is a change in value of the [preferredContentSize](preferredcontentsize.md) property of a child view controller or a presented view controller.
