> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbackgroundcolordocumentattribute](https://developer.apple.com/documentation/appkit/nsbackgroundcolordocumentattribute)

# NSBackgroundColorDocumentAttribute

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.0+

The background color of the document.

## Declaration

```objectivec
extern NSAttributedStringDocumentAttributeKey NSBackgroundColorDocumentAttribute;
```

<a id="discussion"></a>

## Discussion

The value of this attribute is an [NSColor](nscolor.md) object representing the document-wide page background color.

The string constant in macOS 10.3 and earlier is `@"BackgroundColor"`.

For applications linked on versions prior to macOS 10.5, HTML import sets the `NSBackgroundColorDocumentAttribute` to `[NSColor whiteColor]` in cases in which the HTML does not specify a background color. For applications linked on macOS 10.5 and later, no `NSBackgroundColorDocumentAttribute` is set in these cases.

## See Also

### Getting document appearance keys

- [NSAppearanceDocumentAttribute](nsappearancedocumentattribute.md): The appearance of the document.
- [NSBottomMarginDocumentAttribute](nsbottommargindocumentattribute.md): The bottom margin of the document.
- [NSDefaultFontExcludedDocumentAttribute](nsdefaultfontexcludeddocumentattribute.md)
- [NSDefaultTabIntervalDocumentAttribute](nsdefaulttabintervaldocumentattribute.md): The default tab stop interval for the document.
- [NSExcludedElementsDocumentAttribute](nsexcludedelementsdocumentattribute.md): The HTML elements to exclude in generated HTML.
- [NSHyphenationFactorDocumentAttribute](nshyphenationfactordocumentattribute.md): The hyphenation factor of the document.
- [NSLeftMarginDocumentAttribute](nsleftmargindocumentattribute.md): The left margin of the document.
- [NSPaperMarginDocumentAttribute](nspapermargindocumentattribute.md)
- [NSPaperSizeDocumentAttribute](nspapersizedocumentattribute.md): The paper size for the document.
- [NSPrefixSpacesDocumentAttribute](nsprefixspacesdocumentattribute.md): The number of spaces for indenting nested HTML elements.
- [NSRightMarginDocumentAttribute](nsrightmargindocumentattribute.md): The right margin of the document.
- [NSTextLayoutSectionsAttribute](nstextlayoutsectionsattribute.md): The layout orientations for each section.
- [NSTopMarginDocumentAttribute](nstopmargindocumentattribute.md): The top margin of the document.
- [NSViewModeDocumentAttribute](nsviewmodedocumentattribute.md): The view mode.
- [NSViewSizeDocumentAttribute](nsviewsizedocumentattribute.md): The view size.
