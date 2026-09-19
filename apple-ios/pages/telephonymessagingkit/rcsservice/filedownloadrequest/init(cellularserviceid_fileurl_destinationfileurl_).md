> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/telephonymessagingkit/rcsservice/filedownloadrequest/init(cellularserviceid:fileurl:destinationfileurl:)

# init(cellularServiceID:fileURL:destinationFileURL:)

**Framework:** TelephonyMessagingKit  
**Kind:** Initializer  
**Availability:** iOS 26.0+

Creates a download request instance.

## Declaration

```swift
init(cellularServiceID: CellularServiceID, fileURL: URL, destinationFileURL: URL)
```

## Parameters

- `cellularServiceID`: The service identifier associated with this request.
- `fileURL`: The URL of the file to download.
- `destinationFileURL`: The destination path, including the file name, of the downloaded file.

## See Also

### Creating a download request

- [init(cellularServiceID:fileMetadata:destinationFileURL:)](init%28cellularserviceid_filemetadata_destinationfileurl_%29.md): Creates a download request instance.
