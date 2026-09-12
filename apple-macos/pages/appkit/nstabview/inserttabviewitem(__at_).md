> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstabview/inserttabviewitem(_:at:)](https://developer.apple.com/documentation/appkit/nstabview/inserttabviewitem(_:at:))

# insertTabViewItem(\_:at:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Inserts the specified item into the tab view’s array of tab view items at the specified index.

## Declaration

```swift
func insertTabViewItem(_ tabViewItem: NSTabViewItem, at index: Int)
```

## Parameters

- `tabViewItem`: The tab view item to be added.
- `index`: The index at which to insert the tab view item. The `index` parameter is zero-based.

<a id="Discussion"></a>

## Discussion

If there is a delegate and the delegate supports it, sends the delegate the [tabViewDidChangeNumberOfTabViewItems(\_:)](../nstabviewdelegate/tabviewdidchangenumberoftabviewitems%28__%29.md) message.

## See Also

### Related Documentation

- [indexOfTabViewItem(withIdentifier:)](indexoftabviewitem%28withidentifier_%29.md): Returns the index of the item that matches the specified identifier or `NSNotFound` if the item is not found.
- [tabViewItem(at:)](tabviewitem%28at_%29-7r3at.md): Returns the tab view item at `index` in the tab view’s array of items.
- [numberOfTabViewItems](numberoftabviewitems.md): The number of items in the tab view’s array of tab view items.
- [indexOfTabViewItem(\_:)](indexoftabviewitem%28__%29.md): Returns the index of the specified item in the tab view.

### Adding and Removing Tabs

- [addTabViewItem(\_:)](addtabviewitem%28__%29.md): Adds the specified tab item.
- [removeTabViewItem(\_:)](removetabviewitem%28__%29.md): Removes the specified item from the tab view’s array of tab view items.

# insertTabViewItem:atIndex: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Inserts the specified item into the tab view’s array of tab view items at the specified index.

## Declaration

```objectivec
- (void) insertTabViewItem:(NSTabViewItem *) tabViewItem atIndex:(NSInteger) index;
```

## Parameters

- `tabViewItem`: The tab view item to be added.
- `index`: The index at which to insert the tab view item. The `index` parameter is zero-based.

<a id="Discussion"></a>

## Discussion

If there is a delegate and the delegate supports it, sends the delegate the [tabViewDidChangeNumberOfTabViewItems:](../nstabviewdelegate/tabviewdidchangenumberoftabviewitems%28__%29.md) message.

## See Also

### Related Documentation

- [indexOfTabViewItemWithIdentifier:](indexoftabviewitem%28withidentifier_%29.md): Returns the index of the item that matches the specified identifier or `NSNotFound` if the item is not found.
- [tabViewItemAtIndex:](tabviewitem%28at_%29-7r3at.md): Returns the tab view item at `index` in the tab view’s array of items.
- [numberOfTabViewItems](numberoftabviewitems.md): The number of items in the tab view’s array of tab view items.
- [indexOfTabViewItem:](indexoftabviewitem%28__%29.md): Returns the index of the specified item in the tab view.

### Adding and Removing Tabs

- [addTabViewItem:](addtabviewitem%28__%29.md): Adds the specified tab item.
- [removeTabViewItem:](removetabviewitem%28__%29.md): Removes the specified item from the tab view’s array of tab view items.
