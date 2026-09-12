> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/bedownloadmonitor-9bwls/init(sourceurl:destinationurl:observedprogress:liveactivityaccesstoken:)](https://developer.apple.com/documentation/browserenginekit/bedownloadmonitor-9bwls/init(sourceurl:destinationurl:observedprogress:liveactivityaccesstoken:))

# init(sourceURL:destinationURL:observedProgress:liveActivityAccessToken:)

**Framework:** BrowserEngineKit  
**Kind:** Initializer  
**Availability:** iOS 18.2+ · iPadOS 18.2+

Initializes a download monitor to report progress for the specified download.

## Declaration

```swift
@objc(initWithSourceURL:destinationURL:observedProgress:liveActivityAccessToken:) init(sourceURL: URL, destinationURL: URL, observedProgress: Progress, liveActivityAccessToken: Data)
```

## Parameters

- `sourceURL`: The location of the resource on the web that someone wants to download.
- `destinationURL`: The location of the file to which you save the resource.
- `observedProgress`: An object you use to report the download’s progress to the system.
- `liveActivityAccessToken`: An opaque token that the system checks to verify that your networking extension can remain active while the download is in progress.

<a id="discussion"></a>

## Discussion

Generate an access token for the download by calling [createAccessToken()](createaccesstoken%28%29.md).

## See Also

### Creating a download monitor

- [createAccessToken()](createaccesstoken%28%29.md): Generates an opaque token that the system uses to keep your networking extension active in the background.
