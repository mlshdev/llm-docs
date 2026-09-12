> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstabview/selectedtabviewitem](https://developer.apple.com/documentation/appkit/nstabview/selectedtabviewitem)

# selectedTabViewItem (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The tab view item for the currently selected tab.

## Declaration

```swift
var selectedTabViewItem: NSTabViewItem? { get }
```

<a id="Discussion"></a>

## Discussion

If no item is selected, the value of this property is `nil`.

## See Also

### Selecting a Tab

- [selectFirstTabViewItem(\_:)](selectfirsttabviewitem%28__%29.md): This action method selects the first tab view item.
- [selectLastTabViewItem(\_:)](selectlasttabviewitem%28__%29.md): This action method selects the last tab view item.
- [selectNextTabViewItem(\_:)](selectnexttabviewitem%28__%29.md): This action method selects the next tab view item in the sequence.
- [selectPreviousTabViewItem(\_:)](selectprevioustabviewitem%28__%29.md): This action method selects the previous tab view item in the sequence.
- [selectTabViewItem(\_:)](selecttabviewitem%28__%29.md): Selects the specified tab view item.
- [selectTabViewItem(at:)](selecttabviewitem%28at_%29.md): Selects the tab view item specified by `index`.
- [selectTabViewItem(withIdentifier:)](selecttabviewitem%28withidentifier_%29.md): Selects the tab view item specified by `identifier`.
- [takeSelectedTabViewItemFromSender(\_:)](takeselectedtabviewitemfromsender%28__%29.md): Sets the selected tab view item to the selected item obtained from the sender.

# selectedTabViewItem (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The tab view item for the currently selected tab.

## Declaration

```objectivec
@property (strong, readonly, nullable) NSTabViewItem * selectedTabViewItem;
```

<a id="Discussion"></a>

## Discussion

If no item is selected, the value of this property is `nil`.

## See Also

### Selecting a Tab

- [selectFirstTabViewItem:](selectfirsttabviewitem%28__%29.md): This action method selects the first tab view item.
- [selectLastTabViewItem:](selectlasttabviewitem%28__%29.md): This action method selects the last tab view item.
- [selectNextTabViewItem:](selectnexttabviewitem%28__%29.md): This action method selects the next tab view item in the sequence.
- [selectPreviousTabViewItem:](selectprevioustabviewitem%28__%29.md): This action method selects the previous tab view item in the sequence.
- [selectTabViewItem:](selecttabviewitem%28__%29.md): Selects the specified tab view item.
- [selectTabViewItemAtIndex:](selecttabviewitem%28at_%29.md): Selects the tab view item specified by `index`.
- [selectTabViewItemWithIdentifier:](selecttabviewitem%28withidentifier_%29.md): Selects the tab view item specified by `identifier`.
- [takeSelectedTabViewItemFromSender:](takeselectedtabviewitemfromsender%28__%29.md): Sets the selected tab view item to the selected item obtained from the sender.
