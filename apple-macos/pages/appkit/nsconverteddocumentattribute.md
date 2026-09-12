> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsconverteddocumentattribute](https://developer.apple.com/documentation/appkit/nsconverteddocumentattribute)

# NSConvertedDocumentAttribute

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS

A value that indicates whether a filter service converted the file.

## Declaration

```objectivec
extern NSAttributedStringDocumentAttributeKey NSConvertedDocumentAttribute;
```

<a id="discussion"></a>

## Discussion

The value of this attribute is an [NSNumber](https://developer.apple.com/documentation/foundation/nsnumber) object containing an integer. Indicates whether the file was converted by a filter service.

If missing or `0`, the file was originally in the format specified by [NSDocumentTypeDocumentAttribute](nsdocumenttypedocumentattribute.md). If negative, the file was originally in the format specified by document type, but the conversion to [NSAttributedString](https://developer.apple.com/documentation/foundation/nsattributedstring) may have been lossy. If `1` or more, it was converted to this type by a filter service.

The string constant in macOS 10.3 and earlier is `@"Converted"`.

## See Also

### Getting document metadata keys

- [NSAuthorDocumentAttribute](nsauthordocumentattribute.md): The author of the document.
- [NSCategoryDocumentAttribute](nscategorydocumentattribute.md): The document’s category.
- [NSCharacterEncodingDocumentAttribute](nscharacterencodingdocumentattribute.md): The string encoding for the document.
- [NSCocoaVersionDocumentAttribute](nscocoaversiondocumentattribute.md): The version of Cocoa that created the file.
- [NSCommentDocumentAttribute](nscommentdocumentattribute.md): The document comments.
- [NSCompanyDocumentAttribute](nscompanydocumentattribute.md): The company or organization name associated with the document.
- [NSCopyrightDocumentAttribute](nscopyrightdocumentattribute.md): The document’s copyright information.
- [NSCreationTimeDocumentAttribute](nscreationtimedocumentattribute.md): The creation date of the document.
- [NSEditorDocumentAttribute](nseditordocumentattribute.md): The name of person who last edited the document.
- [NSKeywordsDocumentAttribute](nskeywordsdocumentattribute.md): The document keywords.
- [NSManagerDocumentAttribute](nsmanagerdocumentattribute.md): The name of the author’s manager.
- [NSModificationTimeDocumentAttribute](nsmodificationtimedocumentattribute.md): The modification date of the document.
- [NSReadOnlyDocumentAttribute](nsreadonlydocumentattribute.md): An indication of whether the document is read-only.
- [NSSubjectDocumentAttribute](nssubjectdocumentattribute.md): The subject of the document.
- [NSTitleDocumentAttribute](nstitledocumentattribute.md): The document title.
