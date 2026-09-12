> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quicklook/qlpreviewcontrollerdatasource/previewcontroller(_:previewitemat:)](https://developer.apple.com/documentation/quicklook/qlpreviewcontrollerdatasource/previewcontroller(_:previewitemat:))

# previewController(\_:previewItemAt:) (Swift)

**Framework:** Quick Look  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns the preview item that the controller displays for the specified index.

## Declaration

```swift
func previewController(_ controller: QLPreviewController, previewItemAt index: Int) -> any QLPreviewItem
```

## Parameters

- `controller`: The Quick Look preview controller that’s requesting a preview item.
- `index`: The index position, within the preview navigation list, of the item to preview.

<a id="return-value"></a>

## Return Value

The preview item to display. The item must be an `NSURL` object, or a custom object that conforms to the [QLPreviewItem](../qlpreviewitem.md) protocol.

<a id="Discussion"></a>

## Discussion

The system invokes this method when the preview controller needs the preview item for a specified index position.

## See Also

### Providing data to a preview controller

- [numberOfPreviewItems(in:)](numberofpreviewitems%28in_%29.md): Returns the number of preview items to include in the preview navigation list.

# previewController:previewItemAtIndex: (Objective-C)

**Framework:** Quick Look  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · visionOS 1.0+

Returns the preview item that the controller displays for the specified index.

## Declaration

```objectivec
- (id<QLPreviewItem>) previewController:(QLPreviewController *) controller previewItemAtIndex:(NSInteger) index;
```

## Parameters

- `controller`: The Quick Look preview controller that’s requesting a preview item.
- `index`: The index position, within the preview navigation list, of the item to preview.

<a id="return-value"></a>

## Return Value

The preview item to display. The item must be an `NSURL` object, or a custom object that conforms to the [QLPreviewItem](../qlpreviewitem.md) protocol.

<a id="Discussion"></a>

## Discussion

The system invokes this method when the preview controller needs the preview item for a specified index position.

## See Also

### Providing data to a preview controller

- [numberOfPreviewItemsInPreviewController:](numberofpreviewitems%28in_%29.md): Returns the number of preview items to include in the preview navigation list.
