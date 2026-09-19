> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/immersivemediasupport/immersivemediaremotepreviewsender/connectedreceivernames

# connectedReceiverNames

**Framework:** Immersive Media Support  
**Kind:** Instance Property  
**Availability:** macOS 26.0+

An array with the names of all receives currently receiving data from this instance. When a receiver goes offline, this array will be automatically updated.

## Declaration

```swift
var connectedReceiverNames: [String] { get }
```
