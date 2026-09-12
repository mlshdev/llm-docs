> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosequencerusercallback](https://developer.apple.com/documentation/avfaudio/avaudiosequencerusercallback)

# AVAudioSequencerUserCallback (Swift)

**Framework:** AVFAudio  
**Kind:** Type Alias  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

A callback the sequencer calls asynchronously during playback when it encounters a user event.

## Declaration

```swift
typealias AVAudioSequencerUserCallback = (AVMusicTrack, Data, AVMusicTimeStamp) -> Void
```

## Parameters

- `track`: The track that contains the user event.
- `userData`: The data used to initialize the user event.
- `timeStamp`: The beat location of the event.

<a id="Discussion"></a>

## Discussion

The sequencer delivers this callback asynchronously to the rendering thread on an internal queue. The `userData` this returns is unique to each [AVMusicUserEvent](avmusicuserevent.md) instance.

## See Also

### Setting the User Callback

- [setUserCallback(\_:)](avaudiosequencer/setusercallback%28__%29.md): Adds a callback that the sequencer calls each time it encounters a user event during playback.

# AVAudioSequencerUserCallback (Objective-C)

**Framework:** AVFAudio  
**Kind:** Type Alias  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

A callback the sequencer calls asynchronously during playback when it encounters a user event.

## Declaration

```objectivec
typedef void (^)(AVMusicTrack *, NSData *, double) AVAudioSequencerUserCallback;
```

## Parameters

- `track`: The track that contains the user event.
- `userData`: The data used to initialize the user event.
- `timeStamp`: The beat location of the event.

<a id="Discussion"></a>

## Discussion

The sequencer delivers this callback asynchronously to the rendering thread on an internal queue. The `userData` this returns is unique to each [AVMusicUserEvent](avmusicuserevent.md) instance.

## See Also

### Setting the User Callback

- [setUserCallback:](avaudiosequencer/setusercallback%28__%29.md): Adds a callback that the sequencer calls each time it encounters a user event during playback.
