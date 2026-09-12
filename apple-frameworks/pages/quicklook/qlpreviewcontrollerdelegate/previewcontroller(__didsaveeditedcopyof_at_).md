> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quicklook/qlpreviewcontrollerdelegate/previewcontroller(_:didsaveeditedcopyof:at:)](https://developer.apple.com/documentation/quicklook/qlpreviewcontrollerdelegate/previewcontroller(_:didsaveeditedcopyof:at:))

# previewController(\_:didSaveEditedCopyOf:at:) (Swift)

**Framework:** Quick Look  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Tells the delegate that the preview item’s edited content was successfully saved to a copy at the given URL.

## Declaration

```swift
optional func previewController(_ controller: QLPreviewController, didSaveEditedCopyOf previewItem: any QLPreviewItem, at modifiedContentsURL: URL)
```

## Parameters

- `controller`: The controller that displays the preview.
- `previewItem`: The preview item for a file.
- `modifiedContentsURL`: A URL pointing to a temporary file that contains the edited version of the previewed file.

<a id="Discussion"></a>

## Discussion

The platform invokes this callback with an edited copy of the preview item at `modifiedContentsURL`. It invokes the callback in the following scenarios:

- The editing mode of the `previewItem` is [QLPreviewItemEditingMode.createCopy](../qlpreviewitemeditingmode/createcopy.md).
- The editing mode of the `previewItem` is [QLPreviewItemEditingMode.updateContents](../qlpreviewitemeditingmode/updatecontents.md) and the system can’t overwrite its [previewItemURL](../qlpreviewitem/previewitemurl.md). In this case, `modifiedContentsURL` points to a temporary file on disk containing the edited copy.
- The editing mode of the preview item is [QLPreviewItemEditingMode.updateContents](../qlpreviewitemeditingmode/updatecontents.md) and its content type doesn’t match the content type of the edited version. This mismatch means that the file type of the file at `modifiedContentsURL` may be different from the file type of the preview item.

The platform may invoke the callback multiple times consecutively with the successive edited versions of the preview item. It typically invokes the callback once for each time the user saves their edits.

## See Also

### Editing the content of a preview

- [previewController(\_:editingModeFor:)](previewcontroller%28__editingmodefor_%29.md): Returns a value that indicates how the preview controller handles edits to the content of the previewed file.
- [QLPreviewItemEditingMode](../qlpreviewitemeditingmode.md)
- [previewController(\_:didUpdateContentsOf:)](previewcontroller%28__didupdatecontentsof_%29.md): Tells the delegate that the content of a preview was updated successfully.

# previewController:didSaveEditedCopyOfPreviewItem:atURL: (Objective-C)

**Framework:** Quick Look  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Tells the delegate that the preview item’s edited content was successfully saved to a copy at the given URL.

## Declaration

```objectivec
- (void) previewController:(QLPreviewController *) controller didSaveEditedCopyOfPreviewItem:(id<QLPreviewItem>) previewItem atURL:(NSURL *) modifiedContentsURL;
```

## Parameters

- `controller`: The controller that displays the preview.
- `previewItem`: The preview item for a file.
- `modifiedContentsURL`: A URL pointing to a temporary file that contains the edited version of the previewed file.

<a id="Discussion"></a>

## Discussion

The platform invokes this callback with an edited copy of the preview item at `modifiedContentsURL`. It invokes the callback in the following scenarios:

- The editing mode of the `previewItem` is [QLPreviewItemEditingModeCreateCopy](../qlpreviewitemeditingmode/createcopy.md).
- The editing mode of the `previewItem` is [QLPreviewItemEditingModeUpdateContents](../qlpreviewitemeditingmode/updatecontents.md) and the system can’t overwrite its [previewItemURL](../qlpreviewitem/previewitemurl.md). In this case, `modifiedContentsURL` points to a temporary file on disk containing the edited copy.
- The editing mode of the preview item is [QLPreviewItemEditingModeUpdateContents](../qlpreviewitemeditingmode/updatecontents.md) and its content type doesn’t match the content type of the edited version. This mismatch means that the file type of the file at `modifiedContentsURL` may be different from the file type of the preview item.

The platform may invoke the callback multiple times consecutively with the successive edited versions of the preview item. It typically invokes the callback once for each time the user saves their edits.

## See Also

### Editing the content of a preview

- [previewController:editingModeForPreviewItem:](previewcontroller%28__editingmodefor_%29.md): Returns a value that indicates how the preview controller handles edits to the content of the previewed file.
- [QLPreviewItemEditingMode](../qlpreviewitemeditingmode.md)
- [previewController:didUpdateContentsOfPreviewItem:](previewcontroller%28__didupdatecontentsof_%29.md): Tells the delegate that the content of a preview was updated successfully.
