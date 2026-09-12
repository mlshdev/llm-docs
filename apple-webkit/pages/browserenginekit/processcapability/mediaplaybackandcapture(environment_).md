> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/processcapability/mediaplaybackandcapture(environment:)](https://developer.apple.com/documentation/browserenginekit/processcapability/mediaplaybackandcapture(environment:))

# ProcessCapability.mediaPlaybackAndCapture(environment:)

**Framework:** BrowserEngineKit  
**Kind:** Case  
**Availability:** iOS 17.4+ · iPadOS 17.4+

The helper extension process may access media hardware required for media capture and playback.

## Declaration

```swift
case mediaPlaybackAndCapture(environment: MediaEnvironment)
```

<a id="discussion"></a>

## Discussion

> **Important**

>  You need to call [activate()](../mediaenvironment/activate%28%29.md) on the media environment before you grant this capability to an extension.

## See Also

### Granting capabilities

- [ProcessCapability.background](background.md): A process capability for work in the background.
- [ProcessCapability.foreground](foreground.md): A process capability for work in the foreground.
- [ProcessCapability.suspended](suspended.md): A process capability that grants residency in a suspended state.
- [ProcessCapability.Grant](grant.md): An object that represents the provision of a capability.
