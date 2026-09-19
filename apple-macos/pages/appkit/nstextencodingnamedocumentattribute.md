> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nstextencodingnamedocumentattribute

# NSTextEncodingNameDocumentAttribute

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS

The name of the text encoding to use.

## Declaration

```objectivec
extern NSAttributedStringDocumentAttributeKey NSTextEncodingNameDocumentAttribute;
```

<a id="discussion"></a>

## Discussion

An [NSString](https://developer.apple.com/documentation/foundation/nsstring) object containing the name, IANA or otherwise, of a text encoding to be used. This attribute is mutually exclusive with [NSCharacterEncodingDocumentAttribute](nscharacterencodingdocumentattribute.md).

## See Also

### Getting document type keys

- [NSDocumentTypeDocumentAttribute](nsdocumenttypedocumentattribute.md): The document type.
- [NSFileTypeDocumentAttribute](nsfiletypedocumentattribute.md): The document type for interpreting the document.
