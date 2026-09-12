> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssplitviewcontroller/removesplitviewitem(_:)](https://developer.apple.com/documentation/appkit/nssplitviewcontroller/removesplitviewitem(_:))

# removeSplitViewItem(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Removes a specified split view item from the split view controller.

## Declaration

```swift
func removeSplitViewItem(_ splitViewItem: NSSplitViewItem)
```

## Parameters

- `splitViewItem`: The split view item to remove.

  > **Important**

  >  If the split view item is `nil` or isn’t in the [splitViewItems](splitviewitems.md) array, the system throws an exception.

<a id="Discussion"></a>

## Discussion

After you remove a split view item, the system adjusts the layout of the split view accordingly.

## See Also

### Modifying a Split View Controller

- [addSplitViewItem(\_:)](addsplitviewitem%28__%29.md): Adds a split view item to the end of the array of split view items.
- [insertSplitViewItem(\_:at:)](insertsplitviewitem%28__at_%29.md): Adds a split view item to the array of split view items at the specified index position.

# removeSplitViewItem: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Removes a specified split view item from the split view controller.

## Declaration

```objectivec
- (void) removeSplitViewItem:(NSSplitViewItem *) splitViewItem;
```

## Parameters

- `splitViewItem`: The split view item to remove.

  > **Important**

  >  If the split view item is `nil` or isn’t in the [splitViewItems](splitviewitems.md) array, the system throws an exception.

<a id="Discussion"></a>

## Discussion

After you remove a split view item, the system adjusts the layout of the split view accordingly.

## See Also

### Modifying a Split View Controller

- [addSplitViewItem:](addsplitviewitem%28__%29.md): Adds a split view item to the end of the array of split view items.
- [insertSplitViewItem:atIndex:](insertsplitviewitem%28__at_%29.md): Adds a split view item to the array of split view items at the specified index position.
