> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioplayerdelegate/audioplayerdidfinishplaying(_:successfully:)](https://developer.apple.com/documentation/avfaudio/avaudioplayerdelegate/audioplayerdidfinishplaying(_:successfully:))

# audioPlayerDidFinishPlaying(\_:successfully:) (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 2.2+ · iPadOS 2.2+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

Tells the delegate when the audio finishes playing.

## Declaration

```swift
optional func audioPlayerDidFinishPlaying(_ player: AVAudioPlayer, successfully flag: Bool)
```

## Parameters

- `player`: The audio player that finishes playing.
- `flag`: A Boolean value that indicates whether the audio finishes playing successfully.

<a id="Discussion"></a>

## Discussion

The system doesn’t call this method on an audio interruption.

# audioPlayerDidFinishPlaying:successfully: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Tells the delegate when the audio finishes playing.

## Declaration

```objectivec
- (void) audioPlayerDidFinishPlaying:(AVAudioPlayer *) player successfully:(BOOL) flag;
```

## Parameters

- `player`: The audio player that finishes playing.
- `flag`: A Boolean value that indicates whether the audio finishes playing successfully.

<a id="Discussion"></a>

## Discussion

The system doesn’t call this method on an audio interruption.
