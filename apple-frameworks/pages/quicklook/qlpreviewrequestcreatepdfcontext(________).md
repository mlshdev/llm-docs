> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quicklook/qlpreviewrequestcreatepdfcontext(_:_:_:_:)](https://developer.apple.com/documentation/quicklook/qlpreviewrequestcreatepdfcontext(_:_:_:_:))

# QLPreviewRequestCreatePDFContext(\_:\_:\_:\_:) (Swift)

**Framework:** Quick Look  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 12.0)

Creates a PDF context suitable to draw a multi-page preview.

> Use a QLPreviewingController in a Preview Extension to provide previews for your file types.

## Declaration

```swift
func QLPreviewRequestCreatePDFContext(_ preview: QLPreviewRequest!, _ mediaBox: UnsafePointer<CGRect>!, _ auxiliaryInfo: CFDictionary!, _ properties: CFDictionary!) -> Unmanaged<CGContext>!
```

## Parameters

- `preview`: The preview request object.
- `mediaBox`: A pointer to the media box of the context.

  A media box is a rectangle that defines the size and location of the PDF page. The origin of the rectangle should typically be (0,0). If you pass NULL, Quartz uses a default page size of 8.5 by 11 inches (612 by 792 points). For information see the description for [init(consumer:mediaBox:\_:)](../coregraphics/cgcontext/init%28consumer_mediabox___%29.md).
- `auxiliaryInfo`: A dictionary containing PDF auxiliary information. See the description of the auxiliary dictionary keys in [Auxiliary Dictionary Keys](../coregraphics/auxiliary-dictionary-keys.md) for more information about the keys and values of this dictionary.
- `properties`: A dictionary containing additional properties for the preview response. For information on acceptable keys and values, see `Preview Properties`.

<a id="return-value"></a>

## Return Value

A reference to a Core Graphics context object that is used to display a PDF version of the preview. You should explicitly release this object when it is no longer needed.

<a id="Discussion"></a>

## Discussion

Be sure to bracket each PDF page written to the context with [beginPDFPage(\_:)](../coregraphics/cgcontext/beginpdfpage%28__%29.md) and [endPDFPage()](../coregraphics/cgcontext/endpdfpage%28%29.md) calls. After calling this function, you should flush the context with [QLPreviewRequestFlushContext(\_:\_:)](qlpreviewrequestflushcontext%28____%29.md).

<a id="Special-Considerations"></a>

### Special Considerations

Thread-safety: This function should be called in the same thread as the preview request is made in; generally, this is the same thread in which the `GeneratePreviewForURL` callback was invoked.

## See Also

### Requesting previews

- [QLPreviewRequestCopyContentUTI(\_:)](qlpreviewrequestcopycontentuti%28__%29.md): Deprecated. Returns the UTI for the preview request.
- [QLPreviewRequestCopyOptions(\_:)](qlpreviewrequestcopyoptions%28__%29.md): Deprecated. Returns the options specified for the preview request.
- [QLPreviewRequestCopyURL(\_:)](qlpreviewrequestcopyurl%28__%29.md): Deprecated. Returns the URL of the document for which a preview is requested.
- [QLPreviewRequestCreateContext(\_:\_:\_:\_:)](qlpreviewrequestcreatecontext%28________%29.md): Deprecated. Creates a graphics context to draw the preview in.
- [QLPreviewRequestFlushContext(\_:\_:)](qlpreviewrequestflushcontext%28____%29.md): Deprecated. Flush the context and sets the preview response.
- [QLPreviewRequestGetDocumentObject(\_:)](qlpreviewrequestgetdocumentobject%28__%29.md): Deprecated. Returns the object that’s stored as part of a preview request.
- [QLPreviewRequestSetDocumentObject(\_:\_:\_:)](qlpreviewrequestsetdocumentobject%28______%29.md): Deprecated. Stores an object as part of a preview request.
- [QLPreviewRequestGetGeneratorBundle(\_:)](qlpreviewrequestgetgeneratorbundle%28__%29.md): Deprecated. Get the bundle of the generator receiving the preview request.
- [QLPreviewRequestGetTypeID()](qlpreviewrequestgettypeid%28%29.md): Deprecated. Gets the type identifier for the `QLPreviewReqest` opaque type.
- [QLPreviewRequestIsCancelled(\_:)](qlpreviewrequestiscancelled%28__%29.md): Deprecated. Returns whether the preview request has been cancelled by the client.
- [QLPreviewRequestSetDataRepresentation(\_:\_:\_:\_:)](qlpreviewrequestsetdatarepresentation%28________%29.md): Deprecated. Sets the preview request to data saved within the document or to dynamically generated data.
- [QLPreviewRequestSetURLRepresentation(\_:\_:\_:\_:)](qlpreviewrequestseturlrepresentation%28________%29.md): Deprecated. Sets the contents of the file at the given URL as the response to the preview request.

# QLPreviewRequestCreatePDFContext (Objective-C)

**Framework:** Quick Look  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 12.0)

Creates a PDF context suitable to draw a multi-page preview.

> Use a QLPreviewingController in a Preview Extension to provide previews for your file types.

## Declaration

```objectivec
extern CGContextRefQLPreviewRequestCreatePDFContext(QLPreviewRequestRef preview, const CGRect *mediaBox, CFDictionaryRef auxiliaryInfo, CFDictionaryRef properties);
```

## Parameters

- `preview`: The preview request object.
- `mediaBox`: A pointer to the media box of the context.

  A media box is a rectangle that defines the size and location of the PDF page. The origin of the rectangle should typically be (0,0). If you pass NULL, Quartz uses a default page size of 8.5 by 11 inches (612 by 792 points). For information see the description for [CGPDFContextCreate](../coregraphics/cgcontext/init%28consumer_mediabox___%29.md).
- `auxiliaryInfo`: A dictionary containing PDF auxiliary information. See the description of the auxiliary dictionary keys in [Auxiliary Dictionary Keys](../coregraphics/auxiliary-dictionary-keys.md) for more information about the keys and values of this dictionary.
- `properties`: A dictionary containing additional properties for the preview response. For information on acceptable keys and values, see `Preview Properties`.

<a id="return-value"></a>

## Return Value

A reference to a Core Graphics context object that is used to display a PDF version of the preview. You should explicitly release this object when it is no longer needed.

<a id="Discussion"></a>

## Discussion

Be sure to bracket each PDF page written to the context with [CGPDFContextBeginPage](../coregraphics/cgcontext/beginpdfpage%28__%29.md) and [CGPDFContextEndPage](../coregraphics/cgcontext/endpdfpage%28%29.md) calls. After calling this function, you should flush the context with [QLPreviewRequestFlushContext](qlpreviewrequestflushcontext%28____%29.md).

<a id="Special-Considerations"></a>

### Special Considerations

Thread-safety: This function should be called in the same thread as the preview request is made in; generally, this is the same thread in which the `GeneratePreviewForURL` callback was invoked.

## See Also

### Requesting previews

- [QLPreviewRequestCopyContentUTI](qlpreviewrequestcopycontentuti%28__%29.md): Deprecated. Returns the UTI for the preview request.
- [QLPreviewRequestCopyOptions](qlpreviewrequestcopyoptions%28__%29.md): Deprecated. Returns the options specified for the preview request.
- [QLPreviewRequestCopyURL](qlpreviewrequestcopyurl%28__%29.md): Deprecated. Returns the URL of the document for which a preview is requested.
- [QLPreviewRequestCreateContext](qlpreviewrequestcreatecontext%28________%29.md): Deprecated. Creates a graphics context to draw the preview in.
- [QLPreviewRequestFlushContext](qlpreviewrequestflushcontext%28____%29.md): Deprecated. Flush the context and sets the preview response.
- [QLPreviewRequestGetDocumentObject](qlpreviewrequestgetdocumentobject%28__%29.md): Deprecated. Returns the object that’s stored as part of a preview request.
- [QLPreviewRequestSetDocumentObject](qlpreviewrequestsetdocumentobject%28______%29.md): Deprecated. Stores an object as part of a preview request.
- [QLPreviewRequestGetGeneratorBundle](qlpreviewrequestgetgeneratorbundle%28__%29.md): Deprecated. Get the bundle of the generator receiving the preview request.
- [QLPreviewRequestGetTypeID](qlpreviewrequestgettypeid%28%29.md): Deprecated. Gets the type identifier for the `QLPreviewReqest` opaque type.
- [QLPreviewRequestIsCancelled](qlpreviewrequestiscancelled%28__%29.md): Deprecated. Returns whether the preview request has been cancelled by the client.
- [QLPreviewRequestSetDataRepresentation](qlpreviewrequestsetdatarepresentation%28________%29.md): Deprecated. Sets the preview request to data saved within the document or to dynamically generated data.
- [QLPreviewRequestSetURLRepresentation](qlpreviewrequestseturlrepresentation%28________%29.md): Deprecated. Sets the contents of the file at the given URL as the response to the preview request.
