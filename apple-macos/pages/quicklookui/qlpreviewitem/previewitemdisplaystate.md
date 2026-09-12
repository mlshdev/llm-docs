> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quicklookui/qlpreviewitem/previewitemdisplaystate](https://developer.apple.com/documentation/quicklookui/qlpreviewitem/previewitemdisplaystate)

# previewItemDisplayState (Swift)

**Framework:** Quick Look UI  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

The display state for the preview item.

## Declaration

```swift
optional var previewItemDisplayState: Any! { get }
```

<a id="Discussion"></a>

## Discussion

The display state is an opaque object used by the preview panel. You typically use the [QLPreviewPanel](../qlpreviewpanel.md) method [displayState](../qlpreviewpanel/displaystate.md) to retrieve the display state which you save for later use in the preview item. This way you can preserve the display state when the panel moves from or to another controller.

This property is optional.

## See Also

### Instance Properties

- [previewItemTitle](previewitemtitle.md): The title to display for the preview item.
- [previewItemURL](previewitemurl.md): The URL of the item to preview.

# previewItemDisplayState (Objective-C)

**Framework:** Quick Look UI  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

The display state for the preview item.

## Declaration

```objectivec
@property (readonly) id previewItemDisplayState;
```

<a id="Discussion"></a>

## Discussion

The display state is an opaque object used by the preview panel. You typically use the [QLPreviewPanel](../qlpreviewpanel.md) method [displayState](../qlpreviewpanel/displaystate.md) to retrieve the display state which you save for later use in the preview item. This way you can preserve the display state when the panel moves from or to another controller.

This property is optional.

## See Also

### Instance Properties

- [previewItemTitle](previewitemtitle.md): The title to display for the preview item.
- [previewItemURL](previewitemurl.md): The URL of the item to preview.
