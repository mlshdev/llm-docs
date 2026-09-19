> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/quicklook/qlpreviewcontroller/currentpreviewitemindex

# currentPreviewItemIndex (Swift)

**Framework:** Quick Look  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The index within the preview item navigation list of the item displaying in the Quick Look preview controller.

## Declaration

```swift
var currentPreviewItemIndex: Int { get set }
```

<a id="Discussion"></a>

## Discussion

You can change which item the preview controller displays, among those in a navigation list, by setting this property’s value. If the preview controller isn’t displaying an item, this property’s value is `NSNotFound`.

## See Also

### Managing item previews

- [canPreview(\_:)](canpreview%28__%29.md): Returns a Boolean value that indicates whether the preview controller can display an item.
- [currentPreviewItem](currentpreviewitem.md): The item displaying in the Quick Look preview controller.
- [refreshCurrentPreviewItem()](refreshcurrentpreviewitem%28%29.md): Asks the Quick Look preview controller to recompute the display of the current preview item.
- [reloadData()](reloaddata%28%29.md): Asks the preview controller to reload its data from its data source.

# currentPreviewItemIndex (Objective-C)

**Framework:** Quick Look  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The index within the preview item navigation list of the item displaying in the Quick Look preview controller.

## Declaration

```objectivec
@property NSInteger currentPreviewItemIndex;
```

<a id="Discussion"></a>

## Discussion

You can change which item the preview controller displays, among those in a navigation list, by setting this property’s value. If the preview controller isn’t displaying an item, this property’s value is `NSNotFound`.

## See Also

### Managing item previews

- [canPreviewItem:](canpreview%28__%29.md): Returns a Boolean value that indicates whether the preview controller can display an item.
- [currentPreviewItem](currentpreviewitem.md): The item displaying in the Quick Look preview controller.
- [refreshCurrentPreviewItem](refreshcurrentpreviewitem%28%29.md): Asks the Quick Look preview controller to recompute the display of the current preview item.
- [reloadData](reloaddata%28%29.md): Asks the preview controller to reload its data from its data source.
