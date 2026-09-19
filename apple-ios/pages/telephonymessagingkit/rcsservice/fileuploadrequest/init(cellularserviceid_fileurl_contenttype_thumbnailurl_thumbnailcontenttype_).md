> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/telephonymessagingkit/rcsservice/fileuploadrequest/init(cellularserviceid:fileurl:contenttype:thumbnailurl:thumbnailcontenttype:)

# init(cellularServiceID:fileURL:contentType:thumbnailURL:thumbnailContentType:)

**Framework:** TelephonyMessagingKit  
**Kind:** Initializer  
**Availability:** iOS 26.0+

Creates a new file upload request with the given parameters.

## Declaration

```swift
init(cellularServiceID: CellularServiceID, fileURL: URL, contentType: UTType? = nil, thumbnailURL: URL? = nil, thumbnailContentType: UTType? = nil)
```

## Parameters

- `cellularServiceID`: The service identifier associated with this request.
- `fileURL`: The URL of the file to upload.
- `contentType`: The content type of the file.
- `thumbnailURL`: An optional file URL for a thumbnail image.
- `thumbnailContentType`: The content type of the thumbnail.
