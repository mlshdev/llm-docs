> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quicklook/qlpreviewcontrollerdatasource/numberofpreviewitems(in:)](https://developer.apple.com/documentation/quicklook/qlpreviewcontrollerdatasource/numberofpreviewitems(in:))

# numberOfPreviewItems(in:) (Swift)

**Framework:** Quick Look  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns the number of preview items to include in the preview navigation list.

## Declaration

```swift
func numberOfPreviewItems(in controller: QLPreviewController) -> Int
```

## Parameters

- `controller`: The Quick Look preview controller that’s requesting the number of preview items.

<a id="return-value"></a>

## Return Value

The number of items that the Quick Look preview controller should include in its preview navigation list.

<a id="Discussion"></a>

## Discussion

The system invokes this method to inform the preview controller of the number of preview items available.

If you push a Quick Look preview controller into view using a [UINavigationController](../../uikit/uinavigationcontroller.md) object that has a toolbar, the system automatically displays arrows in the toolbar to navigate among the items in the navigation list. If you’re not displaying a toolbar and want to provide your own method of switching among items, use the [currentPreviewItemIndex](../qlpreviewcontroller/currentpreviewitemindex.md) property to indicate the item you want to display.

If you display a preview controller modally (full screen), the controller includes navigation arrows if there’s more than one item in the navigation list.

## See Also

### Providing data to a preview controller

- [previewController(\_:previewItemAt:)](previewcontroller%28__previewitemat_%29.md): Returns the preview item that the controller displays for the specified index.

# numberOfPreviewItemsInPreviewController: (Objective-C)

**Framework:** Quick Look  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · visionOS 1.0+

Returns the number of preview items to include in the preview navigation list.

## Declaration

```objectivec
- (NSInteger) numberOfPreviewItemsInPreviewController:(QLPreviewController *) controller;
```

## Parameters

- `controller`: The Quick Look preview controller that’s requesting the number of preview items.

<a id="return-value"></a>

## Return Value

The number of items that the Quick Look preview controller should include in its preview navigation list.

<a id="Discussion"></a>

## Discussion

The system invokes this method to inform the preview controller of the number of preview items available.

If you push a Quick Look preview controller into view using a [UINavigationController](../../uikit/uinavigationcontroller.md) object that has a toolbar, the system automatically displays arrows in the toolbar to navigate among the items in the navigation list. If you’re not displaying a toolbar and want to provide your own method of switching among items, use the [currentPreviewItemIndex](../qlpreviewcontroller/currentpreviewitemindex.md) property to indicate the item you want to display.

If you display a preview controller modally (full screen), the controller includes navigation arrows if there’s more than one item in the navigation list.

## See Also

### Providing data to a preview controller

- [previewController:previewItemAtIndex:](previewcontroller%28__previewitemat_%29.md): Returns the preview item that the controller displays for the specified index.
