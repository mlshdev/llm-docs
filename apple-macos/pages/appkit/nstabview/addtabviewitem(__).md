> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstabview/addtabviewitem(_:)](https://developer.apple.com/documentation/appkit/nstabview/addtabviewitem(_:))

# addTabViewItem(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Adds the specified tab item.

## Declaration

```swift
func addTabViewItem(_ tabViewItem: NSTabViewItem)
```

## Parameters

- `tabViewItem`: The tab view item to be added.

<a id="Discussion"></a>

## Discussion

The item is added at the end of the array of tab items, so the new tab appears on the right side of the view. If the delegate supports it, it invokes the delegate’s [tabViewDidChangeNumberOfTabViewItems(\_:)](../nstabviewdelegate/tabviewdidchangenumberoftabviewitems%28__%29.md) method.

## See Also

### Related Documentation

- [Tab View Programming Topics](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/TabView/TabView.html#//apple_ref/doc/uid/10000074i)
- [tabViewItem(at:)](tabviewitem%28at_%29-7r3at.md): Returns the tab view item at `index` in the tab view’s array of items.
- [numberOfTabViewItems](numberoftabviewitems.md): The number of items in the tab view’s array of tab view items.
- [tabViewItems](tabviewitems.md): The tab view’s array of tab view items.

### Adding and Removing Tabs

- [insertTabViewItem(\_:at:)](inserttabviewitem%28__at_%29.md): Inserts the specified item into the tab view’s array of tab view items at the specified index.
- [removeTabViewItem(\_:)](removetabviewitem%28__%29.md): Removes the specified item from the tab view’s array of tab view items.

# addTabViewItem: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Adds the specified tab item.

## Declaration

```objectivec
- (void) addTabViewItem:(NSTabViewItem *) tabViewItem;
```

## Parameters

- `tabViewItem`: The tab view item to be added.

<a id="Discussion"></a>

## Discussion

The item is added at the end of the array of tab items, so the new tab appears on the right side of the view. If the delegate supports it, it invokes the delegate’s [tabViewDidChangeNumberOfTabViewItems:](../nstabviewdelegate/tabviewdidchangenumberoftabviewitems%28__%29.md) method.

## See Also

### Related Documentation

- [Tab View Programming Topics](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/TabView/TabView.html#//apple_ref/doc/uid/10000074i)
- [tabViewItemAtIndex:](tabviewitem%28at_%29-7r3at.md): Returns the tab view item at `index` in the tab view’s array of items.
- [numberOfTabViewItems](numberoftabviewitems.md): The number of items in the tab view’s array of tab view items.
- [tabViewItems](tabviewitems.md): The tab view’s array of tab view items.

### Adding and Removing Tabs

- [insertTabViewItem:atIndex:](inserttabviewitem%28__at_%29.md): Inserts the specified item into the tab view’s array of tab view items at the specified index.
- [removeTabViewItem:](removetabviewitem%28__%29.md): Removes the specified item from the tab view’s array of tab view items.
