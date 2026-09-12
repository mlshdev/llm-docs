> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/xmlnode/options/nodeloadexternalentitiesnever](https://developer.apple.com/documentation/foundation/xmlnode/options/nodeloadexternalentitiesnever)

# nodeLoadExternalEntitiesNever (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Requests that external entities are never loaded.

## Declaration

```swift
static var nodeLoadExternalEntitiesNever: XMLNode.Options { get }
```

<a id="Discussion"></a>

## Discussion

You may choose only one of [nodeLoadExternalEntitiesAlways](nodeloadexternalentitiesalways.md), [nodeLoadExternalEntitiesSameOriginOnly](nodeloadexternalentitiessameoriginonly.md), or [nodeLoadExternalEntitiesNever](nodeloadexternalentitiesnever.md) or none.

Requests that external entities are never loaded. You may choose only one of [nodeLoadExternalEntitiesAlways](nodeloadexternalentitiesalways.md), [nodeLoadExternalEntitiesSameOriginOnly](nodeloadexternalentitiessameoriginonly.md), or [nodeLoadExternalEntitiesNever](nodeloadexternalentitiesnever.md) or none.

Choosing none results in the system-default behavior. For applications linked on OS X v10.6 and earlier, this is [nodeLoadExternalEntitiesAlways](nodeloadexternalentitiesalways.md). For applications linked on macOS 10.7 or later, all entities that don’t require network access are loaded.

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
- [nodeLoadExternalEntitiesSameOriginOnly](nodeloadexternalentitiessameoriginonly.md): Requests that external entities are always loaded and only applies when a URL has been provided.
- [nodeNeverEscapeContents](nodeneverescapecontents.md)
- [nodePreserveAll](nodepreserveall.md)
- [nodePreserveAttributeOrder](nodepreserveattributeorder.md): Requests that NSXMLNode preserve the order of attributes as in the source XML.
- [nodePreserveCDATA](nodepreservecdata.md): Requests that NSXMLNode preserve CDATA blocks where defined in the input XML.
- [nodePreserveCharacterReferences](nodepreservecharacterreferences.md): Specifies that character references (`&#`*nnn*`;`) should not be resolved for XML output of this node.

# NSXMLNodeLoadExternalEntitiesNever (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Requests that external entities are never loaded.

## Declaration

```objectivec
NSXMLNodeLoadExternalEntitiesNever
```

<a id="Discussion"></a>

## Discussion

You may choose only one of [NSXMLNodeLoadExternalEntitiesAlways](nodeloadexternalentitiesalways.md), [NSXMLNodeLoadExternalEntitiesSameOriginOnly](nodeloadexternalentitiessameoriginonly.md), or [NSXMLNodeLoadExternalEntitiesNever](nodeloadexternalentitiesnever.md) or none.

Requests that external entities are never loaded. You may choose only one of [NSXMLNodeLoadExternalEntitiesAlways](nodeloadexternalentitiesalways.md), [NSXMLNodeLoadExternalEntitiesSameOriginOnly](nodeloadexternalentitiessameoriginonly.md), or [NSXMLNodeLoadExternalEntitiesNever](nodeloadexternalentitiesnever.md) or none.

Choosing none results in the system-default behavior. For applications linked on OS X v10.6 and earlier, this is [NSXMLNodeLoadExternalEntitiesAlways](nodeloadexternalentitiesalways.md). For applications linked on macOS 10.7 or later, all entities that don’t require network access are loaded.

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
- [NSXMLNodeLoadExternalEntitiesSameOriginOnly](nodeloadexternalentitiessameoriginonly.md): Requests that external entities are always loaded and only applies when a URL has been provided.
- [NSXMLNodeNeverEscapeContents](nodeneverescapecontents.md)
- [NSXMLNodePreserveAll](nodepreserveall.md)
- [NSXMLNodePreserveAttributeOrder](nodepreserveattributeorder.md): Requests that NSXMLNode preserve the order of attributes as in the source XML.
- [NSXMLNodePreserveCDATA](nodepreservecdata.md): Requests that NSXMLNode preserve CDATA blocks where defined in the input XML.
- [NSXMLNodePreserveCharacterReferences](nodepreservecharacterreferences.md): Specifies that character references (`&#`*nnn*`;`) should not be resolved for XML output of this node.
