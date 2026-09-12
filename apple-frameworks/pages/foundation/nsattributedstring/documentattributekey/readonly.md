> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsattributedstring/documentattributekey/readonly](https://developer.apple.com/documentation/foundation/nsattributedstring/documentattributekey/readonly)

# readOnly

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An indication of whether the document is read-only.

## Declaration

```swift
static let readOnly: NSAttributedString.DocumentAttributeKey
```

<a id="Discussion"></a>

## Discussion

The value of this attribute is an [NSNumber](../../nsnumber.md) object that contains an integer. A value of `1` indicates read-only. If the value is `0`, missing, or negative, the document doesn’t display as read-only.

This attribute is not related to the file system protection on the file. Instead, this attribute can affect how the file displays to the user.

The string constant in macOS 10.3 and earlier is `@"ReadOnly"`.

## See Also

### Getting document metadata keys

- [author](author.md): The author of the document.
- [category](category.md): The document’s category.
- [characterEncoding](characterencoding.md): The string encoding for the document.
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
- [subject](subject.md): The subject of the document.
- [title](title.md): The document title.
