> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quicklook/qlpreviewcontrollerdatasource](https://developer.apple.com/documentation/quicklook/qlpreviewcontrollerdatasource)

# QLPreviewControllerDataSource (Swift)

**Framework:** Quick Look  
**Kind:** Protocol  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · visionOS 1.0+

The protocol that a data source for a preview controller needs to adopt to provide preview items to the controller.

## Declaration

```swift
@MainActor protocol QLPreviewControllerDataSource
```

<a id="overview"></a>

## Overview

Besides providing a [QLPreviewController](qlpreviewcontroller.md) with items to preview, this protocol is responsible for telling the preview controller how many items it needs to include in a preview item navigation list.

## Topics

### Providing data to a preview controller

- [numberOfPreviewItems(in:)](qlpreviewcontrollerdatasource/numberofpreviewitems%28in_%29.md): Returns the number of preview items to include in the preview navigation list.
- [previewController(\_:previewItemAt:)](qlpreviewcontrollerdatasource/previewcontroller%28__previewitemat_%29.md): Returns the preview item that the controller displays for the specified index.

## See Also

### Configuring a preview controller

- [dataSource](qlpreviewcontroller/datasource.md): The preview controller’s data source.
- [delegate](qlpreviewcontroller/delegate.md): The preview controller’s delegate object.
- [QLPreviewControllerDelegate](qlpreviewcontrollerdelegate.md): The protocol that a delegate of a preview controller needs to adopt to handle Quick Look previews.

# QLPreviewControllerDataSource (Objective-C)

**Framework:** Quick Look  
**Kind:** Protocol  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · visionOS 1.0+

The protocol that a data source for a preview controller needs to adopt to provide preview items to the controller.

## Declaration

```objectivec
@protocol QLPreviewControllerDataSource
```

<a id="overview"></a>

## Overview

Besides providing a [QLPreviewController](qlpreviewcontroller.md) with items to preview, this protocol is responsible for telling the preview controller how many items it needs to include in a preview item navigation list.

## Topics

### Providing data to a preview controller

- [numberOfPreviewItemsInPreviewController:](qlpreviewcontrollerdatasource/numberofpreviewitems%28in_%29.md): Returns the number of preview items to include in the preview navigation list.
- [previewController:previewItemAtIndex:](qlpreviewcontrollerdatasource/previewcontroller%28__previewitemat_%29.md): Returns the preview item that the controller displays for the specified index.

## See Also

### Configuring a preview controller

- [dataSource](qlpreviewcontroller/datasource.md): The preview controller’s data source.
- [delegate](qlpreviewcontroller/delegate.md): The preview controller’s delegate object.
- [QLPreviewControllerDelegate](qlpreviewcontrollerdelegate.md): The protocol that a delegate of a preview controller needs to adopt to handle Quick Look previews.
