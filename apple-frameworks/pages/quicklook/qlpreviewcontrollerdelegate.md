> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quicklook/qlpreviewcontrollerdelegate](https://developer.apple.com/documentation/quicklook/qlpreviewcontrollerdelegate)

# QLPreviewControllerDelegate (Swift)

**Framework:** Quick Look  
**Kind:** Protocol  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · visionOS 1.0+

The protocol that a delegate of a preview controller needs to adopt to handle Quick Look previews.

## Declaration

```swift
protocol QLPreviewControllerDelegate : NSObjectProtocol
```

<a id="overview"></a>

## Overview

The delegate of a [QLPreviewController](qlpreviewcontroller.md) object needs to adopt this protocol to:

- Provide a zoom animation for Quick Look previews.
- Specify whether your app opens a URL that the user taps in a preview.
- Respond to the opening or closing of a preview.

The methods described here are optional, but expected.

## Topics

### Responding to preview requests

- [previewController(\_:frameFor:inSourceView:)](qlpreviewcontrollerdelegate/previewcontroller%28__framefor_insourceview_%29.md): Tells the delegate that the system is about to present the preview full screen or dismiss it, and asks for information to provide a zoom effect.
- [previewController(\_:transitionImageFor:contentRect:)](qlpreviewcontrollerdelegate/previewcontroller%28__transitionimagefor_contentrect_%29.md): Tells the delegate that the system is about to present the preview full screen or dismiss it, and asks for information to provide a smooth transition when zooming.
- [previewController(\_:transitionViewFor:)](qlpreviewcontrollerdelegate/previewcontroller%28__transitionviewfor_%29.md): Tells the delegate that the system is about to present the preview full screen or dismiss it, and asks for information to provide a smooth transition when zooming.
- [previewControllerWillDismiss(\_:)](qlpreviewcontrollerdelegate/previewcontrollerwilldismiss%28__%29.md): Tells the delegate that the preview is about to close.
- [previewControllerDidDismiss(\_:)](qlpreviewcontrollerdelegate/previewcontrollerdiddismiss%28__%29.md): Tells the delegate that the preview was closed.

### Responding to user actions

- [previewController(\_:shouldOpen:for:)](qlpreviewcontrollerdelegate/previewcontroller%28__shouldopen_for_%29.md): Tells the delegate that the preview controller is trying to open a URL.

### Editing the content of a preview

- [previewController(\_:editingModeFor:)](qlpreviewcontrollerdelegate/previewcontroller%28__editingmodefor_%29.md): Returns a value that indicates how the preview controller handles edits to the content of the previewed file.
- [QLPreviewItemEditingMode](qlpreviewitemeditingmode.md)
- [previewController(\_:didUpdateContentsOf:)](qlpreviewcontrollerdelegate/previewcontroller%28__didupdatecontentsof_%29.md): Tells the delegate that the content of a preview was updated successfully.
- [previewController(\_:didSaveEditedCopyOf:at:)](qlpreviewcontrollerdelegate/previewcontroller%28__didsaveeditedcopyof_at_%29.md): Tells the delegate that the preview item’s edited content was successfully saved to a copy at the given URL.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Configuring a preview controller

- [dataSource](qlpreviewcontroller/datasource.md): The preview controller’s data source.
- [QLPreviewControllerDataSource](qlpreviewcontrollerdatasource.md): The protocol that a data source for a preview controller needs to adopt to provide preview items to the controller.
- [delegate](qlpreviewcontroller/delegate.md): The preview controller’s delegate object.

# QLPreviewControllerDelegate (Objective-C)

**Framework:** Quick Look  
**Kind:** Protocol  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · visionOS 1.0+

The protocol that a delegate of a preview controller needs to adopt to handle Quick Look previews.

## Declaration

```objectivec
@protocol QLPreviewControllerDelegate <NSObject>
```

<a id="overview"></a>

## Overview

The delegate of a [QLPreviewController](qlpreviewcontroller.md) object needs to adopt this protocol to:

- Provide a zoom animation for Quick Look previews.
- Specify whether your app opens a URL that the user taps in a preview.
- Respond to the opening or closing of a preview.

The methods described here are optional, but expected.

## Topics

### Responding to preview requests

- [previewController:frameForPreviewItem:inSourceView:](qlpreviewcontrollerdelegate/previewcontroller%28__framefor_insourceview_%29.md): Tells the delegate that the system is about to present the preview full screen or dismiss it, and asks for information to provide a zoom effect.
- [previewController:transitionImageForPreviewItem:contentRect:](qlpreviewcontrollerdelegate/previewcontroller%28__transitionimagefor_contentrect_%29.md): Tells the delegate that the system is about to present the preview full screen or dismiss it, and asks for information to provide a smooth transition when zooming.
- [previewController:transitionViewForPreviewItem:](qlpreviewcontrollerdelegate/previewcontroller%28__transitionviewfor_%29.md): Tells the delegate that the system is about to present the preview full screen or dismiss it, and asks for information to provide a smooth transition when zooming.
- [previewControllerWillDismiss:](qlpreviewcontrollerdelegate/previewcontrollerwilldismiss%28__%29.md): Tells the delegate that the preview is about to close.
- [previewControllerDidDismiss:](qlpreviewcontrollerdelegate/previewcontrollerdiddismiss%28__%29.md): Tells the delegate that the preview was closed.

### Responding to user actions

- [previewController:shouldOpenURL:forPreviewItem:](qlpreviewcontrollerdelegate/previewcontroller%28__shouldopen_for_%29.md): Tells the delegate that the preview controller is trying to open a URL.

### Editing the content of a preview

- [previewController:editingModeForPreviewItem:](qlpreviewcontrollerdelegate/previewcontroller%28__editingmodefor_%29.md): Returns a value that indicates how the preview controller handles edits to the content of the previewed file.
- [QLPreviewItemEditingMode](qlpreviewitemeditingmode.md)
- [previewController:didUpdateContentsOfPreviewItem:](qlpreviewcontrollerdelegate/previewcontroller%28__didupdatecontentsof_%29.md): Tells the delegate that the content of a preview was updated successfully.
- [previewController:didSaveEditedCopyOfPreviewItem:atURL:](qlpreviewcontrollerdelegate/previewcontroller%28__didsaveeditedcopyof_at_%29.md): Tells the delegate that the preview item’s edited content was successfully saved to a copy at the given URL.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Configuring a preview controller

- [dataSource](qlpreviewcontroller/datasource.md): The preview controller’s data source.
- [QLPreviewControllerDataSource](qlpreviewcontrollerdatasource.md): The protocol that a data source for a preview controller needs to adopt to provide preview items to the controller.
- [delegate](qlpreviewcontroller/delegate.md): The preview controller’s delegate object.
