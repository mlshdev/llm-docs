> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quicklook/qlthumbnailrequestcreatecontext(_:_:_:_:)](https://developer.apple.com/documentation/quicklook/qlthumbnailrequestcreatecontext(_:_:_:_:))

# QLThumbnailRequestCreateContext(\_:\_:\_:\_:) (Swift)

**Framework:** Quick Look  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 12.0)

Creates a graphics context to draw the thumbnail in.

> Use a QLThumbnailReply in a Thumbnail Extension to provide thumbnails for your file types.

## Declaration

```swift
func QLThumbnailRequestCreateContext(_ thumbnail: QLThumbnailRequest!, _ size: CGSize, _ isBitmap: Bool, _ properties: CFDictionary!) -> Unmanaged<CGContext>!
```

## Parameters

- `size`: The size of the thumbnail; if `isBitmap` is `true` the size is in pixels, otherwise it’s in points.
- `isBitmap`: `true` if the thumbnail data is bitmap-based, `false` if vector-based. This value of this parameter affects the interpretation of the `size` parameter.
- `properties`: A dictionary containing properties for the thumbnail response. For macOS 10.5, no properties have been defined.

<a id="return-value"></a>

## Return Value

A Core Graphics graphics-context object that you can draw your thumbnail image in. You should explicitly release this object when it is no longer needed.

<a id="Discussion"></a>

## Discussion

You can directly draw your thumbnail data in the graphics-context object created by this function. After calling this function, you should flush the context with [QLThumbnailRequestFlushContext(\_:\_:)](qlthumbnailrequestflushcontext%28____%29.md). Also be sure to release the `CGContext` object.

With this function you can create two types of graphics contexts for drawing thumbnails: bitmap and single-page vector-based; you use the `isBitmap` flag to distinguish between the two. Quick Look handles bitmap thumbnail context differently than non-bitmap contexts; in the latter case, Quick Look might scale the drawing up or down if necessary, and it respects the scale factor (for HiDPI support).

If you prefer to work in Objective-C code, you can convert the created [CGContext](../coregraphics/cgcontext.md) to a [NSGraphicsContext](https://developer.apple.com/documentation/appkit/nsgraphicscontext) object using [init(graphicsPort:flipped:)](https://developer.apple.com/documentation/appkit/nsgraphicscontext/init%28graphicsport:flipped:%29).

<a id="Special-Considerations"></a>

### Special Considerations

Thread-safety: This function should be called in the same thread as the thumbnail request is made in; generally, this is the same thread in which the `GenerateThumbnailForURL` callback was invoked.

## See Also

### Handling thumbnail requests

- [QLThumbnailRequestCopyContentUTI(\_:)](qlthumbnailrequestcopycontentuti%28__%29.md): Deprecated. Returns the UTI for the thumbnail request.
- [QLThumbnailRequestCopyOptions(\_:)](qlthumbnailrequestcopyoptions%28__%29.md): Deprecated. Returns the options specified for the thumbnail request.
- [QLThumbnailRequestCopyURL(\_:)](qlthumbnailrequestcopyurl%28__%29.md): Deprecated. Returns the URL of the document for which the thumbnail request is requested.
- [QLThumbnailRequestFlushContext(\_:\_:)](qlthumbnailrequestflushcontext%28____%29.md): Deprecated. Flush the graphics context and sets the thumbnail response.
- [QLThumbnailRequestGetDocumentObject(\_:)](qlthumbnailrequestgetdocumentobject%28__%29.md): Deprecated. Returns the object that’s stored as part of a thumbnail request.
- [QLThumbnailRequestGetGeneratorBundle(\_:)](qlthumbnailrequestgetgeneratorbundle%28__%29.md): Deprecated. Get the bundle of the generator receiving the thumbnail request.
- [QLThumbnailRequestGetMaximumSize(\_:)](qlthumbnailrequestgetmaximumsize%28__%29.md): Deprecated. Returns the maximum size (in points) specified for the thumbnail image.
- [QLThumbnailRequestGetTypeID()](qlthumbnailrequestgettypeid%28%29.md): Deprecated. Gets the type identifier for the `QLThumbnailRequest` opaque type.
- [QLThumbnailRequestIsCancelled(\_:)](qlthumbnailrequestiscancelled%28__%29.md): Deprecated. Returns whether the thumbnail request has been cancelled by the client.
- [QLThumbnailRequestSetDocumentObject(\_:\_:\_:)](qlthumbnailrequestsetdocumentobject%28______%29.md): Deprecated. Stores an object as part of a thumbnail request.
- [QLThumbnailRequestSetImage(\_:\_:\_:)](qlthumbnailrequestsetimage%28______%29.md): Deprecated. Sets the thumbnail request to a specified image.
- [QLThumbnailRequestSetImageAtURL(\_:\_:\_:)](qlthumbnailrequestsetimageaturl%28______%29.md): Deprecated. Sets the thumbnail request to contain the image at a given URL.
- [QLThumbnailRequestSetImageWithData(\_:\_:\_:)](qlthumbnailrequestsetimagewithdata%28______%29.md): Deprecated. Sets the response to the thumbnail request to image data saved within the document.
- [QLThumbnailRequestSetThumbnailWithDataRepresentation(\_:\_:\_:\_:\_:)](qlthumbnailrequestsetthumbnailwithdatarepresentation%28__________%29.md): Deprecated. Sets the default image representation for an item with the provided data and specified file type.
- [QLThumbnailRequestSetThumbnailWithURLRepresentation(\_:\_:\_:\_:\_:)](qlthumbnailrequestsetthumbnailwithurlrepresentation%28__________%29.md): Deprecated. Sets the default image representation for an item of a given type at the specified URL.

# QLThumbnailRequestCreateContext (Objective-C)

**Framework:** Quick Look  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 12.0)

Creates a graphics context to draw the thumbnail in.

> Use a QLThumbnailReply in a Thumbnail Extension to provide thumbnails for your file types.

## Declaration

```objectivec
extern CGContextRefQLThumbnailRequestCreateContext(QLThumbnailRequestRef thumbnail, CGSize size, Boolean isBitmap, CFDictionaryRef properties);
```

## Parameters

- `size`: The size of the thumbnail; if `isBitmap` is `true` the size is in pixels, otherwise it’s in points.
- `isBitmap`: `true` if the thumbnail data is bitmap-based, `false` if vector-based. This value of this parameter affects the interpretation of the `size` parameter.
- `properties`: A dictionary containing properties for the thumbnail response. For macOS 10.5, no properties have been defined.

<a id="return-value"></a>

## Return Value

A Core Graphics graphics-context object that you can draw your thumbnail image in. You should explicitly release this object when it is no longer needed.

<a id="Discussion"></a>

## Discussion

You can directly draw your thumbnail data in the graphics-context object created by this function. After calling this function, you should flush the context with [QLThumbnailRequestFlushContext](qlthumbnailrequestflushcontext%28____%29.md). Also be sure to release the `CGContext` object.

With this function you can create two types of graphics contexts for drawing thumbnails: bitmap and single-page vector-based; you use the `isBitmap` flag to distinguish between the two. Quick Look handles bitmap thumbnail context differently than non-bitmap contexts; in the latter case, Quick Look might scale the drawing up or down if necessary, and it respects the scale factor (for HiDPI support).

If you prefer to work in Objective-C code, you can convert the created [CGContextRef](../coregraphics/cgcontext.md) to a [NSGraphicsContext](https://developer.apple.com/documentation/appkit/nsgraphicscontext) object using [graphicsContextWithGraphicsPort:flipped:](https://developer.apple.com/documentation/appkit/nsgraphicscontext/init%28graphicsport:flipped:%29).

<a id="Special-Considerations"></a>

### Special Considerations

Thread-safety: This function should be called in the same thread as the thumbnail request is made in; generally, this is the same thread in which the `GenerateThumbnailForURL` callback was invoked.

## See Also

### Handling thumbnail requests

- [QLThumbnailRequestCopyContentUTI](qlthumbnailrequestcopycontentuti%28__%29.md): Deprecated. Returns the UTI for the thumbnail request.
- [QLThumbnailRequestCopyOptions](qlthumbnailrequestcopyoptions%28__%29.md): Deprecated. Returns the options specified for the thumbnail request.
- [QLThumbnailRequestCopyURL](qlthumbnailrequestcopyurl%28__%29.md): Deprecated. Returns the URL of the document for which the thumbnail request is requested.
- [QLThumbnailRequestFlushContext](qlthumbnailrequestflushcontext%28____%29.md): Deprecated. Flush the graphics context and sets the thumbnail response.
- [QLThumbnailRequestGetDocumentObject](qlthumbnailrequestgetdocumentobject%28__%29.md): Deprecated. Returns the object that’s stored as part of a thumbnail request.
- [QLThumbnailRequestGetGeneratorBundle](qlthumbnailrequestgetgeneratorbundle%28__%29.md): Deprecated. Get the bundle of the generator receiving the thumbnail request.
- [QLThumbnailRequestGetMaximumSize](qlthumbnailrequestgetmaximumsize%28__%29.md): Deprecated. Returns the maximum size (in points) specified for the thumbnail image.
- [QLThumbnailRequestGetTypeID](qlthumbnailrequestgettypeid%28%29.md): Deprecated. Gets the type identifier for the `QLThumbnailRequest` opaque type.
- [QLThumbnailRequestIsCancelled](qlthumbnailrequestiscancelled%28__%29.md): Deprecated. Returns whether the thumbnail request has been cancelled by the client.
- [QLThumbnailRequestSetDocumentObject](qlthumbnailrequestsetdocumentobject%28______%29.md): Deprecated. Stores an object as part of a thumbnail request.
- [QLThumbnailRequestSetImage](qlthumbnailrequestsetimage%28______%29.md): Deprecated. Sets the thumbnail request to a specified image.
- [QLThumbnailRequestSetImageAtURL](qlthumbnailrequestsetimageaturl%28______%29.md): Deprecated. Sets the thumbnail request to contain the image at a given URL.
- [QLThumbnailRequestSetImageWithData](qlthumbnailrequestsetimagewithdata%28______%29.md): Deprecated. Sets the response to the thumbnail request to image data saved within the document.
- [QLThumbnailRequestSetThumbnailWithDataRepresentation](qlthumbnailrequestsetthumbnailwithdatarepresentation%28__________%29.md): Deprecated. Sets the default image representation for an item with the provided data and specified file type.
- [QLThumbnailRequestSetThumbnailWithURLRepresentation](qlthumbnailrequestsetthumbnailwithurlrepresentation%28__________%29.md): Deprecated. Sets the default image representation for an item of a given type at the specified URL.
