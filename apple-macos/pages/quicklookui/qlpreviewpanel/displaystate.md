> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quicklookui/qlpreviewpanel/displaystate](https://developer.apple.com/documentation/quicklookui/qlpreviewpanel/displaystate)

# displayState (Swift)

**Framework:** Quick Look UI  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

The preview panel’s display state.

## Declaration

```swift
var displayState: Any! { get set }
```

<a id="Discussion"></a>

## Discussion

This property is an opaque object that Quick Look uses to get and set the current display state of the preview. The display state could be, for example, the currently displayed page, the zoom factor on an image, or the position in a movie.

You can use this property to get and save the current display state of the preview before switching to another. This saving allows you to restore a preview later on when the user switches back to it.

## See Also

### Managing the Preview Items

- [dataSource](datasource.md): The preview panel data source.
- [reloadData()](reloaddata%28%29.md): Asks the preview panel to reload its data from its data source.
- [refreshCurrentPreviewItem()](refreshcurrentpreviewitem%28%29.md): Asks the preview panel to recompute the preview of the current preview item.
- [currentPreviewItemIndex](currentpreviewitemindex.md): The index of the current preview item.
- [currentPreviewItem](currentpreviewitem.md): The currently previewed item.

# displayState (Objective-C)

**Framework:** Quick Look UI  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

The preview panel’s display state.

## Declaration

```objectivec
@property (retain) id displayState;
```

<a id="Discussion"></a>

## Discussion

This property is an opaque object that Quick Look uses to get and set the current display state of the preview. The display state could be, for example, the currently displayed page, the zoom factor on an image, or the position in a movie.

You can use this property to get and save the current display state of the preview before switching to another. This saving allows you to restore a preview later on when the user switches back to it.

## See Also

### Managing the Preview Items

- [dataSource](datasource.md): The preview panel data source.
- [reloadData](reloaddata%28%29.md): Asks the preview panel to reload its data from its data source.
- [refreshCurrentPreviewItem](refreshcurrentpreviewitem%28%29.md): Asks the preview panel to recompute the preview of the current preview item.
- [currentPreviewItemIndex](currentpreviewitemindex.md): The index of the current preview item.
- [currentPreviewItem](currentpreviewitem.md): The currently previewed item.
