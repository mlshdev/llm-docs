> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/visionkit/imageanalysisoverlayview/supplementaryinterfacefont](https://developer.apple.com/documentation/visionkit/imageanalysisoverlayview/supplementaryinterfacefont)

# supplementaryInterfaceFont

**Framework:** VisionKit  
**Kind:** Instance Property  
**Availability:** macOS 13.0+

The font to use for the supplementary interface.

## Declaration

```swift
@MainActor final var supplementaryInterfaceFont: NSFont? { get set }
```

<a id="discussion"></a>

## Discussion

The interaction also uses the font weight for image symbols, but ignores the point size to keep button sizes consistent.

## See Also

### Customizing the interface

- [setSupplementaryInterfaceHidden(\_:animated:)](setsupplementaryinterfacehidden%28__animated_%29.md): Hides or shows supplementary interface objects, such as the Live Text button and the interface for Quick Actions, depending on the item type.
- [supplementaryInterfaceContentInsets](supplementaryinterfacecontentinsets.md): The distances the edges of content are inset from the supplementary interface.
- [ImageAnalysisOverlayView.MenuTag](menutag.md): Tags that enable your app to manage image-analysis context menu items.
