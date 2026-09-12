> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quicklook/qlpreviewrequestcopyoptions(_:)](https://developer.apple.com/documentation/quicklook/qlpreviewrequestcopyoptions(_:))

# QLPreviewRequestCopyOptions(\_:) (Swift)

**Framework:** Quick Look  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 12.0)

Returns the options specified for the preview request.

> Use a QLPreviewingController in a Preview Extension to provide previews for your file types.

## Declaration

```swift
func QLPreviewRequestCopyOptions(_ preview: QLPreviewRequest!) -> Unmanaged<CFDictionary>!
```

## Parameters

- `preview`: A preview request object.

<a id="return-value"></a>

## Return Value

A dictionary containing the properties specified for the preview request. See `Preview Properties` for supported options. You should explicitly release this object when it is no longer needed.

<a id="Discussion"></a>

## Discussion

The client sets options in the preview request to give hints to the generator. For macOS 10.5, no options are supported.

<a id="Special-Considerations"></a>

### Special Considerations

Thread-safety: This function should be called in the same thread as the preview request is made in; generally, this is the same thread in which the `GeneratePreviewForURL` callback was invoked.

## See Also

### Requesting previews

- [QLPreviewRequestCopyContentUTI(\_:)](qlpreviewrequestcopycontentuti%28__%29.md): Deprecated. Returns the UTI for the preview request.
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
- [QLPreviewRequestSetURLRepresentation(\_:\_:\_:\_:)](qlpreviewrequestseturlrepresentation%28________%29.md): Deprecated. Sets the contents of the file at the given URL as the response to the preview request.

# QLPreviewRequestCopyOptions (Objective-C)

**Framework:** Quick Look  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 12.0)

Returns the options specified for the preview request.

> Use a QLPreviewingController in a Preview Extension to provide previews for your file types.

## Declaration

```objectivec
extern CFDictionaryRefQLPreviewRequestCopyOptions(QLPreviewRequestRef preview);
```

## Parameters

- `preview`: A preview request object.

<a id="return-value"></a>

## Return Value

A dictionary containing the properties specified for the preview request. See `Preview Properties` for supported options. You should explicitly release this object when it is no longer needed.

<a id="Discussion"></a>

## Discussion

The client sets options in the preview request to give hints to the generator. For macOS 10.5, no options are supported.

<a id="Special-Considerations"></a>

### Special Considerations

Thread-safety: This function should be called in the same thread as the preview request is made in; generally, this is the same thread in which the `GeneratePreviewForURL` callback was invoked.

## See Also

### Requesting previews

- [QLPreviewRequestCopyContentUTI](qlpreviewrequestcopycontentuti%28__%29.md): Deprecated. Returns the UTI for the preview request.
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
- [QLPreviewRequestSetURLRepresentation](qlpreviewrequestseturlrepresentation%28________%29.md): Deprecated. Sets the contents of the file at the given URL as the response to the preview request.
