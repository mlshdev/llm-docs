> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quicklookui/qlpreviewpanel/reloaddata()](https://developer.apple.com/documentation/quicklookui/qlpreviewpanel/reloaddata())

# reloadData() (Swift)

**Framework:** Quick Look UI  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Asks the preview panel to reload its data from its data source.

## Declaration

```swift
func reloadData()
```

<a id="Discussion"></a>

## Discussion

This method doesn’t refresh the visible item if it hasn’t changed.

## See Also

### Managing the Preview Items

- [dataSource](datasource.md): The preview panel data source.
- [refreshCurrentPreviewItem()](refreshcurrentpreviewitem%28%29.md): Asks the preview panel to recompute the preview of the current preview item.
- [currentPreviewItemIndex](currentpreviewitemindex.md): The index of the current preview item.
- [currentPreviewItem](currentpreviewitem.md): The currently previewed item.
- [displayState](displaystate.md): The preview panel’s display state.

# reloadData (Objective-C)

**Framework:** Quick Look UI  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Asks the preview panel to reload its data from its data source.

## Declaration

```objectivec
- (void) reloadData;
```

<a id="Discussion"></a>

## Discussion

This method doesn’t refresh the visible item if it hasn’t changed.

## See Also

### Managing the Preview Items

- [dataSource](datasource.md): The preview panel data source.
- [refreshCurrentPreviewItem](refreshcurrentpreviewitem%28%29.md): Asks the preview panel to recompute the preview of the current preview item.
- [currentPreviewItemIndex](currentpreviewitemindex.md): The index of the current preview item.
- [currentPreviewItem](currentpreviewitem.md): The currently previewed item.
- [displayState](displaystate.md): The preview panel’s display state.
