> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/xmlnode/options/documentxinclude](https://developer.apple.com/documentation/foundation/xmlnode/options/documentxinclude)

# documentXInclude (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Replaces all XInclude nodes in the document with the nodes referred to.

## Declaration

```swift
static var documentXInclude: XMLNode.Options { get }
```

<a id="Discussion"></a>

## Discussion

XInclude allows clients to include parts of another XML document within a document.

(Input)

## See Also

### Constants

- [documentTidyHTML](documenttidyhtml.md): Formats HTML into valid XHTML during processing of the document.
- [documentTidyXML](documenttidyxml.md): Changes malformed XML into valid XML during processing of the document.
- [documentValidate](documentvalidate.md): Validates this document against its DTD (internal or external) or XML Schema.
- [documentIncludeContentTypeDeclaration](documentincludecontenttypedeclaration.md): Includes a content type declaration for HTML or XHTML in the output of the document.

# NSXMLDocumentXInclude (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Replaces all XInclude nodes in the document with the nodes referred to.

## Declaration

```objectivec
NSXMLDocumentXInclude
```

<a id="Discussion"></a>

## Discussion

XInclude allows clients to include parts of another XML document within a document.

(Input)

## See Also

### Constants

- [NSXMLDocumentTidyHTML](documenttidyhtml.md): Formats HTML into valid XHTML during processing of the document.
- [NSXMLDocumentTidyXML](documenttidyxml.md): Changes malformed XML into valid XML during processing of the document.
- [NSXMLDocumentValidate](documentvalidate.md): Validates this document against its DTD (internal or external) or XML Schema.
- [NSXMLDocumentIncludeContentTypeDeclaration](documentincludecontenttypedeclaration.md): Includes a content type declaration for HTML or XHTML in the output of the document.
