> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quicklookui/qlpreviewpaneldatasource/previewpanel(_:previewitemat:)](https://developer.apple.com/documentation/quicklookui/qlpreviewpaneldatasource/previewpanel(_:previewitemat:))

# previewPanel(\_:previewItemAt:) (Swift)

**Framework:** Quick Look UI  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Returns the item that the preview panel should preview at a given index.

## Declaration

```swift
func previewPanel(_ panel: QLPreviewPanel!, previewItemAt index: Int) -> (any QLPreviewItem)!
```

## Parameters

- `panel`: The preview panel.
- `index`: The index of the item to preview.

<a id="return-value"></a>

## Return Value

The item that the preview panel should preview at index `index`.

## See Also

### Required Methods

- [numberOfPreviewItems(in:)](numberofpreviewitems%28in_%29.md): Returns the number of items that the preview panel should preview.

# previewPanel:previewItemAtIndex: (Objective-C)

**Framework:** Quick Look UI  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Returns the item that the preview panel should preview at a given index.

## Declaration

```objectivec
- (id<QLPreviewItem>) previewPanel:(QLPreviewPanel *) panel previewItemAtIndex:(NSInteger) index;
```

## Parameters

- `panel`: The preview panel.
- `index`: The index of the item to preview.

<a id="return-value"></a>

## Return Value

The item that the preview panel should preview at index `index`.

## See Also

### Required Methods

- [numberOfPreviewItemsInPreviewPanel:](numberofpreviewitems%28in_%29.md): Returns the number of items that the preview panel should preview.
