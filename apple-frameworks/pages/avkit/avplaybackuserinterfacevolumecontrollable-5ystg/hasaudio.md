> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avkit/avplaybackuserinterfacevolumecontrollable-5ystg/hasaudio

# hasAudio

**Interface language:** Objective-C

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Indicates whether the media contains audio tracks and can produce sound output. Returns NO for video-only content, silent content, or when audio tracks are unavailable. Must be key-value observable.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL hasAudio;
```
