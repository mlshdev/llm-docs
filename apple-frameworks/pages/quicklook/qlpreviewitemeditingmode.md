> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quicklook/qlpreviewitemeditingmode](https://developer.apple.com/documentation/quicklook/qlpreviewitemeditingmode)

# QLPreviewItemEditingMode (Swift)

**Framework:** Quick Look  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

## Declaration

```swift
enum QLPreviewItemEditingMode
```

## Topics

### Enumeration Cases

- [QLPreviewItemEditingMode.createCopy](qlpreviewitemeditingmode/createcopy.md)
- [QLPreviewItemEditingMode.disabled](qlpreviewitemeditingmode/disabled.md)
- [QLPreviewItemEditingMode.updateContents](qlpreviewitemeditingmode/updatecontents.md)

### Initializers

- [init(rawValue:)](qlpreviewitemeditingmode/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Editing the content of a preview

- [previewController(\_:editingModeFor:)](qlpreviewcontrollerdelegate/previewcontroller%28__editingmodefor_%29.md): Returns a value that indicates how the preview controller handles edits to the content of the previewed file.
- [previewController(\_:didUpdateContentsOf:)](qlpreviewcontrollerdelegate/previewcontroller%28__didupdatecontentsof_%29.md): Tells the delegate that the content of a preview was updated successfully.
- [previewController(\_:didSaveEditedCopyOf:at:)](qlpreviewcontrollerdelegate/previewcontroller%28__didsaveeditedcopyof_at_%29.md): Tells the delegate that the preview item’s edited content was successfully saved to a copy at the given URL.

# QLPreviewItemEditingMode (Objective-C)

**Framework:** Quick Look  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

## Declaration

```objectivec
enum QLPreviewItemEditingMode : NSInteger;
```

## Topics

### Enumeration Cases

- [QLPreviewItemEditingModeCreateCopy](qlpreviewitemeditingmode/createcopy.md)
- [QLPreviewItemEditingModeDisabled](qlpreviewitemeditingmode/disabled.md)
- [QLPreviewItemEditingModeUpdateContents](qlpreviewitemeditingmode/updatecontents.md)

## See Also

### Editing the content of a preview

- [previewController:editingModeForPreviewItem:](qlpreviewcontrollerdelegate/previewcontroller%28__editingmodefor_%29.md): Returns a value that indicates how the preview controller handles edits to the content of the previewed file.
- [previewController:didUpdateContentsOfPreviewItem:](qlpreviewcontrollerdelegate/previewcontroller%28__didupdatecontentsof_%29.md): Tells the delegate that the content of a preview was updated successfully.
- [previewController:didSaveEditedCopyOfPreviewItem:atURL:](qlpreviewcontrollerdelegate/previewcontroller%28__didsaveeditedcopyof_at_%29.md): Tells the delegate that the preview item’s edited content was successfully saved to a copy at the given URL.
