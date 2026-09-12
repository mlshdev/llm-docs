> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avplaybackuserinterfacemediaselectioncontrollable-8ee5z/audiooptions](https://developer.apple.com/documentation/avkit/avplaybackuserinterfacemediaselectioncontrollable-8ee5z/audiooptions)

# audioOptions

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Array of available audio track options.

## Declaration

```swift
@MainActor var audioOptions: [AVPlaybackUserInterfaceMediaSelectionOption] { get }
```

<a id="discussion"></a>

## Discussion

This includes all audio streams provided by the media source such as different languages, director’s commentary, and alternative audio mixes. Options are ordered by preference with the primary language or default audio track typically appearing first. May be empty for content without selectable audio options.
