> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioplayernode/play(at:)](https://developer.apple.com/documentation/avfaudio/avaudioplayernode/play(at:))

# play(at:) (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 27.0) · iPadOS 8.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.10+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

Starts or resumes playback at a time you specify.

## Declaration

```swift
func play(at when: AVAudioTime?)
```

## Parameters

- `when`: The node time to start or resume playback. Passing `nil` starts playback immediately.

<a id="Discussion"></a>

## Discussion

This node is initially in a paused state. The framework enqueues your requests to play buffers or file segments, and any necessary decoding begins immediately. Playback doesn’t begin until the player starts playing through this method.

The following example code shows how to start a player `0.5` seconds in the future:

```objc
// Start the engine and player.
NSError *nsErr = nil;
[_engine startAndReturnError:&nsErr];
if (!nsErr) {
    const float kStartDelayTime = 0.5; // sec
    AVAudioFormat *outputFormat = [_player outputFormatForBus:0];
    AVAudioFramePosition startSampleTime = _player.lastRenderTime.sampleTime + kStartDelayTime * outputFormat.sampleRate;
    AVAudioTime *startTime = [AVAudioTime timeWithSampleTime:startSampleTime atRate:outputFormat.sampleRate];
    [_player playAtTime:startTime];
}
```

## See Also

### Controlling Playback

- [prepare(withFrameCount:)](prepare%28withframecount_%29.md): Prepares the file regions or buffers you schedule for playback.
- [playAudio()](playaudio%28%29.md)
- [playAudio(at:)](playaudio%28at_%29.md)
- [play()](play%28%29.md): Deprecated. Starts or resumes playback immediately.
- [isPlaying](isplaying.md): A Boolean value that indicates whether the player is playing.
- [pause()](pause%28%29.md): Pauses the node’s playback.
- [stop()](stop%28%29.md): Clears all of the node’s events you schedule and stops playback.

# playAtTime: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 27.0) · iPadOS 8.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.10+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

Starts or resumes playback at a time you specify.

## Declaration

```objectivec
- (void) playAtTime:(AVAudioTime *) when;
```

## Parameters

- `when`: The node time to start or resume playback. Passing `nil` starts playback immediately.

<a id="Discussion"></a>

## Discussion

This node is initially in a paused state. The framework enqueues your requests to play buffers or file segments, and any necessary decoding begins immediately. Playback doesn’t begin until the player starts playing through this method.

The following example code shows how to start a player `0.5` seconds in the future:

```objc
// Start the engine and player.
NSError *nsErr = nil;
[_engine startAndReturnError:&nsErr];
if (!nsErr) {
    const float kStartDelayTime = 0.5; // sec
    AVAudioFormat *outputFormat = [_player outputFormatForBus:0];
    AVAudioFramePosition startSampleTime = _player.lastRenderTime.sampleTime + kStartDelayTime * outputFormat.sampleRate;
    AVAudioTime *startTime = [AVAudioTime timeWithSampleTime:startSampleTime atRate:outputFormat.sampleRate];
    [_player playAtTime:startTime];
}
```

## See Also

### Controlling Playback

- [prepareWithFrameCount:](prepare%28withframecount_%29.md): Prepares the file regions or buffers you schedule for playback.
- [playAndReturnError:](playaudio%28%29.md)
- [playAtTime:error:](playaudio%28at_%29.md)
- [play](play%28%29.md): Deprecated. Starts or resumes playback immediately.
- [playing](isplaying.md): A Boolean value that indicates whether the player is playing.
- [pause](pause%28%29.md): Pauses the node’s playback.
- [stop](stop%28%29.md): Clears all of the node’s events you schedule and stops playback.
