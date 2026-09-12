> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsviewcontroller/removechild(at:)](https://developer.apple.com/documentation/appkit/nsviewcontroller/removechild(at:))

# removeChild(at:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Removes a specified child controller from the view controller.

## Declaration

```swift
func removeChild(at index: Int)
```

## Parameters

- `index`: The index in the [children](children.md) array for the child view controller you want to remove.

<a id="Discussion"></a>

## Discussion

Override this method if you want to perform work during the removal of a child view controller. If you do override this method, in your implementation call this method on `super`.

If you just want to remove a child view controller, instead use the [removeFromParent()](removefromparent%28%29.md) method

## See Also

### Managing Child View Controllers in a Custom Container

- [addChild(\_:)](addchild%28__%29.md): A convenience method for adding a child view controller at the end of the [children](children.md) array.
- [children](children.md): An array of view controllers that are hierarchical children of the view controller.
- [transition(from:to:options:completionHandler:)](transition%28from_to_options_completionhandler_%29.md): Performs a transition between two sibling child view controllers of the view controller.
- [insertChild(\_:at:)](insertchild%28__at_%29.md): Inserts a specified child view controller into the [children](children.md) array at a specified position.
- [removeFromParent()](removefromparent%28%29.md): Removes the called view controller from its parent view controller.
- [preferredContentSizeDidChange(for:)](preferredcontentsizedidchange%28for_%29.md): Called when there is a change in value of the [preferredContentSize](preferredcontentsize.md) property of a child view controller or a presented view controller.

# removeChildViewControllerAtIndex: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Removes a specified child controller from the view controller.

## Declaration

```objectivec
- (void) removeChildViewControllerAtIndex:(NSInteger) index;
```

## Parameters

- `index`: The index in the [childViewControllers](children.md) array for the child view controller you want to remove.

<a id="Discussion"></a>

## Discussion

Override this method if you want to perform work during the removal of a child view controller. If you do override this method, in your implementation call this method on `super`.

If you just want to remove a child view controller, instead use the [removeFromParentViewController](removefromparent%28%29.md) method

## See Also

### Managing Child View Controllers in a Custom Container

- [addChildViewController:](addchild%28__%29.md): A convenience method for adding a child view controller at the end of the [childViewControllers](children.md) array.
- [childViewControllers](children.md): An array of view controllers that are hierarchical children of the view controller.
- [transitionFromViewController:toViewController:options:completionHandler:](transition%28from_to_options_completionhandler_%29.md): Performs a transition between two sibling child view controllers of the view controller.
- [insertChildViewController:atIndex:](insertchild%28__at_%29.md): Inserts a specified child view controller into the [childViewControllers](children.md) array at a specified position.
- [removeFromParentViewController](removefromparent%28%29.md): Removes the called view controller from its parent view controller.
- [preferredContentSizeDidChangeForViewController:](preferredcontentsizedidchange%28for_%29.md): Called when there is a change in value of the [preferredContentSize](preferredcontentsize.md) property of a child view controller or a presented view controller.
