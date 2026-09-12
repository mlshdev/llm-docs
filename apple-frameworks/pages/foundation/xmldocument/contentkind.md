> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/xmldocument/contentkind](https://developer.apple.com/documentation/foundation/xmldocument/contentkind)

# XMLDocument.ContentKind (Swift)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Type used to define the kind of document content.

## Declaration

```swift
enum ContentKind
```

<a id="overview"></a>

## Overview

For possible values, see doc:xmldocument/document_content_types.

## Topics

### Enumeration Cases

- [XMLDocument.ContentKind.html](contentkind/html.md): Outputs empty tags in HTML without a close tag, such as `<br>`.
- [XMLDocument.ContentKind.text](contentkind/text.md): Outputs the string value of the document by extracting the string values from all text nodes.
- [XMLDocument.ContentKind.xhtml](contentkind/xhtml.md): The document output is XHTML.
- [XMLDocument.ContentKind.xml](contentkind/xml.md): The default type of document content type, which is XML.

### Initializers

- [init(rawValue:)](contentkind/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Constants

- [Input and Output Options](../input_and_output_options.md): Input and output options specifically intended for `NSXMLDocument` objects.
- [Document Content Types](../document-content-types.md): Define document types.

# NSXMLDocumentContentKind (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Type used to define the kind of document content.

## Declaration

```objectivec
enum NSXMLDocumentContentKind : NSUInteger;
```

<a id="overview"></a>

## Overview

For possible values, see doc:xmldocument/document_content_types.

## Topics

### Enumeration Cases

- [NSXMLDocumentHTMLKind](contentkind/html.md): Outputs empty tags in HTML without a close tag, such as `<br>`.
- [NSXMLDocumentTextKind](contentkind/text.md): Outputs the string value of the document by extracting the string values from all text nodes.
- [NSXMLDocumentXHTMLKind](contentkind/xhtml.md): The document output is XHTML.
- [NSXMLDocumentXMLKind](contentkind/xml.md): The default type of document content type, which is XML.

## See Also

### Constants

- [Input and Output Options](../input_and_output_options.md): Input and output options specifically intended for `NSXMLDocument` objects.
- [Document Content Types](../document-content-types.md): Define document types.
