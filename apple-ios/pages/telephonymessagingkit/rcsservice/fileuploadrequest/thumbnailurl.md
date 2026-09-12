> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/telephonymessagingkit/rcsservice/fileuploadrequest/thumbnailurl](https://developer.apple.com/documentation/telephonymessagingkit/rcsservice/fileuploadrequest/thumbnailurl)

# thumbnailURL

**Framework:** TelephonyMessagingKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+

An optional file URL for a thumbnail image.

## Declaration

```swift
var thumbnailURL: URL?
```

<a id="discussion"></a>

## Discussion

The RCS specification limits the thumbnail size to 10KB.

## See Also

### Accessing upload request properties

- [cellularServiceID](cellularserviceid.md): The service identifier associated with this request.
- [fileURL](fileurl.md): The URL of the file to upload.
- [contentType](contenttype.md): The content type of the file.
- [thumbnailContentType](thumbnailcontenttype.md): The content type of the thumbnail.
