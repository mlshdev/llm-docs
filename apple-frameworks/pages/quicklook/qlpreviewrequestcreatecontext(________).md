> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quicklook/qlpreviewrequestcreatecontext(_:_:_:_:)](https://developer.apple.com/documentation/quicklook/qlpreviewrequestcreatecontext(_:_:_:_:))

# QLPreviewRequestCreateContext(\_:\_:\_:\_:) (Swift)

**Framework:** Quick Look  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 12.0)

Creates a graphics context to draw the preview in.

> Use a QLPreviewingController in a Preview Extension to provide previews for your file types.

## Declaration

```swift
func QLPreviewRequestCreateContext(_ preview: QLPreviewRequest!, _ size: CGSize, _ isBitmap: Bool, _ properties: CFDictionary!) -> Unmanaged<CGContext>!
```

## Parameters

- `preview`: The preview request object.
- `size`: The size of the preview; if `isBitmap` is `true` the size is in pixels, otherwise it’s in points.
- `isBitmap`: `true` if the preview uses a bitmap-based graphics context, `false` otherwise. This value of this parameter affects the interpretation of the `size` parameter.
- `properties`: A dictionary containing properties for the preview response. `Preview Properties` lists the current property keys and describes their values.

<a id="return-value"></a>

## Return Value

A Core Graphics graphics-context object that you can draw your preview image in. You should explicitly release this object when it is no longer needed.

<a id="Discussion"></a>

## Discussion

You can directly draw your preview data in the graphics-context object created by this function. After calling this function, you should flush the context with [QLPreviewRequestFlushContext(\_:\_:)](qlpreviewrequestflushcontext%28____%29.md). Also be sure to release the `CGContext` object.

Quick Look provides three types of graphics contexts for drawing previews: bitmap, single-page vector-based, and multi-page vector-based (for PDF previews). You use this function to acquire a context for bitmap and single-page vector drawing; the `isBitmap` parameter is used to distinguish between them. For multi-page contexts, use the [QLPreviewRequestCreatePDFContext(\_:\_:\_:\_:)](qlpreviewrequestcreatepdfcontext%28________%29.md) function.

If you prefer to work in Objective-C code, you can convert the created [CGContext](../coregraphics/cgcontext.md) to a [NSGraphicsContext](https://developer.apple.com/documentation/appkit/nsgraphicscontext) object using [init(graphicsPort:flipped:)](https://developer.apple.com/documentation/appkit/nsgraphicscontext/init%28graphicsport:flipped:%29).

<a id="Special-Considerations"></a>

### Special Considerations

Thread-safety: This function should be called in the same thread as the preview request is made in; generally, this is the same thread in which the `GeneratePreviewForURL` callback was invoked.

## See Also

### Requesting previews

- [QLPreviewRequestCopyContentUTI(\_:)](qlpreviewrequestcopycontentuti%28__%29.md): Deprecated. Returns the UTI for the preview request.
- [QLPreviewRequestCopyOptions(\_:)](qlpreviewrequestcopyoptions%28__%29.md): Deprecated. Returns the options specified for the preview request.
- [QLPreviewRequestCopyURL(\_:)](qlpreviewrequestcopyurl%28__%29.md): Deprecated. Returns the URL of the document for which a preview is requested.
- [QLPreviewRequestCreatePDFContext(\_:\_:\_:\_:)](qlpreviewrequestcreatepdfcontext%28________%29.md): Deprecated. Creates a PDF context suitable to draw a multi-page preview.
- [QLPreviewRequestFlushContext(\_:\_:)](qlpreviewrequestflushcontext%28____%29.md): Deprecated. Flush the context and sets the preview response.
- [QLPreviewRequestGetDocumentObject(\_:)](qlpreviewrequestgetdocumentobject%28__%29.md): Deprecated. Returns the object that’s stored as part of a preview request.
- [QLPreviewRequestSetDocumentObject(\_:\_:\_:)](qlpreviewrequestsetdocumentobject%28______%29.md): Deprecated. Stores an object as part of a preview request.
- [QLPreviewRequestGetGeneratorBundle(\_:)](qlpreviewrequestgetgeneratorbundle%28__%29.md): Deprecated. Get the bundle of the generator receiving the preview request.
- [QLPreviewRequestGetTypeID()](qlpreviewrequestgettypeid%28%29.md): Deprecated. Gets the type identifier for the `QLPreviewReqest` opaque type.
- [QLPreviewRequestIsCancelled(\_:)](qlpreviewrequestiscancelled%28__%29.md): Deprecated. Returns whether the preview request has been cancelled by the client.
- [QLPreviewRequestSetDataRepresentation(\_:\_:\_:\_:)](qlpreviewrequestsetdatarepresentation%28________%29.md): Deprecated. Sets the preview request to data saved within the document or to dynamically generated data.
- [QLPreviewRequestSetURLRepresentation(\_:\_:\_:\_:)](qlpreviewrequestseturlrepresentation%28________%29.md): Deprecated. Sets the contents of the file at the given URL as the response to the preview request.

# QLPreviewRequestCreateContext (Objective-C)

**Framework:** Quick Look  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 12.0)

Creates a graphics context to draw the preview in.

> Use a QLPreviewingController in a Preview Extension to provide previews for your file types.

## Declaration

```objectivec
extern CGContextRefQLPreviewRequestCreateContext(QLPreviewRequestRef preview, CGSize size, Boolean isBitmap, CFDictionaryRef properties);
```

## Parameters

- `preview`: The preview request object.
- `size`: The size of the preview; if `isBitmap` is `true` the size is in pixels, otherwise it’s in points.
- `isBitmap`: `true` if the preview uses a bitmap-based graphics context, `false` otherwise. This value of this parameter affects the interpretation of the `size` parameter.
- `properties`: A dictionary containing properties for the preview response. `Preview Properties` lists the current property keys and describes their values.

<a id="return-value"></a>

## Return Value

A Core Graphics graphics-context object that you can draw your preview image in. You should explicitly release this object when it is no longer needed.

<a id="Discussion"></a>

## Discussion

You can directly draw your preview data in the graphics-context object created by this function. After calling this function, you should flush the context with [QLPreviewRequestFlushContext](qlpreviewrequestflushcontext%28____%29.md). Also be sure to release the `CGContext` object.

Quick Look provides three types of graphics contexts for drawing previews: bitmap, single-page vector-based, and multi-page vector-based (for PDF previews). You use this function to acquire a context for bitmap and single-page vector drawing; the `isBitmap` parameter is used to distinguish between them. For multi-page contexts, use the [QLPreviewRequestCreatePDFContext](qlpreviewrequestcreatepdfcontext%28________%29.md) function.

If you prefer to work in Objective-C code, you can convert the created [CGContextRef](../coregraphics/cgcontext.md) to a [NSGraphicsContext](https://developer.apple.com/documentation/appkit/nsgraphicscontext) object using [graphicsContextWithGraphicsPort:flipped:](https://developer.apple.com/documentation/appkit/nsgraphicscontext/init%28graphicsport:flipped:%29).

<a id="Special-Considerations"></a>

### Special Considerations

Thread-safety: This function should be called in the same thread as the preview request is made in; generally, this is the same thread in which the `GeneratePreviewForURL` callback was invoked.

## See Also

### Requesting previews

- [QLPreviewRequestCopyContentUTI](qlpreviewrequestcopycontentuti%28__%29.md): Deprecated. Returns the UTI for the preview request.
- [QLPreviewRequestCopyOptions](qlpreviewrequestcopyoptions%28__%29.md): Deprecated. Returns the options specified for the preview request.
- [QLPreviewRequestCopyURL](qlpreviewrequestcopyurl%28__%29.md): Deprecated. Returns the URL of the document for which a preview is requested.
- [QLPreviewRequestCreatePDFContext](qlpreviewrequestcreatepdfcontext%28________%29.md): Deprecated. Creates a PDF context suitable to draw a multi-page preview.
- [QLPreviewRequestFlushContext](qlpreviewrequestflushcontext%28____%29.md): Deprecated. Flush the context and sets the preview response.
- [QLPreviewRequestGetDocumentObject](qlpreviewrequestgetdocumentobject%28__%29.md): Deprecated. Returns the object that’s stored as part of a preview request.
- [QLPreviewRequestSetDocumentObject](qlpreviewrequestsetdocumentobject%28______%29.md): Deprecated. Stores an object as part of a preview request.
- [QLPreviewRequestGetGeneratorBundle](qlpreviewrequestgetgeneratorbundle%28__%29.md): Deprecated. Get the bundle of the generator receiving the preview request.
- [QLPreviewRequestGetTypeID](qlpreviewrequestgettypeid%28%29.md): Deprecated. Gets the type identifier for the `QLPreviewReqest` opaque type.
- [QLPreviewRequestIsCancelled](qlpreviewrequestiscancelled%28__%29.md): Deprecated. Returns whether the preview request has been cancelled by the client.
- [QLPreviewRequestSetDataRepresentation](qlpreviewrequestsetdatarepresentation%28________%29.md): Deprecated. Sets the preview request to data saved within the document or to dynamically generated data.
- [QLPreviewRequestSetURLRepresentation](qlpreviewrequestseturlrepresentation%28________%29.md): Deprecated. Sets the contents of the file at the given URL as the response to the preview request.
