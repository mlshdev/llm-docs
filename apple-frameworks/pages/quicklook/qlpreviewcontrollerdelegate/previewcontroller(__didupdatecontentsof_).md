> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quicklook/qlpreviewcontrollerdelegate/previewcontroller(_:didupdatecontentsof:)](https://developer.apple.com/documentation/quicklook/qlpreviewcontrollerdelegate/previewcontroller(_:didupdatecontentsof:))

# previewController(\_:didUpdateContentsOf:) (Swift)

**Framework:** Quick Look  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Tells the delegate that the content of a preview was updated successfully.

## Declaration

```swift
optional func previewController(_ controller: QLPreviewController, didUpdateContentsOf previewItem: any QLPreviewItem)
```

## Parameters

- `controller`: The controller that displays the preview.
- `previewItem`: The preview item for a file.

<a id="Discussion"></a>

## Discussion

The platform invokes this callback after the preview controller successfully overwrites the file at the `previewItem’`s [previewItemURL](../qlpreviewitem/previewitemurl.md) with an updated file.

The platform may invoke the callback multiple times consecutively with the successive edited versions of the preview item. It typically invokes the callback once for each time the user saves their edits.

## See Also

### Editing the content of a preview

- [previewController(\_:editingModeFor:)](previewcontroller%28__editingmodefor_%29.md): Returns a value that indicates how the preview controller handles edits to the content of the previewed file.
- [QLPreviewItemEditingMode](../qlpreviewitemeditingmode.md)
- [previewController(\_:didSaveEditedCopyOf:at:)](previewcontroller%28__didsaveeditedcopyof_at_%29.md): Tells the delegate that the preview item’s edited content was successfully saved to a copy at the given URL.

# previewController:didUpdateContentsOfPreviewItem: (Objective-C)

**Framework:** Quick Look  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Tells the delegate that the content of a preview was updated successfully.

## Declaration

```objectivec
- (void) previewController:(QLPreviewController *) controller didUpdateContentsOfPreviewItem:(id<QLPreviewItem>) previewItem;
```

## Parameters

- `controller`: The controller that displays the preview.
- `previewItem`: The preview item for a file.

<a id="Discussion"></a>

## Discussion

The platform invokes this callback after the preview controller successfully overwrites the file at the `previewItem’`s [previewItemURL](../qlpreviewitem/previewitemurl.md) with an updated file.

The platform may invoke the callback multiple times consecutively with the successive edited versions of the preview item. It typically invokes the callback once for each time the user saves their edits.

## See Also

### Editing the content of a preview

- [previewController:editingModeForPreviewItem:](previewcontroller%28__editingmodefor_%29.md): Returns a value that indicates how the preview controller handles edits to the content of the previewed file.
- [QLPreviewItemEditingMode](../qlpreviewitemeditingmode.md)
- [previewController:didSaveEditedCopyOfPreviewItem:atURL:](previewcontroller%28__didsaveeditedcopyof_at_%29.md): Tells the delegate that the preview item’s edited content was successfully saved to a copy at the given URL.
