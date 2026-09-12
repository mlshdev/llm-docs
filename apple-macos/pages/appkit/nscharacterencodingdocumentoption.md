> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscharacterencodingdocumentoption](https://developer.apple.com/documentation/appkit/nscharacterencodingdocumentoption)

# NSCharacterEncodingDocumentOption

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.0+

The string encoding.

## Declaration

```objectivec
extern NSAttributedStringDocumentReadingOptionKey NSCharacterEncodingDocumentOption;
```

<a id="discussion"></a>

## Discussion

For plain text documents; [NSNumber](https://developer.apple.com/documentation/foundation/nsnumber) containing the unsigned int [NSStringEncoding](https://developer.apple.com/documentation/foundation/nsstringencoding) to override any encoding specified in an HTML document. The previous string constant was `@"CharacterEncoding"`.

## See Also

### Getting the document options

- [NSBaseURLDocumentOption](nsbaseurldocumentoption.md): The base URL for HTML documents.
- [NSDefaultAttributesDocumentOption](nsdefaultattributesdocumentoption.md): The default attributes to apply to plain files.
- [NSDocumentTypeDocumentOption](nsdocumenttypedocumentoption.md): The document type.
- [NSFileTypeDocumentOption](nsfiletypedocumentoption.md): The file type.
- [NSTextEncodingNameDocumentOption](nstextencodingnamedocumentoption.md): The text encoding to use.
- [NSTextSizeMultiplierDocumentOption](nstextsizemultiplierdocumentoption.md): The scale factor for font sizes.
- [NSTimeoutDocumentOption](nstimeoutdocumentoption.md): The time, in seconds, to wait for a document to finish loading.
- [NSWebPreferencesDocumentOption](nswebpreferencesdocumentoption.md): A WebPreferences object.
- [NSWebResourceLoadDelegateDocumentOption](nswebresourceloaddelegatedocumentoption.md): An object to serve as the web resource loading delegate.
- [NSTextKit1ListMarkerFormatDocumentOption](nstextkit1listmarkerformatdocumentoption.md)
