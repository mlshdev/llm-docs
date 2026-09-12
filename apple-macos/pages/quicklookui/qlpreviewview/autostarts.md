> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quicklookui/qlpreviewview/autostarts](https://developer.apple.com/documentation/quicklookui/qlpreviewview/autostarts)

# autostarts (Swift)

**Framework:** Quick Look UI  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

A Boolean value that determines whether the preview starts automatically.

## Declaration

```swift
var autostarts: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

Set this property to allow previews of movie files to start playback automatically when displayed.

## See Also

### Displaying a Preview

- [previewItem](previewitem.md): The item to preview.
- [refreshPreviewItem()](refreshpreviewitem%28%29.md): Updates the preview to display the currently previewed item.
- [displayState](displaystate.md): The current display state of the [previewItem](previewitem.md).

# autostarts (Objective-C)

**Framework:** Quick Look UI  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

A Boolean value that determines whether the preview starts automatically.

## Declaration

```objectivec
@property BOOL autostarts;
```

<a id="Discussion"></a>

## Discussion

Set this property to allow previews of movie files to start playback automatically when displayed.

## See Also

### Displaying a Preview

- [previewItem](previewitem.md): The item to preview.
- [refreshPreviewItem](refreshpreviewitem%28%29.md): Updates the preview to display the currently previewed item.
- [displayState](displaystate.md): The current display state of the [previewItem](previewitem.md).
