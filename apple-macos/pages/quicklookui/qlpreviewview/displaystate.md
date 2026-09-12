> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quicklookui/qlpreviewview/displaystate](https://developer.apple.com/documentation/quicklookui/qlpreviewview/displaystate)

# displayState (Swift)

**Framework:** Quick Look UI  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

The current display state of the [previewItem](previewitem.md).

## Declaration

```swift
var displayState: Any! { get set }
```

<a id="Discussion"></a>

## Discussion

This property is an opaque object that Quick Look uses to get and set the current display state of the preview. The display state could be, for example, the currently displayed page, the zoom factor on an image, or the position in a movie.

You can use this property to get and save the current display state of the preview before switching to another. This saving allows you to restore a preview later on when the user switches back to it.

## See Also

### Displaying a Preview

- [previewItem](previewitem.md): The item to preview.
- [refreshPreviewItem()](refreshpreviewitem%28%29.md): Updates the preview to display the currently previewed item.
- [autostarts](autostarts.md): A Boolean value that determines whether the preview starts automatically.

# displayState (Objective-C)

**Framework:** Quick Look UI  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

The current display state of the [previewItem](previewitem.md).

## Declaration

```objectivec
@property (retain) id displayState;
```

<a id="Discussion"></a>

## Discussion

This property is an opaque object that Quick Look uses to get and set the current display state of the preview. The display state could be, for example, the currently displayed page, the zoom factor on an image, or the position in a movie.

You can use this property to get and save the current display state of the preview before switching to another. This saving allows you to restore a preview later on when the user switches back to it.

## See Also

### Displaying a Preview

- [previewItem](previewitem.md): The item to preview.
- [refreshPreviewItem](refreshpreviewitem%28%29.md): Updates the preview to display the currently previewed item.
- [autostarts](autostarts.md): A Boolean value that determines whether the preview starts automatically.
