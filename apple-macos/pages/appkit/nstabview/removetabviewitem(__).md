> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstabview/removetabviewitem(_:)](https://developer.apple.com/documentation/appkit/nstabview/removetabviewitem(_:))

# removeTabViewItem(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Removes the specified item from the tab view’s array of tab view items.

## Declaration

```swift
func removeTabViewItem(_ tabViewItem: NSTabViewItem)
```

## Parameters

- `tabViewItem`: The tab view item to be removed.

<a id="Discussion"></a>

## Discussion

If there is a delegate and the delegate supports it, sends the delegate the [tabViewDidChangeNumberOfTabViewItems(\_:)](../nstabviewdelegate/tabviewdidchangenumberoftabviewitems%28__%29.md) message.

## See Also

### Related Documentation

- [tabViewItems](tabviewitems.md): The tab view’s array of tab view items.

### Adding and Removing Tabs

- [addTabViewItem(\_:)](addtabviewitem%28__%29.md): Adds the specified tab item.
- [insertTabViewItem(\_:at:)](inserttabviewitem%28__at_%29.md): Inserts the specified item into the tab view’s array of tab view items at the specified index.

# removeTabViewItem: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Removes the specified item from the tab view’s array of tab view items.

## Declaration

```objectivec
- (void) removeTabViewItem:(NSTabViewItem *) tabViewItem;
```

## Parameters

- `tabViewItem`: The tab view item to be removed.

<a id="Discussion"></a>

## Discussion

If there is a delegate and the delegate supports it, sends the delegate the [tabViewDidChangeNumberOfTabViewItems:](../nstabviewdelegate/tabviewdidchangenumberoftabviewitems%28__%29.md) message.

## See Also

### Related Documentation

- [tabViewItems](tabviewitems.md): The tab view’s array of tab view items.

### Adding and Removing Tabs

- [addTabViewItem:](addtabviewitem%28__%29.md): Adds the specified tab item.
- [insertTabViewItem:atIndex:](inserttabviewitem%28__at_%29.md): Inserts the specified item into the tab view’s array of tab view items at the specified index.
