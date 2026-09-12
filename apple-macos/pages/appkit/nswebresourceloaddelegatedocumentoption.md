> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswebresourceloaddelegatedocumentoption](https://developer.apple.com/documentation/appkit/nswebresourceloaddelegatedocumentoption)

# NSWebResourceLoadDelegateDocumentOption

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS

An object to serve as the web resource loading delegate.

## Declaration

```objectivec
extern NSAttributedStringDocumentReadingOptionKey NSWebResourceLoadDelegateDocumentOption;
```

<a id="discussion"></a>

## Discussion

For HTML only. The value is an [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class).

If not present, a default delegate is used that permits the loading of subsidiary resources but does not respond to authentication challenges. The previous string constant was `@"WebResourceLoadDelegate"`.

## See Also

### Getting the document options

- [NSBaseURLDocumentOption](nsbaseurldocumentoption.md): The base URL for HTML documents.
- [NSCharacterEncodingDocumentOption](nscharacterencodingdocumentoption.md): The string encoding.
- [NSDefaultAttributesDocumentOption](nsdefaultattributesdocumentoption.md): The default attributes to apply to plain files.
- [NSDocumentTypeDocumentOption](nsdocumenttypedocumentoption.md): The document type.
- [NSFileTypeDocumentOption](nsfiletypedocumentoption.md): The file type.
- [NSTextEncodingNameDocumentOption](nstextencodingnamedocumentoption.md): The text encoding to use.
- [NSTextSizeMultiplierDocumentOption](nstextsizemultiplierdocumentoption.md): The scale factor for font sizes.
- [NSTimeoutDocumentOption](nstimeoutdocumentoption.md): The time, in seconds, to wait for a document to finish loading.
- [NSWebPreferencesDocumentOption](nswebpreferencesdocumentoption.md): A WebPreferences object.
- [NSTextKit1ListMarkerFormatDocumentOption](nstextkit1listmarkerformatdocumentoption.md)
