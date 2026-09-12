> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quicklook/qlthumbnailrequestsetimagewithdata(_:_:_:)](https://developer.apple.com/documentation/quicklook/qlthumbnailrequestsetimagewithdata(_:_:_:))

# QLThumbnailRequestSetImageWithData(\_:\_:\_:) (Swift)

**Framework:** Quick Look  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 12.0)

Sets the response to the thumbnail request to image data saved within the document.

> Use a QLThumbnailReply in a Thumbnail Extension to provide thumbnails for your file types.

## Declaration

```swift
func QLThumbnailRequestSetImageWithData(_ thumbnail: QLThumbnailRequest!, _ data: CFData!, _ properties: CFDictionary!)
```

## Parameters

- `thumbnail`: The thumbnail request object.
- `data`: The image data, which must be in a format supported by the Image I/O framework (JPG, PNG, and so on). In other words, a content type of `kUTTypeImage` is assumed. (`ImageIO.framework` is a subframework of the umbrella Application Services framework.)
- `properties`: A dictionary of properties. The only property that you can currently specify is kCGImageSourceTypeIdentifierHint; see [Quartz 2D Programming Guide](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/drawingwithquartz2d/Introduction/Introduction.html#//apple_ref/doc/uid/TP30001066) for information about this property.

<a id="Discussion"></a>

## Discussion

This function returns the thumbnail as a `CFData` object containing image data. The document’s application must save this data as part of the document’s data; the generator retrieves it and uses this function to return it to the client. Before you call this function, call [QLThumbnailRequestGetMaximumSize(\_:)](qlthumbnailrequestgetmaximumsize%28__%29.md) to obtain the maximum allowed size for the thumbnail and resize the image if necessary.

<a id="Special-Considerations"></a>

### Special Considerations

Thread-safety: This function should be called in the same thread as the thumbnail request is made in; generally, this is the same thread in which the `GenerateThumbnailForURL` callback was invoked.

## See Also

### Handling thumbnail requests

- [QLThumbnailRequestCopyContentUTI(\_:)](qlthumbnailrequestcopycontentuti%28__%29.md): Deprecated. Returns the UTI for the thumbnail request.
- [QLThumbnailRequestCopyOptions(\_:)](qlthumbnailrequestcopyoptions%28__%29.md): Deprecated. Returns the options specified for the thumbnail request.
- [QLThumbnailRequestCopyURL(\_:)](qlthumbnailrequestcopyurl%28__%29.md): Deprecated. Returns the URL of the document for which the thumbnail request is requested.
- [QLThumbnailRequestCreateContext(\_:\_:\_:\_:)](qlthumbnailrequestcreatecontext%28________%29.md): Deprecated. Creates a graphics context to draw the thumbnail in.
- [QLThumbnailRequestFlushContext(\_:\_:)](qlthumbnailrequestflushcontext%28____%29.md): Deprecated. Flush the graphics context and sets the thumbnail response.
- [QLThumbnailRequestGetDocumentObject(\_:)](qlthumbnailrequestgetdocumentobject%28__%29.md): Deprecated. Returns the object that’s stored as part of a thumbnail request.
- [QLThumbnailRequestGetGeneratorBundle(\_:)](qlthumbnailrequestgetgeneratorbundle%28__%29.md): Deprecated. Get the bundle of the generator receiving the thumbnail request.
- [QLThumbnailRequestGetMaximumSize(\_:)](qlthumbnailrequestgetmaximumsize%28__%29.md): Deprecated. Returns the maximum size (in points) specified for the thumbnail image.
- [QLThumbnailRequestGetTypeID()](qlthumbnailrequestgettypeid%28%29.md): Deprecated. Gets the type identifier for the `QLThumbnailRequest` opaque type.
- [QLThumbnailRequestIsCancelled(\_:)](qlthumbnailrequestiscancelled%28__%29.md): Deprecated. Returns whether the thumbnail request has been cancelled by the client.
- [QLThumbnailRequestSetDocumentObject(\_:\_:\_:)](qlthumbnailrequestsetdocumentobject%28______%29.md): Deprecated. Stores an object as part of a thumbnail request.
- [QLThumbnailRequestSetImage(\_:\_:\_:)](qlthumbnailrequestsetimage%28______%29.md): Deprecated. Sets the thumbnail request to a specified image.
- [QLThumbnailRequestSetImageAtURL(\_:\_:\_:)](qlthumbnailrequestsetimageaturl%28______%29.md): Deprecated. Sets the thumbnail request to contain the image at a given URL.
- [QLThumbnailRequestSetThumbnailWithDataRepresentation(\_:\_:\_:\_:\_:)](qlthumbnailrequestsetthumbnailwithdatarepresentation%28__________%29.md): Deprecated. Sets the default image representation for an item with the provided data and specified file type.
- [QLThumbnailRequestSetThumbnailWithURLRepresentation(\_:\_:\_:\_:\_:)](qlthumbnailrequestsetthumbnailwithurlrepresentation%28__________%29.md): Deprecated. Sets the default image representation for an item of a given type at the specified URL.

# QLThumbnailRequestSetImageWithData (Objective-C)

**Framework:** Quick Look  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 12.0)

Sets the response to the thumbnail request to image data saved within the document.

> Use a QLThumbnailReply in a Thumbnail Extension to provide thumbnails for your file types.

## Declaration

```objectivec
extern void QLThumbnailRequestSetImageWithData(QLThumbnailRequestRef thumbnail, CFDataRef data, CFDictionaryRef properties);
```

## Parameters

- `thumbnail`: The thumbnail request object.
- `data`: The image data, which must be in a format supported by the Image I/O framework (JPG, PNG, and so on). In other words, a content type of `kUTTypeImage` is assumed. (`ImageIO.framework` is a subframework of the umbrella Application Services framework.)
- `properties`: A dictionary of properties. The only property that you can currently specify is kCGImageSourceTypeIdentifierHint; see [Quartz 2D Programming Guide](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/drawingwithquartz2d/Introduction/Introduction.html#//apple_ref/doc/uid/TP30001066) for information about this property.

<a id="Discussion"></a>

## Discussion

This function returns the thumbnail as a `CFData` object containing image data. The document’s application must save this data as part of the document’s data; the generator retrieves it and uses this function to return it to the client. Before you call this function, call [QLThumbnailRequestGetMaximumSize](qlthumbnailrequestgetmaximumsize%28__%29.md) to obtain the maximum allowed size for the thumbnail and resize the image if necessary.

<a id="Special-Considerations"></a>

### Special Considerations

Thread-safety: This function should be called in the same thread as the thumbnail request is made in; generally, this is the same thread in which the `GenerateThumbnailForURL` callback was invoked.

## See Also

### Handling thumbnail requests

- [QLThumbnailRequestCopyContentUTI](qlthumbnailrequestcopycontentuti%28__%29.md): Deprecated. Returns the UTI for the thumbnail request.
- [QLThumbnailRequestCopyOptions](qlthumbnailrequestcopyoptions%28__%29.md): Deprecated. Returns the options specified for the thumbnail request.
- [QLThumbnailRequestCopyURL](qlthumbnailrequestcopyurl%28__%29.md): Deprecated. Returns the URL of the document for which the thumbnail request is requested.
- [QLThumbnailRequestCreateContext](qlthumbnailrequestcreatecontext%28________%29.md): Deprecated. Creates a graphics context to draw the thumbnail in.
- [QLThumbnailRequestFlushContext](qlthumbnailrequestflushcontext%28____%29.md): Deprecated. Flush the graphics context and sets the thumbnail response.
- [QLThumbnailRequestGetDocumentObject](qlthumbnailrequestgetdocumentobject%28__%29.md): Deprecated. Returns the object that’s stored as part of a thumbnail request.
- [QLThumbnailRequestGetGeneratorBundle](qlthumbnailrequestgetgeneratorbundle%28__%29.md): Deprecated. Get the bundle of the generator receiving the thumbnail request.
- [QLThumbnailRequestGetMaximumSize](qlthumbnailrequestgetmaximumsize%28__%29.md): Deprecated. Returns the maximum size (in points) specified for the thumbnail image.
- [QLThumbnailRequestGetTypeID](qlthumbnailrequestgettypeid%28%29.md): Deprecated. Gets the type identifier for the `QLThumbnailRequest` opaque type.
- [QLThumbnailRequestIsCancelled](qlthumbnailrequestiscancelled%28__%29.md): Deprecated. Returns whether the thumbnail request has been cancelled by the client.
- [QLThumbnailRequestSetDocumentObject](qlthumbnailrequestsetdocumentobject%28______%29.md): Deprecated. Stores an object as part of a thumbnail request.
- [QLThumbnailRequestSetImage](qlthumbnailrequestsetimage%28______%29.md): Deprecated. Sets the thumbnail request to a specified image.
- [QLThumbnailRequestSetImageAtURL](qlthumbnailrequestsetimageaturl%28______%29.md): Deprecated. Sets the thumbnail request to contain the image at a given URL.
- [QLThumbnailRequestSetThumbnailWithDataRepresentation](qlthumbnailrequestsetthumbnailwithdatarepresentation%28__________%29.md): Deprecated. Sets the default image representation for an item with the provided data and specified file type.
- [QLThumbnailRequestSetThumbnailWithURLRepresentation](qlthumbnailrequestsetthumbnailwithurlrepresentation%28__________%29.md): Deprecated. Sets the default image representation for an item of a given type at the specified URL.
