> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quicklookui/qlpreviewpaneldelegate](https://developer.apple.com/documentation/quicklookui/qlpreviewpaneldelegate)

# QLPreviewPanelDelegate (Swift)

**Framework:** Quick Look UI  
**Kind:** Protocol  
**Availability:** macOS 12.0+

A protocol for the delegate of the Quick Look preview panel.

## Declaration

```swift
protocol QLPreviewPanelDelegate : NSWindowDelegate
```

<a id="overview"></a>

## Overview

You can implement these methods to perform custom tasks in response to events in the preview panel.

## Topics

### Optional Methods

- [previewPanel(\_:handle:)](qlpreviewpaneldelegate/previewpanel%28__handle_%29.md): Handles an event that the preview panel receives, but doesn’t handle.
- [previewPanel(\_:sourceFrameOnScreenFor:)](qlpreviewpaneldelegate/previewpanel%28__sourceframeonscreenfor_%29.md): Returns the screen rectangle for a given preview item.
- [previewPanel(\_:transitionImageFor:contentRect:)](qlpreviewpaneldelegate/previewpanel%28__transitionimagefor_contentrect_%29.md): Returns the image to use for the transition zoom effect for a given item.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSWindowDelegate](../appkit/nswindowdelegate.md)

## See Also

### Previews

- [QLPreviewPanel](qlpreviewpanel.md): A class that implements the Quick Look preview panel to display a preview of a list of items.
- [QLPreviewView](qlpreviewview.md): A Quick Look preview of an item that you can embed into your view hierarchy.
- [QLPreviewItem](qlpreviewitem.md): A protocol that defines a set of properties you implement to make a preview of your app’s content.
- [QLPreviewPanelDataSource](qlpreviewpaneldatasource.md): A protocol that the Quick Look preview panel uses to access the contents of its data source object.
- [QLPreviewItemLoadingBlock](qlpreviewitemloadingblock.md): Deprecated. A type that defines a block used to load a Quick Look preview item.

# QLPreviewPanelDelegate (Objective-C)

**Framework:** Quick Look UI  
**Kind:** Protocol  
**Availability:** macOS 12.0+

A protocol for the delegate of the Quick Look preview panel.

## Declaration

```objectivec
@protocol QLPreviewPanelDelegate <NSWindowDelegate>
```

<a id="overview"></a>

## Overview

You can implement these methods to perform custom tasks in response to events in the preview panel.

## Topics

### Optional Methods

- [previewPanel:handleEvent:](qlpreviewpaneldelegate/previewpanel%28__handle_%29.md): Handles an event that the preview panel receives, but doesn’t handle.
- [previewPanel:sourceFrameOnScreenForPreviewItem:](qlpreviewpaneldelegate/previewpanel%28__sourceframeonscreenfor_%29.md): Returns the screen rectangle for a given preview item.
- [previewPanel:transitionImageForPreviewItem:contentRect:](qlpreviewpaneldelegate/previewpanel%28__transitionimagefor_contentrect_%29.md): Returns the image to use for the transition zoom effect for a given item.

## Relationships

### Inherits From

- [NSWindowDelegate](../appkit/nswindowdelegate.md)

## See Also

### Previews

- [QLPreviewPanel](qlpreviewpanel.md): A class that implements the Quick Look preview panel to display a preview of a list of items.
- [QLPreviewView](qlpreviewview.md): A Quick Look preview of an item that you can embed into your view hierarchy.
- [QLPreviewItem](qlpreviewitem.md): A protocol that defines a set of properties you implement to make a preview of your app’s content.
- [QLPreviewPanelDataSource](qlpreviewpaneldatasource.md): A protocol that the Quick Look preview panel uses to access the contents of its data source object.
- [QLPreviewItemLoadingBlock](qlpreviewitemloadingblock.md): Deprecated. A type that defines a block used to load a Quick Look preview item.
