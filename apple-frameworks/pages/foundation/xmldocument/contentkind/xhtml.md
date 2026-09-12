> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/xmldocument/contentkind/xhtml](https://developer.apple.com/documentation/foundation/xmldocument/contentkind/xhtml)

# XMLDocument.ContentKind.xhtml (Swift)

**Framework:** Foundation  
**Kind:** Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

The document output is XHTML.

## Declaration

```swift
case xhtml
```

<a id="Discussion"></a>

## Discussion

This is set automatically if the `NSXMLDocumentTidyHTML` option is set and NSXML detects HTML.

## See Also

### Enumeration Cases

- [XMLDocument.ContentKind.html](html.md): Outputs empty tags in HTML without a close tag, such as `<br>`.
- [XMLDocument.ContentKind.text](text.md): Outputs the string value of the document by extracting the string values from all text nodes.
- [XMLDocument.ContentKind.xml](xml.md): The default type of document content type, which is XML.

# NSXMLDocumentXHTMLKind (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

The document output is XHTML.

## Declaration

```objectivec
NSXMLDocumentXHTMLKind
```

<a id="Discussion"></a>

## Discussion

This is set automatically if the `NSXMLDocumentTidyHTML` option is set and NSXML detects HTML.

## See Also

### Enumeration Cases

- [NSXMLDocumentHTMLKind](html.md): Outputs empty tags in HTML without a close tag, such as `<br>`.
- [NSXMLDocumentTextKind](text.md): Outputs the string value of the document by extracting the string values from all text nodes.
- [NSXMLDocumentXMLKind](xml.md): The default type of document content type, which is XML.
