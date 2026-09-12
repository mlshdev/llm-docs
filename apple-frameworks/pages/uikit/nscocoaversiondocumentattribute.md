> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nscocoaversiondocumentattribute](https://developer.apple.com/documentation/uikit/nscocoaversiondocumentattribute)

# NSCocoaVersionDocumentAttribute

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The version of Cocoa that created the file.

## Declaration

```objectivec
extern NSAttributedStringDocumentAttributeKey const NSCocoaVersionDocumentAttribute;
```

<a id="Discussion"></a>

## Discussion

The value of this attribute is an [NSNumber](../foundation/nsnumber.md) object containing a float. For RTF files only, stores the version of Cocoa with which the file was created. Absence of this value indicates an RTF file was not created by Cocoa or its predecessors.

Values less than `100` are pre–macOS; `100` is macOS 10.0 or 10.1; `102` is macOS 10.2 and 10.3; values greater than `102` correspond to values of `NSAppKitVersionNumber` in macOS 10.4 and later.

The string constant in macOS 10.3 and earlier is `@"CocoaRTFVersion"`.

## See Also

### Getting document metadata keys

- [NSAuthorDocumentAttribute](https://developer.apple.com/documentation/appkit/nsauthordocumentattribute): The author of the document.
- [NSCategoryDocumentAttribute](https://developer.apple.com/documentation/appkit/nscategorydocumentattribute): The document’s category.
- [NSCharacterEncodingDocumentAttribute](nscharacterencodingdocumentattribute.md): The string encoding for the document.
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
