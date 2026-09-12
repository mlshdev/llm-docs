> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quicklook/qlpreviewrequestseturlrepresentation(_:_:_:_:)](https://developer.apple.com/documentation/quicklook/qlpreviewrequestseturlrepresentation(_:_:_:_:))

# QLPreviewRequestSetURLRepresentation(\_:\_:\_:\_:) (Swift)

**Framework:** Quick Look  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 12.0)

Sets the contents of the file at the given URL as the response to the preview request.

> Use a QLPreviewingController in a Preview Extension to provide previews for your file types.

## Declaration

```swift
func QLPreviewRequestSetURLRepresentation(_ preview: QLPreviewRequest!, _ url: CFURL!, _ contentTypeUTI: CFString!, _ properties: CFDictionary!)
```

## Parameters

- `preview`: The preview request object.
- `url`: The URL of the file that’s returned as the response to the preview request. The file must be one of the supported file types.
- `contentTypeUTI`: The UTI specifying the content type of the preview.
- `properties`: Additional properties for the preview response.

<a id="Discussion"></a>

## Discussion

This function returns preview data at the given URL to the client. How the Quick Look feature handles the data depends upon the value of the given content type UTI. The content data of the preview must be of a native Quick Look type. Quick Look supports the following UTIs:

- `kUTTypeImage`
- `kUTTypePDF`
- `kUTTypeHTML`
- `kUTTypeXML`
- `kUTTypePlainText`
- `kUTTypeRTF`
- `kUTTypeRTFD`
- `kUTTypeMovie`
- `kUTTypeAudio`

## See Also

### Requesting previews

- [QLPreviewRequestCopyContentUTI(\_:)](qlpreviewrequestcopycontentuti%28__%29.md): Deprecated. Returns the UTI for the preview request.
- [QLPreviewRequestCopyOptions(\_:)](qlpreviewrequestcopyoptions%28__%29.md): Deprecated. Returns the options specified for the preview request.
- [QLPreviewRequestCopyURL(\_:)](qlpreviewrequestcopyurl%28__%29.md): Deprecated. Returns the URL of the document for which a preview is requested.
- [QLPreviewRequestCreateContext(\_:\_:\_:\_:)](qlpreviewrequestcreatecontext%28________%29.md): Deprecated. Creates a graphics context to draw the preview in.
- [QLPreviewRequestCreatePDFContext(\_:\_:\_:\_:)](qlpreviewrequestcreatepdfcontext%28________%29.md): Deprecated. Creates a PDF context suitable to draw a multi-page preview.
- [QLPreviewRequestFlushContext(\_:\_:)](qlpreviewrequestflushcontext%28____%29.md): Deprecated. Flush the context and sets the preview response.
- [QLPreviewRequestGetDocumentObject(\_:)](qlpreviewrequestgetdocumentobject%28__%29.md): Deprecated. Returns the object that’s stored as part of a preview request.
- [QLPreviewRequestSetDocumentObject(\_:\_:\_:)](qlpreviewrequestsetdocumentobject%28______%29.md): Deprecated. Stores an object as part of a preview request.
- [QLPreviewRequestGetGeneratorBundle(\_:)](qlpreviewrequestgetgeneratorbundle%28__%29.md): Deprecated. Get the bundle of the generator receiving the preview request.
- [QLPreviewRequestGetTypeID()](qlpreviewrequestgettypeid%28%29.md): Deprecated. Gets the type identifier for the `QLPreviewReqest` opaque type.
- [QLPreviewRequestIsCancelled(\_:)](qlpreviewrequestiscancelled%28__%29.md): Deprecated. Returns whether the preview request has been cancelled by the client.
- [QLPreviewRequestSetDataRepresentation(\_:\_:\_:\_:)](qlpreviewrequestsetdatarepresentation%28________%29.md): Deprecated. Sets the preview request to data saved within the document or to dynamically generated data.

# QLPreviewRequestSetURLRepresentation (Objective-C)

**Framework:** Quick Look  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 12.0)

Sets the contents of the file at the given URL as the response to the preview request.

> Use a QLPreviewingController in a Preview Extension to provide previews for your file types.

## Declaration

```objectivec
extern void QLPreviewRequestSetURLRepresentation(QLPreviewRequestRef preview, CFURLRef url, CFStringRef contentTypeUTI, CFDictionaryRef properties);
```

## Parameters

- `preview`: The preview request object.
- `url`: The URL of the file that’s returned as the response to the preview request. The file must be one of the supported file types.
- `contentTypeUTI`: The UTI specifying the content type of the preview.
- `properties`: Additional properties for the preview response.

<a id="Discussion"></a>

## Discussion

This function returns preview data at the given URL to the client. How the Quick Look feature handles the data depends upon the value of the given content type UTI. The content data of the preview must be of a native Quick Look type. Quick Look supports the following UTIs:

- `kUTTypeImage`
- `kUTTypePDF`
- `kUTTypeHTML`
- `kUTTypeXML`
- `kUTTypePlainText`
- `kUTTypeRTF`
- `kUTTypeRTFD`
- `kUTTypeMovie`
- `kUTTypeAudio`

## See Also

### Requesting previews

- [QLPreviewRequestCopyContentUTI](qlpreviewrequestcopycontentuti%28__%29.md): Deprecated. Returns the UTI for the preview request.
- [QLPreviewRequestCopyOptions](qlpreviewrequestcopyoptions%28__%29.md): Deprecated. Returns the options specified for the preview request.
- [QLPreviewRequestCopyURL](qlpreviewrequestcopyurl%28__%29.md): Deprecated. Returns the URL of the document for which a preview is requested.
- [QLPreviewRequestCreateContext](qlpreviewrequestcreatecontext%28________%29.md): Deprecated. Creates a graphics context to draw the preview in.
- [QLPreviewRequestCreatePDFContext](qlpreviewrequestcreatepdfcontext%28________%29.md): Deprecated. Creates a PDF context suitable to draw a multi-page preview.
- [QLPreviewRequestFlushContext](qlpreviewrequestflushcontext%28____%29.md): Deprecated. Flush the context and sets the preview response.
- [QLPreviewRequestGetDocumentObject](qlpreviewrequestgetdocumentobject%28__%29.md): Deprecated. Returns the object that’s stored as part of a preview request.
- [QLPreviewRequestSetDocumentObject](qlpreviewrequestsetdocumentobject%28______%29.md): Deprecated. Stores an object as part of a preview request.
- [QLPreviewRequestGetGeneratorBundle](qlpreviewrequestgetgeneratorbundle%28__%29.md): Deprecated. Get the bundle of the generator receiving the preview request.
- [QLPreviewRequestGetTypeID](qlpreviewrequestgettypeid%28%29.md): Deprecated. Gets the type identifier for the `QLPreviewReqest` opaque type.
- [QLPreviewRequestIsCancelled](qlpreviewrequestiscancelled%28__%29.md): Deprecated. Returns whether the preview request has been cancelled by the client.
- [QLPreviewRequestSetDataRepresentation](qlpreviewrequestsetdatarepresentation%28________%29.md): Deprecated. Sets the preview request to data saved within the document or to dynamically generated data.
