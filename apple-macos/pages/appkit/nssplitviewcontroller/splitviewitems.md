> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssplitviewcontroller/splitviewitems](https://developer.apple.com/documentation/appkit/nssplitviewcontroller/splitviewitems)

# splitViewItems (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

The array of split view items that correspond to the split view controller’s child view controllers.

## Declaration

```swift
var splitViewItems: [NSSplitViewItem] { get set }
```

<a id="Discussion"></a>

## Discussion

Setting this property implicitly calls the [insertSplitViewItem(\_:at:)](insertsplitviewitem%28__at_%29.md) or [removeSplitViewItem(\_:)](removesplitviewitem%28__%29.md) method, as appropriate, to add or remove split view items from this array.

If you add a child view controller to the split view controller, the system automatically creates a default split view item for the child view controller and adds it to the [splitViewItems](splitviewitems.md) array.

If you remove a child view controller, the split view controller removes its corresponding split view item from the [splitViewItems](splitviewitems.md) array.

## See Also

### Configuring and Managing a Split View Controller

- [splitView](splitview.md): The split view that the split view controller manages.
- [splitViewItem(for:)](splitviewitem%28for_%29.md): Returns the corresponding split view item for the specified child view controller of the split view controller.
- [NSSplitViewItem](../nssplitviewitem.md): An item in a split view controller.

# splitViewItems (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

The array of split view items that correspond to the split view controller’s child view controllers.

## Declaration

```objectivec
@property (copy) NSArray<__kindof NSSplitViewItem *> * splitViewItems;
```

<a id="Discussion"></a>

## Discussion

Setting this property implicitly calls the [insertSplitViewItem:atIndex:](insertsplitviewitem%28__at_%29.md) or [removeSplitViewItem:](removesplitviewitem%28__%29.md) method, as appropriate, to add or remove split view items from this array.

If you add a child view controller to the split view controller, the system automatically creates a default split view item for the child view controller and adds it to the [splitViewItems](splitviewitems.md) array.

If you remove a child view controller, the split view controller removes its corresponding split view item from the [splitViewItems](splitviewitems.md) array.

## See Also

### Configuring and Managing a Split View Controller

- [splitView](splitview.md): The split view that the split view controller manages.
- [splitViewItemForViewController:](splitviewitem%28for_%29.md): Returns the corresponding split view item for the specified child view controller of the split view controller.
- [NSSplitViewItem](../nssplitviewitem.md): An item in a split view controller.
