> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssplitviewcontroller/splitviewitem(for:)](https://developer.apple.com/documentation/appkit/nssplitviewcontroller/splitviewitem(for:))

# splitViewItem(for:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Returns the corresponding split view item for the specified child view controller of the split view controller.

## Declaration

```swift
func splitViewItem(for viewController: NSViewController) -> NSSplitViewItem?
```

## Parameters

- `viewController`: The child view controller with the corresponding split view item you want.

<a id="return-value"></a>

## Return Value

The corresponding split view item, or `nil` if `viewController` isn’t a child of the split view controller.

## See Also

### Configuring and Managing a Split View Controller

- [splitView](splitview.md): The split view that the split view controller manages.
- [splitViewItems](splitviewitems.md): The array of split view items that correspond to the split view controller’s child view controllers.
- [NSSplitViewItem](../nssplitviewitem.md): An item in a split view controller.

# splitViewItemForViewController: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Returns the corresponding split view item for the specified child view controller of the split view controller.

## Declaration

```objectivec
- (NSSplitViewItem *) splitViewItemForViewController:(NSViewController *) viewController;
```

## Parameters

- `viewController`: The child view controller with the corresponding split view item you want.

<a id="return-value"></a>

## Return Value

The corresponding split view item, or `nil` if `viewController` isn’t a child of the split view controller.

## See Also

### Configuring and Managing a Split View Controller

- [splitView](splitview.md): The split view that the split view controller manages.
- [splitViewItems](splitviewitems.md): The array of split view items that correspond to the split view controller’s child view controllers.
- [NSSplitViewItem](../nssplitviewitem.md): An item in a split view controller.
