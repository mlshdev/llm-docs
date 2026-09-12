> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/beprocesscapability-7av05/foreground](https://developer.apple.com/documentation/browserenginekit/beprocesscapability-7av05/foreground)

# foreground

**Interface language:** Objective-C

**Framework:** BrowserEngineKit  
**Kind:** Type Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · macOS 14.3+

A capability that enables an extension process to do foreground priority work.

## Declaration

```objectivec
+ (instancetype) foreground;
```

<a id="discussion"></a>

## Discussion

Use this capability while your browser app is in the foreground to allow extensions that support the browser’s UI to run at foreground priority.

## See Also

### Granting capabilities to browser extension processes

- [background](background.md): A capability that enables an extension process to work in the background.
- [mediaPlaybackAndCaptureWithEnvironment:](mediaplaybackandcapturewithenvironment_.md): A capability that enables an extension process to access hardware that media capture and playback require.
- [suspended](suspended.md): A capability that enables an extension process to stay in a suspended state.
