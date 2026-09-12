> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quicklookui/qlpreviewview/refreshpreviewitem()](https://developer.apple.com/documentation/quicklookui/qlpreviewview/refreshpreviewitem())

# refreshPreviewItem() (Swift)

**Framework:** Quick Look UI  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Updates the preview to display the currently previewed item.

## Declaration

```swift
func refreshPreviewItem()
```

<a id="Discussion"></a>

## Discussion

When you modify the object that the [previewItem](previewitem.md) property points to, call this method to generate and display the new preview.

## See Also

### Displaying a Preview

- [previewItem](previewitem.md): The item to preview.
- [displayState](displaystate.md): The current display state of the [previewItem](previewitem.md).
- [autostarts](autostarts.md): A Boolean value that determines whether the preview starts automatically.

# refreshPreviewItem (Objective-C)

**Framework:** Quick Look UI  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Updates the preview to display the currently previewed item.

## Declaration

```objectivec
- (void) refreshPreviewItem;
```

<a id="Discussion"></a>

## Discussion

When you modify the object that the [previewItem](previewitem.md) property points to, call this method to generate and display the new preview.

## See Also

### Displaying a Preview

- [previewItem](previewitem.md): The item to preview.
- [displayState](displaystate.md): The current display state of the [previewItem](previewitem.md).
- [autostarts](autostarts.md): A Boolean value that determines whether the preview starts automatically.
