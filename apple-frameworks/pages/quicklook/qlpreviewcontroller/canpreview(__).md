> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quicklook/qlpreviewcontroller/canpreview(_:)](https://developer.apple.com/documentation/quicklook/qlpreviewcontroller/canpreview(_:))

# canPreview(\_:) (Swift)

**Framework:** Quick Look  
**Kind:** Type Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns a Boolean value that indicates whether the preview controller can display an item.

## Declaration

```swift
class func canPreview(_ item: any QLPreviewItem) -> Bool
```

```swift
class func canPreviewItem(_ item: any QLPreviewItem) -> Bool
```

## Parameters

- `item`: An item to preview.

<a id="return-value"></a>

## Return Value

Returns [true](https://developer.apple.com/documentation/swift/true) if the Quick Look preview controller can display the specified preview item.

<a id="Discussion"></a>

## Discussion

If the system can’t display an item, but you still attempt to display it, a Quick Look preview controller displays a generic error. Always check whether you can display an item before choosing to do so.

For supported file types, see [QLPreviewController](../qlpreviewcontroller.md).

## See Also

### Managing item previews

- [currentPreviewItem](currentpreviewitem.md): The item displaying in the Quick Look preview controller.
- [currentPreviewItemIndex](currentpreviewitemindex.md): The index within the preview item navigation list of the item displaying in the Quick Look preview controller.
- [refreshCurrentPreviewItem()](refreshcurrentpreviewitem%28%29.md): Asks the Quick Look preview controller to recompute the display of the current preview item.
- [reloadData()](reloaddata%28%29.md): Asks the preview controller to reload its data from its data source.

# canPreviewItem: (Objective-C)

**Framework:** Quick Look  
**Kind:** Type Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns a Boolean value that indicates whether the preview controller can display an item.

## Declaration

```objectivec
+ (BOOL) canPreviewItem:(id<QLPreviewItem>) item;
```

## Parameters

- `item`: An item to preview.

<a id="return-value"></a>

## Return Value

Returns [true](https://developer.apple.com/documentation/swift/true) if the Quick Look preview controller can display the specified preview item.

<a id="Discussion"></a>

## Discussion

If the system can’t display an item, but you still attempt to display it, a Quick Look preview controller displays a generic error. Always check whether you can display an item before choosing to do so.

For supported file types, see [QLPreviewController](../qlpreviewcontroller.md).

## See Also

### Managing item previews

- [currentPreviewItem](currentpreviewitem.md): The item displaying in the Quick Look preview controller.
- [currentPreviewItemIndex](currentpreviewitemindex.md): The index within the preview item navigation list of the item displaying in the Quick Look preview controller.
- [refreshCurrentPreviewItem](refreshcurrentpreviewitem%28%29.md): Asks the Quick Look preview controller to recompute the display of the current preview item.
- [reloadData](reloaddata%28%29.md): Asks the preview controller to reload its data from its data source.
