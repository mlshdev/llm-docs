> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/musickit/musicplayer/queue/entry/transientitem

# transientItem

**Framework:** MusicKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 14.0+ · tvOS 15.0+ · visionOS 1.0+

A music item that corresponds to a recently inserted entry in the playback queue that has underlying items the music player still needs to resolve.

## Declaration

```swift
var transientItem: (any PlayableMusicItem)? { get }
```
