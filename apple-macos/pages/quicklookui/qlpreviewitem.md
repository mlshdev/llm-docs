> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quicklookui/qlpreviewitem](https://developer.apple.com/documentation/quicklookui/qlpreviewitem)

# QLPreviewItem (Swift)

**Framework:** Quick Look UI  
**Kind:** Protocol  
**Availability:** macOS 10.6+

A protocol that defines a set of properties you implement to make a preview of your app’s content.

## Declaration

```swift
protocol QLPreviewItem : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Implement the properties in this protocol to make your app’s content visible in a Quick Look preview. Use  [QLPreviewController](https://developer.apple.com/documentation/quicklook/qlpreviewcontroller) to display a Quick Look preview on iOS, [QLPreviewPanel](qlpreviewpanel.md) and [QLPreviewView](qlpreviewview.md) on macOS.

The properties in the [QLPreviewItem](qlpreviewitem.md) protocol are also declared as a category on the `NSURL` class. As a result, you can use [NSURL](https://developer.apple.com/documentation/foundation/nsurl) objects directly as preview items, provided that you want to use the default titles of those items. The default title for an `NSURL` object is the last path component of an item’s URL. To supply custom titles for preview objects, implement a class conforming to this protocol, supplying the title with the [previewItemTitle](qlpreviewitem/previewitemtitle.md) property.

## Topics

### Instance Properties

- [previewItemDisplayState](qlpreviewitem/previewitemdisplaystate.md): The display state for the preview item.
- [previewItemTitle](qlpreviewitem/previewitemtitle.md): The title to display for the preview item.
- [previewItemURL](qlpreviewitem/previewitemurl.md): The URL of the item to preview.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Previews

- [QLPreviewPanel](qlpreviewpanel.md): A class that implements the Quick Look preview panel to display a preview of a list of items.
- [QLPreviewView](qlpreviewview.md): A Quick Look preview of an item that you can embed into your view hierarchy.
- [QLPreviewPanelDataSource](qlpreviewpaneldatasource.md): A protocol that the Quick Look preview panel uses to access the contents of its data source object.
- [QLPreviewPanelDelegate](qlpreviewpaneldelegate.md): A protocol for the delegate of the Quick Look preview panel.
- [QLPreviewItemLoadingBlock](qlpreviewitemloadingblock.md): Deprecated. A type that defines a block used to load a Quick Look preview item.

# QLPreviewItem (Objective-C)

**Framework:** Quick Look UI  
**Kind:** Protocol  
**Availability:** macOS 10.6+

A protocol that defines a set of properties you implement to make a preview of your app’s content.

## Declaration

```objectivec
@protocol QLPreviewItem <NSObject>
```

<a id="overview"></a>

## Overview

Implement the properties in this protocol to make your app’s content visible in a Quick Look preview. Use  [QLPreviewController](https://developer.apple.com/documentation/quicklook/qlpreviewcontroller) to display a Quick Look preview on iOS, [QLPreviewPanel](qlpreviewpanel.md) and [QLPreviewView](qlpreviewview.md) on macOS.

The properties in the [QLPreviewItem](qlpreviewitem.md) protocol are also declared as a category on the `NSURL` class. As a result, you can use [NSURL](https://developer.apple.com/documentation/foundation/nsurl) objects directly as preview items, provided that you want to use the default titles of those items. The default title for an `NSURL` object is the last path component of an item’s URL. To supply custom titles for preview objects, implement a class conforming to this protocol, supplying the title with the [previewItemTitle](qlpreviewitem/previewitemtitle.md) property.

## Topics

### Instance Properties

- [previewItemDisplayState](qlpreviewitem/previewitemdisplaystate.md): The display state for the preview item.
- [previewItemTitle](qlpreviewitem/previewitemtitle.md): The title to display for the preview item.
- [previewItemURL](qlpreviewitem/previewitemurl.md): The URL of the item to preview.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Previews

- [QLPreviewPanel](qlpreviewpanel.md): A class that implements the Quick Look preview panel to display a preview of a list of items.
- [QLPreviewView](qlpreviewview.md): A Quick Look preview of an item that you can embed into your view hierarchy.
- [QLPreviewPanelDataSource](qlpreviewpaneldatasource.md): A protocol that the Quick Look preview panel uses to access the contents of its data source object.
- [QLPreviewPanelDelegate](qlpreviewpaneldelegate.md): A protocol for the delegate of the Quick Look preview panel.
- [QLPreviewItemLoadingBlock](qlpreviewitemloadingblock.md): Deprecated. A type that defines a block used to load a Quick Look preview item.
