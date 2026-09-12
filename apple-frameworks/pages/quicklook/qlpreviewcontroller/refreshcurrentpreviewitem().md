> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quicklook/qlpreviewcontroller/refreshcurrentpreviewitem()](https://developer.apple.com/documentation/quicklook/qlpreviewcontroller/refreshcurrentpreviewitem())

# refreshCurrentPreviewItem() (Swift)

**Framework:** Quick Look  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Asks the Quick Look preview controller to recompute the display of the current preview item.

## Declaration

```swift
func refreshCurrentPreviewItem()
```

<a id="Discussion"></a>

## Discussion

Quick Look recomputes the display regardless of whether the current preview item changes.

## See Also

### Managing item previews

- [canPreview(\_:)](canpreview%28__%29.md): Returns a Boolean value that indicates whether the preview controller can display an item.
- [currentPreviewItem](currentpreviewitem.md): The item displaying in the Quick Look preview controller.
- [currentPreviewItemIndex](currentpreviewitemindex.md): The index within the preview item navigation list of the item displaying in the Quick Look preview controller.
- [reloadData()](reloaddata%28%29.md): Asks the preview controller to reload its data from its data source.

# refreshCurrentPreviewItem (Objective-C)

**Framework:** Quick Look  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Asks the Quick Look preview controller to recompute the display of the current preview item.

## Declaration

```objectivec
- (void) refreshCurrentPreviewItem;
```

<a id="Discussion"></a>

## Discussion

Quick Look recomputes the display regardless of whether the current preview item changes.

## See Also

### Managing item previews

- [canPreviewItem:](canpreview%28__%29.md): Returns a Boolean value that indicates whether the preview controller can display an item.
- [currentPreviewItem](currentpreviewitem.md): The item displaying in the Quick Look preview controller.
- [currentPreviewItemIndex](currentpreviewitemindex.md): The index within the preview item navigation list of the item displaying in the Quick Look preview controller.
- [reloadData](reloaddata%28%29.md): Asks the preview controller to reload its data from its data source.
