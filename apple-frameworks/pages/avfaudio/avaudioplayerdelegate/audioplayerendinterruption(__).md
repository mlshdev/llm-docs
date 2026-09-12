> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioplayerdelegate/audioplayerendinterruption(_:)](https://developer.apple.com/documentation/avfaudio/avaudioplayerdelegate/audioplayerendinterruption(_:))

# audioPlayerEndInterruption(\_:) (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 2.2+ (deprecated in 6.0) · iPadOS 2.2+ (deprecated in 6.0) · Mac Catalyst 2.2+ (deprecated in 6.0) · tvOS 9.0+ · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Tells the delegate when the audio session interruption ends.

> Observe audio session interruption notifications instead. See [Handling audio interruptions](../handling-audio-interruptions.md) for more information.

## Declaration

```swift
optional func audioPlayerEndInterruption(_ player: AVAudioPlayer)
```

## Parameters

- `player`: The audio player with the interruption that ends.

## See Also

### Responding to Audio Interruptions

- [audioPlayerBeginInterruption(\_:)](audioplayerbegininterruption%28__%29.md): Deprecated. Tells the delegate when the system interrupts the audio player’s playback.
- [audioPlayerEndInterruption(\_:withOptions:)](audioplayerendinterruption%28__withoptions_%29.md): Deprecated. Tells the delegate when the audio session interruption ends with options.
- [audioPlayerEndInterruption(\_:withFlags:)](audioplayerendinterruption%28__withflags_%29.md): Deprecated. Tells the delegate when the audio session interruption ends with flags.

# audioPlayerEndInterruption: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 2.2+ (deprecated in 6.0) · iPadOS 2.2+ (deprecated in 6.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Tells the delegate when the audio session interruption ends.

> Observe audio session interruption notifications instead. See [Handling audio interruptions](../handling-audio-interruptions.md) for more information.

## Declaration

```objectivec
- (void) audioPlayerEndInterruption:(AVAudioPlayer *) player;
```

## Parameters

- `player`: The audio player with the interruption that ends.

## See Also

### Responding to Audio Interruptions

- [audioPlayerBeginInterruption:](audioplayerbegininterruption%28__%29.md): Deprecated. Tells the delegate when the system interrupts the audio player’s playback.
- [audioPlayerEndInterruption:withOptions:](audioplayerendinterruption%28__withoptions_%29.md): Deprecated. Tells the delegate when the audio session interruption ends with options.
- [audioPlayerEndInterruption:withFlags:](audioplayerendinterruption%28__withflags_%29.md): Deprecated. Tells the delegate when the audio session interruption ends with flags.
