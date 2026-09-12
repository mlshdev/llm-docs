> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nsdocumenttypedocumentattribute](https://developer.apple.com/documentation/uikit/nsdocumenttypedocumentattribute)

# NSDocumentTypeDocumentAttribute

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The document type.

## Declaration

```objectivec
extern NSAttributedStringDocumentAttributeKey const NSDocumentTypeDocumentAttribute;
```

<a id="Discussion"></a>

## Discussion

The value of this attribute is one of the document types declared in [NSAttributedStringDocumentType](nsattributedstringdocumenttype.md). For reader methods, this key in options can specify the document type for interpreting the contents. Upon return, the document attributes can contain this key for indicating the actual format used to read the contents. For write methods, this key specifies the format for generating the data.

The string constant in macOS 10.3 and earlier is `@"DocumentType"`.

## See Also

### Getting document type keys

- [NSFileTypeDocumentAttribute](https://developer.apple.com/documentation/appkit/nsfiletypedocumentattribute): The document type for interpreting the document.
- [NSTextEncodingNameDocumentAttribute](https://developer.apple.com/documentation/appkit/nstextencodingnamedocumentattribute): The name of the text encoding to use.
