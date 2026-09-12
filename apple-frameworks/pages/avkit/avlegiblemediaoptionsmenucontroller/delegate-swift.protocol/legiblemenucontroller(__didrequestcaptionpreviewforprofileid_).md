> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avlegiblemediaoptionsmenucontroller/delegate-swift.protocol/legiblemenucontroller(_:didrequestcaptionpreviewforprofileid:)](https://developer.apple.com/documentation/avkit/avlegiblemediaoptionsmenucontroller/delegate-swift.protocol/legiblemenucontroller(_:didrequestcaptionpreviewforprofileid:))

# legibleMenuController(\_:didRequestCaptionPreviewForProfileID:) (Swift)

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+ · macOS 26.4+ · visionOS 26.4+

## Declaration

```swift
optional func legibleMenuController(_ menuController: AVLegibleMediaOptionsMenuController, didRequestCaptionPreviewForProfileID profileID: String)
```

## Parameters

- `menuController`: The legible options menu controller.
- `profileID`: MACaptionAppearance profile ID as an NSString for the caption style to preview

<a id="discussion"></a>

## Discussion

Called when a caption preview should be displayed

The client should display a caption preview using the MACaptionAppearance profile ID provided. The client is responsible for rendering and positioning the preview.

## See Also

### Responding to menu changes

- [legibleMenuController(\_:didChange:)](legiblemenucontroller%28__didchange_%29.md)
- [legibleMenuControllerDidRequestStoppingSubtitleCaptionPreview(\_:)](legiblemenucontrollerdidrequeststoppingsubtitlecaptionpreview%28__%29.md)

# legibleMenuController:didRequestCaptionPreviewForProfileID: (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+ · macOS 26.4+ · visionOS 26.4+

## Declaration

```objectivec
- (void) legibleMenuController:(AVLegibleMediaOptionsMenuController *) menuController didRequestCaptionPreviewForProfileID:(NSString *) profileID;
```

## Parameters

- `menuController`: The legible options menu controller.
- `profileID`: MACaptionAppearance profile ID as an NSString for the caption style to preview

<a id="discussion"></a>

## Discussion

Called when a caption preview should be displayed

The client should display a caption preview using the MACaptionAppearance profile ID provided. The client is responsible for rendering and positioning the preview.

## See Also

### Responding to menu changes

- [legibleMenuController:didChangeMenuState:](legiblemenucontroller%28__didchange_%29.md)
- [legibleMenuControllerDidRequestStoppingSubtitleCaptionPreview:](legiblemenucontrollerdidrequeststoppingsubtitlecaptionpreview%28__%29.md)
