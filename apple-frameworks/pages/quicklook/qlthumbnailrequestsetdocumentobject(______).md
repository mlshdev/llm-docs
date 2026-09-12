> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quicklook/qlthumbnailrequestsetdocumentobject(_:_:_:)](https://developer.apple.com/documentation/quicklook/qlthumbnailrequestsetdocumentobject(_:_:_:))

# QLThumbnailRequestSetDocumentObject(\_:\_:\_:) (Swift)

**Framework:** Quick Look  
**Kind:** Function  
**Availability:** macOS 10.6+ (deprecated in 12.0)

Stores an object as part of a thumbnail request.

> Use a QLFileThumbnailRequest in a Thumbnail Extension to provide thumbnails for your file types.

## Declaration

```swift
func QLThumbnailRequestSetDocumentObject(_ thumbnail: QLThumbnailRequest!, _ object: UnsafeRawPointer!, _ callbacks: UnsafePointer<CFArrayCallBacks>!)
```

## Parameters

- `thumbnail`: The thumbnail request.
- `object`: The object that you want to associate with the thumbnail request.
- `callbacks`: Callbacks for retaining or releasing the object that you want to store as part of the thumbnail request.

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
- [QLThumbnailRequestSetImage(\_:\_:\_:)](qlthumbnailrequestsetimage%28______%29.md): Deprecated. Sets the thumbnail request to a specified image.
- [QLThumbnailRequestSetImageAtURL(\_:\_:\_:)](qlthumbnailrequestsetimageaturl%28______%29.md): Deprecated. Sets the thumbnail request to contain the image at a given URL.
- [QLThumbnailRequestSetImageWithData(\_:\_:\_:)](qlthumbnailrequestsetimagewithdata%28______%29.md): Deprecated. Sets the response to the thumbnail request to image data saved within the document.
- [QLThumbnailRequestSetThumbnailWithDataRepresentation(\_:\_:\_:\_:\_:)](qlthumbnailrequestsetthumbnailwithdatarepresentation%28__________%29.md): Deprecated. Sets the default image representation for an item with the provided data and specified file type.
- [QLThumbnailRequestSetThumbnailWithURLRepresentation(\_:\_:\_:\_:\_:)](qlthumbnailrequestsetthumbnailwithurlrepresentation%28__________%29.md): Deprecated. Sets the default image representation for an item of a given type at the specified URL.

# QLThumbnailRequestSetDocumentObject (Objective-C)

**Framework:** Quick Look  
**Kind:** Function  
**Availability:** macOS 10.6+ (deprecated in 12.0)

Stores an object as part of a thumbnail request.

> Use a QLFileThumbnailRequest in a Thumbnail Extension to provide thumbnails for your file types.

## Declaration

```objectivec
extern void QLThumbnailRequestSetDocumentObject(QLThumbnailRequestRef thumbnail, const void *object, const CFArrayCallBacks *callbacks);
```

## Parameters

- `thumbnail`: The thumbnail request.
- `object`: The object that you want to associate with the thumbnail request.
- `callbacks`: Callbacks for retaining or releasing the object that you want to store as part of the thumbnail request.

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
- [QLThumbnailRequestSetImage](qlthumbnailrequestsetimage%28______%29.md): Deprecated. Sets the thumbnail request to a specified image.
- [QLThumbnailRequestSetImageAtURL](qlthumbnailrequestsetimageaturl%28______%29.md): Deprecated. Sets the thumbnail request to contain the image at a given URL.
- [QLThumbnailRequestSetImageWithData](qlthumbnailrequestsetimagewithdata%28______%29.md): Deprecated. Sets the response to the thumbnail request to image data saved within the document.
- [QLThumbnailRequestSetThumbnailWithDataRepresentation](qlthumbnailrequestsetthumbnailwithdatarepresentation%28__________%29.md): Deprecated. Sets the default image representation for an item with the provided data and specified file type.
- [QLThumbnailRequestSetThumbnailWithURLRepresentation](qlthumbnailrequestsetthumbnailwithurlrepresentation%28__________%29.md): Deprecated. Sets the default image representation for an item of a given type at the specified URL.
