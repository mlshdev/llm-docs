> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssplitviewcontroller/addsplitviewitem(_:)](https://developer.apple.com/documentation/appkit/nssplitviewcontroller/addsplitviewitem(_:))

# addSplitViewItem(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Adds a split view item to the end of the array of split view items.

## Declaration

```swift
func addSplitViewItem(_ splitViewItem: NSSplitViewItem)
```

## Parameters

- `splitViewItem`: The split view item to add.

  > **Important**

  >  Before you add a split view item, it must be non-`nil` and it must have an associated view controller, or the system throws an exception.

<a id="Discussion"></a>

## Discussion

This is a convenience method you can use in place of the [insertSplitViewItem(\_:at:)](insertsplitviewitem%28__at_%29.md) method when you want to add a split view item to the end of the [splitViewItems](splitviewitems.md) array. Calling this method implicitly calls the [insertSplitViewItem(\_:at:)](insertsplitviewitem%28__at_%29.md) method.

If you subclass the [NSSplitViewController](../nssplitviewcontroller.md) class, don’t call this method in your custom object to add a split view item. Instead, call the [insertSplitViewItem(\_:at:)](insertsplitviewitem%28__at_%29.md) method directly.

## See Also

### Modifying a Split View Controller

- [insertSplitViewItem(\_:at:)](insertsplitviewitem%28__at_%29.md): Adds a split view item to the array of split view items at the specified index position.
- [removeSplitViewItem(\_:)](removesplitviewitem%28__%29.md): Removes a specified split view item from the split view controller.

# addSplitViewItem: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Adds a split view item to the end of the array of split view items.

## Declaration

```objectivec
- (void) addSplitViewItem:(NSSplitViewItem *) splitViewItem;
```

## Parameters

- `splitViewItem`: The split view item to add.

  > **Important**

  >  Before you add a split view item, it must be non-`nil` and it must have an associated view controller, or the system throws an exception.

<a id="Discussion"></a>

## Discussion

This is a convenience method you can use in place of the [insertSplitViewItem:atIndex:](insertsplitviewitem%28__at_%29.md) method when you want to add a split view item to the end of the [splitViewItems](splitviewitems.md) array. Calling this method implicitly calls the [insertSplitViewItem:atIndex:](insertsplitviewitem%28__at_%29.md) method.

If you subclass the [NSSplitViewController](../nssplitviewcontroller.md) class, don’t call this method in your custom object to add a split view item. Instead, call the [insertSplitViewItem:atIndex:](insertsplitviewitem%28__at_%29.md) method directly.

## See Also

### Modifying a Split View Controller

- [insertSplitViewItem:atIndex:](insertsplitviewitem%28__at_%29.md): Adds a split view item to the array of split view items at the specified index position.
- [removeSplitViewItem:](removesplitviewitem%28__%29.md): Removes a specified split view item from the split view controller.
