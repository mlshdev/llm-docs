> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/telephonymessagingkit/rcsservice/filedownloadrequest/init(cellularserviceid:filemetadata:destinationfileurl:)](https://developer.apple.com/documentation/telephonymessagingkit/rcsservice/filedownloadrequest/init(cellularserviceid:filemetadata:destinationfileurl:))

# init(cellularServiceID:fileMetadata:destinationFileURL:)

**Framework:** TelephonyMessagingKit  
**Kind:** Initializer  
**Availability:** iOS 26.5+

Creates a download request instance.

## Declaration

```swift
init(cellularServiceID: CellularServiceID, fileMetadata: RCSFileTransferMetadata, destinationFileURL: URL)
```

## Parameters

- `cellularServiceID`: The service identifier associated with this request.
- `fileMetadata`: The file metadata containing the URL of the file to download.
- `destinationFileURL`: The destination path, including the file name, of the downloaded file.

<a id="discussion"></a>

## Discussion

Use this initializer when downloading end-to-end encrypted files.

## See Also

### Creating a download request

- [init(cellularServiceID:fileURL:destinationFileURL:)](init%28cellularserviceid_fileurl_destinationfileurl_%29.md): Creates a download request instance.
