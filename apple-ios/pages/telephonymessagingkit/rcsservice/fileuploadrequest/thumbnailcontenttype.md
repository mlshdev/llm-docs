> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/telephonymessagingkit/rcsservice/fileuploadrequest/thumbnailcontenttype](https://developer.apple.com/documentation/telephonymessagingkit/rcsservice/fileuploadrequest/thumbnailcontenttype)

# thumbnailContentType

**Framework:** TelephonyMessagingKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+

The content type of the thumbnail.

## Declaration

```swift
var thumbnailContentType: UTType?
```

<a id="discussion"></a>

## Discussion

If you don’t set this property, the framework infers a content type from the URL.

## See Also

### Accessing upload request properties

- [cellularServiceID](cellularserviceid.md): The service identifier associated with this request.
- [fileURL](fileurl.md): The URL of the file to upload.
- [contentType](contenttype.md): The content type of the file.
- [thumbnailURL](thumbnailurl.md): An optional file URL for a thumbnail image.
