> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quicklook/qlpreviewrequestsetdatarepresentation(_:_:_:_:)](https://developer.apple.com/documentation/quicklook/qlpreviewrequestsetdatarepresentation(_:_:_:_:))

# QLPreviewRequestSetDataRepresentation(\_:\_:\_:\_:) (Swift)

**Framework:** Quick Look  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 12.0)

Sets the preview request to data saved within the document or to dynamically generated data.

> Use a QLPreviewingController in a Preview Extension to provide previews for your file types.

## Declaration

```swift
func QLPreviewRequestSetDataRepresentation(_ preview: QLPreviewRequest!, _ data: CFData!, _ contentTypeUTI: CFString!, _ properties: CFDictionary!)
```

## Parameters

- `preview`: The preview request object.
- `data`: The data of the preview returned to the client.
- `contentTypeUTI`: The UTI specifying the content type of the preview.
- `properties`: Additional properties for the preview response. For more on supported keys and values for this dictionary, see `Preview Properties`. If the saved data is HTML, you may specify a special set of properties; see the discussion below for more information.

<a id="Discussion"></a>

## Discussion

This function returns preview data to the client. The data is either extracted from a document where the document’s application has saved it, or it’s dynamically generated. How Quick Look handles the data depends upon the value of `contentTypeUTI`. The content data of the preview must be of a native Quick Look type. Currently supported UTIs for these types are: `kUTTypeImage`, `kUTTypePDF`, `kUTTypeHTML`, `kUTTypeXML`, `kUTTypePlainText`, `kUTTypeRTF`, `kUTTypeMovie`, and `kUTTypeAudio`.

If the UTI type is `kUTTypeHTML`, you can have WebKit handle the layout and display of your preview. You must provide the HTML in `data` plus any attachments (for example, Address Book cards, Mail messages, or Omni Outliner documents) in the `properties` dictionary. This dictionary takes [kQLPreviewPropertyAttachmentsKey](kqlpreviewpropertyattachmentskey.md) as its key and consists of one ore more subdictionaries (one per attachment). Each subdictionary uses an arbitrary string identifier as a key; the attachment should be referenced within the HTML data using the kQLPreviewContentIDScheme URL scheme (“cid”) and the identifier as the URL resource specifier—for example, “cid:the_identifier”. The keys of the subdictionary properties are [kQLPreviewPropertyMIMETypeKey](kqlpreviewpropertymimetypekey.md), [kQLPreviewPropertyTextEncodingNameKey](kqlpreviewpropertytextencodingnamekey.md), and [kQLPreviewPropertyAttachmentDataKey](kqlpreviewpropertyattachmentdatakey.md).

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
- [QLPreviewRequestFlushContext(\_:\_:)](qlpreviewrequestflushcontext%28____%29.md): Deprecated. Flush the context and sets the preview response.
- [QLPreviewRequestGetDocumentObject(\_:)](qlpreviewrequestgetdocumentobject%28__%29.md): Deprecated. Returns the object that’s stored as part of a preview request.
- [QLPreviewRequestSetDocumentObject(\_:\_:\_:)](qlpreviewrequestsetdocumentobject%28______%29.md): Deprecated. Stores an object as part of a preview request.
- [QLPreviewRequestGetGeneratorBundle(\_:)](qlpreviewrequestgetgeneratorbundle%28__%29.md): Deprecated. Get the bundle of the generator receiving the preview request.
- [QLPreviewRequestGetTypeID()](qlpreviewrequestgettypeid%28%29.md): Deprecated. Gets the type identifier for the `QLPreviewReqest` opaque type.
- [QLPreviewRequestIsCancelled(\_:)](qlpreviewrequestiscancelled%28__%29.md): Deprecated. Returns whether the preview request has been cancelled by the client.
- [QLPreviewRequestSetURLRepresentation(\_:\_:\_:\_:)](qlpreviewrequestseturlrepresentation%28________%29.md): Deprecated. Sets the contents of the file at the given URL as the response to the preview request.

# QLPreviewRequestSetDataRepresentation (Objective-C)

**Framework:** Quick Look  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 12.0)

Sets the preview request to data saved within the document or to dynamically generated data.

> Use a QLPreviewingController in a Preview Extension to provide previews for your file types.

## Declaration

```objectivec
extern void QLPreviewRequestSetDataRepresentation(QLPreviewRequestRef preview, CFDataRef data, CFStringRef contentTypeUTI, CFDictionaryRef properties);
```

## Parameters

- `preview`: The preview request object.
- `data`: The data of the preview returned to the client.
- `contentTypeUTI`: The UTI specifying the content type of the preview.
- `properties`: Additional properties for the preview response. For more on supported keys and values for this dictionary, see `Preview Properties`. If the saved data is HTML, you may specify a special set of properties; see the discussion below for more information.

<a id="Discussion"></a>

## Discussion

This function returns preview data to the client. The data is either extracted from a document where the document’s application has saved it, or it’s dynamically generated. How Quick Look handles the data depends upon the value of `contentTypeUTI`. The content data of the preview must be of a native Quick Look type. Currently supported UTIs for these types are: `kUTTypeImage`, `kUTTypePDF`, `kUTTypeHTML`, `kUTTypeXML`, `kUTTypePlainText`, `kUTTypeRTF`, `kUTTypeMovie`, and `kUTTypeAudio`.

If the UTI type is `kUTTypeHTML`, you can have WebKit handle the layout and display of your preview. You must provide the HTML in `data` plus any attachments (for example, Address Book cards, Mail messages, or Omni Outliner documents) in the `properties` dictionary. This dictionary takes [kQLPreviewPropertyAttachmentsKey](kqlpreviewpropertyattachmentskey.md) as its key and consists of one ore more subdictionaries (one per attachment). Each subdictionary uses an arbitrary string identifier as a key; the attachment should be referenced within the HTML data using the kQLPreviewContentIDScheme URL scheme (“cid”) and the identifier as the URL resource specifier—for example, “cid:the_identifier”. The keys of the subdictionary properties are [kQLPreviewPropertyMIMETypeKey](kqlpreviewpropertymimetypekey.md), [kQLPreviewPropertyTextEncodingNameKey](kqlpreviewpropertytextencodingnamekey.md), and [kQLPreviewPropertyAttachmentDataKey](kqlpreviewpropertyattachmentdatakey.md).

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
- [QLPreviewRequestFlushContext](qlpreviewrequestflushcontext%28____%29.md): Deprecated. Flush the context and sets the preview response.
- [QLPreviewRequestGetDocumentObject](qlpreviewrequestgetdocumentobject%28__%29.md): Deprecated. Returns the object that’s stored as part of a preview request.
- [QLPreviewRequestSetDocumentObject](qlpreviewrequestsetdocumentobject%28______%29.md): Deprecated. Stores an object as part of a preview request.
- [QLPreviewRequestGetGeneratorBundle](qlpreviewrequestgetgeneratorbundle%28__%29.md): Deprecated. Get the bundle of the generator receiving the preview request.
- [QLPreviewRequestGetTypeID](qlpreviewrequestgettypeid%28%29.md): Deprecated. Gets the type identifier for the `QLPreviewReqest` opaque type.
- [QLPreviewRequestIsCancelled](qlpreviewrequestiscancelled%28__%29.md): Deprecated. Returns whether the preview request has been cancelled by the client.
- [QLPreviewRequestSetURLRepresentation](qlpreviewrequestseturlrepresentation%28________%29.md): Deprecated. Sets the contents of the file at the given URL as the response to the preview request.
