> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/bedownloadmonitor-9y4hu/createaccesstoken](https://developer.apple.com/documentation/browserenginekit/bedownloadmonitor-9y4hu/createaccesstoken)

# createAccessToken

**Interface language:** Objective-C

**Framework:** BrowserEngineKit  
**Kind:** Type Method  
**Availability:** iOS 18.2+ · iPadOS 18.2+

Generates an opaque token that the system uses to keep your networking extension active in the background.

## Declaration

```objectivec
+ (NSData *) createAccessToken;
```

<a id="discussion"></a>

## Discussion

Use this method to generate a token that you pass to [initWithSourceURL:destinationURL:observedProgress:liveActivityAccessToken:](initwithsourceurl_destinationurl_observedprogress_liveactivityaccesstoken_.md).

## See Also

### Creating a download monitor

- [initWithSourceURL:destinationURL:observedProgress:liveActivityAccessToken:](initwithsourceurl_destinationurl_observedprogress_liveactivityaccesstoken_.md): Initializes a download monitor to report progress for the specified download.
