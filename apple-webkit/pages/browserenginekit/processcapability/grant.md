> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/processcapability/grant](https://developer.apple.com/documentation/browserenginekit/processcapability/grant)

# ProcessCapability.Grant

**Framework:** BrowserEngineKit  
**Kind:** Structure  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · macOS 14.3+

An object that represents the provision of a capability.

## Declaration

```swift
struct Grant
```

## Mentioned In

- [Managing the browser extension life cycle](../managing-the-browser-extension-lifecycle.md)

## Topics

### Testing and changing validity

- [isValid](grant/isvalid.md): A Boolean value that indicates whether the system honors a granted capability for the browser extension process.
- [invalidate()](grant/invalidate%28%29.md): Invalidates the grant, removing the capability from the process it was granted to.

## See Also

### Granting capabilities

- [ProcessCapability.background](background.md): A process capability for work in the background.
- [ProcessCapability.foreground](foreground.md): A process capability for work in the foreground.
- [ProcessCapability.suspended](suspended.md): A process capability that grants residency in a suspended state.
- [ProcessCapability.mediaPlaybackAndCapture(environment:)](mediaplaybackandcapture%28environment_%29.md): The helper extension process may access media hardware required for media capture and playback.
