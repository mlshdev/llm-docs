> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/visionkit/imageanalysisoverlayview/setsupplementaryinterfacehidden(_:animated:)](https://developer.apple.com/documentation/visionkit/imageanalysisoverlayview/setsupplementaryinterfacehidden(_:animated:))

# setSupplementaryInterfaceHidden(\_:animated:)

**Framework:** VisionKit  
**Kind:** Instance Method  
**Availability:** macOS 13.0+

Hides or shows supplementary interface objects, such as the Live Text button and the interface for Quick Actions, depending on the item type.

## Declaration

```swift
@MainActor final func setSupplementaryInterfaceHidden(_ hidden: Bool, animated: Bool)
```

## Parameters

- `hidden`: `true` to hide the supplementary interface; otherwise, `false`.
- `animated`: `true` to animate the interface transition; otherwise, `false`.

## See Also

### Customizing the interface

- [supplementaryInterfaceContentInsets](supplementaryinterfacecontentinsets.md): The distances the edges of content are inset from the supplementary interface.
- [supplementaryInterfaceFont](supplementaryinterfacefont.md): The font to use for the supplementary interface.
- [ImageAnalysisOverlayView.MenuTag](menutag.md): Tags that enable your app to manage image-analysis context menu items.
