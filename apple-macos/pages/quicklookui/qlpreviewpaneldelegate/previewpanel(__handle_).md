> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quicklookui/qlpreviewpaneldelegate/previewpanel(_:handle:)](https://developer.apple.com/documentation/quicklookui/qlpreviewpaneldelegate/previewpanel(_:handle:))

# previewPanel(\_:handle:) (Swift)

**Framework:** Quick Look UI  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Handles an event that the preview panel receives, but doesn’t handle.

## Declaration

```swift
optional func previewPanel(_ panel: QLPreviewPanel!, handle event: NSEvent!) -> Bool
```

## Parameters

- `panel`: The preview panel.
- `event`: The event that the preview panel wasn’t able to handle.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the receiver handled the event; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

The preview panel invokes this optional method when it receives an event it doesn’t handle.

## See Also

### Optional Methods

- [previewPanel(\_:sourceFrameOnScreenFor:)](previewpanel%28__sourceframeonscreenfor_%29.md): Returns the screen rectangle for a given preview item.
- [previewPanel(\_:transitionImageFor:contentRect:)](previewpanel%28__transitionimagefor_contentrect_%29.md): Returns the image to use for the transition zoom effect for a given item.

# previewPanel:handleEvent: (Objective-C)

**Framework:** Quick Look UI  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Handles an event that the preview panel receives, but doesn’t handle.

## Declaration

```objectivec
- (BOOL) previewPanel:(QLPreviewPanel *) panel handleEvent:(NSEvent *) event;
```

## Parameters

- `panel`: The preview panel.
- `event`: The event that the preview panel wasn’t able to handle.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the receiver handled the event; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

The preview panel invokes this optional method when it receives an event it doesn’t handle.

## See Also

### Optional Methods

- [previewPanel:sourceFrameOnScreenForPreviewItem:](previewpanel%28__sourceframeonscreenfor_%29.md): Returns the screen rectangle for a given preview item.
- [previewPanel:transitionImageForPreviewItem:contentRect:](previewpanel%28__transitionimagefor_contentrect_%29.md): Returns the image to use for the transition zoom effect for a given item.
