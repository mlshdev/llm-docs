> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quicklook/qlpreviewcontrollerdelegate/previewcontroller(_:editingmodefor:)](https://developer.apple.com/documentation/quicklook/qlpreviewcontrollerdelegate/previewcontroller(_:editingmodefor:))

# previewController(\_:editingModeFor:) (Swift)

**Framework:** Quick Look  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns a value that indicates how the preview controller handles edits to the content of the previewed file.

## Declaration

```swift
optional func previewController(_ controller: QLPreviewController, editingModeFor previewItem: any QLPreviewItem) -> QLPreviewItemEditingMode
```

## Parameters

- `controller`: The controller that displays the preview.
- `previewItem`: The preview item for a file.

<a id="return-value"></a>

## Return Value

A value that indicates whether the previewed content is editable and how Quick Look saves the edits. If you return [QLPreviewItemEditingMode.updateContents](../qlpreviewitemeditingmode/updatecontents.md) or [QLPreviewItemEditingMode.createCopy](../qlpreviewitemeditingmode/createcopy.md) to allow edits to a preview, make sure to implement the appropriate callbacks.

<a id="Discussion"></a>

## Discussion

The platform invokes this callback when the preview controller loads its data. The system calls it for each preview item that it passes to the data source of the preview controller.

By default, a preview controller doesn’t allow edits to a preview. However, you can implement this method to allow the user to edit the previewed document, and specify the behavior for saving changes. The supported set of edits may change over time, but currently includes adding markup to images or PDFs, as well as simple edits to video files.

If you want to update the underlying file in place, return [QLPreviewItemEditingMode.updateContents](../qlpreviewitemeditingmode/updatecontents.md), and implement both the [previewController(\_:didUpdateContentsOf:)](previewcontroller%28__didupdatecontentsof_%29.md) and [previewController(\_:didSaveEditedCopyOf:at:)](previewcontroller%28__didsaveeditedcopyof_at_%29.md) delegate methods. The Quick Look feature calls [previewController(\_:didUpdateContentsOf:)](previewcontroller%28__didupdatecontentsof_%29.md) first and updates the preview item’s content. If it can’t update the item directly, it invokes [previewController(\_:didSaveEditedCopyOf:at:)](previewcontroller%28__didsaveeditedcopyof_at_%29.md) and creates a copy of the preview item’s content that contains the edits.

If you prefer to always save edits to a copy of the preview item’s content, return [QLPreviewItemEditingMode.createCopy](../qlpreviewitemeditingmode/createcopy.md) and implement [previewController(\_:didSaveEditedCopyOf:at:)](previewcontroller%28__didsaveeditedcopyof_at_%29.md).

## See Also

### Editing the content of a preview

- [QLPreviewItemEditingMode](../qlpreviewitemeditingmode.md)
- [previewController(\_:didUpdateContentsOf:)](previewcontroller%28__didupdatecontentsof_%29.md): Tells the delegate that the content of a preview was updated successfully.
- [previewController(\_:didSaveEditedCopyOf:at:)](previewcontroller%28__didsaveeditedcopyof_at_%29.md): Tells the delegate that the preview item’s edited content was successfully saved to a copy at the given URL.

# previewController:editingModeForPreviewItem: (Objective-C)

**Framework:** Quick Look  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns a value that indicates how the preview controller handles edits to the content of the previewed file.

## Declaration

```objectivec
- (QLPreviewItemEditingMode) previewController:(QLPreviewController *) controller editingModeForPreviewItem:(id<QLPreviewItem>) previewItem;
```

## Parameters

- `controller`: The controller that displays the preview.
- `previewItem`: The preview item for a file.

<a id="return-value"></a>

## Return Value

A value that indicates whether the previewed content is editable and how Quick Look saves the edits. If you return [QLPreviewItemEditingModeUpdateContents](../qlpreviewitemeditingmode/updatecontents.md) or [QLPreviewItemEditingModeCreateCopy](../qlpreviewitemeditingmode/createcopy.md) to allow edits to a preview, make sure to implement the appropriate callbacks.

<a id="Discussion"></a>

## Discussion

The platform invokes this callback when the preview controller loads its data. The system calls it for each preview item that it passes to the data source of the preview controller.

By default, a preview controller doesn’t allow edits to a preview. However, you can implement this method to allow the user to edit the previewed document, and specify the behavior for saving changes. The supported set of edits may change over time, but currently includes adding markup to images or PDFs, as well as simple edits to video files.

If you want to update the underlying file in place, return [QLPreviewItemEditingModeUpdateContents](../qlpreviewitemeditingmode/updatecontents.md), and implement both the [previewController:didUpdateContentsOfPreviewItem:](previewcontroller%28__didupdatecontentsof_%29.md) and [previewController:didSaveEditedCopyOfPreviewItem:atURL:](previewcontroller%28__didsaveeditedcopyof_at_%29.md) delegate methods. The Quick Look feature calls [previewController:didUpdateContentsOfPreviewItem:](previewcontroller%28__didupdatecontentsof_%29.md) first and updates the preview item’s content. If it can’t update the item directly, it invokes [previewController:didSaveEditedCopyOfPreviewItem:atURL:](previewcontroller%28__didsaveeditedcopyof_at_%29.md) and creates a copy of the preview item’s content that contains the edits.

If you prefer to always save edits to a copy of the preview item’s content, return [QLPreviewItemEditingModeCreateCopy](../qlpreviewitemeditingmode/createcopy.md) and implement [previewController:didSaveEditedCopyOfPreviewItem:atURL:](previewcontroller%28__didsaveeditedcopyof_at_%29.md).

## See Also

### Editing the content of a preview

- [QLPreviewItemEditingMode](../qlpreviewitemeditingmode.md)
- [previewController:didUpdateContentsOfPreviewItem:](previewcontroller%28__didupdatecontentsof_%29.md): Tells the delegate that the content of a preview was updated successfully.
- [previewController:didSaveEditedCopyOfPreviewItem:atURL:](previewcontroller%28__didsaveeditedcopyof_at_%29.md): Tells the delegate that the preview item’s edited content was successfully saved to a copy at the given URL.
