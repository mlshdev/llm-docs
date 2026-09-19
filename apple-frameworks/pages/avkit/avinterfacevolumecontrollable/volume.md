> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avkit/avinterfacevolumecontrollable/volume

# volume

**Interface language:** Objective-C

**Framework:** AVKit  
**Kind:** Instance Property

The audio output level as a normalized value between 0.0 (completely silent) and 1.0 (maximum system volume). This value is independent of the muted state and represents the user’s volume preference. Must be key-value observable.

## Declaration

```objectivec
@property (nonatomic, readwrite) float volume;
```
