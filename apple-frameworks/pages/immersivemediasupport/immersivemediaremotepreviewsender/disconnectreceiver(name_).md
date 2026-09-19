> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/immersivemediasupport/immersivemediaremotepreviewsender/disconnectreceiver(name:)

# disconnectReceiver(name:)

**Framework:** Immersive Media Support  
**Kind:** Instance Method  
**Availability:** macOS 26.0+

Disconnects a specific remote preview receiver associated with the name provided when [connectReceiver(name:endpoint:)](connectreceiver%28name_endpoint_%29.md) was called.

## Declaration

```swift
func disconnectReceiver(name: String) async
```
