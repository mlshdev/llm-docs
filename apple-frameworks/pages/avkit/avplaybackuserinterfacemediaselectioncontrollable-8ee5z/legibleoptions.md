> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avplaybackuserinterfacemediaselectioncontrollable-8ee5z/legibleoptions](https://developer.apple.com/documentation/avkit/avplaybackuserinterfacemediaselectioncontrollable-8ee5z/legibleoptions)

# legibleOptions

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Array of available subtitle and caption track options.

## Declaration

```swift
@MainActor var legibleOptions: [AVPlaybackUserInterfaceMediaSelectionOption] { get }
```

<a id="discussion"></a>

## Discussion

This includes text overlays in different languages, closed captions for accessibility, forced narrative subtitles, and sign language interpretation tracks. May be empty for content without text tracks.
