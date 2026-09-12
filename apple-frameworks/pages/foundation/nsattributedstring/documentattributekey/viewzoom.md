> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsattributedstring/documentattributekey/viewzoom](https://developer.apple.com/documentation/foundation/nsattributedstring/documentattributekey/viewzoom)

# viewZoom

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The view zoom.

## Declaration

```swift
static let viewZoom: NSAttributedString.DocumentAttributeKey
```

<a id="Discussion"></a>

## Discussion

The value of this attribute is an [NSValue](../../nsvalue.md) object containing a float. For example, a value of 100 indicates 100% zoom.

The string constant in macOS 10.3 and earlier is `@"ViewZoom"`.

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
- [textLayoutSections](textlayoutsections.md): The layout orientations for each section.
- [topMargin](topmargin.md): The top margin of the document.
- [viewMode](viewmode.md): The view mode.
