> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quicklookui/qlpreviewview/previewitem](https://developer.apple.com/documentation/quicklookui/qlpreviewview/previewitem)

# previewItem (Swift)

**Framework:** Quick Look UI  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

The item to preview.

## Declaration

```swift
var previewItem: (any QLPreviewItem)! { get set }
```

<a id="Discussion"></a>

## Discussion

Quick Look requires Items you wish to conform to the [QLPreviewItem](../qlpreviewitem.md) protocol. When you set this property, the [QLPreviewView](../qlpreviewview.md) loads the preview asynchronously. Due to this asynchronous behavior, don’t assume that the preview is ready immediately after assigning it to this property.

## See Also

### Displaying a Preview

- [refreshPreviewItem()](refreshpreviewitem%28%29.md): Updates the preview to display the currently previewed item.
- [displayState](displaystate.md): The current display state of the [previewItem](previewitem.md).
- [autostarts](autostarts.md): A Boolean value that determines whether the preview starts automatically.

# previewItem (Objective-C)

**Framework:** Quick Look UI  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

The item to preview.

## Declaration

```objectivec
@property (retain) id<QLPreviewItem> previewItem;
```

<a id="Discussion"></a>

## Discussion

Quick Look requires Items you wish to conform to the [QLPreviewItem](../qlpreviewitem.md) protocol. When you set this property, the [QLPreviewView](../qlpreviewview.md) loads the preview asynchronously. Due to this asynchronous behavior, don’t assume that the preview is ready immediately after assigning it to this property.

## See Also

### Displaying a Preview

- [refreshPreviewItem](refreshpreviewitem%28%29.md): Updates the preview to display the currently previewed item.
- [displayState](displaystate.md): The current display state of the [previewItem](previewitem.md).
- [autostarts](autostarts.md): A Boolean value that determines whether the preview starts automatically.
