> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssplitviewcontroller/splitview](https://developer.apple.com/documentation/appkit/nssplitviewcontroller/splitview)

# splitView (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

The split view that the split view controller manages.

## Declaration

```swift
var splitView: NSSplitView { get set }
```

<a id="Discussion"></a>

## Discussion

This property gives you access to the split view controller’s split view for querying its attributes or customizing it.

By default, a split view arranges its child views vertically from top to bottom. To specify a horizontal (side-by-side) arrangement, implement the [isVertical](../nssplitview/isvertical.md) property of the split view object to return [true](https://developer.apple.com/documentation/swift/true).

Also by default, a split view has a divider style of [NSSplitView.DividerStyle.thin](../nssplitview/dividerstyle-swift.enum/thin.md), and doesn’t have an autosave name.

> **Important**

>  Don’t change the [delegate](../nssplitview/delegate.md) property of a split view through the [splitView](splitview.md) property of a split view controller, and don’t call any methods on the split view object using this property. If you do, the system raises an exception.

To provide a custom split view, set this property at any time before you call `super` in the inherited [viewDidLoad()](../nsviewcontroller/viewdidload%28%29.md) method; that is, before the split view controller’s [isViewLoaded](../nsviewcontroller/isviewloaded.md) property is [true](https://developer.apple.com/documentation/swift/true).

The split view isn’t always the same object as that in the split view controller’s inherited [view](../nsviewcontroller/view.md) property. To access the split view, always use the [splitView](splitview.md) property.

## See Also

### Configuring and Managing a Split View Controller

- [splitViewItem(for:)](splitviewitem%28for_%29.md): Returns the corresponding split view item for the specified child view controller of the split view controller.
- [splitViewItems](splitviewitems.md): The array of split view items that correspond to the split view controller’s child view controllers.
- [NSSplitViewItem](../nssplitviewitem.md): An item in a split view controller.

# splitView (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

The split view that the split view controller manages.

## Declaration

```objectivec
@property (strong) NSSplitView * splitView;
```

<a id="Discussion"></a>

## Discussion

This property gives you access to the split view controller’s split view for querying its attributes or customizing it.

By default, a split view arranges its child views vertically from top to bottom. To specify a horizontal (side-by-side) arrangement, implement the [vertical](../nssplitview/isvertical.md) property of the split view object to return [true](https://developer.apple.com/documentation/swift/true).

Also by default, a split view has a divider style of [NSSplitViewDividerStyleThin](../nssplitview/dividerstyle-swift.enum/thin.md), and doesn’t have an autosave name.

> **Important**

>  Don’t change the [delegate](../nssplitview/delegate.md) property of a split view through the [splitView](splitview.md) property of a split view controller, and don’t call any methods on the split view object using this property. If you do, the system raises an exception.

To provide a custom split view, set this property at any time before you call `super` in the inherited [viewDidLoad](../nsviewcontroller/viewdidload%28%29.md) method; that is, before the split view controller’s [viewLoaded](../nsviewcontroller/isviewloaded.md) property is [true](https://developer.apple.com/documentation/swift/true).

The split view isn’t always the same object as that in the split view controller’s inherited [view](../nsviewcontroller/view.md) property. To access the split view, always use the [splitView](splitview.md) property.

## See Also

### Configuring and Managing a Split View Controller

- [splitViewItemForViewController:](splitviewitem%28for_%29.md): Returns the corresponding split view item for the specified child view controller of the split view controller.
- [splitViewItems](splitviewitems.md): The array of split view items that correspond to the split view controller’s child view controllers.
- [NSSplitViewItem](../nssplitviewitem.md): An item in a split view controller.
