> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/bedownloadmonitor-9bwls/destinationurl](https://developer.apple.com/documentation/browserenginekit/bedownloadmonitor-9bwls/destinationurl)

# destinationURL

**Framework:** BrowserEngineKit  
**Kind:** Instance Property  
**Availability:** iOS 18.2+ · iPadOS 18.2+

A local file path to the downloaded file.

## Declaration

```swift
@objc final let destinationURL: URL
```

<a id="discussion"></a>

## Discussion

Your browser app’s network extension writes the downloaded file to this location.

## See Also

### Getting information about a download

- [sourceURL](sourceurl.md): A URL to a remote file to download.
