> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/telephonymessagingkit/rcsservice/fileuploadrequest/metadata](https://developer.apple.com/documentation/telephonymessagingkit/rcsservice/fileuploadrequest/metadata)

# RCSService.FileUploadRequest.Metadata

**Framework:** TelephonyMessagingKit  
**Kind:** Structure  
**Availability:** iOS 26.0+

A structure that contains upload metadata from the content server.

## Declaration

```swift
struct Metadata
```

<a id="overview"></a>

## Overview

You receive this type as the return value from the [upload(\_:)](../upload%28__%29.md) method of [RCSService](../../rcsservice.md).

## Topics

### Accessing upload metadata

- [transactionID](metadata/transactionid.md): A transaction identifier for the upload.
- [fileMetadata](metadata/filemetadata.md): Metadata for the uploaded file.
- [thumbnailMetadata](metadata/thumbnailmetadata.md): Metadata for the uploaded thumbnail.
- [RCSFileTransferMetadata](../../rcsfiletransfermetadata.md): A structure that contains metadata about an RCS file transfer.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Transferring files

- [upload(\_:)](../upload%28__%29.md): Uploads a file to the RCS content server.
- [RCSService.FileUploadRequest](../fileuploadrequest.md): A structure that represents an RCS file upload request.
- [download(\_:)](../download%28__%29.md): Downloads a file from the RCS content server.
- [RCSService.FileDownloadRequest](../filedownloadrequest.md): A structure that represents an RCS file download request.
- [RCSService.FileDownloadRequest.Metadata](../filedownloadrequest/metadata.md): A structure that contains download metadata from the content server.
