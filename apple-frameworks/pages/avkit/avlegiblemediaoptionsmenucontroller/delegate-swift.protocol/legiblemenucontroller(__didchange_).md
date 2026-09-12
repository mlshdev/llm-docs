> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avlegiblemediaoptionsmenucontroller/delegate-swift.protocol/legiblemenucontroller(_:didchange:)](https://developer.apple.com/documentation/avkit/avlegiblemediaoptionsmenucontroller/delegate-swift.protocol/legiblemenucontroller(_:didchange:))

# legibleMenuController(\_:didChange:) (Swift)

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+ · macOS 26.4+ · visionOS 26.4+

## Declaration

```swift
optional func legibleMenuController(_ menuController: AVLegibleMediaOptionsMenuController, didChange state: AVLegibleMediaOptionsMenuState)
```

## Parameters

- `menuController`: The legible options menu controller.
- `state`: The new menu state.

<a id="discussion"></a>

## Discussion

Tells the delegate, when legible media options menu state changes.

## See Also

### Responding to menu changes

- [legibleMenuController(\_:didRequestCaptionPreviewForProfileID:)](legiblemenucontroller%28__didrequestcaptionpreviewforprofileid_%29.md)
- [legibleMenuControllerDidRequestStoppingSubtitleCaptionPreview(\_:)](legiblemenucontrollerdidrequeststoppingsubtitlecaptionpreview%28__%29.md)

# legibleMenuController:didChangeMenuState: (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+ · macOS 26.4+ · visionOS 26.4+

## Declaration

```objectivec
- (void) legibleMenuController:(AVLegibleMediaOptionsMenuController *) menuController didChangeMenuState:(AVLegibleMediaOptionsMenuState) state;
```

## Parameters

- `menuController`: The legible options menu controller.
- `state`: The new menu state.

<a id="discussion"></a>

## Discussion

Tells the delegate, when legible media options menu state changes.

## See Also

### Responding to menu changes

- [legibleMenuController:didRequestCaptionPreviewForProfileID:](legiblemenucontroller%28__didrequestcaptionpreviewforprofileid_%29.md)
- [legibleMenuControllerDidRequestStoppingSubtitleCaptionPreview:](legiblemenucontrollerdidrequeststoppingsubtitlecaptionpreview%28__%29.md)
