> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstabviewcontroller/removetabviewitem(_:)](https://developer.apple.com/documentation/appkit/nstabviewcontroller/removetabviewitem(_:))

# removeTabViewItem(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Removes the specified tab view item from the tab view controller.

## Declaration

```swift
func removeTabViewItem(_ tabViewItem: NSTabViewItem)
```

## Parameters

- `tabViewItem`: The tab view item to remove. If this parameter is `nil` or the item does not belong to the tab view controller, this method throws an exception.

<a id="Discussion"></a>

## Discussion

Use this method to remove a tab view item from the tab view interface. Removing the item removes the corresponding view controller from the tab view controller’s list of child view controllers. If the removed tab view item is currently selected, the tab view controller selects the next item (or the previous item if there is no next item). Removing the last tab view item sets the [selectedTabViewItemIndex](selectedtabviewitemindex.md) property to `-1`.

## See Also

### Managing Tab View Items

- [tabViewItems](tabviewitems.md): The array of tab view items used to manage each of the child view controllers.
- [tabViewItem(for:)](tabviewitem%28for_%29.md): Returns the tab view item for the specified child view controller.
- [addTabViewItem(\_:)](addtabviewitem%28__%29.md): Adds the specified tab to the end of the tab view controller’s list of tabs.
- [insertTabViewItem(\_:at:)](inserttabviewitem%28__at_%29.md): Inserts a tab view into the tab view controller’s list of tabs.
- [selectedTabViewItemIndex](selectedtabviewitemindex.md): The index of the selected tab.

# removeTabViewItem: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Removes the specified tab view item from the tab view controller.

## Declaration

```objectivec
- (void) removeTabViewItem:(NSTabViewItem *) tabViewItem;
```

## Parameters

- `tabViewItem`: The tab view item to remove. If this parameter is `nil` or the item does not belong to the tab view controller, this method throws an exception.

<a id="Discussion"></a>

## Discussion

Use this method to remove a tab view item from the tab view interface. Removing the item removes the corresponding view controller from the tab view controller’s list of child view controllers. If the removed tab view item is currently selected, the tab view controller selects the next item (or the previous item if there is no next item). Removing the last tab view item sets the [selectedTabViewItemIndex](selectedtabviewitemindex.md) property to `-1`.

## See Also

### Managing Tab View Items

- [tabViewItems](tabviewitems.md): The array of tab view items used to manage each of the child view controllers.
- [tabViewItemForViewController:](tabviewitem%28for_%29.md): Returns the tab view item for the specified child view controller.
- [addTabViewItem:](addtabviewitem%28__%29.md): Adds the specified tab to the end of the tab view controller’s list of tabs.
- [insertTabViewItem:atIndex:](inserttabviewitem%28__at_%29.md): Inserts a tab view into the tab view controller’s list of tabs.
- [selectedTabViewItemIndex](selectedtabviewitemindex.md): The index of the selected tab.
