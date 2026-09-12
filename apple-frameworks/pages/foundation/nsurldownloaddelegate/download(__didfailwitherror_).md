> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurldownloaddelegate/download(_:didfailwitherror:)](https://developer.apple.com/documentation/foundation/nsurldownloaddelegate/download(_:didfailwitherror:))

# download(\_:didFailWithError:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.2+

Sent if the download fails or if an I/O error occurs when the file is written to disk.

## Declaration

```swift
optional func download(_ download: NSURLDownload, didFailWithError error: any Error)
```

## Parameters

- `download`: The URL download object sending the message.
- `error`: The error that caused the failure of the download.

<a id="Discussion"></a>

## Discussion

Any partially downloaded file will be deleted.

<a id="Special-Considerations"></a>

### Special Considerations

Once the delegate receives this message, it will receive no further messages for `download`.

## See Also

### Download Completion

- [downloadDidFinish(\_:)](downloaddidfinish%28__%29.md): Sent when a download object has completed downloading successfully and has written its results to disk.

# download:didFailWithError: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.2+

Sent if the download fails or if an I/O error occurs when the file is written to disk.

## Declaration

```objectivec
- (void) download:(NSURLDownload *) download didFailWithError:(NSError *) error;
```

## Parameters

- `download`: The URL download object sending the message.
- `error`: The error that caused the failure of the download.

<a id="Discussion"></a>

## Discussion

Any partially downloaded file will be deleted.

<a id="Special-Considerations"></a>

### Special Considerations

Once the delegate receives this message, it will receive no further messages for `download`.

## See Also

### Download Completion

- [downloadDidFinish:](downloaddidfinish%28__%29.md): Sent when a download object has completed downloading successfully and has written its results to disk.
