> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-a0a4b8d281c3; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/browserenginekit/bedownloadmonitor-9bwls/sourceurl

# sourceURL

**Framework:** BrowserEngineKit  
**Kind:** Instance Property  
**Availability:** iOS 18.2+ · iPadOS 18.2+

A URL to a remote file to download.

## Declaration

```swift
@objc final let sourceURL: URL
```

<a id="discussion"></a>

## Discussion

Your browser app’s network extension retrieves the downloaded file from this location.

## See Also

### Getting information about a download

- [destinationURL](destinationurl.md): A local file path to the downloaded file.
