> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quicklookui/qlpreviewpanel/datasource](https://developer.apple.com/documentation/quicklookui/qlpreviewpanel/datasource)

# dataSource (Swift)

**Framework:** Quick Look UI  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

The preview panel data source.

## Declaration

```swift
unowned(unsafe) var dataSource: (any QLPreviewPanelDataSource)! { get set }
```

## See Also

### Managing the Preview Items

- [reloadData()](reloaddata%28%29.md): Asks the preview panel to reload its data from its data source.
- [refreshCurrentPreviewItem()](refreshcurrentpreviewitem%28%29.md): Asks the preview panel to recompute the preview of the current preview item.
- [currentPreviewItemIndex](currentpreviewitemindex.md): The index of the current preview item.
- [currentPreviewItem](currentpreviewitem.md): The currently previewed item.
- [displayState](displaystate.md): The preview panel’s display state.

# dataSource (Objective-C)

**Framework:** Quick Look UI  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

The preview panel data source.

## Declaration

```objectivec
@property (assign) id<QLPreviewPanelDataSource> dataSource;
```

## See Also

### Managing the Preview Items

- [reloadData](reloaddata%28%29.md): Asks the preview panel to reload its data from its data source.
- [refreshCurrentPreviewItem](refreshcurrentpreviewitem%28%29.md): Asks the preview panel to recompute the preview of the current preview item.
- [currentPreviewItemIndex](currentpreviewitemindex.md): The index of the current preview item.
- [currentPreviewItem](currentpreviewitem.md): The currently previewed item.
- [displayState](displaystate.md): The preview panel’s display state.
