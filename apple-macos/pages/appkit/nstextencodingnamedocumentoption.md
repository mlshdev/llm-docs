> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextencodingnamedocumentoption](https://developer.apple.com/documentation/appkit/nstextencodingnamedocumentoption)

# NSTextEncodingNameDocumentOption

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS

The text encoding to use.

## Declaration

```objectivec
extern NSAttributedStringDocumentReadingOptionKey NSTextEncodingNameDocumentOption;
```

<a id="discussion"></a>

## Discussion

[NSString](https://developer.apple.com/documentation/foundation/nsstring) containing the name, IANA or otherwise, of a text encoding to override any encoding specified in an HTML document. Mutually exclusive with [NSCharacterEncodingDocumentOption](nscharacterencodingdocumentoption.md). The previous string constant was `@"TextEncodingName"`.

## See Also

### Getting the document options

- [NSBaseURLDocumentOption](nsbaseurldocumentoption.md): The base URL for HTML documents.
- [NSCharacterEncodingDocumentOption](nscharacterencodingdocumentoption.md): The string encoding.
- [NSDefaultAttributesDocumentOption](nsdefaultattributesdocumentoption.md): The default attributes to apply to plain files.
- [NSDocumentTypeDocumentOption](nsdocumenttypedocumentoption.md): The document type.
- [NSFileTypeDocumentOption](nsfiletypedocumentoption.md): The file type.
- [NSTextSizeMultiplierDocumentOption](nstextsizemultiplierdocumentoption.md): The scale factor for font sizes.
- [NSTimeoutDocumentOption](nstimeoutdocumentoption.md): The time, in seconds, to wait for a document to finish loading.
- [NSWebPreferencesDocumentOption](nswebpreferencesdocumentoption.md): A WebPreferences object.
- [NSWebResourceLoadDelegateDocumentOption](nswebresourceloaddelegatedocumentoption.md): An object to serve as the web resource loading delegate.
- [NSTextKit1ListMarkerFormatDocumentOption](nstextkit1listmarkerformatdocumentoption.md)
