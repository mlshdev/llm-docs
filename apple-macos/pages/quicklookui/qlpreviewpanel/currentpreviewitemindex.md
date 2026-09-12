> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quicklookui/qlpreviewpanel/currentpreviewitemindex](https://developer.apple.com/documentation/quicklookui/qlpreviewpanel/currentpreviewitemindex)

# currentPreviewItemIndex (Swift)

**Framework:** Quick Look UI  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

The index of the current preview item.

## Declaration

```swift
var currentPreviewItemIndex: Int { get set }
```

<a id="Discussion"></a>

## Discussion

The value is `NSNotFound` if there’s no current preview item.

## See Also

### Managing the Preview Items

- [dataSource](datasource.md): The preview panel data source.
- [reloadData()](reloaddata%28%29.md): Asks the preview panel to reload its data from its data source.
- [refreshCurrentPreviewItem()](refreshcurrentpreviewitem%28%29.md): Asks the preview panel to recompute the preview of the current preview item.
- [currentPreviewItem](currentpreviewitem.md): The currently previewed item.
- [displayState](displaystate.md): The preview panel’s display state.

# currentPreviewItemIndex (Objective-C)

**Framework:** Quick Look UI  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

The index of the current preview item.

## Declaration

```objectivec
@property NSInteger currentPreviewItemIndex;
```

<a id="Discussion"></a>

## Discussion

The value is `NSNotFound` if there’s no current preview item.

## See Also

### Managing the Preview Items

- [dataSource](datasource.md): The preview panel data source.
- [reloadData](reloaddata%28%29.md): Asks the preview panel to reload its data from its data source.
- [refreshCurrentPreviewItem](refreshcurrentpreviewitem%28%29.md): Asks the preview panel to recompute the preview of the current preview item.
- [currentPreviewItem](currentpreviewitem.md): The currently previewed item.
- [displayState](displaystate.md): The preview panel’s display state.
