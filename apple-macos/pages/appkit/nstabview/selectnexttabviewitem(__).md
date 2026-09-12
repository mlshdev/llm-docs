> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstabview/selectnexttabviewitem(_:)](https://developer.apple.com/documentation/appkit/nstabview/selectnexttabviewitem(_:))

# selectNextTabViewItem(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

This action method selects the next tab view item in the sequence.

## Declaration

```swift
func selectNextTabViewItem(_ sender: Any?)
```

## Parameters

- `sender`: Typically the object that sent the message.

<a id="Discussion"></a>

## Discussion

If the currently visible item is the last item in the sequence, this method does nothing, and the last pane remains displayed.

## See Also

### Selecting a Tab

- [selectFirstTabViewItem(\_:)](selectfirsttabviewitem%28__%29.md): This action method selects the first tab view item.
- [selectLastTabViewItem(\_:)](selectlasttabviewitem%28__%29.md): This action method selects the last tab view item.
- [selectPreviousTabViewItem(\_:)](selectprevioustabviewitem%28__%29.md): This action method selects the previous tab view item in the sequence.
- [selectTabViewItem(\_:)](selecttabviewitem%28__%29.md): Selects the specified tab view item.
- [selectTabViewItem(at:)](selecttabviewitem%28at_%29.md): Selects the tab view item specified by `index`.
- [selectTabViewItem(withIdentifier:)](selecttabviewitem%28withidentifier_%29.md): Selects the tab view item specified by `identifier`.
- [selectedTabViewItem](selectedtabviewitem.md): The tab view item for the currently selected tab.
- [takeSelectedTabViewItemFromSender(\_:)](takeselectedtabviewitemfromsender%28__%29.md): Sets the selected tab view item to the selected item obtained from the sender.

# selectNextTabViewItem: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

This action method selects the next tab view item in the sequence.

## Declaration

```objectivec
- (void) selectNextTabViewItem:(id) sender;
```

## Parameters

- `sender`: Typically the object that sent the message.

<a id="Discussion"></a>

## Discussion

If the currently visible item is the last item in the sequence, this method does nothing, and the last pane remains displayed.

## See Also

### Selecting a Tab

- [selectFirstTabViewItem:](selectfirsttabviewitem%28__%29.md): This action method selects the first tab view item.
- [selectLastTabViewItem:](selectlasttabviewitem%28__%29.md): This action method selects the last tab view item.
- [selectPreviousTabViewItem:](selectprevioustabviewitem%28__%29.md): This action method selects the previous tab view item in the sequence.
- [selectTabViewItem:](selecttabviewitem%28__%29.md): Selects the specified tab view item.
- [selectTabViewItemAtIndex:](selecttabviewitem%28at_%29.md): Selects the tab view item specified by `index`.
- [selectTabViewItemWithIdentifier:](selecttabviewitem%28withidentifier_%29.md): Selects the tab view item specified by `identifier`.
- [selectedTabViewItem](selectedtabviewitem.md): The tab view item for the currently selected tab.
- [takeSelectedTabViewItemFromSender:](takeselectedtabviewitemfromsender%28__%29.md): Sets the selected tab view item to the selected item obtained from the sender.
