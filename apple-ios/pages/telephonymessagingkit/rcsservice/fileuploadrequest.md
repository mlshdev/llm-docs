> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/telephonymessagingkit/rcsservice/fileuploadrequest](https://developer.apple.com/documentation/telephonymessagingkit/rcsservice/fileuploadrequest)

# RCSService.FileUploadRequest

**Framework:** TelephonyMessagingKit  
**Kind:** Structure  
**Availability:** iOS 26.0+

A structure that represents an RCS file upload request.

## Declaration

```swift
struct FileUploadRequest
```

## Topics

### Creating a file upload request

- [init(cellularServiceID:fileURL:contentType:thumbnailURL:thumbnailContentType:)](fileuploadrequest/init%28cellularserviceid_fileurl_contenttype_thumbnailurl_thumbnailcontenttype_%29.md): Creates a new file upload request with the given parameters.

### Accessing upload request properties

- [cellularServiceID](fileuploadrequest/cellularserviceid.md): The service identifier associated with this request.
- [fileURL](fileuploadrequest/fileurl.md): The URL of the file to upload.
- [contentType](fileuploadrequest/contenttype.md): The content type of the file.
- [thumbnailURL](fileuploadrequest/thumbnailurl.md): An optional file URL for a thumbnail image.
- [thumbnailContentType](fileuploadrequest/thumbnailcontenttype.md): The content type of the thumbnail.

### Accessing upload metadata

- [RCSService.FileUploadRequest.Metadata](fileuploadrequest/metadata.md): A structure that contains upload metadata from the content server.

### Supporting RCS encryption

- [isEndToEndEncrypted](fileuploadrequest/isendtoendencrypted.md): A Boolean value indicating whether this request should be end-to-end encrypted. If the service does not support end-to-end encryption, the operation will throw [RCSService.Error.endToEndEncryptionNotSupported](error/endtoendencryptionnotsupported.md).

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Transferring files

- [upload(\_:)](upload%28__%29.md): Uploads a file to the RCS content server.
- [RCSService.FileUploadRequest.Metadata](fileuploadrequest/metadata.md): A structure that contains upload metadata from the content server.
- [download(\_:)](download%28__%29.md): Downloads a file from the RCS content server.
- [RCSService.FileDownloadRequest](filedownloadrequest.md): A structure that represents an RCS file download request.
- [RCSService.FileDownloadRequest.Metadata](filedownloadrequest/metadata.md): A structure that contains download metadata from the content server.
