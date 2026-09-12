> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsattributedstring/documentattributekey/textlayoutsections](https://developer.apple.com/documentation/foundation/nsattributedstring/documentattributekey/textlayoutsections)

# textLayoutSections

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The layout orientations for each section.

## Declaration

```swift
static let textLayoutSections: NSAttributedString.DocumentAttributeKey
```

<a id="Discussion"></a>

## Discussion

An [NSArray](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/PropertyLists/OldStylePlists/OldStylePLists.html#//apple_ref/doc/uid/20001012-47205) containing [NSDictionary](../../nsdictionary.md) objects, each dictionary describing a layout orientation section. The dictionary can have two attributes: [orientation](../textlayoutsectionkey/orientation.md) and [range](../textlayoutsectionkey/range.md). When there is a gap between sections, it’s assumed to have [NSLayoutManager.TextLayoutOrientation.horizontal](https://developer.apple.com/documentation/appkit/nslayoutmanager/textlayoutorientation/horizontal).

## See Also

### Getting document appearance keys

- [appearance](appearance.md): The appearance of the document.
- [backgroundColor](backgroundcolor.md): The background color of the document.
- [bottomMargin](bottommargin.md): The bottom margin of the document.
- [defaultFontExcluded](defaultfontexcluded.md)
- [defaultTabInterval](defaulttabinterval.md): The default tab stop interval for the document.
- [excludedElements](excludedelements.md): The HTML elements to exclude in generated HTML.
- [hyphenationFactor](hyphenationfactor.md): The hyphenation factor of the document.
- [leftMargin](leftmargin.md): The left margin of the document.
- [paperMargin](papermargin.md): The paper margin of the document.
- [paperSize](papersize.md): The paper size for the document.
- [prefixSpaces](prefixspaces.md): The number of spaces for indenting nested HTML elements.
- [rightMargin](rightmargin.md): The right margin of the document.
- [topMargin](topmargin.md): The top margin of the document.
- [viewMode](viewmode.md): The view mode.
- [viewSize](viewsize.md): The view size.
