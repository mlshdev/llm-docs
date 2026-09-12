> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsviewcontroller/children](https://developer.apple.com/documentation/appkit/nsviewcontroller/children)

# children (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

An array of view controllers that are hierarchical children of the view controller.

## Declaration

```swift
var children: [NSViewController] { get set }
```

<a id="Discussion"></a>

## Discussion

You can add or remove child view controllers by using this property. When you do, the [addChild(\_:)](addchild%28__%29.md) or [removeFromParent()](removefromparent%28%29.md) method gets called accordingly.

## See Also

### Managing Child View Controllers in a Custom Container

- [addChild(\_:)](addchild%28__%29.md): A convenience method for adding a child view controller at the end of the [children](children.md) array.
- [transition(from:to:options:completionHandler:)](transition%28from_to_options_completionhandler_%29.md): Performs a transition between two sibling child view controllers of the view controller.
- [insertChild(\_:at:)](insertchild%28__at_%29.md): Inserts a specified child view controller into the [children](children.md) array at a specified position.
- [removeChild(at:)](removechild%28at_%29.md): Removes a specified child controller from the view controller.
- [removeFromParent()](removefromparent%28%29.md): Removes the called view controller from its parent view controller.
- [preferredContentSizeDidChange(for:)](preferredcontentsizedidchange%28for_%29.md): Called when there is a change in value of the [preferredContentSize](preferredcontentsize.md) property of a child view controller or a presented view controller.

# childViewControllers (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

An array of view controllers that are hierarchical children of the view controller.

## Declaration

```objectivec
@property (copy) NSArray<__kindof NSViewController *> * childViewControllers;
```

<a id="Discussion"></a>

## Discussion

You can add or remove child view controllers by using this property. When you do, the [addChildViewController:](addchild%28__%29.md) or [removeFromParentViewController](removefromparent%28%29.md) method gets called accordingly.

## See Also

### Managing Child View Controllers in a Custom Container

- [addChildViewController:](addchild%28__%29.md): A convenience method for adding a child view controller at the end of the [childViewControllers](children.md) array.
- [transitionFromViewController:toViewController:options:completionHandler:](transition%28from_to_options_completionhandler_%29.md): Performs a transition between two sibling child view controllers of the view controller.
- [insertChildViewController:atIndex:](insertchild%28__at_%29.md): Inserts a specified child view controller into the [childViewControllers](children.md) array at a specified position.
- [removeChildViewControllerAtIndex:](removechild%28at_%29.md): Removes a specified child controller from the view controller.
- [removeFromParentViewController](removefromparent%28%29.md): Removes the called view controller from its parent view controller.
- [preferredContentSizeDidChangeForViewController:](preferredcontentsizedidchange%28for_%29.md): Called when there is a change in value of the [preferredContentSize](preferredcontentsize.md) property of a child view controller or a presented view controller.
