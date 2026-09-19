> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/objectcapturesession/configuration-swift.struct/checkpointdirectory

# checkpointDirectory

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+

An optional directory to store data about session progress which may be used to speed up on-device reconstruction by passing into the `PhotogrammetrySession.Configuration`. If you provide a value for `checkpointDirectory`, it also needs to point to an empty, writable directory. If the directory is not writable or already contains data, the session moves to the `.failed(Error)` state.

## Declaration

```swift
var checkpointDirectory: URL?
```
