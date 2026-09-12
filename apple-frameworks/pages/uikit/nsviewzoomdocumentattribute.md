> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nsviewzoomdocumentattribute](https://developer.apple.com/documentation/uikit/nsviewzoomdocumentattribute)

# NSViewZoomDocumentAttribute

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The view zoom.

## Declaration

```objectivec
extern NSAttributedStringDocumentAttributeKey const NSViewZoomDocumentAttribute;
```

<a id="Discussion"></a>

## Discussion

The value of this attribute is an [NSValue](../foundation/nsvalue.md) object containing a float. For example, a value of 100 indicates 100% zoom.

The string constant in macOS 10.3 and earlier is `@"ViewZoom"`.

## See Also

### Getting document appearance keys

- [NSAppearanceDocumentAttribute](https://developer.apple.com/documentation/appkit/nsappearancedocumentattribute): The appearance of the document.
- [NSBackgroundColorDocumentAttribute](nsbackgroundcolordocumentattribute.md): The background color of the document.
- [NSBottomMarginDocumentAttribute](https://developer.apple.com/documentation/appkit/nsbottommargindocumentattribute): The bottom margin of the document.
- [NSDefaultFontExcludedDocumentAttribute](nsdefaultfontexcludeddocumentattribute.md)
- [NSDefaultTabIntervalDocumentAttribute](nsdefaulttabintervaldocumentattribute.md): The default tab stop interval for the document.
- [NSExcludedElementsDocumentAttribute](https://developer.apple.com/documentation/appkit/nsexcludedelementsdocumentattribute): The HTML elements to exclude in generated HTML.
- [NSHyphenationFactorDocumentAttribute](nshyphenationfactordocumentattribute.md): The hyphenation factor of the document.
- [NSLeftMarginDocumentAttribute](https://developer.apple.com/documentation/appkit/nsleftmargindocumentattribute): The left margin of the document.
- [NSPaperMarginDocumentAttribute](nspapermargindocumentattribute.md): The paper margin of the document.
- [NSPaperSizeDocumentAttribute](nspapersizedocumentattribute.md): The paper size for the document.
- [NSPrefixSpacesDocumentAttribute](https://developer.apple.com/documentation/appkit/nsprefixspacesdocumentattribute): The number of spaces for indenting nested HTML elements.
- [NSRightMarginDocumentAttribute](https://developer.apple.com/documentation/appkit/nsrightmargindocumentattribute): The right margin of the document.
- [NSTextLayoutSectionsAttribute](nstextlayoutsectionsattribute.md): The layout orientations for each section.
- [NSTopMarginDocumentAttribute](https://developer.apple.com/documentation/appkit/nstopmargindocumentattribute): The top margin of the document.
- [NSViewModeDocumentAttribute](nsviewmodedocumentattribute.md): The view mode.
