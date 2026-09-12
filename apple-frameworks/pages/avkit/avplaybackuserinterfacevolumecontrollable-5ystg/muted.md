> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avplaybackuserinterfacevolumecontrollable-5ystg/muted](https://developer.apple.com/documentation/avkit/avplaybackuserinterfacevolumecontrollable-5ystg/muted)

# muted

**Interface language:** Objective-C

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Controls whether audio output is temporarily silenced. When YES, audio is muted regardless of the volume level setting. Must be key-value observable.

## Declaration

```objectivec
@property (nonatomic, readwrite, getter=isMuted) BOOL muted;
```
