> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/processcapability/background](https://developer.apple.com/documentation/browserenginekit/processcapability/background)

# ProcessCapability.background

**Framework:** BrowserEngineKit  
**Kind:** Case  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · macOS 14.3+

A process capability for work in the background.

## Declaration

```swift
case background
```

<a id="discussion"></a>

## Discussion

This capability grants the helper extension process the ability to run in the background to finish work.

## See Also

### Granting capabilities

- [ProcessCapability.foreground](foreground.md): A process capability for work in the foreground.
- [ProcessCapability.suspended](suspended.md): A process capability that grants residency in a suspended state.
- [ProcessCapability.mediaPlaybackAndCapture(environment:)](mediaplaybackandcapture%28environment_%29.md): The helper extension process may access media hardware required for media capture and playback.
- [ProcessCapability.Grant](grant.md): An object that represents the provision of a capability.
