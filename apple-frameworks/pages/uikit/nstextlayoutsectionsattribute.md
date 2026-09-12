> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextlayoutsectionsattribute](https://developer.apple.com/documentation/uikit/nstextlayoutsectionsattribute)

# NSTextLayoutSectionsAttribute

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The layout orientations for each section.

## Declaration

```objectivec
extern NSAttributedStringDocumentAttributeKey const NSTextLayoutSectionsAttribute;
```

<a id="Discussion"></a>

## Discussion

An [NSArray](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/PropertyLists/OldStylePlists/OldStylePLists.html#//apple_ref/doc/uid/20001012-47205) containing [NSDictionary](../foundation/nsdictionary.md) objects, each dictionary describing a layout orientation section. The dictionary can have two attributes: [NSTextLayoutSectionOrientation](nstextlayoutsectionorientation.md) and [NSTextLayoutSectionRange](nstextlayoutsectionrange.md). When there is a gap between sections, it’s assumed to have [NSTextLayoutOrientationHorizontal](nslayoutmanager/textlayoutorientation/horizontal.md).

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
- [NSTopMarginDocumentAttribute](https://developer.apple.com/documentation/appkit/nstopmargindocumentattribute): The top margin of the document.
- [NSViewModeDocumentAttribute](nsviewmodedocumentattribute.md): The view mode.
- [NSViewSizeDocumentAttribute](nsviewsizedocumentattribute.md): The view size.
