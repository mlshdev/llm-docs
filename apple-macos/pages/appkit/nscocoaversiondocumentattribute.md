> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscocoaversiondocumentattribute](https://developer.apple.com/documentation/appkit/nscocoaversiondocumentattribute)

# NSCocoaVersionDocumentAttribute

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.4+

The version of Cocoa that created the file.

## Declaration

```objectivec
extern NSAttributedStringDocumentAttributeKey NSCocoaVersionDocumentAttribute;
```

<a id="discussion"></a>

## Discussion

The value of this attribute is an [NSNumber](https://developer.apple.com/documentation/foundation/nsnumber) object containing a float. For RTF files only, stores the version of Cocoa with which the file was created. Absence of this value indicates RTF file not created by Cocoa or its predecessors.

Values less than `100` are pre–macOS; `100` is macOS 10.0 or 10.1; `102` is macOS 10.2 and 10.3; values greater than `102` correspond to values of `NSAppKitVersionNumber` in macOS 10.4 and later.

The string constant in macOS 10.3 and earlier is `@"CocoaRTFVersion"`.

## See Also

### Getting document metadata keys

- [NSAuthorDocumentAttribute](nsauthordocumentattribute.md): The author of the document.
- [NSCategoryDocumentAttribute](nscategorydocumentattribute.md): The document’s category.
- [NSCharacterEncodingDocumentAttribute](nscharacterencodingdocumentattribute.md): The string encoding for the document.
- [NSCommentDocumentAttribute](nscommentdocumentattribute.md): The document comments.
- [NSCompanyDocumentAttribute](nscompanydocumentattribute.md): The company or organization name associated with the document.
- [NSConvertedDocumentAttribute](nsconverteddocumentattribute.md): A value that indicates whether a filter service converted the file.
- [NSCopyrightDocumentAttribute](nscopyrightdocumentattribute.md): The document’s copyright information.
- [NSCreationTimeDocumentAttribute](nscreationtimedocumentattribute.md): The creation date of the document.
- [NSEditorDocumentAttribute](nseditordocumentattribute.md): The name of person who last edited the document.
- [NSKeywordsDocumentAttribute](nskeywordsdocumentattribute.md): The document keywords.
- [NSManagerDocumentAttribute](nsmanagerdocumentattribute.md): The name of the author’s manager.
- [NSModificationTimeDocumentAttribute](nsmodificationtimedocumentattribute.md): The modification date of the document.
- [NSReadOnlyDocumentAttribute](nsreadonlydocumentattribute.md): An indication of whether the document is read-only.
- [NSSubjectDocumentAttribute](nssubjectdocumentattribute.md): The subject of the document.
- [NSTitleDocumentAttribute](nstitledocumentattribute.md): The document title.
