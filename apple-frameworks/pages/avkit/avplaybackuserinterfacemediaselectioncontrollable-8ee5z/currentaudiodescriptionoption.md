> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avkit/avplaybackuserinterfacemediaselectioncontrollable-8ee5z/currentaudiodescriptionoption

# currentAudioDescriptionOption

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

The currently selected audio description track.

## Declaration

```swift
@MainActor var currentAudioDescriptionOption: AVPlaybackUserInterfaceMediaSelectionOption? { get set }
```

<a id="discussion"></a>

## Discussion

Should be one of the options in [audioDescriptionOptions](audiodescriptionoptions.md).
