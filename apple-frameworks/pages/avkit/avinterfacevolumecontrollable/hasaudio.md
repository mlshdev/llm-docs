> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avkit/avinterfacevolumecontrollable/hasaudio

# hasAudio

**Interface language:** Objective-C

**Framework:** AVKit  
**Kind:** Instance Property

Indicates whether the media contains audio tracks and can produce sound output. Returns NO for video-only content, silent content, or when audio tracks are unavailable. Must be key-value observable.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL hasAudio;
```
