> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quicklook/qlpreviewcontroller/currentpreviewitem](https://developer.apple.com/documentation/quicklook/qlpreviewcontroller/currentpreviewitem)

# currentPreviewItem (Swift)

**Framework:** Quick Look  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The item displaying in the Quick Look preview controller.

## Declaration

```swift
var currentPreviewItem: (any QLPreviewItem)? { get }
```

<a id="Discussion"></a>

## Discussion

If the preview controller isn’t displaying an item, this property’s value is `nil`.

## See Also

### Managing item previews

- [canPreview(\_:)](canpreview%28__%29.md): Returns a Boolean value that indicates whether the preview controller can display an item.
- [currentPreviewItemIndex](currentpreviewitemindex.md): The index within the preview item navigation list of the item displaying in the Quick Look preview controller.
- [refreshCurrentPreviewItem()](refreshcurrentpreviewitem%28%29.md): Asks the Quick Look preview controller to recompute the display of the current preview item.
- [reloadData()](reloaddata%28%29.md): Asks the preview controller to reload its data from its data source.

# currentPreviewItem (Objective-C)

**Framework:** Quick Look  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The item displaying in the Quick Look preview controller.

## Declaration

```objectivec
@property (readonly, nullable) id<QLPreviewItem> currentPreviewItem;
```

<a id="Discussion"></a>

## Discussion

If the preview controller isn’t displaying an item, this property’s value is `nil`.

## See Also

### Managing item previews

- [canPreviewItem:](canpreview%28__%29.md): Returns a Boolean value that indicates whether the preview controller can display an item.
- [currentPreviewItemIndex](currentpreviewitemindex.md): The index within the preview item navigation list of the item displaying in the Quick Look preview controller.
- [refreshCurrentPreviewItem](refreshcurrentpreviewitem%28%29.md): Asks the Quick Look preview controller to recompute the display of the current preview item.
- [reloadData](reloaddata%28%29.md): Asks the preview controller to reload its data from its data source.
