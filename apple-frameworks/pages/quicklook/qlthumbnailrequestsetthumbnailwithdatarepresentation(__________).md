> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quicklook/qlthumbnailrequestsetthumbnailwithdatarepresentation(_:_:_:_:_:)](https://developer.apple.com/documentation/quicklook/qlthumbnailrequestsetthumbnailwithdatarepresentation(_:_:_:_:_:))

# QLThumbnailRequestSetThumbnailWithDataRepresentation(\_:\_:\_:\_:\_:) (Swift)

**Framework:** Quick Look  
**Kind:** Function  
**Availability:** macOS 10.6+ (deprecated in 12.0)

Sets the default image representation for an item with the provided data and specified file type.

> Use a QLThumbnailReply in a Thumbnail Extension to provide thumbnails for your file types.

## Declaration

```swift
func QLThumbnailRequestSetThumbnailWithDataRepresentation(_ thumbnail: QLThumbnailRequest!, _ data: CFData!, _ contentTypeUTI: CFString!, _ previewProperties: CFDictionary!, _ properties: CFDictionary!)
```

## Parameters

- `thumbnail`: The thumbnail request object.
- `data`: The content data.
- `contentTypeUTI`: The UTI of the content for the preview representation.
- `previewProperties`: Additional properties for the preview response.
- `properties`: A dictionary of properties for the thumbnail. macOS doesn’t support any properties.

<a id="Discussion"></a>

## Discussion

There are currently no supported UTIs. This call only works if you set your generator to run on the main thread.

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
- [QLThumbnailRequestSetImageWithData(\_:\_:\_:)](qlthumbnailrequestsetimagewithdata%28______%29.md): Deprecated. Sets the response to the thumbnail request to image data saved within the document.
- [QLThumbnailRequestSetThumbnailWithURLRepresentation(\_:\_:\_:\_:\_:)](qlthumbnailrequestsetthumbnailwithurlrepresentation%28__________%29.md): Deprecated. Sets the default image representation for an item of a given type at the specified URL.

# QLThumbnailRequestSetThumbnailWithDataRepresentation (Objective-C)

**Framework:** Quick Look  
**Kind:** Function  
**Availability:** macOS 10.6+ (deprecated in 12.0)

Sets the default image representation for an item with the provided data and specified file type.

> Use a QLThumbnailReply in a Thumbnail Extension to provide thumbnails for your file types.

## Declaration

```objectivec
extern void QLThumbnailRequestSetThumbnailWithDataRepresentation(QLThumbnailRequestRef thumbnail, CFDataRef data, CFStringRef contentTypeUTI, CFDictionaryRef previewProperties, CFDictionaryRef properties);
```

## Parameters

- `thumbnail`: The thumbnail request object.
- `data`: The content data.
- `contentTypeUTI`: The UTI of the content for the preview representation.
- `previewProperties`: Additional properties for the preview response.
- `properties`: A dictionary of properties for the thumbnail. macOS doesn’t support any properties.

<a id="Discussion"></a>

## Discussion

There are currently no supported UTIs. This call only works if you set your generator to run on the main thread.

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
- [QLThumbnailRequestSetImageWithData](qlthumbnailrequestsetimagewithdata%28______%29.md): Deprecated. Sets the response to the thumbnail request to image data saved within the document.
- [QLThumbnailRequestSetThumbnailWithURLRepresentation](qlthumbnailrequestsetthumbnailwithurlrepresentation%28__________%29.md): Deprecated. Sets the default image representation for an item of a given type at the specified URL.
