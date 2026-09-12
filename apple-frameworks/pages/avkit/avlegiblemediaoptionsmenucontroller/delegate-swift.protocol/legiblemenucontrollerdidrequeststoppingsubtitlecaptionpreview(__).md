> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avlegiblemediaoptionsmenucontroller/delegate-swift.protocol/legiblemenucontrollerdidrequeststoppingsubtitlecaptionpreview(_:)](https://developer.apple.com/documentation/avkit/avlegiblemediaoptionsmenucontroller/delegate-swift.protocol/legiblemenucontrollerdidrequeststoppingsubtitlecaptionpreview(_:))

# legibleMenuControllerDidRequestStoppingSubtitleCaptionPreview(\_:) (Swift)

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+ · macOS 26.4+ · visionOS 26.4+

## Declaration

```swift
optional func legibleMenuControllerDidRequestStoppingSubtitleCaptionPreview(_ menuController: AVLegibleMediaOptionsMenuController)
```

## Parameters

- `menuController`: The legible options menu controller.

<a id="discussion"></a>

## Discussion

Called when the caption preview should be hidden

The client should hide any active caption preview.

## See Also

### Responding to menu changes

- [legibleMenuController(\_:didChange:)](legiblemenucontroller%28__didchange_%29.md)
- [legibleMenuController(\_:didRequestCaptionPreviewForProfileID:)](legiblemenucontroller%28__didrequestcaptionpreviewforprofileid_%29.md)

# legibleMenuControllerDidRequestStoppingSubtitleCaptionPreview: (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+ · macOS 26.4+ · visionOS 26.4+

## Declaration

```objectivec
- (void) legibleMenuControllerDidRequestStoppingSubtitleCaptionPreview:(AVLegibleMediaOptionsMenuController *) menuController;
```

## Parameters

- `menuController`: The legible options menu controller.

<a id="discussion"></a>

## Discussion

Called when the caption preview should be hidden

The client should hide any active caption preview.

## See Also

### Responding to menu changes

- [legibleMenuController:didChangeMenuState:](legiblemenucontroller%28__didchange_%29.md)
- [legibleMenuController:didRequestCaptionPreviewForProfileID:](legiblemenucontroller%28__didrequestcaptionpreviewforprofileid_%29.md)
