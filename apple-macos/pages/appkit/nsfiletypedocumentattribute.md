> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfiletypedocumentattribute](https://developer.apple.com/documentation/appkit/nsfiletypedocumentattribute)

# NSFileTypeDocumentAttribute

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.6+

The document type for interpreting the document.

## Declaration

```objectivec
extern NSAttributedStringDocumentAttributeKey NSFileTypeDocumentAttribute;
```

<a id="discussion"></a>

## Discussion

The value of this attribute is an [NSString](https://developer.apple.com/documentation/foundation/nsstring) object indicating which document type was used to interpret the document, specified as a UTI; for reading, this is available along with [NSDocumentTypeDocumentAttribute](nsdocumenttypedocumentattribute.md), but for writing the two are mutually exclusive.

## See Also

### Getting document type keys

- [NSDocumentTypeDocumentAttribute](nsdocumenttypedocumentattribute.md): The document type.
- [NSTextEncodingNameDocumentAttribute](nstextencodingnamedocumentattribute.md): The name of the text encoding to use.
