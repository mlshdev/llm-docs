> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quicklookui/qlpreviewitemloadingblock](https://developer.apple.com/documentation/quicklookui/qlpreviewitemloadingblock)

# QLPreviewItemLoadingBlock (Swift)

**Framework:** Quick Look UI  
**Kind:** Type Alias  
**Availability:** macOS 10.13+ (deprecated in 10.14)

A type that defines a block used to load a Quick Look preview item.

> Use void (^)(NSError \* \_Nullable) instead

## Declaration

```swift
typealias QLPreviewItemLoadingBlock = ((any Error)?) -> Void
```

<a id="discussion"></a>

## Discussion

A type that defines a block used to load a Quick Look preview item.

## See Also

### Previews

- [QLPreviewPanel](qlpreviewpanel.md): A class that implements the Quick Look preview panel to display a preview of a list of items.
- [QLPreviewView](qlpreviewview.md): A Quick Look preview of an item that you can embed into your view hierarchy.
- [QLPreviewItem](qlpreviewitem.md): A protocol that defines a set of properties you implement to make a preview of your app’s content.
- [QLPreviewPanelDataSource](qlpreviewpaneldatasource.md): A protocol that the Quick Look preview panel uses to access the contents of its data source object.
- [QLPreviewPanelDelegate](qlpreviewpaneldelegate.md): A protocol for the delegate of the Quick Look preview panel.

# QLPreviewItemLoadingBlock (Objective-C)

**Framework:** Quick Look UI  
**Kind:** Type Alias  
**Availability:** macOS 10.13+ (deprecated in 10.14)

A type that defines a block used to load a Quick Look preview item.

> Use void (^)(NSError \* \_Nullable) instead

## Declaration

```objectivec
typedef void (^)(NSError *) QLPreviewItemLoadingBlock;
```

<a id="discussion"></a>

## Discussion

A type that defines a block used to load a Quick Look preview item.

## See Also

### Previews

- [QLPreviewPanel](qlpreviewpanel.md): A class that implements the Quick Look preview panel to display a preview of a list of items.
- [QLPreviewView](qlpreviewview.md): A Quick Look preview of an item that you can embed into your view hierarchy.
- [QLPreviewItem](qlpreviewitem.md): A protocol that defines a set of properties you implement to make a preview of your app’s content.
- [QLPreviewPanelDataSource](qlpreviewpaneldatasource.md): A protocol that the Quick Look preview panel uses to access the contents of its data source object.
- [QLPreviewPanelDelegate](qlpreviewpaneldelegate.md): A protocol for the delegate of the Quick Look preview panel.
