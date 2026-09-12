> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/telephonymessagingkit/rcsservice/filedownloadrequest](https://developer.apple.com/documentation/telephonymessagingkit/rcsservice/filedownloadrequest)

# RCSService.FileDownloadRequest

**Framework:** TelephonyMessagingKit  
**Kind:** Structure  
**Availability:** iOS 26.0+

A structure that represents an RCS file download request.

## Declaration

```swift
struct FileDownloadRequest
```

## Topics

### Creating a download request

- [init(cellularServiceID:fileURL:destinationFileURL:)](filedownloadrequest/init%28cellularserviceid_fileurl_destinationfileurl_%29.md): Creates a download request instance.
- [init(cellularServiceID:fileMetadata:destinationFileURL:)](filedownloadrequest/init%28cellularserviceid_filemetadata_destinationfileurl_%29.md): Creates a download request instance.

### Accessing download request properties

- [cellularServiceID](filedownloadrequest/cellularserviceid.md): The service identifier associated with this request.
- [fileURL](filedownloadrequest/fileurl.md): The URL of the file to download.
- [destinationFileURL](filedownloadrequest/destinationfileurl.md): The destination path of the downloaded file.

### Accessing download metadata

- [RCSService.FileDownloadRequest.Metadata](filedownloadrequest/metadata.md): A structure that contains download metadata from the content server.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Transferring files

- [upload(\_:)](upload%28__%29.md): Uploads a file to the RCS content server.
- [RCSService.FileUploadRequest](fileuploadrequest.md): A structure that represents an RCS file upload request.
- [RCSService.FileUploadRequest.Metadata](fileuploadrequest/metadata.md): A structure that contains upload metadata from the content server.
- [download(\_:)](download%28__%29.md): Downloads a file from the RCS content server.
- [RCSService.FileDownloadRequest.Metadata](filedownloadrequest/metadata.md): A structure that contains download metadata from the content server.
