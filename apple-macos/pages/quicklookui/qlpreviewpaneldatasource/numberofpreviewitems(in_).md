> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quicklookui/qlpreviewpaneldatasource/numberofpreviewitems(in:)](https://developer.apple.com/documentation/quicklookui/qlpreviewpaneldatasource/numberofpreviewitems(in:))

# numberOfPreviewItems(in:) (Swift)

**Framework:** Quick Look UI  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Returns the number of items that the preview panel should preview.

## Declaration

```swift
func numberOfPreviewItems(in panel: QLPreviewPanel!) -> Int
```

## Parameters

- `panel`: The preview panel.

<a id="return-value"></a>

## Return Value

The number of items the preview panel should display.

## See Also

### Required Methods

- [previewPanel(\_:previewItemAt:)](previewpanel%28__previewitemat_%29.md): Returns the item that the preview panel should preview at a given index.

# numberOfPreviewItemsInPreviewPanel: (Objective-C)

**Framework:** Quick Look UI  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Returns the number of items that the preview panel should preview.

## Declaration

```objectivec
- (NSInteger) numberOfPreviewItemsInPreviewPanel:(QLPreviewPanel *) panel;
```

## Parameters

- `panel`: The preview panel.

<a id="return-value"></a>

## Return Value

The number of items the preview panel should display.

## See Also

### Required Methods

- [previewPanel:previewItemAtIndex:](previewpanel%28__previewitemat_%29.md): Returns the item that the preview panel should preview at a given index.
