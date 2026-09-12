> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quicklookui/qlpreviewitem/previewitemurl](https://developer.apple.com/documentation/quicklookui/qlpreviewitem/previewitemurl)

# previewItemURL (Swift)

**Framework:** Quick Look UI  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

The URL of the item to preview.

## Declaration

```swift
var previewItemURL: URL! { get }
```

<a id="Discussion"></a>

## Discussion

[QLPreviewController](https://developer.apple.com/documentation/quicklook/qlpreviewcontroller) uses this property to get an item’s URL. In typical use, you’d implement a getter method in your preview item class to provide this value.

The value of this property must be a file-type URL.

If the item isn’t available for preview, this property’s getter method should return `nil`. In this case, the [QLPreviewController](https://developer.apple.com/documentation/quicklook/qlpreviewcontroller) displays a “loading” view. Use [refreshCurrentPreviewItem()](https://developer.apple.com/documentation/quicklook/qlpreviewcontroller/refreshcurrentpreviewitem%28%29) to reload the item once the URL content is available.

## See Also

### Instance Properties

- [previewItemDisplayState](previewitemdisplaystate.md): The display state for the preview item.
- [previewItemTitle](previewitemtitle.md): The title to display for the preview item.

# previewItemURL (Objective-C)

**Framework:** Quick Look UI  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

The URL of the item to preview.

## Declaration

```objectivec
@property (readonly) NSURL * previewItemURL;
```

<a id="Discussion"></a>

## Discussion

[QLPreviewController](https://developer.apple.com/documentation/quicklook/qlpreviewcontroller) uses this property to get an item’s URL. In typical use, you’d implement a getter method in your preview item class to provide this value.

The value of this property must be a file-type URL.

If the item isn’t available for preview, this property’s getter method should return `nil`. In this case, the [QLPreviewController](https://developer.apple.com/documentation/quicklook/qlpreviewcontroller) displays a “loading” view. Use [refreshCurrentPreviewItem](https://developer.apple.com/documentation/quicklook/qlpreviewcontroller/refreshcurrentpreviewitem%28%29) to reload the item once the URL content is available.

## See Also

### Instance Properties

- [previewItemDisplayState](previewitemdisplaystate.md): The display state for the preview item.
- [previewItemTitle](previewitemtitle.md): The title to display for the preview item.
