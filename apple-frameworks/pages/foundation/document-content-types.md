> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/document-content-types](https://developer.apple.com/documentation/foundation/document-content-types)

# Document Content Types (Swift)

**Framework:** Foundation  
**Kind:** API Collection

Define document types.

<a id="overview"></a>

## Overview

You specify one of the NSXMLDocumentContentKind constants in [documentContentKind](xmldocument/documentcontentkind.md) to indicate the kind of content required for document output.

## Topics

### Constants

- [XMLDocument.ContentKind.xml](xmldocument/contentkind/xml.md): The default type of document content type, which is XML.
- [XMLDocument.ContentKind.xhtml](xmldocument/contentkind/xhtml.md): The document output is XHTML.
- [XMLDocument.ContentKind.html](xmldocument/contentkind/html.md): Outputs empty tags in HTML without a close tag, such as `<br>`.
- [XMLDocument.ContentKind.text](xmldocument/contentkind/text.md): Outputs the string value of the document by extracting the string values from all text nodes.

## See Also

### Constants

- [Input and Output Options](input_and_output_options.md): Input and output options specifically intended for `NSXMLDocument` objects.
- [XMLDocument.ContentKind](xmldocument/contentkind.md): Type used to define the kind of document content.

# Document Content Types (Objective-C)

**Framework:** Foundation  
**Kind:** API Collection

Define document types.

<a id="overview"></a>

## Overview

You specify one of the NSXMLDocumentContentKind constants in [documentContentKind](xmldocument/documentcontentkind.md) to indicate the kind of content required for document output.

## Topics

### Constants

- [NSXMLDocumentXMLKind](xmldocument/contentkind/xml.md): The default type of document content type, which is XML.
- [NSXMLDocumentXHTMLKind](xmldocument/contentkind/xhtml.md): The document output is XHTML.
- [NSXMLDocumentHTMLKind](xmldocument/contentkind/html.md): Outputs empty tags in HTML without a close tag, such as `<br>`.
- [NSXMLDocumentTextKind](xmldocument/contentkind/text.md): Outputs the string value of the document by extracting the string values from all text nodes.

## See Also

### Constants

- [Input and Output Options](input_and_output_options.md): Input and output options specifically intended for `NSXMLDocument` objects.
- [NSXMLDocumentContentKind](xmldocument/contentkind.md): Type used to define the kind of document content.
