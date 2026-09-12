> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/xmlnode/options](https://developer.apple.com/documentation/foundation/xmlnode/options)

# XMLNode.Options (Swift)

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

These constants are input and output options for all `NSXMLNode` objects (unless otherwise indicated), including [XMLDocument](../xmldocument.md) objects. You can specify these options in the `NSXMLNode` methods [init(kind:options:)](init%28kind_options_%29.md) and [xmlString(options:)](xmlstring%28options_%29.md).

## Declaration

```swift
struct Options
```

<a id="overview"></a>

## Overview

The options with “Preserve” in their names are applicable only when external sources of XML are parsed; they have no effect on node objects that are programmatically created. Other options are used in initialization and output methods of `NSXMLDocument`; see the [XMLDocument](../xmldocument.md) reference documentation for details.

## Topics

### Constants

- [documentIncludeContentTypeDeclaration](options/documentincludecontenttypedeclaration.md): Includes a content type declaration for HTML or XHTML in the output of the document.
- [documentTidyHTML](options/documenttidyhtml.md): Formats HTML into valid XHTML during processing of the document.
- [documentTidyXML](options/documenttidyxml.md): Changes malformed XML into valid XML during processing of the document.
- [documentValidate](options/documentvalidate.md): Validates this document against its DTD (internal or external) or XML Schema.
- [documentXInclude](options/documentxinclude.md): Replaces all XInclude nodes in the document with the nodes referred to.
- [nodeCompactEmptyElement](options/nodecompactemptyelement.md): Requests that an element should be contracted when empty; for example, `<flag/>`.
- [nodeExpandEmptyElement](options/nodeexpandemptyelement.md): Requests that an element should be expanded when empty; for example, `<flag></flag>`. This is the default.
- [nodeIsCDATA](options/nodeiscdata.md): Specifies that a text node contains and is written out as a CDATA section.
- [nodeLoadExternalEntitiesAlways](options/nodeloadexternalentitiesalways.md): Requests that external entities are always loaded.
- [nodeLoadExternalEntitiesNever](options/nodeloadexternalentitiesnever.md): Requests that external entities are never loaded.
- [nodeLoadExternalEntitiesSameOriginOnly](options/nodeloadexternalentitiessameoriginonly.md): Requests that external entities are always loaded and only applies when a URL has been provided.
- [nodeNeverEscapeContents](options/nodeneverescapecontents.md)
- [nodePreserveAll](options/nodepreserveall.md)
- [nodePreserveAttributeOrder](options/nodepreserveattributeorder.md): Requests that NSXMLNode preserve the order of attributes as in the source XML.
- [nodePreserveCDATA](options/nodepreservecdata.md): Requests that NSXMLNode preserve CDATA blocks where defined in the input XML.
- [nodePreserveCharacterReferences](options/nodepreservecharacterreferences.md): Specifies that character references (`&#`*nnn*`;`) should not be resolved for XML output of this node.
- [nodePreserveDTD](options/nodepreservedtd.md): Specifies that declarations in a DTD should be preserved until it the DTD is modified. For example, parameter entities are by default expanded; with this option, they are written out as they originally occur in the DTD.
- [nodePreserveEmptyElements](options/nodepreserveemptyelements.md): Specifies that empty elements in the input XML be preserved in their contracted or expanded form.
- [nodePreserveEntities](options/nodepreserveentities.md): Specifies that entities (`&`*xyz*`;`) should not be resolved for XML output of this node.
- [nodePreserveNamespaceOrder](options/nodepreservenamespaceorder.md): Requests NSXML to preserve the order of namespace URI definitions as in the source XML.
- [nodePreservePrefixes](options/nodepreserveprefixes.md): Requests NSXMLNode not to choose prefixes based on the closest namespace URI definition.
- [nodePreserveQuotes](options/nodepreservequotes.md): Specifies that the quoting style used in the input XML (single or double quotes) be preserved.
- [nodePreserveWhitespace](options/nodepreservewhitespace.md): Requests NSXMLNode to preserve whitespace characters (such as tabs and carriage returns) in the XML source that are not part of node content.
- [nodePrettyPrint](options/nodeprettyprint.md): Print this node with extra space for readability. (Output)
- [nodePromoteSignificantWhitespace](options/nodepromotesignificantwhitespace.md)
- [nodeUseDoubleQuotes](options/nodeusedoublequotes.md): Requests that NSXML use double quotes for the value of an attribute or namespace node. This is the default.
- [nodeUseSingleQuotes](options/nodeusesinglequotes.md): Requests that NSXML use single quotes for the value of an attribute or namespace node.

### Initializers

- [init(rawValue:)](options/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Constants

- [XMLNode.Kind](kind-swift.enum.md): `NSXMLNode` declares the following constants of type NSXMLNodeKind for specifying a node’s kind in the initializer methods [init(kind:)](init%28kind_%29.md) and [init(kind:options:)](init%28kind_options_%29.md):

# NSXMLNodeOptions (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

These constants are input and output options for all `NSXMLNode` objects (unless otherwise indicated), including [NSXMLDocument](../xmldocument.md) objects. You can specify these options in the `NSXMLNode` methods [initWithKind:options:](init%28kind_options_%29.md) and [XMLStringWithOptions:](xmlstring%28options_%29.md).

## Declaration

```objectivec
enum NSXMLNodeOptions : NSUInteger;
```

<a id="overview"></a>

## Overview

The options with “Preserve” in their names are applicable only when external sources of XML are parsed; they have no effect on node objects that are programmatically created. Other options are used in initialization and output methods of `NSXMLDocument`; see the [NSXMLDocument](../xmldocument.md) reference documentation for details.

## Topics

### Constants

- [NSXMLDocumentIncludeContentTypeDeclaration](options/documentincludecontenttypedeclaration.md): Includes a content type declaration for HTML or XHTML in the output of the document.
- [NSXMLDocumentTidyHTML](options/documenttidyhtml.md): Formats HTML into valid XHTML during processing of the document.
- [NSXMLDocumentTidyXML](options/documenttidyxml.md): Changes malformed XML into valid XML during processing of the document.
- [NSXMLDocumentValidate](options/documentvalidate.md): Validates this document against its DTD (internal or external) or XML Schema.
- [NSXMLDocumentXInclude](options/documentxinclude.md): Replaces all XInclude nodes in the document with the nodes referred to.
- [NSXMLNodeCompactEmptyElement](options/nodecompactemptyelement.md): Requests that an element should be contracted when empty; for example, `<flag/>`.
- [NSXMLNodeExpandEmptyElement](options/nodeexpandemptyelement.md): Requests that an element should be expanded when empty; for example, `<flag></flag>`. This is the default.
- [NSXMLNodeIsCDATA](options/nodeiscdata.md): Specifies that a text node contains and is written out as a CDATA section.
- [NSXMLNodeLoadExternalEntitiesAlways](options/nodeloadexternalentitiesalways.md): Requests that external entities are always loaded.
- [NSXMLNodeLoadExternalEntitiesNever](options/nodeloadexternalentitiesnever.md): Requests that external entities are never loaded.
- [NSXMLNodeLoadExternalEntitiesSameOriginOnly](options/nodeloadexternalentitiessameoriginonly.md): Requests that external entities are always loaded and only applies when a URL has been provided.
- [NSXMLNodeNeverEscapeContents](options/nodeneverescapecontents.md)
- [NSXMLNodePreserveAll](options/nodepreserveall.md)
- [NSXMLNodePreserveAttributeOrder](options/nodepreserveattributeorder.md): Requests that NSXMLNode preserve the order of attributes as in the source XML.
- [NSXMLNodePreserveCDATA](options/nodepreservecdata.md): Requests that NSXMLNode preserve CDATA blocks where defined in the input XML.
- [NSXMLNodePreserveCharacterReferences](options/nodepreservecharacterreferences.md): Specifies that character references (`&#`*nnn*`;`) should not be resolved for XML output of this node.
- [NSXMLNodePreserveDTD](options/nodepreservedtd.md): Specifies that declarations in a DTD should be preserved until it the DTD is modified. For example, parameter entities are by default expanded; with this option, they are written out as they originally occur in the DTD.
- [NSXMLNodePreserveEmptyElements](options/nodepreserveemptyelements.md): Specifies that empty elements in the input XML be preserved in their contracted or expanded form.
- [NSXMLNodePreserveEntities](options/nodepreserveentities.md): Specifies that entities (`&`*xyz*`;`) should not be resolved for XML output of this node.
- [NSXMLNodePreserveNamespaceOrder](options/nodepreservenamespaceorder.md): Requests NSXML to preserve the order of namespace URI definitions as in the source XML.
- [NSXMLNodePreservePrefixes](options/nodepreserveprefixes.md): Requests NSXMLNode not to choose prefixes based on the closest namespace URI definition.
- [NSXMLNodePreserveQuotes](options/nodepreservequotes.md): Specifies that the quoting style used in the input XML (single or double quotes) be preserved.
- [NSXMLNodePreserveWhitespace](options/nodepreservewhitespace.md): Requests NSXMLNode to preserve whitespace characters (such as tabs and carriage returns) in the XML source that are not part of node content.
- [NSXMLNodePrettyPrint](options/nodeprettyprint.md): Print this node with extra space for readability. (Output)
- [NSXMLNodePromoteSignificantWhitespace](options/nodepromotesignificantwhitespace.md)
- [NSXMLNodeUseDoubleQuotes](options/nodeusedoublequotes.md): Requests that NSXML use double quotes for the value of an attribute or namespace node. This is the default.
- [NSXMLNodeUseSingleQuotes](options/nodeusesinglequotes.md): Requests that NSXML use single quotes for the value of an attribute or namespace node.

### Enumeration Cases

- [NSXMLNodeOptionsNone](../nsxmlnodeoptions/nsxmlnodeoptionsnone.md): No options are requested for this input or output action.

## See Also

### Constants

- [NSXMLNodeKind](kind-swift.enum.md): `NSXMLNode` declares the following constants of type NSXMLNodeKind for specifying a node’s kind in the initializer methods [initWithKind:](init%28kind_%29.md) and [initWithKind:options:](init%28kind_options_%29.md):
- [NSXMLNodeOptionsNone](../nsxmlnodeoptions/nsxmlnodeoptionsnone.md): No options are requested for this input or output action.
