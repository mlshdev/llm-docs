> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/bedownloadmonitor-9y4hu/destinationurl](https://developer.apple.com/documentation/browserenginekit/bedownloadmonitor-9y4hu/destinationurl)

# destinationURL

**Interface language:** Objective-C

**Framework:** BrowserEngineKit  
**Kind:** Instance Property  
**Availability:** iOS 18.2+ · iPadOS 18.2+

A local file path to the downloaded file.

## Declaration

```objectivec
@property (readonly) NSURL * destinationURL;
```

<a id="discussion"></a>

## Discussion

Your browser app’s network extension writes the downloaded file to this location.

## See Also

### Getting information about a download

- [sourceURL](sourceurl.md): A URL to a remote file to download.
