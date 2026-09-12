> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quicklookui/qlpreviewpanel/currentpreviewitem](https://developer.apple.com/documentation/quicklookui/qlpreviewpanel/currentpreviewitem)

# currentPreviewItem (Swift)

**Framework:** Quick Look UI  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

The currently previewed item.

## Declaration

```swift
var currentPreviewItem: (any QLPreviewItem)! { get }
```

<a id="Discussion"></a>

## Discussion

The value is `nil` if there’s no current preview item.

## See Also

### Managing the Preview Items

- [dataSource](datasource.md): The preview panel data source.
- [reloadData()](reloaddata%28%29.md): Asks the preview panel to reload its data from its data source.
- [refreshCurrentPreviewItem()](refreshcurrentpreviewitem%28%29.md): Asks the preview panel to recompute the preview of the current preview item.
- [currentPreviewItemIndex](currentpreviewitemindex.md): The index of the current preview item.
- [displayState](displaystate.md): The preview panel’s display state.

# currentPreviewItem (Objective-C)

**Framework:** Quick Look UI  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

The currently previewed item.

## Declaration

```objectivec
@property (readonly) id<QLPreviewItem> currentPreviewItem;
```

<a id="Discussion"></a>

## Discussion

The value is `nil` if there’s no current preview item.

## See Also

### Managing the Preview Items

- [dataSource](datasource.md): The preview panel data source.
- [reloadData](reloaddata%28%29.md): Asks the preview panel to reload its data from its data source.
- [refreshCurrentPreviewItem](refreshcurrentpreviewitem%28%29.md): Asks the preview panel to recompute the preview of the current preview item.
- [currentPreviewItemIndex](currentpreviewitemindex.md): The index of the current preview item.
- [displayState](displaystate.md): The preview panel’s display state.
