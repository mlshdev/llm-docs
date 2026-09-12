> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/xmlnode/options/nodepreservecdata](https://developer.apple.com/documentation/foundation/xmlnode/options/nodepreservecdata)

# nodePreserveCDATA (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Requests that NSXMLNode preserve CDATA blocks where defined in the input XML.

## Declaration

```swift
static var nodePreserveCDATA: XMLNode.Options { get }
```

## See Also

### Constants

- [documentIncludeContentTypeDeclaration](documentincludecontenttypedeclaration.md): Includes a content type declaration for HTML or XHTML in the output of the document.
- [documentTidyHTML](documenttidyhtml.md): Formats HTML into valid XHTML during processing of the document.
- [documentTidyXML](documenttidyxml.md): Changes malformed XML into valid XML during processing of the document.
- [documentValidate](documentvalidate.md): Validates this document against its DTD (internal or external) or XML Schema.
- [documentXInclude](documentxinclude.md): Replaces all XInclude nodes in the document with the nodes referred to.
- [nodeCompactEmptyElement](nodecompactemptyelement.md): Requests that an element should be contracted when empty; for example, `<flag/>`.
- [nodeExpandEmptyElement](nodeexpandemptyelement.md): Requests that an element should be expanded when empty; for example, `<flag></flag>`. This is the default.
- [nodeIsCDATA](nodeiscdata.md): Specifies that a text node contains and is written out as a CDATA section.
- [nodeLoadExternalEntitiesAlways](nodeloadexternalentitiesalways.md): Requests that external entities are always loaded.
- [nodeLoadExternalEntitiesNever](nodeloadexternalentitiesnever.md): Requests that external entities are never loaded.
- [nodeLoadExternalEntitiesSameOriginOnly](nodeloadexternalentitiessameoriginonly.md): Requests that external entities are always loaded and only applies when a URL has been provided.
- [nodeNeverEscapeContents](nodeneverescapecontents.md)
- [nodePreserveAll](nodepreserveall.md)
- [nodePreserveAttributeOrder](nodepreserveattributeorder.md): Requests that NSXMLNode preserve the order of attributes as in the source XML.
- [nodePreserveCharacterReferences](nodepreservecharacterreferences.md): Specifies that character references (`&#`*nnn*`;`) should not be resolved for XML output of this node.

# NSXMLNodePreserveCDATA (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Requests that NSXMLNode preserve CDATA blocks where defined in the input XML.

## Declaration

```objectivec
NSXMLNodePreserveCDATA
```

## See Also

### Constants

- [NSXMLDocumentIncludeContentTypeDeclaration](documentincludecontenttypedeclaration.md): Includes a content type declaration for HTML or XHTML in the output of the document.
- [NSXMLDocumentTidyHTML](documenttidyhtml.md): Formats HTML into valid XHTML during processing of the document.
- [NSXMLDocumentTidyXML](documenttidyxml.md): Changes malformed XML into valid XML during processing of the document.
- [NSXMLDocumentValidate](documentvalidate.md): Validates this document against its DTD (internal or external) or XML Schema.
- [NSXMLDocumentXInclude](documentxinclude.md): Replaces all XInclude nodes in the document with the nodes referred to.
- [NSXMLNodeCompactEmptyElement](nodecompactemptyelement.md): Requests that an element should be contracted when empty; for example, `<flag/>`.
- [NSXMLNodeExpandEmptyElement](nodeexpandemptyelement.md): Requests that an element should be expanded when empty; for example, `<flag></flag>`. This is the default.
- [NSXMLNodeIsCDATA](nodeiscdata.md): Specifies that a text node contains and is written out as a CDATA section.
- [NSXMLNodeLoadExternalEntitiesAlways](nodeloadexternalentitiesalways.md): Requests that external entities are always loaded.
- [NSXMLNodeLoadExternalEntitiesNever](nodeloadexternalentitiesnever.md): Requests that external entities are never loaded.
- [NSXMLNodeLoadExternalEntitiesSameOriginOnly](nodeloadexternalentitiessameoriginonly.md): Requests that external entities are always loaded and only applies when a URL has been provided.
- [NSXMLNodeNeverEscapeContents](nodeneverescapecontents.md)
- [NSXMLNodePreserveAll](nodepreserveall.md)
- [NSXMLNodePreserveAttributeOrder](nodepreserveattributeorder.md): Requests that NSXMLNode preserve the order of attributes as in the source XML.
- [NSXMLNodePreserveCharacterReferences](nodepreservecharacterreferences.md): Specifies that character references (`&#`*nnn*`;`) should not be resolved for XML output of this node.
