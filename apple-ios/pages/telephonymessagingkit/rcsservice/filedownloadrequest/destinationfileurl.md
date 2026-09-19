> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/telephonymessagingkit/rcsservice/filedownloadrequest/destinationfileurl

# destinationFileURL

**Framework:** TelephonyMessagingKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+

The destination path of the downloaded file.

## Declaration

```swift
var destinationFileURL: URL
```

<a id="discussion"></a>

## Discussion

This URL path needs to include the file name.

## See Also

### Accessing download request properties

- [cellularServiceID](cellularserviceid.md): The service identifier associated with this request.
- [fileURL](fileurl.md): The URL of the file to download.
