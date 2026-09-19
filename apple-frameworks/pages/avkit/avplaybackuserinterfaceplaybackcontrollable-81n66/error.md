> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avkit/avplaybackuserinterfaceplaybackcontrollable-81n66/error

# error

**Interface language:** Objective-C

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Error information when the source encounters a playback failure. Nil when playback is functioning normally. Must be key-value observable.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) NSError * error;
```
