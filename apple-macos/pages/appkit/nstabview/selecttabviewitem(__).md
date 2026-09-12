> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstabview/selecttabviewitem(_:)](https://developer.apple.com/documentation/appkit/nstabview/selecttabviewitem(_:))

# selectTabViewItem(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Selects the specified tab view item.

## Declaration

```swift
func selectTabViewItem(_ tabViewItem: NSTabViewItem?)
```

## Parameters

- `tabViewItem`: The tab item to select.

<a id="Discussion"></a>

## Discussion

If there is a delegate and the delegate supports it, sends the delegate the [tabView(\_:shouldSelect:)](../nstabviewdelegate/tabview%28__shouldselect_%29.md) message.

## See Also

### Related Documentation

- [insertTabViewItem(\_:at:)](inserttabviewitem%28__at_%29.md): Inserts the specified item into the tab view’s array of tab view items at the specified index.

### Selecting a Tab

- [selectFirstTabViewItem(\_:)](selectfirsttabviewitem%28__%29.md): This action method selects the first tab view item.
- [selectLastTabViewItem(\_:)](selectlasttabviewitem%28__%29.md): This action method selects the last tab view item.
- [selectNextTabViewItem(\_:)](selectnexttabviewitem%28__%29.md): This action method selects the next tab view item in the sequence.
- [selectPreviousTabViewItem(\_:)](selectprevioustabviewitem%28__%29.md): This action method selects the previous tab view item in the sequence.
- [selectTabViewItem(at:)](selecttabviewitem%28at_%29.md): Selects the tab view item specified by `index`.
- [selectTabViewItem(withIdentifier:)](selecttabviewitem%28withidentifier_%29.md): Selects the tab view item specified by `identifier`.
- [selectedTabViewItem](selectedtabviewitem.md): The tab view item for the currently selected tab.
- [takeSelectedTabViewItemFromSender(\_:)](takeselectedtabviewitemfromsender%28__%29.md): Sets the selected tab view item to the selected item obtained from the sender.

# selectTabViewItem: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Selects the specified tab view item.

## Declaration

```objectivec
- (void) selectTabViewItem:(NSTabViewItem *) tabViewItem;
```

## Parameters

- `tabViewItem`: The tab item to select.

<a id="Discussion"></a>

## Discussion

If there is a delegate and the delegate supports it, sends the delegate the [tabView:shouldSelectTabViewItem:](../nstabviewdelegate/tabview%28__shouldselect_%29.md) message.

## See Also

### Related Documentation

- [insertTabViewItem:atIndex:](inserttabviewitem%28__at_%29.md): Inserts the specified item into the tab view’s array of tab view items at the specified index.

### Selecting a Tab

- [selectFirstTabViewItem:](selectfirsttabviewitem%28__%29.md): This action method selects the first tab view item.
- [selectLastTabViewItem:](selectlasttabviewitem%28__%29.md): This action method selects the last tab view item.
- [selectNextTabViewItem:](selectnexttabviewitem%28__%29.md): This action method selects the next tab view item in the sequence.
- [selectPreviousTabViewItem:](selectprevioustabviewitem%28__%29.md): This action method selects the previous tab view item in the sequence.
- [selectTabViewItemAtIndex:](selecttabviewitem%28at_%29.md): Selects the tab view item specified by `index`.
- [selectTabViewItemWithIdentifier:](selecttabviewitem%28withidentifier_%29.md): Selects the tab view item specified by `identifier`.
- [selectedTabViewItem](selectedtabviewitem.md): The tab view item for the currently selected tab.
- [takeSelectedTabViewItemFromSender:](takeselectedtabviewitemfromsender%28__%29.md): Sets the selected tab view item to the selected item obtained from the sender.
