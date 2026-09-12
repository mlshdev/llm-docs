> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurldownloaddelegate/downloaddidfinish(_:)](https://developer.apple.com/documentation/foundation/nsurldownloaddelegate/downloaddidfinish(_:))

# downloadDidFinish(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.2+

Sent when a download object has completed downloading successfully and has written its results to disk.

## Declaration

```swift
optional func downloadDidFinish(_ download: NSURLDownload)
```

## Parameters

- `download`: The URL download object sending the message.

<a id="Discussion"></a>

## Discussion

The delegate will receive no further messages for `download`.

## See Also

### Download Completion

- [download(\_:didFailWithError:)](download%28__didfailwitherror_%29.md): Sent if the download fails or if an I/O error occurs when the file is written to disk.

# downloadDidFinish: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.2+

Sent when a download object has completed downloading successfully and has written its results to disk.

## Declaration

```objectivec
- (void) downloadDidFinish:(NSURLDownload *) download;
```

## Parameters

- `download`: The URL download object sending the message.

<a id="Discussion"></a>

## Discussion

The delegate will receive no further messages for `download`.

## See Also

### Download Completion

- [download:didFailWithError:](download%28__didfailwitherror_%29.md): Sent if the download fails or if an I/O error occurs when the file is written to disk.
