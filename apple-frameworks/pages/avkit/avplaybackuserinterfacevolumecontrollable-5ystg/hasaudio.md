> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avplaybackuserinterfacevolumecontrollable-5ystg/hasaudio](https://developer.apple.com/documentation/avkit/avplaybackuserinterfacevolumecontrollable-5ystg/hasaudio)

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
