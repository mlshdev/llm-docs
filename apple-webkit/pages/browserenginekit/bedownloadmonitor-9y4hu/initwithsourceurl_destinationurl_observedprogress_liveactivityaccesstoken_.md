> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/bedownloadmonitor-9y4hu/initwithsourceurl:destinationurl:observedprogress:liveactivityaccesstoken:](https://developer.apple.com/documentation/browserenginekit/bedownloadmonitor-9y4hu/initwithsourceurl:destinationurl:observedprogress:liveactivityaccesstoken:)

# initWithSourceURL:destinationURL:observedProgress:liveActivityAccessToken:

**Interface language:** Objective-C

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 18.2+ · iPadOS 18.2+

Initializes a download monitor to report progress for the specified download.

## Declaration

```objectivec
- (instancetype) initWithSourceURL:(NSURL *) sourceURL destinationURL:(NSURL *) destinationURL observedProgress:(NSProgress *) observedProgress liveActivityAccessToken:(NSData *) liveActivityAccessToken;
```

## Parameters

- `sourceURL`: The location of the resource on the web that someone wants to download.
- `destinationURL`: The location of the file to which you save the resource.
- `observedProgress`: An object that you use to report the download’s progress to the system.
- `liveActivityAccessToken`: An opaque token that the system checks to verify that your networking extension can remain active while the download is in progress.

<a id="discussion"></a>

## Discussion

Generate an access token for the download by calling [createAccessToken](createaccesstoken.md).

## See Also

### Creating a download monitor

- [createAccessToken](createaccesstoken.md): Generates an opaque token that the system uses to keep your networking extension active in the background.
