> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/processcapability/foreground](https://developer.apple.com/documentation/browserenginekit/processcapability/foreground)

# ProcessCapability.foreground

**Framework:** BrowserEngineKit  
**Kind:** Case  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · macOS 14.3+

A process capability for work in the foreground.

## Declaration

```swift
case foreground
```

## Mentioned In

- [Managing the browser extension life cycle](../managing-the-browser-extension-lifecycle.md)

<a id="discussion"></a>

## Discussion

This capability grants the helper extension process the ability to run at foreground priority and work on behalf of the host process while the host process is in the foreground.

Use this capability while your browser app is in the foreground to allow extensions that support the browser’s UI to run at foreground priority.

## See Also

### Granting capabilities

- [ProcessCapability.background](background.md): A process capability for work in the background.
- [ProcessCapability.suspended](suspended.md): A process capability that grants residency in a suspended state.
- [ProcessCapability.mediaPlaybackAndCapture(environment:)](mediaplaybackandcapture%28environment_%29.md): The helper extension process may access media hardware required for media capture and playback.
- [ProcessCapability.Grant](grant.md): An object that represents the provision of a capability.
