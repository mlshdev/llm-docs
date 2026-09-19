> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avkit/avinterfacemetadata/audioonly

# audioOnly

**Interface language:** Objective-C

**Framework:** AVKit  
**Kind:** Instance Property

Indicates whether the content is audio-only (no video component). Used to optimize UI layout and player controls for audio-focused presentations. When YES, video-related controls and layouts should be hidden or adapted for audio-only playback experiences.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isAudioOnly) BOOL audioOnly;
```
