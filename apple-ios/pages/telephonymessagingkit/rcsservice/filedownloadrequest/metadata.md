> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/telephonymessagingkit/rcsservice/filedownloadrequest/metadata](https://developer.apple.com/documentation/telephonymessagingkit/rcsservice/filedownloadrequest/metadata)

# RCSService.FileDownloadRequest.Metadata

**Framework:** TelephonyMessagingKit  
**Kind:** Structure  
**Availability:** iOS 26.0+

A structure that contains download metadata from the content server.

## Declaration

```swift
struct Metadata
```

<a id="overview"></a>

## Overview

You receive this type as the return value from the [download(\_:)](../download%28__%29.md) method of [RCSService](../../rcsservice.md).

## Topics

### Accessing download request properties

- [contentType](metadata/contenttype.md): The content type provided by the content server.
- [suggestedFileName](metadata/suggestedfilename.md): The file name provided by the content server.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Transferring files

- [upload(\_:)](../upload%28__%29.md): Uploads a file to the RCS content server.
- [RCSService.FileUploadRequest](../fileuploadrequest.md): A structure that represents an RCS file upload request.
- [RCSService.FileUploadRequest.Metadata](../fileuploadrequest/metadata.md): A structure that contains upload metadata from the content server.
- [download(\_:)](../download%28__%29.md): Downloads a file from the RCS content server.
- [RCSService.FileDownloadRequest](../filedownloadrequest.md): A structure that represents an RCS file download request.
