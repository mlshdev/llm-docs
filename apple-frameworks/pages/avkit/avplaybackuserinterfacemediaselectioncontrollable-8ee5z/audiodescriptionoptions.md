> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avplaybackuserinterfacemediaselectioncontrollable-8ee5z/audiodescriptionoptions](https://developer.apple.com/documentation/avkit/avplaybackuserinterfacemediaselectioncontrollable-8ee5z/audiodescriptionoptions)

# audioDescriptionOptions

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Array of available audio description track options.

## Declaration

```swift
@MainActor var audioDescriptionOptions: [AVPlaybackUserInterfaceMediaSelectionOption] { get }
```

<a id="discussion"></a>

## Discussion

Audio description tracks provide narrated descriptions of visual content for visually impaired viewers. Audio description options are distinct from those in [audioOptions](audiooptions.md) — they provide a narration layer played alongside the primary audio rather than replacing it. Options are ordered by preference with the primary language or default audio description track typically appearing first. May be empty for content without audio description tracks.
