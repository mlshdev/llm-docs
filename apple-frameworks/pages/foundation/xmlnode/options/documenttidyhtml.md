> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/xmlnode/options/documenttidyhtml](https://developer.apple.com/documentation/foundation/xmlnode/options/documenttidyhtml)

# documentTidyHTML (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Formats HTML into valid XHTML during processing of the document.

## Declaration

```swift
static var documentTidyHTML: XMLNode.Options { get }
```

<a id="Discussion"></a>

## Discussion

When tidying, `NSXMLDocument` adds a line break before the close tag of a block-level element (`<p>`, `<div>`, `<h1>`, and so on); it also makes the string value of `<br>` or `<hr>` a line break. These operations make the string value of the HTML `<body>` more readable. After using this option, avoid outputting the document as anything other than the default kind, `NSXMLDocumentXHTMLKind`.

(Input)

## See Also

### Constants

- [documentTidyXML](documenttidyxml.md): Changes malformed XML into valid XML during processing of the document.
- [documentValidate](documentvalidate.md): Validates this document against its DTD (internal or external) or XML Schema.
- [documentXInclude](documentxinclude.md): Replaces all XInclude nodes in the document with the nodes referred to.
- [documentIncludeContentTypeDeclaration](documentincludecontenttypedeclaration.md): Includes a content type declaration for HTML or XHTML in the output of the document.

# NSXMLDocumentTidyHTML (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Formats HTML into valid XHTML during processing of the document.

## Declaration

```objectivec
NSXMLDocumentTidyHTML
```

<a id="Discussion"></a>

## Discussion

When tidying, `NSXMLDocument` adds a line break before the close tag of a block-level element (`<p>`, `<div>`, `<h1>`, and so on); it also makes the string value of `<br>` or `<hr>` a line break. These operations make the string value of the HTML `<body>` more readable. After using this option, avoid outputting the document as anything other than the default kind, `NSXMLDocumentXHTMLKind`.

(Input)

## See Also

### Constants

- [NSXMLDocumentTidyXML](documenttidyxml.md): Changes malformed XML into valid XML during processing of the document.
- [NSXMLDocumentValidate](documentvalidate.md): Validates this document against its DTD (internal or external) or XML Schema.
- [NSXMLDocumentXInclude](documentxinclude.md): Replaces all XInclude nodes in the document with the nodes referred to.
- [NSXMLDocumentIncludeContentTypeDeclaration](documentincludecontenttypedeclaration.md): Includes a content type declaration for HTML or XHTML in the output of the document.
