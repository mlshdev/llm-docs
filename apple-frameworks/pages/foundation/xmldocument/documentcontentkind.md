> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/xmldocument/documentcontentkind](https://developer.apple.com/documentation/foundation/xmldocument/documentcontentkind)

# documentContentKind (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Sets the kind of output content for the receiver.

## Declaration

```swift
var documentContentKind: XMLDocument.ContentKind { get set }
```

## Parameters

- `kind`: An `enum` constant identifying a kind of document content. The valid NSXMLDocumentContentKind constants are `NSXMLDocumentXMLKind`, `NSXMLDocumentXHTMLKind`, `NSXMLDocumentHTMLKind`, and `NSXMLDocumentTextKind`.

<a id="Discussion"></a>

## Discussion

Most of the differences among document-content kind have to do with the handling of content-less tags such as `<br>`.

## See Also

### Managing Document Attributes

- [characterEncoding](characterencoding.md): Sets the character encoding of the receiver to `encoding`,
- [dtd](dtd.md): Returns an [XMLDTD](../xmldtd.md) object representing the internal DTD associated with the receiver.
- [isStandalone](isstandalone.md): Sets a Boolean value that specifies whether the receiver represents a standalone XML document.
- [mimeType](mimetype.md): Returns the MIME type for the receiver.
- [version](version.md): Sets the version of the receiver’s XML.

# documentContentKind (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Sets the kind of output content for the receiver.

## Declaration

```objectivec
@property NSXMLDocumentContentKind documentContentKind;
```

## Parameters

- `kind`: An `enum` constant identifying a kind of document content. The valid NSXMLDocumentContentKind constants are `NSXMLDocumentXMLKind`, `NSXMLDocumentXHTMLKind`, `NSXMLDocumentHTMLKind`, and `NSXMLDocumentTextKind`.

<a id="Discussion"></a>

## Discussion

Most of the differences among document-content kind have to do with the handling of content-less tags such as `<br>`.

## See Also

### Managing Document Attributes

- [characterEncoding](characterencoding.md): Sets the character encoding of the receiver to `encoding`,
- [DTD](dtd.md): Returns an [NSXMLDTD](../xmldtd.md) object representing the internal DTD associated with the receiver.
- [standalone](isstandalone.md): Sets a Boolean value that specifies whether the receiver represents a standalone XML document.
- [MIMEType](mimetype.md): Returns the MIME type for the receiver.
- [version](version.md): Sets the version of the receiver’s XML.
