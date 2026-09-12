> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/input_and_output_options](https://developer.apple.com/documentation/foundation/input_and_output_options)

# Input and Output Options (Swift)

**Framework:** Foundation  
**Kind:** API Collection

Input and output options specifically intended for `NSXMLDocument` objects.

<a id="overview"></a>

## Overview

Because `NSXMLDocument` is a subclass of [XMLNode](xmlnode.md), you can also use the relevant input and output options described in Constants in the `NSXMLNode` class reference. You can specify input options in the `NSXMLDocument` methods [init(contentsOf:options:)](xmldocument/init%28contentsof_options_%29.md), [init(data:options:)](xmldocument/init%28data_options_%29.md), [init(xmlString:options:)](xmldocument/init%28xmlstring_options_%29-65m2r.md). The [xmlData(options:)](xmldocument/xmldata%28options_%29.md) method takes output options.

## Topics

### Constants

- [documentTidyHTML](xmlnode/options/documenttidyhtml.md): Formats HTML into valid XHTML during processing of the document.
- [documentTidyXML](xmlnode/options/documenttidyxml.md): Changes malformed XML into valid XML during processing of the document.
- [documentValidate](xmlnode/options/documentvalidate.md): Validates this document against its DTD (internal or external) or XML Schema.
- [documentXInclude](xmlnode/options/documentxinclude.md): Replaces all XInclude nodes in the document with the nodes referred to.
- [documentIncludeContentTypeDeclaration](xmlnode/options/documentincludecontenttypedeclaration.md): Includes a content type declaration for HTML or XHTML in the output of the document.

## See Also

### Constants

- [XMLDocument.ContentKind](xmldocument/contentkind.md): Type used to define the kind of document content.
- [Document Content Types](document-content-types.md): Define document types.

# Input and Output Options (Objective-C)

**Framework:** Foundation  
**Kind:** API Collection

Input and output options specifically intended for `NSXMLDocument` objects.

<a id="overview"></a>

## Overview

Because `NSXMLDocument` is a subclass of [NSXMLNode](xmlnode.md), you can also use the relevant input and output options described in Constants in the `NSXMLNode` class reference. You can specify input options in the `NSXMLDocument` methods [initWithContentsOfURL:options:error:](xmldocument/init%28contentsof_options_%29.md), [initWithData:options:error:](xmldocument/init%28data_options_%29.md), [initWithXMLString:options:error:](xmldocument/init%28xmlstring_options_%29-65m2r.md). The [XMLDataWithOptions:](xmldocument/xmldata%28options_%29.md) method takes output options.

## Topics

### Constants

- [NSXMLDocumentTidyHTML](xmlnode/options/documenttidyhtml.md): Formats HTML into valid XHTML during processing of the document.
- [NSXMLDocumentTidyXML](xmlnode/options/documenttidyxml.md): Changes malformed XML into valid XML during processing of the document.
- [NSXMLDocumentValidate](xmlnode/options/documentvalidate.md): Validates this document against its DTD (internal or external) or XML Schema.
- [NSXMLDocumentXInclude](xmlnode/options/documentxinclude.md): Replaces all XInclude nodes in the document with the nodes referred to.
- [NSXMLDocumentIncludeContentTypeDeclaration](xmlnode/options/documentincludecontenttypedeclaration.md): Includes a content type declaration for HTML or XHTML in the output of the document.

## See Also

### Constants

- [NSXMLDocumentContentKind](xmldocument/contentkind.md): Type used to define the kind of document content.
- [Document Content Types](document-content-types.md): Define document types.
