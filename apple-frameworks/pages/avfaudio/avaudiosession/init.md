> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfaudio/avaudiosession/init

# init

**Interface language:** Objective-C

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ (deprecated in 10.0) · iPadOS 3.0+ (deprecated in 10.0) · Mac Catalyst 14.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0)

Gets a reference to the singleton audio session.

> `AVAudioSession` is a singleton. Use the [sharedInstance](sharedinstance%28%29.md) instead of `init`.

## Declaration

```objectivec
- (instancetype) init;
```
