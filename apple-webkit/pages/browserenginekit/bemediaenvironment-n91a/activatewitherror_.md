> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/bemediaenvironment-n91a/activatewitherror:](https://developer.apple.com/documentation/browserenginekit/bemediaenvironment-n91a/activatewitherror:)

# activateWithError:

**Interface language:** Objective-C

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ (deprecated in 27.0) · iPadOS 17.4+ (deprecated in 27.0)

Activates the media environment.

## Declaration

```objectivec
- (BOOL) activateWithError:(NSError **) error;
```

## Parameters

- `error`: A pointer to an error object that describes why the method failed, or `nil` if no error occurred. Pass `nil` to ignore the error.

## See Also

### Managing media life cycle

- [initWithWebPageURL:](initwithwebpageurl_.md): Creates a new media playback environment identified for a webpage URL.
- [initWithXPCRepresentation:error:](initwithxpcrepresentation_error_.md): Creates a media session from an XPC object.
- [suspendWithError:](suspendwitherror_.md): Deprecated. Suspends the media environment.
