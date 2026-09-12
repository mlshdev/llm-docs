> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/immersivemediasupport/immersivemediaremotepreviewreceiver/states](https://developer.apple.com/documentation/immersivemediasupport/immersivemediaremotepreviewreceiver/states)

# states

**Framework:** Immersive Media Support  
**Kind:** Instance Property  
**Availability:** macOS 26.0+ · visionOS 26.0+

The states to use for monitoring the current state of the preview receiver so the app can monitor events.

## Declaration

```swift
var states: some AsyncSequence<ImmersiveMediaRemotePreviewReceiver.Status, Never> { get }
```
