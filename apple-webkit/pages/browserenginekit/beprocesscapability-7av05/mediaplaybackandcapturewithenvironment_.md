> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/beprocesscapability-7av05/mediaplaybackandcapturewithenvironment:](https://developer.apple.com/documentation/browserenginekit/beprocesscapability-7av05/mediaplaybackandcapturewithenvironment:)

# mediaPlaybackAndCaptureWithEnvironment:

**Interface language:** Objective-C

**Framework:** BrowserEngineKit  
**Kind:** Type Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+

A capability that enables an extension process to access hardware that media capture and playback require.

## Declaration

```objectivec
+ (instancetype) mediaPlaybackAndCaptureWithEnvironment:(BEMediaEnvironment *) environment;
```

## See Also

### Granting capabilities to browser extension processes

- [background](background.md): A capability that enables an extension process to work in the background.
- [foreground](foreground.md): A capability that enables an extension process to do foreground priority work.
- [suspended](suspended.md): A capability that enables an extension process to stay in a suspended state.
