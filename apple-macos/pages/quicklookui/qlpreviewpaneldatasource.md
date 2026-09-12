> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quicklookui/qlpreviewpaneldatasource](https://developer.apple.com/documentation/quicklookui/qlpreviewpaneldatasource)

# QLPreviewPanelDataSource (Swift)

**Framework:** Quick Look UI  
**Kind:** Protocol  
**Availability:** macOS 12.0+

A protocol that the Quick Look preview panel uses to access the contents of its data source object.

## Declaration

```swift
protocol QLPreviewPanelDataSource
```

## Topics

### Required Methods

- [numberOfPreviewItems(in:)](qlpreviewpaneldatasource/numberofpreviewitems%28in_%29.md): Returns the number of items that the preview panel should preview.
- [previewPanel(\_:previewItemAt:)](qlpreviewpaneldatasource/previewpanel%28__previewitemat_%29.md): Returns the item that the preview panel should preview at a given index.

## See Also

### Previews

- [QLPreviewPanel](qlpreviewpanel.md): A class that implements the Quick Look preview panel to display a preview of a list of items.
- [QLPreviewView](qlpreviewview.md): A Quick Look preview of an item that you can embed into your view hierarchy.
- [QLPreviewItem](qlpreviewitem.md): A protocol that defines a set of properties you implement to make a preview of your app’s content.
- [QLPreviewPanelDelegate](qlpreviewpaneldelegate.md): A protocol for the delegate of the Quick Look preview panel.
- [QLPreviewItemLoadingBlock](qlpreviewitemloadingblock.md): Deprecated. A type that defines a block used to load a Quick Look preview item.

# QLPreviewPanelDataSource (Objective-C)

**Framework:** Quick Look UI  
**Kind:** Protocol  
**Availability:** macOS 12.0+

A protocol that the Quick Look preview panel uses to access the contents of its data source object.

## Declaration

```objectivec
@protocol QLPreviewPanelDataSource
```

## Topics

### Required Methods

- [numberOfPreviewItemsInPreviewPanel:](qlpreviewpaneldatasource/numberofpreviewitems%28in_%29.md): Returns the number of items that the preview panel should preview.
- [previewPanel:previewItemAtIndex:](qlpreviewpaneldatasource/previewpanel%28__previewitemat_%29.md): Returns the item that the preview panel should preview at a given index.

## See Also

### Previews

- [QLPreviewPanel](qlpreviewpanel.md): A class that implements the Quick Look preview panel to display a preview of a list of items.
- [QLPreviewView](qlpreviewview.md): A Quick Look preview of an item that you can embed into your view hierarchy.
- [QLPreviewItem](qlpreviewitem.md): A protocol that defines a set of properties you implement to make a preview of your app’s content.
- [QLPreviewPanelDelegate](qlpreviewpaneldelegate.md): A protocol for the delegate of the Quick Look preview panel.
- [QLPreviewItemLoadingBlock](qlpreviewitemloadingblock.md): Deprecated. A type that defines a block used to load a Quick Look preview item.
