> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/immersivemediasupport/immersivemediaremotepreviewreceiver/states

# states

**Framework:** Immersive Media Support  
**Kind:** Instance Property  
**Availability:** macOS 26.0+ · visionOS 26.0+

The states to use for monitoring the current state of the preview receiver so the app can monitor events.

## Declaration

```swift
var states: some AsyncSequence<ImmersiveMediaRemotePreviewReceiver.Status, Never> { get }
```
