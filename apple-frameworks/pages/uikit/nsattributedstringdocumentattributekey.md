> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nsattributedstringdocumentattributekey](https://developer.apple.com/documentation/uikit/nsattributedstringdocumentattributekey)

# NSAttributedStringDocumentAttributeKey

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Type Alias  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The attributes you apply to an entire document.

## Declaration

```objectivec
typedef NSString * NSAttributedStringDocumentAttributeKey;
```

<a id="Discussion"></a>

## Discussion

The [NSAttributedStringDocumentAttributeKey](nsattributedstringdocumentattributekey.md) type defines attributes that apply to an entire attributed string, and not to specific ranges of characters. You specify these attributes when writing an attributed string to disk, or reading text from a file on disk. Use these attributes to specify metadata about the overall document, including its author or title, page margin details, font-scaling options for cross-platform interchange, and more.

## Topics

### Getting document type keys

- [NSDocumentTypeDocumentAttribute](nsdocumenttypedocumentattribute.md): The document type.
- [NSFileTypeDocumentAttribute](https://developer.apple.com/documentation/appkit/nsfiletypedocumentattribute): The document type for interpreting the document.
- [NSTextEncodingNameDocumentAttribute](https://developer.apple.com/documentation/appkit/nstextencodingnamedocumentattribute): The name of the text encoding to use.

### Getting document metadata keys

- [NSAuthorDocumentAttribute](https://developer.apple.com/documentation/appkit/nsauthordocumentattribute): The author of the document.
- [NSCategoryDocumentAttribute](https://developer.apple.com/documentation/appkit/nscategorydocumentattribute): The document’s category.
- [NSCharacterEncodingDocumentAttribute](nscharacterencodingdocumentattribute.md): The string encoding for the document.
- [NSCocoaVersionDocumentAttribute](nscocoaversiondocumentattribute.md): The version of Cocoa that created the file.
- [NSCommentDocumentAttribute](https://developer.apple.com/documentation/appkit/nscommentdocumentattribute): The document comments.
- [NSCompanyDocumentAttribute](https://developer.apple.com/documentation/appkit/nscompanydocumentattribute): The company or organization name associated with the document.
- [NSConvertedDocumentAttribute](https://developer.apple.com/documentation/appkit/nsconverteddocumentattribute): A value that indicates whether a filter service converted the file.
- [NSCopyrightDocumentAttribute](https://developer.apple.com/documentation/appkit/nscopyrightdocumentattribute): The document’s copyright information.
- [NSCreationTimeDocumentAttribute](https://developer.apple.com/documentation/appkit/nscreationtimedocumentattribute): The creation date of the document.
- [NSEditorDocumentAttribute](https://developer.apple.com/documentation/appkit/nseditordocumentattribute): The name of person who last edited the document.
- [NSKeywordsDocumentAttribute](https://developer.apple.com/documentation/appkit/nskeywordsdocumentattribute): The document keywords.
- [NSManagerDocumentAttribute](https://developer.apple.com/documentation/appkit/nsmanagerdocumentattribute): The name of the author’s manager.
- [NSModificationTimeDocumentAttribute](https://developer.apple.com/documentation/appkit/nsmodificationtimedocumentattribute): The modification date of the document.
- [NSReadOnlyDocumentAttribute](nsreadonlydocumentattribute.md): An indication of whether the document is read-only.
- [NSSubjectDocumentAttribute](https://developer.apple.com/documentation/appkit/nssubjectdocumentattribute): The subject of the document.
- [NSTitleDocumentAttribute](https://developer.apple.com/documentation/appkit/nstitledocumentattribute): The document title.

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
- [NSViewSizeDocumentAttribute](nsviewsizedocumentattribute.md): The view size.
- [NSViewZoomDocumentAttribute](nsviewzoomdocumentattribute.md): The view zoom.

### Getting the font-scaling options

- [NSSourceTextScalingDocumentAttribute](nssourcetextscalingdocumentattribute.md): The text-scaling mode you used when creating the text.
- [NSTextScalingDocumentAttribute](nstextscalingdocumentattribute.md): The text-scaling mode to use when displaying the text.

### Getting the default attributes

- [NSDefaultAttributesDocumentAttribute](nsdefaultattributesdocumentattribute.md): The default document attributes.

## See Also

### Getting document-wide attributes

- [Document reading option keys](document-reading-option-keys.md): Keys for constructing an attributed string from data on disk.
- [NSAttributedStringDocumentType](nsattributedstringdocumenttype.md): Constants for the document type document attribute key.
- [NSTextLayoutSectionKey](nstextlayoutsectionkey.md): Constants for the text layout sections document attribute key.
- [NSTextScalingType](nstextscalingtype.md): Constants that specify the text scaling.
