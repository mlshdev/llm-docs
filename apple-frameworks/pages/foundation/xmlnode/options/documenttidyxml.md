> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/xmlnode/options/documenttidyxml

# documentTidyXML (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Changes malformed XML into valid XML during processing of the document.

## Declaration

```swift
static var documentTidyXML: XMLNode.Options { get }
```

<a id="Discussion"></a>

## Discussion

It also eliminates “pretty-printing” formatting, such as leading tab characters. It does respect the `xml:space="preserve"` attribute.

(Input)

## See Also

### Constants

- [documentTidyHTML](documenttidyhtml.md): Formats HTML into valid XHTML during processing of the document.
- [documentValidate](documentvalidate.md): Validates this document against its DTD (internal or external) or XML Schema.
- [documentXInclude](documentxinclude.md): Replaces all XInclude nodes in the document with the nodes referred to.
- [documentIncludeContentTypeDeclaration](documentincludecontenttypedeclaration.md): Includes a content type declaration for HTML or XHTML in the output of the document.

# NSXMLDocumentTidyXML (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Changes malformed XML into valid XML during processing of the document.

## Declaration

```objectivec
NSXMLDocumentTidyXML
```

<a id="Discussion"></a>

## Discussion

It also eliminates “pretty-printing” formatting, such as leading tab characters. It does respect the `xml:space="preserve"` attribute.

(Input)

## See Also

### Constants

- [NSXMLDocumentTidyHTML](documenttidyhtml.md): Formats HTML into valid XHTML during processing of the document.
- [NSXMLDocumentValidate](documentvalidate.md): Validates this document against its DTD (internal or external) or XML Schema.
- [NSXMLDocumentXInclude](documentxinclude.md): Replaces all XInclude nodes in the document with the nodes referred to.
- [NSXMLDocumentIncludeContentTypeDeclaration](documentincludecontenttypedeclaration.md): Includes a content type declaration for HTML or XHTML in the output of the document.
