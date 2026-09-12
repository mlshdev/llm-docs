> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioplayerdelegate/audioplayerbegininterruption(_:)](https://developer.apple.com/documentation/avfaudio/avaudioplayerdelegate/audioplayerbegininterruption(_:))

# audioPlayerBeginInterruption(\_:) (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 2.2+ (deprecated in 8.0) · iPadOS 2.2+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS 9.0+ · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Tells the delegate when the system interrupts the audio player’s playback.

> Observe audio session interruption notifications instead. See [Handling audio interruptions](../handling-audio-interruptions.md) for more information.

## Declaration

```swift
optional func audioPlayerBeginInterruption(_ player: AVAudioPlayer)
```

## Parameters

- `player`: The interrupted audio player.

## See Also

### Responding to Audio Interruptions

- [audioPlayerEndInterruption(\_:)](audioplayerendinterruption%28__%29.md): Deprecated. Tells the delegate when the audio session interruption ends.
- [audioPlayerEndInterruption(\_:withOptions:)](audioplayerendinterruption%28__withoptions_%29.md): Deprecated. Tells the delegate when the audio session interruption ends with options.
- [audioPlayerEndInterruption(\_:withFlags:)](audioplayerendinterruption%28__withflags_%29.md): Deprecated. Tells the delegate when the audio session interruption ends with flags.

# audioPlayerBeginInterruption: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 2.2+ (deprecated in 8.0) · iPadOS 2.2+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Tells the delegate when the system interrupts the audio player’s playback.

> Observe audio session interruption notifications instead. See [Handling audio interruptions](../handling-audio-interruptions.md) for more information.

## Declaration

```objectivec
- (void) audioPlayerBeginInterruption:(AVAudioPlayer *) player;
```

## Parameters

- `player`: The interrupted audio player.

## See Also

### Responding to Audio Interruptions

- [audioPlayerEndInterruption:](audioplayerendinterruption%28__%29.md): Deprecated. Tells the delegate when the audio session interruption ends.
- [audioPlayerEndInterruption:withOptions:](audioplayerendinterruption%28__withoptions_%29.md): Deprecated. Tells the delegate when the audio session interruption ends with options.
- [audioPlayerEndInterruption:withFlags:](audioplayerendinterruption%28__withflags_%29.md): Deprecated. Tells the delegate when the audio session interruption ends with flags.
