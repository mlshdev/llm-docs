> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quicklook/qlpreviewrequestflushcontext(_:_:)](https://developer.apple.com/documentation/quicklook/qlpreviewrequestflushcontext(_:_:))

# QLPreviewRequestFlushContext(\_:\_:) (Swift)

**Framework:** Quick Look  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 12.0)

Flush the context and sets the preview response.

> Use a QLPreviewingController in a Preview Extension to provide previews for your file types.

## Declaration

```swift
func QLPreviewRequestFlushContext(_ preview: QLPreviewRequest!, _ context: CGContext!)
```

## Parameters

- `preview`: The preview request object.
- `context`: The graphics context to flush.

<a id="Discussion"></a>

## Discussion

You should call this method immediately after drawing in the graphics contexts created by [QLPreviewRequestCreateContext(\_:\_:\_:\_:)](qlpreviewrequestcreatecontext%28________%29.md) and [QLPreviewRequestCreatePDFContext(\_:\_:\_:\_:)](qlpreviewrequestcreatepdfcontext%28________%29.md).

<a id="Special-Considerations"></a>

### Special Considerations

Thread-safety: This function should be called in the same thread as the preview request is made in; generally, this is the same thread in which the `GeneratePreviewForURL` callback was invoked.

## See Also

### Requesting previews

- [QLPreviewRequestCopyContentUTI(\_:)](qlpreviewrequestcopycontentuti%28__%29.md): Deprecated. Returns the UTI for the preview request.
- [QLPreviewRequestCopyOptions(\_:)](qlpreviewrequestcopyoptions%28__%29.md): Deprecated. Returns the options specified for the preview request.
- [QLPreviewRequestCopyURL(\_:)](qlpreviewrequestcopyurl%28__%29.md): Deprecated. Returns the URL of the document for which a preview is requested.
- [QLPreviewRequestCreateContext(\_:\_:\_:\_:)](qlpreviewrequestcreatecontext%28________%29.md): Deprecated. Creates a graphics context to draw the preview in.
- [QLPreviewRequestCreatePDFContext(\_:\_:\_:\_:)](qlpreviewrequestcreatepdfcontext%28________%29.md): Deprecated. Creates a PDF context suitable to draw a multi-page preview.
- [QLPreviewRequestGetDocumentObject(\_:)](qlpreviewrequestgetdocumentobject%28__%29.md): Deprecated. Returns the object that’s stored as part of a preview request.
- [QLPreviewRequestSetDocumentObject(\_:\_:\_:)](qlpreviewrequestsetdocumentobject%28______%29.md): Deprecated. Stores an object as part of a preview request.
- [QLPreviewRequestGetGeneratorBundle(\_:)](qlpreviewrequestgetgeneratorbundle%28__%29.md): Deprecated. Get the bundle of the generator receiving the preview request.
- [QLPreviewRequestGetTypeID()](qlpreviewrequestgettypeid%28%29.md): Deprecated. Gets the type identifier for the `QLPreviewReqest` opaque type.
- [QLPreviewRequestIsCancelled(\_:)](qlpreviewrequestiscancelled%28__%29.md): Deprecated. Returns whether the preview request has been cancelled by the client.
- [QLPreviewRequestSetDataRepresentation(\_:\_:\_:\_:)](qlpreviewrequestsetdatarepresentation%28________%29.md): Deprecated. Sets the preview request to data saved within the document or to dynamically generated data.
- [QLPreviewRequestSetURLRepresentation(\_:\_:\_:\_:)](qlpreviewrequestseturlrepresentation%28________%29.md): Deprecated. Sets the contents of the file at the given URL as the response to the preview request.

# QLPreviewRequestFlushContext (Objective-C)

**Framework:** Quick Look  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 12.0)

Flush the context and sets the preview response.

> Use a QLPreviewingController in a Preview Extension to provide previews for your file types.

## Declaration

```objectivec
extern void QLPreviewRequestFlushContext(QLPreviewRequestRef preview, CGContextRef context);
```

## Parameters

- `preview`: The preview request object.
- `context`: The graphics context to flush.

<a id="Discussion"></a>

## Discussion

You should call this method immediately after drawing in the graphics contexts created by [QLPreviewRequestCreateContext](qlpreviewrequestcreatecontext%28________%29.md) and [QLPreviewRequestCreatePDFContext](qlpreviewrequestcreatepdfcontext%28________%29.md).

<a id="Special-Considerations"></a>

### Special Considerations

Thread-safety: This function should be called in the same thread as the preview request is made in; generally, this is the same thread in which the `GeneratePreviewForURL` callback was invoked.

## See Also

### Requesting previews

- [QLPreviewRequestCopyContentUTI](qlpreviewrequestcopycontentuti%28__%29.md): Deprecated. Returns the UTI for the preview request.
- [QLPreviewRequestCopyOptions](qlpreviewrequestcopyoptions%28__%29.md): Deprecated. Returns the options specified for the preview request.
- [QLPreviewRequestCopyURL](qlpreviewrequestcopyurl%28__%29.md): Deprecated. Returns the URL of the document for which a preview is requested.
- [QLPreviewRequestCreateContext](qlpreviewrequestcreatecontext%28________%29.md): Deprecated. Creates a graphics context to draw the preview in.
- [QLPreviewRequestCreatePDFContext](qlpreviewrequestcreatepdfcontext%28________%29.md): Deprecated. Creates a PDF context suitable to draw a multi-page preview.
- [QLPreviewRequestGetDocumentObject](qlpreviewrequestgetdocumentobject%28__%29.md): Deprecated. Returns the object that’s stored as part of a preview request.
- [QLPreviewRequestSetDocumentObject](qlpreviewrequestsetdocumentobject%28______%29.md): Deprecated. Stores an object as part of a preview request.
- [QLPreviewRequestGetGeneratorBundle](qlpreviewrequestgetgeneratorbundle%28__%29.md): Deprecated. Get the bundle of the generator receiving the preview request.
- [QLPreviewRequestGetTypeID](qlpreviewrequestgettypeid%28%29.md): Deprecated. Gets the type identifier for the `QLPreviewReqest` opaque type.
- [QLPreviewRequestIsCancelled](qlpreviewrequestiscancelled%28__%29.md): Deprecated. Returns whether the preview request has been cancelled by the client.
- [QLPreviewRequestSetDataRepresentation](qlpreviewrequestsetdatarepresentation%28________%29.md): Deprecated. Sets the preview request to data saved within the document or to dynamically generated data.
- [QLPreviewRequestSetURLRepresentation](qlpreviewrequestseturlrepresentation%28________%29.md): Deprecated. Sets the contents of the file at the given URL as the response to the preview request.
