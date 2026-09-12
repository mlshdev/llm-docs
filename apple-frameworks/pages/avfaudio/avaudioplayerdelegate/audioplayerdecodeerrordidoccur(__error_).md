> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioplayerdelegate/audioplayerdecodeerrordidoccur(_:error:)](https://developer.apple.com/documentation/avfaudio/avaudioplayerdelegate/audioplayerdecodeerrordidoccur(_:error:))

# audioPlayerDecodeErrorDidOccur(\_:error:) (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 2.2+ · iPadOS 2.2+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

Tells the delegate when an audio player encounters a decoding error during playback.

## Declaration

```swift
optional func audioPlayerDecodeErrorDidOccur(_ player: AVAudioPlayer, error: (any Error)?)
```

## Parameters

- `player`: The audio player that encounters the decoding error.
- `error`: The decoding error.

# audioPlayerDecodeErrorDidOccur:error: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Tells the delegate when an audio player encounters a decoding error during playback.

## Declaration

```objectivec
- (void) audioPlayerDecodeErrorDidOccur:(AVAudioPlayer *) player error:(NSError *) error;
```

## Parameters

- `player`: The audio player that encounters the decoding error.
- `error`: The decoding error.
