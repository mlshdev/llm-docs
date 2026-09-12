> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/bedownloadmonitor-9bwls/createaccesstoken()](https://developer.apple.com/documentation/browserenginekit/bedownloadmonitor-9bwls/createaccesstoken())

# createAccessToken()

**Framework:** BrowserEngineKit  
**Kind:** Type Method  
**Availability:** iOS 18.2+ · iPadOS 18.2+

Generates an opaque token that the system uses to keep your networking extension active in the background.

## Declaration

```swift
@objc(createAccessToken) static func createAccessToken() -> Data?
```

<a id="discussion"></a>

## Discussion

Use this method to generate a token that you pass to [init(sourceURL:destinationURL:observedProgress:liveActivityAccessToken:)](init%28sourceurl_destinationurl_observedprogress_liveactivityaccesstoken_%29.md).

## See Also

### Creating a download monitor

- [init(sourceURL:destinationURL:observedProgress:liveActivityAccessToken:)](init%28sourceurl_destinationurl_observedprogress_liveactivityaccesstoken_%29.md): Initializes a download monitor to report progress for the specified download.
