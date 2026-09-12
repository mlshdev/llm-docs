> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocumenttypedocumentattribute](https://developer.apple.com/documentation/appkit/nsdocumenttypedocumentattribute)

# NSDocumentTypeDocumentAttribute

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.0+

The document type.

## Declaration

```objectivec
extern NSAttributedStringDocumentAttributeKey NSDocumentTypeDocumentAttribute;
```

<a id="discussion"></a>

## Discussion

The value of this attribute is one of the document types declared in [NSAttributedStringDocumentType](nsattributedstringdocumenttype.md). For reader methods, this key in options can specify the document type for interpreting the contents. Upon return, the document attributes can contain this key for indicating the actual format used to read the contents. For write methods, this key specifies the format for generating the data.

The string constant in macOS 10.3 and earlier is `@"DocumentType"`.

## See Also

### Getting document type keys

- [NSFileTypeDocumentAttribute](nsfiletypedocumentattribute.md): The document type for interpreting the document.
- [NSTextEncodingNameDocumentAttribute](nstextencodingnamedocumentattribute.md): The name of the text encoding to use.
