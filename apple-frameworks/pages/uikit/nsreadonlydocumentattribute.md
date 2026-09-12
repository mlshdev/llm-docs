> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nsreadonlydocumentattribute](https://developer.apple.com/documentation/uikit/nsreadonlydocumentattribute)

# NSReadOnlyDocumentAttribute

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An indication of whether the document is read-only.

## Declaration

```objectivec
extern NSAttributedStringDocumentAttributeKey const NSReadOnlyDocumentAttribute;
```

<a id="Discussion"></a>

## Discussion

The value of this attribute is an [NSNumber](../foundation/nsnumber.md) object that contains an integer. A value of `1` indicates read-only. If the value is `0`, missing, or negative, the document doesn’t display as read-only.

This attribute is not related to the file system protection on the file. Instead, this attribute can affect how the file displays to the user.

The string constant in macOS 10.3 and earlier is `@"ReadOnly"`.

## See Also

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
- [NSSubjectDocumentAttribute](https://developer.apple.com/documentation/appkit/nssubjectdocumentattribute): The subject of the document.
- [NSTitleDocumentAttribute](https://developer.apple.com/documentation/appkit/nstitledocumentattribute): The document title.
