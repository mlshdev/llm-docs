> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsattributedstring/documentattributekey/characterencoding](https://developer.apple.com/documentation/foundation/nsattributedstring/documentattributekey/characterencoding)

# characterEncoding

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The string encoding for the document.

## Declaration

```swift
static let characterEncoding: NSAttributedString.DocumentAttributeKey
```

<a id="Discussion"></a>

## Discussion

The value of this attribute is an [NSNumber](../../nsnumber.md) object containing integer specifying [NSStringEncoding](../../nsstringencoding.md) for the file; default for plain text is the default encoding. This key in options can specify the string encoding for reading the data. Upon return, the document attributes can contain the actual encoding used. For writing methods, this value is used for generating the plain text data.

The string constant in macOS 10.3 and earlier is `@"CharacterEncoding"`.

## See Also

### Getting document metadata keys

- [author](author.md): The author of the document.
- [category](category.md): The document’s category.
- [cocoaVersionDocumentAttribute](cocoaversiondocumentattribute.md): The version of Cocoa that created the file.
- [comment](comment.md): The document comments.
- [company](company.md): The company or organization name associated with the document.
- [converted](converted.md): A value that indicates whether a filter service converted the file.
- [copyright](copyright.md): The document’s copyright information.
- [creationTime](creationtime.md): The creation date of the document.
- [editor](editor.md): The name of person who last edited the document.
- [keywords](keywords.md): The document keywords.
- [manager](manager.md): The name of the author’s manager.
- [modificationTime](modificationtime.md): The modification date of the document.
- [readOnly](readonly.md): An indication of whether the document is read-only.
- [subject](subject.md): The subject of the document.
- [title](title.md): The document title.
