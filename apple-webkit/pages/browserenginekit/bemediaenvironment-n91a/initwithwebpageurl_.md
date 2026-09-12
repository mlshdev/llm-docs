> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/bemediaenvironment-n91a/initwithwebpageurl:](https://developer.apple.com/documentation/browserenginekit/bemediaenvironment-n91a/initwithwebpageurl:)

# initWithWebPageURL:

**Interface language:** Objective-C

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+

Creates a new media playback environment identified for a webpage URL.

## Declaration

```objectivec
- (instancetype) initWithWebPageURL:(NSURL *) url;
```

## Parameters

- `url`: The URL that identifies the media playback environment.

## See Also

### Managing media life cycle

- [initWithXPCRepresentation:error:](initwithxpcrepresentation_error_.md): Creates a media session from an XPC object.
- [activateWithError:](activatewitherror_.md): Deprecated. Activates the media environment.
- [suspendWithError:](suspendwitherror_.md): Deprecated. Suspends the media environment.
