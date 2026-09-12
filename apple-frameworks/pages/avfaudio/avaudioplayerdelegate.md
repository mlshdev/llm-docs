> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioplayerdelegate](https://developer.apple.com/documentation/avfaudio/avaudioplayerdelegate)

# AVAudioPlayerDelegate (Swift)

**Framework:** AVFAudio  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A protocol that defines the methods to respond to audio playback events and decoding errors.

## Declaration

```swift
@MainActor protocol AVAudioPlayerDelegate : NSObjectProtocol
```

<a id="overview"></a>

## Overview

All of the methods in this protocol are optional.

## Topics

### Responding to Playback Completion

- [audioPlayerDidFinishPlaying(\_:successfully:)](avaudioplayerdelegate/audioplayerdidfinishplaying%28__successfully_%29.md): Tells the delegate when the audio finishes playing.

### Responding to Audio Decoding Errors

- [audioPlayerDecodeErrorDidOccur(\_:error:)](avaudioplayerdelegate/audioplayerdecodeerrordidoccur%28__error_%29.md): Tells the delegate when an audio player encounters a decoding error during playback.

### Responding to Audio Interruptions

- [audioPlayerBeginInterruption(\_:)](avaudioplayerdelegate/audioplayerbegininterruption%28__%29.md): Deprecated. Tells the delegate when the system interrupts the audio player’s playback.
- [audioPlayerEndInterruption(\_:)](avaudioplayerdelegate/audioplayerendinterruption%28__%29.md): Deprecated. Tells the delegate when the audio session interruption ends.
- [audioPlayerEndInterruption(\_:withOptions:)](avaudioplayerdelegate/audioplayerendinterruption%28__withoptions_%29.md): Deprecated. Tells the delegate when the audio session interruption ends with options.
- [audioPlayerEndInterruption(\_:withFlags:)](avaudioplayerdelegate/audioplayerendinterruption%28__withflags_%29.md): Deprecated. Tells the delegate when the audio session interruption ends with flags.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Responding to player events

- [delegate](avaudioplayer/delegate.md): The delegate object for the audio player.

# AVAudioPlayerDelegate (Objective-C)

**Framework:** AVFAudio  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A protocol that defines the methods to respond to audio playback events and decoding errors.

## Declaration

```objectivec
@protocol AVAudioPlayerDelegate <NSObject>
```

<a id="overview"></a>

## Overview

All of the methods in this protocol are optional.

## Topics

### Responding to Playback Completion

- [audioPlayerDidFinishPlaying:successfully:](avaudioplayerdelegate/audioplayerdidfinishplaying%28__successfully_%29.md): Tells the delegate when the audio finishes playing.

### Responding to Audio Decoding Errors

- [audioPlayerDecodeErrorDidOccur:error:](avaudioplayerdelegate/audioplayerdecodeerrordidoccur%28__error_%29.md): Tells the delegate when an audio player encounters a decoding error during playback.

### Responding to Audio Interruptions

- [audioPlayerBeginInterruption:](avaudioplayerdelegate/audioplayerbegininterruption%28__%29.md): Deprecated. Tells the delegate when the system interrupts the audio player’s playback.
- [audioPlayerEndInterruption:](avaudioplayerdelegate/audioplayerendinterruption%28__%29.md): Deprecated. Tells the delegate when the audio session interruption ends.
- [audioPlayerEndInterruption:withOptions:](avaudioplayerdelegate/audioplayerendinterruption%28__withoptions_%29.md): Deprecated. Tells the delegate when the audio session interruption ends with options.
- [audioPlayerEndInterruption:withFlags:](avaudioplayerdelegate/audioplayerendinterruption%28__withflags_%29.md): Deprecated. Tells the delegate when the audio session interruption ends with flags.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Responding to player events

- [delegate](avaudioplayer/delegate.md): The delegate object for the audio player.
