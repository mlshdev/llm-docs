> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfiletypedocumentoption](https://developer.apple.com/documentation/appkit/nsfiletypedocumentoption)

# NSFileTypeDocumentOption

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.6+

The file type.

## Declaration

```objectivec
extern NSAttributedStringDocumentReadingOptionKey NSFileTypeDocumentOption;
```

<a id="discussion"></a>

## Discussion

The value of this attribute is an [NSString](https://developer.apple.com/documentation/foundation/nsstring) object indicating a document type to be forced when loading the document, specified as a UTI string; mutually exclusive with [NSDocumentTypeDocumentOption](nsdocumenttypedocumentoption.md).

## See Also

### Getting the document options

- [NSBaseURLDocumentOption](nsbaseurldocumentoption.md): The base URL for HTML documents.
- [NSCharacterEncodingDocumentOption](nscharacterencodingdocumentoption.md): The string encoding.
- [NSDefaultAttributesDocumentOption](nsdefaultattributesdocumentoption.md): The default attributes to apply to plain files.
- [NSDocumentTypeDocumentOption](nsdocumenttypedocumentoption.md): The document type.
- [NSTextEncodingNameDocumentOption](nstextencodingnamedocumentoption.md): The text encoding to use.
- [NSTextSizeMultiplierDocumentOption](nstextsizemultiplierdocumentoption.md): The scale factor for font sizes.
- [NSTimeoutDocumentOption](nstimeoutdocumentoption.md): The time, in seconds, to wait for a document to finish loading.
- [NSWebPreferencesDocumentOption](nswebpreferencesdocumentoption.md): A WebPreferences object.
- [NSWebResourceLoadDelegateDocumentOption](nswebresourceloaddelegatedocumentoption.md): An object to serve as the web resource loading delegate.
- [NSTextKit1ListMarkerFormatDocumentOption](nstextkit1listmarkerformatdocumentoption.md)
