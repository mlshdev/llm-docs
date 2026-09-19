> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avkit/avplaybackuserinterfacemediaselectioncontrollable-2fftn/audiodescriptionoptions

# audioDescriptionOptions

**Interface language:** Objective-C

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Array of available audio description track options. Audio description tracks provide narrated descriptions of visual content for visually impaired viewers. Audio description options are distinct from those in `audioOptions` — they provide a narration layer played alongside the primary audio rather than replacing it. Options are ordered by preference with the primary language or default audio description track typically appearing first. May be empty for content without audio description tracks. Must be key-value observable.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSArray<AVPlaybackUserInterfaceMediaSelectionOption *> * audioDescriptionOptions;
```
