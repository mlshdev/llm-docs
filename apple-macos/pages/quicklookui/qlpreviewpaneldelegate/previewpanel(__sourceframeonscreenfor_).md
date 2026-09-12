> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quicklookui/qlpreviewpaneldelegate/previewpanel(_:sourceframeonscreenfor:)](https://developer.apple.com/documentation/quicklookui/qlpreviewpaneldelegate/previewpanel(_:sourceframeonscreenfor:))

# previewPanel(\_:sourceFrameOnScreenFor:) (Swift)

**Framework:** Quick Look UI  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Returns the screen rectangle for a given preview item.

## Declaration

```swift
optional func previewPanel(_ panel: QLPreviewPanel!, sourceFrameOnScreenFor item: (any QLPreviewItem)!) -> NSRect
```

## Parameters

- `panel`: The preview panel.
- `item`: The preview item for which the screen rectangle is required.

<a id="return-value"></a>

## Return Value

The screen rectangle for the given preview item. Return [NSZeroRect](https://developer.apple.com/documentation/foundation/nszerorect) if there is no origin point (this will produce a fade of the panel).

<a id="Discussion"></a>

## Discussion

The system invokes this optional method when the preview panel opens or closes to provide a zoom effect. You should return — in screen coordinates — the rectangle that displays the specified preview item.

## See Also

### Optional Methods

- [previewPanel(\_:handle:)](previewpanel%28__handle_%29.md): Handles an event that the preview panel receives, but doesn’t handle.
- [previewPanel(\_:transitionImageFor:contentRect:)](previewpanel%28__transitionimagefor_contentrect_%29.md): Returns the image to use for the transition zoom effect for a given item.

# previewPanel:sourceFrameOnScreenForPreviewItem: (Objective-C)

**Framework:** Quick Look UI  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Returns the screen rectangle for a given preview item.

## Declaration

```objectivec
- (NSRect) previewPanel:(QLPreviewPanel *) panel sourceFrameOnScreenForPreviewItem:(id<QLPreviewItem>) item;
```

## Parameters

- `panel`: The preview panel.
- `item`: The preview item for which the screen rectangle is required.

<a id="return-value"></a>

## Return Value

The screen rectangle for the given preview item. Return [NSZeroRect](https://developer.apple.com/documentation/foundation/nszerorect) if there is no origin point (this will produce a fade of the panel).

<a id="Discussion"></a>

## Discussion

The system invokes this optional method when the preview panel opens or closes to provide a zoom effect. You should return — in screen coordinates — the rectangle that displays the specified preview item.

## See Also

### Optional Methods

- [previewPanel:handleEvent:](previewpanel%28__handle_%29.md): Handles an event that the preview panel receives, but doesn’t handle.
- [previewPanel:transitionImageForPreviewItem:contentRect:](previewpanel%28__transitionimagefor_contentrect_%29.md): Returns the image to use for the transition zoom effect for a given item.
