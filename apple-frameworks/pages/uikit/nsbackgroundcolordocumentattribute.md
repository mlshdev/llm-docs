> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nsbackgroundcolordocumentattribute](https://developer.apple.com/documentation/uikit/nsbackgroundcolordocumentattribute)

# NSBackgroundColorDocumentAttribute

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The background color of the document.

## Declaration

```objectivec
extern NSAttributedStringDocumentAttributeKey const NSBackgroundColorDocumentAttribute;
```

<a id="Discussion"></a>

## Discussion

The value of this attribute is an [NSColor](https://developer.apple.com/documentation/appkit/nscolor) object representing the document-wide page background color.

The string constant in macOS 10.3 and earlier is `@"BackgroundColor"`.

For applications linked on versions prior to macOS 10.5, HTML import sets the `NSBackgroundColorDocumentAttribute` to `[NSColor whiteColor]` in cases in which the HTML does not specify a background color. For applications linked on macOS 10.5 and later, no `NSBackgroundColorDocumentAttribute` is set in these cases.

## See Also

### Getting document appearance keys

- [NSAppearanceDocumentAttribute](https://developer.apple.com/documentation/appkit/nsappearancedocumentattribute): The appearance of the document.
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
- [NSViewSizeDocumentAttribute](nsviewsizedocumentattribute.md): The view size.
