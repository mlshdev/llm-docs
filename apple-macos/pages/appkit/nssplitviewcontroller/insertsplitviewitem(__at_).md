> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssplitviewcontroller/insertsplitviewitem(_:at:)](https://developer.apple.com/documentation/appkit/nssplitviewcontroller/insertsplitviewitem(_:at:))

# insertSplitViewItem(\_:at:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Adds a split view item to the array of split view items at the specified index position.

## Declaration

```swift
func insertSplitViewItem(_ splitViewItem: NSSplitViewItem, at index: Int)
```

## Parameters

- `splitViewItem`: The split view item to add.

  > **Important**

  >  Before you add a split view item, it must be non-`nil` and it must have an associated view controller, or the system throws an exception.
- `index`: The index position for adding the split view item in the [splitViewItems](splitviewitems.md) array.

  > **Important**

  >  If the index value is out of bounds (less than `0` or greater than the count of the array), the system throws an exception.

<a id="Discussion"></a>

## Discussion

If the split view controller’s view finishes loading, and the split view item that you add is visible, the system loads the split view item’s view controller’s view and adds it to the split view.

## See Also

### Modifying a Split View Controller

- [addSplitViewItem(\_:)](addsplitviewitem%28__%29.md): Adds a split view item to the end of the array of split view items.
- [removeSplitViewItem(\_:)](removesplitviewitem%28__%29.md): Removes a specified split view item from the split view controller.

# insertSplitViewItem:atIndex: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Adds a split view item to the array of split view items at the specified index position.

## Declaration

```objectivec
- (void) insertSplitViewItem:(NSSplitViewItem *) splitViewItem atIndex:(NSInteger) index;
```

## Parameters

- `splitViewItem`: The split view item to add.

  > **Important**

  >  Before you add a split view item, it must be non-`nil` and it must have an associated view controller, or the system throws an exception.
- `index`: The index position for adding the split view item in the [splitViewItems](splitviewitems.md) array.

  > **Important**

  >  If the index value is out of bounds (less than `0` or greater than the count of the array), the system throws an exception.

<a id="Discussion"></a>

## Discussion

If the split view controller’s view finishes loading, and the split view item that you add is visible, the system loads the split view item’s view controller’s view and adds it to the split view.

## See Also

### Modifying a Split View Controller

- [addSplitViewItem:](addsplitviewitem%28__%29.md): Adds a split view item to the end of the array of split view items.
- [removeSplitViewItem:](removesplitviewitem%28__%29.md): Removes a specified split view item from the split view controller.
