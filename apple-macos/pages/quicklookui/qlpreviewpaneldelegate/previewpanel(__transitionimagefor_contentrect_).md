> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quicklookui/qlpreviewpaneldelegate/previewpanel(_:transitionimagefor:contentrect:)](https://developer.apple.com/documentation/quicklookui/qlpreviewpaneldelegate/previewpanel(_:transitionimagefor:contentrect:))

# previewPanel(\_:transitionImageFor:contentRect:) (Swift)

**Framework:** Quick Look UI  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Returns the image to use for the transition zoom effect for a given item.

## Declaration

```swift
optional func previewPanel(_ panel: QLPreviewPanel!, transitionImageFor item: (any QLPreviewItem)!, contentRect: UnsafeMutablePointer<NSRect>!) -> Any!
```

## Parameters

- `panel`: The preview panel.
- `item`: The item the system is previewing.
- `contentRect`: The rectangle within a preview image that actually represents the content of the document. For icons, the actual rectangle is typically smaller than the icon itself.

<a id="return-value"></a>

## Return Value

The image to use for the transition zoom effect for the `item`.

<a id="Discussion"></a>

## Discussion

The system invokes this optional method when the preview panel opens or closes to provide a smooth transition when zooming. The return type of the function should be an instance of [NSImage](../../appkit/nsimage.md).

## See Also

### Optional Methods

- [previewPanel(\_:handle:)](previewpanel%28__handle_%29.md): Handles an event that the preview panel receives, but doesn’t handle.
- [previewPanel(\_:sourceFrameOnScreenFor:)](previewpanel%28__sourceframeonscreenfor_%29.md): Returns the screen rectangle for a given preview item.

# previewPanel:transitionImageForPreviewItem:contentRect: (Objective-C)

**Framework:** Quick Look UI  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Returns the image to use for the transition zoom effect for a given item.

## Declaration

```objectivec
- (id) previewPanel:(QLPreviewPanel *) panel transitionImageForPreviewItem:(id<QLPreviewItem>) item contentRect:(NSRect *) contentRect;
```

## Parameters

- `panel`: The preview panel.
- `item`: The item the system is previewing.
- `contentRect`: The rectangle within a preview image that actually represents the content of the document. For icons, the actual rectangle is typically smaller than the icon itself.

<a id="return-value"></a>

## Return Value

The image to use for the transition zoom effect for the `item`.

<a id="Discussion"></a>

## Discussion

The system invokes this optional method when the preview panel opens or closes to provide a smooth transition when zooming. The return type of the function should be an instance of [NSImage](../../appkit/nsimage.md).

## See Also

### Optional Methods

- [previewPanel:handleEvent:](previewpanel%28__handle_%29.md): Handles an event that the preview panel receives, but doesn’t handle.
- [previewPanel:sourceFrameOnScreenForPreviewItem:](previewpanel%28__sourceframeonscreenfor_%29.md): Returns the screen rectangle for a given preview item.
